// DATABASE NEGARA (Curated list of 179 countries)
const COUNTRY_DATABASE = [
  { code: "id", indName: "Indonesia", engName: "Indonesia", continent: "Asia", capital: "Jakarta" },
  { code: "my", indName: "Malaysia", engName: "Malaysia", continent: "Asia", capital: "Kuala Lumpur" },
  { code: "sg", indName: "Singapura", engName: "Singapore", continent: "Asia", capital: "Singapura" },
  { code: "jp", indName: "Jepang", engName: "Japan", continent: "Asia", capital: "Tokyo" },
  { code: "kr", indName: "Korea Selatan", engName: "South Korea", continent: "Asia", capital: "Seoul" },
  { code: "cn", indName: "Tiongkok", engName: "China", continent: "Asia", capital: "Beijing" },
  { code: "th", indName: "Thailand", engName: "Thailand", continent: "Asia", capital: "Bangkok" },
  { code: "vn", indName: "Vietnam", engName: "Vietnam", continent: "Asia", capital: "Hanoi" },
  { code: "ph", indName: "Filipina", engName: "Philippines", continent: "Asia", capital: "Manila" },
  { code: "in", indName: "India", engName: "India", continent: "Asia", capital: "New Delhi" },
  { code: "sa", indName: "Arab Saudi", engName: "Saudi Arabia", continent: "Asia", capital: "Riyadh" },
  { code: "tr", indName: "Turki", engName: "Turkey", continent: "Asia/Eropa", capital: "Ankara" },
  { code: "ru", indName: "Rusia", engName: "Russia", continent: "Asia/Eropa", capital: "Moskow" },
  { code: "us", indName: "Amerika Serikat", engName: "United States", continent: "Amerika", capital: "Washington, D.C." },
  { code: "ca", indName: "Kanada", engName: "Canada", continent: "Amerika", capital: "Ottawa" },
  { code: "br", indName: "Brasil", engName: "Brazil", continent: "Amerika", capital: "Brasilia" },
  { code: "ar", indName: "Argentina", engName: "Argentina", continent: "Amerika", capital: "Buenos Aires" },
  { code: "mx", indName: "Meksiko", engName: "Mexico", continent: "Amerika", capital: "Mexico City" },
  { code: "co", indName: "Kolombia", engName: "Colombia", continent: "Amerika", capital: "Bogota" },
  { code: "pe", indName: "Peru", engName: "Peru", continent: "Amerika", capital: "Lima" },
  { code: "cl", indName: "Chile", engName: "Chile", continent: "Amerika", capital: "Santiago" },
  { code: "gb", indName: "Inggris", engName: "United Kingdom", continent: "Eropa", capital: "London" },
  { code: "fr", indName: "Prancis", engName: "France", continent: "Eropa", capital: "Paris" },
  { code: "de", indName: "Jerman", engName: "Germany", continent: "Eropa", capital: "Berlin" },
  { code: "it", indName: "Italia", engName: "Italy", continent: "Eropa", capital: "Roma" },
  { code: "es", indName: "Spanyol", engName: "Spain", continent: "Eropa", capital: "Madrid" },
  { code: "nl", indName: "Belanda", engName: "Netherlands", continent: "Eropa", capital: "Amsterdam" },
  { code: "ch", indName: "Swiss", engName: "Switzerland", continent: "Eropa", capital: "Bern" },
  { code: "se", indName: "Swedia", engName: "Sweden", continent: "Eropa", capital: "Stockholm" },
  { code: "no", indName: "Norwegia", engName: "Norway", continent: "Eropa", capital: "Oslo" },
  { code: "fi", indName: "Finlandia", engName: "Finland", continent: "Eropa", capital: "Helsinki" },
  { code: "dk", indName: "Denmark", engName: "Denmark", continent: "Eropa", capital: "Kopenhagen" },
  { code: "be", indName: "Belgia", engName: "Belgium", continent: "Eropa", capital: "Brussel" },
  { code: "pt", indName: "Portugal", engName: "Portugal", continent: "Eropa", capital: "Lisabon" },
  { code: "gr", indName: "Yunani", engName: "Greece", continent: "Eropa", capital: "Athena" },
  { code: "pl", indName: "Polandia", engName: "Poland", continent: "Eropa", capital: "Warsawa" },
  { code: "at", indName: "Austria", engName: "Austria", continent: "Eropa", capital: "Wina" },
  { code: "ie", indName: "Irlandia", engName: "Ireland", continent: "Eropa", capital: "Dublin" },
  { code: "is", indName: "Islandia", engName: "Iceland", continent: "Eropa", capital: "Reykjavik" },
  { code: "ua", indName: "Ukraina", engName: "Ukraine", continent: "Eropa", capital: "Kyiv" },
  { code: "eg", indName: "Mesir", engName: "Egypt", continent: "Afrika", capital: "Kairo" },
  { code: "za", indName: "Afrika Selatan", engName: "South Africa", continent: "Afrika", capital: "Pretoria" },
  { code: "ma", indName: "Maroko", engName: "Morocco", continent: "Afrika", capital: "Rabat" },
  { code: "ke", indName: "Kenya", engName: "Kenya", continent: "Afrika", capital: "Nairobi" },
  { code: "ng", indName: "Nigeria", engName: "Nigeria", continent: "Afrika", capital: "Abuja" },
  { code: "gh", indName: "Ghana", engName: "Ghana", continent: "Afrika", capital: "Accra" },
  { code: "au", indName: "Australia", engName: "Australia", continent: "Oseania", capital: "Canberra" },
  { code: "nz", indName: "Selandia Baru", engName: "New Zealand", continent: "Oseania", capital: "Wellington" },
  { code: "fj", indName: "Fiji", engName: "Fiji", continent: "Oseania", capital: "Suva" },
  { code: "pg", indName: "Papua Nugini", engName: "Papua New Guinea", continent: "Oseania", capital: "Port Moresby" },
  { code: "ae", indName: "Uni Emirat Arab", engName: "United Arab Emirates", continent: "Asia", capital: "Abu Dhabi" },
  { code: "pk", indName: "Pakistan", engName: "Pakistan", continent: "Asia", capital: "Islamabad" },
  { code: "bd", indName: "Bangladesh", engName: "Bangladesh", continent: "Asia", capital: "Dhaka" },
  { code: "ir", indName: "Iran", engName: "Iran", continent: "Asia", capital: "Tehran" },
  { code: "iq", indName: "Irak", engName: "Iraq", continent: "Asia", capital: "Baghdad" },
  { code: "kp", indName: "Korea Utara", engName: "North Korea", continent: "Asia", capital: "Pyongyang" },
  { code: "mn", indName: "Mongolia", engName: "Mongolia", continent: "Asia", capital: "Ulaanbaatar" },
  { code: "np", indName: "Nepal", engName: "Nepal", continent: "Asia", capital: "Kathmandu" },
  { code: "lk", indName: "Sri Lanka", engName: "Sri Lanka", continent: "Asia", capital: "Kolombo" },
  { code: "kh", indName: "Kamboja", engName: "Cambodia", continent: "Asia", capital: "Phnom Penh" },
  { code: "la", indName: "Laos", engName: "Laos", continent: "Asia", capital: "Vientiane" },
  { code: "mm", indName: "Myanmar", engName: "Myanmar", continent: "Asia", capital: "Naypyidaw" },
  { code: "bn", indName: "Brunei", engName: "Brunei", continent: "Asia", capital: "Bandar Seri Begawan" },
  { code: "kz", indName: "Kazakhstan", engName: "Kazakhstan", continent: "Asia", capital: "Astana" },
  { code: "va", indName: "Vatikan", engName: "Vatican City", continent: "Eropa", capital: "Vatikan" },
  { code: "mc", indName: "Monako", engName: "Monaco", continent: "Eropa", capital: "Monako" },
  { code: "cz", indName: "Ceko", engName: "Czechia", continent: "Eropa", capital: "Prague" },
  { code: "hu", indName: "Hungaria", engName: "Hungary", continent: "Eropa", capital: "Budapest" },
  { code: "ro", indName: "Rumania", engName: "Romania", continent: "Eropa", capital: "Bucharest" },
  { code: "hr", indName: "Kroasia", engName: "Croatia", continent: "Eropa", capital: "Zagreb" },
  { code: "dz", indName: "Aljazair", engName: "Algeria", continent: "Afrika", capital: "Algiers" },
  { code: "tn", indName: "Tunisia", engName: "Tunisia", continent: "Afrika", capital: "Tunis" },
  { code: "et", indName: "Ethiopia", engName: "Ethiopia", continent: "Afrika", capital: "Addis Ababa" },
  { code: "sn", indName: "Senegal", engName: "Senegal", continent: "Afrika", capital: "Dakar" },
  { code: "mg", indName: "Madagaskar", engName: "Madagascar", continent: "Afrika", capital: "Antananarivo" },
  { code: "zw", indName: "Zimbabwe", engName: "Zimbabwe", continent: "Afrika", capital: "Harare" },
  { code: "jm", indName: "Jamaika", engName: "Jamaica", continent: "Amerika", capital: "Kingston" },
  { code: "cu", indName: "Kuba", engName: "Cuba", continent: "Amerika", capital: "Havana" },
  { code: "pa", indName: "Panama", engName: "Panama", continent: "Amerika", capital: "Panama City" },
  { code: "cr", indName: "Kosta Rika", engName: "Costa Rica", continent: "Amerika", capital: "San Jose" },
  { code: "ec", indName: "Ekuador", engName: "Ecuador", continent: "Amerika", capital: "Quito" },
  { code: "ve", indName: "Venezuela", engName: "Venezuela", continent: "Amerika", capital: "Caracas" },
  // Harder/Obscure Countries
  { code: "bt", indName: "Bhutan", engName: "Bhutan", continent: "Asia", capital: "Thimphu" },
  { code: "mv", indName: "Maladewa", engName: "Maldives", continent: "Asia", capital: "Male" },
  { code: "am", indName: "Armenia", engName: "Armenia", continent: "Asia", capital: "Yerevan" },
  { code: "ge", indName: "Georgia", engName: "Georgia", continent: "Asia", capital: "Tbilisi" },
  { code: "tl", indName: "Timor Leste", engName: "East Timor", continent: "Asia", capital: "Dili" },
  { code: "li", indName: "Liechtenstein", engName: "Liechtenstein", continent: "Eropa", capital: "Vaduz" },
  { code: "ad", indName: "Andorra", engName: "Andorra", continent: "Eropa", capital: "Andorra la Vella" },
  { code: "sm", indName: "San Marino", engName: "San Marino", continent: "Eropa", capital: "San Marino" },
  { code: "mt", indName: "Malta", engName: "Malta", continent: "Eropa", capital: "Valletta" },
  { code: "cy", indName: "Siprus", engName: "Cyprus", continent: "Asia", capital: "Nicosia" },
  { code: "lu", indName: "Luksemburg", engName: "Luxembourg", continent: "Eropa", capital: "Luksemburg" },
  { code: "si", indName: "Slovenia", engName: "Slovenia", continent: "Eropa", capital: "Ljubljana" },
  { code: "sk", indName: "Slovakia", engName: "Slovakia", continent: "Eropa", capital: "Bratislava" },
  { code: "ee", indName: "Estonia", engName: "Estonia", continent: "Eropa", capital: "Tallinn" },
  { code: "lv", indName: "Latvia", engName: "Latvia", continent: "Eropa", capital: "Riga" },
  { code: "lt", indName: "Lituania", engName: "Lithuania", continent: "Eropa", capital: "Vilnius" },
  { code: "sr", indName: "Suriname", engName: "Suriname", continent: "Amerika", capital: "Paramaribo" },
  { code: "gy", indName: "Guyana", engName: "Guyana", continent: "Amerika", capital: "Georgetown" },
  { code: "uy", indName: "Uruguay", engName: "Uruguay", continent: "Amerika", capital: "Montevideo" },
  { code: "py", indName: "Paraguay", engName: "Paraguay", continent: "Amerika", capital: "Asuncion" },
  { code: "bo", indName: "Bolivia", engName: "Bolivia", continent: "Amerika", capital: "Sucre" },
  { code: "hn", indName: "Honduras", engName: "Honduras", continent: "Amerika", capital: "Tegucigalpa" },
  { code: "ni", indName: "Nicaragua", engName: "Nicaragua", continent: "Amerika", capital: "Managua" },
  { code: "sv", indName: "El Salvador", engName: "El Salvador", continent: "Amerika", capital: "San Salvador" },
  { code: "dj", indName: "Djibouti", engName: "Djibouti", continent: "Afrika", capital: "Djibouti" },
  { code: "mr", indName: "Mauritania", engName: "Mauritania", continent: "Afrika", capital: "Nouakchott" },
  { code: "so", indName: "Somalia", engName: "Somalia", continent: "Afrika", capital: "Mogadishu" },
  { code: "sl", indName: "Sierra Leone", engName: "Sierra Leone", continent: "Afrika", capital: "Freetown" },
  { code: "mu", indName: "Mauritius", engName: "Mauritius", continent: "Afrika", capital: "Port Louis" },
  { code: "sc", indName: "Seychelles", engName: "Seychelles", continent: "Afrika", capital: "Victoria" },
  { code: "cv", indName: "Tanjung Verde", engName: "Cabo Verde", continent: "Afrika", capital: "Praia" },
  { code: "pw", indName: "Palau", engName: "Palau", continent: "Oseania", capital: "Ngerulmud" },
  { code: "ki", indName: "Kiribati", engName: "Kiribati", continent: "Oseania", capital: "Tarawa" },
  { code: "tv", indName: "Tuvalu", engName: "Tuvalu", continent: "Oseania", capital: "Funafuti" },
  { code: "vu", indName: "Vanuatu", engName: "Vanuatu", continent: "Oseania", capital: "Port Vila" },
  { code: "sb", indName: "Kepulauan Solomon", engName: "Solomon Islands", continent: "Oseania", capital: "Honiara" },
  // More Uncommon Countries
  { code: "kg", indName: "Kirgizstan", engName: "Kyrgyzstan", continent: "Asia", capital: "Bishkek" },
  { code: "tj", indName: "Tajikistan", engName: "Tajikistan", continent: "Asia", capital: "Dushanbe" },
  { code: "uz", indName: "Uzbekistan", engName: "Uzbekistan", continent: "Asia", capital: "Tashkent" },
  { code: "tm", indName: "Turkmenistan", engName: "Turkmenistan", continent: "Asia", capital: "Ashgabat" },
  { code: "az", indName: "Azerbaijan", engName: "Azerbaijan", continent: "Asia", capital: "Baku" },
  { code: "bh", indName: "Bahrain", engName: "Bahrain", continent: "Asia", capital: "Manama" },
  { code: "om", indName: "Oman", engName: "Oman", continent: "Asia", capital: "Muskat" },
  { code: "ye", indName: "Yaman", engName: "Yemen", continent: "Asia", capital: "Sana'a" },
  { code: "kw", indName: "Kuwait", engName: "Kuwait", continent: "Asia", capital: "Kuwait City" },
  { code: "lb", indName: "Lebanon", engName: "Lebanon", continent: "Asia", capital: "Beirut" },
  { code: "jo", indName: "Yordania", engName: "Jordan", continent: "Asia", capital: "Amman" },
  { code: "sy", indName: "Suriah", engName: "Syria", continent: "Asia", capital: "Damaskus" },
  { code: "ps", indName: "Palestina", engName: "Palestine", continent: "Asia", capital: "Yerusalem" },
  { code: "md", indName: "Moldova", engName: "Moldova", continent: "Eropa", capital: "Chisinau" },
  { code: "mk", indName: "Makedonia Utara", engName: "North Macedonia", continent: "Eropa", capital: "Skopje" },
  { code: "me", indName: "Montenegro", engName: "Montenegro", continent: "Eropa", capital: "Podgorica" },
  { code: "ba", indName: "Bosnia dan Herzegovina", engName: "Bosnia and Herzegovina", continent: "Eropa", capital: "Sarajevo" },
  { code: "al", indName: "Albania", engName: "Albania", continent: "Eropa", capital: "Tirana" },
  { code: "xk", indName: "Kosovo", engName: "Kosovo", continent: "Eropa", capital: "Pristina" },
  { code: "bz", indName: "Belize", engName: "Belize", continent: "Amerika", capital: "Belmopan" },
  { code: "gt", indName: "Guatemala", engName: "Guatemala", continent: "Amerika", capital: "Guatemala City" },
  { code: "bs", indName: "Bahama", engName: "Bahamas", continent: "Amerika", capital: "Nassau" },
  { code: "bb", indName: "Barbados", engName: "Barbados", continent: "Amerika", capital: "Bridgetown" },
  { code: "lc", indName: "Saint Lucia", engName: "Saint Lucia", continent: "Amerika", capital: "Castries" },
  { code: "gd", indName: "Grenada", engName: "Grenada", continent: "Amerika", capital: "St. George's" },
  { code: "dm", indName: "Dominika", engName: "Dominica", continent: "Amerika", capital: "Roseau" },
  { code: "kn", indName: "Saint Kitts dan Nevis", engName: "Saint Kitts and Nevis", continent: "Amerika", capital: "Basseterre" },
  { code: "vc", indName: "Saint Vincent dan Grenadine", engName: "Saint Vincent and the Grenadines", continent: "Amerika", capital: "Kingstown" },
  { code: "ag", indName: "Antigua dan Barbuda", engName: "Antigua and Barbuda", continent: "Amerika", capital: "St. John's" },
  { code: "bj", indName: "Benin", engName: "Benin", continent: "Afrika", capital: "Porto-Novo" },
  { code: "tg", indName: "Togo", engName: "Togo", continent: "Afrika", capital: "Lome" },
  { code: "bf", indName: "Burkina Faso", engName: "Burkina Faso", continent: "Afrika", capital: "Ouagadougou" },
  { code: "ml", indName: "Mali", engName: "Mali", continent: "Afrika", capital: "Bamako" },
  { code: "ne", indName: "Niger", engName: "Niger", continent: "Afrika", capital: "Niamey" },
  { code: "td", indName: "Chad", engName: "Chad", continent: "Afrika", capital: "N'Djamena" },
  { code: "cf", indName: "Republik Afrika Tengah", engName: "Central African Republic", continent: "Afrika", capital: "Bangui" },
  { code: "cg", indName: "Republik Kongo", engName: "Republic of the Congo", continent: "Afrika", capital: "Brazzaville" },
  { code: "ga", indName: "Gabon", engName: "Gabon", continent: "Afrika", capital: "Libreville" },
  { code: "gq", indName: "Guinea Khatulistiwa", engName: "Equatorial Guinea", continent: "Afrika", capital: "Malabo" },
  { code: "st", indName: "Sao Tome dan Principe", engName: "Sao Tome and Principe", continent: "Afrika", capital: "Sao Tome" },
  { code: "er", indName: "Eritrea", engName: "Eritrea", continent: "Afrika", capital: "Asmara" },
  { code: "ss", indName: "Sudan Selatan", engName: "South Sudan", continent: "Afrika", capital: "Juba" },
  { code: "bi", indName: "Burundi", engName: "Burundi", continent: "Afrika", capital: "Gitega" },
  { code: "rw", indName: "Rwanda", engName: "Rwanda", continent: "Afrika", capital: "Kigali" },
  { code: "mw", indName: "Malawi", engName: "Malawi", continent: "Afrika", capital: "Lilongwe" },
  { code: "zm", indName: "Zambia", engName: "Zambia", continent: "Afrika", capital: "Lusaka" },
  { code: "ao", indName: "Angola", engName: "Angola", continent: "Afrika", capital: "Luanda" },
  { code: "na", indName: "Namibia", engName: "Namibia", continent: "Afrika", capital: "Windhoek" },
  { code: "bw", indName: "Botswana", engName: "Botswana", continent: "Afrika", capital: "Gaborone" },
  { code: "ls", indName: "Lesotho", engName: "Lesotho", continent: "Afrika", capital: "Maseru" },
  { code: "sz", indName: "Eswatini", engName: "Eswatini", continent: "Afrika", capital: "Mbabane" },
  { code: "km", indName: "Komoro", engName: "Comoros", continent: "Afrika", capital: "Moroni" },
  { code: "gn", indName: "Guinea", engName: "Guinea", continent: "Afrika", capital: "Conakry" },
  { code: "lr", indName: "Liberia", engName: "Liberia", continent: "Afrika", capital: "Monrovia" },
  { code: "gm", indName: "Gambia", engName: "Gambia", continent: "Afrika", capital: "Banjul" },
  { code: "gw", indName: "Guinea-Bissau", engName: "Guinea-Bissau", continent: "Afrika", capital: "Bissau" },
  { code: "mh", indName: "Kepulauan Marshall", engName: "Marshall Islands", continent: "Oseania", capital: "Majuro" },
  { code: "fm", indName: "Mikronesia", engName: "Micronesia", continent: "Oseania", capital: "Palikir" },
  { code: "nr", indName: "Nauru", engName: "Nauru", continent: "Oseania", capital: "Yaren" },
  { code: "ws", indName: "Samoa", engName: "Samoa", continent: "Oseania", capital: "Apia" },
  { code: "to", indName: "Tonga", engName: "Tonga", continent: "Oseania", capital: "Nuku'alofa" }
];

