import type { QuestionModule, ContextType } from "../types";

export interface ScenarioSeed {
  id: string;
  module: QuestionModule;
  contextType: ContextType;
  text: string;
  optionProfileIds: string[];
}

export const MAIN_SCENARIOS_PART1: ScenarioSeed[] = [
  {
    "id": "m000",
    "module": "cognitive-core",
    "contextType": "chat",
    "text": "Sebuah pesan pendek masuk setelah percakapan yang terasa agak berubah. Kata-katanya biasa saja, tetapi jedanya membuatmu merasa ada sesuatu di baliknya.",
    "optionProfileIds": ["quietPattern", "manyAngles", "pastReference", "directTouch", "innerLine", "socialRepair"]
  },
  {
    "id": "m001",
    "module": "cognitive-core",
    "contextType": "public",
    "text": "Di tempat umum, seseorang menyebut namamu dengan nada yang sulit dibaca. Beberapa orang menoleh dan kau perlu memilih respons pertama.",
    "optionProfileIds": ["manyAngles", "pastReference", "directTouch", "innerLine", "socialRepair", "clarifyLogic"]
  },
  {
    "id": "m002",
    "module": "cognitive-core",
    "contextType": "friendship",
    "text": "Seorang teman tiba-tiba lebih diam dari biasanya saat kalian sedang berjalan bersama. Ia tidak mengatakan apa pun, tetapi langkahnya berubah.",
    "optionProfileIds": ["pastReference", "directTouch", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome"]
  },
  {
    "id": "m003",
    "module": "cognitive-core",
    "contextType": "alone",
    "text": "Kau membaca ulang catatan lama dan menemukan satu kalimat yang kini terasa berbeda makna. Ada keputusan kecil yang perlu kau ambil setelahnya.",
    "optionProfileIds": ["directTouch", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "quietPattern"]
  },
  {
    "id": "m004",
    "module": "cognitive-core",
    "contextType": "group",
    "text": "Dalam obrolan kelompok, dua orang menafsirkan kejadian yang sama dengan cara yang sangat berbeda. Semua menunggumu ikut menilai.",
    "optionProfileIds": ["innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "quietPattern", "manyAngles"]
  },
  {
    "id": "m005",
    "module": "cognitive-core",
    "contextType": "memory",
    "text": "Kau mencium aroma tempat lama dan ingatan yang tidak utuh muncul. Ada pesan yang perlu kau balas sebelum rasa itu hilang.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "organizeOutcome", "quietPattern", "manyAngles", "pastReference"]
  },
  {
    "id": "m006",
    "module": "cognitive-core",
    "contextType": "future",
    "text": "Sebuah rencana enam bulan ke depan mendadak terasa tidak sejalan. Belum ada bukti besar, hanya tanda kecil yang mengganggu.",
    "optionProfileIds": ["clarifyLogic", "organizeOutcome", "quietPattern", "manyAngles", "pastReference", "directTouch"]
  },
  {
    "id": "m007",
    "module": "cognitive-core",
    "contextType": "body",
    "text": "Saat ruangan mulai ramai, tubuhmu memberi sinyal lebih cepat daripada pikiranmu. Kau perlu memilih apakah tetap tinggal atau bergerak.",
    "optionProfileIds": ["organizeOutcome", "quietPattern", "manyAngles", "pastReference", "directTouch", "innerLine"]
  },
  {
    "id": "m008",
    "module": "cognitive-core",
    "contextType": "creative",
    "text": "Kau melihat karya yang hampir selesai, tetapi ada bagian kecil yang terasa tidak tepat. Orang lain sudah menganggapnya cukup.",
    "optionProfileIds": ["quietPattern", "manyAngles", "pastReference", "directTouch", "innerLine", "socialRepair"]
  },
  {
    "id": "m009",
    "module": "cognitive-core",
    "contextType": "moral",
    "text": "Seseorang meminta pendapatmu tentang keputusan yang tampak masuk akal, tetapi ada akibat tersembunyi yang membuatmu ragu.",
    "optionProfileIds": ["manyAngles", "pastReference", "directTouch", "innerLine", "socialRepair", "clarifyLogic"]
  },
  {
    "id": "m010",
    "module": "cognitive-core",
    "contextType": "learning",
    "text": "Materi sulit dijelaskan terlalu cepat. Semua orang terlihat paham, sementara kau merasa satu bagian dasar belum jelas.",
    "optionProfileIds": ["pastReference", "directTouch", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome"]
  },
  {
    "id": "m011",
    "module": "cognitive-core",
    "contextType": "friendship",
    "text": "Temanmu menertawakan hal kecil yang bagimu terasa punya pesan lain. Ia berkata itu hanya candaan.",
    "optionProfileIds": ["directTouch", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "quietPattern"]
  },
  {
    "id": "m012",
    "module": "cognitive-core",
    "contextType": "public",
    "text": "Antrian mendadak kacau karena satu orang memotong jalur. Tidak ada petugas yang langsung mengatur.",
    "optionProfileIds": ["innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "quietPattern", "manyAngles"]
  },
  {
    "id": "m013",
    "module": "cognitive-core",
    "contextType": "alone",
    "text": "Kau bangun dengan rasa tidak enak tanpa sebab jelas. Ada tugas sederhana yang tetap harus dikerjakan.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "organizeOutcome", "quietPattern", "manyAngles", "pastReference"]
  },
  {
    "id": "m014",
    "module": "cognitive-core",
    "contextType": "group",
    "text": "Seseorang memberi ide yang terdengar menarik tetapi belum punya langkah nyata. Kelompok mulai bersemangat terlalu cepat.",
    "optionProfileIds": ["clarifyLogic", "organizeOutcome", "quietPattern", "manyAngles", "pastReference", "directTouch"]
  },
  {
    "id": "m015",
    "module": "cognitive-core",
    "contextType": "chat",
    "text": "Seseorang menghapus pesan sebelum kau sempat membacanya. Setelah itu ia mengirim kalimat pendek yang terasa terlalu rapi.",
    "optionProfileIds": ["organizeOutcome", "quietPattern", "manyAngles", "pastReference", "directTouch", "innerLine"]
  },
  {
    "id": "m016",
    "module": "cognitive-core",
    "contextType": "memory",
    "text": "Kau menemukan benda lama yang mengingatkanmu pada versi dirimu yang dulu. Ada pilihan apakah menyimpannya atau melepasnya.",
    "optionProfileIds": ["quietPattern", "manyAngles", "pastReference", "directTouch", "innerLine", "socialRepair"]
  },
  {
    "id": "m017",
    "module": "cognitive-core",
    "contextType": "future",
    "text": "Dua pilihan masa depan terlihat sama-sama mungkin. Satu terasa aman, satu terasa membuka jalan yang belum jelas.",
    "optionProfileIds": ["manyAngles", "pastReference", "directTouch", "innerLine", "socialRepair", "clarifyLogic"]
  },
  {
    "id": "m018",
    "module": "cognitive-core",
    "contextType": "public",
    "text": "Di sebuah meja, orang asing meminta bantuan kecil dengan nada terburu-buru. Situasinya tidak berbahaya, tetapi kau harus cepat membaca keadaan.",
    "optionProfileIds": ["pastReference", "directTouch", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome"]
  },
  {
    "id": "m019",
    "module": "cognitive-core",
    "contextType": "alone",
    "text": "Kau mencoba menjelaskan keputusanmu pada diri sendiri, tetapi alasan yang muncul terasa belum cukup bersih.",
    "optionProfileIds": ["directTouch", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "quietPattern"]
  },
  {
    "id": "m020",
    "module": "social-response",
    "contextType": "friendship",
    "text": "Di meja makan kecil, seseorang bercanda tentang hal yang menyentuh titik lemahmu. Semua tertawa dan satu orang menunggumu bereaksi.",
    "optionProfileIds": ["quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate"]
  },
  {
    "id": "m021",
    "module": "social-response",
    "contextType": "family",
    "text": "Seorang keluarga memberi komentar yang terdengar peduli, tetapi caranya membuat ruangmu terasa diambil. Orang lain sedang memperhatikan.",
    "optionProfileIds": ["socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate", "quietPattern"]
  },
  {
    "id": "m022",
    "module": "social-response",
    "contextType": "public",
    "text": "Orang asing menegurmu karena sesuatu yang belum tentu salah. Suaranya cukup terdengar oleh sekitar.",
    "optionProfileIds": ["innerLine", "clarifyLogic", "askSupport", "pauseRegulate", "quietPattern", "socialRepair"]
  },
  {
    "id": "m023",
    "module": "social-response",
    "contextType": "group",
    "text": "Dalam kelompok, satu orang terus dipotong saat bicara. Ia tersenyum, tetapi matanya mulai turun.",
    "optionProfileIds": ["clarifyLogic", "askSupport", "pauseRegulate", "quietPattern", "socialRepair", "innerLine"]
  },
  {
    "id": "m024",
    "module": "social-response",
    "contextType": "chat",
    "text": "Pesanmu dibalas singkat setelah percakapan hangat kemarin. Kau tidak tahu apakah ia sibuk atau berubah sikap.",
    "optionProfileIds": ["askSupport", "pauseRegulate", "quietPattern", "socialRepair", "innerLine", "clarifyLogic"]
  },
  {
    "id": "m025",
    "module": "social-response",
    "contextType": "friendship",
    "text": "Temanmu meminta pendapat jujur tentang sesuatu yang ia sayangi. Kau melihat ia sebenarnya takut dikritik.",
    "optionProfileIds": ["pauseRegulate", "quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport"]
  },
  {
    "id": "m026",
    "module": "social-response",
    "contextType": "family",
    "text": "Di acara keluarga, ada pertanyaan pribadi yang membuatmu ingin mundur. Mereka menganggap itu pembicaraan biasa.",
    "optionProfileIds": ["quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate"]
  },
  {
    "id": "m027",
    "module": "social-response",
    "contextType": "romance",
    "text": "Seseorang yang dekat denganmu berkata ia baik-baik saja, tetapi cara ia menutup kalimat terasa jauh.",
    "optionProfileIds": ["socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate", "quietPattern"]
  },
  {
    "id": "m028",
    "module": "social-response",
    "contextType": "public",
    "text": "Di kendaraan umum, seseorang tampak kesulitan tetapi tidak meminta bantuan. Orang sekitar pura-pura tidak melihat.",
    "optionProfileIds": ["innerLine", "clarifyLogic", "askSupport", "pauseRegulate", "quietPattern", "socialRepair"]
  },
  {
    "id": "m029",
    "module": "social-response",
    "contextType": "group",
    "text": "Satu keputusan kecil membuat dua orang saling tersinggung. Kau berada di tengah tanpa diminta menjadi penengah.",
    "optionProfileIds": ["clarifyLogic", "askSupport", "pauseRegulate", "quietPattern", "socialRepair", "innerLine"]
  },
  {
    "id": "m030",
    "module": "social-response",
    "contextType": "chat",
    "text": "Kau ingin menolak ajakan, tetapi pengirim pesan itu sedang terlihat butuh ditemani.",
    "optionProfileIds": ["askSupport", "pauseRegulate", "quietPattern", "socialRepair", "innerLine", "clarifyLogic"]
  },
  {
    "id": "m031",
    "module": "social-response",
    "contextType": "friendship",
    "text": "Teman lama muncul lagi dan bicara seolah tidak pernah menyakiti. Ia menunggu kau menyambutnya seperti dulu.",
    "optionProfileIds": ["pauseRegulate", "quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport"]
  },
  {
    "id": "m032",
    "module": "social-response",
    "contextType": "family",
    "text": "Seseorang di rumah memujimu di depan orang lain, tetapi pujian itu terasa seperti tuntutan baru.",
    "optionProfileIds": ["quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate"]
  },
  {
    "id": "m033",
    "module": "social-response",
    "contextType": "public",
    "text": "Kasir salah menyebut jumlah belanjaanmu. Antrean panjang dan wajah orang di belakang mulai tidak sabar.",
    "optionProfileIds": ["socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate", "quietPattern"]
  },
  {
    "id": "m034",
    "module": "social-response",
    "contextType": "group",
    "text": "Dalam diskusi ringan, pendapatmu dipakai orang lain tanpa menyebutmu. Semua memuji orang itu.",
    "optionProfileIds": ["innerLine", "clarifyLogic", "askSupport", "pauseRegulate", "quietPattern", "socialRepair"]
  },
  {
    "id": "m035",
    "module": "social-response",
    "contextType": "alone",
    "text": "Kau menyusun balasan untuk pesan yang rawan. Satu kalimat bisa membuat keadaan lebih baik atau lebih panas.",
    "optionProfileIds": ["clarifyLogic", "askSupport", "pauseRegulate", "quietPattern", "socialRepair", "innerLine"]
  },
  {
    "id": "m036",
    "module": "social-response",
    "contextType": "friendship",
    "text": "Seseorang bercerita sedih, tetapi ia menutupnya dengan tawa. Kau merasa tawa itu bukan bagian utamanya.",
    "optionProfileIds": ["askSupport", "pauseRegulate", "quietPattern", "socialRepair", "innerLine", "clarifyLogic"]
  },
  {
    "id": "m037",
    "module": "social-response",
    "contextType": "romance",
    "text": "Orang yang kau sayangi meminta ruang, tetapi caranya tidak menjelaskan apakah ia ingin pergi atau hanya lelah.",
    "optionProfileIds": ["pauseRegulate", "quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport"]
  },
  {
    "id": "m038",
    "module": "social-response",
    "contextType": "public",
    "text": "Seseorang salah mengira niatmu dan menatapmu seolah kau sengaja buruk. Kau punya sedikit waktu untuk merespons.",
    "optionProfileIds": ["quietPattern", "socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate"]
  },
  {
    "id": "m039",
    "module": "social-response",
    "contextType": "group",
    "text": "Kelompok mulai menyalahkan satu orang yang paling diam. Ia tidak membela diri.",
    "optionProfileIds": ["socialRepair", "innerLine", "clarifyLogic", "askSupport", "pauseRegulate", "quietPattern"]
  },
  {
    "id": "m040",
    "module": "stress-shadow",
    "contextType": "alone",
    "text": "Kau membuat kesalahan kecil yang sebenarnya bisa diperbaiki, tetapi rasa malu muncul lebih besar dari masalahnya.",
    "optionProfileIds": ["pauseRegulate", "directTouch", "organizeOutcome", "socialRepair", "clarifyLogic", "innerLine"]
  },
  {
    "id": "m041",
    "module": "stress-shadow",
    "contextType": "chat",
    "text": "Balasan yang kau kirim disalahpahami. Setelah itu beberapa pesan datang berturut-turut dan nadanya makin panas.",
    "optionProfileIds": ["directTouch", "organizeOutcome", "socialRepair", "clarifyLogic", "innerLine", "protectSpace"]
  },
  {
    "id": "m042",
    "module": "stress-shadow",
    "contextType": "public",
    "text": "Di depan orang lain, kau dikoreksi dengan cara yang terlalu tajam. Tubuhmu langsung menegang.",
    "optionProfileIds": ["organizeOutcome", "socialRepair", "clarifyLogic", "innerLine", "protectSpace", "keepPeace"]
  },
  {
    "id": "m043",
    "module": "stress-shadow",
    "contextType": "group",
    "text": "Tugas bersama berantakan dan seseorang menatapmu seolah itu tanggung jawabmu.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "innerLine", "protectSpace", "keepPeace", "pauseRegulate"]
  },
  {
    "id": "m044",
    "module": "stress-shadow",
    "contextType": "family",
    "text": "Di rumah, suara kecil yang berulang membuatmu merasa ruang batinmu penuh. Tidak ada yang sadar kau sudah hampir meledak.",
    "optionProfileIds": ["clarifyLogic", "innerLine", "protectSpace", "keepPeace", "pauseRegulate", "directTouch"]
  },
  {
    "id": "m045",
    "module": "stress-shadow",
    "contextType": "friendship",
    "text": "Temanmu lupa janji yang penting bagimu. Ia meminta maaf cepat, tetapi rasa kecewa masih tinggal.",
    "optionProfileIds": ["innerLine", "protectSpace", "keepPeace", "pauseRegulate", "directTouch", "organizeOutcome"]
  },
  {
    "id": "m046",
    "module": "stress-shadow",
    "contextType": "work",
    "text": "Seseorang meminta hasil cepat ketika kau belum diberi informasi yang cukup.",
    "optionProfileIds": ["protectSpace", "keepPeace", "pauseRegulate", "directTouch", "organizeOutcome", "socialRepair"]
  },
  {
    "id": "m047",
    "module": "stress-shadow",
    "contextType": "learning",
    "text": "Kau mencoba memahami materi sulit, tetapi makin dibaca makin terasa menutup. Orang lain sudah lanjut.",
    "optionProfileIds": ["keepPeace", "pauseRegulate", "directTouch", "organizeOutcome", "socialRepair", "clarifyLogic"]
  },
  {
    "id": "m048",
    "module": "stress-shadow",
    "contextType": "crisis",
    "text": "Rencana berubah mendadak saat waktunya sempit. Semua menunggu keputusan cepat.",
    "optionProfileIds": ["pauseRegulate", "directTouch", "organizeOutcome", "socialRepair", "clarifyLogic", "innerLine"]
  },
  {
    "id": "m049",
    "module": "stress-shadow",
    "contextType": "alone",
    "text": "Kau sadar sudah menunda hal penting terlalu lama. Rasa bersalah membuat mulai terasa lebih berat.",
    "optionProfileIds": ["directTouch", "organizeOutcome", "socialRepair", "clarifyLogic", "innerLine", "protectSpace"]
  },
  {
    "id": "m050",
    "module": "stress-shadow",
    "contextType": "chat",
    "text": "Seseorang membaca pesanmu tetapi tidak membalas. Pikiranmu mulai membuat cerita sendiri.",
    "optionProfileIds": ["organizeOutcome", "socialRepair", "clarifyLogic", "innerLine", "protectSpace", "keepPeace"]
  },
  {
    "id": "m051",
    "module": "stress-shadow",
    "contextType": "public",
    "text": "Ada suara keras tiba-tiba dan semua orang bergerak. Kau perlu memilih cara tetap aman.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "innerLine", "protectSpace", "keepPeace", "pauseRegulate"]
  },
  {
    "id": "m052",
    "module": "stress-shadow",
    "contextType": "group",
    "text": "Dalam rapat kecil, idemu diabaikan lalu dipakai setelah orang lain mengulangnya.",
    "optionProfileIds": ["clarifyLogic", "innerLine", "protectSpace", "keepPeace", "pauseRegulate", "directTouch"]
  },
  {
    "id": "m053",
    "module": "stress-shadow",
    "contextType": "memory",
    "text": "Satu kalimat hari ini mengaktifkan luka lama yang kau kira sudah selesai.",
    "optionProfileIds": ["innerLine", "protectSpace", "keepPeace", "pauseRegulate", "directTouch", "organizeOutcome"]
  },
  {
    "id": "m054",
    "module": "stress-shadow",
    "contextType": "body",
    "text": "Tubuhmu lelah, tetapi ada orang yang mengira kau hanya malas. Kau perlu menjawab.",
    "optionProfileIds": ["protectSpace", "keepPeace", "pauseRegulate", "directTouch", "organizeOutcome", "socialRepair"]
  },
  {
    "id": "m055",
    "module": "stress-shadow",
    "contextType": "creative",
    "text": "Karya yang kau rawat lama dikritik dengan satu kalimat pendek. Kritiknya tidak jelas, tetapi rasanya masuk dalam.",
    "optionProfileIds": ["keepPeace", "pauseRegulate", "directTouch", "organizeOutcome", "socialRepair", "clarifyLogic"]
  },
  {
    "id": "m056",
    "module": "stress-shadow",
    "contextType": "future",
    "text": "Keputusan masa depan terasa menekan karena semua pilihan membawa risiko kehilangan.",
    "optionProfileIds": ["pauseRegulate", "directTouch", "organizeOutcome", "socialRepair", "clarifyLogic", "innerLine"]
  },
  {
    "id": "m057",
    "module": "stress-shadow",
    "contextType": "moral",
    "text": "Kau tahu ada hal tidak adil, tetapi bicara bisa membuat posisimu lebih sulit.",
    "optionProfileIds": ["directTouch", "organizeOutcome", "socialRepair", "clarifyLogic", "innerLine", "protectSpace"]
  },
  {
    "id": "m058",
    "module": "stress-shadow",
    "contextType": "friendship",
    "text": "Seseorang menyinggung rahasia kecilmu di depan orang lain. Ia menganggap itu tidak serius.",
    "optionProfileIds": ["organizeOutcome", "socialRepair", "clarifyLogic", "innerLine", "protectSpace", "keepPeace"]
  },
  {
    "id": "m059",
    "module": "stress-shadow",
    "contextType": "alone",
    "text": "Kau membaca hasil yang tidak sesuai harapan. Tidak ada yang melihat, tetapi batinmu ribut.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "innerLine", "protectSpace", "keepPeace", "pauseRegulate"]
  },
  {
    "id": "m060",
    "module": "motivation-fear",
    "contextType": "moral",
    "text": "Kau melihat sesuatu yang salah dibiarkan karena semua orang ingin cepat selesai. Jika kau bicara, suasana akan menjadi tidak nyaman.",
    "optionProfileIds": ["reformStandard", "neededCare", "proveWorth", "uniqueSeen", "protectSpace", "safetyTest"]
  },
  {
    "id": "m061",
    "module": "motivation-fear",
    "contextType": "friendship",
    "text": "Seseorang yang biasa bergantung padamu mulai dekat dengan orang lain. Kau senang untuknya, tetapi ada rasa yang sulit disebut.",
    "optionProfileIds": ["neededCare", "proveWorth", "uniqueSeen", "protectSpace", "safetyTest", "openEscape"]
  },
  {
    "id": "m062",
    "module": "motivation-fear",
    "contextType": "work",
    "text": "Hasil kerjamu tidak buruk, tetapi ada orang lain mendapat pujian lebih besar. Kau merasa perlu membuktikan sesuatu.",
    "optionProfileIds": ["proveWorth", "uniqueSeen", "protectSpace", "safetyTest", "openEscape", "strongControl"]
  },
  {
    "id": "m063",
    "module": "motivation-fear",
    "contextType": "alone",
    "text": "Kau berada di tempat yang ramai, tetapi merasa seperti tidak punya tempat yang benar-benar melihatmu.",
    "optionProfileIds": ["uniqueSeen", "protectSpace", "safetyTest", "openEscape", "strongControl", "keepPeace"]
  },
  {
    "id": "m064",
    "module": "motivation-fear",
    "contextType": "learning",
    "text": "Seseorang meminta penjelasan cepat saat kau sendiri belum merasa cukup paham. Energi di kepalamu langsung menutup.",
    "optionProfileIds": ["protectSpace", "safetyTest", "openEscape", "strongControl", "keepPeace", "spGuard"]
  },
  {
    "id": "m065",
    "module": "motivation-fear",
    "contextType": "chat",
    "text": "Satu orang memberi janji yang terdengar baik, tetapi jejak sikapnya belum konsisten.",
    "optionProfileIds": ["safetyTest", "openEscape", "strongControl", "keepPeace", "spGuard", "sxFocus"]
  },
  {
    "id": "m066",
    "module": "motivation-fear",
    "contextType": "future",
    "text": "Rencana yang terlalu sempit membuatmu merasa napasmu dikunci sebelum jalan dimulai.",
    "optionProfileIds": ["openEscape", "strongControl", "keepPeace", "spGuard", "sxFocus", "soPlace"]
  },
  {
    "id": "m067",
    "module": "motivation-fear",
    "contextType": "group",
    "text": "Seseorang mengambil keputusan tentangmu tanpa bertanya. Kau merasa batasmu dilewati.",
    "optionProfileIds": ["strongControl", "keepPeace", "spGuard", "sxFocus", "soPlace", "reformStandard"]
  },
  {
    "id": "m068",
    "module": "motivation-fear",
    "contextType": "family",
    "text": "Dua orang bertengkar dan mencoba menarikmu memilih pihak. Kau hanya ingin rumah kembali tenang.",
    "optionProfileIds": ["keepPeace", "spGuard", "sxFocus", "soPlace", "reformStandard", "neededCare"]
  },
  {
    "id": "m069",
    "module": "motivation-fear",
    "contextType": "body",
    "text": "Kau diminta menyanggupi sesuatu saat tubuhmu sudah memberi tanda lelah.",
    "optionProfileIds": ["spGuard", "sxFocus", "soPlace", "reformStandard", "neededCare", "proveWorth"]
  },
  {
    "id": "m070",
    "module": "motivation-fear",
    "contextType": "romance",
    "text": "Kedekatan terasa kuat, tetapi permintaannya mulai mengambil ruang pribadi yang penting bagimu.",
    "optionProfileIds": ["sxFocus", "soPlace", "reformStandard", "neededCare", "proveWorth", "uniqueSeen"]
  },
  {
    "id": "m071",
    "module": "motivation-fear",
    "contextType": "public",
    "text": "Dalam komunitas kecil, peranmu tidak jelas. Kau tahu cara hadir yang salah bisa membuatmu tampak asing.",
    "optionProfileIds": ["soPlace", "reformStandard", "neededCare", "proveWorth", "uniqueSeen", "protectSpace"]
  },
  {
    "id": "m072",
    "module": "motivation-fear",
    "contextType": "memory",
    "text": "Kau mengingat masa ketika usahamu tidak dilihat. Kini ada kesempatan kecil untuk memperbaiki rasa itu.",
    "optionProfileIds": ["reformStandard", "neededCare", "proveWorth", "uniqueSeen", "protectSpace", "safetyTest"]
  },
  {
    "id": "m073",
    "module": "motivation-fear",
    "contextType": "creative",
    "text": "Karya personalmu diminta dibuat lebih umum agar mudah diterima. Ada bagian dirimu yang merasa hilang.",
    "optionProfileIds": ["neededCare", "proveWorth", "uniqueSeen", "protectSpace", "safetyTest", "openEscape"]
  },
  {
    "id": "m074",
    "module": "motivation-fear",
    "contextType": "crisis",
    "text": "Saat keadaan kacau, semua orang mencari orang yang bisa dipercaya. Kau merasa harus memilih apakah maju atau menjaga diri.",
    "optionProfileIds": ["proveWorth", "uniqueSeen", "protectSpace", "safetyTest", "openEscape", "strongControl"]
  },
  {
    "id": "m075",
    "module": "motivation-fear",
    "contextType": "friendship",
    "text": "Seseorang meminta bantuan terus-menerus, tetapi jarang bertanya keadaanmu.",
    "optionProfileIds": ["uniqueSeen", "protectSpace", "safetyTest", "openEscape", "strongControl", "keepPeace"]
  },
  {
    "id": "m076",
    "module": "motivation-fear",
    "contextType": "alone",
    "text": "Kau ingin berhenti memikirkan hal sakit, tetapi diam membuat rasa itu makin terdengar.",
    "optionProfileIds": ["protectSpace", "safetyTest", "openEscape", "strongControl", "keepPeace", "spGuard"]
  },
  {
    "id": "m077",
    "module": "motivation-fear",
    "contextType": "group",
    "text": "Ada aturan baru yang membuat semua orang aman, tetapi terasa mengurangi kebebasan bergerak.",
    "optionProfileIds": ["safetyTest", "openEscape", "strongControl", "keepPeace", "spGuard", "sxFocus"]
  },
  {
    "id": "m078",
    "module": "motivation-fear",
    "contextType": "moral",
    "text": "Seseorang dekat melakukan kesalahan. Jika kau jujur, ia bisa terluka; jika diam, kau merasa ikut salah.",
    "optionProfileIds": ["openEscape", "strongControl", "keepPeace", "spGuard", "sxFocus", "soPlace"]
  },
  {
    "id": "m079",
    "module": "motivation-fear",
    "contextType": "future",
    "text": "Satu kesempatan besar datang, tetapi kau takut setelah diterima ternyata kau tidak sanggup memegangnya.",
    "optionProfileIds": ["strongControl", "keepPeace", "spGuard", "sxFocus", "soPlace", "reformStandard"]
  },
  {
    "id": "m080",
    "module": "values-moral",
    "contextType": "moral",
    "text": "Kau menemukan dompet kecil di tempat umum. Tidak ada kamera terlihat, tetapi ada kartu identitas di dalamnya.",
    "optionProfileIds": ["innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace"]
  },
  {
    "id": "m081",
    "module": "values-moral",
    "contextType": "friendship",
    "text": "Temanmu meminta kau menutupi kesalahannya. Kesalahan itu tidak besar, tetapi orang lain bisa terkena akibatnya.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace", "strongControl"]
  },
  {
    "id": "m082",
    "module": "values-moral",
    "contextType": "family",
    "text": "Keluarga meminta kau mengikuti keputusan bersama yang membuatmu tidak nyaman secara prinsip.",
    "optionProfileIds": ["clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace", "strongControl", "uniqueSeen"]
  },
  {
    "id": "m083",
    "module": "values-moral",
    "contextType": "work",
    "text": "Atasan memuji hasil yang sebenarnya sebagian besar dibuat orang lain. Semua tampak senang jika kau diam.",
    "optionProfileIds": ["organizeOutcome", "reformStandard", "keepPeace", "strongControl", "uniqueSeen", "innerLine"]
  },
  {
    "id": "m084",
    "module": "values-moral",
    "contextType": "public",
    "text": "Seseorang diperlakukan tidak adil, tetapi orang sekitar memilih tidak ribut karena ingin cepat selesai.",
    "optionProfileIds": ["reformStandard", "keepPeace", "strongControl", "uniqueSeen", "innerLine", "socialRepair"]
  },
  {
    "id": "m085",
    "module": "values-moral",
    "contextType": "chat",
    "text": "Seseorang meminta nasihat, tetapi ia hanya ingin dibenarkan. Jawaban jujur bisa membuatnya menjauh.",
    "optionProfileIds": ["keepPeace", "strongControl", "uniqueSeen", "innerLine", "socialRepair", "clarifyLogic"]
  },
  {
    "id": "m086",
    "module": "values-moral",
    "contextType": "future",
    "text": "Pilihan aman memberi stabilitas, pilihan lain lebih dekat dengan makna yang lama kau cari.",
    "optionProfileIds": ["strongControl", "uniqueSeen", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome"]
  },
  {
    "id": "m087",
    "module": "values-moral",
    "contextType": "group",
    "text": "Kelompok memilih jalan yang paling menguntungkan, tetapi ada satu orang kecil yang dirugikan.",
    "optionProfileIds": ["uniqueSeen", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard"]
  },
  {
    "id": "m088",
    "module": "values-moral",
    "contextType": "alone",
    "text": "Tidak ada yang melihat saat kau bisa mengambil jalan pintas. Hasilnya akan lebih cepat, tetapi rasanya tidak bersih.",
    "optionProfileIds": ["innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace"]
  },
  {
    "id": "m089",
    "module": "values-moral",
    "contextType": "creative",
    "text": "Kau diminta mengubah karya agar lebih laku, walau bagian paling jujurnya harus dikurangi.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace", "strongControl"]
  },
  {
    "id": "m090",
    "module": "values-moral",
    "contextType": "friendship",
    "text": "Seseorang yang kau sayangi meminta dukungan untuk keputusan yang menurutmu tidak sehat.",
    "optionProfileIds": ["clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace", "strongControl", "uniqueSeen"]
  },
  {
    "id": "m091",
    "module": "values-moral",
    "contextType": "public",
    "text": "Orang asing menyebarkan informasi yang tidak tepat. Jika kau luruskan, ia mungkin malu.",
    "optionProfileIds": ["organizeOutcome", "reformStandard", "keepPeace", "strongControl", "uniqueSeen", "innerLine"]
  },
  {
    "id": "m092",
    "module": "values-moral",
    "contextType": "body",
    "text": "Kau ingin menolong, tetapi tubuhmu sudah hampir habis. Menolak terasa bersalah.",
    "optionProfileIds": ["reformStandard", "keepPeace", "strongControl", "uniqueSeen", "innerLine", "socialRepair"]
  },
  {
    "id": "m093",
    "module": "values-moral",
    "contextType": "memory",
    "text": "Kau teringat janji lama yang tidak lagi mudah ditepati. Tidak ada yang menagih, tetapi kau masih mengingatnya.",
    "optionProfileIds": ["keepPeace", "strongControl", "uniqueSeen", "innerLine", "socialRepair", "clarifyLogic"]
  },
  {
    "id": "m094",
    "module": "values-moral",
    "contextType": "moral",
    "text": "Dua nilai yang kau pegang saling bertabrakan: jujur sekarang atau menjaga damai sementara.",
    "optionProfileIds": ["strongControl", "uniqueSeen", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome"]
  },
  {
    "id": "m095",
    "module": "values-moral",
    "contextType": "family",
    "text": "Ada tradisi keluarga yang membuat sebagian orang diam-diam terluka. Semua menyebutnya kebiasaan lama.",
    "optionProfileIds": ["uniqueSeen", "innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard"]
  },
  {
    "id": "m096",
    "module": "values-moral",
    "contextType": "group",
    "text": "Orang yang paling berisik mendapat ruang lebih besar. Orang yang teliti justru tidak didengar.",
    "optionProfileIds": ["innerLine", "socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace"]
  },
  {
    "id": "m097",
    "module": "values-moral",
    "contextType": "alone",
    "text": "Kau menilai keputusanmu sendiri setelah semuanya selesai. Pertanyaan yang tertinggal adalah apakah kau masih bisa menghormati dirimu.",
    "optionProfileIds": ["socialRepair", "clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace", "strongControl"]
  },
  {
    "id": "m098",
    "module": "values-moral",
    "contextType": "chat",
    "text": "Seseorang meminta maaf, tetapi belum menyebut bagian yang benar-benar melukai.",
    "optionProfileIds": ["clarifyLogic", "organizeOutcome", "reformStandard", "keepPeace", "strongControl", "uniqueSeen"]
  },
  {
    "id": "m099",
    "module": "values-moral",
    "contextType": "public",
    "text": "Kau melihat orang memakai kelemahan orang lain sebagai bahan tertawa. Suasana terlihat ringan bagi mereka.",
    "optionProfileIds": ["organizeOutcome", "reformStandard", "keepPeace", "strongControl", "uniqueSeen", "innerLine"]
  }
];
