import type {
  AnswerOption,
  AssessmentBoundary,
  CognitiveFunction,
  ContextType,
  PartialScoreBundle,
  Question,
  QuestionModule,
  ResponseForm,
  TypologySystem
} from "../types";
import { optionProfiles, MODULE_CONFIGS, type OptionProfileId, type ModuleConfig } from "./optionProfilesAndModules";
import { MAIN_SCENARIOS_PART1, type ScenarioSeed } from "./questionsDataMainPart1";
import { MAIN_SCENARIOS_PART2 } from "./questionsDataMainPart2";
import { TIE_SCENARIOS, type TieScenarioSeed } from "./questionsDataTie";

export const TEST_NAME = "Tes Kepribadian Mendalam" as const;
export const TEST_INTRO_NOTE = "Jika adegan tidak sama persis dengan hidupmu, pilih jawaban yang paling dekat dengan caramu menghadapi rasa yang serupa.";
export const FALLBACK_REMINDER = "Pilih respons yang paling dekat, bukan respons yang paling ideal.";

const MAIN_SCENARIOS: ScenarioSeed[] = [...MAIN_SCENARIOS_PART1, ...MAIN_SCENARIOS_PART2];

function buildAssessmentBoundary(config: ModuleConfig): AssessmentBoundary {
  return {
    canMeasure: config.canMeasure,
    shouldNotMeasure: config.shouldNotMeasure,
    likelyFunctions: config.likelyFunctions,
    unlikelyFunctions: config.unlikelyFunctions,
    likelyMotives: config.likelyMotives,
    invalidScoringWarnings: config.invalidScoringWarnings,
  };
}

function buildOption(questionId: string, index: number, profileId: OptionProfileId): AnswerOption {
  const profile = optionProfiles[profileId];
  if (!profile) {
    throw new Error(`Profile ${profileId} not found in optionProfiles`);
  }
  return {
    id: `${questionId}-o${index + 1}`,
    text: profile.text,
    responseForm: profile.responseForm,
    primarySignal: profile.primarySignal,
    secondarySignal: profile.secondarySignal,
    antiTieSignal: profile.antiTieSignal,
    functionPositionSignal: profile.functionPositionSignal,
    interpretationTag: profile.interpretationTag,
    evidenceText: profile.evidenceText,
    doNotInfer: profile.doNotInfer,
    possibleBias: profile.possibleBias,
    stressClue: profile.stressClue,
    scores: profile.scores,
  };
}

function buildMainQuestion(seed: ScenarioSeed, index: number): Question {
  const config = MODULE_CONFIGS[seed.module];
  const id = `q-${seed.id}`;
  return {
    id,
    phase: "main",
    module: seed.module,
    situationIntent: config.situationIntent,
    systemsMeasured: config.systemsMeasured,
    notMeasuredHere: config.notMeasuredHere,
    assessmentBoundary: buildAssessmentBoundary(config),
    target: `main-${seed.module}-${index + 1}`,
    contextType: seed.contextType,
    memoryAnchor: config.memoryAnchor,
    expectedMemoryTrigger: config.expectedMemoryTrigger,
    emotionalPressure: config.emotionalPressure,
    actionPressure: config.actionPressure,
    responseType: config.responseType,
    functionContext: config.functionContext,
    scoringReason: config.scoringReason,
    text: seed.text,
    reminder: TEST_INTRO_NOTE,
    fallbackReminder: FALLBACK_REMINDER,
    options: seed.optionProfileIds.map((profileId, optionIndex) => buildOption(id, optionIndex, profileId)),
  };
}

function buildTieOption(questionId: string, index: number, text: string, scores: PartialScoreBundle, tag: string): AnswerOption {
  const responseForms: ResponseForm[] = ["menghadapi", "mengamati", "menunda", "memperbaiki", "ucapan", "menguji"];
  return {
    id: `${questionId}-o${index + 1}`,
    text,
    responseForm: responseForms[index % responseForms.length],
    primarySignal: `tie-break ${tag}`,
    secondarySignal: "jawaban pembeda yang sengaja dibuat lebih tajam",
    interpretationTag: tag,
    evidenceText: "Pilihan ini dipakai sebagai sinyal kuat karena membedakan dua pola yang sering tampak mirip dari luar.",
    doNotInfer: ["Jangan membaca pilihan ini sendirian tanpa skor utama.", "Bukan bukti mutlak tentang tipe."],
    scores,
  };
}

