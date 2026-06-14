import type { AnswerOption, QuestionModule, CognitiveFunction, TypologySystem } from "../types";

export type OptionProfileId = string;

export type OptionTemplate = Omit<AnswerOption, "id" | "text"> & { text: string };

export type ModuleConfig = {
  situationIntent: string;
  systemsMeasured: TypologySystem[];
  notMeasuredHere: TypologySystem[];
  canMeasure: string[];
  shouldNotMeasure: string[];
  likelyFunctions: CognitiveFunction[];
  unlikelyFunctions: CognitiveFunction[];
  likelyMotives: string[];
  invalidScoringWarnings: string[];
  memoryAnchor: string;
  expectedMemoryTrigger: string;
  emotionalPressure: string;
  actionPressure: string;
  responseType: string;
  functionContext: string;
  scoringReason: string;
  optionProfiles: OptionProfileId[];
};

export const optionProfiles: Record<string, OptionTemplate> = {
  "quietPattern": {
    "text": "Aku menahan jawaban sebentar, memperhatikan tanda kecil, lalu memilih kalimat yang paling aman.",
    "responseForm": "mengamati",
    "primarySignal": "membaca arah dari tanda kecil sebelum bergerak",
    "secondarySignal": "menjaga suasana tetap bisa dibicarakan",
    "functionPositionSignal": {
      "possibleDominant": ["Ni"],
      "possibleAuxiliary": ["Fe"],
      "possibleInferior": ["Se"]
    },
    "interpretationTag": "pola-membaca-arah",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan membaca perubahan halus sebelum merespons.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta takut bicara.",
      "Bukan bukti bahwa peserta selalu lambat."
    ],
    "scores": {
      "functions": { "Ni": 2, "Fe": 1 },
      "functionUsage": { "naturalUse": { "Ni": 2 }, "supportiveUse": { "Fe": 1 } },
      "dichotomy": { "I": 1, "N": 1, "F": 1 },
      "communicationStyle": { "reflective": 2, "reserved": 1 },
      "decisionStyle": { "intuitive": 1, "people-aware": 1 },
      "empathyStyle": { "emotional-attunement": 1 },
      "values": { "peace": 1 }
    }
  },
  "manyAngles": {
    "text": "Aku membuka beberapa kemungkinan, lalu memilih satu yang paling masuk akal untuk dicoba lebih dulu.",
    "responseForm": "menguji",
    "primarySignal": "membuka alternatif sebelum mengunci jawaban",
    "secondarySignal": "menguji sudut pandang",
    "functionPositionSignal": {
      "possibleDominant": ["Ne"],
      "possibleAuxiliary": ["Ti", "Fi"],
      "possibleTertiary": ["Te"]
    },
    "interpretationTag": "pola-membuka-kemungkinan",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan mencari beberapa jalan sebelum menetapkan respons.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta tidak bisa memilih.",
      "Bukan bukti bahwa peserta tidak serius."
    ],
    "scores": {
      "functions": { "Ne": 2, "Ti": 1 },
      "functionUsage": { "naturalUse": { "Ne": 2 }, "supportiveUse": { "Ti": 1 } },
      "dichotomy": { "N": 1, "P": 1 },
      "bigFive": { "openness": 2 },
      "hexaco": { "openness": 2 },
      "decisionStyle": { "intuitive": 1, "analytical": 1 },
      "learningStyle": { "trial-and-error": 1 },
      "values": { "freedom": 1, "growth": 1 }
    }
  },
  "pastReference": {
    "text": "Aku mengingat kejadian yang mirip, lalu memakai cara yang pernah membuat keadaan lebih rapi.",
    "responseForm": "memperbaiki",
    "primarySignal": "memakai pengalaman yang sudah terbukti",
    "secondarySignal": "memeriksa urutan kejadian",
    "functionPositionSignal": {
      "possibleDominant": ["Si"],
      "possibleAuxiliary": ["Te", "Fe"],
      "possibleInferior": ["Ne"]
    },
    "interpretationTag": "pola-rujukan-pengalaman",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan memakai pengalaman nyata sebagai pegangan.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta menolak hal baru.",
      "Bukan bukti bahwa peserta kaku."
    ],
    "scores": {
      "functions": { "Si": 2, "Te": 1 },
      "functionUsage": { "naturalUse": { "Si": 2 }, "supportiveUse": { "Te": 1 } },
      "dichotomy": { "S": 1, "J": 1 },
      "bigFive": { "conscientiousness": 2 },
      "hexaco": { "conscientiousness": 2 },
      "disc": { "C": 1, "S": 1 },
      "values": { "stability": 2, "safety": 1 },
      "learningStyle": { "memory-linked": 1, "step-by-step": 1 }
    }
  },
  "directTouch": {
    "text": "Aku menangani bagian yang tampak paling dekat dan bisa dibereskan saat itu juga.",
    "responseForm": "tindakan",
    "primarySignal": "bergerak pada keadaan nyata",
    "secondarySignal": "mencoba langsung",
    "functionPositionSignal": {
      "possibleDominant": ["Se"],
      "possibleAuxiliary": ["Ti", "Fi"],
      "possibleTertiary": ["Se"]
    },
    "interpretationTag": "pola-aksi-langsung",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan menurunkan tekanan lewat tindakan nyata.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta dangkal.",
      "Bukan bukti bahwa peserta tidak berpikir."
    ],
    "scores": {
      "functions": { "Se": 2, "Te": 1 },
      "functionUsage": { "naturalUse": { "Se": 2 }, "supportiveUse": { "Te": 1 } },
      "dichotomy": { "E": 1, "S": 1 },
      "disc": { "D": 2 },
      "stress": { "problem-solving-rush": 1 },
      "coping": { "problem-focused": 2 },
      "workStyle": { "fast-execution": 1 },
      "values": { "competence": 1 }
    }
  },
  "innerLine": {
    "text": "Aku menyebut batasku dengan kalimat tenang, meski suasana menjadi sedikit kaku.",
    "responseForm": "menolak",
    "primarySignal": "menjaga batas pribadi",
    "secondarySignal": "tidak mengkhainati rasa diri",
    "functionPositionSignal": {
      "possibleDominant": ["Fi"],
      "possibleAuxiliary": ["Se", "Ne"],
      "possibleInferior": ["Te"]
    },
    "interpretationTag": "pola-batas-diri",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan menjaga kesesuaian dengan nilai pribadi.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta egois.",
      "Bukan bukti bahwa peserta menolak kedekatan."
    ],
    "scores": {
      "functions": { "Fi": 2 },
      "functionUsage": { "naturalUse": { "Fi": 2 } },
      "dichotomy": { "I": 1, "F": 1 },
      "boundaryStyle": { "clear": 2, "protective": 1 },
      "moralStyle": { "integrity-based": 2, "freedom-based": 1 },
      "values": { "authenticity": 2, "independence": 1 },
      "attachment": { "guarded-but-caring": 1 }
    }
  },
  "socialRepair": {
    "text": "Aku menurunkan nada, mengakui bagian yang terasa bagi mereka, lalu membuka jalan bicara pelan.",
    "responseForm": "menenangkan",
    "primarySignal": "memperbaiki ketegangan sosial",
    "secondarySignal": "membaca perasaan sekitar",
    "functionPositionSignal": {
      "possibleDominant": ["Fe"],
      "possibleAuxiliary": ["Ni", "Si"],
      "possibleInferior": ["Ti"]
    },
    "interpretationTag": "pola-perbaikan-suasana",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan merawat jalur bicara agar hubungan tidak rusak.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta palsu.",
      "Bukan bukti bahwa peserta tidak punya pendirian."
    ],
    "scores": {
      "functions": { "Fe": 2, "Ni": 1 },
      "functionUsage": { "naturalUse": { "Fe": 2 }, "supportiveUse": { "Ni": 1 } },
      "dichotomy": { "E": 1, "F": 1, "J": 1 },
      "conflictStyle": { "diplomatic": 2, "mediating": 1 },
      "communicationStyle": { "warm": 2 },
      "empathyStyle": { "emotional-attunement": 2 },
      "attachment": { "secure-leaning": 1 },
      "values": { "kindness": 1, "peace": 1 }
    }
  },
  "clarifyLogic": {
    "text": "Aku meminta contoh yang jelas agar alasannya tidak tinggal sebagai kesan kabur.",
    "responseForm": "menguji",
    "primarySignal": "mencari konsistensi alasan",
    "secondarySignal": "meminta definisi atau bukti",
    "functionPositionSignal": {
      "possibleDominant": ["Ti"],
      "possibleAuxiliary": ["Ne", "Se"],
      "possibleInferior": ["Fe"]
    },
    "interpretationTag": "pola-klarifikasi-logis",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan membongkar alasan sebelum menerima kesimpulan.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta dingin.",
      "Bukan bukti bahwa peserta tidak peduli perasaan."
    ],
    "scores": {
      "functions": { "Ti": 2, "Ne": 1 },
      "functionUsage": { "naturalUse": { "Ti": 2 }, "supportiveUse": { "Ne": 1 } },
      "dichotomy": { "I": 1, "T": 1, "P": 1 },
      "decisionStyle": { "analytical": 2 },
      "communicationStyle": { "questioning": 2, "precise": 1 },
      "riasec": { "Investigative": 1 },
      "values": { "truth": 2, "knowledge": 1 }
    }
  },
  "organizeOutcome": {
    "text": "Aku membagi urusan menjadi langkah kecil agar keadaan bergerak tanpa banyak berputar.",
    "responseForm": "mengatur",
    "primarySignal": "mengubah masalah menjadi langkah kerja",
    "secondarySignal": "mengejar hasil yang jelas",
    "functionPositionSignal": {
      "possibleDominant": ["Te"],
      "possibleAuxiliary": ["Ni", "Si"],
      "possibleInferior": ["Fi"]
    },
    "interpretationTag": "pola-struktur-hasil",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan memperbaiki keadaan lewat struktur dan langkah nyata.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta tidak peka.",
      "Bukan bukti bahwa peserta hanya mengejar hasil."
    ],
    "scores": {
      "functions": { "Te": 2, "Si": 1 },
      "functionUsage": { "naturalUse": { "Te": 2 }, "supportiveUse": { "Si": 1 } },
      "dichotomy": { "E": 1, "T": 1, "J": 1 },
      "disc": { "D": 1, "C": 1 },
      "decisionStyle": { "evidence-led": 1, "practical": 2 },
      "workStyle": { "structured": 2 },
      "leadershipStyle": { "directive": 1 },
      "values": { "competence": 2 }
    }
  },
  "askSupport": {
    "text": "Aku mengajak satu orang yang cukup aman untuk memeriksa keadaan bersamaku.",
    "responseForm": "meminta-bantuan",
    "primarySignal": "mencari dukungan tanpa menyerahkan seluruh keputusan",
    "secondarySignal": "membuka perbaikan hubungan",
    "functionPositionSignal": {
      "possibleAuxiliary": ["Fe", "Te"],
      "possibleTertiary": ["Si"]
    },
    "interpretationTag": "pola-meminta-dukungan",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan memakai dukungan sebagai cara menata ulang keadaan.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta tidak mandiri.",
      "Bukan bukti bahwa peserta selalu butuh persetujuan."
    ],
    "scores": {
      "attachment": { "secure-leaning": 2, "independent-but-connected": 1 },
      "coping": { "social-support": 2 },
      "communicationStyle": { "warm": 1 },
      "conflictStyle": { "delayed-repair": 1 },
      "values": { "love": 1 },
      "bias": { "social-desirable": 1 }
    }
  },
  "pauseRegulate": {
    "text": "Aku menjauh sebentar, menurunkan panas di dada, lalu kembali saat kalimatku lebih bersih.",
    "responseForm": "menjauh",
    "primarySignal": "mengatur rasa sebelum merespons",
    "secondarySignal": "menunda agar tidak merusak keadaan",
    "functionPositionSignal": {
      "possibleInferior": ["Se", "Fe"],
      "possibleTransformative": ["Fi", "Ni"]
    },
    "interpretationTag": "pola-jeda-emosi",
    "evidenceText": "Pilihan ini menunjukkan kecenderungan mengambil jarak agar respons tidak lahir dari panik.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta tidak peduli.",
      "Bukan bukti bahwa peserta selalu menghindar."
    ],
    "stressClue": "jeda muncul ketika rasa sudah terlalu tinggi",
    "scores": {
      "stress": { "withdrawal": 2 },
      "coping": { "emotion-focused": 2, "acceptance": 1 },
      "defense": { "withdrawing": 1 },
      "communicationStyle": { "reserved": 1 },
      "boundaryStyle": { "delayed": 1 },
      "bias": { "stress-heavy": 1 }
    }
  },
  "reformStandard": {
    "text": "Aku memperbaiki bagian yang terasa keliru, lalu menyebut standar yang perlu dipegang.",
    "responseForm": "memperbaiki",
    "primarySignal": "dorongan memperbaiki yang salah",
    "secondarySignal": "menahan rasa tidak tepat",
    "functionPositionSignal": {
      "possibleDominant": ["Si", "Te", "Fi"],
      "possibleCritical": ["Te"]
    },
    "interpretationTag": "ennea-1-standar",
    "evidenceText": "Pilihan ini menunjukkan rasa tidak nyaman terhadap hal yang terasa salah atau tidak pantas.",
    "doNotInfer": ["Bukan bukti bahwa peserta suka menghakimi."],
    "scores": {
      "enneagram": { "1": 3 },
      "enneagramCenters": { "gut": 2 },
      "enneagramHarmonic": { "competency": 2 },
      "enneagramHornevian": { "compliant": 1 },
      "enneagramObjectRelation": { "frustration": 1 },
      "coreFear": { "being-wrong": 2 },
      "coreDesire": { "rightness": 2 },
      "stress": { "perfection-spiral": 1 },
      "moralStyle": { "duty-based": 1, "integrity-based": 2 },
      "values": { "fairness": 1, "truth": 1 }
    }
  },
  "neededCare": {
    "text": "Aku membantu lebih dulu, sambil berharap mereka menangkap bahwa aku juga butuh dipedulikan.",
    "responseForm": "tindakan",
    "primarySignal": "mencari kedekatan lewat kehadiran",
    "secondarySignal": "kebutuhan balik yang tidak langsung disebut",
    "functionPositionSignal": {
      "possibleDominant": ["Fe"],
      "possibleAuxiliary": ["Si", "Ni"]
    },
    "interpretationTag": "ennea-2-kehadiran",
    "evidenceText": "Pilihan ini menunjukkan pola memberi sebagai jalan untuk menjaga ikatan.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta manipulatif.",
      "Bukan bukti bahwa peserta lemah."
    ],
    "scores": {
      "enneagram": { "2": 3 },
      "enneagramCenters": { "heart": 2 },
      "enneagramHarmonic": { "positive-outlook": 1 },
      "enneagramHornevian": { "compliant": 2 },
      "enneagramObjectRelation": { "rejection": 1 },
      "coreFear": { "being-unneeded": 2 },
      "coreDesire": { "beloved-presence": 2 },
      "values": { "love": 2, "kindness": 1 },
      "selfWorth": { "being-needed": 2 },
      "defense": { "pleasing": 1 }
    }
  },
  "proveWorth": {
    "text": "Aku merapikan hasilku dulu, karena rasa maluku turun saat ada bukti bahwa aku mampu.",
    "responseForm": "memperbaiki",
    "primarySignal": "mengubah malu menjadi capaian",
    "secondarySignal": "mencari pengakuan lewat hasil",
    "functionPositionSignal": {
      "possibleDominant": ["Te", "Fe"],
      "possibleTertiary": ["Se"]
    },
    "interpretationTag": "ennea-3-capaian",
    "evidenceText": "Pilihan ini menunjukkan pola menstabilkan harga diri lewat bukti kemampuan.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta palsu.",
      "Bukan bukti bahwa peserta hanya peduli citra."
    ],
    "scores": {
      "enneagram": { "3": 3 },
      "enneagramCenters": { "heart": 2 },
      "enneagramHarmonic": { "competency": 1 },
      "enneagramHornevian": { "assertive": 2 },
      "enneagramObjectRelation": { "attachment": 1 },
      "coreFear": { "being-worthless": 2 },
      "coreDesire": { "recognized-worth": 2 },
      "values": { "success": 2, "recognition": 2 },
      "selfWorth": { "competence": 1, "impact": 1 },
      "motivationStyle": { "achievement": 2 }
    }
  },
  "uniqueSeen": {
    "text": "Aku mencari kata yang paling jujur untuk rasa itu, karena jawaban umum terasa tidak memuat diriku.",
    "responseForm": "menunda",
    "primarySignal": "ingin dipahami secara utuh",
    "secondarySignal": "peka pada rasa tidak terlihat",
    "functionPositionSignal": {
      "possibleDominant": ["Fi", "Ni"],
      "possibleAuxiliary": ["Ne"]
    },
    "interpretationTag": "ennea-4-keutuhan",
    "evidenceText": "Pilihan ini menunjukkan kebutuhan agar rasa pribadi tidak diringkas terlalu cepat.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta dramatis.",
      "Bukan bukti bahwa peserta sengaja berbeda."
    ],
    "scores": {
      "enneagram": { "4": 3 },
      "enneagramCenters": { "heart": 2 },
      "enneagramHarmonic": { "reactive": 1 },
      "enneagramHornevian": { "withdrawn": 2 },
      "enneagramObjectRelation": { "frustration": 1 },
      "coreFear": { "having-no-place": 2 },
      "coreDesire": { "whole-identity": 2 },
      "coreWound": { "unseen": 2 },
      "coreLonging": { "to-be-understood": 2 },
      "values": { "authenticity": 2, "beauty": 1 },
      "selfWorth": { "authenticity": 2 }
    }
  },
  "protectSpace": {
    "text": "Aku menarik diri untuk memahami semuanya sendiri sebelum memberi jawaban yang menguras energi.",
    "responseForm": "menjauh",
    "primarySignal": "menjaga ruang dan kapasitas",
    "secondarySignal": "menunda keterlibatan sampai merasa siap",
    "functionPositionSignal": {
      "possibleDominant": ["Ti", "Ni"],
      "possibleAuxiliary": ["Ne"],
      "possibleInferior": ["Fe"]
    },
    "interpretationTag": "ennea-5-ruang",
    "evidenceText": "Pilihan ini menunjukkan kebutuhan ruang agar tidak terasa terserap oleh tuntutan.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta tidak punya perasaan.",
      "Bukan bukti bahwa peserta tidak ingin dekat."
    ],
    "scores": {
      "enneagram": { "5": 3 },
      "enneagramCenters": { "head": 2 },
      "enneagramHarmonic": { "competency": 2 },
      "enneagramHornevian": { "withdrawn": 2 },
      "enneagramObjectRelation": { "rejection": 1 },
      "coreFear": { "being-incapable": 2 },
      "coreDesire": { "understanding-and-space": 2 },
      "instincts": { "sp": 1 },
      "attachment": { "avoidant-leaning": 1, "loyal-but-slow-to-trust": 1 },
      "defense": { "withdrawing": 2 },
      "values": { "knowledge": 2, "independence": 1 }
    }
  },
  "safetyTest": {
    "text": "Aku memeriksa siapa yang bisa dipercaya, lalu bertanya satu hal kecil untuk melihat konsistensinya.",
    "responseForm": "menguji",
    "primarySignal": "mencari kepastian dan dukungan yang stabil",
    "secondarySignal": "menguji keandalan",
    "functionPositionSignal": {
      "possibleDominant": ["Si", "Ti"],
      "possibleAuxiliary": ["Fe", "Te"],
      "possibleInferior": ["Ne"]
    },
    "interpretationTag": "ennea-6-keamanan",
    "evidenceText": "Pilihan ini menunjukkan kebutuhan memeriksa kepercayaan sebelum merasa aman.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta paranoid.",
      "Bukan bukti bahwa peserta tidak berani."
    ],
    "scores": {
      "enneagram": { "6": 3 },
      "enneagramCenters": { "head": 2 },
      "enneagramHarmonic": { "reactive": 1 },
      "enneagramHornevian": { "compliant": 2 },
      "enneagramObjectRelation": { "attachment": 1 },
      "coreFear": { "being-unsafe": 2 },
      "coreDesire": { "security-and-trust": 2 },
      "instincts": { "sp": 1, "so": 1 },
      "values": { "safety": 2, "loyalty": 1 },
      "stress": { "reassurance-seeking": 1 }
    }
  },
  "openEscape": {
    "text": "Aku mencari jalan lain yang tetap mungkin, supaya keadaan tidak terasa mengunci napasku.",
    "responseForm": "mencoba",
    "primarySignal": "mencari pilihan saat tertekan",
    "secondarySignal": "menjaga ruang bernapas",
    "functionPositionSignal": {
      "possibleDominant": ["Ne", "Se"],
      "possibleAuxiliary": ["Fi", "Ti"]
    },
    "interpretationTag": "ennea-7-pilihan",
    "evidenceText": "Pilihan ini menunjukkan pola menurunkan sakit lewat alternatif dan ruang gerak.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta dangkal.",
      "Bukan bukti bahwa peserta lari dari semua tanggung jawab."
    ],
    "scores": {
      "enneagram": { "7": 3 },
      "enneagramCenters": { "head": 2 },
      "enneagramHarmonic": { "positive-outlook": 2 },
      "enneagramHornevian": { "assertive": 2 },
      "enneagramObjectRelation": { "frustration": 1 },
      "coreFear": { "being-trapped": 2 },
      "coreDesire": { "freedom-and-options": 2 },
      "instincts": { "sx": 1 },
      "values": { "freedom": 2, "adventure": 1 },
      "stress": { "distraction-seeking": 1 }
    }
  },
  "strongControl": {
    "text": "Aku mengambil posisi tegas agar batasku tidak diinjak dan keputusan tidak diambil dari tanganku.",
    "responseForm": "menghadapi",
    "primarySignal": "menolak dikontrol",
    "secondarySignal": "melindungi kekuatan diri",
    "functionPositionSignal": {
      "possibleDominant": ["Se", "Te"],
      "possibleAuxiliary": ["Ti", "Ni"],
      "possibleCritical": ["Fi"]
    },
    "interpretationTag": "ennea-8-kendali",
    "evidenceText": "Pilihan ini menunjukkan dorongan mempertahankan kendali saat batas terasa terancam.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta kasar.",
      "Bukan bukti bahwa peserta tidak bisa lembut."
    ],
    "scores": {
      "enneagram": { "8": 3 },
      "enneagramCenters": { "gut": 2 },
      "enneagramHarmonic": { "reactive": 2 },
      "enneagramHornevian": { "assertive": 2 },
      "enneagramObjectRelation": { "rejection": 1 },
      "coreFear": { "being-controlled": 2 },
      "coreDesire": { "self-direction": 2 },
      "disc": { "D": 2 },
      "boundaryStyle": { "protective": 2 },
      "values": { "control": 2, "independence": 1 },
      "angerStyle": { "direct": 1 }
    }
  },
  "keepPeace": {
    "text": "Aku membuat suasana turun dulu, karena perang kecil itu terasa bisa menyerap semua energiku.",
    "responseForm": "menenangkan",
    "primarySignal": "menjaga damai dan ritme batin",
    "secondarySignal": "menolak ditarik ke konflik",
    "functionPositionSignal": {
      "possibleDominant": ["Si", "Fe"],
      "possibleAuxiliary": ["Fi"],
      "possibleInferior": ["Te"]
    },
    "interpretationTag": "ennea-9-damai",
    "evidenceText": "Pilihan ini menunjukkan kebutuhan menjaga ketenangan agar diri tidak tercerai oleh tekanan.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta tidak punya pendapat.",
      "Bukan bukti bahwa peserta selalu pasif."
    ],
    "scores": {
      "enneagram": { "9": 3 },
      "enneagramCenters": { "gut": 2 },
      "enneagramHarmonic": { "positive-outlook": 2 },
      "enneagramHornevian": { "withdrawn": 1 },
      "enneagramObjectRelation": { "attachment": 1 },
      "coreFear": { "being-separated-from-peace": 2 },
      "coreDesire": { "inner-peace": 2 },
      "conflictStyle": { "avoidant": 1, "mediating": 1 },
      "values": { "peace": 2, "comfort": 1 },
      "stress": { "numbness": 1 }
    }
  },
  "spGuard": {
    "text": "Aku mengecek tenaga, waktu, dan hal dasar dulu sebelum menyanggupi apa pun.",
    "responseForm": "mengamati",
    "primarySignal": "menjaga kebutuhan dasar dan kapasitas",
    "secondarySignal": "memeriksa batas energi",
    "interpretationTag": "insting-sp",
    "evidenceText": "Pilihan ini menunjukkan perhatian pada energi, waktu, dan rasa aman praktis.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta penakut.",
      "Bukan bukti bahwa peserta pelit."
    ],
    "scores": {
      "instincts": { "sp": 3 },
      "values": { "safety": 1, "stability": 1 },
      "boundaryStyle": { "clear": 1 },
      "coping": { "planning": 1 }
    }
  },
  "sxFocus": {
    "text": "Aku mencari percakapan yang lebih jujur satu-satu, karena bagian pentingnya terasa hilang di permukaan.",
    "responseForm": "menghadapi",
    "primarySignal": "mencari intensitas dan ikatan khusus",
    "secondarySignal": "mendekati inti rasa",
    "interpretationTag": "insting-sx",
    "evidenceText": "Pilihan ini menunjukkan perhatian pada kedalaman satu-satu, bukan sekadar suasana ramai.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta selalu romantis.",
      "Bukan bukti bahwa peserta suka drama."
    ],
    "scores": {
      "instincts": { "sx": 3 },
      "values": { "authenticity": 1, "love": 1 },
      "communicationStyle": { "direct": 1 },
      "attachment": { "intense-but-afraid": 1 },
      "loveStyle": { "intense-bond": 2 }
    }
  },
  "soPlace": {
    "text": "Aku membaca peranku di kelompok itu dulu, lalu memilih cara hadir yang tidak merusak posisi siapa pun.",
    "responseForm": "mengamati",
    "primarySignal": "membaca posisi sosial dan peran",
    "secondarySignal": "menjaga jaringan tetap utuh",
    "interpretationTag": "insting-so",
    "evidenceText": "Pilihan ini menunjukkan perhatian pada tempat sosial, peran, dan dampak terhadap kelompok.",
    "doNotInfer": [
      "Bukan bukti bahwa peserta ikut arus.",
      "Bukan bukti bahwa peserta hanya peduli reputasi."
    ],
    "scores": {
      "instincts": { "so": 3 },
      "values": { "influence": 1 },
      "socialMask": { "polished-pleasant": 1 },
      "communicationStyle": { "warm": 1 },
      "leadershipStyle": { "facilitative": 1 }
    }
  },
  "practicalTool": {
    "text": "Aku memilih bagian yang bisa disentuh, dicoba, atau dibuat bentuk nyatanya.",
    "responseForm": "mencoba",
    "primarySignal": "minat pada praktik dan benda nyata",
    "secondarySignal": "belajar lewat tangan",
    "interpretationTag": "riasec-r",
    "evidenceText": "Pilihan ini menunjukkan ketertarikan pada tugas konkret dan praktik langsung.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak suka berpikir."],
    "scores": {
      "riasec": { "Realistic": 3 },
      "learningStyle": { "hands-on": 2 },
      "workStyle": { "fast-execution": 1 },
      "functions": { "Se": 1 },
      "disc": { "D": 1 }
    }
  },
  "investigateCause": {
    "text": "Aku menelusuri penyebabnya sampai urutan alasannya bisa dijelaskan dengan bersih.",
    "responseForm": "menguji",
    "primarySignal": "minat memahami sebab",
    "secondarySignal": "menguji alasan",
    "interpretationTag": "riasec-i",
    "evidenceText": "Pilihan ini menunjukkan ketertarikan pada analisis dan sebab di balik kejadian.",
    "doNotInfer": ["Bukan bukti bahwa peserta kurang ramah."],
    "scores": {
      "riasec": { "Investigative": 3 },
      "learningStyle": { "research-deep": 2 },
      "functions": { "Ti": 1, "Ni": 1 },
      "bigFive": { "openness": 1 },
      "values": { "knowledge": 2 }
    }
  },
  "creativeShape": {
    "text": "Aku mengubahnya menjadi bentuk, cerita, gambar, atau susunan yang lebih terasa hidup.",
    "responseForm": "mencoba",
    "primarySignal": "minat pada ekspresi dan bentuk",
    "secondarySignal": "mengolah rasa menjadi karya",
    "interpretationTag": "riasec-a",
    "evidenceText": "Pilihan ini menunjukkan ketertarikan pada ekspresi, desain, dan cara menyusun rasa.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak praktis."],
    "scores": {
      "riasec": { "Artistic": 3 },
      "learningStyle": { "visual-creative": 2 },
      "functions": { "Fi": 1, "Ne": 1 },
      "values": { "creativity": 2, "beauty": 2 },
      "archetype": { "creator": 1 }
    }
  },
  "helpTeach": {
    "text": "Aku membantu seseorang memahami bagian sulitnya sampai ia bisa berjalan sendiri.",
    "responseForm": "meminta-bantuan",
    "primarySignal": "minat mendampingi dan mengajar",
    "secondarySignal": "memudahkan orang lain berkembang",
    "interpretationTag": "riasec-s",
    "evidenceText": "Pilihan ini menunjukkan ketertarikan pada tugas sosial, mengajar, atau mendampingi.",
    "doNotInfer": ["Bukan bukti bahwa peserta harus selalu melayani orang."],
    "scores": {
      "riasec": { "Social": 3 },
      "learningStyle": { "teaching-to-learn": 2 },
      "functions": { "Fe": 1, "Si": 1 },
      "values": { "kindness": 2, "growth": 1 },
      "workStyle": { "service-oriented": 2 }
    }
  },
  "persuadeMove": {
    "text": "Aku menyusun kalimat yang membuat orang mau bergerak tanpa merasa dipaksa.",
    "responseForm": "ucapan",
    "primarySignal": "minat menggerakkan dan memengaruhi",
    "secondarySignal": "mangarahkan energi sosial",
    "interpretationTag": "riasec-e",
    "evidenceText": "Pilihan ini menunjukkan ketertarikan pada pengaruh, presentasi, atau penggerak keputusan.",
    "doNotInfer": ["Bukan bukti bahwa peserta manipulatif."],
    "scores": {
      "riasec": { "Enterprising": 3 },
      "disc": { "I": 1, "D": 1 },
      "communicationStyle": { "direct": 1, "warm": 1 },
      "leadershipStyle": { "visionary": 1 },
      "values": { "influence": 2, "success": 1 }
    }
  },
  "carefulArchive": {
    "text": "Aku merapikan data, urutan, dan catatan agar orang lain tidak bingung setelahnya.",
    "responseForm": "mengatur",
    "primarySignal": "minat pada struktur dan ketelitian",
    "secondarySignal": "menjaga arsip tetap rapi",
    "interpretationTag": "riasec-c",
    "evidenceText": "Pilihan ini menunjukkan ketertarikan pada data, arsip, dan keteraturan kerja.",
    "doNotInfer": ["Bukan bukti bahwa peserta membosankan."],
    "scores": {
      "riasec": { "Conventional": 3 },
      "disc": { "C": 2 },
      "learningStyle": { "step-by-step": 1 },
      "functions": { "Si": 1, "Te": 1 },
      "values": { "stability": 1, "competence": 1 },
      "workStyle": { "quality-focused": 1 }
    }
  },
  "ap1V": {
    "text": "Aku memegang arah diri itu dengan yakin dan tidak banyak mencari izin dari luar.",
    "responseForm": "menghadapi",
    "primarySignal": "percaya diri pada aspek V",
    "secondarySignal": "self-directed",
    "interpretationTag": "ap-1V",
    "evidenceText": "Pilihan ini menunjukkan sikap mantap dan diarahkan dari dalam pada aspek V.",
    "doNotInfer": ["Bukan ukuran kemampuan mutlak.", "Bukan bukti bahwa peserta selalu benar."],
    "scores": {
      "attitudinalPsyche": { "V": 2 },
      "psychosophy": { "V": 2 },
      "apPosition": { "1V": 3 },
      "pySubtypeFocus": { "self-focused": 1 }
    }
  },
  "ap2V": {
    "text": "Aku nyaman membahas arah diri itu bersama orang lain sampai bentuknya terasa pas.",
    "responseForm": "ucapan",
    "primarySignal": "fleksibel dan dialogis pada aspek V",
    "secondarySignal": "memproses bersama",
    "interpretationTag": "ap-2V",
    "evidenceText": "Pilihan ini menunjukkan sikap suportif dan terbuka untuk dialog pada aspek V.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak punya pendapat."],
    "scores": {
      "attitudinalPsyche": { "V": 2 },
      "psychosophy": { "V": 2 },
      "apPosition": { "2V": 3 },
      "pySubtypeFocus": { "others-focused": 1, "adaptation-focused": 1 }
    }
  },
  "ap3V": {
    "text": "Aku terlihat tenang, tetapi bagian tentang arah diri itu mudah membuatku defensif.",
    "responseForm": "menunda",
    "primarySignal": "sensitif pada aspek V",
    "secondarySignal": "rawan merasa dinilai",
    "interpretationTag": "ap-3V",
    "evidenceText": "Pilihan ini menunjukkan aspek V terasa rawan dan mudah terkait harga diri.",
    "doNotInfer": ["Bukan bukti bahwa peserta lemah.", "Bukan diagnosis kecemasan."],
    "stressClue": "defensif saat aspek itu disentuh",
    "scores": {
      "attitudinalPsyche": { "V": 2 },
      "psychosophy": { "V": 2 },
      "apPosition": { "3V": 3 },
      "pySubtypeFocus": { "depth-focused": 1 },
      "bias": { "stress-heavy": 1 }
    }
  },
  "ap4V": {
    "text": "Aku membiarkan arah diri itu mengikuti keadaan, selama hal penting lain tetap aman.",
    "responseForm": "menenangkan",
    "primarySignal": "prioritas rendah pada aspek V",
    "secondarySignal": "mudah mengikuti",
    "interpretationTag": "ap-4V",
    "evidenceText": "Pilihan ini menunjukkan aspek V cenderung menjadi prioritas rendah dalam respons.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak mampu di aspek itu."],
    "scores": {
      "attitudinalPsyche": { "V": 1 },
      "psychosophy": { "V": 1 },
      "apPosition": { "4V": 3 },
      "pySubtypeFocus": { "adaptation-focused": 1 }
    }
  },
  "ap1L": {
    "text": "Aku memegang alasan itu dengan yakin dan tidak banyak mencari izin dari luar.",
    "responseForm": "menghadapi",
    "primarySignal": "percaya diri pada aspek L",
    "secondarySignal": "self-directed",
    "interpretationTag": "ap-1L",
    "evidenceText": "Pilihan ini menunjukkan sikap mantap dan diarahkan dari dalam pada aspek L.",
    "doNotInfer": ["Bukan ukuran kemampuan mutlak.", "Bukan bukti bahwa peserta selalu benar."],
    "scores": {
      "attitudinalPsyche": { "L": 2 },
      "psychosophy": { "L": 2 },
      "apPosition": { "1L": 3 },
      "pySubtypeFocus": { "self-focused": 1 }
    }
  },
  "ap2L": {
    "text": "Aku nyaman membahas alasan itu bersama orang lain sampai bentuknya terasa pas.",
    "responseForm": "ucapan",
    "primarySignal": "fleksibel dan dialogis pada aspek L",
    "secondarySignal": "memproses bersama",
    "interpretationTag": "ap-2L",
    "evidenceText": "Pilihan ini menunjukkan sikap suportif dan terbuka untuk dialog pada aspek L.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak punya pendapat."],
    "scores": {
      "attitudinalPsyche": { "L": 2 },
      "psychosophy": { "L": 2 },
      "apPosition": { "2L": 3 },
      "pySubtypeFocus": { "others-focused": 1, "adaptation-focused": 1 }
    }
  },
  "ap3L": {
    "text": "Aku terlihat tenang, tetapi bagian tentang alasan itu mudah membuatku defensif.",
    "responseForm": "menunda",
    "primarySignal": "sensitif pada aspek L",
    "secondarySignal": "rawan merasa dinilai",
    "interpretationTag": "ap-3L",
    "evidenceText": "Pilihan ini menunjukkan aspek L terasa rawan dan mudah terkait harga diri.",
    "doNotInfer": ["Bukan bukti bahwa peserta lemah.", "Bukan diagnosis kecemasan."],
    "stressClue": "defensif saat aspek itu disentuh",
    "scores": {
      "attitudinalPsyche": { "L": 2 },
      "psychosophy": { "L": 2 },
      "apPosition": { "3L": 3 },
      "pySubtypeFocus": { "depth-focused": 1 },
      "bias": { "stress-heavy": 1 }
    }
  },
  "ap4L": {
    "text": "Aku membiarkan alasan itu mengikuti keadaan, selama hal penting lain tetap aman.",
    "responseForm": "menenangkan",
    "primarySignal": "prioritas rendah pada aspek L",
    "secondarySignal": "mudah mengikuti",
    "interpretationTag": "ap-4L",
    "evidenceText": "Pilihan ini menunjukkan aspek L cenderung menjadi prioritas rendah dalam respons.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak mampu di aspek itu."],
    "scores": {
      "attitudinalPsyche": { "L": 1 },
      "psychosophy": { "L": 1 },
      "apPosition": { "4L": 3 },
      "pySubtypeFocus": { "adaptation-focused": 1 }
    }
  },
  "ap1F": {
    "text": "Aku memegang hal praktis itu dengan yakin dan tidak banyak mencari izin dari luar.",
    "responseForm": "menghadapi",
    "primarySignal": "percaya diri pada aspek F",
    "secondarySignal": "self-directed",
    "interpretationTag": "ap-1F",
    "evidenceText": "Pilihan ini menunjukkan sikap mantap dan diarahkan dari dalam pada aspek F.",
    "doNotInfer": ["Bukan ukuran kemampuan mutlak.", "Bukan bukti bahwa peserta selalu benar."],
    "scores": {
      "attitudinalPsyche": { "F": 2 },
      "psychosophy": { "F": 2 },
      "apPosition": { "1F": 3 },
      "pySubtypeFocus": { "self-focused": 1 }
    }
  },
  "ap2F": {
    "text": "Aku nyaman membahas hal praktis itu bersama orang lain sampai bentuknya terasa pas.",
    "responseForm": "ucapan",
    "primarySignal": "fleksibel dan dialogis pada aspek F",
    "secondarySignal": "memproses bersama",
    "interpretationTag": "ap-2F",
    "evidenceText": "Pilihan ini menunjukkan sikap suportif dan terbuka untuk dialog pada aspek F.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak punya pendapat."],
    "scores": {
      "attitudinalPsyche": { "F": 2 },
      "psychosophy": { "F": 2 },
      "apPosition": { "2F": 3 },
      "pySubtypeFocus": { "others-focused": 1, "adaptation-focused": 1 }
    }
  },
  "ap3F": {
    "text": "Aku terlihat tenang, tetapi bagian tentang hal praktis itu mudah membuatku defensif.",
    "responseForm": "menunda",
    "primarySignal": "sensitif pada aspek F",
    "secondarySignal": "rawan merasa dinilai",
    "interpretationTag": "ap-3F",
    "evidenceText": "Pilihan ini menunjukkan aspek F terasa rawan dan mudah terkait harga diri.",
    "doNotInfer": ["Bukan bukti bahwa peserta lemah.", "Bukan diagnosis kecemasan."],
    "stressClue": "defensif saat aspek itu disentuh",
    "scores": {
      "attitudinalPsyche": { "F": 2 },
      "psychosophy": { "F": 2 },
      "apPosition": { "3F": 3 },
      "pySubtypeFocus": { "depth-focused": 1 },
      "bias": { "stress-heavy": 1 }
    }
  },
  "ap4F": {
    "text": "Aku membiarkan hal praktis itu mengikuti keadaan, selama hal penting lain tetap aman.",
    "responseForm": "menenangkan",
    "primarySignal": "prioritas rendah pada aspek F",
    "secondarySignal": "mudah mengikuti",
    "interpretationTag": "ap-4F",
    "evidenceText": "Pilihan ini menunjukkan aspek F cenderung menjadi prioritas rendah dalam respons.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak mampu di aspek itu."],
    "scores": {
      "attitudinalPsyche": { "F": 1 },
      "psychosophy": { "F": 1 },
      "apPosition": { "4F": 3 },
      "pySubtypeFocus": { "adaptation-focused": 1 }
    }
  },
  "ap1E": {
    "text": "Aku memegang suasana rasa itu dengan yakin dan tidak banyak mencari izin dari luar.",
    "responseForm": "menghadapi",
    "primarySignal": "percaya diri pada aspek E",
    "secondarySignal": "self-directed",
    "interpretationTag": "ap-1E",
    "evidenceText": "Pilihan ini menunjukkan sikap mantap dan diarahkan dari dalam pada aspek E.",
    "doNotInfer": ["Bukan ukuran kemampuan mutlak.", "Bukan bukti bahwa peserta selalu benar."],
    "scores": {
      "attitudinalPsyche": { "E": 2 },
      "psychosophy": { "E": 2 },
      "apPosition": { "1E": 3 },
      "pySubtypeFocus": { "self-focused": 1 }
    }
  },
  "ap2E": {
    "text": "Aku nyaman membahas suasana rasa itu bersama orang lain sampai bentuknya terasa pas.",
    "responseForm": "ucapan",
    "primarySignal": "fleksibel dan dialogis pada aspek E",
    "secondarySignal": "memproses bersama",
    "interpretationTag": "ap-2E",
    "evidenceText": "Pilihan ini menunjukkan sikap suportif dan terbuka untuk dialog pada aspek E.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak punya pendapat."],
    "scores": {
      "attitudinalPsyche": { "E": 2 },
      "psychosophy": { "E": 2 },
      "apPosition": { "2E": 3 },
      "pySubtypeFocus": { "others-focused": 1, "adaptation-focused": 1 }
    }
  },
  "ap3E": {
    "text": "Aku terlihat tenang, tetapi bagian tentang suasana rasa itu mudah membuatku defensif.",
    "responseForm": "menunda",
    "primarySignal": "sensitif pada aspek E",
    "secondarySignal": "rawan merasa dinilai",
    "interpretationTag": "ap-3E",
    "evidenceText": "Pilihan ini menunjukkan aspek E terasa rawan dan mudah terkait harga diri.",
    "doNotInfer": ["Bukan bukti bahwa peserta lemah.", "Bukan diagnosis kecemasan."],
    "stressClue": "defensif saat aspek itu disentuh",
    "scores": {
      "attitudinalPsyche": { "E": 2 },
      "psychosophy": { "E": 2 },
      "apPosition": { "3E": 3 },
      "pySubtypeFocus": { "depth-focused": 1 },
      "bias": { "stress-heavy": 1 }
    }
  },
  "ap4E": {
    "text": "Aku membiarkan suasana rasa itu mengikuti keadaan, selama hal penting lain tetap aman.",
    "responseForm": "menenangkan",
    "primarySignal": "prioritas rendah pada aspek E",
    "secondarySignal": "mudah mengikuti",
    "interpretationTag": "ap-4E",
    "evidenceText": "Pilihan ini menunjukkan aspek E cenderung menjadi prioritas rendah dalam respons.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak mampu di aspek itu."],
    "scores": {
      "attitudinalPsyche": { "E": 1 },
      "psychosophy": { "E": 1 },
      "apPosition": { "4E": 3 },
      "pySubtypeFocus": { "adaptation-focused": 1 }
    }
  },
  "alphaDialog": {
    "text": "Aku membuat ruang bertukar ide ringan sampai semua orang berani mencoba sudut baru.",
    "responseForm": "ucapan",
    "primarySignal": "nilai dialog, ide, dan suasana ringan",
    "secondarySignal": "quadra Alpha",
    "interpretationTag": "socionics-alpha",
    "evidenceText": "Pilihan ini memberi sinyal pada Ne, Si, Ti, dan Fe sebagai nilai yang nyaman dipakai bersama.",
    "doNotInfer": ["Bukan persamaan langsung dengan MBTI."],
    "scores": {
      "socionics": { "Ne": 2, "Si": 1, "Ti": 1, "Fe": 1, "Alpha": 3, "ILE": 1, "ESE": 1 },
      "temperament": { "sanguine": 1, "phlegmatic": 1 },
      "keirsey": { "idealist": 1 },
      "communicationStyle": { "lightening": 1 }
    }
  },
  "betaCharge": {
    "text": "Aku menegaskan arah bersama, membuat suasana fokus, lalu menjaga tekanan tetap terkendali.",
    "responseForm": "mengatur",
    "primarySignal": "nilai arah, intensitas, dan koordinasi",
    "secondarySignal": "quadra Beta",
    "interpretationTag": "socionics-beta",
    "evidenceText": "Pilihan ini memberi sinyal pada Ni, Se, Ti, dan Fe sebagai cara mengatur tekanan kelompok.",
    "doNotInfer": ["Bukan bukti bahwa peserta suka konflik."],
    "scores": {
      "socionics": { "Ni": 2, "Se": 1, "Ti": 1, "Fe": 1, "Beta": 3, "EIE": 1, "LSI": 1 },
      "temperament": { "choleric": 1 },
      "keirsey": { "artisan": 1 },
      "leadershipStyle": { "directive": 1 }
    }
  },
  "gammaResult": {
    "text": "Aku menjaga pilihan pribadi sambil menimbang hasil nyata yang harus dibayar setelahnya.",
    "responseForm": "menghadapi",
    "primarySignal": "nilai dampak nyata dan batas pribadi",
    "secondarySignal": "quadra Gamma",
    "interpretationTag": "socionics-gamma",
    "evidenceText": "Pilihan ini memberi sinyal pada Ni, Se, Fi, dan Te sebagai cara membaca dampak dan batas.",
    "doNotInfer": ["Bukan bukti bahwa peserta tidak sosial."],
    "scores": {
      "socionics": { "Ni": 2, "Se": 1, "Fi": 1, "Te": 1, "Gamma": 3, "ILI": 1, "ESI": 1 },
      "temperament": { "choleric": 1, "melancholic": 1 },
      "keirsey": { "rational": 1 },
      "decisionStyle": { "practical": 1 }
    }
  },
  "deltaSteady": {
    "text": "Aku mencari cara baru yang tetap manusiawi, rapi, dan bisa dijaga dalam jangka panjang.",
    "responseForm": "memperbaiki",
    "primarySignal": "nilai stabilitas, pribadi, dan perbaikan bertahap",
    "secondarySignal": "quadra Delta",
    "interpretationTag": "socionics-delta",
    "evidenceText": "Pilihan ini memberi sinyal pada Ne, Si, Fi, dan Te sebagai cara membangun perbaikan yang tahan lama.",
    "doNotInfer": ["Bukan bukti bahwa peserta lambat."],
    "scores": {
      "socionics": { "Ne": 2, "Si": 1, "Fi": 1, "Te": 1, "Delta": 3, "EII": 1, "LSE": 1 },
      "temperament": { "phlegmatic": 1, "melancholic": 1 },
      "keirsey": { "guardian": 1 },
      "workStyle": { "structured": 1 }
    }
  }
};

