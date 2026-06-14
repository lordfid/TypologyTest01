/**
 * Types and Interfaces for the deep personality typing engine
 */

export type CognitiveFunction = "Ni" | "Ne" | "Si" | "Se" | "Fi" | "Fe" | "Ti" | "Te";

export type BigFiveTrait = "openness" | "conscientiousness" | "extraversion" | "agreeableness" | "neuroticism";

export type HEXACOTrait = "honestyHumility" | "emotionality" | "extraversion" | "agreeableness" | "conscientiousness" | "openness";

export type EnneagramType = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type EnneagramCenter = "gut" | "heart" | "head";

export type EnneagramHarmonicGroup = "competency" | "positive-outlook" | "reactive";

export type EnneagramHornevianGroup = "compliant" | "assertive" | "withdrawn";

export type EnneagramObjectRelation = "frustration" | "rejection" | "attachment";

export type Instinct = "sp" | "sx" | "so";

export type SocionicsType =
  | "ILE" | "SEI" | "ESE" | "LII"
  | "EIE" | "LSI" | "SLE" | "IEI"
  | "SEE" | "ILI" | "LIE" | "ESI"
  | "LSE" | "EII" | "IEE" | "SLI";

export type SocionicsQuadra = "Alpha" | "Beta" | "Gamma" | "Delta";

export type TemperamentType = "sanguine" | "choleric" | "melancholic" | "phlegmatic";

export type KeirseyTemperament = "guardian" | "artisan" | "idealist" | "rational";

export type APAspect = "V" | "L" | "F" | "E";

export type APPositionKey =
  | "1V" | "2V" | "3V" | "4V"
  | "1L" | "2L" | "3L" | "4L"
  | "1F" | "2F" | "3F" | "4F"
  | "1E" | "2E" | "3E" | "4E";

export type PYSubtypeFocus = "self-focused" | "others-focused" | "depth-focused" | "method-focused" | "adaptation-focused";

export type DISCType = "D" | "I" | "S" | "C";

export type RIASECType = "Realistic" | "Investigative" | "Artistic" | "Social" | "Enterprising" | "Conventional";

export type MoralStyle =
  | "care-based" | "justice-based" | "duty-based" | "freedom-based"
  | "consequence-based" | "loyalty-based" | "truth-based" | "peace-based"
  | "integrity-based" | "pragmatic";

export type DecisionStyle =
  | "intuitive" | "analytical" | "values-led" | "people-aware"
  | "practical" | "evidence-led" | "consensus-led" | "risk-aware";

export type ConflictStyle =
  | "direct" | "diplomatic" | "delayed-repair" | "avoidant"
  | "problem-solving" | "principled" | "protective" | "mediating";

export type CommunicationStyle =
  | "warm" | "precise" | "direct" | "reflective"
  | "story-based" | "questioning" | "structured" | "lightening" | "reserved";

export type AttachmentKey =
  | "secure-leaning" | "anxious-leaning" | "avoidant-leaning" | "fearful-leaning"
  | "guarded-but-caring" | "intense-but-afraid" | "loyal-but-slow-to-trust"
  | "independent-but-connected" | "warm-but-easily-overwhelmed" | "secure-but-private";

export type LoveStyle =
  | "steady-care" | "intense-bond" | "playful-warmth" | "protective-loyalty"
  | "private-devotion" | "growth-together" | "admiring-support" | "slow-trust";

export type BoundaryStyle =
  | "clear" | "soft" | "porous" | "guarded" | "flexible" | "delayed" | "protective" | "rigid-under-stress";

export type StressResponse =
  | "withdrawal" | "over-control" | "over-explaining" | "people-pleasing"
  | "shutdown" | "impulsive-action" | "anger-burst" | "perfection-spiral"
  | "distraction-seeking" | "reassurance-seeking" | "numbness" | "problem-solving-rush";

export type CopingStyle =
  | "problem-focused" | "emotion-focused" | "avoidance" | "social-support"
  | "meaning-focused" | "humor" | "planning" | "acceptance" | "rumination";

export type DefensePattern =
  | "intellectualizing" | "withdrawing" | "pleasing" | "controlling"
  | "minimizing" | "projecting" | "perfectionism" | "joking-away"
  | "disappearing" | "overworking" | "moralizing" | "self-blaming" | "blaming-others" | "emotional-shutdown";

export type CoreFear =
  | "being-wrong" | "being-unneeded" | "being-worthless" | "having-no-place"
  | "being-incapable" | "being-unsafe" | "being-trapped" | "being-controlled" | "being-separated-from-peace";