function mixScores(a: PartialScoreBundle, b: PartialScoreBundle): PartialScoreBundle {
  const out: PartialScoreBundle = {};
  const sources = [a, b];
  for (const source of sources) {
    for (const groupKey of Object.keys(source) as Array<keyof PartialScoreBundle>) {
      const groupValue = source[groupKey];
      if (!groupValue || typeof groupValue !== "object" || Array.isArray(groupValue)) continue;
      const target = (out[groupKey] ?? {}) as Record<string, number>;
      for (const [key, value] of Object.entries(groupValue as Record<string, number>)) {
        target[key] = (target[key] ?? 0) + Math.round(value / 2);
      }
      (out as Record<string, unknown>)[groupKey] = target;
    }
  }
  return out;
}

function buildTieQuestion(seed: TieScenarioSeed): Question {
  const id = `q-${seed.id}`;
  const options: AnswerOption[] = [
    buildTieOption(id, 0, seed.aText, seed.scoreA, `${seed.key}-a-kuat`),
    buildTieOption(id, 1, seed.bText, seed.scoreB, `${seed.key}-b-kuat`),
    buildTieOption(id, 2, `Aku melakukan itu, tetapi hanya setelah memastikan akibatnya tidak memperburuk keadaan.`, mixScores(seed.scoreA, { bias: { idealized: 1 } }), `${seed.key}-a-halus`),
    buildTieOption(id, 3, `Aku lebih dekat ke pilihan lain itu, walau biasanya tetap menahan sebagian responsku.`, mixScores(seed.scoreB, { bias: { "stress-heavy": 1 } }), `${seed.key}-b-halus`),
    buildTieOption(id, 4, `Aku melihat dua sisi itu sama-sama ada, lalu memilih yang paling sesuai dengan kejadian saat itu.`, mixScores(seed.scoreA, seed.scoreB), `${seed.key}-campuran`),
    buildTieOption(id, 5, `Aku berhenti sebentar dan meminta satu contoh nyata agar tidak menjawab dari rasa tegang.`, { functions: { Ti: 1, Si: 1 }, coping: { acceptance: 1 }, communicationStyle: { questioning: 1 } }, `${seed.key}-klarifikasi`),
  ];
  return {
    id,
    phase: "tie-break",
    module: "advanced-typology",
    situationIntent: "membedakan dua pola yang mirip dari luar",
    systemsMeasured: ["mbti-cognitive-functions", "enneagram", "instinctual-stacking", "disc", "riasec", "relationship-attachment", "conflict-style", "attitudinal-psyche", "psychosophy"],
    notMeasuredHere: ["riasec", "love-style"],
    assessmentBoundary: {
      canMeasure: ["sinyal pembeda", "respons yang muncul saat dua pola utama terlalu dekat"],
      shouldNotMeasure: ["diagnosis", "nilai moral", "kemampuan mutlak"],
      likelyFunctions: ["Ni", "Ne", "Si", "Se", "Fi", "Fe", "Ti", "Te"],
      unlikelyFunctions: [],
      likelyMotives: ["mencari pembeda yang lebih halus", "membaca alasan respons", "menimbang tekanan inti"],
      invalidScoringWarnings: ["Tie-break hanya boleh dipakai setelah data utama cukup dekat.", "Skor 4 hanya berlaku untuk opsi pembeda yang jelas."],
    },
    target: seed.target,
    tieBreakerFor: [seed.target],
    contextType: seed.contextType,
    memoryAnchor: "momen kecil yang membedakan dua respons yang tampak mirip",
    expectedMemoryTrigger: "bagian pertama yang bergerak saat dua pilihan sama-sama mungkin",
    emotionalPressure: "takut salah membaca diri karena dua pola sama-sama terasa dekat",
    actionPressure: "perlu memilih respons yang paling spontan dalam keadaan serupa",
    responseType: "jawaban pembeda tie-break",
    functionContext: "dipakai hanya saat hasil utama terlalu dekat",
    scoringReason: "opsi diberi skor lebih tajam untuk memisahkan pola yang sering bertumpuk",
    text: seed.text,
    reminder: TEST_INTRO_NOTE,
    fallbackReminder: FALLBACK_REMINDER,
    options,
  };
}

export const mainQuestions: Question[] = MAIN_SCENARIOS.map(buildMainQuestion);
export const tieBreakQuestions: Question[] = TIE_SCENARIOS.map(buildTieQuestion);
export const questions: Question[] = [...mainQuestions, ...tieBreakQuestions];

export function getQuestionsByPhase(phase: Question["phase"]): Question[] {
  return questions.filter((question) => question.phase === phase);
}

export function getQuestionsByModule(module: QuestionModule): Question[] {
  return questions.filter((question) => question.module === module);
}
