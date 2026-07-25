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
  questionType: "country" // "country" (tebak negara) or "capital" (tebak ibukota)
};

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

  // UI state resetting
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-area").style.display = "flex";
  document.getElementById("flag-img").style.display = "block";
  
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
  setSmileyFace("🙂"); // Reset Minesweeper smiley back to normal
  transitionInputUI();
  updateGameUI(); // Sync HUD state
  
  // Reset buttons
  const options = document.getElementById("options-container");
  options.innerHTML = "";
  
  // Select active country
  const prevCountry = gameState.activeCountry;
  let targetCountry;
  do {
    targetCountry = COUNTRY_DATABASE[Math.floor(Math.random() * COUNTRY_DATABASE.length)];
  } while (prevCountry && targetCountry.code === prevCountry.code);
  
  gameState.activeCountry = targetCountry;
  
  // Load flag image using jsdelivr (using SVG from the flag-icons library for better reliability)
  const flagImg = document.getElementById("flag-img");
  flagImg.src = `https://cdn.jsdelivr.net/npm/flag-icons/flags/4x3/${targetCountry.code}.svg`;
  
  // Update status bar left
  document.getElementById("status-left").textContent = "Menebak negara...";
  
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
    const scoreGain = (gameState.level * 10) + (gameState.streak * 2);
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
  // Timer gets shorter as level increases. Expert starts with less time (10s base down to 5s min)
  if (gameState.difficulty === "expert") {
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
    const scoreGain = (gameState.level * 10) + (gameState.streak * 2);
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
    } else {
      desc.textContent = "Tebak Ibu Kota: Menebak nama ibu kota negara berdasarkan benderanya.";
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