// AUDIO SYNTHESIZER (Web Audio API)
const AudioSynth = {
  ctx: null,
  muted: false,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  beep(freq, duration, type = 'sine') {
    if (this.muted) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      
      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio synthesis failed to initialize:", e);
    }
  },

  playStartup() {
    this.beep(523.25, 0.12, 'sine'); // C5
    setTimeout(() => this.beep(659.25, 0.12, 'sine'), 100); // E5
    setTimeout(() => this.beep(783.99, 0.12, 'sine'), 200); // G5
    setTimeout(() => this.beep(1046.50, 0.35, 'sine'), 300); // C6
  },

  playCorrect() {
    this.beep(880, 0.08, 'sine'); // A5
    setTimeout(() => this.beep(1318.51, 0.2, 'sine'), 70); // E6
  },

  playWrong() {
    this.beep(150, 0.25, 'sawtooth'); // Retro buzz sound
  },

  playGameOver() {
    this.beep(330, 0.2, 'triangle'); // E4
    setTimeout(() => this.beep(261.63, 0.2, 'triangle'), 180); // C4
    setTimeout(() => this.beep(196, 0.45, 'triangle'), 360); // G3
  }
};

// GAME STATE
const gameState = {
  score: 0,
  lives: 3,
  level: 1,
  streak: 0,
  activeCountry: null,
  answered: false,
  timer: 15,
  timerInterval: null,
  askedForHint: false,
  difficulty: "normal", // "normal" or "expert"
  hintsLeft: 3, // Max 3 hints per game
  inputMode: "choice", // "choice" or "typing"
  questionType: "country", // "country" (tebak negara), "capital" (tebak ibukota), or "clue" (mode detektif clue)
  currentClueIndex: 1, // 1 to 5 for Mode Detektif Clue
  clues: [] // 5 generated clue strings for current round
};

