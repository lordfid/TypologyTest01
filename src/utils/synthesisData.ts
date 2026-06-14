export interface MBTIDetail {
  name: string;
  focus: string;
  clashTitle: string;
  clashDesc: string;
  shadowTitle: string;
  shadowDesc: string;
}

export interface EnneaDetail {
  name: string;
  title: string;
  integration: { target: string; desc: string };
  disintegration: { target: string; desc: string };
  growthTip: string;
}

export const MBTI_DETAILS: Record<string, MBTIDetail> = {
  INTJ: {
    name: "Sang Arsitek Strategis",
    focus: "Membangun visi jangka panjang berbasis sistem logis.",
    clashTitle: "Tensi Dominan vs Inferior (Ni-Se)",
    clashDesc: "Saat stres batin meningkat, penglihatan jangka panjang Anda (Ni) bisa goyah dan Anda terjebak dalam impulsivitas fisik atau hiper-fokus ekstrim pada detail sensorik sekitar yang di luar kendali (Se).",
    shadowTitle: "Sisi Bayangan (Shadow Fi-Se)",
    shadowDesc: "Di bawah tekanan berat, Anda beralih ke perasaan subyektif yang rentan (Fi) dan dorongan aksi instan yang berpotensi menyabotase rencana matang Anda sendiri."
  },
  INFJ: {
    name: "Sang Penasihat Visioner",
    focus: "Membaca pola batin manusia dan mengarahkan harmoni masa depan.",
    clashTitle: "Tensi Dominan vs Inferior (Ni-Se)",
    clashDesc: "Saat kelelahan mental melanda, ketajaman intuisi empati Anda (Ni) berubah menjadi kelumpuhan analisis, di mana Anda merasa terasing oleh rangsangan sensorik sekitar dan ingin melarikan diri (Se).",
    shadowTitle: "Sisi Bayangan (Shadow Ti-Se)",
    shadowDesc: "Bayangan logis kritis (Ti) yang dingin mulai mengadili perasaan hangat Anda, melahirkan sikap sinis menyendiri sebelum letupan impulsivitas sensoris (Se) terjadi."
  },
  ENTJ: {
    name: "Sang Panglima Efektif",
    focus: "Menggerakkan struktur, target, dan efisiensi eksternal.",
    clashTitle: "Tensi Dominan vs Inferior (Te-Fi)",
    clashDesc: "Keharusan mengejar efisiensi (Te) membuat Anda sering menekan nilai rasa dan batin personal (Fi). Saat stres berat, Anda tiba-tiba merasa sangat tidak berharga atau mengalami ledakan sentimen emosional rahasia.",
    shadowTitle: "Sisi Bayangan (Shadow Ni-Fi)",
    shadowDesc: "Visi jangka panjang Anda (Ni) mendadak dipenuhi keraguan eksistensial, diracuni oleh kecurigaan bahwa kerja keras Anda tidak bermakna bagi perasaan terdalam Anda sendiri (Fi)."
  },
  ENFJ: {
    name: "Sang Guru Inspiratif",
    focus: "Menumbuhkan potensi orang lain dan menyelaraskan nilai kelompok.",
    clashTitle: "Tensi Dominan vs Inferior (Fe-Ti)",
    clashDesc: "Keinginan menjaga harmoni sosial (Fe) sering merusak kepatutan logika objektif Anda (Ti). Saat stres, Anda cenderung menjadi sangat kritis, menganalisis dan menghakimi orang lain dengan cara yang sangat dingin.",
    shadowTitle: "Sisi Bayangan (Shadow Ni-Ti)",
    shadowDesc: "Intuisi masa depan Anda (Ni) diselimuti oleh distorsi paranoid, sementara filter logika dingin (Ti) menuduh niat baik Anda hanyalah sebuah kepura-puraan."
  },
  INTP: {
    name: "Sang Pemikir Logis",
    focus: "Membedah akurasi konseptual dan arsitektur ide.",
    clashTitle: "Tensi Dominan vs Inferior (Ti-Fe)",
    clashDesc: "Kebutuhan Anda akan kemandirian logika (Ti) sering menabrak kebutuhan hubungan relasional (Fe). Saat tertekan, Anda tiba-tiba menjadi sangat sensitif terhadap penolakan sosial atau meledak dalam kemarahan emosional yang meluap.",
    shadowTitle: "Sisi Bayangan (Shadow Ne-Fe)",
    shadowDesc: "Kreativitas eksploratif Anda (Ne) berubah menjadi skenario bencana yang menakutkan, bertumpu pada ketakutan bahwa Anda telah mengecewakan semua orang di sekitar Anda (Fe)."
  },
  INFP: {
    name: "Sang Individualis Harmonis",
    focus: "Menjaga autentisitas nilai personal dan impian batin.",
    clashTitle: "Tensi Dominan vs Inferior (Fi-Te)",
    clashDesc: "Menjaga keutuhan nilai batin (Fi) menyulitkan Anda mengambil tindakan tegas yang keras (Te). Di bawah stres, Anda berubah menjadi sosok yang menuntut ketertiban mekanis kasar, berteriak logis tentang detail, atau mengorganisasi sekitar secara obsesif.",
    shadowTitle: "Sisi Bayangan (Shadow Ne-Te)",
    shadowDesc: "Imajinasi kreatif Anda (Ne) melahirkan rasa curiga bahwa sistem eksternal dipersiapkan untuk menghancurkan keyakinan terdalam Anda (Te)."
  },
  ENTP: {
    name: "Sang Katalis Inovatif",
    focus: "Menghubungkan kemungkinan baru dan mendobrak struktur lama.",
    clashTitle: "Tensi Dominan vs Inferior (Ne-Si)",
    clashDesc: "Keinginan tak terbatas akan hal-hal baru (Ne) berbenturan dengan detail perawatan masa lalu (Si). Di bawah stres, Anda terperangkap dalam kepanikan hipokondria (takut sakit), ingatan kegagalan masa lalu yang menghantui, atau terjebak rutinitas kecil secara obsesif.",
    shadowTitle: "Sisi Bayangan (Shadow Ti-Si)",
    shadowDesc: "Analisis tajam Anda (Ti) mulai berputar tanpa arah untuk membuktikan kebenaran spekulatif, mengabaikan fakta sejarah yang nyata (Si) demi mempertahankan ego."
  },
  ENFP: {
    name: "Sang Juru Kampanye Kreatif",
    focus: "Menjalani kehidupan penuh makna dan kemungkinan manusia.",
    clashTitle: "Tensi Dominan vs Inferior (Ne-Si)",
    clashDesc: "Semangat menjajaki kemungkinan baru (Ne) membuat Anda membenci kewajiban administratif (Si). Saat tertekan, Anda tenggelam dalam ingatan lama yang disesali secara kaku atau menjadi sangat takut pada penyakit fisik tak berdasar.",
    shadowTitle: "Sisi Bayangan (Shadow Fi-Si)",
    shadowDesc: "Keyakinan batin Anda (Fi) melemah menjadi melankoli tertutup yang meratapi pola-pola hidup masa lalu yang dirasa gagal dipertahankan (Si)."
  },
  ISTJ: {
    name: "Sang Pengawal Tepercaya",
    focus: "Memelihara stabilitas, aturan, dan fakta operasional tepercaya.",
    clashTitle: "Tensi Dominan vs Inferior (Si-Ne)",
    clashDesc: "Melindungi fakta yang terbukti (Si) membuat Anda skeptis pada perubahan (Ne). Saat stres meningkat, Anda ditimpa ketakutan luar biasa akan ketidakpastian masa depan, meramalkan segala kemungkinan skenario terburuk yang bisa merusak segalanya.",
    shadowTitle: "Sisi Bayangan (Shadow Te-Ne)",
    shadowDesc: "Logika tindakan Anda (Te) menjadi kaku, didorong oleh kepanikan bahwa skenario buruk (Ne) sudah tidak mungkin lagi dicegah dengan aturan lama."
  },
  ISFJ: {
    name: "Sang Pelindung Setia",
    focus: "Menjamin keselamatan detail batiniah dan kenyamanan sesama.",
    clashTitle: "Tensi Dominan vs Inferior (Si-Ne)",
    clashDesc: "Ketelitian merawat detail kenyamanan fisik (Si) goyah saat ketidakpastian (Ne) melanda. Anda akan dilanda delusi ketakutan bahwa hal-hal tak terduga di luar kendali akan memisahkan Anda dari rasa aman.",
    shadowTitle: "Sisi Bayangan (Shadow Fe-Ne)",
    shadowDesc: "Metode kepatutan sosial Anda (Fe) melemah ke arah prasangka bahwa orang di sekitar sengaja memicu ketidakpastian (Ne) untuk menguji kesabaran Anda."
  },
  ESTJ: {
    name: "Sang Pengelola Aturan",
    focus: "Menata sistem kerja nyata, hasil logis, dan koordinasi.",
    clashTitle: "Tensi Dominan vs Inferior (Te-Fi)",
    clashDesc: "Mengatur dunia luar secara produktif (Te) menuntut pengorbanan perasaan personal (Fi). Saat stres berat, Anda merasa terisolasi, kesepian, dan meyakini bahwa tidak ada satu pun orang yang peduli pada niat baik terdalam Anda.",
    shadowTitle: "Sisi Bayangan (Shadow Si-Fi)",
    shadowDesc: "Anda mengurung diri dalam memori tanggung jawab lama (Si), sambil digerogoti rasa bersalah emosional yang terpendam (Fi) karena dirasa kurang hangat."
  },
  ESFJ: {
    name: "Sang Konsul Sosial",
    focus: "Mengatur tatanan komunal, kenyamanan, dan peran nyata.",
    clashTitle: "Tensi Dominan vs Inferior (Fe-Ti)",
    clashDesc: "Upaya menjaga harmoni orang lain (Fe) mematikan penalaran analisis pribadi (Ti). Di bawah tekanan, Anda menjadi sangat defensif secara rasional, curiga pada motif logis orang, atau merancang argumen kaku demi pembenaran diri.",
    shadowTitle: "Sisi Bayangan (Shadow Si-Ti)",
    shadowDesc: "Anda berulang kali membuka kembali sejarah perlakuan buruk orang lain terhadap Anda (Si), menganalisisnya secara dingin (Ti) untuk membenarkan pemutusan hubungan."
  },
  ISTP: {
    name: "Sang Pengrajin Taktis",
    focus: "Memecahkan masalah praktis seketika dengan nalar efisien.",
    clashTitle: "Tensi Dominan vs Inferior (Ti-Fe)",
    clashDesc: "Kemandirian taktis yang cuek (Ti) membuat Anda sering melalaikan relasi (Fe). Saat stres batin naik, Anda dipenuhi ketakutan tidak terlihat/tidak bernilai bagi sesama, lalu mencoba menarik simpati sekitar secara berlebih-lebihan.",
    shadowTitle: "Sisi Bayangan (Shadow Se-Fe)",
    shadowDesc: "Dorongan fisik yang agresif (Se) berisiko menyulut konfrontasi sosial, demi melepaskan kecemasan batin akan pengabaian komunal (Fe)."
  },
  ISFP: {
    name: "Sang Seniman Misterius",
    focus: "Mengekspresikan nilai autentik melalui keindahan nyata.",
    clashTitle: "Tensi Dominan vs Inferior (Fi-Te)",
    clashDesc: "Sensibilitas emosi batin (Fi) menyulitkan pengambilan rencana tegas yang kaku (Te). Saat stres berat, Anda menjadi sosok yang bertekad keras, cerewet membicarakan efisiensi secara sarkastis, dan bersikap agresif menyindir ketidakmampuan orang lain.",
    shadowTitle: "Sisi Bayangan (Shadow Se-Te)",
    shadowDesc: "Pola impulsif sensorik Anda (Se) didikte oleh amarah buta untuk membuktikan penguasaan logis eksternal yang sebenarnya tidak Anda kuasai (Te)."
  },
  ESTP: {
    name: "Sang Pelopor Dinamis",
    focus: "Mengarahkan peluang fisik taktis dengan penyesuaian instan.",
    clashTitle: "Tensi Dominan vs Inferior (Se-Ni)",
    clashDesc: "Hiper-fokus pada realitas masa kini (Se) mematikan intuisi jangka panjang (Ni). Saat stres berat, Anda mengalami krisis eksistensial, ketakutan paranoid tentang masa depan yang dirasa sudah terkutuk tanpa alasan logis.",
    shadowTitle: "Sisi Bayangan (Shadow Ti-Ni)",
    shadowDesc: "Kecerdasan analisis Anda (Ti) berubah menjadi alat untuk mempercayai teori konspirasi acak atau intuisi pengkhianatan masa depan yang aneh (Ni)."
  },
  ESFP: {
    name: "Sang Penghibur Alami",
    focus: "Menghidupkan energi ruangan and memikat perhatian nyata.",
    clashTitle: "Tensi Dominan vs Inferior (Se-Ni)",
    clashDesc: "Menikmati sensasi dan tawa masa kini (Se) mengabaikan pola konsekuensi batin (Ni). Di bawah stres, Anda tiba-tiba dilingkupi rasa suram mendalam, menebak konspirasi jahat orang, atau ketakutan akan kematian atau kegelapan masa depan.",
    shadowTitle: "Sisi Bayangan (Shadow Fi-Ni)",
    shadowDesc: "Sentimen kesedihan personal Anda (Fi) dibebani ramalan-ramalan takhayul yang meramalkan kehancuran hubungan cinta atau karir (Ni)."
  }
};

