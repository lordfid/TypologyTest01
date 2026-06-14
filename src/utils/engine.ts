import type {
  APAspect,
  APPositionKey,
  ArchetypeType,
  AttachmentKey,
  AestheticType,
  BigFiveTrait,
  BoundaryStyle,
  BurnoutPattern,
  CognitiveFunction,
  CommunicationStyle,
  ConflictStyle,
  CopingStyle,
  CoreDesire,
  CoreFear,
  CoreLonging,
  CoreWound,
  DefensePattern,
  DISCType,
  DecisionStyle,
  DichotomyResult,
  EmpathyStyle,
  EnneagramCenter,
  EnneagramHarmonicGroup,
  EnneagramHornevianGroup,
  EnneagramObjectRelation,
  EnneagramType,
  ExistentialStyle,
  HEXACOTrait,
  InnerChildNeed,
  InnerCriticType,
  Instinct,
  KeirseyTemperament,
  LeadershipStyle,
  LearningStyle,
  LoveStyle,
  MBTIMatch,
  MBTIType,
  MoralStyle,
  MotivationStyle,
  NarrativeIdentity,
  ProcrastinationStyle,
  PYSubtypeFocus,
  Question,
  RankedScore,
  RawScoreResult,
  ResultsSummary,
  RIASECType,
  SelfWorthSource,
  ShameGuiltPattern,
  SocialMask,
  SocionicsQuadra,
  SocionicsType,
  StressResponse,
  TemperamentType,
  ValueKey,
  WorkStyle,
  AngerStyle,
} from "../types";
import { confidenceFromMargin, getEvidenceCount, getGroupScores, getRaw, getScore, round, type FlatStatMap } from "./scoreSchema";
import { runFairnessCheck } from "./fairnessCheck";
import { buildTieBreakSuggestions, inferMBTITieTarget, shouldAskTieBreak, type ClosePair } from "./tieBreakRules";