export type CoreDesire =
  | "rightness" | "beloved-presence" | "recognized-worth" | "whole-identity"
  | "understanding-and-space" | "security-and-trust" | "freedom-and-options" | "self-direction" | "inner-peace";

export type CoreWound =
  | "unseen" | "unprotected" | "unvalued" | "controlled" | "rejected" | "misunderstood" | "used" | "excluded" | "overlooked";

export type CoreLonging =
  | "to-be-understood" | "to-be-safe" | "to-be-free" | "to-matter" | "to-be-chosen" | "to-be-capable" | "to-belong" | "to-be-at-peace" | "to-be-respected";

export type ValueKey =
  | "freedom" | "safety" | "love" | "truth" | "success" | "beauty" | "peace" | "control" | "meaning" | "loyalty"
  | "competence" | "recognition" | "fairness" | "growth" | "independence" | "family" | "faith" | "creativity"
  | "stability" | "kindness" | "knowledge" | "influence" | "comfort" | "adventure" | "authenticity";

export type WorkStyle =
  | "structured" | "adaptive" | "independent" | "collaborative" | "quality-focused" | "fast-execution" | "supportive" | "strategic" | "creative-flow" | "service-oriented";

export type LearningStyle =
  | "conceptual" | "hands-on" | "step-by-step" | "discussion-based" | "visual-creative" | "research-deep" | "trial-and-error" | "teaching-to-learn" | "memory-linked" | "goal-driven";

export type LeadershipStyle =
  | "directive" | "facilitative" | "strategic" | "servant" | "visionary" | "stabilizing" | "coaching" | "example-led";

export type MotivationStyle =
  | "achievement" | "security" | "connection" | "meaning" | "autonomy" | "mastery" | "recognition" | "peace" | "challenge" | "care";

export type ProcrastinationStyle =
  | "fear-of-failure" | "overthinking" | "low-energy" | "rebellion" | "unclear-start" | "perfection-delay" | "emotion-avoidance" | "novelty-seeking";

export type BurnoutPattern =
  | "overgiving" | "overworking" | "under-stimulated" | "over-controlled" | "emotionally-flooded" | "isolated" | "decision-fatigue" | "meaning-loss";

export type EmpathyStyle =
  | "emotional-attunement" | "practical-help" | "cognitive-understanding" | "protective" | "quiet-presence" | "encouraging" | "truthful-support" | "boundary-aware";

export type AngerStyle =
  | "silent" | "direct" | "cold" | "explosive" | "moral" | "sarcastic" | "tearful" | "protective" | "delayed";

export type ShameGuiltPattern =
  | "self-blame" | "repair-focused" | "hide-and-fix" | "deflecting" | "over-apologizing" | "prove-worth" | "numbing" | "withdraw-and-reflect";

export type SelfWorthSource =
  | "competence" | "being-needed" | "authenticity" | "belonging" | "independence" | "impact" | "knowledge" | "beauty" | "integrity" | "resilience";

export type SocialMask =
  | "calm-helper" | "capable-achiever" | "easygoing-peacekeeper" | "witty-lightener" | "quiet-observer" | "strong-protector" | "polished-pleasant" | "competent-analyst";

export type InnerCriticType =
  | "not-enough" | "too-much" | "must-be-right" | "must-be-useful" | "must-stay-safe" | "must-not-need" | "must-not-fail" | "must-not-disturb";

export type InnerChildNeed =
  | "safety" | "permission" | "play" | "comfort" | "being-seen" | "being-chosen" | "being-heard" | "rest" | "gentle-guidance";

export type NarrativeIdentity =
  | "survivor" | "seeker" | "builder" | "healer" | "reformer" | "wanderer" | "guardian" | "artist" | "strategist" | "witness";

export type ArchetypeType =
  | "caregiver" | "sage" | "creator" | "ruler" | "explorer" | "lover" | "hero" | "innocent" | "magician" | "rebel" | "everyperson" | "jester";

export type AestheticType =
  | "minimal-clean" | "warm-soft" | "dark-romantic" | "classic-elegant" | "playful-color" | "natural-earthy" | "futuristic-sharp" | "nostalgic-vintage" | "mystic-symbolic" | "bold-dramatic";

export type ExistentialStyle =
  | "meaning-maker" | "freedom-seeker" | "truth-seeker" | "connection-seeker" | "peace-seeker" | "impact-seeker" | "beauty-seeker" | "faith-oriented" | "self-mastery" | "present-living";

