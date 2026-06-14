import type {
  CognitiveFunction,
  ContextType,
  FairnessWarning,
  Question,
  RawScoreResult,
  TypologySystem,
} from "../types";
import { fairnessRules, majorSystems } from "./scoringGuide";

export interface FairnessSnapshot {
  mbtiGap?: number;
  enneagramGap?: number;
  apPyStable?: boolean;
  bigFiveMbtiConflict?: boolean;
  closeResultPaths?: string[];
}

const cognitiveFunctions: CognitiveFunction[] = ["Ni", "Ne", "Si", "Se", "Fi", "Fe", "Ti", "Te"];
const generalContexts: ContextType[] = ["public", "alone", "crisis", "moral", "group", "memory", "future", "body", "creative", "chat", "friendship"];

const sumCounts = <K extends string>(counts: Partial<Record<K, number>>, keys: readonly K[]): number =>
  keys.reduce((sum, key) => sum + (counts[key] ?? 0), 0);

const share = (part: number, total: number): number => (total > 0 ? part / total : 0);

const pushWarning = (
  warnings: FairnessWarning[],
  id: string,
  severity: FairnessWarning["severity"],
  message: string,
  affectedSystems?: TypologySystem[],
  affectedPaths?: string[],
): void => {
  warnings.push({ id, severity, message, affectedSystems, affectedPaths });
};