export const ENNEA_DETAILS: Record<string, EnneaDetail> = {
  "1": {
    name: "The Reformer (Sang Idealis Disiplin)",
    title: "Dorongan batin adalah menjadi benar, berintegritas, dan menghindari cacat moral.",
    integration: { target: "7", desc: "Menjadi lebih rileks, spontan, mau menikmati hidup tanpa menghakimi keadaan." },
    disintegration: { target: "4", desc: "Menjadi melankolis, merasa tidak dipahami, dan mengasihani diri secara berlebih saat merasa gagal memperbaiki dunia sekitar." },
    growthTip: "Sadari bahwa ketidaksempurnaan adalah bagian dari fitrah alam semesta. Kurangi intensitas penilai batin (inner critic) Anda."
  },
  "2": {
    name: "The Helper (Sang Pemberi Kasih)",
    title: "Dorongan mendalam untuk dicintai, dibutuhkan, dan menghindari penolakan batin.",
    integration: { target: "4", desc: "Mulai menyadari kebutuhan batin pribadi, mengekspresikan emosi secara autentik tanpa berpura-pura kuat." },
    disintegration: { target: "8", desc: "Menjadi agresif, mengontrol orang yang dibantu, dan menuntut balasan perhatian dengan kemarahan dominatif." },
    growthTip: "Belajarlah berkata 'tidak'. Menyayangi orang lain tidak boleh dibayar dengan mengorbankan ruang privasi batin sendiri."
  },
  "3": {
    name: "The Achiever (Sang Pemburu Prestasi)",
    title: "Dorongan batin untuk bernilai melaui hasil, status, dan menghindari perasaan kegagalan.",
    integration: { target: "6", desc: "Belajar berkomitmen pada kelompok, menjadi lebih tulus, loyal, dan menerima keterbatasan diri bersama sesama." },
    disintegration: { target: "9", desc: "Menjadi apatis, menarik diri dari kompetisi saat stres, mengabaikan prioritas nyata dengan kegiatan pasif." },
    growthTip: "Anda berharga karena keberadaan diri Anda, bukan karena setumpuk piala dan sertifikat prestasi sosial yang Anda bawa."
  },
  "4": {
    name: "The Individualist (Sang Pencari Autentisitas)",
    title: "Menginginkan keunikan diri, ekspresi estetis, dan menghindari kesamaan biasa.",
    integration: { target: "1", desc: "Mampu menyalurkan perasaan dramatis batin menjadi disiplin nyata, karya nyata yang berpijak pada bumi." },
    disintegration: { target: "2", desc: "Menjadi bergantung pada perhatian orang secara emosional, memanipulasi demi mendapatkan pengakuan rasa sayang." },
    growthTip: "Perlakukan perasaan batin sebagai ombak cuaca—mereka nyata tapi bukan kebenaran objektif mutlak. Latihlah konsistensi aksi sehari-hari."
  },
  "5": {
    name: "The Investigator (Sang Pengamat Sunyi)",
    title: "Menginginkan pemahaman penuh, kompetensi akal, dan menghindari invasi energi orang.",
    integration: { target: "8", desc: "Berani mengambil tindakan nyata langsung di lapangan, menggunakan energi batin untuk memimpin perubahan fisik." },
    disintegration: { target: "7", desc: "Menjadi linglung, mencari stimulasi dangkal demi menenangkan kecemasan akibat konsentrasi pikiran yang meledak-ledak." },
    growthTip: "Ketersediaan energi batin Anda sebenarnya elastis. Jangan takut terlibat secara fisik dan emosional langsung di dunia nyata."
  },
  "6": {
    name: "The Loyalist (Sang Pengawal Keamanan)",
    title: "Mencari petunjuk arah terpercaya, kepastian lingkungan, dan mengantisipasi skenario buruk.",
    integration: { target: "9", desc: "Menjadi lebih damai, rileks menghadapi ketidakpastian batin, dan mempercayai alur nasib kehidupan." },
    disintegration: { target: "3", desc: "Menyibukkan diri secara berlebih dalam rencana taktis pragmatis, menyamar di balik topeng performa demi menghindari ketakutan terdalam." },
    growthTip: "Sumber keamanan sejati ada di dalam kapasitas resiliensi Anda sendiri, bukan di luar sistem pengamanan eksternal."
  },
  "7": {
    name: "The Enthusiast (Sang Penjelajah Gembira)",
    title: "Mengumpulkan opsi kesenangan, masa depan cerah, dan mati-matian menghindari rasa bosan atau pedih batin.",
    integration: { target: "5", desc: "Fokus mendalam pada satu bidang, menikmati kedalaman analisis tanpa selalu butuh buru-buru berpindah target keinginan." },
    disintegration: { target: "1", desc: "Menjadi kaku, menuntut aturan secara ekstrem ketika impian petualangan dihalangi kenyataan nyata." },
    growthTip: "Rasa bosan atau duka batin menyimpan mutiara refleksi yang sangat berharga. Berdirilah tegak di dalam keheningan saat sunyi tiba."
  },
  "8": {
    name: "The Challenger (Sang Pejuang Berdaulat)",
    title: "Menjamin kedaulatan hak, perlindungan diri, dan menolak dikendalikan oleh kekuatan luar.",
    integration: { target: "2", desc: "Menurunkan pelindung lapis baja, memperlihatkan kelembutan kasih sayang batin demi melindungi kaum lemah." },
    disintegration: { target: "5", desc: "Menjadi paranoid kognitif, mengurung diri dalam kamar rahasia untuk memata-matai detail pergerakan musuh." },
    growthTip: "Kekuatan sejati bukanlah menolak terluka, melainkan keberanian untuk melonggarkan baju besi batin Anda agar kasih dapat masuk."
  },
  "9": {
    name: "The Peacemaker (Sang Penjaga Kedamaian)",
    title: "Menghindari perselisihan, menyatu dengan alam harmoni, dan menjaga kelapangan batin.",
    integration: { target: "3", desc: "Menolak menunda, bergerak penuh gairah melakukan perubahan nyata, menyatakan hak batin secara tegas." },
    disintegration: { target: "6", desc: "Menjadi bingung, dipenuhi kekhawatiran spekulatif, merasa terjebak kewajiban yang enggan direncanakan." },
    growthTip: "Menghindari konflik hanya merawat kedamaian semu yang menipu batin. Kedamaian sejati lahir dari keberanian berkonfrontasi jujur."
  }
};

