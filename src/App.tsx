import { useState, useMemo, useEffect } from "react";
import {
  mainQuestions,
  tieBreakQuestions,
  questions as allQuestions
} from "./utils/questions";
import { calculateRawScores } from "./utils/rawScores";
import { calculateResults } from "./utils/engine";
import type {
  Question,
  AnswerRecord,
  ResultsSummary,
  QuestionModule,
  AnswerOption
} from "./types";
import {
  Sparkles,
  Play,
  RotateCcw,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertTriangle,
  Info,
  HelpCircle,
  Clock,
  Compass,
  FileText,
  Save,
  Grid,
  Check,
  TrendingUp,
  Brain,
  Layers,
  Shield,
  Heart,
  Briefcase,
  PenTool
} from "lucide-react";

export default function App() {
  // Test State
  const [testMode, setTestMode] = useState<"quick" | "standard" | "full">("standard");
  const [currentStep, setCurrentStep] = useState<"landing" | "quiz" | "results">("landing");
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Custom Tie-Breaker Active state
  const [activeTieBreakId, setActiveTieBreakId] = useState<string | null>(null);

  // Load progress on mount
  useEffect(() => {
    const saved = localStorage.getItem("deep_personality_draft");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.answers && parsed.answers.length > 0) {
          setAnswers(parsed.answers);
          setTestMode(parsed.testMode || "standard");
          setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
          setCurrentStep("quiz");
        }
      } catch (e) {
        console.error("Failed to load saved progress", e);
      }
    }
  }, []);

  // Save progress locally
  const saveProgress = (currentAnswers: AnswerRecord[], idx: number) => {
    localStorage.setItem(
      "deep_personality_draft",
      JSON.stringify({
        answers: currentAnswers,
        testMode,
        currentQuestionIndex: idx
      })
    );
  };

  // Clear saved progress
  const clearSavedProgress = () => {
    localStorage.removeItem("deep_personality_draft");
  };

  // Filter questions according to selected mode
  const activeQuestions = useMemo(() => {
    if (testMode === "full") {
      return mainQuestions;
    }
    const questionsPerModule = testMode === "quick" ? 3 : 10;
    const grouped: Record<string, Question[]> = {};
    for (const q of mainQuestions) {
      if (!grouped[q.module]) grouped[q.module] = [];
      if (grouped[q.module].length < questionsPerModule) {
        grouped[q.module].push(q);
      }
    }
    return Object.values(grouped).flat();
  }, [testMode]);

  // Combine regular answers + active tie-breaker answers for instant calculations
  const rawResults = useMemo(() => {
    if (answers.length === 0) return null;
    return calculateRawScores(answers, allQuestions);
  }, [answers]);

  const resultsSummary = useMemo(() => {
    if (!rawResults) return null;
    return calculateResults(rawResults, allQuestions);
  }, [rawResults]);

  // Handler for option selection
  const handleSelectOption = (questionId: string, optionId: string) => {
    const updated = [...answers];
    const existingIdx = updated.findIndex((a) => a.questionId === questionId);
    
    if (existingIdx !== -1) {
      updated[existingIdx] = { questionId, optionId, skipped: false };
    } else {
      updated.push({ questionId, optionId, skipped: false });
    }

    setAnswers(updated);
    saveProgress(updated, currentQuestionIndex);

    // Smooth auto-advance for better layout rhythm
    if (currentStep === "quiz") {
      if (currentQuestionIndex < activeQuestions.length - 1) {
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
        }, 320);
      } else {
        // Automatically route to results once final question is answered
        setTimeout(() => {
          setCurrentStep("results");
          clearSavedProgress();
        }, 500);
      }
    }
  };

  const handleSkipQuestion = (questionId: string) => {
    const updated = [...answers];
    const existingIdx = updated.findIndex((a) => a.questionId === questionId);

    if (existingIdx !== -1) {
      updated[existingIdx] = { questionId, skipped: true };
    } else {
      updated.push({ questionId, skipped: true });
    }

    setAnswers(updated);
    saveProgress(updated, currentQuestionIndex);

    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentStep("results");
      clearSavedProgress();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const startTest = (mode: "quick" | "standard" | "full") => {
    setTestMode(mode);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setCurrentStep("quiz");
    clearSavedProgress();
  };

  const handleReset = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setActiveTieBreakId(null);
    setCurrentStep("landing");
    clearSavedProgress();
  };

  // Helper to format module human label
  const getModuleLabel = (mod: QuestionModule): string => {
    switch (mod) {
      case "cognitive-core": return "Inti Kognitif (Cognitive Core)";
      case "social-response": return "Respon Sosial (Social Response)";
      case "stress-shadow": return "Pertahanan Stres (Stress & Shadow)";
      case "motivation-fear": return "Motivasi & Rasa Takut Utama";
      case "values-moral": return "Nilai & Moralitas";
      case "work-career": return "Minat Karir & Gaya Kerja";
      case "learning-cognition": return "Gaya Belajar & Kognisi";
      case "relationship-boundary": return "Hubungan & Batas Diri";
      case "communication-conflict": return "Komunikasi & Konflik";
      case "advanced-typology": return "Tipologi Lanjutan (AP/Socionics)";
      default: return mod;
    }
  };

  // Determine current active question
  const currentQuestion = activeQuestions[currentQuestionIndex];
  const totalAnswering = activeQuestions.length;
  const answeredCount = answers.filter((a) => !a.skipped).length;
  const progressPercent = totalAnswering > 0 ? (answers.length / totalAnswering) * 100 : 0;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-16">
      {/* Top Professional Accent Bar */}
      <div className="h-1 bg-emerald-700 w-full" id="brand-indicator" />

      {/* Main Core Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        
        {/* ================= LANDING SCREEN ================= */}
        {currentStep === "landing" && (
          <div className="max-w-2xl mx-auto py-12 text-center" id="landing-stage">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Empirical Typology System
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 font-medium tracking-tight mb-4">
              Tes Kepribadian Mendalam
            </h1>
            <p className="text-stone-600 sm:text-lg mb-10 leading-relaxed font-light">
              Mengeksplorasi lebih dari 60 aspek psikologis terintegrasi termasuk <span className="font-medium text-stone-850">Cognitive Functions (MBTI)</span>, <span className="font-medium text-stone-850">Enneagram + Tritype</span>, <span className="font-medium text-stone-850">Attitudinal Psyche</span>, <span className="font-medium text-stone-850">Socionics</span>, pola koping, gaya komunikasi, respon stres, dan kerawanan burnout dalam satu kerangka kerja empiris yang utuh.
            </p>

            {/* Quick Resume Option */}
            {answers.length > 0 && (
              <div className="bg-stone-100 rounded-lg p-4 border border-stone-200 mb-10 inline-flex items-center gap-4 text-left max-w-lg mx-auto">
                <div className="bg-stone-200 p-2.5 rounded-full text-stone-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-stone-900">Sesi Belum Selesai Ditemukan</h4>
                  <p className="text-xs text-stone-500">Anda telah menjawab {answers.length} pertanyaan sebelumnya.</p>
                </div>
                <button
                  onClick={() => setCurrentStep("quiz")}
                  className="bg-stone-800 hover:bg-stone-900 border border-stone-850 text-white px-3.5 py-1.5 rounded text-xs font-medium transition cursor-pointer"
                >
                  Lanjutkan
                </button>
              </div>
            )}

            {/* Mode Selectors Card */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm text-left">
              <h3 className="font-serif text-lg text-stone-900 font-medium mb-6 flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-800" />
                Pilih Kedalaman Penilaian Anda
              </h3>

              <div className="grid gap-4 sm:grid-cols-3">
                {/* Quick Mode */}
                <button
                  id="mode-quick"
                  onClick={() => startTest("quick")}
                  className="group flex flex-col justify-between p-5 rounded-lg border border-stone-200 text-left hover:border-emerald-700 hover:bg-emerald-50/20 transition cursor-pointer"
                >
                  <div>
                    <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Cepat & Ringkas</span>
                    <h4 className="font-serif text-base font-semibold group-hover:text-emerald-950 mt-3 text-stone-900">Quick Typing</h4>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                      30 pertanyaan (3 per modul). Estimasi ~5 menit. Skenario kognitif kunci untuk penyaringan cepat.
                    </p>
                  </div>
                  <div className="w-full flex justify-end mt-4">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition" />
                  </div>
                </button>

                {/* Standard Mode */}
                <button
                  id="mode-standard"
                  onClick={() => startTest("standard")}
                  className="relative group flex flex-col justify-between p-5 rounded-lg border-2 border-emerald-700 bg-white text-left hover:bg-emerald-50/20 transition cursor-pointer shadow-sm"
                >
                  <div className="absolute top-0 right-4 -translate-y-1/2 bg-emerald-700 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    Direkomendasikan
                  </div>
                  <div>
                    <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Keseimbangan Sempurna</span>
                    <h4 className="font-serif text-base font-semibold group-hover:text-emerald-950 mt-3 text-stone-900">Standard Test</h4>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                      100 pertanyaan (10 per modul). Estimasi ~15 menit. Tingkat presisi tinggi untuk MBTI & Enneagram.
                    </p>
                  </div>
                  <div className="w-full flex justify-end mt-4">
                    <ChevronRight className="w-4 h-4 text-emerald-700 transition" />
                  </div>
                </button>

                {/* Full Mode */}
                <button
                  id="mode-full"
                  onClick={() => startTest("full")}
                  className="group flex flex-col justify-between p-5 rounded-lg border border-stone-200 text-left hover:border-emerald-700 hover:bg-emerald-50/20 transition cursor-pointer"
                >
                  <div>
                    <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Komprehensif</span>
                    <h4 className="font-serif text-base font-semibold group-hover:text-emerald-950 mt-3 text-stone-900">Full Analysis</h4>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                      200 pertanyaan (seluruh soal). Estimasi ~35 menit. Solusi terbaik untuk pemetaan bakat kognitif jangka panjang.
                    </p>
                  </div>
                  <div className="w-full flex justify-end mt-4">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition" />
                  </div>
                </button>
              </div>
            </div>

            <div className="text-xs text-stone-400 mt-8 max-w-md mx-auto leading-relaxed">
              * Tes kepribadian ini bersifat bebas interpretasi klinis dan disusun semata untuk pemahaman dinamika karakter dan koping emosi.
            </div>
          </div>
        )}

        {/* ================= QUIZ INTERFACE ================= */}
        {currentStep === "quiz" && currentQuestion && (
          <div className="max-w-2xl mx-auto py-4" id="quiz-stage">
            {/* Header info */}
            <div className="flex justify-between items-center text-xs text-stone-550 border-b border-stone-200 pb-3 mb-6">
              <span className="font-medium text-emerald-800">
                Modul: {getModuleLabel(currentQuestion.module)}
              </span>
              <span>
                {currentQuestionIndex + 1} dari {totalAnswering} Pertanyaan
              </span>
            </div>

            {/* Progress indicator bar */}
            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden mb-8" id="test-progress-bar">
              <div
                className="bg-emerald-700 h-full transition-all duration-350"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Context Anchor Display */}
            <div className="bg-stone-100 rounded-lg p-4 border border-stone-200 mb-6 flex flex-col gap-1.5 text-xs text-stone-600">
              <div className="font-semibold text-stone-700 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-emerald-800" />
                Latar Konteks Keadaan
              </div>
              <p className="font-serif italic text-[13px] text-stone-800">
                "{currentQuestion.memoryAnchor}"
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-[11px] text-stone-500">
                <span><span className="font-medium text-stone-700">Tekanan Emosi:</span> {currentQuestion.emotionalPressure}</span>
                <span><span className="font-medium text-stone-700">Bentuk Pilihan:</span> {currentQuestion.responseType}</span>
              </div>
            </div>

            {/* Main question card */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm mb-6 relative">
              <h2 className="text-xl sm:text-2xl font-serif text-stone-900 font-medium leading-relaxed mb-6">
                {currentQuestion.text}
              </h2>

              {/* Options selection */}
              <div className="grid gap-3" id="options-list">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers.find((a) => a.questionId === currentQuestion.id)?.optionId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                      className={`w-full text-left p-4 rounded-lg border text-sm leading-relaxed transition cursor-pointer flex justify-between items-center ${
                        isSelected
                          ? "border-emerald-700 bg-emerald-50/30 text-stone-950 font-medium"
                          : "border-stone-200 hover:border-stone-400 bg-stone-50/30 text-stone-700"
                      }`}
                    >
                      <span className="flex-1 pr-4">{opt.text}</span>
                      {isSelected ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-stone-300 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pagination Actions */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded text-stone-500 hover:text-stone-850 hover:bg-stone-150 transition disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Kembali
              </button>

              <button
                onClick={() => handleSkipQuestion(currentQuestion.id)}
                className="text-stone-400 hover:text-stone-700 px-3 py-2 rounded text-xs tracking-wide cursor-pointer"
              >
                Lewati Pertanyaan
              </button>

              <button
                onClick={() => {
                  saveProgress(answers, currentQuestionIndex);
                  alert("Progress berhasil disimpan! Anda bisa melanjutkan kapan saja.");
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded text-stone-500 hover:text-emerald-800 hover:bg-stone-150 transition text-xs font-semibold cursor-pointer"
              >
                <Save className="w-4 h-4" /> Simpan Progress
              </button>
            </div>
          </div>
        )}

        {/* ================= RESULTS SUMMARY SECTION ================= */}
        {currentStep === "results" && resultsSummary && (
          <div className="space-y-10" id="results-stage">
            
            {/* Header Result Display */}
            <div className="text-center py-6 border-b border-stone-200">
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-medium tracking-tight mb-2">
                Hasil Analisis Kepribadian Anda
              </h2>
              <p className="text-sm text-stone-500">
                Peta kemungkinan kepribadian yang diolah dari pola respon kognitif dan perilaku.
              </p>
            </div>

            {/* Dynamic Interactive Tie-Breaker suggestor bar */}
            {resultsSummary.tieBreakSuggestions.length > 0 && (
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2.5 rounded-full text-amber-800 mt-1 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-serif text-base text-amber-950 font-semibold">
                      Bantu Sistem Membedakan Tipe Mendekati ({resultsSummary.tieBreakSuggestions.length} Tie-Break Direkomendasikan)
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-light">
                      Ada dua atau lebih kandidat kepribadian dengan selisih poin sangat tipis. Anda dapat langsung menjawab pertanyaan pembeda berikut untuk mendapatkan presisi optimal.
                    </p>

                    <div className="pt-2 grid gap-3 max-w-2xl">
                      {resultsSummary.tieBreakSuggestions.map((sug) => {
                        const isThisActive = activeTieBreakId === sug.id;
                        return (
                          <div key={sug.id} className="bg-white/80 rounded-lg p-3 border border-amber-200/60 text-left">
                            <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                              <span className="text-xs font-semibold text-amber-950">Target Pembeda: {sug.target}</span>
                              <button
                                onClick={() => setActiveTieBreakId(isThisActive ? null : sug.id)}
                                className="bg-amber-700 hover:bg-amber-800 text-white text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded transition cursor-pointer"
                              >
                                {isThisActive ? "Sembunyikan" : "Jawab Pertanyaan"}
                              </button>
                            </div>
                            <p className="text-xs text-amber-900 font-light">{sug.reason}</p>

                            {/* Active Tie-break Inline Quiz rendering */}
                            {isThisActive && (
                              <div className="mt-4 border-t border-amber-200/50 pt-4 space-y-4">
                                {sug.questionIds.map((qId) => {
                                  // Locate the actual question in the tie-break questions bank
                                  const q = tieBreakQuestions.find((tb) => tb.id === qId);
                                  if (!q) return null;
                                  const selectedRecord = answers.find((ans) => ans.questionId === q.id);
                                  return (
                                    <div key={q.id} className="bg-stone-50 p-3.5 rounded border border-stone-200">
                                      <h5 className="text-xs font-medium text-stone-850 mb-2.5">
                                        Pertanyaan: {q.text}
                                      </h5>
                                      <div className="grid gap-2">
                                        {q.options.map((opt) => (
                                          <button
                                            key={opt.id}
                                            onClick={() => handleSelectOption(q.id, opt.id)}
                                            className={`w-full text-left p-2.5 rounded border text-xs leading-relaxed transition cursor-pointer flex justify-between items-center ${
                                              selectedRecord?.optionId === opt.id
                                                ? "border-amber-700 bg-amber-50/40 text-amber-950 font-medium"
                                                : "border-stone-200 hover:border-stone-350 bg-white text-stone-700"
                                            }`}
                                          >
                                            <span>{opt.text}</span>
                                            {selectedRecord?.optionId === opt.id && (
                                              <Check className="w-4 h-4 text-amber-700 shrink-0" />
                                            )}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Core Type Summary Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* MBTI Match card */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs flex flex-col justify-between" id="mbti-type-card">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">MBTI Cognitive Stack</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      resultsSummary.mbtiTop3[0]?.confidence === "high"
                        ? "bg-green-50 text-green-800"
                        : resultsSummary.mbtiTop3[0]?.confidence === "moderate" ? "bg-blue-50 text-blue-800" : "bg-amber-50 text-amber-800"
                    }`}>
                      Confidence: {resultsSummary.mbtiTop3[0]?.confidence}
                    </span>
                  </div>

                  <h3 className="font-serif text-5xl font-semibold text-stone-900 tracking-tight mb-2">
                    {resultsSummary.mbtiTop3[0]?.type}
                  </h3>
                  <div className="flex gap-2 text-xs text-stone-400 mb-6">
                    {resultsSummary.mbtiTop3[0]?.stack.map((fn, idx) => (
                      <span key={fn} className="bg-stone-100 text-stone-700 border border-stone-200 px-2 py-0.5 rounded font-mono">
                        {fn}
                        {idx === 0 && <span className="text-[9px] text-emerald-800 font-bold ml-1">Dominant</span>}
                        {idx === 1 && <span className="text-[9px] text-stone-500 ml-1">Auxiliary</span>}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 text-xs text-stone-600 font-light leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-stone-850 uppercase text-[9px] tracking-wider mb-1">Bukti Pengamatan Utama:</h4>
                      <ul className="list-disc pl-4 space-y-1.5">
                        {resultsSummary.mbtiTop3[0]?.reasonsFor.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-stone-850 uppercase text-[9px] tracking-wider mb-1">Potensi Penyesuaian Interpretasi:</h4>
                      <ul className="list-disc pl-4 space-y-1.5">
                        {resultsSummary.mbtiTop3[0]?.reasonsAgainst.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-150 pt-4 mt-6 text-xs flex justify-between items-center text-stone-400 font-mono">
                  <span>Dichotomy Code: {resultsSummary.dichotomy.code}</span>
                  <span>Fit Score: {resultsSummary.mbtiTop3[0]?.fitScore}%</span>
                </div>
              </div>

              {/* Enneagram with Wing & Tritype & IP card */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs flex flex-col justify-between" id="ennea-type-card">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Enneagram & Instincts</span>
                    <span className="text-stone-400 text-[10px] font-mono">Tritype: {resultsSummary.tritype}</span>
                  </div>

                  <h3 className="font-serif text-5xl font-semibold text-stone-900 tracking-tight mb-2">
                    {resultsSummary.enneagramWing || resultsSummary.enneagramTop3[0]?.key}
                  </h3>
                  <div className="flex gap-2 text-xs text-stone-400 mb-6">
                    <span className="bg-stone-100 text-stone-700 border border-stone-200 px-2 py-0.5 rounded font-medium">
                      Instinct Stacking: {resultsSummary.instinctStacking.join("/")}
                    </span>
                  </div>

                  {/* Core fears & desires */}
                  <div className="space-y-4 text-xs text-stone-600 font-light leading-relaxed">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-stone-850 uppercase text-[9px] tracking-wider mb-1">Rasa Takut Inti (Core Fear):</h4>
                        <p className="capitalize italic">"{resultsSummary.coreFear[0]?.key.replace(/-/g, " ")}"</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-850 uppercase text-[9px] tracking-wider mb-1">Keinginan Inti (Core Desire):</h4>
                        <p className="capitalize italic">"{resultsSummary.coreDesire[0]?.key.replace(/-/g, " ")}"</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-stone-850 uppercase text-[9px] tracking-wider mb-1">Luka Sejarah (Core Wound):</h4>
                        <p className="capitalize italic">"{resultsSummary.coreWound[0]?.key.replace(/-/g, " ")}"</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-850 uppercase text-[9px] tracking-wider mb-1">Kerinduan Hati (Core Longing):</h4>
                        <p className="capitalize italic">"{resultsSummary.coreLonging[0]?.key.replace(/-/g, " ")}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-150 pt-4 mt-6 text-xs grid grid-cols-2 gap-4 text-stone-400 font-mono">
                  <div>AP Type: {resultsSummary.attitudinalPsycheType}</div>
                  <div>Socionics Quadra: {resultsSummary.socionicsQuadra[0]?.key}</div>
                </div>
              </div>
            </div>

            {/* Confidence & Fairness Quality Validation Gauge */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-800" />
                Validitas & Akurasi Hasil (Confidence Gauge)
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-6 items-center">
                {/* Gauge circle metric */}
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 flex items-center justify-center bg-stone-50 rounded-full border-4 border-stone-100 shadow-inner">
                    <span className="text-3xl font-serif font-bold text-stone-850">
                      {resultsSummary.confidence}%
                    </span>
                    <div className="absolute -bottom-2 bg-emerald-700 text-white font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      Score Index
                    </div>
                  </div>
                </div>

                {/* Score explanation */}
                <div className="sm:col-span-2 space-y-2.5">
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    Indeks akurasi kami mengukur stabilitas respons Anda berdasarkan jumlah pertanyaan yang dijawab, persentase pertanyaan yang dilewati, serta deteksi bias atau inkonsistensi data.
                  </p>
                  <div className="text-xs text-stone-500 flex flex-wrap gap-x-4 gap-y-1 font-mono">
                    <span>• Menjawab: {rawResults?.totalAnswered} soal</span>
                    <span>• Melewati: {rawResults?.totalSkipped} soal</span>
                    <span>• Bias Idealistis: {rawResults?.idealizedAnswerCount} kali</span>
                    <span>• Bias Stres/Defensif: {rawResults?.stressAnswerCount} kali</span>
                  </div>
                </div>
              </div>

              {/* Accordion / warning alert displays from runFairnessCheck */}
              {resultsSummary.fairnessWarnings.length > 0 && (
                <div className="mt-6 border-t border-stone-150 pt-5">
                  <h4 className="text-xs font-semibold text-stone-850 uppercase tracking-wider tracking-widest mb-3">
                    Analisis Validitas Konteks (Fairness Audit)
                  </h4>
                  <div className="space-y-2">
                    {resultsSummary.fairnessWarnings.map((warn, i) => (
                      <div key={i} className={`text-xs p-3.5 rounded-lg border flex items-start gap-2.5 ${
                        warn.severity === "strong"
                          ? "bg-red-50 border-red-200 text-red-950 text-red-900"
                          : warn.severity === "caution" ? "bg-amber-50 border-amber-200 text-amber-950 text-amber-900" : "bg-blue-50 border-blue-200 text-blue-950 text-blue-900"
                      }`}>
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-stone-600" />
                        <div>
                          <p className="font-medium capitalize mb-0.5">Audit: {warn.id.replace(/-/g, " ")}</p>
                          <p className="font-light leading-relaxed">{warn.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* BENTO GRID: Comprehensive Profile Deep Dive */}
            <div>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-6 flex items-center gap-2">
                <Grid className="w-5 h-5 text-emerald-800" />
                Eksplorasi Dimensi Kepribadian Lengkap
              </h3>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="bento-deep-dive">
                
                {/* 1. Cognitive Functions */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-emerald-700" /> Pengolahan Informasi (Cognitive Functions)
                    </h4>
                    <div className="space-y-2.5">
                      {resultsSummary.functionRanking.slice(0, 4).map((fn) => (
                        <div key={fn.key} className="space-y-1">
                          <div className="flex justify-between text-[11px] font-mono">
                            <span>{fn.key}</span>
                            <span className="text-stone-400">{fn.score}% ({fn.evidenceCount}x)</span>
                          </div>
                          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-700 h-full rounded-full transition-all duration-300" style={{ width: `${fn.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-4 leading-relaxed font-light">
                    Kombinasi fungsi teratas memprakarsai bagaimana Anda memahami dunia dan memproses arah keputusan.
                  </p>
                </div>

                {/* 2. Big Five */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-700" /> Big Five Traits
                    </h4>
                    <div className="space-y-2.5">
                      {resultsSummary.bigFive.map((trait) => (
                        <div key={trait.key} className="space-y-1">
                          <div className="flex justify-between text-[11px] font-mono">
                            <span className="capitalize">{trait.key}</span>
                            <span className="text-stone-400">{trait.score}%</span>
                          </div>
                          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-700 h-full rounded-full transition-all duration-300" style={{ width: `${trait.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-4 leading-relaxed font-light">
                    Big Five mengukur kestabilan trait eksternal yang diuji secara akademis di seluruh dunia.
                  </p>
                </div>

                {/* 3. Gaya Komunikasi & Risiko Konflik */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-700" /> Gaya Komunikasi & Konflik
                    </h4>
                    <div className="space-y-3 font-light text-xs text-stone-600">
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Komunikasi Dominan:</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.communicationStyle[0]?.key} style</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Resolusi Konflik:</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.conflictStyle[0]?.key} response</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Sikap Batas Diri (Boundary):</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.boundaryStyle[0]?.key} boundaries</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-4 leading-relaxed font-light">
                    Menilai kecocokan batin saat mengarahkan konfrontasi langsung and cara menjamin keamanan bersama.
                  </p>
                </div>

                {/* 4. Respon Stres & Pola Koping */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-700" /> Respon Stres & Pola Koping
                    </h4>
                    <div className="space-y-3 font-light text-xs text-stone-600">
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Respon Stres Akut:</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.stress[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Mekanisme Koping (Coping):</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.coping[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Gaya Defensif (Defense):</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.defense[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-4 leading-relaxed font-light">
                    Memprediksi bagaimana Anda akan bertindak secara bawah sadar saat kapasitas mental terbebani.
                  </p>
                </div>

                {/* 5. Gaya Belajar & Bekerja */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-700" /> Gaya Belajar & Bekerja
                    </h4>
                    <div className="space-y-3 font-light text-xs text-stone-600">
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Gaya Belajar (Learning Pattern):</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.learningStyle[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Ritme Kerja Swasta:</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.workStyle[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Minat Tugas (RIASEC):</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">
                          {resultsSummary.riasecTop3.map((r) => r.key).slice(0, 2).join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-4 leading-relaxed font-light">
                    Kombinasi performa kognitif yang memprakarsai kepuasan di lingkungan akademis maupun korporat.
                  </p>
                </div>

                {/* 6. Nilai-Nilai Hidup Utama (Core Values) */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-emerald-700" /> Nilai Hidup (Core Values)
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {resultsSummary.valuesRanking.slice(0, 5).map((v) => (
                        <span key={v.key} className="bg-emerald-50 text-emerald-900 border border-emerald-100 px-2 py-1 rounded text-xs capitalize">
                          {v.key}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-4 leading-relaxed font-light">
                    Nilai-nilai teratas yang secara implisit Anda lindungi dan jadikan panduan penyeimbang moralitas batin.
                  </p>
                </div>

                {/* 7. Kerawanan Burnout & Prokrastinasi */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <PenTool className="w-4 h-4 text-emerald-700" /> Burnout & Prokrastinasi
                    </h4>
                    <div className="space-y-3 font-light text-xs text-stone-600">
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Trigger Prokrastinasi:</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.procrastinationStyle[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Kerawanan Burnout:</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.burnoutPattern[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase text-stone-850 block mb-0.5 tracking-wider font-sans">Perisai Masker Sosial (Mask):</span>
                        <span className="capitalize text-stone-700 font-medium font-serif text-[13px]">{resultsSummary.socialMask[0]?.key.replace(/-/g, " ")}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-4 leading-relaxed font-light">
                    Mengidentifikasi kebiasaan kaku yang memperlambat tindakan Anda saat berada dalam siklus lelah ekstrem.
                  </p>
                </div>

              </div>
            </div>

            {/* Ethical Notes and Refleksi */}
            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200" id="results-reflection">
              <h4 className="font-serif text-sm font-semibold text-stone-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-4.5 h-4.5 text-emerald-800" /> Catatan Refleksi & Etika Pengukuran
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
                {resultsSummary.ethicalNote}
              </p>
              <div className="text-xs text-stone-500 space-y-2">
                {resultsSummary.notes.map((note, idx) => (
                  <p key={idx} className="flex gap-2">
                    <span className="text-emerald-700 shrink-0">•</span> {note}
                  </p>
                ))}
              </div>
            </div>

            {/* Reset / restart actions */}
            <div className="text-center py-6 flex justify-center gap-4">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-950 text-white font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded shadow transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> Ulangi Tes Lengkap
              </button>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}
