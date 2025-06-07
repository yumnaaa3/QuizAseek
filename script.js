// Data quiz untuk anak TK
const quizCategories = {
  buah: {
    title: "🍎 Quiz Buah-buahan 🍎",
    questions: [
      {
        question: "🍌 Buah apa ini?",
        options: ["🍎 Apel", "🍌 Pisang", "🍇 Anggur", "🍊 Jeruk"],
        correct: 1,
        image: "🍌",
      },
      {
        question: "🍓 Buah apa ini?",
        options: ["🍎 Apel", "🍓 Stroberi", "🍇 Anggur", "🍊 Jeruk"],
        correct: 1,
        image: "🍓",
      },
      {
        question: "🍏 Buah apa ini?",
        options: ["🍏Apel Hijau", "🍌 Pisang", "🍇 Anggur", "🍊 Jeruk"],
        correct: 0,
        image: "🍏",
      },
      {
        question: "🍊 Buah apa ini?",
        options: ["🍎 Apel", "🍌 Pisang", "🍇 Anggur", "🍊 Jeruk"],
        correct: 3,
        image: "🍊",
      },
      {
        question: "🍇 Buah apa ini?",
        options: ["🍎 Apel", "🍌 Pisang", "🍇 Anggur", "🍊 Jeruk"],
        correct: 2,
        image: "🍇",
      },
      {
        question: "🍉 Buah apa ini?",
        options: ["🍍 Nanas", "🍈 Melon", "🍉 Semangka", "🥝 Kiwi"],
        correct: 2,
        image: "🍉",
      },
      {
        question: "🍍 Buah apa ini?",
        options: ["🥭 Mangga", "🥥 Kelapa", "🍐 Pir", "🍍 Nanas"],
        correct: 3,
        image: "🍍",
      },
      {
        question: "🥭 Buah apa ini?",
        options: ["🍋 Lemon", "🥭 Mangga", "🥑 Alpukat", "🍑 Persik"],
        correct: 1,
        image: "🥭",
      },
      {
        question: "🍐 Buah apa ini?",
        options: ["🍐 Pir", "🍏 Apel Hijau", "🍈 Melon", "🍌 Pisang"],
        correct: 0,
        image: "🍐",
      },
      {
        question: "🥝 Buah apa ini?",
        options: ["🥑 Alpukat", "🍓 Stroberi", "🥝 Kiwi", "🍇 Anggur"],
        correct: 2,
        image: "🥝",
      },
    ],
  },
  warna: {
    title: "🎨 Quiz Warna 🎨",
    questions: [
      {
        question: "🎨 Ini warna apa?",
        image: "🔴",
        options: ["🔴 Merah", "🔵 Biru", "🟡 Kuning", "🟢 Hijau"],
        correct: 0,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "🔵",
        options: ["🔴 Merah", "🔵 Biru", "🟡 Kuning", "🟢 Hijau"],
        correct: 1,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "🟡",
        options: ["🔴 Merah", "🔵 Biru", "🟡 Kuning", "🟢 Hijau"],
        correct: 2,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "🟢",
        options: ["🔴 Merah", "🔵 Biru", "🟡 Kuning", "🟢 Hijau"],
        correct: 3,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "🟣",
        options: ["🟣 Ungu", "🟠 Oranye", "⚫ Hitam", "⚪ Putih"],
        correct: 0,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "🟠",
        options: ["🟣 Ungu", "🟠 Oranye", "⚫ Hitam", "⚪ Putih"],
        correct: 1,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "⚫",
        options: ["🟣 Ungu", "🟠 Oranye", "⚫ Hitam", "⚪ Putih"],
        correct: 2,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "⚪",
        options: ["🟣 Ungu", "🟠 Oranye", "⚫ Hitam", "⚪ Putih"],
        correct: 3,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "🟤",
        options: ["⚫ Hitam", "⚪ Putih", "🟤 Coklat", "🔘 Abu-abu"],
        correct: 2,
      },
      {
        question: "🎨 Ini warna apa?",
        image: "🔵",
        options: ["🔵 Biru", "🟢 Hijau Muda", "Pink", "Kuning Tua"],
        correct: 0,
      },
    ],
  },
  angka: {
    title: "🔢 Quiz Angka 🔢",
    questions: [
      {
        question: "👋 Berapa jari di tangan?",
        image: "✋",
        options: ["🖐️ 5 jari", "✌️ 2 jari", "🤟 3 jari", "✊ 4 jari"],
        correct: 0,
      },
      {
        question: "🐱 Berapa kaki kucing?",
        image: "🐾 🐾",
        options: [
          "🦶 2 kaki",
          "🦶🦶 3 kaki",
          "🦶🦶🦶🦶 4 kaki",
          "🦶🦶🦶 6 kaki",
        ],
        correct: 2,
      },
      {
        question: "👀 Berapa mata kita?",
        image: "👁️ 👁️",
        options: [
          "👁️ 1 mata",
          "👁️👁️ 2 mata",
          "👁️👁️👁️ 3 mata",
          "👁️👁️👁️👁️ 4 mata",
        ],
        correct: 1,
      },
      {
        question: "📅 1 Minggu ada berapa hari?",
        image: "📅",
        options: ["5 hari", "6 hari", "7 hari", "8 hari"],
        correct: 2,
      },
      {
        question: " Berapa apel di gambar?",
        image: "🍎 🍎 🍎",
        options: ["1 apel", "2 apel", "3 apel", "4 apel"],
        correct: 2,
      },
      {
        question: " Berapa bebek di gambar?",
        image: "🦆 🦆",
        options: ["1 bebek", "2 bebek", "3 bebek", "4 bebek"],
        correct: 1,
      },
      {
        question: " Berapa mobil di gambar?",
        image: "🚗 🚗 🚗 🚗",
        options: ["2 mobil", "3 mobil", "4 mobil", "5 mobil"],
        correct: 2,
      },
      {
        question: " Berapa balon di gambar?",
        image: "🎈 🎈 🎈 🎈 🎈",
        options: ["4 balon", "5 balon", "6 balon", "7 balon"],
        correct: 1,
      },
      {
        question: " Berapa bintang di gambar?",
        image: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
        options: ["5 bintang", "6 bintang", "7 bintang", "8 bintang"],
        correct: 1,
      },
      {
        question: " Berapa kucing di gambar?",
        image: "🐈",
        options: ["1 kucing", "2 kucing", "3 kucing", "4 kucing"],
        correct: 0,
      },
    ],
  },
  mencocokkan: {
    title: "🔄 Quiz Mencocokkan 🔄",
    questions: [
      {
        question: " Binatang apa yang mengeluarkan suara 'meong'?",
        image: "🐱",
        options: ["🐶 Anjing", "🐱 Kucing", "🦆 Bebek", "🐔 Ayam"],
        correct: 1,
      },
      {
        question: " Bentuk apa ini?",
        image: "⬛",
        options: ["🔺 Segitiga", "⬛ Persegi", "⭕ Lingkaran", "⬭ Oval"],
        correct: 1,
      },
      {
        question: " Buah apa ini?",
        image: "🍓",
        options: ["🍌 Pisang", "🍓 Stroberi", "🍎 Apel", "🍊 Jeruk"],
        correct: 1,
      },
      {
        question: " Hewan apa yang bisa terbang?",
        image: "🦅",
        options: ["🐟 Ikan", "🐢 Kura-kura", "🦅 Elang", "🐍 Ular"],
        correct: 2,
      },
      {
        question: " Bunga apa ini?",
        image: "🌺",
        options: ["🌹 Mawar", "🌺 Kembang Sepatu", "🌸 Sakura", "🌻 Matahari"],
        correct: 1,
      },
      {
        question: "Apa yang dipakai di kepala saat hujan?",
        image: "☔",
        options: ["🧤 Sarung Tangan", "🧣 Syal", "🧥 Jaket", "☔ Payung"],
        correct: 3,
      },
      {
        question: "Apa yang dipakai di kaki saat dingin?",
        image: " Socks",
        options: [
          "👟 Sepatu Olahraga",
          "🧦 Kaos Kaki",
          "👢 Sepatu Boot",
          " Sandals",
        ],
        correct: 1,
      },
      {
        question: "Alat apa yang digunakan untuk menulis?",
        image: "✏️",
        options: ["📏 Penggaris", "✂️ Gunting", "✏️ Pensil", " Penghapus"],
        correct: 2,
      },
      {
        question: "Alat apa yang digunakan untuk makan sup?",
        image: " Spoon",
        options: ["🍴 Garpu", "🥄 Sendok", "🔪 Pisau", "🥢 Sumpit"],
        correct: 1,
      },
      {
        question: "Di mana kita tidur di malam hari?",
        image: " Bed",
        options: ["🪑 Kursi", "🛋️ Sofa", "🧺 Keranjang", "🛏️ Kasur"],
        correct: 3,
      },
    ],
  },
  transportasi: {
    title: "🚗 Quiz Transportasi 🚌",
    questions: [
      {
        question: "Apa nama kendaraan ini?",
        image: "🚗",
        options: ["🏍️ Motor", "🚗 Mobil", "🚌 Bus", "🚚 Truk"],
        correct: 1,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "✈️",
        options: ["🚢 Kapal", "🚂 Kereta", "🚁 Helikopter", "✈️ Pesawat"],
        correct: 3,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🚢",
        options: ["🚗 Mobil", "🚢 Kapal", "🚲 Sepeda", "🛵 Skuter"],
        correct: 1,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🚂",
        options: ["🚗 Mobil", "🚌 Bus", "🚂 Kereta Api", "🚁 Helikopter"],
        correct: 2,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🚲",
        options: ["🛵 Skuter", "🏍️ Motor", "🚲 Sepeda", "🛴 Skuter Listrik"],
        correct: 2,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🛵",
        options: ["🚲 Sepeda", "🛴 Skuter Listrik", "🏍️ Motor", "🛵 Skuter"],
        correct: 3,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🚌",
        options: ["🚗 Mobil", "🚚 Truk", "🚌 Bus", "🚓 Mobil Polisi"],
        correct: 2,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🚚",
        options: [
          "🚌 Bus",
          "🚓 Mobil Polisi",
          "🚒 Mobil Pemadam",
          "🚚 Truk Barang",
        ],
        correct: 3,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🚑",
        options: ["🚒 Truk Pemadam", "🚓 Mobil Polisi", "🚑 Ambulans", " Taxi"],
        correct: 2,
      },
      {
        question: "Apa nama kendaraan ini?",
        image: "🚁",
        options: ["✈️ Pesawat", "🚀 Roket", "🛰️ Satelit", "🚁 Helikopter"],
        correct: 3,
      },
    ],
  },
  tanaman: {
    title: "🌳 Quiz Tanaman 🌻",
    questions: [
      {
        question: "Bagian tanaman ini namanya apa?",
        image: "🌿",
        options: ["🌰 Biji", "🌿 Daun", "🌸 Bunga", "🥔 Buah"],
        correct: 1,
      },
      {
        question: "Ini gambar apa?",
        image: "🌻",
        options: ["🌷 Tulip", "🌹 Mawar", "🌻 Matahari", "🌼 Melati"],
        correct: 2,
      },
      {
        question: "Sayuran apa ini?",
        image: "🥕",
        options: ["🥔 Kentang", "🧅 Bawang", "🥕 Wortel", "🥦 Brokoli"],
        correct: 2,
      },
      {
        question: "Ini adalah bagian dari pohon. Apa namanya?",
        image: "🪵",
        options: [" 🪵Batang", "🌿 Daun", "🌰 Biji", " Putik"],
        correct: 0,
      },
      {
        question: "Ini gambar apa? (Buah dari pohon)",
        image: "🌰",
        options: ["🌰 Biji", "🌸 Bunga", "🍂 Daun Gugur", "🍁 Daun Maple"],
        correct: 0,
      },
      {
        question: "Ini gambar apa? (Bunga mekar)",
        image: "🌸",
        options: ["🌿 Daun", "🌸 Bunga", "🌱 Tunas", "🍂 Daun Gugur"],
        correct: 1,
      },
      {
        question: "Tanaman ini biasanya tumbuh di padang pasir. Apa namanya?",
        image: "🌵",
        options: ["🌳 Pohon", "🌷 Tulip", "🌵 Kaktus", "🌿 Rumput"],
        correct: 2,
      },
      {
        question:
          "Tanaman ini tumbuh di dalam tanah dan sering kita makan. Apa namanya?",
        image: "🥔",
        options: ["🥕 Wortel", "🧅 Bawang", "🥔 Kentang", "🍆 Terong"],
        correct: 2,
      },
      {
        question:
          "Bagian tanaman yang bisa terbang terbawa angin untuk tumbuh lagi. Apa namanya?",
        image: "🌰",
        options: ["🌸 Kelopak Bunga", "🌿 Daun", "🌼 Serbuk Sari", "🌰 Biji"],
        correct: 3,
      },
      {
        question: "Ini adalah buah dari pohon apel. Apa namanya?",
        image: "🍎",
        options: ["🍌 Pisang", "🍎 Apel", "🍊 Jeruk", "🍇 Anggur"],
        correct: 1,
      },
    ],
  },
  hewanDarat: {
    title: "🦁 Quiz Hewan Darat 🐘",
    questions: [
      {
        question: "Hewan apa ini?",
        image: "🐘",
        options: ["🦒 Jerapah", "🦓 Zebra", "🐘 Gajah", "🐅 Harimau"],
        correct: 2,
      },
      {
        question: "Hewan apa ini?",
        image: "🐎",
        options: ["🐄 Sapi", "🐖 Babi", "🐑 Domba", "🐎 Kuda"],
        correct: 3,
      },
      {
        question: "Hewan apa ini?",
        image: "🐒",
        options: ["🦍 Gorila", "🐒 Monyet", "🐶 Anjing", "🐺 Serigala"],
        correct: 1,
      },
      {
        question: "Hewan apa ini?",
        image: "🦁",
        options: ["🐅 Harimau", "🐆 Macan Tutul", "🦁 Singa", "🐺 Serigala"],
        correct: 2,
      },
      {
        question: "Hewan apa ini?",
        image: "🐅",
        options: ["🦁 Singa", "🐆 Macan Tutul", "🐅 Harimau", "🦓 Zebra"],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Punya leher panjang)",
        image: "🦒",
        options: ["🦓 Zebra", "🦒 Jerapah", "🐘 Gajah", "🐎 Kuda"],
        correct: 1,
      },
      {
        question: "Hewan apa ini? (Bergaris hitam putih)",
        image: "🦓",
        options: ["🐎 Kuda", "🐅 Harimau", "🐆 Macan Tutul", "🦓 Zebra"],
        correct: 3,
      },
      {
        question: "Hewan apa ini? (Suka makan bambu)",
        image: "🐼",
        options: ["🐻 Beruang", "🐨 Koala", "🐼 Panda", "🦊 Rubah"],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Terkenal lambat)",
        image: "🐢",
        options: ["🐌 Siput", "🦎 Kadal", "🐸 Katak", "🐢 Kura-kura"],
        correct: 3,
      },
      {
        question: "Hewan apa ini? (Suka menggali tanah)",
        image: "🐇",
        options: ["🐿️ Tupai", "🐇 Kelinci", "🐀 Tikus", "🦔 Landak"],
        correct: 1,
      },
    ],
  },
  hewanLaut: {
    title: "🐠 Quiz Hewan Laut 🐳",
    questions: [
      {
        question: "Hewan apa ini?",
        image: "🐬",
        options: ["🦈 Hiu", "🐳 Paus", "🐠 Ikan", "🐬 Lumba-lumba"],
        correct: 3,
      },
      {
        question: "Hewan apa ini?",
        image: "🐙",
        options: ["🦑 Cumi-cumi", "🦀 Kepiting", "🦐 Udang", "🐙 Gurita"],
        correct: 3,
      },
      {
        question: "Hewan apa ini?",
        image: "🦈",
        options: ["🐟 Ikan", "🐋 Paus", "🦈 Hiu", "🐡 Ikan Buntal"],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Paling besar di laut)",
        image: "🐳",
        options: ["🦈 Hiu", "🐬 Lumba-lumba", "🐳 Paus", "🐠 Ikan"],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Punya capit besar)",
        image: "🦀",
        options: ["🦐 Udang", "🦑 Cumi-cumi", "🦀 Kepiting", "🦞 Lobster"],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Bentuknya seperti bintang)",
        image: "⭐",
        options: [
          "🐙 Gurita",
          "🐡 Ikan Buntal",
          "🌟 Bintang Laut",
          " Jellyfish",
        ],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Berenang berkelompok)",
        image: "🐟",
        options: ["🦈 Hiu", "🐠 Ikan", "🦐 Udang", "🐙 Gurita"],
        correct: 1,
      },
      {
        question: "Hewan apa ini? (Bisa menyemprotkan tinta)",
        image: "🦑",
        options: ["🐙 Gurita", "🦐 Udang", "🦑 Cumi-cumi", "🦀 Kepiting"],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Tubuhnya bulat bisa menggelembung)",
        image: "🐡",
        options: ["🐠 Ikan", "🦈 Hiu", "🐡 Ikan Buntal", "🐳 Paus"],
        correct: 2,
      },
      {
        question: "Hewan apa ini? (Hidup di cangkang)",
        image: "🐚",
        options: ["🦀 Kepiting", "🦐 Udang", "🐠 Ikan", " 🐚Siput Laut"],
        correct: 3,
      },
    ],
  },
  alamSemesta: {
    title: "🌌 Quiz Alam Semesta 🪐",
    questions: [
      {
        question: "Ini apa?",
        image: "☀️",
        options: ["🌙 Bulan", "⭐ Bintang", "☀️ Matahari", "🌍 Bumi"],
        correct: 2,
      },
      {
        question: "Ini apa?",
        image: "🌙",
        options: ["☀️ Matahari", "⭐ Bintang", "🌙 Bulan", "🪐 Saturnus"],
        correct: 2,
      },
      {
        question: "Ini apa?",
        image: "🌎",
        options: ["☀️ Matahari", "🌙 Bulan", "🪐 Planet", "🌍 Bumi"],
        correct: 3,
      },
      {
        question: "Apa yang bersinar kecil di malam hari?",
        image: "✨",
        options: ["☀️ Matahari", "🌙 Bulan", "⭐ Bintang", "🌍 Bumi"],
        correct: 2,
      },

      {
        question: "Tempat yang banyak pohon dan hewan?",
        image: "🌳",
        options: ["🌳 Hutan", "🏖️ Pantai", "🏔️ Gunung", "🏞️ Danau"],
        correct: 0,
      },
      {
        question: "Tempat yang tinggi dan bisa kita naiki?",
        image: "🏔️",
        options: ["🏔️ Gunung", "🏖️ Pantai", "🏞️ Danau", "🌳 Hutan"],
        correct: 0,
      },
      {
        question: "Tempat yang banyak bunga dan kupu-kupu?",
        image: "🦋",
        options: ["🦋 Taman", "🏖️ Pantai", "🏔️ Gunung", "🌳 Hutan"],
        correct: 0,
      },
      {
        question: "Tempat yang banyak air mengalir?",
        image: "🌊",
        options: ["🌊 Sungai", "🏖️ Pantai", "🏔️ Gunung", "🏞️ Danau"],
        correct: 0,
      },
      {
        question: "Apa yang digunakan astronot untuk pergi ke luar angkasa?",
        image: "🚀",
        options: ["✈️ Pesawat", "🚁 Helikopter", "🚀 Roket", "🛰️ Satelit"],
        correct: 2,
      },
    ],
  },
  anggotaTubuh: {
    title: "🧍 Quiz Anggota Tubuh 👃",
    questions: [
      {
        question: "Ini apa?",
        image: "👃",
        options: ["👁️ Mata", "👂 Telinga", "👃 Hidung", "👄 Mulut"],
        correct: 2,
      },
      {
        question: "Ini apa?",
        image: "🦵",
        options: ["💪 Lengan", "🦵 Kaki", "🦶 Telapak Kaki", "✋ Tangan"],
        correct: 1,
      },
      {
        question: "Ini apa?",
        image: "✋",
        options: ["🦶 Telapak Kaki", "💪 Lengan", "🦵 Kaki", "✋ Tangan"],
        correct: 3,
      },
      {
        question: "Ini apa?",
        image: "👂",
        options: ["👃 Hidung", "👁️ Mata", "👂 Telinga", "👄 Mulut"],
        correct: 2,
      },
      {
        question: "Ini apa?",
        image: "👁️",
        options: ["👃 Hidung", "👂 Telinga", "👄 Mulut", "👁️ Mata"],
        correct: 3,
      },
      {
        question: "Ini apa?",
        image: "👄",
        options: ["🦷 Gigi", "👅 Lidah", "👄 Mulut", " Lisp"],
        correct: 2,
      },
      {
        question: "Ini apa? (Bagian dalam mulut)",
        image: "👅",
        options: ["👄 Mulut", "🦷 Gigi", "👅 Lidah", " Pipi"],
        correct: 2,
      },
      {
        question: "Ini apa? (Bagian dalam mulut untuk mengunyah)",
        image: "🦷",
        options: ["👅 Lidah", "🦷 Gigi", "👄 Mulut", " Gusi"],
        correct: 1,
      },
      {
        question: "Ini apa? (Untuk mendengar)",
        image: "👂",
        options: ["👁️ Mata", "👂 Telinga", "👃 Hidung", "👄 Mulut"],
        correct: 1,
      },
      {
        question: "Ini apa? (Untuk melihat)",
        image: "👁️",
        options: ["👂 Telinga", "👃 Hidung", "👄 Mulut", "👁️ Mata"],
        correct: 3,
      },
    ],
  },
  profesi: {
    title: "👩‍🍳 Quiz Profesi 👨‍🚒",
    questions: [
      {
        question: "Profesi apa ini?",
        image: "👨‍🏫",
        options: ["👨‍⚕️ Dokter", "👨‍🏫 Guru", "👨‍🌾 Petani", "👨‍🍳 Koki"],
        correct: 1,
      },
      {
        question: "Profesi apa ini?",
        image: "👨‍🚒",
        options: [
          "👷 Pembangun",
          "👮 Polisi",
          "👨‍🚒 Pemadam Kebakaran",
          "👨‍✈️ Pilot",
        ],
        correct: 2,
      },
      {
        question: "Profesi apa ini?",
        image: "👩‍🍳",
        options: ["👩‍🌾 Petani", "👩‍⚕️ Dokter", "👩‍🏫 Guru", "👩‍🍳 Koki"],
        correct: 3,
      },
      {
        question: "Profesi apa ini? (Memadamkan api)",
        image: "🚒",
        options: [
          "👮 Polisi",
          "👨‍🚒 Pemadam Kebakaran",
          "👨‍✈️ Pilot",
          "👷 Pembangun",
        ],
        correct: 1,
      },
      {
        question: "Profesi apa ini? (Mengobati orang sakit)",
        image: "🏥",
        options: ["👨‍🏫 Guru", "👨‍🌾 Petani", "👨‍⚕️ Dokter", "👩‍🍳 Koki"],
        correct: 2,
      },
      {
        question: "Profesi apa ini? (Mengatur lalu lintas)",
        image: "🚓",
        options: [
          "👨‍🚒 Pemadam Kebakaran",
          "👨‍✈️ Pilot",
          "👮 Polisi",
          "👷 Pembangun",
        ],
        correct: 2,
      },
      {
        question: "Profesi apa ini? (Membuat bangunan)",
        image: "👷",
        options: ["👨‍🏫 Guru", "👨‍🌾 Petani", "👨‍⚕️ Dokter", "👷 Pembangun"],
        correct: 3,
      },
      {
        question: "Profesi apa ini? (Menerbangkan pesawat)",
        image: "✈️",
        options: ["👨‍🚒 Pemadam Kebakaran", "👨‍✈️ Pilot", "👮 Polisi", "👨‍🏫 Guru"],
        correct: 1,
      },
      {
        question: "Profesi apa ini? (Mengolah tanah dan menanam)",
        image: "🌾",
        options: ["👨‍🏫 Guru", "👨‍🌾 Petani", "👨‍⚕️ Dokter", "👩‍🍳 Koki"],
        correct: 1,
      },
      {
        question: "Profesi apa ini? (Memasak makanan lezat)",
        image: "🍳",
        options: ["👨‍🏫 Guru", "👨‍🌾 Petani", "👨‍⚕️ Dokter", "👩‍🍳 Koki"],
        correct: 3,
      },
    ],
  },
  rekreasi: {
    title: "🎠 Quiz Tempat Bermain 🎡",
    questions: [
      {
        question: "Tempat bermain yang punya ayunan dan perosotan?",
        image: "🎠",
        options: ["🏫 Sekolah", "🎠 Taman Bermain", "🏥 Rumah Sakit", "🏢 Kantor"],
        correct: 1,
      },
      {
        question: "Alat bermain yang bisa naik turun?",
        image: "🛝",
        options: ["🎪 Tenda", "🛝 Perosotan", "🎨 Cat Air", "🎭 Topeng"],
        correct: 1,
      },
      {
        question: "Alat bermain yang bisa diayun?",
        image: "Ayunan",
        options: ["🎪 Tenda", "🎨 Cat Air", " Ayunan", "🎭 Topeng"],
        correct: 2,
      },
      {
        question: "Tempat bermain yang banyak air?",
        image: "🏊",
        options: ["🏊 Kolam Renang", "🎪 Tenda", "🎨 Cat Air", "🎭 Topeng"],
        correct: 0,
      },
      {
        question: "Alat bermain yang bisa diputar?",
        image: "🎡",
        options: ["🎪 Tenda", "🎨 Cat Air", "🎭 Topeng", "🎡 Komedi Putar"],
        correct: 3,
      },
      {
        question: "Alat bermain yang bisa ditiup?",
        image: "🫧",
        options: ["🎪 Tenda", "🎨 Cat Air", "🫧 Gelembung Sabun", "🎭 Topeng"],
        correct: 2,
      },
      {
        question: "Alat bermain yang bisa dilempar ke atas?",
        image: "🪁",
        options: ["🎪 Tenda", "🎨 Cat Air", "🎭 Topeng", "🪁 Layangan"],
        correct: 3,
      },
      {
        question: "Tempat bermain yang punya banyak binatang?",
        image: "🦁",
        options: ["🦁 Kebun Binatang", "🎪 Tenda", "🎨 Cat Air", "🎭 Topeng"],
        correct: 0,
      },
      {
        question: "Alat bermain yang bisa dinaiki?",
        image: "🎢",
        options: ["🎪 Tenda", "🎨 Cat Air", "🎭 Topeng", "🎢 Wahana"],
        correct: 3,
      },
      {
        question: "Tempat bermain yang punya banyak bunga?",
        image: "🌺",
        options: ["🌺 Taman Bunga", "🎪 Tenda", "🎨 Cat Air", "🎭 Topeng"],
        correct: 0,
      },
    ],
  },
};