export function runFairnessCheck(raw: RawScoreResult, bank: Question[], snapshot: FairnessSnapshot = {}): FairnessWarning[] {
  const warnings: FairnessWarning[] = [];
  const answered = raw.totalAnswered;
  const seen = raw.totalQuestionsSeen || bank.length;

  const functionCounts = cognitiveFunctions.map((fn) => raw.functionOpportunityCounts[fn] ?? 0).filter((value) => value > 0);
  if (functionCounts.length > 0) {
    const max = Math.max(...functionCounts);
    const min = Math.min(...functionCounts);
    if (min > 0 && max / min > fairnessRules.functionOpportunityImbalanceRatio) {
      pushWarning(
        warnings,
        "function-opportunity-imbalance",
        "caution",
        "Beberapa fungsi kognitif mendapat peluang skor jauh lebih banyak daripada fungsi lain. Hasil fungsi masih bisa dibaca, tetapi perlu hati-hati.",
        ["mbti-cognitive-functions"],
        cognitiveFunctions.map((fn) => `functions.${fn}`),
      );
    }
  }

  const lackingSystems = majorSystems.filter((system) => (raw.systemOpportunityCounts[system] ?? 0) < fairnessRules.minOpportunityPerMajorSystem);
  if (lackingSystems.length > 0) {
    pushWarning(
      warnings,
      "systems-low-data",
      "caution",
      "Ada sistem tipologi yang datanya lebih sedikit. Bagian hasil terkait sistem itu sebaiknya dibaca sebagai perkiraan awal.",
      lackingSystems,
    );
  }

  const familyShare = share(raw.contextCounts.family ?? 0, seen);
  const romanceShare = share(raw.contextCounts.romance ?? 0, seen);
  const workSchoolCareerShare = share(
    (raw.contextCounts.work ?? 0) + (raw.contextCounts.school ?? 0) + (raw.contextCounts.career ?? 0),
    seen,
  );
  const generalShare = share(sumCounts(raw.contextCounts, generalContexts), seen);
  const socialShare = share(
    (raw.contextCounts.friendship ?? 0) + (raw.contextCounts.group ?? 0) + (raw.contextCounts.chat ?? 0) + (raw.contextCounts.public ?? 0),
    seen,
  );
  const emotionalShare = share(
    (raw.contextCounts.romance ?? 0) + (raw.contextCounts.family ?? 0) + (raw.contextCounts.friendship ?? 0) + (raw.contextCounts.memory ?? 0),
    seen,
  );

  if (romanceShare > fairnessRules.maxContextShare.romance) {
    pushWarning(warnings, "too-much-romance", "caution", "Terlalu banyak adegan cinta dalam data yang dijawab. Pola relasi mungkin terlihat lebih kuat dari pola umum.", ["love-style", "relationship-attachment"]);
  }
  if (familyShare > fairnessRules.maxContextShare.family) {
    pushWarning(warnings, "too-much-family", "caution", "Terlalu banyak adegan keluarga dalam data yang dijawab. Hasil sosial bisa lebih terwarnai oleh pola keluarga.", ["relationship-attachment", "stress-response"]);
  }
  if (workSchoolCareerShare > fairnessRules.maxContextShare.workOrSchoolOrCareer) {
    pushWarning(warnings, "too-much-work-school", "caution", "Terlalu banyak adegan sekolah, kerja, atau karier. Hasil minat kerja mungkin lebih kuat daripada pola pribadi umum.", ["work-style", "riasec"]);
  }
  if (generalShare < fairnessRules.minGeneralHumanShare) {
    pushWarning(warnings, "low-general-context", "caution", "Adegan umum manusia kurang banyak dibanding konteks khusus. Hasil perlu dibaca sebagai potongan pola, bukan gambaran penuh.");
  }
  if (socialShare > 0.55) {
    pushWarning(warnings, "too-social-heavy", "info", "Jawaban banyak datang dari adegan sosial. Fungsi yang terkait suasana dan komunikasi bisa tampak lebih dominan.", ["communication-style", "relationship-attachment", "mbti-cognitive-functions"]);
  }
  if (emotionalShare > 0.5) {
    pushWarning(warnings, "too-emotional-heavy", "info", "Banyak adegan menyentuh tekanan emosional. Pola stres dan relasi mungkin tampak lebih menonjol.", ["stress-response", "relationship-attachment"]);
  }

  const skipShare = share(raw.totalSkipped, raw.totalQuestionsSeen);
  if (skipShare > fairnessRules.skippedStrongWarningShare) {
    pushWarning(warnings, "many-skipped", "strong", "Banyak pertanyaan dilewati. Normalisasi tetap berjalan, tetapi confidence hasil turun.");
  }

  const idealizedShare = share(raw.idealizedAnswerCount, answered);
  if (idealizedShare > fairnessRules.idealizedStrongWarningShare) {
    pushWarning(warnings, "many-idealized", "caution", "Banyak pilihan terlihat sangat ideal atau aman secara sosial. Hasil bisa lebih menggambarkan versi yang ingin dijaga daripada pola spontan.", ["social-mask"]);
  }

  const stressShare = share(raw.stressAnswerCount, answered);
  if (stressShare > fairnessRules.stressHeavyWarningShare) {
    pushWarning(warnings, "many-stress-answers", "caution", "Banyak jawaban datang dari respons tertekan. Hasil shadow, stress, dan defense mungkin lebih kuat daripada pola harian.", ["stress-response", "defense-pattern", "shadow-function-pattern"]);
  }

  if (raw.contradictionNotes.length > 0) {
    pushWarning(warnings, "answer-data-contradiction", "strong", "Ada jawaban yang tidak cocok dengan bank pertanyaan. Periksa ulang integrasi questionId and optionId.");
  }

  if (typeof snapshot.mbtiGap === "number" && snapshot.mbtiGap <= fairnessRules.closeResultGap) {
    pushWarning(warnings, "mbti-close-result", "info", "Top 1 dan Top 2 MBTI cukup dekat. Pertanyaan tie-break akan membantu membaca pola ini.", ["mbti-cognitive-functions"]);
  }
  if (typeof snapshot.enneagramGap === "number" && snapshot.enneagramGap <= fairnessRules.closeResultGap) {
    pushWarning(warnings, "enneagram-close-result", "info", "Top 1 dan Top 2 Enneagram cukup dekat. Core fear dan core desire perlu dibaca hati-hati.", ["enneagram", "core-fear", "core-desire"]);
  }
  if (snapshot.bigFiveMbtiConflict) {
    pushWarning(warnings, "big-five-mbti-conflict", "info", "Big Five dan MBTI memberi sinyal yang tidak sepenuhnya sama. Ini bisa terjadi karena perilaku luar berbeda dari cara mengambil keputusan dari dalam.", ["big-five", "mbti-cognitive-functions"]);
  }
  if (snapshot.apPyStable === false) {
    pushWarning(warnings, "ap-py-unstable", "info", "Posisi AP/PY tampak dekat satu sama lain. Hasil aspek sebaiknya dibaca sebagai kecenderungan, bukan susunan final.", ["attitudinal-psyche", "psychosophy", "ap-py-aspect-positions"]);
  }
  if (snapshot.closeResultPaths && snapshot.closeResultPaths.length > 0) {
    pushWarning(warnings, "close-paths", "info", "Beberapa skor penting sangat dekat, sehingga hasil ini lebih cocok dibaca sebagai peta kemungkinan.", undefined, snapshot.closeResultPaths);
  }

  if (warnings.length === 0) {
    pushWarning(warnings, "fairness-ok", "info", "Data terlihat cukup seimbang. Hasil tetap perlu dibaca sebagai kecenderungan, bukan kebenaran mutlak.");
  }

  return warnings;
}