export type MBTIType =
  | "INTJ" | "INFJ" | "ENTJ" | "ENFJ"
  | "INTP" | "INFP" | "ENTP" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export type TypologySystem =
  | "mbti-cognitive-functions"
  | "mbti-dichotomy"
  | "big-five"
  | "hexaco"
  | "enneagram"
  | "enneagram-wing"
  | "instinctual-stacking"
  | "tritype"
  | "enneagram-centers"
  | "enneagram-harmonic"
  | "enneagram-hornevian"
  | "enneagram-object-relations"
  | "socionics"
  | "socionics-quadra"
  | "socionics-model-a"
  | "temperament"
  | "temperament-classic"
  | "keirsey"
  | "keirsey-berens"
  | "attitudinal-psyche"
  | "psychosophy"
  | "ap-py-aspect-positions"
  | "ap-py-subtype-focus"
  | "disc"
  | "riasec"
  | "moral-style"
  | "decision-making-style"
  | "conflict-style"
  | "communication-style"
  | "relationship-attachment"
  | "love-style"
  | "boundary-style"
  | "stress-response"
  | "coping-style"
  | "defense-pattern"
  | "shadow-function-pattern"
  | "core-fear"
  | "core-desire"
  | "core-wound"
  | "core-longing"
  | "values-ranking"
  | "work-style"
  | "learning-style"
  | "leadership-team-role"
  | "leadership-style"
  | "motivation-style"
  | "procrastination-style"
  | "burnout-tendency"
  | "burnout-pattern"
  | "empathy-style"
  | "anger-style"
  | "shame-guilt-response"
  | "self-worth-source"
  | "social-mask"
  | "inner-critic"
  | "inner-child-need"
  | "narrative-identity"
  | "archetype"
  | "aesthetic-personality"
  | "existential-meaning-style";

export type QuestionModule =
  | "cognitive-core"
  | "social-response"
  | "stress-shadow"
  | "motivation-fear"
  | "values-moral"
  | "work-career"
  | "learning-cognition"
  | "relationship-boundary"
  | "communication-conflict"
  | "advanced-typology";

export type ContextType =
  | "public"
  | "alone" | "crisis" | "moral" | "group" | "memory" | "future" | "body" | "creative" | "chat" | "friendship"
  | "family" | "romance" | "work" | "career" | "school" | "learning";

export type ResponseForm =
  | "mengamati" | "menguji" | "memperbaiki" | "tindakan" | "menolak" | "menenangkan" | "mengatur" | "meminta-bantuan" | "menjauh" | "mencoba" | "ucapan" | "menunda" | "menghadapi";

export interface AnswerOption {
  id: string;
  text: string;
  responseForm: ResponseForm;
  primarySignal: string;
  secondarySignal: string;
  antiTieSignal?: string;
  functionPositionSignal?: {
    possibleDominant?: CognitiveFunction[];
    possibleAuxiliary?: CognitiveFunction[];
    possibleTertiary?: CognitiveFunction[];
    possibleInferior?: CognitiveFunction[];
    possibleTransformative?: CognitiveFunction[];
    possibleCritical?: CognitiveFunction[];
  };
  interpretationTag: string;
  evidenceText: string;
  doNotInfer: string[];
  possibleBias?: string[] | string;
  stressClue?: string;
  scores: PartialScoreBundle;
}

export interface AssessmentBoundary {
  canMeasure: string[];
  shouldNotMeasure: string[];
  likelyFunctions: CognitiveFunction[];
  unlikelyFunctions: CognitiveFunction[];
  likelyMotives: string[];
  invalidScoringWarnings: string[];
}

export interface Question {
  id: string;
  phase: "main" | "tie-break";
  module: QuestionModule;
  situationIntent: string;
  systemsMeasured: TypologySystem[];
  notMeasuredHere: TypologySystem[];
  assessmentBoundary: AssessmentBoundary;
  target: string;
  tieBreakerFor?: string[];
  contextType: ContextType;
  memoryAnchor: string;
  expectedMemoryTrigger: string;
  emotionalPressure: string;
  actionPressure: string;
  responseType: string;
  functionContext: string;
  scoringReason: string;
  text: string;
  reminder?: string;
  fallbackReminder?: string;
  options: AnswerOption[];
}

