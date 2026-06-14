import type { PartialScoreBundle } from "../types";

export interface StatEntry {
  opportunity: number;
  rawSelected: number;
  score: number;
  evidenceCount: number;
}

export type FlatStatMap = Record<string, StatEntry>;
export type FlatScoreMap = Record<string, number>;

export function round(value: number, precision = 1): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

export function flattenScoreBundle(bundle: PartialScoreBundle | undefined): FlatScoreMap {
  const result: FlatScoreMap = {};
  if (!bundle) return result;

  function recurse(obj: any, prefix = "") {
    if (!obj || typeof obj !== "object") return;
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "number") {
        result[currentPath] = value;
      } else if (typeof value === "object") {
        recurse(value, currentPath);
      }
    }
  }

  recurse(bundle);
  return result;
}

export function maxPositiveByPath(optionScoreMaps: FlatScoreMap[]): FlatScoreMap {
  const result: FlatScoreMap = {};
  for (const map of optionScoreMaps) {
    for (const [path, val] of Object.entries(map)) {
      if (val > 0) {
        result[path] = Math.max(result[path] || 0, val);
      }
    }
  }
  return result;
}

export function addOpportunity(stats: FlatStatMap, opportunityMax: FlatScoreMap, answered: boolean): void {
  for (const [path, maxVal] of Object.entries(opportunityMax)) {
    if (!stats[path]) {
      stats[path] = { opportunity: 0, rawSelected: 0, score: 0, evidenceCount: 0 };
    }
    stats[path].opportunity += maxVal;
    if (answered && maxVal > 0) {
      stats[path].evidenceCount += 1;
    }
  }
}

export function addSelectedScores(stats: FlatStatMap, selectedScores: FlatScoreMap): void {
  for (const [path, val] of Object.entries(selectedScores)) {
    if (!stats[path]) {
      stats[path] = { opportunity: 0, rawSelected: 0, score: 0, evidenceCount: 0 };
    }
    stats[path].rawSelected += val;
  }
}

export function normalizeFlatStats(stats: FlatStatMap): FlatStatMap {
  for (const path of Object.keys(stats)) {
    const entry = stats[path];
    if (entry.opportunity > 0) {
      entry.score = round((entry.rawSelected / entry.opportunity) * 100, 1);
    } else {
      entry.score = 0;
    }
  }
  return stats;
}

export function getScore(stats: FlatStatMap, path: string): number {
  return stats[path]?.score ?? 0;
}

export function getRaw(stats: FlatStatMap, path: string): number {
  return stats[path]?.rawSelected ?? 0;
}

export function getEvidenceCount(stats: FlatStatMap, path: string): number {
  return stats[path]?.evidenceCount ?? 0;
}

export function getGroupScores<K extends string>(
  stats: FlatStatMap,
  group: string,
  keys: readonly K[]
): { key: K; score: number; rawScore: number; evidenceCount: number }[] {
  return keys
    .map((key) => {
      const path = `${group}.${key}`;
      return {
        key,
        score: getScore(stats, path),
        rawScore: getRaw(stats, path),
        evidenceCount: getEvidenceCount(stats, path),
      };
    })
    .sort((a, b) => b.score - a.score || b.rawScore - a.rawScore);
}

export function confidenceFromMargin(itemScore: number, nextScore: number, count: number): "high" | "moderate" | "low" {
  const margin = itemScore - nextScore;
  if (count < 3) return "low";
  if (margin >= 15 && count >= 6) return "high";
  if (margin >= 8 && count >= 4) return "moderate";
  return "low";
}