// Elemen-elemen DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const progressBar = document.getElementById('progress');
const scoreDisplay = document.getElementById('score-display');
const backButton = document.getElementById('back-button');
const retryButton = document.getElementById('retry-button');
const resultBackButton = document.getElementById('result-back-button');

// Variabel state
let currentQuestion = 0;
let score = 0;
let canAnswer = true;
let currentCategory = null;

// Efek suara - gunakan suara dari sumber yang lebih reliable
const correctSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
const wrongSound = new Audio('https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3');
const completeSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');

// Pastikan audio dimuat
let soundsLoaded = false;

// Fungsi untuk memuat audio
function loadSounds() {
    const sounds = [correctSound, wrongSound, completeSound];
    let loadedCount = 0;

    sounds.forEach(sound => {
        sound.addEventListener('canplaythrough', () => {
            loadedCount++;
            if (loadedCount === sounds.length) {
                soundsLoaded = true;
                console.log('Semua suara berhasil dimuat!');
            }
        });

        sound.addEventListener('error', (e) => {
            console.error('Error loading sound:', e);
        });

        // Mulai memuat audio
        sound.load();
    });
}

// Panggil fungsi loadSounds saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadSounds);

// Fungsi helper untuk memutar suara
function playSound(sound) {
    if (!soundsLoaded) {
        console.log('Suara belum siap, mencoba memuat ulang...');
        loadSounds();
        return;
    }

    try {
        // Reset audio ke awal
        sound.currentTime = 0;
        // Set volume
        sound.volume = 1.0;
        
        // Coba putar dengan promise
        const playPromise = sound.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Suara berhasil diputar');
                })
                .catch(error => {
                    console.error('Error playing sound:', error);
                    // Jika gagal karena user interaction, coba lagi setelah klik
                    if (error.name === 'NotAllowedError') {
                        document.addEventListener('click', function tryPlayAgain() {
                            sound.play()
                                .then(() => {
                                    console.log('Suara berhasil diputar setelah interaksi');
                                })
                                .catch(e => console.error('Masih gagal memutar suara:', e));
                            document.removeEventListener('click', tryPlayAgain);
                        }, { once: true });
                    }
                });
        }
    } catch (error) {
        console.error('Error in playSound:', error);
    }
}