export interface PartialScoreBundle {
  functions?: Partial<Record<CognitiveFunction, number>>;
  functionUsage?: {
    naturalUse?: Partial<Record<CognitiveFunction, number>>;
    supportiveUse?: Partial<Record<CognitiveFunction, number>>;
    playfulOrTertiaryUse?: Partial<Record<CognitiveFunction, number>>;
    stressUse?: Partial<Record<CognitiveFunction, number>>;
    defensiveUse?: Partial<Record<CognitiveFunction, number>>;
    criticalUse?: Partial<Record<CognitiveFunction, number>>;
    confusedUse?: Partial<Record<CognitiveFunction, number>>;
    transformativeUse?: Partial<Record<CognitiveFunction, number>>;
  };
  dichotomy?: Partial<Record<"I" | "E" | "S" | "N" | "T" | "F" | "J" | "P", number>>;
  bigFive?: Partial<Record<BigFiveTrait, number>>;
  hexaco?: Partial<Record<HEXACOTrait, number>>;
  enneagram?: Partial<Record<EnneagramType, number>>;
  enneagramCenters?: Partial<Record<EnneagramCenter, number>>;
  enneagramHarmonic?: Partial<Record<EnneagramHarmonicGroup, number>>;
  enneagramHornevian?: Partial<Record<EnneagramHornevianGroup, number>>;
  enneagramObjectRelation?: Partial<Record<EnneagramObjectRelation, number>>;
  instincts?: Partial<Record<Instinct, number>>;
  socionics?: Partial<Record<SocionicsType | SocionicsQuadra | CognitiveFunction, number>>;
  temperament?: Partial<Record<TemperamentType, number>>;
  keirsey?: Partial<Record<KeirseyTemperament, number>>;
  attitudinalPsyche?: Partial<Record<APAspect, number>>;
  psychosophy?: Partial<Record<APAspect, number>>;
  apPosition?: Partial<Record<APPositionKey, number>>;
  pySubtypeFocus?: Partial<Record<PYSubtypeFocus, number>>;
  disc?: Partial<Record<DISCType, number>>;
  riasec?: Partial<Record<RIASECType, number>>;
  moralStyle?: Partial<Record<MoralStyle, number>>;
  decisionStyle?: Partial<Record<DecisionStyle, number>>;
  conflictStyle?: Partial<Record<ConflictStyle, number>>;
  communicationStyle?: Partial<Record<CommunicationStyle, number>>;
  attachment?: Partial<Record<AttachmentKey, number>>;
  loveStyle?: Partial<Record<LoveStyle, number>>;
  boundaryStyle?: Partial<Record<BoundaryStyle, number>>;
  stress?: Partial<Record<StressResponse, number>>;
  coping?: Partial<Record<CopingStyle, number>>;
  defense?: Partial<Record<DefensePattern, number>>;
  shadow?: Partial<Record<string, number>>;
  coreFear?: Partial<Record<CoreFear, number>>;
  coreDesire?: Partial<Record<CoreDesire, number>>;
  coreWound?: Partial<Record<CoreWound, number>>;
  coreLonging?: Partial<Record<CoreLonging, number>>;
  values?: Partial<Record<ValueKey, number>>;
  workStyle?: Partial<Record<WorkStyle, number>>;
  learningStyle?: Partial<Record<LearningStyle, number>>;
  leadershipStyle?: Partial<Record<LeadershipStyle, number>>;
  motivationStyle?: Partial<Record<MotivationStyle, number>>;
  procrastinationStyle?: Partial<Record<ProcrastinationStyle, number>>;
  burnoutPattern?: Partial<Record<BurnoutPattern, number>>;
  empathyStyle?: Partial<Record<EmpathyStyle, number>>;
  angerStyle?: Partial<Record<AngerStyle, number>>;
  shameGuilt?: Partial<Record<ShameGuiltPattern, number>>;
  selfWorth?: Partial<Record<SelfWorthSource, number>>;
  socialMask?: Partial<Record<SocialMask, number>>;
  innerCritic?: Partial<Record<InnerCriticType, number>>;
  innerChildNeed?: Partial<Record<InnerChildNeed, number>>;
  narrativeIdentity?: Partial<Record<NarrativeIdentity, number>>;
  archetype?: Partial<Record<ArchetypeType, number>>;
  aesthetic?: Partial<Record<AestheticType, number>>;
  existentialStyle?: Partial<Record<ExistentialStyle, number>>;
  bias?: Partial<Record<string, number>>;
}

export interface AnswersState {
  answers: AnswerRecord[];
}

export interface AnswerRecord {
  questionId: string;
  optionId?: string;
  skipped?: boolean;
}

export interface RankedScore<K extends string> {
  key: K;
  score: number;
  rawScore: number;
  evidenceCount: number;
}

export interface MBTIMatch {
  type: MBTIType;
  fitScore: number;
  confidence: "high" | "moderate" | "low";
  stack: CognitiveFunction[];
  reasonsFor: string[];
  reasonsAgainst: string[];
  ambiguousParts: string[];
}

export interface DichotomyResult {
  I: number;
  E: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
  code: string;
  note?: string;
}

export interface FairnessWarning {
  id: string;
  severity: "info" | "caution" | "strong";
  message: string;
  affectedSystems?: TypologySystem[];
  affectedPaths?: string[];
}

