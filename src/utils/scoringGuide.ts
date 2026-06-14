import type { TypologySystem } from "../types";

export const majorSystems: TypologySystem[] = [
  "mbti-cognitive-functions",
  "enneagram",
  "attitudinal-psyche",
  "psychosophy",
  "disc",
  "riasec"
];

export const fairnessRules = {
  functionOpportunityImbalanceRatio: 2.2,
  minOpportunityPerMajorSystem: 5,
  maxContextShare: {
    romance: 0.35,
    family: 0.35,
    workOrSchoolOrCareer: 0.35,
  },
  minGeneralHumanShare: 0.15,
  skippedStrongWarningShare: 0.25,
  idealizedStrongWarningShare: 0.25,
  stressHeavyWarningShare: 0.25,
  closeResultGap: 7,
};