// Tambahkan event listener untuk memastikan audio dapat diputar setelah interaksi pengguna pertama
document.addEventListener('click', function enableAudio() {
    if (!soundsLoaded) {
        loadSounds();
    }
    
    // Coba putar semua suara untuk memastikan mereka berfungsi
    [correctSound, wrongSound, completeSound].forEach(sound => {
        sound.play()
            .then(() => {
                sound.pause();
                sound.currentTime = 0;
            })
            .catch(() => {});
    });
}, { once: true });

// Event Listeners
startButton.addEventListener('click', showCategorySelection);
backButton.addEventListener('click', goBackToCategories);
retryButton.addEventListener('click', retryQuiz);
resultBackButton.addEventListener('click', goBackToCategoriesFromResult);

document.addEventListener('DOMContentLoaded', function() {
    // ... semua kode event listener tombol di sini ...
    retryButton.addEventListener('click', retryQuiz);
    resultBackButton.addEventListener('click', goBackToCategoriesFromResult);
});

// Background music - pilih salah satu dari opsi di bawah
const bgMusic = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Opsi 1: Musik ceria
// const bgMusic = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'); // Opsi 2: Musik riang
// const bgMusic = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'); // Opsi 3: Musik santai

bgMusic.loop = true; // Putar berulang
bgMusic.volume = 0.7; // Volume 70%

