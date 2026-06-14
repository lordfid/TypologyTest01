import type { ContextType, PartialScoreBundle } from "../types";

export interface TieScenarioSeed {
  id: string;
  key: string;
  target: string;
  contextType: ContextType;
  text: string;
  aText: string;
  bText: string;
  scoreA: PartialScoreBundle;
  scoreB: PartialScoreBundle;
}

export const TIE_SCENARIOS: TieScenarioSeed[] = [
  {
    "id": "tb001",
    "key": "INFJ-vs-INFP",
    "target": "INFJ vs INFP",
    "contextType": "chat",
    "text": "Saat seseorang terluka oleh ucapanmu, bagian pertama yang paling berat adalah apa?",
    "aText": "Aku membaca perubahan suasana dan mencari kalimat yang bisa memulihkan jalur bicara.",
    "bText": "Aku memeriksa apakah aku sudah mengkhianati rasa jujur dalam diriku.",
    "scoreA": { "functions": { "Ni": 4, "Fe": 4 } },
    "scoreB": { "functions": { "Fi": 4, "Ne": 3 } }
  },
  {
    "id": "tb002",
    "key": "INFJ-vs-INTJ",
    "target": "INFJ vs INTJ",
    "contextType": "friendship",
    "text": "Dalam rencana bersama yang mulai retak, bagian mana yang paling cepat kau perbaiki?",
    "aText": "Aku membaca arah orang-orangnya dulu, lalu menata ulang cara bicara agar mereka kembali sejalan.",
    "bText": "Aku membaca titik lemah sistemnya dulu, lalu mengunci langkah agar hasil tidak makin bocor.",
    "scoreA": { "functions": { "Ni": 3, "Fe": 4 } },
    "scoreB": { "functions": { "Ni": 3, "Te": 4 } }
  },
  {
    "id": "tb003",
    "key": "INTP-vs-INTJ",
    "target": "INTP vs INTJ",
    "contextType": "group",
    "text": "Saat semua orang ingin keputusan cepat dari informasi yang kabur, apa yang terasa paling perlu?",
    "aText": "Aku membongkar definisi masalahnya dulu agar kesimpulan tidak berdiri di atas istilah yang salah.",
    "bText": "Aku memilih arah paling masuk akal dan menata risiko setelah arahnya cukup jelas.",
    "scoreA": { "functions": { "Ti": 4, "Ne": 3 } },
    "scoreB": { "functions": { "Ni": 4, "Te": 3 } }
  },
  {
    "id": "tb004",
    "key": "ISFJ-vs-INFJ",
    "target": "ISFJ vs INFJ",
    "contextType": "alone",
    "text": "Sebuah sikap kecil seseorang berubah dan membuatmu waspada. Apa pegangan pertamamu?",
    "aText": "Aku mengingat perubahan serupa yang pernah terjadi dan membandingkan urutannya.",
    "bText": "Aku menunggu sebentar sampai tanda-tanda kecil itu terasa mengarah ke satu kemungkinan.",
    "scoreA": { "functions": { "Si": 4, "Fe": 3 } },
    "scoreB": { "functions": { "Ni": 4, "Fe": 3 } }
  },
  {
    "id": "tb005",
    "key": "ISFP-vs-INFP",
    "target": "ISFP vs INFP",
    "contextType": "public",
    "text": "Saat sesuatu terasa tidak sesuai dengan dirimu, bagaimana kau biasanya merespons awal?",
    "aText": "Aku mengambil jarak lalu melakukan tindakan kecil yang membuat batasku terasa nyata.",
    "bText": "Aku menelusuri rasa itu lewat beberapa kemungkinan makna sebelum menjawab.",
    "scoreA": { "functions": { "Fi": 4, "Se": 3 } },
    "scoreB": { "functions": { "Fi": 4, "Ne": 3 } }
  },
  {
    "id": "tb006",
    "key": "ESTP-vs-ENTP",
    "target": "ESTP vs ENTP",
    "contextType": "family",
    "text": "Ketika rencana mendadak gagal di depan mata, apa yang paling alami muncul?",
    "aText": "Aku menguji keadaan langsung dan memakai apa yang tersedia saat itu.",
    "bText": "Aku memutar sudut pandang cepat sampai menemukan jalan yang belum dilihat orang.",
    "scoreA": { "functions": { "Se": 4, "Ti": 3 } },
    "scoreB": { "functions": { "Ne": 4, "Ti": 3 } }
  },
  {
    "id": "tb007",
    "key": "ENFJ-vs-ESFJ",
    "target": "ENFJ vs ESFJ",
    "contextType": "work",
    "text": "Saat suasana kelompok turun, apa yang paling sering kau pakai untuk mengangkatnya?",
    "aText": "Aku membaca arah besar hubungan mereka dan menyusun kata yang membawa mereka ke titik lebih baik.",
    "bText": "Aku memakai cara yang sudah pernah membuat orang nyaman dan memastikan kebutuhan kecilnya terpenuhi.",
    "scoreA": { "functions": { "Fe": 4, "Ni": 3 } },
    "scoreB": { "functions": { "Fe": 4, "Si": 3 } }
  },
  {
    "id": "tb008",
    "key": "ENFP-vs-INFP",
    "target": "ENFP vs INFP",
    "contextType": "learning",
    "text": "Saat peluang baru menyentuh sesuatu yang pribadi, bagian mana yang bergerak lebih dulu?",
    "aText": "Aku langsung melihat banyak jalan hidup yang mungkin terbuka dari situ.",
    "bText": "Aku mengecek apakah peluang itu sungguh cocok dengan rasa diriku yang terdalam.",
    "scoreA": { "functions": { "Ne": 4, "Fi": 3 }, "dichotomy": { "E": 1 } },
    "scoreB": { "functions": { "Fi": 4, "Ne": 3 }, "dichotomy": { "I": 1 } }
  },
  {
    "id": "tb009",
    "key": "ISTP-vs-INTP",
    "target": "ISTP vs INTP",
    "contextType": "moral",
    "text": "Saat alat atau sistem kecil tidak berjalan, apa yang paling alami kau lakukan?",
    "aText": "Aku mencoba bagian fisiknya langsung sampai terlihat titik macetnya.",
    "bText": "Aku membongkar aturan kerjanya di kepala sampai alasan rusaknya jelas.",
    "scoreA": { "functions": { "Ti": 4, "Se": 3 } },
    "scoreB": { "functions": { "Ti": 4, "Ne": 3 } }
  },
  {
    "id": "tb010",
    "key": "ISTJ-vs-INTJ",
    "target": "ISTJ vs INTJ",
    "contextType": "future",
    "text": "Saat rencana jangka panjang mulai terasa tidak aman, apa pegangan awalmu?",
    "aText": "Aku memeriksa data lama dan urutan yang pernah terbukti menjaga risiko.",
    "bText": "Aku membaca arah akhirnya dan memangkas hal yang tidak cocok dengan tujuan.",
    "scoreA": { "functions": { "Si": 4, "Te": 3 } },
    "scoreB": { "functions": { "Ni": 4, "Te": 3 } }
  },
  {
    "id": "tb011",
    "key": "ESFP-vs-ENFP",
    "target": "ESFP vs ENFP",
    "contextType": "body",
    "text": "Saat suasana baru terbuka, apa yang lebih cepat menarikmu masuk?",
    "aText": "Aku merasakan energi tempat itu dan mencoba bagian yang langsung hidup di depan mata.",
    "bText": "Aku melihat banyak kemungkinan cerita yang bisa tumbuh dari keadaan itu.",
    "scoreA": { "functions": { "Se": 4, "Fi": 3 } },
    "scoreB": { "functions": { "Ne": 4, "Fi": 3 } }
  },
  {
    "id": "tb012",
    "key": "ENTJ-vs-ESTJ",
    "target": "ENTJ vs ESTJ",
    "contextType": "creative",
    "text": "Saat memimpin kerja kacau, apa yang lebih cepat kau pegang?",
    "aText": "Aku mengunci arah besar and menyusun orang menuju hasil akhirnya.",
    "bText": "Aku menata prosedur, bukti, dan pembagian yang sudah jelas agar kerja kembali rapi.",
    "scoreA": { "functions": { "Te": 4, "Ni": 3 } },
    "scoreB": { "functions": { "Te": 4, "Si": 3 } }
  },
  {
    "id": "tb013",
    "key": "ennea-4-vs-6",
    "target": "Enneagram 4 vs 6",
    "contextType": "chat",
    "text": "Saat merasa jauh dari orang, sakit mana yang lebih dulu muncul?",
    "aText": "Rasa seperti tidak punya tempat yang sungguh melihat diriku secara utuh.",
    "bText": "Rasa seperti pegangan dan dukungan bisa hilang kapan saja.",
    "scoreA": { "enneagram": { "4": 4 }, "coreFear": { "having-no-place": 4 } },
    "scoreB": { "enneagram": { "6": 4 }, "coreFear": { "being-unsafe": 4 } }
  },
  {
    "id": "tb014",
    "key": "ennea-2-vs-9",
    "target": "Enneagram 2 vs 9",
    "contextType": "friendship",
    "text": "Saat hubungan mulai renggang, apa yang paling ingin kau pulihkan?",
    "aText": "Aku ingin merasa kehadiranku masih dibutuhkan dan berarti bagi mereka.",
    "bText": "Aku ingin ketegangan turun agar tidak ada pihak yang saling menjauh.",
    "scoreA": { "enneagram": { "2": 4 }, "coreFear": { "being-unneeded": 4 } },
    "scoreB": { "enneagram": { "9": 4 }, "coreFear": { "being-separated-from-peace": 4 } }
  },
  {
    "id": "tb015",
    "key": "ennea-1-vs-6",
    "target": "Enneagram 1 vs 6",
    "contextType": "group",
    "text": "Saat aturan terasa goyah, apa yang paling membuatmu tidak tenang?",
    "aText": "Takut membiarkan hal yang salah menjadi kebiasaan.",
    "bText": "Takut tidak ada pegangan yang bisa dipercaya saat keadaan berubah.",
    "scoreA": { "enneagram": { "1": 4 }, "coreFear": { "being-wrong": 4 } },
    "scoreB": { "enneagram": { "6": 4 }, "coreFear": { "being-unsafe": 4 } }
  },
  {
    "id": "tb016",
    "key": "ennea-3-vs-8",
    "target": "Enneagram 3 vs 8",
    "contextType": "alone",
    "text": "Saat dirimu diremehkan, rasa mana yang paling kuat mendorong responsmu?",
    "aText": "Aku ingin menunjukkan bukti bahwa aku mampu dan tidak bisa diabaikan.",
    "bText": "Aku ingin mengambil kembali kendali agar tidak dibuat kecil.",
    "scoreA": { "enneagram": { "3": 4 }, "coreFear": { "being-worthless": 4 } },
    "scoreB": { "enneagram": { "8": 4 }, "coreFear": { "being-controlled": 4 } }
  },
  {
    "id": "tb017",
    "key": "ennea-5-vs-9",
    "target": "Enneagram 5 vs 9",
    "contextType": "public",
    "text": "Saat tekanan sosial terlalu banyak, apa yang paling ingin kau jaga?",
    "aText": "Ruang pikir dan energi agar aku tidak terserap habis.",
    "bText": "Ketenangan batin agar aku tidak ditarik ke konflik mereka.",
    "scoreA": { "enneagram": { "5": 4 }, "coreFear": { "being-incapable": 3 } },
    "scoreB": { "enneagram": { "9": 4 }, "coreFear": { "being-separated-from-peace": 3 } }
  },
  {
    "id": "tb018",
    "key": "sp-vs-sx",
    "target": "sp vs sx",
    "contextType": "family",
    "text": "Saat hari terasa berat, hal apa yang paling cepat ingin kau amankan?",
    "aText": "Tenaga, waktu, tempat, dan ritme dasar agar aku tetap bisa berfungsi.",
    "bText": "Satu ikatan atau percakapan jujur yang membuatku merasa hidup lagi.",
    "scoreA": { "instincts": { "sp": 4 } },
    "scoreB": { "instincts": { "sx": 4 } }
  },
  {
    "id": "tb019",
    "key": "sp-vs-so",
    "target": "sp vs so",
    "contextType": "work",
    "text": "Saat masuk lingkungan baru, apa yang paling cepat kau cek?",
    "aText": "Apakah energi, uang, waktu, dan tempatku cukup aman untuk bertahan.",
    "bText": "Di mana posisiku dalam kelompok dan cara hadir yang paling tepat.",
    "scoreA": { "instincts": { "sp": 4 } },
    "scoreB": { "instincts": { "so": 4 } }
  },
  {
    "id": "tb020",
    "key": "sx-vs-so",
    "target": "sx vs so",
    "contextType": "learning",
    "text": "Saat berada di kumpulan orang yang menarik, fokusmu lebih mudah tertarik ke mana?",
    "aText": "Satu orang atau satu arus intens yang terasa punya daya tarik khusus.",
    "bText": "Pola kelompok, siapa terhubung dengan siapa, dan peran yang sedang terbentuk.",
    "scoreA": { "instincts": { "sx": 4 } },
    "scoreB": { "instincts": { "so": 4 } }
  },
  {
    "id": "tb021",
    "key": "disc-d-vs-c",
    "target": "DISC D vs C",
    "contextType": "moral",
    "text": "Saat keputusan harus dibuat cepat tetapi data belum rapi, apa yang lebih sulit kau tahan?",
    "aText": "Terlalu lama menunggu sampai kesempatan hilang.",
    "bText": "Bergerak dengan standar yang belum cukup jelas.",
    "scoreA": { "disc": { "D": 4 } },
    "scoreB": { "disc": { "C": 4 } }
  },
  {
    "id": "tb022",
    "key": "disc-i-vs-s",
    "target": "DISC I vs S",
    "contextType": "future",
    "text": "Saat tim mulai lelah, apa yang lebih alami kau bawa?",
    "aText": "Energi bicara yang membuat orang bergerak lagi.",
    "bText": "Ritme tenang yang membuat orang merasa aman melanjutkan.",
    "scoreA": { "disc": { "I": 4 } },
    "scoreB": { "disc": { "S": 4 } }
  },
  {
    "id": "tb023",
    "key": "riasec-a-vs-i",
    "target": "RIASEC Artistic vs Investigative",
    "contextType": "body",
    "text": "Saat topik baru membuatmu penasaran, bentuk pertama yang ingin kau buat apa?",
    "aText": "Bentuk, cerita, warna, atau susunan yang bisa dirasakan.",
    "bText": "Peta sebab, penjelasan, dan cara menguji apakah itu benar.",
    "scoreA": { "riasec": { "Artistic": 4 } },
    "scoreB": { "riasec": { "Investigative": 4 } }
  },
  {
    "id": "tb024",
    "key": "riasec-s-vs-e",
    "target": "RIASEC Social vs Enterprising",
    "contextType": "creative",
    "text": "Saat orang bingung, cara bergunamu lebih sering seperti apa?",
    "aText": "Mendampingi sampai ia paham dan merasa sanggup.",
    "bText": "Menggerakkan orang agar mereka berani mengambil langkah.",
    "scoreA": { "riasec": { "Social": 4 } },
    "scoreB": { "riasec": { "Enterprising": 4 } }
  },
  {
    "id": "tb025",
    "key": "avoidant-vs-secure-private",
    "target": "avoidant-leaning vs secure-but-private",
    "contextType": "chat",
    "text": "Saat butuh ruang dari orang dekat, alasan terdalamnya lebih dekat ke mana?",
    "aText": "Aku takut kedekatan menelan energiku, jadi aku menutup akses cukup rapat.",
    "bText": "Aku tetap peduli, tetapi perlu ruang pribadi agar bisa kembali dengan utuh.",
    "scoreA": { "attachment": { "avoidant-leaning": 4 } },
    "scoreB": { "attachment": { "secure-but-private": 4 } }
  },
  {
    "id": "tb026",
    "key": "anxious-vs-high-fe",
    "target": "anxious-leaning vs high-Fe concern",
    "contextType": "friendship",
    "text": "Saat seseorang berubah nada, apa yang paling berat?",
    "aText": "Aku takut perubahan itu tanda aku akan ditinggalkan atau tidak lagi dipilih.",
    "bText": "Aku ingin memastikan suasana tidak rusak dan mereka tidak terluka olehku.",
    "scoreA": { "attachment": { "anxious-leaning": 4 } },
    "scoreB": { "functions": { "Fe": 4 }, "empathyStyle": { "emotional-attunement": 3 } }
  },
  {
    "id": "tb027",
    "key": "conflict-avoid-vs-delayed-repair",
    "target": "conflict avoiding vs delayed-repair",
    "contextType": "group",
    "text": "Saat konflik panas muncul, apa yang sebenarnya terjadi saat kau diam?",
    "aText": "Aku berharap masalahnya turun sendiri karena konfrontasi terasa terlalu berat.",
    "bText": "Aku menunggu kalimat lebih bersih agar perbaikan tidak lahir dari emosi mentah.",
    "scoreA": { "conflictStyle": { "avoidant": 4 }, "stress": { "shutdown": 2 } },
    "scoreB": { "conflictStyle": { "delayed-repair": 4 }, "coping": { "emotion-focused": 2 } }
  },
  {
    "id": "tb028",
    "key": "ap-1v-vs-3v",
    "target": "AP 1V vs 3V",
    "contextType": "alone",
    "text": "Saat orang mempertanyakan pilihan hidupmu, respons batin mana yang lebih dekat?",
    "aText": "Aku tetap memegang arahku tanpa merasa harus membuktikan izin.",
    "bText": "Aku tampak tegas, tetapi pertanyaan itu menusuk rasa berhak memilih.",
    "scoreA": { "apPosition": { "1V": 4 }, "attitudinalPsyche": { "V": 3 } },
    "scoreB": { "apPosition": { "3V": 4 }, "attitudinalPsyche": { "V": 3 } }
  },
  {
    "id": "tb029",
    "key": "ap-2l-vs-1l",
    "target": "AP 2L vs 1L",
    "contextType": "public",
    "text": "Saat membahas alasan, mana yang terasa lebih alami?",
    "aText": "Aku menikmati menukar alasan sampai bentuk pikirannya makin tajam bersama.",
    "bText": "Aku memegang kerangka pikirku sendiri dan tidak mudah menggesernya tanpa alasan kuat.",
    "scoreA": { "apPosition": { "2L": 4 }, "attitudinalPsyche": { "L": 3 } },
    "scoreB": { "apPosition": { "1L": 4 }, "attitudinalPsyche": { "L": 3 } }
  },
  {
    "id": "tb030",
    "key": "ap-3e-vs-neuroticism",
    "target": "AP 3E vs high neuroticism",
    "contextType": "family",
    "text": "Saat emosi terlihat di depan orang, bagian mana yang lebih tepat?",
    "aText": "Yang rawan adalah cara emosiku dinilai, seolah ekspresiku bisa membuatku tampak salah.",
    "bText": "Yang berat adalah intensitas rasa naik turun yang sulit berhenti meski tidak ada yang menilai.",
    "scoreA": { "apPosition": { "3E": 4 }, "attitudinalPsyche": { "E": 3 } },
    "scoreB": { "bigFive": { "neuroticism": 4 }, "hexaco": { "emotionality": 3 } }
  },
  {
    "id": "tb031",
    "key": "ni-vs-si",
    "target": "Ni vs Si",
    "contextType": "work",
    "text": "Saat tanda kecil membuatmu waspada, pegangan mana yang lebih kuat?",
    "aText": "Tanda itu terasa mengarah ke akibat yang belum terlihat.",
    "bText": "Tanda itu mirip urutan lama yang pernah terjadi sebelumnya.",
    "scoreA": { "functions": { "Ni": 4 } },
    "scoreB": { "functions": { "Si": 4 } }
  },
  {
    "id": "tb032",
    "key": "ne-vs-ni",
    "target": "Ne vs Ni",
    "contextType": "learning",
    "text": "Saat pilihan terbuka banyak, apa yang terasa paling hidup?",
    "aText": "Membuka beberapa jalan karena masing-masing bisa mengubah cerita.",
    "bText": "Menunggu sampai jalan yang paling masuk akal terasa mengerucut.",
    "scoreA": { "functions": { "Ne": 4 } },
    "scoreB": { "functions": { "Ni": 4 } }
  },
  {
    "id": "tb033",
    "key": "fi-vs-fe",
    "target": "Fi vs Fe",
    "contextType": "moral",
    "text": "Saat ada kalimat yang menyakitkan, apa yang paling cepat kau cek?",
    "aText": "Apakah aku sedang mengkhianati batas dan rasa diriku sendiri.",
    "bText": "Apakah suasana dan hati orang-orang masih bisa diperbaiki.",
    "scoreA": { "functions": { "Fi": 4 } },
    "scoreB": { "functions": { "Fe": 4 } }
  },
  {
    "id": "tb034",
    "key": "ti-vs-te",
    "target": "Ti vs Te",
    "contextType": "future",
    "text": "Saat masalah kabur perlu dibereskan, mana yang lebih mendesak?",
    "aText": "Membuat alasan dan definisinya bersih dulu.",
    "bText": "Membuat langkah kerja yang bisa segera diuji hasilnya.",
    "scoreA": { "functions": { "Ti": 4 } },
    "scoreB": { "functions": { "Te": 4 } }
  },
  {
    "id": "tb035",
    "key": "se-vs-ne",
    "target": "Se vs Ne",
    "contextType": "body",
    "text": "Saat kesempatan muncul tiba-tiba, cara masukmu lebih dekat ke mana?",
    "aText": "Aku menyentuh keadaan nyata dan melihat respons langsungnya.",
    "bText": "Aku melihat cabang kemungkinan yang bisa lahir dari kesempatan itu.",
    "scoreA": { "functions": { "Se": 4 } },
    "scoreB": { "functions": { "Ne": 4 } }
  },
  {
    "id": "tb036",
    "key": "si-vs-te",
    "target": "Si vs Te",
    "contextType": "creative",
    "text": "Saat proses lama tidak berjalan, apa yang lebih dulu kau periksa?",
    "aText": "Apakah ada detail urutan yang berubah dari cara yang biasanya berhasil.",
    "bText": "Apa langkah sistemnya yang perlu dipotong atau disusun ulang agar hasil keluar.",
    "scoreA": { "functions": { "Si": 4 } },
    "scoreB": { "functions": { "Te": 4 } }
  },
  {
    "id": "tb037",
    "key": "INFJ-vs-INFP-extra",
    "target": "INFJ vs INFP",
    "contextType": "chat",
    "text": "Dalam versi yang lebih halus: saat seseorang terluka oleh ucapanmu, bagian pertama yang paling berat adalah apa?",
    "aText": "Aku lebih sering membaca perubahan suasana dan mencari kalimat yang bisa memulihkan jalur bicara.",
    "bText": "Aku lebih sering memeriksa apakah aku sudah mengkhianati rasa jujur dalam diriku.",
    "scoreA": { "functions": { "Ni": 4, "Fe": 4 } },
    "scoreB": { "functions": { "Fi": 4, "Ne": 3 } }
  },
  {
    "id": "tb038",
    "key": "INFJ-vs-INTJ-extra",
    "target": "INFJ vs INTJ",
    "contextType": "friendship",
    "text": "Dalam versi yang lebih halus: dalam rencana bersama yang mulai retak, bagian mana yang paling cepat kau perbaiki?",
    "aText": "Aku lebih sering membaca arah orang-orangnya dulu, lalu menata ulang cara bicara agar mereka kembali sejalan.",
    "bText": "Aku lebih sering membaca titik lemah sistemnya dulu, lalu mengunci langkah agar hasil tidak makin bocor.",
    "scoreA": { "functions": { "Ni": 3, "Fe": 4 } },
    "scoreB": { "functions": { "Ni": 3, "Te": 4 } }
  },
  {
    "id": "tb039",
    "key": "INTP-vs-INTJ-extra",
    "target": "INTP vs INTJ",
    "contextType": "group",
    "text": "Dalam versi yang lebih halus: saat semua orang ingin keputusan cepat dari informasi yang kabur, apa yang terasa paling perlu?",
    "aText": "Aku lebih sering membongkar definisi masalahnya dulu agar kesimpulan tidak berdiri di atas istilah yang salah.",
    "bText": "Aku lebih sering memilih arah paling masuk akal dan menata risiko setelah arahnya cukup jelas.",
    "scoreA": { "functions": { "Ti": 4, "Ne": 3 } },
    "scoreB": { "functions": { "Ni": 4, "Te": 3 } }
  },
  {
    "id": "tb040",
    "key": "ISFJ-vs-INFJ-extra",
    "target": "ISFJ vs INFJ",
    "contextType": "alone",
    "text": "Dalam versi yang lebih halus: sebuah sikap kecil seseorang berubah dan membuatmu waspada. Apa pegangan pertamamu?",
    "aText": "Aku lebih sering mengingat perubahan serupa yang pernah terjadi dan membandingkan urutannya.",
    "bText": "Aku lebih sering menunggu sebentar sampai tanda-tanda kecil itu terasa mengarah ke satu kemungkinan.",
    "scoreA": { "functions": { "Si": 4, "Fe": 3 } },
    "scoreB": { "functions": { "Ni": 4, "Fe": 3 } }
  },
  {
    "id": "tb041",
    "key": "ISFP-vs-INFP-extra",
    "target": "ISFP vs INFP",
    "contextType": "public",
    "text": "Dalam versi yang lebih halus: saat sesuatu terasa tidak sesuai dengan dirimu, bagaimana kau biasanya merespons awal?",
    "aText": "Aku lebih sering mengambil jarak lalu melakukan tindakan kecil yang membuat batasku terasa nyata.",
    "bText": "Aku lebih sering menelusuri rasa itu lewat beberapa kemungkinan makna sebelum menjawab.",
    "scoreA": { "functions": { "Fi": 4, "Se": 3 } },
    "scoreB": { "functions": { "Fi": 4, "Ne": 3 } }
  },
  {
    "id": "tb042",
    "key": "ESTP-vs-ENTP-extra",
    "target": "ESTP vs ENTP",
    "contextType": "family",
    "text": "Dalam versi yang lebih halus: ketika rencana mendadak gagal di depan mata, apa yang paling alami muncul?",
    "aText": "Aku lebih sering menguji keadaan langsung dan memakai apa yang tersedia saat itu.",
    "bText": "Aku lebih sering memutar sudut pandang cepat sampai menemukan jalan yang belum dilihat orang.",
    "scoreA": { "functions": { "Se": 4, "Ti": 3 } },
    "scoreB": { "functions": { "Ne": 4, "Ti": 3 } }
  },
  {
    "id": "tb043",
    "key": "ENFJ-vs-ESFJ-extra",
    "target": "ENFJ vs ESFJ",
    "contextType": "work",
    "text": "Dalam versi yang lebih halus: saat suasana kelompok turun, apa yang paling sering kau pakai untuk mengangkatnya?",
    "aText": "Aku lebih sering membaca arah besar hubungan mereka dan menyusun kata yang membawa mereka ke titik lebih baik.",
    "bText": "Aku lebih sering memakai cara yang sudah pernah membuat orang nyaman dan memastikan kebutuhan kecilnya terpenuhi.",
    "scoreA": { "functions": { "Fe": 4, "Ni": 3 } },
    "scoreB": { "functions": { "Fe": 4, "Si": 3 } }
  },
  {
    "id": "tb044",
    "key": "ENFP-vs-INFP-extra",
    "target": "ENFP vs INFP",
    "contextType": "learning",
    "text": "Dalam versi yang lebih halus: saat peluang baru menyentuh sesuatu yang pribadi, bagian mana yang bergerak lebih dulu?",
    "aText": "Aku lebih sering langsung melihat banyak jalan hidup yang mungkin terbuka dari situ.",
    "bText": "Aku lebih sering mengecek apakah peluang itu sungguh cocok dengan rasa diriku yang terdalam.",
    "scoreA": { "functions": { "Ne": 4, "Fi": 3 }, "dichotomy": { "E": 1 } },
    "scoreB": { "functions": { "Fi": 4, "Ne": 3 }, "dichotomy": { "I": 1 } }
  },
  {
    "id": "tb045",
    "key": "ISTP-vs-INTP-extra",
    "target": "ISTP vs INTP",
    "contextType": "moral",
    "text": "Dalam versi yang lebih halus: saat alat atau sistem kecil tidak berjalan, apa yang paling alami kau lakukan?",
    "aText": "Aku lebih sering mencoba bagian fisiknya langsung sampai terlihat titik macetnya.",
    "bText": "Aku lebih sering membongkar aturan kerjanya di kepala sampai alasan rusaknya jelas.",
    "scoreA": { "functions": { "Ti": 4, "Se": 3 } },
    "scoreB": { "functions": { "Ti": 4, "Ne": 3 } }
  },
  {
    "id": "tb046",
    "key": "ISTJ-vs-INTJ-extra",
    "target": "ISTJ vs INTJ",
    "contextType": "future",
    "text": "Dalam versi yang lebih halus: saat rencana jangka panjang mulai terasa tidak aman, apa pegangan awalmu?",
    "aText": "Aku lebih sering memeriksa data lama dan urutan yang pernah terbukti menjaga risiko.",
    "bText": "Aku lebih sering membaca arah akhirnya dan memangkas hal yang tidak cocok dengan tujuan.",
    "scoreA": { "functions": { "Si": 4, "Te": 3 } },
    "scoreB": { "functions": { "Ni": 4, "Te": 3 } }
  },
  {
    "id": "tb047",
    "key": "ESFP-vs-ENFP-extra",
    "target": "ESFP vs ENFP",
    "contextType": "body",
    "text": "Dalam versi yang lebih halus: saat suasana baru terbuka, apa yang lebih cepat menarikmu masuk?",
    "aText": "Aku lebih sering merasakan energi tempat itu dan mencoba bagian yang langsung hidup di depan mata.",
    "bText": "Aku lebih sering melihat banyak kemungkinan cerita yang bisa tumbuh dari keadaan itu.",
    "scoreA": { "functions": { "Se": 4, "Fi": 3 } },
    "scoreB": { "functions": { "Ne": 4, "Fi": 3 } }
  },
  {
    "id": "tb048",
    "key": "ENTJ-vs-ESTJ-extra",
    "target": "ENTJ vs ESTJ",
    "contextType": "creative",
    "text": "Dalam versi yang lebih halus: saat memimpin kerja kacau, apa yang lebih cepat kau pegang?",
    "aText": "Aku lebih sering mengunci arah besar dan menyusun orang menuju hasil akhirnya.",
    "bText": "Aku lebih sering menata prosedur, bukti, dan pembagian yang sudah jelas agar kerja kembali rapi.",
    "scoreA": { "functions": { "Te": 4, "Ni": 3 } },
    "scoreB": { "functions": { "Te": 4, "Si": 3 } }
  },
  {
    "id": "tb049",
    "key": "ennea-4-vs-6-extra",
    "target": "Enneagram 4 vs 6",
    "contextType": "chat",
    "text": "Dalam versi yang lebih halus: saat merasa jauh dari orang, sakit mana yang lebih dulu muncul?",
    "aText": "Rasa seperti tidak punya tempat yang sungguh melihat diriku secara utuh.",
    "bText": "Rasa seperti pegangan dan dukungan bisa hilang kapan saja.",
    "scoreA": { "enneagram": { "4": 4 }, "coreFear": { "having-no-place": 4 } },
    "scoreB": { "enneagram": { "6": 4 }, "coreFear": { "being-unsafe": 4 } }
  },
  {
    "id": "tb050",
    "key": "ennea-2-vs-9-extra",
    "target": "Enneagram 2 vs 9",
    "contextType": "friendship",
    "text": "Dalam versi yang lebih halus: saat hubungan mulai renggang, apa yang paling ingin kau pulihkan?",
    "aText": "Aku lebih sering ingin merasa kehadiranku masih dibutuhkan dan berarti bagi mereka.",
    "bText": "Aku lebih sering ingin ketegangan turun agar tidak ada pihak yang saling menjauh.",
    "scoreA": { "enneagram": { "2": 4 }, "coreFear": { "being-unneeded": 4 } },
    "scoreB": { "enneagram": { "9": 4 }, "coreFear": { "being-separated-from-peace": 4 } }
  },
  {
    "id": "tb051",
    "key": "ennea-1-vs-6-extra",
    "target": "Enneagram 1 vs 6",
    "contextType": "group",
    "text": "Dalam versi yang lebih halus: saat aturan terasa goyah, apa yang paling membuatmu tidak tenang?",
    "aText": "Takut membiarkan hal yang salah menjadi kebiasaan.",
    "bText": "Takut tidak ada pegangan yang bisa dipercaya saat keadaan berubah.",
    "scoreA": { "enneagram": { "1": 4 }, "coreFear": { "being-wrong": 4 } },
    "scoreB": { "enneagram": { "6": 4 }, "coreFear": { "being-unsafe": 4 } }
  },
  {
    "id": "tb052",
    "key": "ennea-3-vs-8-extra",
    "target": "Enneagram 3 vs 8",
    "contextType": "alone",
    "text": "Dalam versi yang lebih halus: saat dirimu diremehkan, rasa mana yang paling kuat mendorong responsmu?",
    "aText": "Aku lebih sering ingin menunjukkan bukti bahwa aku mampu dan tidak bisa diabaikan.",
    "bText": "Aku lebih sering ingin mengambil kembali kendali agar tidak dibuat kecil.",
    "scoreA": { "enneagram": { "3": 4 }, "coreFear": { "being-worthless": 4 } },
    "scoreB": { "enneagram": { "8": 4 }, "coreFear": { "being-controlled": 4 } }
  },
  {
    "id": "tb053",
    "key": "ennea-5-vs-9-extra",
    "target": "Enneagram 5 vs 9",
    "contextType": "public",
    "text": "Dalam versi yang lebih halus: saat tekanan sosial terlalu banyak, apa yang paling ingin kau jaga?",
    "aText": "Ruang pikir dan energi agar aku tidak terserap habis.",
    "bText": "Ketenangan batin agar aku tidak ditarik ke konflik mereka.",
    "scoreA": { "enneagram": { "5": 4 }, "coreFear": { "being-incapable": 3 } },
    "scoreB": { "enneagram": { "9": 4 }, "coreFear": { "being-separated-from-peace": 3 } }
  },
  {
    "id": "tb054",
    "key": "sp-vs-sx-extra",
    "target": "sp vs sx",
    "contextType": "family",
    "text": "Dalam versi yang lebih halus: saat hari terasa berat, hal apa yang paling cepat ingin kau amankan?",
    "aText": "Tenaga, waktu, tempat, dan ritme dasar agar aku tetap bisa berfungsi.",
    "bText": "Satu ikatan atau percakapan jujur yang membuatku merasa hidup lagi.",
    "scoreA": { "instincts": { "sp": 4 } },
    "scoreB": { "instincts": { "sx": 4 } }
  },
  {
    "id": "tb055",
    "key": "sp-vs-so-extra",
    "target": "sp vs so",
    "contextType": "work",
    "text": "Dalam versi yang lebih halus: saat masuk lingkungan baru, apa yang paling cepat kau cek?",
    "aText": "Apakah energi, uang, waktu, dan tempatku cukup aman untuk bertahan.",
    "bText": "Di mana posisiku dalam kelompok dan cara hadir yang paling tepat.",
    "scoreA": { "instincts": { "sp": 4 } },
    "scoreB": { "instincts": { "so": 4 } }
  },
  {
    "id": "tb056",
    "key": "sx-vs-so-extra",
    "target": "sx vs so",
    "contextType": "learning",
    "text": "Dalam versi yang lebih halus: saat berada di kumpulan orang yang menarik, fokusmu lebih mudah tertarik ke mana?",
    "aText": "Satu orang atau satu arus intens yang terasa punya daya tarik khusus.",
    "bText": "Pola kelompok, siapa terhubung dengan siapa, dan peran yang sedang terbentuk.",
    "scoreA": { "instincts": { "sx": 4 } },
    "scoreB": { "instincts": { "so": 4 } }
  },
  {
    "id": "tb057",
    "key": "disc-d-vs-c-extra",
    "target": "DISC D vs C",
    "contextType": "moral",
    "text": "Dalam versi yang lebih halus: saat keputusan harus dibuat cepat tetapi data belum rapi, apa yang lebih sulit kau tahan?",
    "aText": "Terlalu lama menunggu sampai kesempatan hilang.",
    "bText": "Bergerak dengan standar yang belum cukup jelas.",
    "scoreA": { "disc": { "D": 4 } },
    "scoreB": { "disc": { "C": 4 } }
  },
  {
    "id": "tb058",
    "key": "disc-i-vs-s-extra",
    "target": "DISC I vs S",
    "contextType": "future",
    "text": "Dalam versi yang lebih halus: saat tim mulai lelah, apa yang lebih alami kau bawa?",
    "aText": "Energi bicara yang membuat orang bergerak lagi.",
    "bText": "Ritme tenang yang membuat orang merasa aman melanjutkan.",
    "scoreA": { "disc": { "I": 4 } },
    "scoreB": { "disc": { "S": 4 } }
  },
  {
    "id": "tb059",
    "key": "riasec-a-vs-i-extra",
    "target": "RIASEC Artistic vs Investigative",
    "contextType": "body",
    "text": "Dalam versi yang lebih halus: saat topik baru membuatmu penasaran, bentuk pertama yang ingin kau buat apa?",
    "aText": "Bentuk, cerita, warna, atau susunan yang bisa dirasakan.",
    "bText": "Peta sebab, penjelasan, dan cara menguji apakah itu benar.",
    "scoreA": { "riasec": { "Artistic": 4 } },
    "scoreB": { "riasec": { "Investigative": 4 } }
  },
  {
    "id": "tb060",
    "key": "riasec-s-vs-e-extra",
    "target": "RIASEC Social vs Enterprising",
    "contextType": "creative",
    "text": "Jika tekanan sosialnya kecil: saat orang bingung, cara bergunamu lebih sering seperti apa?",
    "aText": "Mendampingi sampai ia paham dan merasa sanggup.",
    "bText": "Menggerakkan orang agar mereka berani mengambil langkah.",
    "scoreA": { "riasec": { "Social": 4 } },
    "scoreB": { "riasec": { "Enterprising": 4 } }
  }
];