export interface TieBreakSuggestion {
  id: string;
  target: string;
  reason: string;
  questionIds: string[];
  priority: number;
}

export interface RawScoreResult {
  byPath: Record<string, { opportunity: number; rawSelected: number; score: number; evidenceCount: number }>;
  selectedOptionIds: Record<string, string>;
  answeredQuestions: string[];
  skippedQuestions: string[];
  contextCounts: Partial<Record<ContextType, number>>;
  moduleCounts: Partial<Record<QuestionModule, number>>;
  systemOpportunityCounts: Partial<Record<TypologySystem, number>>;
  functionOpportunityCounts: Partial<Record<CognitiveFunction, number>>;
  responseFormCounts: Partial<Record<ResponseForm, number>>;
  totalQuestionsSeen: number;
  totalAnswered: number;
  totalSkipped: number;
  idealizedAnswerCount: number;
  stressAnswerCount: number;
  contradictionNotes: string[];
}

export interface ResultsSummary {
  testName: string;
  ethicalNote: string;
  functionRanking: RankedScore<CognitiveFunction>[];
  functionUsageRanking: Record<string, RankedScore<CognitiveFunction>[]>;
  mbtiTop3: MBTIMatch[];
  dichotomy: DichotomyResult;
  bigFive: RankedScore<BigFiveTrait>[];
  hexaco: RankedScore<HEXACOTrait>[];
  enneagramTop3: RankedScore<EnneagramType>[];
  enneagramWing?: string;
  instinctStacking: Instinct[];
  tritype: string;
  enneagramCenters: RankedScore<EnneagramCenter>[];
  enneagramHarmonic: RankedScore<EnneagramHarmonicGroup>[];
  enneagramHornevian: RankedScore<EnneagramHornevianGroup>[];
  enneagramObjectRelation: RankedScore<EnneagramObjectRelation>[];
  socionicsTop3: RankedScore<SocionicsType>[];
  socionicsQuadra: RankedScore<SocionicsQuadra>[];
  modelANote: string;
  temperament: RankedScore<TemperamentType>[];
  keirsey: RankedScore<KeirseyTemperament>[];
  attitudinalPsycheType: string;
  psychosophyType: string;
  apPositionRanking: RankedScore<APPositionKey>[];
  pySubtypeFocus: RankedScore<PYSubtypeFocus>[];
  disc: RankedScore<DISCType>[];
  riasecTop3: RankedScore<RIASECType>[];
  moralStyle: RankedScore<MoralStyle>[];
  decisionStyle: RankedScore<DecisionStyle>[];
  conflictStyle: RankedScore<ConflictStyle>[];
  communicationStyle: RankedScore<CommunicationStyle>[];
  attachment: RankedScore<AttachmentKey>[];
  loveStyle: RankedScore<LoveStyle>[];
  boundaryStyle: RankedScore<BoundaryStyle>[];
  stress: RankedScore<StressResponse>[];
  coping: RankedScore<CopingStyle>[];
  defense: RankedScore<DefensePattern>[];
  shadow: RankedScore<string>[];
  coreFear: RankedScore<CoreFear>[];
  coreDesire: RankedScore<CoreDesire>[];
  coreWound: RankedScore<CoreWound>[];
  coreLonging: RankedScore<CoreLonging>[];
  valuesRanking: RankedScore<ValueKey>[];
  workStyle: RankedScore<WorkStyle>[];
  learningStyle: RankedScore<LearningStyle>[];
  leadershipStyle: RankedScore<LeadershipStyle>[];
  motivationStyle: RankedScore<MotivationStyle>[];
  procrastinationStyle: RankedScore<ProcrastinationStyle>[];
  burnoutPattern: RankedScore<BurnoutPattern>[];
  empathyStyle: RankedScore<EmpathyStyle>[];
  angerStyle: RankedScore<AngerStyle>[];
  shameGuilt: RankedScore<ShameGuiltPattern>[];
  selfWorth: RankedScore<SelfWorthSource>[];
  socialMask: RankedScore<SocialMask>[];
  innerCritic: RankedScore<InnerCriticType>[];
  innerChildNeed: RankedScore<InnerChildNeed>[];
  narrativeIdentity: RankedScore<NarrativeIdentity>[];
  archetype: RankedScore<ArchetypeType>[];
  aesthetic: RankedScore<AestheticType>[];
  existentialStyle: RankedScore<ExistentialStyle>[];
  confidence: number;
  fairnessWarnings: FairnessWarning[];
  tieBreakSuggestions: TieBreakSuggestion[];
  notes: string[];
}