const cognitiveFunctions: CognitiveFunction[] = ["Ni", "Ne", "Si", "Se", "Fi", "Fe", "Ti", "Te"];
const bigFiveKeys: BigFiveTrait[] = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
const hexacoKeys: HEXACOTrait[] = ["honestyHumility", "emotionality", "extraversion", "agreeableness", "conscientiousness", "openness"];
const enneagramTypes: EnneagramType[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const centers: EnneagramCenter[] = ["gut", "heart", "head"];
const harmonicGroups: EnneagramHarmonicGroup[] = ["competency", "positive-outlook", "reactive"];
const hornevianGroups: EnneagramHornevianGroup[] = ["compliant", "assertive", "withdrawn"];
const objectRelations: EnneagramObjectRelation[] = ["frustration", "rejection", "attachment"];
const instincts: Instinct[] = ["sp", "sx", "so"];
const socionicsTypes: SocionicsType[] = ["ILE", "SEI", "ESE", "LII", "EIE", "LSI", "SLE", "IEI", "SEE", "ILI", "LIE", "ESI", "LSE", "EII", "IEE", "SLI"];
const quadras: SocionicsQuadra[] = ["Alpha", "Beta", "Gamma", "Delta"];
const temperaments: TemperamentType[] = ["sanguine", "choleric", "melancholic", "phlegmatic"];
const keirsey: KeirseyTemperament[] = ["guardian", "artisan", "idealist", "rational"];
const aspects: APAspect[] = ["V", "L", "F", "E"];
const apPositions: APPositionKey[] = ["1V", "2V", "3V", "4V", "1L", "2L", "3L", "4L", "1F", "2F", "3F", "4F", "1E", "2E", "3E", "4E"];
const pySubtypeFocus: PYSubtypeFocus[] = ["self-focused", "others-focused", "depth-focused", "method-focused", "adaptation-focused"];
const discKeys: DISCType[] = ["D", "I", "S", "C"];
const riasecKeys: RIASECType[] = ["Realistic", "Investigative", "Artistic", "Social", "Enterprising", "Conventional"];
const moralKeys: MoralStyle[] = ["care-based", "justice-based", "duty-based", "freedom-based", "consequence-based", "loyalty-based", "truth-based", "peace-based", "integrity-based", "pragmatic"];
const decisionKeys: DecisionStyle[] = ["intuitive", "analytical", "values-led", "people-aware", "practical", "evidence-led", "consensus-led", "risk-aware"];
const conflictKeys: ConflictStyle[] = ["direct", "diplomatic", "delayed-repair", "avoidant", "problem-solving", "principled", "protective", "mediating"];
const communicationKeys: CommunicationStyle[] = ["warm", "precise", "direct", "reflective", "story-based", "questioning", "structured", "lightening", "reserved"];
const attachmentKeys: AttachmentKey[] = ["secure-leaning", "anxious-leaning", "avoidant-leaning", "fearful-leaning", "guarded-but-caring", "intense-but-afraid", "loyal-but-slow-to-trust", "independent-but-connected", "warm-but-easily-overwhelmed", "secure-but-private"];
const loveKeys: LoveStyle[] = ["steady-care", "intense-bond", "playful-warmth", "protective-loyalty", "private-devotion", "growth-together", "admiring-support", "slow-trust"];
const boundaryKeys: BoundaryStyle[] = ["clear", "soft", "porous", "guarded", "flexible", "delayed", "protective", "rigid-under-stress"];
const stressKeys: StressResponse[] = ["withdrawal", "over-control", "over-explaining", "people-pleasing", "shutdown", "impulsive-action", "anger-burst", "perfection-spiral", "distraction-seeking", "reassurance-seeking", "numbness", "problem-solving-rush"];
const copingKeys: CopingStyle[] = ["problem-focused", "emotion-focused", "avoidance", "social-support", "meaning-focused", "humor", "planning", "acceptance", "rumination"];
const defenseKeys: DefensePattern[] = ["intellectualizing", "withdrawing", "pleasing", "controlling", "minimizing", "projecting", "perfectionism", "joking-away", "disappearing", "overworking", "moralizing", "self-blaming", "blaming-others", "emotional-shutdown"];
const shadowKeys = ["opposing", "critical", "trickster", "transformative", "inferior-stress", "balanced-repair"] as const;
const fearKeys: CoreFear[] = ["being-wrong", "being-unneeded", "being-worthless", "having-no-place", "being-incapable", "being-unsafe", "being-trapped", "being-controlled", "being-separated-from-peace"];
const desireKeys: CoreDesire[] = ["rightness", "beloved-presence", "recognized-worth", "whole-identity", "understanding-and-space", "security-and-trust", "freedom-and-options", "self-direction", "inner-peace"];
const woundKeys: CoreWound[] = ["unseen", "unprotected", "unvalued", "controlled", "rejected", "misunderstood", "used", "excluded", "overlooked"];
const longingKeys: CoreLonging[] = ["to-be-understood", "to-be-safe", "to-be-free", "to-matter", "to-be-chosen", "to-be-capable", "to-belong", "to-be-at-peace", "to-be-respected"];
const valueKeys: ValueKey[] = ["freedom", "safety", "love", "truth", "success", "beauty", "peace", "control", "meaning", "loyalty", "competence", "recognition", "fairness", "growth", "independence", "family", "faith", "creativity", "stability", "kindness", "knowledge", "influence", "comfort", "adventure", "authenticity"];
const workKeys: WorkStyle[] = ["structured", "adaptive", "independent", "collaborative", "quality-focused", "fast-execution", "supportive", "strategic", "creative-flow", "service-oriented"];
const learningKeys: LearningStyle[] = ["conceptual", "hands-on", "step-by-step", "discussion-based", "visual-creative", "research-deep", "trial-and-error", "teaching-to-learn", "memory-linked", "goal-driven"];
const leadershipKeys: LeadershipStyle[] = ["directive", "facilitative", "strategic", "servant", "visionary", "stabilizing", "coaching", "example-led"];
const motivationKeys: MotivationStyle[] = ["achievement", "security", "connection", "meaning", "autonomy", "mastery", "recognition", "peace", "challenge", "care"];
const procrastinationKeys: ProcrastinationStyle[] = ["fear-of-failure", "overthinking", "low-energy", "rebellion", "unclear-start", "perfection-delay", "emotion-avoidance", "novelty-seeking"];
const burnoutKeys: BurnoutPattern[] = ["overgiving", "overworking", "under-stimulated", "over-controlled", "emotionally-flooded", "isolated", "decision-fatigue", "meaning-loss"];
const empathyKeys: EmpathyStyle[] = ["emotional-attunement", "practical-help", "cognitive-understanding", "protective", "quiet-presence", "encouraging", "truthful-support", "boundary-aware"];
const angerKeys: AngerStyle[] = ["silent", "direct", "cold", "explosive", "moral", "sarcastic", "tearful", "protective", "delayed"];
const shameGuiltKeys: ShameGuiltPattern[] = ["self-blame", "repair-focused", "hide-and-fix", "deflecting", "over-apologizing", "prove-worth", "numbing", "withdraw-and-reflect"];
const selfWorthKeys: SelfWorthSource[] = ["competence", "being-needed", "authenticity", "belonging", "independence", "impact", "knowledge", "beauty", "integrity", "resilience"];
const socialMaskKeys: SocialMask[] = ["calm-helper", "capable-achiever", "easygoing-peacekeeper", "witty-lightener", "quiet-observer", "strong-protector", "polished-pleasant", "competent-analyst"];
const innerCriticKeys: InnerCriticType[] = ["not-enough", "too-much", "must-be-right", "must-be-useful", "must-stay-safe", "must-not-need", "must-not-fail", "must-not-disturb"];
const innerChildKeys: InnerChildNeed[] = ["safety", "permission", "play", "comfort", "being-seen", "being-chosen", "being-heard", "rest", "gentle-guidance"];
const narrativeKeys: NarrativeIdentity[] = ["survivor", "seeker", "builder", "healer", "reformer", "wanderer", "guardian", "artist", "strategist", "witness"];
const archetypeKeys: ArchetypeType[] = ["caregiver", "sage", "creator", "ruler", "explorer", "lover", "hero", "innocent", "magician", "rebel", "everyperson", "jester"];
const aestheticKeys: AestheticType[] = ["minimal-clean", "warm-soft", "dark-romantic", "classic-elegant", "playful-color", "natural-earthy", "futuristic-sharp", "nostalgic-vintage", "mystic-symbolic", "bold-dramatic"];
const existentialKeys: ExistentialStyle[] = ["meaning-maker", "freedom-seeker", "truth-seeker", "connection-seeker", "peace-seeker", "impact-seeker", "beauty-seeker", "faith-oriented", "self-mastery", "present-living"];

export const MBTI_STACKS: Record<MBTIType, CognitiveFunction[]> = {
  INTJ: ["Ni", "Te", "Fi", "Se"],
  INFJ: ["Ni", "Fe", "Ti", "Se"],
  ENTJ: ["Te", "Ni", "Se", "Fi"],
  ENFJ: ["Fe", "Ni", "Se", "Ti"],
  INTP: ["Ti", "Ne", "Si", "Fe"],
  INFP: ["Fi", "Ne", "Si", "Te"],
  ENTP: ["Ne", "Ti", "Fe", "Si"],
  ENFP: ["Ne", "Fi", "Te", "Si"],
  ISTJ: ["Si", "Te", "Fi", "Ne"],
  ISFJ: ["Si", "Fe", "Ti", "Ne"],
  ESTJ: ["Te", "Si", "Ne", "Fi"],
  ESFJ: ["Fe", "Si", "Ne", "Ti"],
  ISTP: ["Ti", "Se", "Ni", "Fe"],
  ISFP: ["Fi", "Se", "Ni", "Te"],
  ESTP: ["Se", "Ti", "Fe", "Ni"],
  ESFP: ["Se", "Fi", "Te", "Ni"],
};

function rank<K extends string>(stats: FlatStatMap, group: string, keys: readonly K[], limit = keys.length): RankedScore<K>[] {
  return getGroupScores(stats, group, keys).slice(0, limit);
}

function score(stats: FlatStatMap, path: string): number {
  return getScore(stats, path);
}

function rawScore(stats: FlatStatMap, path: string): number {
  return getRaw(stats, path);
}

function evidence(stats: FlatStatMap, path: string): number {
  return getEvidenceCount(stats, path);
}

function functionCombinedScore(stats: FlatStatMap, fn: CognitiveFunction): RankedScore<CognitiveFunction> {
  const base = score(stats, `functions.${fn}`);
  const natural = score(stats, `functionUsage.naturalUse.${fn}`);
  const supportive = score(stats, `functionUsage.supportiveUse.${fn}`);
  const tertiary = score(stats, `functionUsage.playfulOrTertiaryUse.${fn}`);
  const stress = score(stats, `functionUsage.stressUse.${fn}`);
  const defensive = score(stats, `functionUsage.defensiveUse.${fn}`);
  const critical = score(stats, `functionUsage.criticalUse.${fn}`);
  const confused = score(stats, `functionUsage.confusedUse.${fn}`);
  const transformative = score(stats, `functionUsage.transformativeUse.${fn}`);
  return {
    key: fn,
    score: round(base + natural * 0.45 + supportive * 0.25 + tertiary * 0.18 + stress * 0.12 + defensive * 0.1 + critical * 0.08 + confused * 0.06 + transformative * 0.1, 1),
    rawScore: rawScore(stats, `functions.${fn}`),
    evidenceCount: evidence(stats, `functions.${fn}`),
  };
}

function buildFunctionRanking(stats: FlatStatMap): RankedScore<CognitiveFunction>[] {
  return cognitiveFunctions.map((fn) => functionCombinedScore(stats, fn)).sort((a, b) => b.score - a.score || b.rawScore - a.rawScore);
}

function buildUsageRanking(stats: FlatStatMap): Record<string, RankedScore<CognitiveFunction>[]> {
  const groups = ["naturalUse", "supportiveUse", "playfulOrTertiaryUse", "stressUse", "defensiveUse", "criticalUse", "confusedUse", "transformativeUse"];
  return Object.fromEntries(groups.map((group) => [group, rank(stats, `functionUsage.${group}`, cognitiveFunctions)]));
}

function buildMBTITop3(stats: FlatStatMap): MBTIMatch[] {
  const matches = (Object.keys(MBTI_STACKS) as MBTIType[]).map((type) => {
    const [dominant, auxiliary, tertiary, inferior] = MBTI_STACKS[type];
    const dominantScore = functionCombinedScore(stats, dominant).score;
    const auxiliaryScore = functionCombinedScore(stats, auxiliary).score;
    const tertiaryScore = functionCombinedScore(stats, tertiary).score;
    const inferiorScore = functionCombinedScore(stats, inferior).score;
    const fitScore = round(
      dominantScore * 4 +
      auxiliaryScore * 3 +
      tertiaryScore * 2 +
      inferiorScore +
      score(stats, `functionUsage.naturalUse.${dominant}`) * 1.2 +
      score(stats, `functionUsage.supportiveUse.${auxiliary}`) +
      score(stats, `functionUsage.playfulOrTertiaryUse.${tertiary}`) * 0.8 +
      score(stats, `functionUsage.stressUse.${inferior}`) * 0.7,
      1,
    );
    const evidenceCount = [dominant, auxiliary, tertiary, inferior].reduce((sum, fn) => sum + evidence(stats, `functions.${fn}`), 0);
    return { type, fitScore, evidenceCount, stack: MBTI_STACKS[type] };
  });

  const sorted = matches.sort((a, b) => b.fitScore - a.fitScore || b.evidenceCount - a.evidenceCount);
  const maxFit = sorted[0]?.fitScore ?? 1;
  const top3 = sorted.slice(0, 3);

  return top3.map((item, index) => {
    const next = sorted[index + 1];
    const gap = item.fitScore - (next?.fitScore ?? 0);
    const normalizedFit = maxFit > 0 ? round((item.fitScore / maxFit) * 100, 1) : 0;
    const [dominant, auxiliary, tertiary, inferior] = item.stack;
    return {
      type: item.type,
      fitScore: normalizedFit,
      confidence: confidenceFromMargin(normalizedFit, next ? round((next.fitScore / maxFit) * 100, 1) : 0, item.evidenceCount),
      stack: item.stack,
      reasonsFor: [
        `Fungsi ${dominant} terbaca sebagai kandidat pola utama.`,
        `Fungsi ${auxiliary} memberi dukungan pada cara menata respons.`,
        `Kombinasi ${dominant}-${auxiliary} mendapat fit sekitar ${normalizedFit}.`,
      ],
      reasonsAgainst: [
        evidence(stats, `functions.${inferior}`) < 3 ? `Data untuk fungsi ${inferior} masih sedikit.` : `Fungsi ${inferior} muncul, tetapi perlu dibaca sebagai pola bawah atau saat tertekan.`,
      ],
      ambiguousParts: gap <= 7 ? ["Top berikutnya cukup dekat, jadi tie-break disarankan."] : [],
    };
  });
}

function buildDichotomy(stats: FlatStatMap, mbtiTop: MBTIType | undefined): DichotomyResult {
  const I = score(stats, "dichotomy.I");
  const E = score(stats, "dichotomy.E");
  const S = score(stats, "dichotomy.S");
  const N = score(stats, "dichotomy.N");
  const T = score(stats, "dichotomy.T");
  const F = score(stats, "dichotomy.F");
  const J = score(stats, "dichotomy.J");
  const P = score(stats, "dichotomy.P");
  const code = `${I >= E ? "I" : "E"}${N >= S ? "N" : "S"}${F >= T ? "F" : "T"}${J >= P ? "J" : "P"}`;
  const note = mbtiTop && code !== mbtiTop
    ? "Hasil fungsi dan hasil dikotomi tidak sepenuhnya sama. Ini bisa terjadi karena seseorang tampak berbeda saat berada di luar dan saat mengambil keputusan dari dalam."
    : undefined;
  return { I, E, S, N, T, F, J, P, code, note };
}

function buildWing(core: EnneagramType | undefined, enneagramRanking: RankedScore<EnneagramType>[]): string | undefined {
  if (!core) return undefined;
  const n = Number(core);
  const left = String(n === 1 ? 9 : n - 1) as EnneagramType;
  const right = String(n === 9 ? 1 : n + 1) as EnneagramType;
  const leftScore = enneagramRanking.find((item) => item.key === left)?.score ?? 0;
  const rightScore = enneagramRanking.find((item) => item.key === right)?.score ?? 0;
  const wing = leftScore >= rightScore ? left : right;
  return `${core}w${wing}`;
}

function buildTritype(enneagramRanking: RankedScore<EnneagramType>[]): string {
  const scoreOf = (type: EnneagramType): number => enneagramRanking.find((item) => item.key === type)?.score ?? 0;
  const highest = (types: EnneagramType[]): EnneagramType => [...types].sort((a, b) => scoreOf(b) - scoreOf(a))[0];
  const gut = highest(["8", "9", "1"]);
  const heart = highest(["2", "3", "4"]);
  const head = highest(["5", "6", "7"]);
  return `${gut}${heart}${head}`;
}

function buildAPType(stats: FlatStatMap): string {
  const remaining = new Set<APAspect>(aspects);
  const order: APAspect[] = [];
  for (const pos of ["1", "2", "3", "4"] as const) {
    const candidates = [...remaining].map((aspect) => ({ aspect, value: score(stats, `apPosition.${pos}${aspect}`) }));
    candidates.sort((a, b) => b.value - a.value || aspects.indexOf(a.aspect) - aspects.indexOf(b.aspect));
    const chosen = candidates[0]?.aspect ?? [...remaining][0];
    order.push(chosen);
    remaining.delete(chosen);
  }
  return order.join("");
}

function isAPStable(apRanking: RankedScore<APPositionKey>[]): boolean {
  const top = apRanking[0]?.score ?? 0;
  const fourth = apRanking[3]?.score ?? 0;
  return top - fourth > 6;
}

function pairTargetFromTop<K extends string>(top: RankedScore<K>[], pairMap: Record<string, string>): string | undefined {
  const a = top[0]?.key;
  const b = top[1]?.key;
  if (!a || !b) return undefined;
  return pairMap[[a, b].sort().join("|")];
}

function buildClosePairs(result: {
  mbtiTop3: MBTIMatch[];
  enneagramTop3: RankedScore<EnneagramType>[];
  instinctStacking: Instinct[];
  disc: RankedScore<DISCType>[];
  riasecTop3: RankedScore<RIASECType>[];
  attachment: RankedScore<AttachmentKey>[];
  conflictStyle: RankedScore<ConflictStyle>[];
  apPositionRanking: RankedScore<APPositionKey>[];
  functionRanking: RankedScore<CognitiveFunction>[];
}): ClosePair[] {
  const pairs: ClosePair[] = [];
  const mbtiGap = Math.abs((result.mbtiTop3[0]?.fitScore ?? 0) - (result.mbtiTop3[1]?.fitScore ?? 0));
  const mbtiTarget = inferMBTITieTarget(result.mbtiTop3[0]?.type, result.mbtiTop3[1]?.type);
  if (mbtiTarget && shouldAskTieBreak(mbtiGap, 8)) pairs.push({ target: mbtiTarget, gap: mbtiGap, reason: "Dua kandidat MBTI utama dekat.", priority: 95 });

  const enneaPairMap: Record<string, string> = {
    "4|6": "Enneagram 4 vs 6",
    "2|9": "Enneagram 2 vs 9",
    "1|6": "Enneagram 1 vs 6",
    "3|8": "Enneagram 3 vs 8",
    "5|9": "Enneagram 5 vs 9",
  };
  const enneaTarget = pairTargetFromTop(result.enneagramTop3, enneaPairMap);
  const enneaGap = Math.abs((result.enneagramTop3[0]?.score ?? 0) - (result.enneagramTop3[1]?.score ?? 0));
  if (enneaTarget && shouldAskTieBreak(enneaGap, result.enneagramTop3[0]?.evidenceCount ?? 0)) pairs.push({ target: enneaTarget, gap: enneaGap, reason: "Dua motif Enneagram utama dekat.", priority: 90 });

  const instinctKey = [...result.instinctStacking.slice(0, 2)].sort().join("|");
  const instinctMap: Record<string, string> = { "sp|sx": "sp vs sx", "so|sp": "sp vs so", "so|sx": "sx vs so" };
  if (instinctMap[instinctKey]) pairs.push({ target: instinctMap[instinctKey], gap: 5, reason: "Dua insting utama perlu dibedakan.", priority: 74 });

  const discTarget = pairTargetFromTop(result.disc, { "C|D": "DISC D vs C", "I|S": "DISC I vs S" });
  const discGap = Math.abs((result.disc[0]?.score ?? 0) - (result.disc[1]?.score ?? 0));
  if (discTarget && shouldAskTieBreak(discGap, result.disc[0]?.evidenceCount ?? 0)) pairs.push({ target: discTarget, gap: discGap, reason: "Dua gaya DISC dekat.", priority: 70 });

  const riasecTarget = pairTargetFromTop(result.riasecTop3, { "Artistic|Investigative": "RIASEC Artistic vs Investigative", "Enterprising|Social": "RIASEC Social vs Enterprising" });
  const riasecGap = Math.abs((result.riasecTop3[0]?.score ?? 0) - (result.riasecTop3[1]?.score ?? 0));
  if (riasecTarget && shouldAskTieBreak(riasecGap, result.riasecTop3[0]?.evidenceCount ?? 0)) pairs.push({ target: riasecTarget, gap: riasecGap, reason: "Dua minat tugas RIASEC dekat.", priority: 68 });

  const attachmentTarget = pairTargetFromTop(result.attachment, {
    "avoidant-leaning|secure-but-private": "avoidant-leaning vs secure-but-private",
    "anxious-leaning|secure-leaning": "anxious-leaning vs high-Fe concern",
  });
  if (attachmentTarget) pairs.push({ target: attachmentTarget, gap: 6, reason: "Dua pola kedekatan perlu dibaca lebih halus.", priority: 66 });

  const conflictTarget = pairTargetFromTop(result.conflictStyle, { "avoidant|delayed-repair": "conflict avoiding vs delayed-repair" });
  if (conflictTarget) pairs.push({ target: conflictTarget, gap: 6, reason: "Dua bentuk diam dalam konflik bisa tampak mirip.", priority: 64 });

  const apTop = result.apPositionRanking[0]?.key;
  const apSecond = result.apPositionRanking[1]?.key;
  const apKey = apTop && apSecond ? [apTop, apSecond].sort().join("|") : "";
  const apMap: Record<string, string> = { "1V|3V": "AP 1V vs 3V", "1L|2L": "AP 2L vs 1L", "3E|neuroticism": "AP 3E vs high neuroticism" };
  if (apMap[apKey]) pairs.push({ target: apMap[apKey], gap: 5, reason: "Posisi AP/PY utama masih berdekatan.", priority: 62 });

  const functionTarget = pairTargetFromTop(result.functionRanking, {
    "Ni|Si": "Ni vs Si",
    "Ne|Ni": "Ne vs Ni",
    "Fe|Fi": "Fi vs Fe",
    "Te|Ti": "Ti vs Te",
    "Ne|Se": "Se vs Ne",
    "Si|Te": "Si vs Te",
  });
  const functionGap = Math.abs((result.functionRanking[0]?.score ?? 0) - (result.functionRanking[1]?.score ?? 0));
  if (functionTarget && shouldAskTieBreak(functionGap, result.functionRanking[0]?.evidenceCount ?? 0)) pairs.push({ target: functionTarget, gap: functionGap, reason: "Dua fungsi kognitif utama dekat.", priority: 60 });

  return pairs;
}

function confidence(raw: RawScoreResult, warningsCount: number, mbtiGap: number, enneagramGap: number): number {
  const answeredShare = raw.totalQuestionsSeen > 0 ? raw.totalAnswered / raw.totalQuestionsSeen : 0;
  const skipPenalty = raw.totalQuestionsSeen > 0 ? (raw.totalSkipped / raw.totalQuestionsSeen) * 25 : 0;
  const warningPenalty = Math.min(18, warningsCount * 2.5);
  const closenessPenalty = (mbtiGap <= 7 ? 8 : 0) + (enneagramGap <= 7 ? 6 : 0);
  return round(Math.max(5, Math.min(98, 45 + answeredShare * 45 - skipPenalty - warningPenalty - closenessPenalty)), 1);
}

export function calculateResults(raw: RawScoreResult, bank: Question[]): ResultsSummary {
  const stats = raw.byPath;
  const functionRanking = buildFunctionRanking(stats);
  const functionUsageRanking = buildUsageRanking(stats);
  const mbtiTop3 = buildMBTITop3(stats);
  const dichotomy = buildDichotomy(stats, mbtiTop3[0]?.type);
  const bigFive = rank(stats, "bigFive", bigFiveKeys);
  const hexaco = rank(stats, "hexaco", hexacoKeys);
  const enneagramTop3 = rank(stats, "enneagram", enneagramTypes, 3);
  const enneagramWing = buildWing(enneagramTop3[0]?.key, rank(stats, "enneagram", enneagramTypes));
  const instinctStacking = rank(stats, "instincts", instincts).map((item) => item.key);
  const tritype = buildTritype(rank(stats, "enneagram", enneagramTypes));
  const enneagramCenters = rank(stats, "enneagramCenters", centers);
  const enneagramHarmonic = rank(stats, "enneagramHarmonic", harmonicGroups);
  const enneagramHornevian = rank(stats, "enneagramHornevian", hornevianGroups);
  const enneagramObjectRelation = rank(stats, "enneagramObjectRelation", objectRelations);
  const socionicsTop3 = rank(stats, "socionics", socionicsTypes, 3);
  const socionicsQuadra = rank(stats, "socionics", quadras);
  const temperament = rank(stats, "temperament", temperaments);
  const keirseyRank = rank(stats, "keirsey", keirsey);
  const apPositionRanking = rank(stats, "apPosition", apPositions);
  const apType = buildAPType(stats);
  const pyType = apType;
  const disc = rank(stats, "disc", discKeys);
  const riasecTop3 = rank(stats, "riasec", riasecKeys, 3);
  const moralStyle = rank(stats, "moralStyle", moralKeys);
  const decisionStyle = rank(stats, "decisionStyle", decisionKeys);
  const conflictStyle = rank(stats, "conflictStyle", conflictKeys);
  const communicationStyle = rank(stats, "communicationStyle", communicationKeys);
  const attachment = rank(stats, "attachment", attachmentKeys);
  const loveStyle = rank(stats, "loveStyle", loveKeys);
  const boundaryStyle = rank(stats, "boundaryStyle", boundaryKeys);
  const stress = rank(stats, "stress", stressKeys);
  const coping = rank(stats, "coping", copingKeys);
  const defense = rank(stats, "defense", defenseKeys);
  const shadow = rank(stats, "shadow", shadowKeys);
  const coreFear = rank(stats, "coreFear", fearKeys);
  const coreDesire = rank(stats, "coreDesire", desireKeys);
  const coreWound = rank(stats, "coreWound", woundKeys);
  const coreLonging = rank(stats, "coreLonging", longingKeys);
  const valuesRanking = rank(stats, "values", valueKeys);
  const workStyle = rank(stats, "workStyle", workKeys);
  const learningStyle = rank(stats, "learningStyle", learningKeys);
  const leadershipStyle = rank(stats, "leadershipStyle", leadershipKeys);
  const motivationStyle = rank(stats, "motivationStyle", motivationKeys);
  const procrastinationStyle = rank(stats, "procrastinationStyle", procrastinationKeys);
  const burnoutPattern = rank(stats, "burnoutPattern", burnoutKeys);
  const empathyStyle = rank(stats, "empathyStyle", empathyKeys);
  const angerStyle = rank(stats, "angerStyle", angerKeys);
  const shameGuilt = rank(stats, "shameGuilt", shameGuiltKeys);
  const selfWorth = rank(stats, "selfWorth", selfWorthKeys);
  const socialMask = rank(stats, "socialMask", socialMaskKeys);
  const innerCritic = rank(stats, "innerCritic", innerCriticKeys);
  const innerChildNeed = rank(stats, "innerChildNeed", innerChildKeys);
  const narrativeIdentity = rank(stats, "narrativeIdentity", narrativeKeys);
  const archetype = rank(stats, "archetype", archetypeKeys);
  const aesthetic = rank(stats, "aesthetic", aestheticKeys);
  const existentialStyle = rank(stats, "existentialStyle", existentialKeys);
  const mbtiGap = Math.abs((mbtiTop3[0]?.fitScore ?? 0) - (mbtiTop3[1]?.fitScore ?? 0));
  const enneagramGap = Math.abs((enneagramTop3[0]?.score ?? 0) - (enneagramTop3[1]?.score ?? 0));
  const apPyStable = isAPStable(apPositionRanking);
  const bigFiveMbtiConflict = Boolean(
    dichotomy.code[0] === "E" && (bigFive.find((item) => item.key === "extraversion")?.score ?? 0) < 20,
  );
  const preliminary = {
    mbtiTop3,
    enneagramTop3,
    instinctStacking,
    disc,
    riasecTop3,
    attachment,
    conflictStyle,
    apPositionRanking,
    functionRanking,
  };
  const tieBreakSuggestions = buildTieBreakSuggestions(buildClosePairs(preliminary), bank);
  const fairnessWarnings = runFairnessCheck(raw, bank, {
    mbtiGap,
    enneagramGap,
    apPyStable,
    bigFiveMbtiConflict,
    closeResultPaths: tieBreakSuggestions.map((item) => item.target),
  });

  const notes = [
    "Tes ini bukan diagnosis dan tidak menilai peserta baik atau buruk.",
    "Socionics tidak selalu sama dengan MBTI, jadi hasil ini hanya perkiraan pola yang paling dekat.",
    "RIASEC menunjukkan kecenderungan jenis tugas, bukan nasib karier mutlak.",
  ];
  if (dichotomy.note) notes.push(dichotomy.note);

  return {
    testName: "Tes Kepribadian Mendalam",
    ethicalNote: "Hasil ini adalah peta kemungkinan. Bacalah hati-hati karena jawaban bisa berubah sesuai keadaan menjawab.",
    functionRanking,
    functionUsageRanking,
    mbtiTop3,
    dichotomy,
    bigFive,
    hexaco,
    enneagramTop3,
    enneagramWing,
    instinctStacking,
    tritype,
    enneagramCenters,
    enneagramHarmonic,
    enneagramHornevian,
    enneagramObjectRelation,
    socionicsTop3,
    socionicsQuadra,
    modelANote: "Model A di sini hanya estimasi dari preferensi elemen informasi dan nilai quadra, bukan pengetikan Socionics penuh.",
    temperament,
    keirsey: keirseyRank,
    attitudinalPsycheType: apType,
    psychosophyType: pyType,
    apPositionRanking,
    pySubtypeFocus: rank(stats, "pySubtypeFocus", pySubtypeFocus),
    disc,
    riasecTop3,
    moralStyle,
    decisionStyle,
    conflictStyle,
    communicationStyle,
    attachment,
    loveStyle,
    boundaryStyle,
    stress,
    coping,
    defense,
    shadow,
    coreFear,
    coreDesire,
    coreWound,
    coreLonging,
    valuesRanking,
    workStyle,
    learningStyle,
    leadershipStyle,
    motivationStyle,
    procrastinationStyle,
    burnoutPattern,
    empathyStyle,
    angerStyle,
    shameGuilt,
    selfWorth,
    socialMask,
    innerCritic,
    innerChildNeed,
    narrativeIdentity,
    archetype,
    aesthetic,
    existentialStyle,
    confidence: confidence(raw, fairnessWarnings.length, mbtiGap, enneagramGap),
    fairnessWarnings,
    tieBreakSuggestions,
    notes,
  };
}
