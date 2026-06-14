import { useState } from "react";
import type { RawScoreResult, ResultsSummary } from "../types";
import { Info, HelpCircle, FileText, Check } from "lucide-react";

interface Props {
  rawResults: RawScoreResult;
  resultsSummary: ResultsSummary;
}

export default function CalculationTransparency({ rawResults, resultsSummary }: Props) {
  const [activeSubTab, setActiveSubTab] = useState<"formula" | "functions" | "enneagram" | "confidence">("formula");

  const normalizedPaths = rawResults.byPath;

  // Sorting cognitive functions to display raw points
  const cognitiveFunctionsList = ["Ni", "Ne", "Si", "Se", "Fi", "Fe", "Ti", "Te"];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 sm:p-6 mt-8" id="calculation-transparency-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
        <div>
          <h3 className="font-serif text-lg font-medium text-stone-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-800" />
            Transparansi Kalkulasi & Audit Skor Matematika
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Penjelasan transparan tentang asal-usul persentase kecenderungan, formula integrasi fungsi, dan penimbangan bias.
          </p>
        </div>

        {/* Sub-tab selection with pills */}
        <div className="flex flex-wrap gap-1.5 bg-stone-200/60 p-1 rounded-lg">
          {(["formula", "functions", "enneagram", "confidence"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`px-3 py-1.5 rounded-md text-[11px] font-medium transition-all cursor-pointer capitalize ${
                activeSubTab === tab
                  ? "bg-white text-stone-900 shadow-xs"
                  : "text-stone-500 hover:text-stone-850"
              }`}
            >
              {tab === "formula" ? "Kerangka Dasar" : tab === "functions" ? "Kognitif Raw" : tab === "enneagram" ? "Enneagram Facet" : "Confidence Formula"}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Framework & Formula */}
      {activeSubTab === "formula" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-stone-150-60 space-y-2">
            <h4 className="text-xs font-semibold text-stone-850 uppercase tracking-wider mb-2">
              Formula Skor Gabungan Fungsi Kognitif (Combined Function Formula)
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Masing-masing dari 8 fungsi mendapatkan skor dari persentase jawaban langsung di bidang pertanyaan reguler (Base Score), ditambah pembobotan berdasarkan konteks penggunaan relasional:
            </p>
            <div className="bg-stone-50 p-3 rounded font-mono text-[10px] text-emerald-950 border border-stone-200 overflow-x-auto leading-relaxed">
              CombinedScore = Base + (Natural * 0.45) + (Supportive * 0.25) + (Playful * 0.18) + (StressUse * 0.12) + (Defensive * 0.1) + (Critical * 0.08) + (Confused * 0.06) + (Transformative * 0.1)
            </div>
            <p className="text-[10px] text-stone-400 font-light mt-1">
              * Koefisien melambangkan stabilitas pengetikan kognitif batin berdasarkan pengamatan longitudinal pola Jungian.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white rounded-lg p-4 border border-stone-200/60 font-light text-xs text-stone-600">
              <h5 className="font-semibold text-stone-850 mb-1">Skor Kecocokan MBTI (MBTI Fit Score)</h5>
              <p className="leading-relaxed mb-2">
                Skor tipe MBTI dicari menggunakan kecocokan pola tumpukan 4 fungsi utama (Dominant, Auxiliary, Tertiary, Inferior) masing-masing tipe:
              </p>
              <div className="bg-stone-50 p-2.5 rounded font-mono text-[10px] text-stone-700 leading-relaxed border border-stone-200">
                FitScore = (Dom * 4) + (Aux * 3) + (Ter * 2) + Inf + (Natural[Dom] * 1.2) + Supportive[Aux] + (Playful[Ter] * 0.8) + (Stress[Inf] * 0.7)
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-stone-200/60 font-light text-xs text-stone-600">
              <h5 className="font-semibold text-stone-850 mb-1">Pendeteksian Wing Enneagram</h5>
              <p className="leading-relaxed mb-2">
                Wings dipisahkan secara matematis dengan melihat selisih skor kedua tipe yang bertetangga langsung dengan Tipe Inti Anda.
              </p>
              <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                Wing terpilih = nilai tertinggi di antara tipe sebelah kiri atau kanan.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Cognitive Raw Scores display */}
      {activeSubTab === "functions" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-stone-200/60">
            <h4 className="text-xs font-semibold text-stone-850 uppercase tracking-wider mb-3">
              Representasi Nilai Mentah Fungsi (Raw Points & Evidence Mapping)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-[11px] border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-sans font-medium text-[10px] uppercase">
                    <th className="py-2">Fungsi</th>
                    <th className="py-2 text-center">Combined Score</th>
                    <th className="py-2 text-center">Raw Point</th>
                    <th className="py-2 text-center">Evaluasi (Evidence)</th>
                    <th className="py-2 text-right">Status Keterbacaan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {resultsSummary.functionRanking.map((fn) => {
                    const block = normalizedPaths[`functions.${fn.key}`];
                    const pts = block ? block.rawSelected : 0;
                    return (
                      <tr key={fn.key} className="hover:bg-stone-50/50">
                        <td className="py-2.5 font-bold text-stone-800 text-[12px]">{fn.key}</td>
                        <td className="py-2.5 text-center text-emerald-800 font-semibold">{fn.score}%</td>
                        <td className="py-2.5 text-center text-stone-600">{pts.toFixed(1)} poin</td>
                        <td className="py-2.5 text-center text-stone-500">{fn.evidenceCount} kali diuji</td>
                        <td className="py-2.5 text-right font-sans">
                          {fn.evidenceCount >= 10 ? (
                            <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-[9px] font-bold">SOLID EVIDENCE</span>
                          ) : fn.evidenceCount >= 5 ? (
                            <span className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[9px] font-bold">SUFFICIENT</span>
                          ) : (
                            <span className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[9px] font-bold">MINIMAL DATA</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[10px] text-stone-400 font-light italic leading-relaxed">
            * Raw Points adalah jumlah skor yang diberikan langsung oleh pilihan opsi jawaban Anda pada modul skenario di mana fungsi tersebut terpicu aktif dalam situasi adaptasi harian.
          </p>
        </div>
      )}

      {/* 3. Enneagram Facet breakdown */}
      {activeSubTab === "enneagram" && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white rounded-lg p-4 border border-stone-200/60 space-y-3">
              <h4 className="text-xs font-semibold text-stone-850 uppercase tracking-wider">
                Skor Triad Pusat Energi Enneagram (Centers of Intelligence)
              </h4>
              <div className="space-y-3 font-sans">
                {resultsSummary.enneagramCenters.map((center, idx) => (
                  <div key={center.key} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-stone-700 capitalize">
                      <span> Pusat {center.key === "gut" ? "Gut (Fisik - Kemarahan)" : center.key === "heart" ? "Heart (Rasa - Citra Diri)" : "Head (Akal - Ketakutan)"}</span>
                      <span className="font-mono text-[11px] text-stone-500 font-normal">{center.score} poin</span>
                    </div>
                    <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${idx === 0 ? "bg-emerald-700" : idx === 1 ? "bg-emerald-600" : "bg-emerald-500"}`} style={{ width: `${Math.min(100, center.score * 8)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-stone-200/60 space-y-3">
              <h4 className="text-xs font-semibold text-stone-850 uppercase tracking-wider">
                Grup Harmonis & Sosial Enneagram (Triads Grouping)
              </h4>
              <div className="space-y-2 text-xs text-stone-600 font-light leading-relaxed">
                <div>
                  <span className="font-mono text-[10px] font-semibold text-stone-850 block">SOSIAL HORNEVIAN:</span>
                  <p className="text-[11px]">
                    Kecenderungan kelompok: <span className="font-medium text-stone-800 capitalize">{resultsSummary.enneagramHornevian[0]?.key}</span> (Skor: {resultsSummary.enneagramHornevian[0]?.score})
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-semibold text-stone-850 block">POLA HARMONIS ADAPTIVE:</span>
                  <p className="text-[11px]">
                    Kecenderungan koping: <span className="font-medium text-stone-800 capitalize">{resultsSummary.enneagramHarmonic[0]?.key}</span> (Skor: {resultsSummary.enneagramHarmonic[0]?.score})
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-semibold text-stone-850 block">RELASI OBJEK SOSIAL:</span>
                  <p className="text-[11px]">
                    Kecenderungan relasi: <span className="font-medium text-stone-800 capitalize">{resultsSummary.enneagramObjectRelation[0]?.key}</span> (Skor: {resultsSummary.enneagramObjectRelation[0]?.score})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Confidence Index Formula and warning deductions */}
      {activeSubTab === "confidence" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-stone-200/60空间">
            <h4 className="text-xs font-semibold text-stone-850 uppercase tracking-wider mb-2">
              Formula Persentase Indeks Akurasi (Confidence Percentage Breakdown)
            </h4>
            <div className="bg-stone-50 p-3.5 rounded font-mono text-[11px] text-emerald-950 border border-stone-200 overflow-x-auto leading-relaxed">
              Base Confidence: 45.0% <br />
              + (Rasio Soal Dijawab / Total Soal Seen * 45.0) <br />
              - Penalty Soal Dilewati (Skipped Ratio * 25.0) <br />
              - Penalti Masalah Audit Kualitas (W Warnings * 2.5) <br />
              - Penalti Kedekatan GAP Tie (Jika GAP MBTI &le; 7 dikurang 8.0, Jika GAP Enneagram &le; 7 dikurang 6.0)
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 grid gap-4 sm:grid-cols-2 text-xs font-light text-stone-600">
              <div className="space-y-1 bg-stone-50/50 p-3 rounded border border-stone-150">
                <span className="font-semibold text-stone-850 block">Pengurang Pengurangan Saat Ini (Your Penalty Deductions):</span>
                <ul className="space-y-1 pl-4 list-disc text-stone-500 font-mono text-[11px]">
                  <li>Bias Idealistis: {rawResults.idealizedAnswerCount * 0.25} pt seen</li>
                  <li>Inkonsistensi Warnings: {resultsSummary.fairnessWarnings.length} peringatan (-{(resultsSummary.fairnessWarnings.length * 2.5).toFixed(1)} poin)</li>
                  <li>Penalti Soal Dilewati: -{((rawResults.totalSkipped / (rawResults.totalQuestionsSeen || 1)) * 25).toFixed(1)} poin</li>
                </ul>
              </div>

              <div className="space-y-1.5 bg-emerald-50/20 p-3 rounded border border-emerald-100">
                <span className="font-sans font-semibold text-emerald-900 block flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-800" />
                  Mengapa persentase tidak pernah 100%?
                </span>
                <p className="leading-relaxed text-[11px] text-stone-600">
                  Secara klinis dan metodologis, kepribadian manusia selalu dinamis dan tidak bisa dipenjarakan oleh satu alat ukur biner. Skor maksimal kami batasi pada angka <span className="font-semibold text-emerald-900">98.0%</span> untuk menjaga kerendahan hati ilmiah hasil evaluasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