// RICH ACCURATE COUNTRY FACTS DATABASE (For Mode Detektif Clue)
const COUNTRY_FACTS = {
  id: { food: "Nasi Goreng, Rendang, & Sate", geo: "Negara kepulauan terbesar di dunia di Asia Tenggara, berbatasan darat dengan Malaysia, PNG, & Timor Leste", landmark: "Candi Borobudur, Danau Toba, & Pulau Komodo" },
  my: { food: "Nasi Lemak, Laksa, & Teh Tarik", geo: "Asia Tenggara (Semenanjung & Borneo), berbatasan darat dengan Indonesia, Thailand, & Brunei", landmark: "Menara Kembar Petronas & Batu Caves" },
  sg: { food: "Hainanese Chicken Rice, Chili Crab, & Laksa", geo: "Negara kota pulau di Asia Tenggara di ujung selatan Semenanjung Malaya", landmark: "Patung Merlion, Marina Bay Sands, & Gardens by the Bay" },
  jp: { food: "Sushi, Ramen, & Tempura", geo: "Negara kepulauan di Asia Timur di Samudra Pasifik", landmark: "Gunung Fuji, Kuil Senso-ji, & Menara Tokyo" },
  kr: { food: "Kimchi, Tteokbokki, & Samgyeopsal", geo: "Semenanjung Korea bagian selatan di Asia Timur, berbatasan darat dengan Korea Utara", landmark: "Menara N Seoul, Istana Gyeongbokgung, & Pulau Jeju" },
  cn: { food: "Dim Sum, Bebek Peking, & Mapo Tofu", geo: "Asia Timur, negara terluas di kawasan Asia Timur", landmark: "Tembok Besar Tiongkok (Great Wall) & Kota Terlarang" },
  th: { food: "Tom Yum Goong, Pad Thai, & Mango Sticky Rice", geo: "Asia Tenggara (Negara Gajah Putih), berbatasan dengan Myanmar, Laos, Kamboja, & Malaysia", landmark: "Kuil Wat Arun & Grand Palace Bangkok" },
  vn: { food: "Pho (Mie Sapi), Banh Mi, & Kopi Telur", geo: "Asia Tenggara di Semenanjung Indochina, tetangga Tiongkok, Laos, & Kamboja", landmark: "Teluk Ha Long (Ha Long Bay) & Kota Kuno Hoi An" },
  ph: { food: "Chicken Adobo, Sinigang, & Halo-halo", geo: "Negara kepulauan di Asia Tenggara di Samudra Pasifik", landmark: "Bukit Cokelat (Chocolate Hills) & Teras Sawah Banaue" },
  in: { food: "Nasi Biryani, Chicken Tikka Masala, & Naan", geo: "Asia Selatan di Semenanjung India, berbatasan dengan Pakistan, Tiongkok, & Nepal", landmark: "Taj Mahal di Agra & Sungai Gangga" },
  sa: { food: "Nasi Kabsa, Mandi, & Kurma", geo: "Jazirah Arab terbesar di Asia Barat, berbatasan dengan Yordania, Irak, UEA, & Yaman", landmark: "Ka'bah di Kota Suci Makkah & Masjid Nabawi" },
  tr: { food: "Doner Kebab, Baklava, & Turkish Delight", geo: "Negara Lintas Benua (Asia & Eropa), dipisahkan oleh Selat Bosporus", landmark: "Hagia Sophia, Blue Mosque, & Balon Udara Cappadocia" },
  ru: { food: "Sup Borscht, Beef Stroganoff, & Blini", geo: "Negara terluas di dunia membentang dari Eropa Timur hingga Asia Utara", landmark: "Kremlin Moskow & Katedral Saint Basil" },
  us: { food: "Hamburger, Hot Dog, & Apple Pie", geo: "Amerika Utara, berbatasan darat dengan Kanada di utara & Meksiko di selatan", landmark: "Patung Liberty, Grand Canyon, & Gedung Putih" },
  ca: { food: "Poutine, Sirup Mapel (Maple Syrup), & Butter Tarts", geo: "Amerika Utara, negara terbesar kedua di dunia, berbatasan darat dengan AS", landmark: "Air Terjun Niagara & Taman Nasional Banff" },
  br: { food: "Feijoada, Pao de Queijo, & Churrasco", geo: "Negara terbesar di Amerika Selatan, memiliki Hutan Hujan Amazon", landmark: "Patung Kristus Penebus di Rio de Janeiro & Pantai Copacabana" },
  ar: { food: "Asado (Barbekyu), Empanadas, & Dulce de Leche", geo: "Amerika Selatan bagian selatan, berbatasan dengan Chile, Brasil, & Uruguay", landmark: "Air Terjun Iguazu & Daerah Patagonia" },
  mx: { food: "Tacos, Burritos, & Guacamole", geo: "Amerika Utara, berbatasan darat dengan AS di utara, Guatemala & Belize di selatan", landmark: "Chichen Itza (Piramida Maya) & Zocalo" },
  gb: { food: "Fish and Chips & Afternoon Tea", geo: "Eropa Barat di Kepulauan Britania, berbatasan darat dengan Irlandia", landmark: "Jam Big Ben, Istana Buckingham, & Stonehenge" },
  fr: { food: "Croissant, Baguette, & Escargot", geo: "Eropa Barat, berbatasan darat dengan Jerman, Spanyol, Italia, Belgia, & Swiss", landmark: "Menara Eiffel, Museum Louvre, & Istana Versailles" },
  de: { food: "Bratwurst, Pretzel, & Sauerkraut", geo: "Eropa Tengah, berbatasan dengan 9 negara (termasuk Prancis & Polandia)", landmark: "Gerbang Brandenburg & Kastil Neuschwanstein" },
  it: { food: "Pizza, Pasta, & Gelato", geo: "Eropa Selatan berbentuk seperti sepatu bot di Laut Mediterania", landmark: "Colosseum Roma, Menara Miring Pisa, & Kanal Venesia" },
  es: { food: "Paella, Churros, & Tapas", geo: "Semenanjung Iberia di Eropa Barat, berbatasan dengan Portugal & Prancis", landmark: "Sagrada Familia di Barcelona & Istana Alhambra" },
  nl: { food: "Stroopwafel, Bitterballen, & Keju Gouda", geo: "Eropa Barat, terkenal dengan wilayah di bawah permukaan laut & kincir angin", landmark: "Taman Bunga Keukenhof & Kanal Amsterdam" },
  ch: { food: "Fondue Keju & Cokelat Swiss", geo: "Eropa Tengah di Pegunungan Alpen, berbatasan dengan Jerman, Prancis, Italia, & Austria", landmark: "Puncak Gunung Matterhorn & Pegunungan Alpen" },
  se: { food: "Swedish Meatballs (Kottbullar) & Cinnamon Buns", geo: "Semenanjung Skandinavia di Eropa Utara, tetangga Norwegia & Finlandia", landmark: "Museum Vasa & Istana Stockholm" },
  no: { food: "Rakfisk, Brunost (Keju Cokelat), & Salmon", geo: "Semenanjung Skandinavia di Eropa Utara, terkenal dengan teluk Fjord", landmark: "Geirangerfjord & Aurora Borealis (Cahaya Utara)" },
  fi: { food: "Karjalanpiirakka (Pai Karelia) & Ruisleipa", geo: "Eropa Utara (Negara Seribu Danau), berbatasan dengan Rusia & Swedia", landmark: "Desa Santa Claus di Rovaniemi Lapland" },
  dk: { food: "Smorrebrod (Roti Terbuka) & Danish Pastry", geo: "Semenanjung Jutlandia di Eropa Utara, tetangga Jerman & Swedia", landmark: "Patung Little Mermaid & Taman Tivoli Kopenhagen" },
  be: { food: "Waffle Belgia, Cokelat Belgia, & Frites", geo: "Eropa Barat, markas besar Uni Eropa & NATO, tetangga Prancis, Jerman, & Belanda", landmark: "Atomium Brussels & Grand Place" },
  pt: { food: "Pastel de Nata (Egg Tart) & Bacalhau", geo: "Semenanjung Iberia paling barat di Eropa, berbatasan langsung dengan Spanyol", landmark: "Menara Belem di Lisabon & Istana Pena Sintra" },
  gr: { food: "Moussaka, Souvlaki, & Keju Feta", geo: "Eropa Selatan di Laut Mediterania, asal mula Olimpiade & filsafat Barat", landmark: "Parthenon Acropolis Athena & Rumah Putih Santorini" },
  pl: { food: "Pierogi (Pangsit Polandia) & Kielbasa", geo: "Eropa Tengah, berbatasan dengan Jerman, Ceko, Ukraina, & Laut Baltik", landmark: "Kota Tua Warsawa & Alun-alun Pasar Krakow" },
  at: { food: "Wiener Schnitzel & Sacher Torte", geo: "Eropa Tengah di Pegunungan Alpen, berbatasan dengan Jerman, Swiss, & Italia", landmark: "Istana Schonbrunn Wina & Desa Hallstatt" },
  ie: { food: "Irish Stew & Soda Bread", geo: "Pulau Irlandia di Eropa Barat, berbatasan darat dengan Irlandia Utara (UK)", landmark: "Tebing Moher (Cliffs of Moher) & Kastil Blarney" },
  is: { food: "Hakarl (Hiu Fermentasi) & Skyr", geo: "Negara pulau di Samudra Atlantik Utara, terkenal dengan gunung berapi & gletser", landmark: "Blue Lagoon & Air Terjun Gullfoss" },
  ua: { food: "Sup Borscht, Varenyky, & Chicken Kyiv", geo: "Eropa Timur, berbatasan dengan Rusia, Polandia, Rumania, & Laut Hitam", landmark: "Katedral Saint Sophia di Kyiv" },
  eg: { food: "Koshari, Ful Medames, & Falafel", geo: "Afrika Utara, menghubungkan benua Afrika & Asia lewat Semenanjung Sinai", landmark: "Piramida Giza, Patung Sphinx, & Sungai Nil" },
  za: { food: "Biltong (Dendeng Khas) & Bobotie", geo: "Paling selatan benua Afrika, mengelilingi negara enklave Lesotho", landmark: "Gunung Meja (Table Mountain) Cape Town & Taman Kruger" },
  ma: { food: "Tajine, Couscous, & Teh Mint Maroko", geo: "Afrika Utara, berjarak sangat dekat dari Spanyol dipisahkan Selat Gibraltar", landmark: "Kota Biru Chefchaouen & Pasar Jemaa el-Fnaa" },
  ke: { food: "Ugali, Sukuma Wiki, & Nyama Choma", geo: "Afrika Timur di garis Khatulistiwa, berbatasan dengan Tanzania & Somalia", landmark: "Taman Nasional Maasai Mara & Gunung Kenya" },
  ng: { food: "Jollof Rice, Egusi Soup, & Suya", geo: "Afrika Barat di Teluk Guinea, negara dengan populasi terbesar di Afrika", landmark: "Batu Zuma (Zuma Rock) & Taman Yankari" },
  gh: { food: "Ghana Jollof, Waakye, & Banku", geo: "Afrika Barat di Teluk Guinea, produsen kakao/cokelat terbesar kedua di dunia", landmark: "Kastil Cape Coast & Jembatan Gantung Kakum" },
  au: { food: "Meat Pie, Vegemite, & Lamington", geo: "Benua Oseania, dikelilingi Samudra Hindia & Pasifik (Negara Kanguru)", landmark: "Gedung Opera Sydney & Great Barrier Reef" },
  nz: { food: "Hangi Tradisional, Pavlova, & Domba Panggang", geo: "Negara pulau di Oseania Pasifik Selatan, terdiri dari Pulau Utara & Selatan", landmark: "Desa Hobbiton (Lord of the Rings) & Milford Sound" },
  ae: { food: "Shawarma, Machboos, & Luqaimat", geo: "Jazirah Arab di Teluk Persia, berbatasan dengan Arab Saudi & Oman", landmark: "Gedung Tertinggi Dunia Burj Khalifa & Masjid Sheikh Zayed" },
  pk: { food: "Nihari, Biryani, & Seekh Kebab", geo: "Asia Selatan, berbatasan dengan India, Afganistan, Iran, & Tiongkok", landmark: "Masjid Badshahi Lahore & Pegunungan K2" },
  bd: { food: "Kacchi Biryani & Ikan Hilsa Curry", geo: "Asia Selatan di Teluk Benggala, hampir seluruhnya dikelilingi oleh India", landmark: "Hutan Mangrove Sundarbans (Harimau Benggala)" },
  ir: { food: "Chelow Kebab, Ghormeh Sabzi, & Nasi Safran", geo: "Asia Barat (Persia Kuno), berbatasan dengan Irak, Turki, & Laut Kaspia", landmark: "Reruntuhan Persepolis & Masjid Nasir al-Mulk" },
  iq: { food: "Masgoub (Ikan Bakar) & Kleicha", geo: "Asia Barat di kawasan Mesopotamia Kuno di antara Sungai Eufrat & Tigris", landmark: "Reruntuhan Kota Kuno Babilonia & Ziggurat Ur" },
  kp: { food: "Naengmyeon (Mie Dingin) & Kimchi", geo: "Semenanjung Korea bagian utara di Asia Timur, berbatasan dengan Tiongkok & Korsel", landmark: "Menara Juche & Alun-alun Kim Il-sung Pyongyang" },
  mn: { food: "Buuz (Pangsit Daging) & Khorkhog", geo: "Asia Timur terkurung daratan di antara Rusia & Tiongkok, terkenal dengan padang rumput Steppa", landmark: "Gurun Gobi & Patung Raksasa Genghis Khan" },
  np: { food: "Momo (Pangsit Nepal) & Dal Bhat", geo: "Asia Selatan di Pegunungan Himalaya di antara Tiongkok & India", landmark: "Puncak Gunung Everest & Kuil Pashupatinath" },
  lk: { food: "Kottu Roti, Fish Ambul Thiyal, & Teh Ceylon", geo: "Negara pulau di Samudra Hindia di sebelah selatan India", landmark: "Benteng Batu Sigiriya & Kuil Gigi Suci Kandy" },
  kh: { food: "Amok Ikan (Fish Amok) & Kuy Teav", geo: "Asia Tenggara di Semenanjung Indochina, tetangga Thailand, Laos, & Vietnam", landmark: "Kompleks Candi Angkor Wat" },
  la: { food: "Larb (Cincang Daging Asam) & Sticky Rice", geo: "Satu-satunya negara di Asia Tenggara yang terkurung daratan (landlocked)", landmark: "Kuil Pha That Luang & Air Terjun Kuang Si" },
  mm: { food: "Mohinga (Sup Mie Ikan) & Laphet", geo: "Asia Tenggara di Teluk Benggala, berbatasan dengan Bangladesh, India, Tiongkok, & Thailand", landmark: "Pagoda Shwedagon Yangon & Ribuan Candi Bagan" },
  bn: { food: "Ambuyat (Olahan Sagu) & Nasi Katok", geo: "Asia Tenggara di Pulau Kalimantan/Borneo, dikelilingi oleh wilayah Malaysia", landmark: "Masjid Sultan Omar Ali Saifuddien & Kampung Ayer" },
  kz: { food: "Beshbarmak (Daging & Mie) & Kazy", geo: "Negara terkurung daratan terbesar di dunia di Asia Tengah", landmark: "Menara Bayterek di Astana & Charyn Canyon" },
  va: { food: "Masakan Tradisional Pasta & Espresso", geo: "Negara terkecil di dunia, berada di dalam enklave Kota Roma Italia", landmark: "Basilik Santo Petrus & Kapel Sistina" },
  mc: { food: "Barbajuan (Puff Pastry) & Stocafi", geo: "Negara mikro di Riviera Prancis Eropa Barat di pesisir Laut Mediterania", landmark: "Kasino Monte Carlo & Formula 1 Grand Prix Monaco" },
  cz: { food: "Veprove Koleno & Svickova", geo: "Eropa Tengah, berbatasan dengan Jerman, Austria, Polandia, & Slovakia", landmark: "Jembatan Charles & Kastil Praha" },
  hu: { food: "Goulash (Sup Daging Sapi Daging Asap) & Langos", geo: "Eropa Tengah, dilintasi oleh Sungai Danube", landmark: "Gedung Parlemen Hungaria & Danau Balaton" },
  ro: { food: "Sarmale (Gulungan Daging Daun Kubis) & Mici", geo: "Eropa Timur di pesisir Laut Hitam, wilayah bersejarah Transylvania", landmark: "Kastil Bran (Kastil Dracula) & Istana Bukares" },
  hr: { food: "Peka & Crni Rizot (Risol Cumi Hitam)", geo: "Eropa Selatan di pesisir Laut Adriatik, memiliki ribuan pulau cantik", landmark: "Tembok Kota Kuno Dubrovnik & Danau Plitvice" },
  cu: { food: "Ropa Vieja & Sandwich Kuba", geo: "Negara pulau terbesar di Laut Karibia Amerika Tengah", landmark: "Mobil Klasik Retro & Bangunan Kolonial Habana Vieja" },
  jm: { food: "Jerk Chicken & Ackee and Saltfish", geo: "Negara pulau di Laut Karibia, tanah kelahiran musik Reggae & Bob Marley", landmark: "Museum Bob Marley & Air Terjun Dunn's River" },
  bt: { food: "Ema Datshi (Cabai Olahan Keju) & Phaksha Pa", geo: "Asia Selatan di Pegunungan Himalaya, dikenal mengukur kemajuan dengan 'Kebahagiaan Nasional'", landmark: "Biara Paro Taktsang (Tiger's Nest) di Tebing Karang" },
  mv: { food: "Garudhiya (Sup Ikan) & Bis Keemiya", geo: "Negara kepulauan atol tropis terendah di dunia di Samudra Hindia", landmark: "Resor Bungalow Atas Air & Pantai Pasir Putih" },
  tl: { food: "Batar Da'an (Jagung Rebus) & Ikan Saboko", geo: "Asia Tenggara di bagian timur Pulau Timor, berbatasan darat dengan Indonesia", landmark: "Patung Cristo Rei Dili & Pulau Atauro" }
};

