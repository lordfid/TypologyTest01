import type { Question, TieBreakSuggestion } from "../types";

export interface ClosePair {
  target: string;
  gap: number;
  reason: string;
  priority?: number;
}

export const tieBreakTargets = [
  "INFJ vs INFP",
  "INFJ vs INTJ",
  "INTP vs INTJ",
  "ISFJ vs INFJ",
  "ISFP vs INFP",
  "ESTP vs ENTP",
  "ENFJ vs ESFJ",
  "ENFP vs INFP",
  "ISTP vs INTP",
  "ISTJ vs INTJ",
  "ESFP vs ENFP",
  "ENTJ vs ESTJ",
  "Enneagram 4 vs 6",
  "Enneagram 2 vs 9",
  "Enneagram 1 vs 6",
  "Enneagram 3 vs 8",
  "Enneagram 5 vs 9",
  "sp vs sx",
  "sp vs so",
  "sx vs so",
  "DISC D vs C",
  "DISC I vs S",
  "RIASEC Artistic vs Investigative",
  "RIASEC Social vs Enterprising",
  "avoidant-leaning vs secure-but-private",
  "anxious-leaning vs high-Fe concern",
  "conflict avoiding vs delayed-repair",
  "AP 1V vs 3V",
  "AP 2L vs 1L",
  "AP 3E vs high neuroticism",
  "Ni vs Si",
  "Ne vs Ni",
  "Fi vs Fe",
  "Ti vs Te",
  "Se vs Ne",
  "Si vs Te",
] as const;

export type TieBreakTarget = (typeof tieBreakTargets)[number];

const pairKey = (a: string, b: string): string => [a, b].sort().join(" vs ");

const mbtiPairMap: Record<string, TieBreakTarget> = {
  [pairKey("INFJ", "INFP")]: "INFJ vs INFP",
  [pairKey("INFJ", "INTJ")]: "INFJ vs INTJ",
  [pairKey("INTP", "INTJ")]: "INTP vs INTJ",
  [pairKey("ISFJ", "INFJ")]: "ISFJ vs INFJ",
  [pairKey("ISFP", "INFP")]: "ISFP vs INFP",
  [pairKey("ESTP", "ENTP")]: "ESTP vs ENTP",
  [pairKey("ENFJ", "ESFJ")]: "ENFJ vs ESFJ",
  [pairKey("ENFP", "INFP")]: "ENFP vs INFP",
  [pairKey("ISTP", "INTP")]: "ISTP vs INTP",
  [pairKey("ISTJ", "INTJ")]: "ISTJ vs INTJ",
  [pairKey("ESFP", "ENFP")]: "ESFP vs ENFP",
  [pairKey("ENTJ", "ESTJ")]: "ENTJ vs ESTJ",
};

export function inferMBTITieTarget(typeA?: string, typeB?: string): TieBreakTarget | undefined {
  if (!typeA || !typeB) return undefined;
  return mbtiPairMap[pairKey(typeA, typeB)];
}

export function buildTieBreakSuggestions(closePairs: ClosePair[], bank: Question[]): TieBreakSuggestion[] {
  const tieQuestions = bank.filter((question) => question.phase === "tie-break");
  const seen = new Set<string>();
  const suggestions: TieBreakSuggestion[] = [];

  for (const pair of closePairs) {
    if (seen.has(pair.target)) continue;
    const questionIds = tieQuestions
      .filter((question) => question.tieBreakerFor?.includes(pair.target) || question.target === pair.target)
      .map((question) => question.id);
    if (questionIds.length === 0) continue;
    seen.add(pair.target);
    suggestions.push({
      id: `tie-${pair.target.toLowerCase().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`,
      target: pair.target,
      reason: `${pair.reason} Selisih sementara sekitar ${pair.gap.toFixed(1)} poin, jadi pertanyaan pembeda layak muncul.`,
      questionIds,
      priority: pair.priority ?? Math.max(1, 100 - pair.gap),
    });
  }

  return suggestions.sort((a, b) => b.priority - a.priority || a.target.localeCompare(b.target));
}

export function shouldAskTieBreak(gap: number, evidenceCount: number, maxGap = 7): boolean {
  if (evidenceCount < 4) return false;
  return gap >= 0 && gap <= maxGap;
}