export const MODULE_CONFIGS: Record<QuestionModule, ModuleConfig> = {
  "cognitive-core": {
    "situationIntent": "melihat cara awal membaca keadaan yang tidak sepenuhnya jelas",
    "systemsMeasured": ["mbti-cognitive-functions", "mbti-dichotomy", "big-five", "hexaco", "decision-making-style", "communication-style"],
    "notMeasuredHere": ["riasec", "love-style", "instinctual-stacking"],
    "canMeasure": ["cara membaca tanda", "cara memilih respons", "fungsi kognitif yang muncul alami", "dikotomi pendukung"],
    "shouldNotMeasure": ["minat karier", "pola cinta", "diagnosis mental"],
    "likelyFunctions": ["Ni", "Ne", "Si", "Se", "Fi", "Fe", "Ti", "Te"],
    "unlikelyFunctions": [],
    "likelyMotives": ["mencari arah", "menjaga ketepatan", "menjaga rasa", "membuat keadaan bergerak"],
    "invalidScoringWarnings": ["Jangan menganggap diam sebagai tidak peduli.", "Jangan menganggap tindakan cepat sebagai dangkal."],
    "memoryAnchor": "momen ketika keadaan tidak jelas tetapi kau tetap perlu memilih respons",
    "expectedMemoryTrigger": "cara tubuh dan pikiranmu bergerak saat tanda kecil terasa penting",
    "emotionalPressure": "takut salah membaca keadaan",
    "actionPressure": "perlu merespons tanpa data yang lengkap",
    "responseType": "cara membaca keadaan dan memilih tindakan",
    "functionContext": "fungsi kognitif dibaca dari pola respons, bukan dari label diri",
    "scoringReason": "opsi memberi sinyal pada fungsi yang dipakai untuk memahami dan menata keadaan",
    "optionProfiles": ["quietPattern", "manyAngles", "pastReference", "directTouch", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome"]
  },
  "social-response": {
    "situationIntent": "melihat cara menjaga diri dan orang lain dalam tekanan sosial kecil",
    "systemsMeasured": ["mbti-cognitive-functions", "communication-style", "conflict-style", "relationship-attachment", "empathy-style", "social-mask", "boundary-style"],
    "notMeasuredHere": ["riasec", "work-style", "learning-style"],
    "canMeasure": ["pembacaan suasana", "perbaikan sosial", "batas pribadi", "gaya komunikasi"],
    "shouldNotMeasure": ["kemampuan kerja", "minat karier", "kecerdasan"],
    "likelyFunctions": ["Fe", "Fi", "Ni", "Si", "Ti", "Te"],
    "unlikelyFunctions": ["Se"],
    "likelyMotives": ["menjaga hubungan", "menjaga batas", "memahami maksud", "menghindari salah paham"],
    "invalidScoringWarnings": ["Jangan membuat Fe selalu lebih baik dari Fi.", "Jangan membuat batas pribadi terlihat buruk."],
    "memoryAnchor": "momen ketika orang lain menunggu reaksi darimu",
    "expectedMemoryTrigger": "cara kau menahan, memperbaiki, atau mengatakan batas saat suasana sosial berubah",
    "emotionalPressure": "takut kalimatmu merusak hubungan atau menghapus diri sendiri",
    "actionPressure": "perlu memilih bicara, diam, atau memperbaiki keadaan",
    "responseType": "respons sosial nyata",
    "functionContext": "fungsi sosial dibaca dari cara membaca ekspresi, batas, dan akibat ucapan",
    "scoringReason": "opsi membedakan penyesuaian sosial, batas diri, dan klarifikasi",
    "optionProfiles": ["quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate"]
  },
  "stress-shadow": {
    "situationIntent": "melihat pola bertahan ketika malu, lelah, atau tersudut",
    "systemsMeasured": ["stress-response", "coping-style", "defense-pattern", "shadow-function-pattern", "mbti-cognitive-functions", "burnout-tendency", "anger-style", "shame-guilt-response"],
    "notMeasuredHere": ["riasec", "work-style", "love-style"],
    "canMeasure": ["respons stres", "pola bertahan", "fungsi saat tertekan", "cara pulih"],
    "shouldNotMeasure": ["moralitas", "nilai diri mutlak", "diagnosis"],
    "likelyFunctions": ["Ni", "Ne", "Si", "Se", "Fi", "Fe", "Ti", "Te"],
    "unlikelyFunctions": [],
    "likelyMotives": ["mengurangi sakit", "mengembalikan kendali", "menghindari rasa malu", "memperbaiki kerusakan"],
    "invalidScoringWarnings": ["Jangan menilai respons stres sebagai buruk.", "Jangan menyimpulkan gangguan mental."],
    "memoryAnchor": "momen ketika kau tahu responsmu sudah dipengaruhi rasa tertekan",
    "expectedMemoryTrigger": "cara kau bertahan saat rasa malu, panik, atau marah naik",
    "emotionalPressure": "rasa tersudut atau takut disalahpahami",
    "actionPressure": "perlu memilih apakah tetap hadir, menjauh, atau memperbaiki",
    "responseType": "pola bertahan saat tertekan",
    "functionContext": "fungsi dibaca dari bentuk aman yang dipilih saat kontrol menurun",
    "scoringReason": "opsi memberi sinyal pada stress response, coping, defense, dan shadow pattern",
    "optionProfiles": ["pauseRegulate", "directTouch", "organizeOutcome", "socialRepair", "clarifyLogic", "innerLine", "protectSpace", "keepPeace"]
  },
  "motivation-fear": {
    "situationIntent": "melihat rasa takut inti dan cara mencari aman tanpa menilai baik buruk",
    "systemsMeasured": ["enneagram", "enneagram-wing", "instinctual-stacking", "tritype", "enneagram-centers", "enneagram-harmonic", "enneagram-hornevian", "enneagram-object-relations", "core-fear", "core-desire", "core-wound", "core-longing", "motivation-style"],
    "notMeasuredHere": ["riasec", "socionics-model-a", "learning-style"],
    "canMeasure": ["dorongan batin", "ketakutan inti", "cara mencari aman", "arah Enneagram"],
    "shouldNotMeasure": ["kemampuan", "kebaikan moral", "diagnosis"],
    "likelyFunctions": ["Fi", "Fe", "Ti", "Te", "Ni", "Si"],
    "unlikelyFunctions": [],
    "likelyMotives": ["ingin benar", "ingin dicintai", "ingin mampu", "ingin aman", "ingin bebas", "ingin damai"],
    "invalidScoringWarnings": ["Jangan menentukan Enneagram dari perilaku luar saja.", "Jangan membuat satu tipe tampak lebih sehat."],
    "memoryAnchor": "momen ketika pilihanmu dipengaruhi rasa takut yang sulit diucapkan",
    "expectedMemoryTrigger": "apa yang paling ingin kau lindungi ketika keadaan menekan",
    "emotionalPressure": "takut kehilangan tempat, nilai diri, rasa aman, atau kendali",
    "actionPressure": "perlu memilih bentuk bertahan yang paling dekat dengan dirimu",
    "responseType": "dorongan batin dan cara mencari aman",
    "functionContext": "fungsi hanya pendukung; pusat scoring ada pada motif dan rasa takut",
    "scoringReason": "opsi menimbang fear, desire, center, harmonic, hornevian, object relation, dan instinct",
    "optionProfiles": ["reformStandard", "neededCare", "proveWorth", "uniqueSeen", "protectSpace", "safetyTest", "openEscape", "strongControl", "keepPeace", "spGuard", "sxFocus", "soPlace"]
  },
  "values-moral": {
    "situationIntent": "melihat cara menimbang benar-salah dan nilai yang kau lindungi",
    "systemsMeasured": ["moral-style", "values-ranking", "decision-making-style", "core-fear", "core-desire", "enneagram", "boundary-style", "self-worth-source"],
    "notMeasuredHere": ["riasec", "love-style", "socionics-model-a"],
    "canMeasure": ["nilai prioritas", "gaya moral", "cara menimbang akibat", "batas prinsip"],
    "shouldNotMeasure": ["kebaikan orang", "agama pribadi", "diagnosis"],
    "likelyFunctions": ["Fi", "Fe", "Ti", "Te", "Ni"],
    "unlikelyFunctions": ["Se"],
    "likelyMotives": ["jujur", "adil", "setia", "damai", "bebas", "bertanggung jawab"],
    "invalidScoringWarnings": ["Jangan menilai moral peserta baik atau buruk.", "Jangan membuat pragmatis tampak kurang tulus."],
    "memoryAnchor": "momen ketika kau harus memilih nilai mana yang lebih berat",
    "expectedMemoryTrigger": "cara kau memutuskan ketika semua pilihan punya harga",
    "emotionalPressure": "takut mengkhainati prinsip atau melukai orang",
    "actionPressure": "perlu memilih sikap yang bisa kau tanggung setelahnya",
    "responseType": "penimbangan nilai dan moral",
    "functionContext": "fungsi dibaca dari cara menimbang nilai, alasan, dampak, dan relasi",
    "scoringReason": "opsi menilai moral style dan values tanpa memberi label benar-salah",
    "optionProfiles": ["innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace", "strongControl", "uniqueSeen"]
  },
  "work-career": {
    "situationIntent": "melihat cara bekerja, minat tugas, dan peran dalam kelompok kerja",
    "systemsMeasured": ["work-style", "leadership-team-role", "disc", "riasec", "big-five", "hexaco", "decision-making-style", "procrastination-style", "burnout-tendency", "values-ranking"],
    "notMeasuredHere": ["love-style", "relationship-attachment", "core-wound"],
    "canMeasure": ["minat tugas nyata", "ritme kerja", "peran tim", "cara menyelesaikan tugas"],
    "shouldNotMeasure": ["nilai cinta", "diagnosis", "harga diri mutlak"],
    "likelyFunctions": ["Te", "Si", "Se", "Ti", "Ne", "Fe"],
    "unlikelyFunctions": [],
    "likelyMotives": ["hasil", "ketelitian", "dampak", "bantuan", "ekspresi", "pengaruh"],
    "invalidScoringWarnings": ["Jangan membuat kerja cepat tampak lebih baik dari kerja teliti.", "Jangan menyimpulkan nasib karier."],
    "memoryAnchor": "momen ketika tugas bersama menuntut peran yang jelas",
    "expectedMemoryTrigger": "bagian tugas yang langsung menarik tenaga atau perhatianmu",
    "emotionalPressure": "takut pekerjaan kacau atau peranmu tidak terbaca",
    "actionPressure": "perlu memilih bagian yang akan kau pegang",
    "responseType": "minat tugas dan gaya kerja",
    "functionContext": "fungsi dibaca dari cara menangani tugas, bukan jabatan yang diinginkan",
    "scoringReason": "opsi memberi sinyal RIASEC, DISC, work style, dan leadership",
    "optionProfiles": ["practicalTool", "investigateCause", "creativeShape", "helpTeach", "persuadeMove", "carefulArchive", "organizeOutcome", "directTouch"]
  },
  "learning-cognition": {
    "situationIntent": "melihat cara belajar ketika hal sulit terasa menekan",
    "systemsMeasured": ["learning-style", "riasec", "mbti-cognitive-functions", "big-five", "hexaco", "decision-making-style", "work-style", "values-ranking"],
    "notMeasuredHere": ["relationship-attachment", "love-style", "core-fear"],
    "canMeasure": ["cara memahami", "cara mencoba", "minat kognitif", "ritme belajar"],
    "shouldNotMeasure": ["pola cinta", "diagnosis belajar", "nilai kecerdasan"],
    "likelyFunctions": ["Ti", "Te", "Si", "Ne", "Ni", "Se"],
    "unlikelyFunctions": [],
    "likelyMotives": ["memahami sebab", "menyusun langkah", "mencoba langsung", "mengubah bentuk"],
    "invalidScoringWarnings": ["Jangan menyamakan learning style dengan kemampuan.", "Jangan membuat hafalan tampak rendah."],
    "memoryAnchor": "momen ketika kau belajar sesuatu yang awalnya sulit disentuh",
    "expectedMemoryTrigger": "cara kau membuat sesuatu yang sulit menjadi bisa dipegang",
    "emotionalPressure": "takut tertinggal atau merasa bodoh",
    "actionPressure": "perlu memilih cara belajar yang paling membuatmu bergerak",
    "responseType": "cara belajar dan memahami",
    "functionContext": "fungsi dibaca dari jalur pemahaman, bukan nilai akademik",
    "scoringReason": "opsi membedakan riset, praktik, struktur, imajinasi, dan mengajar",
    "optionProfiles": ["investigateCause", "carefulArchive", "practicalTool", "creativeShape", "helpTeach", "manyAngles", "pastReference", "clarifyLogic"]
  },
  "relationship-boundary": {
    "situationIntent": "melihat kecenderungan relasi, kebutuhan aman, dan batas pribadi",
    "systemsMeasured": ["relationship-attachment", "love-style", "boundary-style", "communication-style", "stress-response", "coping-style", "empathy-style", "values-ranking", "mbti-cognitive-functions"],
    "notMeasuredHere": ["riasec", "work-style", "socionics-model-a"],
    "canMeasure": ["cara menjaga dekat", "cara menjaga jarak", "repair style", "batas pribadi"],
    "shouldNotMeasure": ["diagnosis attachment", "moralitas", "minat karier"],
    "likelyFunctions": ["Fe", "Fi", "Ni", "Si", "Ti"],
    "unlikelyFunctions": [],
    "likelyMotives": ["ingin aman", "ingin dipahami", "ingin tetap bebas", "ingin hubungan bisa diperbaiki"],
    "invalidScoringWarnings": ["Jangan menyebut hasil sebagai diagnosis klinis.", "Jangan membuat butuh reassurance tampak buruk."],
    "memoryAnchor": "momen ketika kedekatan terasa penting tetapi juga rawan",
    "expectedMemoryTrigger": "cara kau mendekat, menjauh, meminta kepastian, atau menetapkan batas",
    "emotionalPressure": "takut terlalu banyak meminta atau terlalu jauh menutup diri",
    "actionPressure": "perlu memilih cara menjaga diri tanpa memutus hubungan",
    "responseType": "respons relasi dan batas",
    "functionContext": "fungsi dibaca dari cara memahami kedekatan, bukan status hubungan",
    "scoringReason": "opsi memberi sinyal attachment tendency, boundary, love style, dan komunikasi",
    "optionProfiles": ["socialRepair", "innerLine", "askSupport", "pauseRegulate", "sxFocus", "spGuard", "soPlace", "protectSpace", "keepPeace"]
  },
  "communication-conflict": {
    "situationIntent": "melihat cara bicara saat ketegangan butuh arah",
    "systemsMeasured": ["communication-style", "conflict-style", "disc", "moral-style", "decision-making-style", "stress-response", "defense-pattern", "anger-style", "empathy-style", "mbti-cognitive-functions"],
    "notMeasuredHere": ["riasec", "love-style", "learning-style"],
    "canMeasure": ["cara berdebat", "cara meminta maaf", "cara menolak", "cara memperbaiki konflik"],
    "shouldNotMeasure": ["minat kerja", "diagnosis", "nilai moral mutlak"],
    "likelyFunctions": ["Fe", "Fi", "Ti", "Te", "Se", "Ni"],
    "unlikelyFunctions": [],
    "likelyMotives": ["jelas", "damai", "adil", "terkendali", "tidak melukai"],
    "invalidScoringWarnings": ["Jangan membuat direct style tampak kasar.", "Jangan membuat delayed repair tampak pengecut."],
    "memoryAnchor": "momen ketika kata yang salah bisa memperbesar masalah",
    "expectedMemoryTrigger": "cara kau bicara, diam, memperbaiki, atau menolak saat konflik muncul",
    "emotionalPressure": "takut salah kata atau kehilangan kendali",
    "actionPressure": "perlu memilih kalimat atau tindakan yang bisa menahan akibat",
    "responseType": "gaya komunikasi dalam konflik",
    "functionContext": "fungsi dibaca dari cara menata ucapan, alasan, batas, dan dampak",
    "scoringReason": "opsi membedakan gaya konflik, komunikasi, DISC, dan defense",
    "optionProfiles": ["socialRepair", "clarifyLogic", "organizeOutcome", "innerLine", "directTouch", "pauseRegulate", "strongControl", "keepPeace"]
  },
  "advanced-typology": {
    "situationIntent": "melihat sikap terhadap aspek diri, pola relasi informasi, dan makna hidup",
    "systemsMeasured": ["attitudinal-psyche", "psychosophy", "ap-py-aspect-positions", "ap-py-subtype-focus", "socionics", "socionics-quadra", "socionics-model-a", "temperament-classic", "keirsey-berens", "narrative-identity", "archetype", "aesthetic-personality", "existential-meaning-style"],
    "notMeasuredHere": ["riasec", "love-style", "stress-response"],
    "canMeasure": ["sikap terhadap aspek V L F E", "nilai quadra", "temperament", "arah makna"],
    "shouldNotMeasure": ["kemampuan mutlak", "diagnosis", "nasib hidup"],
    "likelyFunctions": ["Ni", "Ne", "Si", "Se", "Fi", "Fe", "Ti", "Te"],
    "unlikelyFunctions": [],
    "likelyMotives": ["mengarahkan diri", "menjelaskan alasan", "menjaga kenyamanan", "menyentuh emosi", "mencari makna"],
    "invalidScoringWarnings": ["Jangan menyamakan AP/PY dengan kemampuan.", "Jangan menyamakan Socionics langsung dengan MBTI."],
    "memoryAnchor": "momen ketika aspek tertentu dalam dirimu terasa mudah, rawan, atau tidak terlalu penting",
    "expectedMemoryTrigger": "cara kau memegang kehendak, alasan, tubuh, emosi, dan tempat sosial",
    "emotionalPressure": "takut salah menampilkan aspek diri yang paling sensitif",
    "actionPressure": "perlu memilih sikap yang paling mirip caramu memproses aspek itu",
    "responseType": "sikap aspek dan pola informasi lanjutan",
    "functionContext": "fungsi dibaca bersama AP/PY, Socionics, temperament, dan meaning style",
    "scoringReason": "opsi memberi sinyal aspek posisi, quadra, temperament, dan identitas naratif",
    "optionProfiles": ["ap1V", "ap2V", "ap3V", "ap4V", "ap1L", "ap2L", "ap3L", "ap4L", "ap1F", "ap2F", "ap3F", "ap4F", "ap1E", "ap2E", "ap3E", "ap4E", "alphaDialog", "betaCharge", "gammaResult", "deltaSteady"]
  }
};