// GENERATE 5 PROGRESSIVE CLUES FOR A COUNTRY
function generateCluesForCountry(country) {
  const code = country.code.toLowerCase();
  const facts = COUNTRY_FACTS[code];
  
  // Clue 1: Food / Unique Culture Trait
  let clue1 = (facts && facts.food) 
    ? `Kuliner Khas: Terkenal dengan masakan khas ${facts.food}.`
    : `Karakteristik Wilayah: Terletak di benua ${country.continent} dan kaya akan budaya lokalnya.`;
    
  // Clue 2: Geography & Bordering Countries / Region
  let clue2 = (facts && facts.geo)
    ? `Geografi & Wilayah: ${facts.geo}.`
    : `Geografi: Berlokasi strategis di kawasan ${country.continent} dengan pesona geografisnya.`;
    
  // Clue 3: Famous Landmark / Unique Culture
  let clue3 = (facts && facts.landmark)
    ? `Landmark & Budaya: Tempat terkenal ${facts.landmark}.`
    : `Keunikan: Negara di ${country.continent} dengan arsitektur & tradisi sejarah yang khas.`;
    
  // Clue 4: Capital City & Name Structure
  const charLength = country.indName.replace(/\s+/g, '').length;
  let clue4 = `Ibu Kota & Nama: Beribu kota di '${country.capital}', nama diawali huruf '${country.indName.charAt(0)}' (${charLength} huruf).`;
  
  // Clue 5: Full Flag Reveal
  let clue5 = `Bendera Resmi: Gambar bendera negara ini telah terbuka penuh di atas!`;
  
  return [clue1, clue2, clue3, clue4, clue5];
}

// UNLOCK NEXT CLUE (MODE DETEKTIF CLUE)
function unlockNextClue() {
  if (gameState.answered || gameState.questionType !== "clue") return;
  if (gameState.currentClueIndex >= 5) return;
  
  gameState.currentClueIndex++;
  AudioSynth.beep(750, 0.06);
  renderClueCards();
  
  // If clue 5 is reached, reveal the flag image!
  if (gameState.currentClueIndex >= 5) {
    document.getElementById("flag-img").style.display = "block";
    document.getElementById("flag-locked-overlay").style.display = "none";
  }
}

