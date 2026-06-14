import { useState } from "react";
import type { ResultsSummary } from "../types";
import { MBTI_DETAILS, ENNEA_DETAILS, synthesizeCombination } from "../utils/synthesisData";
import { Sparkles, Brain, Compass, HelpCircle, Activity, Lightbulb, UserCheck } from "lucide-react";

interface Props {
  resultsSummary: ResultsSummary;
}

export default function DeepDiagnosticsHub({ resultsSummary }: Props) {
  const mbti = resultsSummary.mbtiTop3[0]?.type || "INTJ";
  const enneaCore = resultsSummary.enneagramTop3[0]?.key || "5";
  const enneaWing = resultsSummary.enneagramWing || `${enneaCore}w6`;

  const mbtiDetail = MBTI_DETAILS[mbti] || {
    name: "Tipe Kepribadian Hasil",
    focus: "Mengeksplorasi potensi kognitif dan arah perilaku.",
    clashTitle: "Tensi Fungsi Kognitif",
    clashDesc: "Terjadi ketegangan antara fungsi kognitif yang paling dominan dengan fungsi pelengkap bawah sadar Anda.",
    shadowTitle: "Sisi Bayangan (Shadow)",
    shadowDesc: "Di bawah tekanan berat, bagian dari kepribadian yang jarang dipakai dapat mengambil alih secara tidak sadar."
  };

  const enneaDetail = ENNEA_DETAILS[enneaCore] || {
    name: `Enneagram ${enneaCore}`,
    title: "Sistem motif bawah sadar yang mengarahkan emosi.",
    integration: { target: "Sesuai rute", desc: "Berpindah ke sisi positif tipe lain saat batin aman." },
    disintegration: { target: "Sesuai rute", desc: "Berpindah ke sisi defensif tipe lain saat stres." },
    growthTip: "Sadari dorongan inti Anda dan usahakan keseimbangan."
  };

  const synthesis = synthesizeCombination(mbti, enneaCore);

  const [activeTab, setActiveTab] = useState<"synthesis" | "mbtiDetail" | "enneagramPath">("synthesis");

  return (
    <div className="bg-white border border-stone-250 rounded-xl p-6 shadow-sm mt-8" id="deep-diagnostics-hub-section">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-emerald-50 text-emerald-800 p-2 rounded-lg">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-stone-900">
            Pusat Eksplorasi Kepribadian Mendalam (Deep Diagnostics)
          </h3>
          <p className="text-xs text-stone-500">
            Jelajahi dinamika bawah sadar, tegangan kognitif internal, dan panduan penggabungan tipe Anda.
          </p>
        </div>
      </div>

      {/* Hub Navigation Tabs */}
      <div className="flex border-b border-stone-200 gap-4 mb-6">
        <button
          onClick={() => setActiveTab("synthesis")}
          className={`pb-3 text-xs sm:text-sm font-medium transition-all relative cursor-pointer ${
            activeTab === "synthesis" ? "text-emerald-800 font-bold border-b-2 border-emerald-800" : "text-stone-500 hover:text-stone-850"
          }`}
        >
          Sintesis Kombinasi ({mbti} &times; Enneagram {enneaCore})
        </button>
        <button
          onClick={() => setActiveTab("mbtiDetail")}
          className={`pb-3 text-xs sm:text-sm font-medium transition-all relative cursor-pointer ${
            activeTab === "mbtiDetail" ? "text-emerald-800 font-bold border-b-2 border-emerald-800" : "text-stone-500 hover:text-stone-850"
          }`}
        >
          Mekanika Bayangan {mbti}
        </button>
        <button
          onClick={() => setActiveTab("enneagramPath")}
          className={`pb-3 text-xs sm:text-sm font-medium transition-all relative cursor-pointer ${
            activeTab === "enneagramPath" ? "text-emerald-800 font-bold border-b-2 border-emerald-800" : "text-stone-500 hover:text-stone-850"
          }`}
        >
          Alur Pertumbuhan Enneagram {enneaWing}
        </button>
      </div>

      {/* Tab Contents */}
      <div className="space-y-6">
        
        {/* TAB 1: Synthesis MBTI + Ennea */}
        {activeTab === "synthesis" && (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <div className="bg-emerald-50/20 border border-emerald-100 rounded-lg p-4">
                <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-sans tracking-wide block mb-2 w-max">
                  Sintesis Karakter Dinamis
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-stone-800 leading-relaxed">
                  "{synthesis.coreConcept}"
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200/60">
                  <h4 className="text-xs font-bold text-stone-850 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-sans">
                    <UserCheck className="w-4 h-4 text-emerald-700" />
                    Sisi Harmonis Internal
                  </h4>
                  <ul className="text-xs text-stone-600 font-light space-y-2 list-none pl-0">
                    {synthesis.harmonySectors.map((sector, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-700 font-bold font-sans">&#10003;</span>
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200/60">
                  <h4 className="text-xs font-bold text-stone-850 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-sans">
                    <Activity className="w-4 h-4 text-amber-700" />
                    Tegangan / Konflik Tersembunyi
                  </h4>
                  <ul className="text-xs text-stone-600 font-light space-y-2 list-none pl-0">
                    {synthesis.conflictSectors.map((sector, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-amber-700 font-bold font-sans">&#8226;</span>
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-950 text-white rounded-xl p-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
                  <h4 className="font-serif text-sm font-semibold text-stone-100">Coaching Karir & Gaya Hidup</h4>
                </div>
                <p className="text-xs leading-relaxed text-stone-300 font-light">
                  {synthesis.careerAndLifestyleSuggestion}
                </p>
              </div>
              <p className="text-[10px] text-stone-500 font-mono mt-6 border-t border-stone-800 pt-3">
                Integrasi: {mbti} &times; E{enneaCore}
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: MBTI Detail & Shadow Work */}
        {activeTab === "mbtiDetail" && (
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4 bg-stone-50 p-5 rounded-lg border border-stone-200/60">
              <h4 className="font-serif text-base font-semibold text-stone-850 flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-800" />
                {mbtiDetail.clashTitle}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {mbtiDetail.clashDesc}
              </p>
              <div className="bg-white/80 rounded p-3 text-[11px] font-light text-stone-500 italic border border-stone-150">
                Pencaharian Integrasi: Pelajari cara memeluk fungsi inferior Anda secara perlahan dalam rutinitas non-stres sebagai bagian dari penerimaan diri penuh.
              </div>
            </div>

            <div className="space-y-4 bg-stone-50 p-5 rounded-lg border border-stone-200/60">
              <h4 className="font-serif text-base font-semibold text-amber-950 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-700" />
                {mbtiDetail.shadowTitle}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {mbtiDetail.shadowDesc}
              </p>
              <div className="bg-amber-50/20 rounded p-3 text-[11px] font-light text-amber-900 italic border border-amber-100">
                Latihan Shadow Work: Awasi saat-saat pikiran atau perilaku Anda menjadi ekstrim kaku di bawah lelah, sadari itu suara bayangan bawah batin defensif.
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Enneagram Pathway */}
        {activeTab === "enneagramPath" && (
          <div className="space-y-6">
            <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-5 space-y-2">
              <h4 className="font-serif text-sm font-semibold text-stone-850">
                Profil Dorongan Motivasi: {enneaDetail.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {enneaDetail.title}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-4 rounded-lg border border-stone-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wide inline-block mb-2">
                    Arah Integrasi (Keamanan) &rarr; Tipe {enneaDetail.integration.target}
                  </span>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    Saat berada dalam kondisi matang, stabil, dan aman secara emosional, Anda secara naluriah menyerap sisi terbaik dan merawat kualitas sehat dari Enneagram tipe {enneaDetail.integration.target}:
                  </p>
                </div>
                <p className="text-xs text-stone-800 font-serif italic mt-3 border-t border-stone-100 pt-2">
                  "{enneaDetail.integration.desc}"
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-stone-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wide inline-block mb-2">
                    Arah Disintegrasi (Masa Stres) &rarr; Tipe {enneaDetail.disintegration.target}
                  </span>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    Saat terhimpit oleh beban pikiran, kecemasan, atau kegagalan yang menumpuk, sikap bertahan bawah sadar beralih secara reaktif ke pola tidak sehat dari Enneagram tipe {enneaDetail.disintegration.target}:
                  </p>
                </div>
                <p className="text-xs text-stone-800 font-serif italic mt-3 border-t border-stone-100 pt-2">
                  "{enneaDetail.disintegration.desc}"
                </p>
              </div>

              <div className="bg-emerald-950 text-white p-4 rounded-lg flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wide inline-block mb-2">
                    Rekomendasi Utama Pertumbuhan
                  </span>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Ikuti panduan spiritual dan psikologis bawaan tipe inti Anda untuk membuka sumbatan energi kreativitas:
                  </p>
                </div>
                <p className="text-xs text-amber-200 font-sans font-medium mt-4 leading-relaxed bg-white/10 p-2.5 rounded border border-white/10">
                  {enneaDetail.growthTip}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