/**
 * Synthesize dynamic combination description of MBTI + Enneagram.
 * Explains how the cognitive function machinery interacts with the Enneagram core drive.
 */
export function synthesizeCombination(mbti: string, enneagram: string): {
  coreConcept: string;
  harmonySectors: string[];
  conflictSectors: string[];
  careerAndLifestyleSuggestion: string;
} {
  const isIntroverted = ["I", "i"].includes(mbti[0] || "");
  const centerOfEnnea = ["8", "9", "1"].includes(enneagram) 
    ? "Gut/Physical Center" 
    : ["2", "3", "4"].includes(enneagram) ? "Heart/Emotional Center" : "Head/Intellectual Center";

  const isCohesive = 
    (enneagram === "5" && (mbti.includes("T") && mbti.includes("N"))) ||
    ((enneagram === "9" || enneagram === "4") && mbti.includes("F") && isIntroverted) ||
    (enneagram === "3" && mbti.includes("E") && mbti.includes("T")) ||
    (enneagram === "7" && mbti.includes("E") && mbti.includes("P")) ||
    (enneagram === "1" && mbti.includes("J") && mbti.includes("T"));

  let coreConcept = "";
  let harmonySectors = [];
  let conflictSectors = [];
  let careerAndLifestyleSuggestion = "";

  if (isCohesive) {
    coreConcept = `Kombinasi ${mbti} dengan Enneagram ${enneagram} adalah sirkuit kepribadian yang sangat "searah" (Harmonious Flow). Driver batin Enneagram Anda sejalan dengan mesin kognitif MBTI Anda.`;
    harmonySectors = [
      "Fokus energi instan: Mesin logika atau empati Anda langsung memicu pemuasan motivasi inti dengan sangat lancar.",
      "Kejelasan Identitas: Konflik batin internal tergolong rendah karena Anda jarang merasa didikte oleh dorongan bertolak belakang.",
      "Kemandirian Sikap: Anda sangat mudah mengenali kebutuhan batin dan langsung mengarahkan hidup padanya."
    ];
    conflictSectors = [
      "Blindspot Ganda: Kekuatan bawaan Anda mengalami pembesaran berujung ekstrem (misalnya, jika logis, Anda menjadi sangat kaku tanpa adanya penyeimbang rasa).",
      "Kerapuhan Stres: Karena sirkuitnya lancar, saat kegagalan melanda, proteksi cadangan Anda goyah dengan sangat cepat.",
      "Kecenderungan Pengulangan: Sangat sulit keluar dari zona nyaman perilaku yang dirasa sudah sangat teruji alami."
    ];
  } else {
    coreConcept = `Kombinasi ${mbti} dengan Enneagram ${enneagram} adalah sirkuit kepribadian yang "unik & penuh tegangan" (High Internal Tension). Ada dinamika pertentangan yang bernilai tinggi antara mesin persepsi Anda dan arah kehendak bawah sadar Anda.`;
    harmonySectors = [
      "Kedalaman Karakter: Anda memiliki kompleksitas batin luar biasa yang membuat Anda tangguh membaca nuansa kontradiktif manusia.",
      "Penyeimbang Alami: Driver Enneagram secara tidak langsung meredam titik ekstrem kelemahan MBTI Anda.",
      "Multitasking Perspektif: Ahli dalam menimbang rasa di balik struktur logis, atau sebaliknya."
    ];
    conflictSectors = [
      "Kelelahan Batin Kronis: Sering merasa bertengkar dengan diri sendiri (misalnya: dorongan sosial vs keinginan menyendiri yang kontradiktif).",
      "Krisis Pengetikan: Seringkali Anda sulit ditipekan karena perilaku luar sangat dipengaruhi oleh Enneagram batin Anda.",
      "Kebingungan Prioritas: Mesin kognitif menginginkan kebebasan tetapi motif batin menuntut ketertiban disiplin yang menekan."
    ];
  }

  // Generate specific combinations examples dynamically
  if (enneagram === "5") {
    careerAndLifestyleSuggestion = `Sebagai tipe dominan analisis logis, padukan kedalaman eksplorasi dengan perlindungan energi batin. Sangat cocok di bidang riset independen, konsultasi strategi, arsitektur data, atau penulisan mendalam. Beri ruang hening di malam hari agar baterai batin tidak bocor.`;
  } else if (enneagram === "4") {
    careerAndLifestyleSuggestion = `Sebagai tipe pencari makna ekspresif, bawalah keunikan personal Anda ke dalam proyek nyata. Sangat cocok dalam pengembangan seni rupa, media kreatif, psikoterapi, konseling, atau arah kampanye bermakna. Hindari tenggelam dalam pusaran rasa pasif.`;
  } else if (enneagram === "9") {
    careerAndLifestyleSuggestion = `Membutuhkan harmoni tanpa kebohongan. Sangat berharga di bidang resolusi konflik, mediasi, pekerjaan lingkungan hidup, pengajaran, atau kuratorial. Latihlah keberanian menyuarakan hak Anda langsung tanpa ditunda.`;
  } else if (enneagram === "3") {
    careerAndLifestyleSuggestion = `Gabungan performa taktis nyata. Sangat cocok di bidang manajemen eksekutif, wirausaha, hubungan masyarakat mandiri, atau kepemimpinan operasional bisnis. Milikilah hobi sunyi yang bebas dari penilaian angka keberhasilan sosial.`;
  } else if (enneagram === "1") {
    careerAndLifestyleSuggestion = `Dorongan keadilan etis tinggi. Sangat tepat di sektor audit mutu, penegakan regulasi kepatuhan hukum, pengajaran etika, sains murni, atau manajemen risiko sistem. Latihlah apresiasi kesalahan kecil yang lucu.`;
  } else if (enneagram === "2") {
    careerAndLifestyleSuggestion = `Dedikasi menjaga batin kemanusiaan. Sangat baik di industri perawatan kesehatan, pengajaran usia anak dasar, konsultasi psikologi, atau kepemimpinan nirlaba (NGO). Ambil batas empati agar emosi orang tidak meracuni energi batin Anda.`;
  } else if (enneagram === "6") {
    careerAndLifestyleSuggestion = `Kemampuan deteksi risiko murni. Sangat cocok di analisis kepatuhan sistem, keselamatan penerbangan/operasional medis, rekayasa keandalan sistem, atau keuangan strategis berkelanjutan. Kurangi konsumsi analisis berita buruk global.`;
  } else if (enneagram === "7") {
    careerAndLifestyleSuggestion = `Spesialisasi pembuka opsi petualangan baru. Cocok di bidang perancangan acara, jurnalisme investigasi perjalanan, pembuat konsep inovasi produk baru, atau wirausaha rintisan (startup). Belajarlah bertahan di satu fokus dalam sebulan penuh.`;
  } else if (enneagram === "8") {
    careerAndLifestyleSuggestion = `Menjaga kedaulatan arah strategis. Berharga di bidang advokasi buruh/kemiskinan, kepemimpinan krisis organisasi, penasihat restrukturisasi, atau wirausaha industri fisik berat. Kurangi intonasi suara keras saat batin merasa defensif.`;
  } else {
    careerAndLifestyleSuggestion = `Sangat direkomendasikan untuk menciptakan ritme hidup terorganisir yang menjembatani kenyamanan fisik bawah sadar dengan target produktivitas Anda. Sediakan waktu refleksi seminggu sekali.`;
  }

  return { coreConcept, harmonySectors, conflictSectors, careerAndLifestyleSuggestion };
}
