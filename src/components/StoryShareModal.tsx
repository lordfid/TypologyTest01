import { useRef, useEffect, useState } from "react";
import type { ResultsSummary } from "../types";
import { Download, Copy, Share, X, Check, FileImage } from "lucide-react";

interface Props {
  resultsSummary: ResultsSummary;
  onClose: () => void;
}

export default function StoryShareModal({ resultsSummary, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  const mbti = resultsSummary.mbtiTop3[0]?.type || "INTJ";
  const ennea = resultsSummary.enneagramWing || resultsSummary.enneagramTop3[0]?.key || "5";
  const instinct = resultsSummary.instinctStacking.join("/");
  const confidence = resultsSummary.confidence;
  const apType = resultsSummary.attitudinalPsycheType;
  const tritype = resultsSummary.tritype;

  // Generate dynamic title based on MBTI
  const getMbtiNickname = (type: string) => {
    const nicknames: Record<string, string> = {
      INTJ: "The Mastermind / Sang Arsitek",
      INFJ: "The Counselor / Sang Penasihat",
      ENTJ: "The Commander / Sang Panglima",
      ENFJ: "The Protagonist / Sang Guru",
      INTP: "The Architect / Sang Pemikir",
      INFP: "The Mediator / Sang Individualis",
      ENTP: "The Visionary / Sang Katalis",
      ENFP: "The Campaigner / Sang Kreatif",
      ISTJ: "The Inspector / Sang Pengawal",
      ISFJ: "The Protector / Sang Pelindung",
      ESTJ: "The Executive / Sang Pengelola",
      ESFJ: "The Consul / Sang Konsul",
      ISTP: "The Virtuoso / Sang Pengrajin",
      ISFP: "The Adventurer / Sang Seniman",
      ESTP: "The Entrepreneur / Sang Pelopor",
      ESFP: "The Entertainer / Sang Penghibur"
    };
    return nicknames[type] || "Sang Pencari Makna";
  };

  const nickname = getMbtiNickname(mbti);

  // Drawing high-fidelity 1080x1920 vertical canvas stories
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient (Lux Slate Emerald theme)
    const grad = ctx.createLinearGradient(0, 0, 0, 1920);
    grad.addColorStop(0, "#081c15"); // Deep forest green black
    grad.addColorStop(0.5, "#141e1b"); // Deep charcoal green
    grad.addColorStop(1, "#030712"); // Pure black
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Subtle star/node particles for tech-psychology feel
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * 1080;
      const y = Math.random() * 1920;
      const size = Math.random() * 4 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Connect some particles with faint lines
    ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(300, 450);
    ctx.lineTo(800, 200);
    ctx.lineTo(950, 600);
    ctx.lineTo(600, 850);
    ctx.lineTo(100, 1100);
    ctx.lineTo(400, 1400);
    ctx.lineTo(900, 1600);
    ctx.stroke();

    // Decorative subtle circular design borders (Golden section)
    ctx.strokeStyle = "rgba(16, 185, 129, 0.25)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(540, 850, 260, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(217, 119, 6, 0.15)";
    ctx.beginPath();
    ctx.arc(540, 850, 280, 0, Math.PI * 2);
    ctx.stroke();

    // 1. Header label
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("MY PSYCHE LANDMAP RESULT", 540, 180);

    // Faint separator line
    ctx.fillStyle = "rgba(52, 211, 153, 0.2)";
    ctx.fillRect(440, 210, 200, 3);

    // 2. Nickname Subtitle
    ctx.fillStyle = "#34d399";
    ctx.font = "italic 36px serif";
    ctx.fillText(`“${nickname}”`, 540, 270);

    // 3. Main big TYPE display (e.g. INFJ 4w5)
    ctx.shadowColor = "rgba(16, 185, 129, 0.6)";
    ctx.shadowBlur = 30;
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 130px serif";
    ctx.fillText(`${mbti}`, 540, 500);

    ctx.shadowColor = "rgba(245, 158, 11, 0.4)";
    ctx.shadowBlur = 20;
    ctx.fillStyle = "#f59e0b"; // Golden honey text for Enneas
    ctx.font = "bold 85px serif";
    ctx.fillText(`${ennea}`, 540, 620);

    ctx.shadowBlur = 0; // Reset shadows

    // 4. Instinct stacking badge and other typologies
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(52, 211, 153, 0.3)";
    ctx.fillStyle = "rgba(16, 185, 129, 0.1)";

    // Rounded rectangle helper for instincts
    const badgeX = 540 - 240;
    const badgeY = 740;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(badgeX, badgeY, 480, 110, 20) : ctx.rect(badgeX, badgeY, 480, 110);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 32px sans-serif";
    ctx.fillText(`Instincts: ${instinct}`, 540, 792);
    ctx.font = "26px sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fillText(`Tritype: ${tritype} • AP Type: ${apType}`, 540, 835);

    // 5. Visual progress dimensions metrics (Drawn in bottom half)
    const metricsY = 960;
    ctx.textAlign = "left";

    // Dynamic metrics calculated from results summary
    const mbtiFit = resultsSummary.mbtiTop3[0]?.fitScore || 85;
    const topFunc = resultsSummary.functionRanking[0]?.score || 80;
    const topFuncKey = resultsSummary.functionRanking[0]?.key || "Ni";

    const drawProgressBar = (label: string, value: number, y: number, color = "#10b981") => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "30px sans-serif";
      ctx.fillText(label, 150, y);
      ctx.textAlign = "right";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 30px sans-serif";
      ctx.fillText(`${value}%`, 930, y);
      ctx.textAlign = "left";

      // Bar container
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(150, y + 15, 780, 16, 8) : ctx.rect(150, y + 15, 780, 16);
      ctx.fill();

      // Bar active progress
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(150, y + 15, (value / 100) * 780, 16, 8) : ctx.rect(150, y + 15, (value / 100) * 780, 16);
      ctx.fill();
    };

    drawProgressBar("MBTI Match Accuracy", mbtiFit, metricsY, "#10b981");
    drawProgressBar(`Cognitive Strength (${topFuncKey})`, topFunc, metricsY + 110, "#34d399");
    drawProgressBar("Self-Consistency Index", confidence, metricsY + 220, "#f59e0b");

    // 6. Living values pills drawn beautifully block
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 32px sans-serif";
    ctx.fillText("Top Values / Nilai Utama:", 150, metricsY + 372);

    const first3Values = resultsSummary.valuesRanking.slice(0, 3).map(v => v.key);
    let pillX = 150;
    first3Values.forEach(val => {
      ctx.font = "bold 26px sans-serif";
      const txt = val.toUpperCase();
      const textWidth = ctx.measureText(txt).width;
      const padW = 40;

      // Draw rounded pill bg
      ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
      ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(pillX, metricsY + 410, textWidth + padW, 60, 30) : ctx.rect(pillX, metricsY + 410, textWidth + padW, 60);
      ctx.fill();
      ctx.stroke();

      // Text
      ctx.fillStyle = "#e0a96d";
      ctx.fillText(txt, pillX + 20, metricsY + 450);

      pillX += textWidth + padW + 20;
    });

    // 7. Footer brand and QR simulation
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(150, 1650, 780, 2);

    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.font = "26px sans-serif";
    ctx.fillText("Mendesain Pemahaman Diri Mendalam", 540, 1720);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 30px sans-serif";
    ctx.fillText("Deep Personality Landmap • Google AI Studio", 540, 1775);

    // Save download file URL
    setDownloadUrl(canvas.toDataURL("image/png"));
  }, [resultsSummary, nickname, mbti, ennea, instinct, confidence, apType, tritype]);

  const copyToClipboard = () => {
    const text = `🗺️✨ My Deep Personality Landmap Results! ✨🗺️

📌 MBTI Type: ${mbti} (${nickname})
📌 Enneagram: ${ennea} (Tritype: ${tritype})
📌 Instinctual Stacking: ${instinct}
📌 Attitudinal Psyche: ${apType}
📌 Reliability Index: ${confidence}%

Cek peta kognitif dan kepribadian mendalammu juga di Deep Personality Test! 🔍🔮`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-stone-900/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl relative flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto">
        
        {/* Dismiss trigger */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-700 p-2 rounded-full cursor-pointer transition"
          alt-text="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Story Live Preview (Mockup vertical template rendered dynamically inside canvas) */}
        <div className="flex-1 flex flex-col items-center">
          <h4 className="font-serif text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
            <FileImage className="w-4 h-4 text-emerald-800" />
            Social Story Card Preview
          </h4>

          {/* Hidden Canvas on sizing screen, but shown scaled via CSS */}
          <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-lg bg-stone-900 max-w-[270px]">
            <canvas
              ref={canvasRef}
              width={1080}
              height={1920}
              className="w-full h-auto aspect-[9/16]"
            />
          </div>
          <p className="text-[10px] text-stone-400 mt-2">
            Desain visual 9:16 cocok diunduh langsung untuk Story Instagram/TikTok.
          </p>
        </div>

        {/* Sharing Details Options */}
        <div className="flex-1 flex flex-col justify-between space-y-6 pt-4">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Bagikan Peta Jiwa ke Story!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Ekspresikan sisi autentik Anda kepada sesama. Unduh kartu visual premium berkualitas tinggi atau salin ringkasan teks untuk dibagikan langsung.
            </p>

            {/* Profile summary bullet-points */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-stone-200/50 pb-2">
                <span className="text-stone-400 font-mono">My Identity:</span>
                <span className="font-semibold text-stone-850">{mbti} {ennea}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200/50 pb-2">
                <span className="text-stone-400 font-mono">Dinamika Nafsu:</span>
                <span className="font-semibold text-stone-850">Insting {instinct}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200/50 pb-2">
                <span className="text-stone-400 font-mono">Metode Akal:</span>
                <span className="font-semibold text-stone-850">Psikosofi {apType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400 font-mono">Akurasi Index:</span>
                <span className="font-semibold text-emerald-800">{confidence}%</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-150">
            {/* Download and copy triggers */}
            <a
              href={downloadUrl}
              download={`my_psyche_landmap_${mbti.toLowerCase()}.png`}
              className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase py-3 rounded-lg shadow-md transition cursor-pointer"
            >
              <Download className="w-4.5 h-4.5" />
              Unduh Gambar Story (.PNG)
            </a>

            <button
              onClick={copyToClipboard}
              className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-950 text-white font-semibold text-xs tracking-wider uppercase py-3 rounded-lg shadow transition cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4.5 h-4.5 text-green-400" />
                  Berhasil Disalin!
                </>
              ) : (
                <>
                  <Copy className="w-4.5 h-4.5" />
                  Salin Teks Ringkasan Story
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