// RENDER CLUE CARDS (MODE DETEKTIF CLUE)
function renderClueCards() {
  const container = document.getElementById("clue-cards-list");
  if (!container || !gameState.clues) return;
  container.innerHTML = "";
  
  const baseScore = 50;
  const penaltyPerClue = 10;
  const cluesOpened = gameState.currentClueIndex - 1; // first clue is free
  const currentScore = baseScore - (cluesOpened * penaltyPerClue);
  
  document.getElementById("clue-count-badge").textContent = `${gameState.currentClueIndex}/5`;
  
  const scoreEl = document.getElementById("clue-score-multiplier");
  if (cluesOpened === 0) {
    scoreEl.textContent = `Skor: ${baseScore} Poin`;
    scoreEl.style.color = "#008000";
  } else {
    scoreEl.textContent = `Skor: ${currentScore} Poin (−${cluesOpened * penaltyPerClue} dari ${baseScore})`;
    scoreEl.style.color = currentScore <= 20 ? "#c00000" : "#b8860b";
  }
  
  const titles = [
    "Clue 1: Kuliner & Karakteristik Khas",
    "Clue 2: Geografi & Negara Tetangga",
    "Clue 3: Landmark & Keunikan Budaya",
    "Clue 4: Ibu Kota & Struktur Nama",
    "Clue 5: Gambar Bendera Terbuka"
  ];
  
  gameState.clues.forEach((clueText, idx) => {
    const clueNum = idx + 1;
    const isUnlocked = clueNum <= gameState.currentClueIndex;
    
    const card = document.createElement("div");
    card.className = `clue-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    
    const header = document.createElement("div");
    header.className = "clue-card-header";
    header.innerHTML = `
      <span>${titles[idx]}</span>
      <span class="clue-badge">${isUnlocked ? 'TERBUKA' : 'TERKUNCI'}</span>
    `;
    
    const body = document.createElement("div");
    body.className = "clue-card-body";
    body.style.fontWeight = isUnlocked ? "bold" : "normal";
    body.textContent = isUnlocked ? clueText : "🔒 Clue ini masih terkunci. Klik 'Buka Clue Berikutnya' untuk membuka.";
    
    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });
  
  const unlockBtn = document.getElementById("unlock-clue-btn");
  if (unlockBtn) {
    if (gameState.currentClueIndex >= 5 || gameState.answered) {
      unlockBtn.disabled = true;
      unlockBtn.textContent = "Semua Clue Terbuka — Bendera Terlihat!";
    } else {
      const nextScore = currentScore - penaltyPerClue;
      unlockBtn.disabled = false;
      unlockBtn.textContent = `🔓 Buka Clue ${gameState.currentClueIndex + 1} (Skor: ${currentScore} → ${nextScore} Poin, -${penaltyPerClue})`;
    }
  }
}

// DIFFICULTY CONTROLLER
function setDifficulty(mode) {
  gameState.difficulty = mode;
  AudioSynth.beep(700, 0.05);
  
  const normalMenu = document.getElementById("menu-diff-normal");
  const expertMenu = document.getElementById("menu-diff-expert");
  
  if (mode === "normal") {
    normalMenu.textContent = "✓ Normal Mode";
    expertMenu.textContent = "   Expert Mode";
  } else {
    normalMenu.textContent = "   Normal Mode";
    expertMenu.textContent = "✓ Expert Mode";
  }
  
  // Show notification
  document.getElementById("status-left").textContent = `Kesulitan diubah ke ${mode.toUpperCase()}! Memulai game baru...`;
  
  // Start new game immediately to apply difficulty
  startNewGame();
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  setupWindowDragging();
  setupZIndexControl();
  setupClock();
  setupClickMenus(); // Bind click-toggle behavior for dropdown menus
  
  // Close buttons bindings
  document.querySelectorAll(".win-btn-close").forEach(btn => {
    btn.addEventListener("click", () => {
      AudioSynth.beep(400, 0.05);
    });
  });

  // Setup start menu dismiss when clicked outside
  document.addEventListener("click", (e) => {
    const startMenu = document.getElementById("start-menu");
    const startBtn = document.querySelector(".start-btn");
    if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      startMenu.style.display = "none";
    }
  });

  // Load and render scores initially
  renderHighscores();

  // Bind Enter key on Typing Input
  const textInput = document.getElementById("country-input");
  if (textInput) {
    textInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        submitTypingAnswer();
      }
    });
  }
});

// START NEW GAME
function startNewGame() {
  gameState.score = 0;
  gameState.lives = 3;
  gameState.level = 1;
  gameState.streak = 0;
  gameState.hintsLeft = 3; // Reset hints to 3
  gameState.answered = false;
  gameState.askedForHint = false;
  gameState.currentClueIndex = 1;

  // UI state resetting
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-area").style.display = "flex";
  
  transitionInputUI();
  updateGameUI();
  AudioSynth.playStartup();
  
  // Show game window if minimized
  const gameWin = document.getElementById("game-window");
  gameWin.style.display = "flex";
  bringToFront(gameWin);
  
  nextQuestion();
}

// NEXT QUESTION
function nextQuestion() {
  if (gameState.lives <= 0) return;
  
  gameState.answered = false;
  gameState.askedForHint = false;
  gameState.currentClueIndex = 1;
  setSmileyFace("🙂"); // Reset Minesweeper smiley back to normal
  transitionInputUI();
  updateGameUI(); // Sync HUD state
  
  // Reset buttons
  const options = document.getElementById("options-container");
  options.innerHTML = "";
  
  // Select active country (Expert Mode prioritizes rare/hard flags, Normal Mode scales with level)
  const prevCountry = gameState.activeCountry;
  const commonCountries = COUNTRY_DATABASE.slice(0, 85);
  const rareCountries = COUNTRY_DATABASE.slice(85);
  
  let pool = COUNTRY_DATABASE;
  if (gameState.difficulty === "expert") {
    // Expert Mode: 85% chance to draw from obscure/rare countries
    pool = Math.random() < 0.85 ? rareCountries : COUNTRY_DATABASE;
  } else {
    // Normal Mode: Level 1-2 uses common flags, level 3-5 mixes 75% common, level 6+ full database
    if (gameState.level <= 2) {
      pool = commonCountries;
    } else if (gameState.level <= 5) {
      pool = Math.random() < 0.75 ? commonCountries : rareCountries;
    }
  }
  
  let targetCountry;
  let attempts = 0;
  do {
    targetCountry = pool[Math.floor(Math.random() * pool.length)];
    attempts++;
  } while (prevCountry && targetCountry.code === prevCountry.code && attempts < 20);
  
  gameState.activeCountry = targetCountry;
  gameState.clues = generateCluesForCountry(targetCountry);
  
  // Load flag image using jsdelivr (using SVG from the flag-icons library for better reliability)
  const flagImg = document.getElementById("flag-img");
  flagImg.src = `https://cdn.jsdelivr.net/npm/flag-icons/flags/4x3/${targetCountry.code}.svg`;
  
  const flagOverlay = document.getElementById("flag-locked-overlay");
  const clueContainer = document.getElementById("clue-mode-container");
  
  if (gameState.questionType === "clue") {
    clueContainer.style.display = "flex";
    flagImg.style.display = "none";
    flagOverlay.style.display = "flex";
    renderClueCards();
  } else {
    clueContainer.style.display = "none";
    flagImg.style.display = "block";
    flagOverlay.style.display = "none";
  }
  
  // Update status bar left
  document.getElementById("status-left").textContent = gameState.questionType === "clue" ? "Detektif Clue: Menebak negara..." : "Menebak negara...";
  
  // Generate option choices (1 correct, 3 distractors)
  const distractors = [];
  
  // Expert Mode: Choose distractors from the SAME continent to make option elimination harder
  let candidatePool = COUNTRY_DATABASE;
  if (gameState.difficulty === "expert") {
    const targetContinent = targetCountry.continent;
    const sameContinentCountries = COUNTRY_DATABASE.filter(c => c.continent === targetContinent && c.code !== targetCountry.code);
    
    // We need at least 3 distractors from the same continent
    if (sameContinentCountries.length >= 3) {
      candidatePool = sameContinentCountries;
    }
  }
  
  while (distractors.length < 3) {
    const randomCountry = candidatePool[Math.floor(Math.random() * candidatePool.length)];
    if (randomCountry.code !== targetCountry.code && !distractors.some(d => d.code === randomCountry.code)) {
      distractors.push(randomCountry);
    }
  }
  
  const choices = [targetCountry, ...distractors];
  shuffleArray(choices);
  
  choices.forEach(country => {
    const btn = document.createElement("button");
    btn.className = "btn-98 btn-option";
    btn.dataset.code = country.code; // Bind code to dataset for robust correct-answer check
    
    if (gameState.questionType === "capital") {
      // Capital mode displays capital cities on the buttons
      btn.innerHTML = country.capital;
    } else {
      // Country mode displays standard name
      btn.innerHTML = `${country.indName}<br><span style="font-size: 9px; font-weight: normal; color: #555;">(${country.engName})</span>`;
    }
    
    btn.onclick = () => selectOption(country.code, btn);
    options.appendChild(btn);
  });
  
  // Start or reset Timer
  resetTimer();
  
  // Prompt Clippy every few rounds or randomly
  if (Math.random() > 0.6) {
    triggerClippyGreetings();
  } else {
    hideClippyBubble();
  }
}

// SELECT OPTION
function selectOption(countryCode, buttonElement) {
  if (gameState.answered) return;
  gameState.answered = true;
  clearInterval(gameState.timerInterval);
  updateGameUI(); // Disable hint button immediately
  updateGameUI(); // Disable hint button immediately
  
  const targetCode = gameState.activeCountry.code;
  const optionButtons = document.querySelectorAll(".btn-option");
  
  if (countryCode === targetCode) {
    // Correct Choice
    setSmileyFace("😎"); // Cool sunglasses smiley
    buttonElement.classList.add("btn-correct");
    AudioSynth.playCorrect();
    
    gameState.streak++;
    let basePoints = (gameState.level * 10);
    if (gameState.questionType === "clue") {
      const clueScores = { 1: 50, 2: 40, 3: 30, 4: 20, 5: 10 };
      basePoints = clueScores[gameState.currentClueIndex] || 10;
      // Reveal flag image on correct guess
      document.getElementById("flag-img").style.display = "block";
      document.getElementById("flag-locked-overlay").style.display = "none";
    }
    const scoreGain = basePoints + (gameState.streak * 2);
    gameState.score += scoreGain;
    
    document.getElementById("status-left").textContent = `Benar! +${scoreGain} poin`;
    
    // Level Up every 3 correct answers in a row (refills assistant hint easier!)
    if (gameState.streak > 0 && gameState.streak % 3 === 0) {
      gameState.level++;
      
      // Bonus hint on level up (max 3)
      const oldHints = gameState.hintsLeft;
      gameState.hintsLeft = Math.min(3, gameState.hintsLeft + 1);
      let statusText = `Level Up! Sekarang Level ${gameState.level}`;
      if (gameState.hintsLeft > oldHints) {
        statusText += ` (Bonus +1 Bantuan!)`;
      }
      document.getElementById("status-left").textContent = statusText;
      AudioSynth.beep(1200, 0.35, 'sine');
    }
    
    setTimeout(() => {
      updateGameUI();
      nextQuestion();
    }, 1200);
    
  } else {
    // Wrong Choice
    setSmileyFace("🙁"); // Sad smiley
    buttonElement.classList.add("btn-wrong");
    AudioSynth.playWrong();
    
    // Show correct button as hint using dataset.code matching (handles both country and capital text)
    optionButtons.forEach(btn => {
      if (btn.dataset.code === targetCode) {
        btn.classList.add("btn-correct");
      }
    });
    
    gameState.lives--;
    gameState.streak = 0;
    
    if (gameState.questionType === "capital") {
      document.getElementById("status-left").textContent = `Salah! Ibu kota: ${gameState.activeCountry.capital} (${gameState.activeCountry.indName})`;
    } else {
      document.getElementById("status-left").textContent = `Salah! Jawaban: ${gameState.activeCountry.indName}`;
    }
    
    setTimeout(() => {
      updateGameUI();
      if (gameState.lives <= 0) {
        triggerGameOver();
      } else {
        nextQuestion();
      }
    }, 1600);
  }
}

// TIMER FUNCTIONALITY
function resetTimer() {
  clearInterval(gameState.timerInterval);
  // Mode Detektif Clue gives 20 seconds reading time (down to 12s min). Other modes use standard timer.
  if (gameState.questionType === "clue") {
    if (gameState.difficulty === "expert") {
      gameState.timer = Math.max(10, 16 - gameState.level);
    } else {
      gameState.timer = Math.max(12, 21 - gameState.level);
    }
  } else if (gameState.difficulty === "expert") {
    gameState.timer = Math.max(5, 11 - gameState.level);
  } else {
    gameState.timer = Math.max(8, 16 - gameState.level);
  }
  
  const timerField = document.getElementById("status-time");
  timerField.textContent = String(gameState.timer).padStart(3, '0');
  
  gameState.timerInterval = setInterval(() => {
    gameState.timer--;
    timerField.textContent = String(gameState.timer).padStart(3, '0');
    
    if (gameState.timer <= 3 && gameState.timer > 0) {
      AudioSynth.beep(880, 0.04); // Warning Beep
      setSmileyFace("😮"); // Scared/Warning smiley!
    }
    
    if (gameState.timer <= 0) {
      clearInterval(gameState.timerInterval);
      handleTimeout();
    }
  }, 1000);
}

// TIMEOUT HANDLING
function handleTimeout() {
  gameState.answered = true;
  setSmileyFace("🙁"); // Sad smiley on timeout
  updateGameUI(); // Disable hint button immediately
  AudioSynth.playWrong();
  
  // Highlight correct country in Choice mode using dataset.code matching
  if (gameState.inputMode === "choice") {
    const optionButtons = document.querySelectorAll(".btn-option");
    optionButtons.forEach(btn => {
      if (btn.dataset.code === gameState.activeCountry.code) {
        btn.classList.add("btn-correct");
      } else {
        btn.disabled = true;
      }
    });
  } else {
    // Show correct answer in Text box based on question type
    const textInput = document.getElementById("country-input");
    textInput.disabled = true;
    
    if (gameState.questionType === "capital") {
      textInput.value = `${gameState.activeCountry.capital} (${gameState.activeCountry.indName})`;
    } else {
      textInput.value = `${gameState.activeCountry.indName} (${gameState.activeCountry.engName})`;
    }
    
    textInput.style.backgroundColor = "#f5c6cb";
    textInput.style.borderColor = "red";
    document.getElementById("submit-typing-btn").disabled = true;
  }
  
  gameState.lives--;
  gameState.streak = 0;
  
  document.getElementById("status-left").textContent = "Waktu Habis!";
  
  setTimeout(() => {
    if (gameState.inputMode === "typing") {
      const textInput = document.getElementById("country-input");
      textInput.style.backgroundColor = "#ffffff";
      textInput.style.borderColor = "";
    }
    updateGameUI();
    if (gameState.lives <= 0) {
      triggerGameOver();
    } else {
      nextQuestion();
    }
  }, 2000);
}

// UPDATE GAME BOARD HUD
function updateGameUI() {
  // Format score padded to 3 digits (Minesweeper LCD style)
  document.getElementById("info-score").textContent = String(gameState.score).padStart(3, '0');
  
  // Format level prepended with L and padded to 2 digits (e.g. L01, L02)
  document.getElementById("info-level").textContent = `L${String(gameState.level).padStart(2, '0')}`;
  
  document.getElementById("status-streak").textContent = `Streak: ${gameState.streak}`;
  
  // Heart icons for lives
  let livesText = "";
  for (let i = 0; i < 3; i++) {
    livesText += (i < gameState.lives) ? "❤" : "🖤";
  }
  document.getElementById("lives-display").textContent = livesText;

  // Hint button remaining count text & disable states
  const hintBtn = document.getElementById("clippy-hint-btn");
  if (hintBtn) {
    hintBtn.textContent = `Tanya Asisten (${gameState.hintsLeft})`;
    if (gameState.hintsLeft <= 0 || gameState.answered || !gameState.activeCountry) {
      hintBtn.disabled = true;
    } else {
      hintBtn.disabled = false;
    }
  }
}

// GAME OVER CONTROLLER
function triggerGameOver() {
  clearInterval(gameState.timerInterval);
  AudioSynth.playGameOver();
  setSmileyFace("😵"); // Dead eyes smiley face
  
  // Hide other screens
  document.getElementById("game-area").style.display = "none";
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("highscore-screen").style.display = "none";
  document.getElementById("about-screen").style.display = "none";
  
  // Show gameover screen panel
  document.getElementById("gameover-screen").style.display = "flex";
  document.getElementById("gameover-final-score").textContent = gameState.score;
}

function submitHighScore() {
  const nameInput = document.getElementById("player-name-input");
  const playerName = nameInput.value.trim() || "Anonymous";
  
  const highscores = JSON.parse(localStorage.getItem("tebak_negara_scores")) || [];
  highscores.push({
    name: playerName,
    score: gameState.score,
    streak: gameState.streak,
    date: new Date().toLocaleDateString()
  });
  
  // Sort descending
  highscores.sort((a, b) => b.score - a.score);
  // Keep top 10
  localStorage.setItem("tebak_negara_scores", JSON.stringify(highscores.slice(0, 10)));
  
  closeGameOverDialog();
  renderHighscores();
  openWindow("highscore-window");
}

function closeGameOverDialog() {
  document.getElementById("gameover-screen").style.display = "none";
  resetToSetup();
}

// RENDER HIGH SCORES
function renderHighscores() {
  const highscores = JSON.parse(localStorage.getItem("tebak_negara_scores")) || [
    { name: "Suharto98", score: 150, streak: 8 },
    { name: "Megawati", score: 100, streak: 5 },
    { name: "Habibie", score: 80, streak: 4 }
  ];
  
  const tableBody = document.getElementById("highscore-body");
  tableBody.innerHTML = "";
  
  highscores.forEach((entry, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${idx + 1}</td>
      <td style="font-weight: bold;">${entry.name}</td>
      <td>${entry.score}</td>
      <td>${entry.streak}</td>
    `;
    tableBody.appendChild(row);
  });
}

function clearHighscores() {
  showCustomConfirm("Apakah Anda yakin ingin menghapus semua skor tinggi? Tindakan ini tidak dapat dibatalkan.", () => {
    localStorage.removeItem("tebak_negara_scores");
    renderHighscores();
    AudioSynth.beep(200, 0.1, 'sine');
  }, () => {}, "Reset High Scores");
}

// CLIPPY HINT SYSTEM
function toggleClippySpeech() {
  const avatar = document.getElementById("clippy-avatar");
  avatar.classList.add("wiggle");
  setTimeout(() => avatar.classList.remove("wiggle"), 500);
  
  const bubble = document.getElementById("clippy-bubble");
  if (bubble.style.display === "block") {
    bubble.style.display = "none";
  } else {
    AudioSynth.beep(900, 0.05, 'sine');
    triggerClippyGreetings();
  }
}

function triggerClippyGreetings() {
  const bubble = document.getElementById("clippy-bubble");
  const text = document.getElementById("clippy-text");
  
  if (!gameState.activeCountry || gameState.answered) {
    text.innerHTML = "Halo! Aku Clippy. Mau main game Tebak Negara 98? Klik <b>Mulai Game</b> di window sebelah kiri ya!";
    document.querySelector(".clippy-actions").style.display = "none";
  } else if (gameState.hintsLeft <= 0) {
    text.innerHTML = "Maaf, jatah bantuanmu sudah habis. Ayo jawab sendiri, kamu pasti bisa!";
    document.querySelector(".clippy-actions").style.display = "none";
  } else {
    if (gameState.difficulty === "expert") {
      text.innerHTML = "It looks like you're trying to guess a country! Di Expert Mode, minta petunjuk bakal **potong skor -20 poin**. Mau?";
    } else {
      text.innerHTML = "It looks like you're trying to guess a country! Mau aku kasih bocoran petunjuk dikit?";
    }
    document.querySelector(".clippy-actions").style.display = "flex";
  }
  bubble.style.display = "block";
}

function triggerClippyHint() {
  if (gameState.answered || !gameState.activeCountry) return;
  AudioSynth.beep(800, 0.05);
  getHintFromClippy();
}

function getHintFromClippy() {
  if (!gameState.activeCountry) return;
  if (gameState.hintsLeft <= 0) {
    const bubble = document.getElementById("clippy-bubble");
    const text = document.getElementById("clippy-text");
    text.innerHTML = "Maaf, sisa kuota bantuanmu sudah habis!";
    bubble.style.display = "block";
    return;
  }
  
  // Decrement hints count
  gameState.hintsLeft--;
  setSmileyFace("😮"); // Talking clippy surprised face
  updateGameUI();
  
  // Deduct points on Expert Mode
  if (gameState.difficulty === "expert") {
    gameState.score = Math.max(0, gameState.score - 20);
    updateGameUI();
    document.getElementById("status-left").textContent = "Hint digunakan! Skor -20";
    AudioSynth.beep(200, 0.2, 'sawtooth'); // Deduct beep sound
  }

  const avatar = document.getElementById("clippy-avatar");
  avatar.classList.add("wiggle");
  setTimeout(() => avatar.classList.remove("wiggle"), 500);
  
  const bubble = document.getElementById("clippy-bubble");
  const text = document.getElementById("clippy-text");
  const country = gameState.activeCountry;
  
  // Randomly generate 1 of 4 hints
  const hintType = Math.floor(Math.random() * 4);
  let hintMsg = "";
  
  if (gameState.questionType === "capital") {
    switch(hintType) {
      case 0:
        hintMsg = `Negara pemilik bendera ini adalah <b>${country.indName}</b>!`;
        break;
      case 1:
        hintMsg = `Negara ini berlokasi di benua <b>${country.continent}</b>!`;
        break;
      case 2:
        hintMsg = `Nama ibu kotanya berawalan huruf <b>'${country.capital.charAt(0)}'</b>.`;
        break;
      default:
        hintMsg = `Ibu kota ini memiliki nama sepanjang <b>${country.capital.replace(/\s+/g, '').length} huruf</b>.`;
        break;
    }
  } else {
    switch(hintType) {
      case 0:
        hintMsg = `Psst! Negara ini beribu kota di <b>${country.capital}</b>. Gampang kan?`;
        break;
      case 1:
        hintMsg = `Aku cek di peta, negara ini berlokasi di benua <b>${country.continent}</b>!`;
        break;
      case 2:
        hintMsg = `Huruf pertama nama negaranya adalah <b>'${country.indName.charAt(0)}'</b>.`;
        break;
      default:
        hintMsg = `Namanya terdiri dari <b>${country.indName.replace(/\s+/g, '').length} huruf</b>. Jangan sampai salah klik ya!`;
        break;
    }
  }
  
  text.innerHTML = hintMsg;
  document.querySelector(".clippy-actions").style.display = "none"; // Hide button actions after hint is given
  bubble.style.display = "block";
  gameState.askedForHint = true;
}

function hideClippyBubble() {
  document.getElementById("clippy-bubble").style.display = "none";
}

// WINDOW DRAGGING ENGINE
function setupWindowDragging() {
  const windows = document.querySelectorAll(".window");
  
  windows.forEach(win => {
    if (win.id === "game-window" || win.id === "custom-dialog-window") return; // Ignore main and custom dialog
    const titleBar = win.querySelector(".title-bar");
    if (!titleBar) return;
    
    titleBar.addEventListener("mousedown", dragStart);
    
    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    function dragStart(e) {
      bringToFront(win);
      
      // Ensure we don't start dragging when clicking the window buttons
      if (e.target.classList.contains("win-btn")) return;
      
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
      
      active = true;
      win.classList.add("dragging");
      
      document.addEventListener("mousemove", drag);
      document.addEventListener("mouseup", dragEnd);
    }
    
    function drag(e) {
      if (!active) return;
      e.preventDefault();
      
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      
      xOffset = currentX;
      yOffset = currentY;
      
      // Boundaries check to keep titlebar accessible
      const boundedY = Math.max(0, Math.min(currentY, window.innerHeight - 80));
      const boundedX = Math.max(-win.offsetWidth + 100, Math.min(currentX, window.innerWidth - 100));
      
      setTranslate(boundedX, boundedY, win);
    }
    
    function dragEnd() {
      active = false;
      win.classList.remove("dragging");
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", dragEnd);
    }
  });
}

function setTranslate(xPos, yPos, el) {
  // Directly manipulate style top/left for perfect Windows emulating coordinates
  el.style.left = `${el.offsetLeft + xPos}px`;
  el.style.top = `${el.offsetTop + yPos}px`;
  
  // Reset translate variables so next drag calculation starts fresh
  el.style.transform = "none";
}

// WINDOW FOCUS ENGINE
function setupZIndexControl() {
  const windows = document.querySelectorAll(".window");
  windows.forEach(win => {
    if (win.id === "custom-dialog-window") return;
    win.addEventListener("mousedown", () => {
      bringToFront(win);
    });
  });
}

function bringToFront(activeWin) {
  const windows = document.querySelectorAll(".window");
  
  // Make all windows look inactive
  windows.forEach(win => {
    if (win.id === "custom-dialog-window") return;
    win.classList.add("inactive");
    win.style.zIndex = "10";
  });
  
  // Activate selected window
  activeWin.classList.remove("inactive");
  activeWin.style.zIndex = "25";
  
  // Sync Taskbar button look
  const taskGameBtn = document.getElementById("taskbar-game-btn");
  if (activeWin.id === "game-window") {
    taskGameBtn.classList.add("active");
  } else {
    taskGameBtn.classList.remove("active");
  }
}

// WINDOW UI OPERATIONS (Min, Max, Close)
function openWindow(id) {
  AudioSynth.beep(600, 0.05);
  
  if (id === "highscore-window") {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("about-screen").style.display = "none";
    document.getElementById("gameover-screen").style.display = "none";
    document.getElementById("highscore-screen").style.display = "flex";
    renderHighscores();
  } else if (id === "about-window") {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("highscore-screen").style.display = "none";
    document.getElementById("gameover-screen").style.display = "none";
    document.getElementById("about-screen").style.display = "flex";
  } else {
    const win = document.getElementById(id);
    if (win) {
      win.style.display = "flex";
      bringToFront(win);
    }
  }
  
  // Sync Taskbar icon if it's the game window
  if (id === "game-window") {
    document.getElementById("taskbar-game-btn").style.display = "flex";
  }
}

function closeWindow(id) {
  if (id === "highscore-window" || id === "about-window" || id === "gameover-window") {
    resetToSetup();
  } else {
    const win = document.getElementById(id);
    if (win) win.style.display = "none";
    
    // Sync Taskbar icon
    if (id === "game-window") {
      document.getElementById("taskbar-game-btn").style.display = "none";
      clearInterval(gameState.timerInterval);
    }
  }
}

function minimizeWindow(id) {
  AudioSynth.beep(300, 0.05);
  const win = document.getElementById(id);
  win.style.display = "none";
  
  // Keep taskbar representation, but set inactive
  if (id === "game-window") {
    document.getElementById("taskbar-game-btn").classList.remove("active");
  }
}

function toggleMinimizeFromTaskbar(id) {
  const win = document.getElementById(id);
  const taskBtn = document.getElementById("taskbar-game-btn");
  
  if (win.style.display === "none" || win.classList.contains("inactive")) {
    win.style.display = "flex";
    bringToFront(win);
  } else {
    minimizeWindow(id);
  }
}

// HELP POPUP
function showHelp() {
  showCustomAlert(
    "<b>Petunjuk Permainan Tebak Negara:</b><br><br>" +
    "1. Sebuah bendera akan ditampilkan pada layar.<br>" +
    "2. Pilih satu dari 4 opsi jawaban, atau ketik nama negaranya/ibukotanya.<br>" +
    "3. Anda memiliki waktu terbatas pada setiap giliran.<br>" +
    "4. Kesalahan menjawab mengurangi nyawa (total 3 nyawa).<br>" +
    "5. Setiap 3 jawaban benar berurutan (streak) menaikkan level & menambah jatah bantuan.<br>" +
    "6. Klik tombol 'Tanya Asisten' jika bingung!",
    "Bantuan - Tebak Negara"
  );
}

// UTILITIES
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// SYSTEM TRAY CLOCK AND START MENU TOGGLE
function setupClock() {
  const clockEl = document.getElementById("systray-clock");
  
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    clockEl.textContent = `${hours}:${minutes} ${ampm}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
}

function toggleStartMenu() {
  AudioSynth.beep(600, 0.04);
  const menu = document.getElementById("start-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleMute() {
  AudioSynth.muted = !AudioSynth.muted;
  
  const checkbox = document.getElementById("sound-checkbox");
  const menuBtn = document.getElementById("menu-mute-btn");
  const soundIcon = document.getElementById("systray-sound-icon");
  const waves1 = document.getElementById("sound-wave-1");
  const waves2 = document.getElementById("sound-wave-2");
  
  checkbox.checked = !AudioSynth.muted;
  menuBtn.textContent = AudioSynth.muted ? "Unmute Sounds" : "Mute Sounds";
  
  if (AudioSynth.muted) {
    waves1.style.opacity = "0.2";
    waves2.style.opacity = "0.2";
  } else {
    waves1.style.opacity = "1";
    waves2.style.opacity = "1";
    AudioSynth.beep(800, 0.05);
  }
}

function toggleMuteCheckbox() {
  const checkbox = document.getElementById("sound-checkbox");
  checkbox.checked = !checkbox.checked;
  toggleMute();
}

function selectDesktopIcon(element) {
  document.querySelectorAll(".desktop-icon").forEach(icon => {
    icon.classList.remove("selected");
  });
  element.classList.add("selected");
  AudioSynth.beep(500, 0.03);
}

// INPUT MODE CONTROLLER (Pilihan Ganda vs Tebak Ketik)
function setInputMode(mode) {
  gameState.inputMode = mode;
  AudioSynth.beep(700, 0.05);
  
  const choiceMenu = document.getElementById("menu-mode-choice");
  const typingMenu = document.getElementById("menu-mode-typing");
  
  if (mode === "choice") {
    choiceMenu.textContent = "✓ Pilihan Ganda";
    typingMenu.textContent = "   Tebak Ketik";
  } else {
    choiceMenu.textContent = "   Pilihan Ganda";
    typingMenu.textContent = "✓ Tebak Ketik";
  }
  
  document.getElementById("status-left").textContent = `Mode diubah ke ${mode === 'choice' ? 'PILIHAN GANDA' : 'TEBAK KETIK'}!`;
  
  // Transition views immediately
  transitionInputUI();
  
  // Start new game to apply changes
  startNewGame();
}

function transitionInputUI() {
  const choiceContainer = document.getElementById("options-container");
  const typingContainer = document.getElementById("typing-container");
  const textInput = document.getElementById("country-input");
  const submitBtn = document.getElementById("submit-typing-btn");
  const labelInput = document.querySelector("label[for='country-input']");
  
  // Update label based on question type
  if (labelInput) {
    labelInput.textContent = gameState.questionType === "capital" ? "Tulis Nama Ibu Kota:" : "Tulis Nama Negara:";
  }
  
  if (gameState.inputMode === "choice") {
    choiceContainer.style.display = "grid";
    typingContainer.style.display = "none";
  } else {
    choiceContainer.style.display = "none";
    typingContainer.style.display = "flex";
    
    // Reset and focus input text box
    if (textInput) {
      textInput.value = "";
      textInput.disabled = false;
      textInput.style.backgroundColor = "#ffffff";
      textInput.style.borderColor = "";
      
      // Auto focus on next tick so rendering catches up
      setTimeout(() => textInput.focus(), 50);
    }
    if (submitBtn) {
      submitBtn.disabled = false;
    }
  }
}

// TYPING SUBMIT ANSWER HANDLER
function submitTypingAnswer() {
  if (gameState.answered || !gameState.activeCountry) return;
  
  const textInput = document.getElementById("country-input");
  const submitBtn = document.getElementById("submit-typing-btn");
  const typedAnswer = textInput.value.trim();
  
  if (!typedAnswer) {
    textInput.focus();
    return;
  }
  
  gameState.answered = true;
  clearInterval(gameState.timerInterval);
  textInput.disabled = true;
  submitBtn.disabled = true;
  
  const targetCountry = gameState.activeCountry;
  
  // Decide verification engine based on question type
  const isCorrect = gameState.questionType === "capital" 
    ? isCapitalAnswerSimilar(typedAnswer, targetCountry)
    : isAnswerSimilar(typedAnswer, targetCountry);
  
  if (isCorrect) {
    // Correct
    setSmileyFace("😎"); // Sunglasses smiley
    textInput.style.backgroundColor = "#c3e6cb"; // light green
    textInput.style.borderColor = "green";
    AudioSynth.playCorrect();
    
    gameState.streak++;
    let basePoints = (gameState.level * 10);
    if (gameState.questionType === "clue") {
      const clueScores = { 1: 50, 2: 40, 3: 30, 4: 20, 5: 10 };
      basePoints = clueScores[gameState.currentClueIndex] || 10;
      // Reveal flag image on correct guess
      document.getElementById("flag-img").style.display = "block";
      document.getElementById("flag-locked-overlay").style.display = "none";
    }
    const scoreGain = basePoints + (gameState.streak * 2);
    gameState.score += scoreGain;
    
    document.getElementById("status-left").textContent = `Benar! +${scoreGain} poin`;
    
    // Level Up every 3 correct answers in a row (refills assistant hint easier!)
    if (gameState.streak > 0 && gameState.streak % 3 === 0) {
      gameState.level++;
      
      // Bonus hint on level up (max 3)
      const oldHints = gameState.hintsLeft;
      gameState.hintsLeft = Math.min(3, gameState.hintsLeft + 1);
      let statusText = `Level Up! Sekarang Level ${gameState.level}`;
      if (gameState.hintsLeft > oldHints) {
        statusText += ` (Bonus +1 Bantuan!)`;
      }
      document.getElementById("status-left").textContent = statusText;
      AudioSynth.beep(1200, 0.35, 'sine');
    }
    
    setTimeout(() => {
      textInput.style.backgroundColor = "#ffffff";
      textInput.style.borderColor = "";
      updateGameUI();
      nextQuestion();
    }, 1500);
    
  } else {
    // Wrong
    setSmileyFace("🙁"); // Sad face
    textInput.style.backgroundColor = "#f5c6cb"; // light red
    textInput.style.borderColor = "red";
    AudioSynth.playWrong();
    
    gameState.lives--;
    gameState.streak = 0;
    
    if (gameState.questionType === "capital") {
      document.getElementById("status-left").textContent = `Salah! Ibu kota: ${targetCountry.capital} (${targetCountry.indName})`;
      textInput.value = `${targetCountry.capital} (${targetCountry.indName})`;
    } else {
      document.getElementById("status-left").textContent = `Salah! Jawaban: ${targetCountry.indName} (${targetCountry.engName})`;
      textInput.value = `${targetCountry.indName} (${targetCountry.engName})`;
    }
    
    setTimeout(() => {
      textInput.style.backgroundColor = "#ffffff";
      textInput.style.borderColor = "";
      updateGameUI();
      if (gameState.lives <= 0) {
        triggerGameOver();
      } else {
        nextQuestion();
      }
    }, 2200);
  }
}

// ALIASES MAP FOR POPULAR TYPING ANSWERS
function getCustomAliases(code) {
  const aliasMap = {
    us: ["usa", "us", "amerika serikat", "amerika", "america", "as", "united states of america"],
    gb: ["uk", "inggris", "united kingdom", "great britain", "britania raya"],
    ae: ["uae", "uea", "uni emirat arab", "emirat arab"],
    kr: ["korea selatan", "korsel", "south korea"],
    kp: ["korea utara", "korut", "north korea"],
    cn: ["tiongkok", "china", "cina", "republic of china"],
    tl: ["timor leste", "timor", "east timor"],
    nz: ["selandia baru", "new zealand"],
    sa: ["arab saudi", "saudi arabia", "saudi"],
    za: ["afrika selatan", "south africa"],
    pg: ["papua nugini", "papua new guinea", "png"]
  };
  return aliasMap[code.toLowerCase()] || [];
}

// LEVENSHTEIN DISTANCE ALGORITHM
function getLevenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// FUZZY MATCH COMPILER
function isAnswerSimilar(typedStr, countryObj) {
  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
  const cleanTyped = clean(typedStr);
  
  if (!cleanTyped) return false;
  
  // Match targets: Indonesian name, English name, and custom aliases
  const targets = [
    clean(countryObj.indName),
    clean(countryObj.engName),
    ...getCustomAliases(countryObj.code).map(alias => clean(alias))
  ];
  
  for (const target of targets) {
    if (cleanTyped === target) return true;
    
    // Levenshtein check for strings with length >= 4
    if (cleanTyped.length >= 4 && target.length >= 4) {
      const distance = getLevenshteinDistance(cleanTyped, target);
      // Allow 1 typo for 4-7 length, 2 typos for 8-11, 3 typos for 12+
      const maxAllowed = Math.min(3, Math.floor(Math.max(cleanTyped.length, target.length) / 4));
      if (distance <= maxAllowed) {
        return true;
      }
    }
  }
  
  return false;
}

// QUESTION TYPE CONTROLLER (Tebak Negara vs Tebak Ibu Kota)
function setQuestionType(type) {
  gameState.questionType = type;
  AudioSynth.beep(700, 0.05);
  
  const countryMenu = document.getElementById("menu-qtype-country");
  const capitalMenu = document.getElementById("menu-qtype-capital");
  
  if (type === "country") {
    countryMenu.textContent = "✓ Tebak Negara";
    capitalMenu.textContent = "   Tebak Ibu Kota";
  } else {
    countryMenu.textContent = "   Tebak Negara";
    capitalMenu.textContent = "✓ Tebak Ibu Kota";
  }
  
  document.getElementById("status-left").textContent = `Tipe pertanyaan diubah ke ${type === 'country' ? 'TEBAK NEGARA' : 'TEBAK IBU KOTA'}!`;
  
  // Transition UI labels
  transitionInputUI();
  
  // Start new game to apply changes
  startNewGame();
}

// FUZZY MATCH COMPILER FOR CAPITAL CITIES
function isCapitalAnswerSimilar(typedStr, countryObj) {
  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
  const cleanTyped = clean(typedStr);
  
  if (!cleanTyped) return false;
  
  const cleanTarget = clean(countryObj.capital);
  
  // 1. Exact match
  if (cleanTyped === cleanTarget) return true;
  
  // 2. Custom aliases map for popular or complex capital city names
  const capitalAliases = {
    "washington, d.c.": ["washington", "washington dc", "dc"],
    "bandar seri begawan": ["bandar seri begawan", "bsb", "brunei", "brunei city"],
    "sri jayawardenepura kotte": ["kotte", "sri jayawardenepura", "colombo", "kolombo"],
    "santiago": ["santiago", "santiago de chile"],
    "mexico city": ["meksiko", "mexico", "mexico df", "ciudad de mexico"],
    "kuala lumpur": ["kl", "kuala lumpur"],
    "singapura": ["singapura", "singapore"]
  };
  
  const targetLower = countryObj.capital.toLowerCase();
  if (capitalAliases[targetLower]) {
    for (const alias of capitalAliases[targetLower]) {
      if (cleanTyped === clean(alias)) return true;
    }
  }
  
  // 3. Levenshtein check (strict threshold for capitals since names are usually shorter)
  if (cleanTyped.length >= 4 && cleanTarget.length >= 4) {
    const distance = getLevenshteinDistance(cleanTyped, cleanTarget);
    const maxAllowed = Math.min(2, Math.floor(Math.max(cleanTyped.length, cleanTarget.length) / 5));
    if (distance <= maxAllowed) {
      return true;
    }
  }
  
  return false;
}

// CLICK-BASED DROPDOWN MENUS (Windows 98 Style & Mobile Touch Friendly)
function setupClickMenus() {
  const menuItems = document.querySelectorAll(".menu-item");
  
  menuItems.forEach(item => {
    // Open/Toggle menu on click
    item.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent document click from immediately closing
      AudioSynth.beep(600, 0.03);
      
      const isOpen = item.classList.contains("open");
      
      // Close all first
      menuItems.forEach(m => m.classList.remove("open"));
      
      if (!isOpen) {
        item.classList.add("open");
      }
    });
    
    // Desktop Hover-switching behavior:
    // If a menu is already open, hovering over another menu item switches the active open menu
    item.addEventListener("mouseenter", () => {
      const anyMenuOpen = Array.from(menuItems).some(m => m.classList.contains("open"));
      if (anyMenuOpen) {
        menuItems.forEach(m => m.classList.remove("open"));
        item.classList.add("open");
      }
    });
  });
  
  // Click outside to close menus
  document.addEventListener("click", () => {
    menuItems.forEach(item => item.classList.remove("open"));
  });
  
  // Clicking items inside dropdown closes it
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(di => {
    di.addEventListener("click", () => {
      menuItems.forEach(item => item.classList.remove("open"));
    });
  });
}

// SETUP WIZARD GAME CONTROLLER
function startNewGameFromSetup() {
  // Read values from active toggle buttons
  const diffVal = document.querySelector('.setup-option-group[data-group="diff"] .active').dataset.value;
  gameState.difficulty = diffVal;

  const modeVal = document.querySelector('.setup-option-group[data-group="mode"] .active').dataset.value;
  gameState.inputMode = modeVal;

  const qtypeVal = document.querySelector('.setup-option-group[data-group="qtype"] .active').dataset.value;
  gameState.questionType = qtypeVal;

  // Hide setup screen, show game area
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-area").style.display = "flex";
  
  // Start game
  startNewGame();
}

// SETUP SCREEN OPTION SELECTOR (Click toggles for mobile touch ease)
function selectSetupOption(group, value, element) {
  AudioSynth.beep(600, 0.05);
  
  const container = element.parentElement;
  const buttons = container.querySelectorAll('.setup-toggle-btn');
  
  buttons.forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  
  // Update description text dynamically
  if (group === 'diff') {
    const desc = document.getElementById('setup-diff-desc');
    if (value === 'normal') {
      desc.textContent = "Normal: Pengecoh acak dari seluruh dunia, waktu menjawab 15 detik.";
    } else {
      desc.textContent = "Expert: Pengecoh satu benua, waktu 10s-5s, asisten denda skor -20.";
    }
  } else if (group === 'mode') {
    const desc = document.getElementById('setup-mode-desc');
    if (value === 'choice') {
      desc.textContent = "Pilihan Ganda: Menebak dengan memilih salah satu dari 4 tombol opsi.";
    } else {
      desc.textContent = "Tebak Ketik: Mengetik jawaban langsung di kotak input (toleransi typo).";
    }
  } else if (group === 'qtype') {
    const desc = document.getElementById('setup-qtype-desc');
    if (value === 'country') {
      desc.textContent = "Tebak Negara: Menebak nama negara berdasarkan benderanya.";
    } else if (value === 'capital') {
      desc.textContent = "Tebak Ibu Kota: Menebak nama ibu kota negara berdasarkan benderanya.";
    } else if (value === 'clue') {
      desc.textContent = "Mode Detektif Clue: Menebak negara berdasarkan 5 fakta kuliner/geografi (Waktu 20 detik, skor -10 per clue).";
    }
  }
}

function resetToSetup() {
  clearInterval(gameState.timerInterval);
  gameState.answered = false;
  gameState.activeCountry = null;
  
  // Show setup form, hide all other panels
  document.getElementById("start-screen").style.display = "flex";
  document.getElementById("game-area").style.display = "none";
  document.getElementById("highscore-screen").style.display = "none";
  document.getElementById("about-screen").style.display = "none";
  document.getElementById("gameover-screen").style.display = "none";
  document.getElementById("clue-mode-container").style.display = "none";
  document.getElementById("flag-locked-overlay").style.display = "none";
  document.getElementById("flag-img").style.display = "block";
  
  // Clean choice buttons
  document.getElementById("options-container").innerHTML = `
    <button class="btn-98 btn-option" disabled>?</button>
    <button class="btn-98 btn-option" disabled>?</button>
    <button class="btn-98 btn-option" disabled>?</button>
    <button class="btn-98 btn-option" disabled>?</button>
  `;
  document.getElementById("clippy-hint-btn").setAttribute("disabled", "true");
  
  // Reset HUD elements back to defaults
  document.getElementById("status-time").textContent = "000";
  document.getElementById("status-streak").textContent = "Streak: 0";
  document.getElementById("info-score").textContent = "000";
  document.getElementById("info-level").textContent = "L01";
  document.getElementById("lives-display").textContent = "❤❤❤";
  setSmileyFace("🙂");
}

// SMILEY FACE CONTROLLER (Minesweeper-style indicator feedback)
function setSmileyFace(face) {
  const smiley = document.getElementById("smiley-reset");
  if (smiley) {
    smiley.textContent = face;
  }
}

// CUSTOM RETRO DIALOG BOX CONTROLLERS (Replaces native browser alert & confirm)
function showCustomAlert(message, title = "Tebak Negara") {
  AudioSynth.beep(880, 0.05); // Play retro warning chime
  
  document.getElementById("custom-dialog-title").textContent = title;
  document.getElementById("custom-dialog-message").innerHTML = message;
  
  // Show warning icon, hide question icon
  document.getElementById("custom-dialog-icon-warning").style.display = "block";
  document.getElementById("custom-dialog-icon-question").style.display = "none";
  
  // Render OK button
  const btnContainer = document.getElementById("custom-dialog-buttons");
  btnContainer.innerHTML = `<button class="btn-98" style="min-width: 60px; cursor: pointer;" onclick="closeCustomDialog()">OK</button>`;
  
  // Display modal overlay and window
  document.getElementById("custom-dialog-overlay").style.display = "block";
  document.getElementById("custom-dialog-window").style.display = "flex";
}

function showCustomConfirm(message, onConfirm, onCancel, title = "Konfirmasi") {
  AudioSynth.beep(880, 0.05);
  
  document.getElementById("custom-dialog-title").textContent = title;
  document.getElementById("custom-dialog-message").innerHTML = message;
  
  // Hide warning icon, show question icon
  document.getElementById("custom-dialog-icon-warning").style.display = "none";
  document.getElementById("custom-dialog-icon-question").style.display = "block";
  
  // Render Yes & Cancel buttons
  const btnContainer = document.getElementById("custom-dialog-buttons");
  btnContainer.innerHTML = "";
  
  const yesBtn = document.createElement("button");
  yesBtn.className = "btn-98";
  yesBtn.style.minWidth = "60px";
  yesBtn.style.cursor = "pointer";
  yesBtn.textContent = "Ya";
  yesBtn.onclick = () => {
    closeCustomDialog();
    if (onConfirm) onConfirm();
  };
  
  const noBtn = document.createElement("button");
  noBtn.className = "btn-98";
  noBtn.style.minWidth = "60px";
  noBtn.style.cursor = "pointer";
  noBtn.textContent = "Batal";
  noBtn.onclick = () => {
    closeCustomDialog();
    if (onCancel) onCancel();
  };
  
  btnContainer.appendChild(yesBtn);
  btnContainer.appendChild(noBtn);
  
  // Display modal overlay and window
  document.getElementById("custom-dialog-overlay").style.display = "block";
  document.getElementById("custom-dialog-window").style.display = "flex";
}

function closeCustomDialog() {
  document.getElementById("custom-dialog-overlay").style.display = "none";
  document.getElementById("custom-dialog-window").style.display = "none";
}