// Tambahkan tombol kontrol musik dengan loading state
function addMusicControl() {
    const musicControl = document.createElement('button');
    musicControl.id = 'music-control';
    musicControl.innerHTML = '⏳'; // Icon loading
    musicControl.className = 'music-control-btn loading';
    musicControl.title = 'Memuat musik...';
    document.body.appendChild(musicControl);

    // Style untuk tombol musik
    const style = document.createElement('style');
    style.textContent = `
        .music-control-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #ff6b6b;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 1000;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .music-control-btn:hover {
            transform: scale(1.1);
        }
        .music-control-btn.muted {
            background: #ccc;
        }
        .music-control-btn.loading {
            background: #ffd700;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Event listener untuk tombol musik
    musicControl.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play()
                .then(() => {
                    musicControl.innerHTML = '🔊';
                    musicControl.title = 'Klik untuk menghentikan musik';
                    musicControl.classList.remove('muted', 'loading');
                })
                .catch(error => {
                    console.error('Error playing music:', error);
                    musicControl.innerHTML = '❌';
                    musicControl.title = 'Gagal memutar musik';
                    musicControl.classList.add('muted');
                    setTimeout(() => {
                        musicControl.innerHTML = '🔈';
                        musicControl.title = 'Klik untuk mencoba memutar musik';
                    }, 2000);
                });
        } else {
            bgMusic.pause();
            musicControl.innerHTML = '🔈';
            musicControl.title = 'Klik untuk memutar musik';
            musicControl.classList.add('muted');
        }
    });

    // Event listener untuk status loading musik
    bgMusic.addEventListener('canplaythrough', () => {
        musicControl.innerHTML = '🔈';
        musicControl.title = 'Klik untuk memutar musik';
        musicControl.classList.remove('loading');
    });

    bgMusic.addEventListener('error', (e) => {
        console.error('Error loading music:', e);
        musicControl.innerHTML = '❌';
        musicControl.title = 'Gagal memuat musik';
        musicControl.classList.add('muted');
    });
}

// Modifikasi fungsi showCategorySelection untuk memulai musik dengan loading state
function showCategorySelection() {
    const musicControl = document.getElementById('music-control');
    if (musicControl) {
        musicControl.innerHTML = '⏳';
        musicControl.classList.add('loading');
        musicControl.title = 'Memuat musik...';
    }

    // Mulai putar musik saat memilih kategori
    bgMusic.play()
        .then(() => {
            if (musicControl) {
                musicControl.innerHTML = '🔊';
                musicControl.classList.remove('loading');
                musicControl.title = 'Klik untuk menghentikan musik';
            }
        })
        .catch(error => {
            console.log('Menunggu interaksi pengguna untuk memutar musik...');
            if (musicControl) {
                musicControl.innerHTML = '🔈';
                musicControl.classList.remove('loading');
                musicControl.title = 'Klik untuk memutar musik';
            }
        });

    startScreen.innerHTML = `
        <h2>Pilih Kategori Quiz</h2>
        <div class="category-container">
            ${Object.entries(quizCategories).map(([key, category]) => `
                <button class="category-btn" data-category="${key}">
                    ${category.title}
                </button>
            `).join('')}
        </div>
    `;

    // Tambahkan event listener untuk setiap tombol kategori
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentCategory = button.dataset.category;
            startQuiz();
        });
    });
}

// Modifikasi fungsi startQuiz untuk menghentikan musik saat quiz dimulai
function startQuiz() {
    bgMusic.pause(); // Hentikan musik saat quiz dimulai
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    document.querySelector('h1').textContent = quizCategories[currentCategory].title;
    showQuestion();
    backButton.classList.remove('hidden');
    retryButton.classList.add('hidden');
    resultBackButton.classList.add('hidden');
}

// Modifikasi fungsi goBackToCategories untuk memulai musik lagi
function goBackToCategories() {
    bgMusic.play().catch(() => {}); // Mulai musik lagi saat kembali ke kategori
    currentQuestion = 0;
    score = 0;
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    showCategorySelection();
    backButton.classList.add('hidden');
    retryButton.classList.add('hidden');
    resultBackButton.classList.add('hidden');
}

// Modifikasi fungsi goBackToCategoriesFromResult
function goBackToCategoriesFromResult() {
    bgMusic.play().catch(() => {}); // Mulai musik lagi saat kembali dari hasil
    currentQuestion = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    showCategorySelection();
    retryButton.classList.add('hidden');
    resultBackButton.classList.add('hidden');
}

// Tambahkan pemanggilan addMusicControl saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadSounds();
    addMusicControl();
});

// Fungsi untuk menampilkan pertanyaan
function showQuestion() {
    const questions = quizCategories[currentCategory].questions;
    const question = questions[currentQuestion];
    
    // Tampilkan pertanyaan dengan gambar yang lebih besar
    questionText.innerHTML = `
        <div class="question-image">${question.image}</div>
        <div class="question-text">${question.question}</div>
    `;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.innerHTML = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Reset state
    canAnswer = true;
    feedback.textContent = '';
    feedback.className = 'feedback';
}

// Fungsi untuk memilih jawaban
function selectAnswer(selectedIndex) {
    if (!canAnswer) return;
    canAnswer = false;

    const questions = quizCategories[currentCategory].questions;
    const question = questions[currentQuestion];
    const options = optionsContainer.children;
    
    options[selectedIndex].classList.add(selectedIndex === question.correct ? 'correct' : 'wrong');
    
    if (selectedIndex === question.correct) {
        score++;
        feedback.textContent = 'Benar! 🎉';
        feedback.className = 'feedback correct';
        playSound(correctSound);
    } else {
        feedback.textContent = 'Coba lagi! 💪';
        feedback.className = 'feedback wrong';
        playSound(wrongSound);
        options[question.correct].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Fungsi untuk menampilkan hasil
function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    backButton.classList.add('hidden');
    retryButton.classList.remove('hidden');
    resultBackButton.classList.remove('hidden');
    
    const questions = quizCategories[currentCategory].questions;
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🎉 Hebat! Kamu mendapatkan nilai sempurna! 🎉';
    } else if (percentage >= 80) {
        message = '👏 Bagus sekali! Kamu sangat pintar! 👏';
    } else if (percentage >= 60) {
        message = '👍 Kerja bagus! Terus berlatih ya! 👍';
    } else {
        message = '💪 Jangan menyerah! Coba lagi! 💪';
    }
    
    scoreDisplay.innerHTML = `
        <p>${message}</p>
        <p>Skor kamu: ${score} dari ${questions.length}</p>
    `;
    
    playSound(completeSound);
}

// Tambahkan animasi hover untuk tombol
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('btn') || e.target.classList.contains('category-btn')) {
        e.target.style.transform = 'scale(1.1)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('btn') || e.target.classList.contains('category-btn')) {
        e.target.style.transform = 'scale(1)';
    }
});

function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
    backButton.classList.remove('hidden');
    retryButton.classList.add('hidden');
    resultBackButton.classList.add('hidden');
} 