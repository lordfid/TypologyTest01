import type {
  AnswerRecord,
  CognitiveFunction,
  ContextType,
  Question,
  QuestionModule,
  RawScoreResult,
  ResponseForm,
  TypologySystem,
} from "../types";
import {
  addOpportunity,
  addSelectedScores,
  flattenScoreBundle,
  maxPositiveByPath,
  normalizeFlatStats,
  type FlatScoreMap,
  type FlatStatMap,
} from "./scoreSchema";

const increment = <K extends string>(target: Partial<Record<K, number>>, key: K, amount = 1): void => {
  target[key] = (target[key] ?? 0) + amount;
};

const flattenOptions = (question: Question): FlatScoreMap[] =>
  question.options.map((option) => flattenScoreBundle(option.scores));

const hasPathPrefix = (map: FlatScoreMap, prefix: string): boolean =>
  Object.keys(map).some((path) => path.startsWith(prefix));

export function calculateRawScores(answers: AnswerRecord[], bank: Question[]): RawScoreResult {
  const questionById = new Map(bank.map((question) => [question.id, question]));
  const stats: FlatStatMap = {};
  const selectedOptionIds: Record<string, string> = {};
  const answeredQuestions: string[] = [];
  const skippedQuestions: string[] = [];
  const contextCounts: Partial<Record<ContextType, number>> = {};
  const moduleCounts: Partial<Record<QuestionModule, number>> = {};
  const systemOpportunityCounts: Partial<Record<TypologySystem, number>> = {};
  const functionOpportunityCounts: Partial<Record<CognitiveFunction, number>> = {};
  const responseFormCounts: Partial<Record<ResponseForm, number>> = {};
  const contradictionNotes: string[] = [];
  let idealizedAnswerCount = 0;
  let stressAnswerCount = 0;
  let totalQuestionsSeen = 0;

  for (const answer of answers) {
    const question = questionById.get(answer.questionId);
    if (!question) {
      contradictionNotes.push(`Jawaban untuk ${answer.questionId} tidak punya pertanyaan yang cocok.`);
      continue;
    }

    totalQuestionsSeen += 1;
    increment(contextCounts, question.contextType);
    increment(moduleCounts, question.module);
    for (const system of question.systemsMeasured) increment(systemOpportunityCounts, system);
    for (const fn of question.assessmentBoundary.likelyFunctions) increment(functionOpportunityCounts, fn);

    const optionScoreMaps = flattenOptions(question);
    const opportunityMax = maxPositiveByPath(optionScoreMaps);
    const selectedOption = answer.optionId
      ? question.options.find((option) => option.id === answer.optionId)
      : undefined;
    const answered = Boolean(selectedOption) && !answer.skipped;

    addOpportunity(stats, opportunityMax, answered);

    if (!answered || !selectedOption) {
      skippedQuestions.push(question.id);
      continue;
    }

    selectedOptionIds[question.id] = selectedOption.id;
    answeredQuestions.push(question.id);
    increment(responseFormCounts, selectedOption.responseForm);
    const selectedScores = flattenScoreBundle(selectedOption.scores);
    addSelectedScores(stats, selectedScores);

    if ((selectedScores["bias.idealized"] ?? 0) > 0 || selectedOption.possibleBias?.includes("ideal")) {
      idealizedAnswerCount += 1;
    }
    if (
      (selectedScores["bias.stress-heavy"] ?? 0) > 0 ||
      selectedOption.stressClue ||
      hasPathPrefix(selectedScores, "stress.") ||
      hasPathPrefix(selectedScores, "defense.")
    ) {
      stressAnswerCount += 1;
    }
  }

  const normalized = normalizeFlatStats(stats);
  return {
    byPath: normalized,
    selectedOptionIds,
    answeredQuestions,
    skippedQuestions,
    contextCounts,
    moduleCounts,
    systemOpportunityCounts,
    functionOpportunityCounts,
    responseFormCounts,
    totalQuestionsSeen,
    totalAnswered: answeredQuestions.length,
    totalSkipped: skippedQuestions.length,
    idealizedAnswerCount,
    stressAnswerCount,
    contradictionNotes,
  };
}
