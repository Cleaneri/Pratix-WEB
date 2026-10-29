
// --- PRATIX PRO ULUSLARARASI DİL SÖZLÜĞÜ (TAM VE ENGELSİZ SÜRÜM) ---
// --- PRATIX PRO ULUSLARARASI DİL SÖZLÜĞÜ (BİRİM DÖNÜŞTÜRÜCÜ DAHİL) ---
const translations = {
    en: {
        settings: "Settings", selectLanguage: "Language:", soundVolume: "Sound Volume:", selectAlarmSound: "Alarm Sound:", selectTheme: "Theme Style:",
        navColor: "🎨 Color Converter", navCalc: "🧮 Calculator", navTimer: "⏱️ Timer", navCrypto: "🔐 Password Gen", navText: "📝 Text Analyzer",
        colorTitle: "Advanced Color & Palette Studio", colorLabel: "Select Color:", colorBtn: "Copy Code",
        paletteTitle: "Random Palette Generator", paletteBtn: "Generate Palette",
        calcTitle: "Modern Calculator",
        timerTitle: "Timer & Stopwatch Studio", timerHolder: "Seconds", timerStart: "Start", timerReset: "Reset",
        swStart: "Start", swLap: "Lap", swReset: "Reset",
        cryptoTitle: "Custom Password Architect", cryptoLabel: "Password Length:",
        optUpper: "Uppercase Letters (A-Z)", optLower: "Lowercase Letters (a-z)", optNumbers: "Numbers (0-9)", optSymbols: "Symbols (!@#$)",
        cryptoBtn: "Generate Secure Password",
        textTitle: "Smart Text Analyzer", textHolder: "Type or paste your text here...",
        btnUpper: "UPPERCASE", btnLower: "lowercase", btnClear: "Clear",
        textChar: "Characters", textWord: "Words", textReadTime: "Estimated Read Time",
        navTodo: "📝 To-Do List", todoTitle: "Smart To-Do List", todoHolder: "Add a new task...", todoAddBtn: "Add", todoAll: "All", todoActive: "Active", todoCompleted: "Completed",
        navPomo: "⏱️ Pomodoro", pomoTitle: "Smart Pomodoro Timer", pomoWork: "Focus (25m)", pomoBreak: "Break (5m)", pomoStart: "Start", pomoReset: "Reset", pomoLogTitle: "Focus History (Saved)", pomoClearLog: "Clear History",
        navConverter: "🔌 Unit Converter", converterTitle: "Advanced Unit Converter", converterCategory: "Select Category:"
    },
    tr: {
        settings: "Ayarlar", selectLanguage: "Dil Seçimi:", soundVolume: "Ses Seviyesi:", selectAlarmSound: "Alarm/Zil Sesi:", selectTheme: "Tema Stili:",
        navColor: "🎨 Renk Dönüştürücü", navCalc: "🧮 Hesap Makinesi", navTimer: "⏱️ Zamanlayıcı", navCrypto: "🔐 Şifre Üretici", navText: "📝 Metin Analizörü",
        colorTitle: "Gelişmiş Renk & Palet Stüdyosu", colorLabel: "Renk Seçin:", colorBtn: "Kodu Kopyala",
        paletteTitle: "Rastgele Palet Üretici", paletteBtn: "Palet Oluştur",
        calcTitle: "Modern Hesap Makinesi",
        timerTitle: "Zamanlayıcı & Kronometre Stüdyosu", timerHolder: "Saniye", timerStart: "Başlat", timerReset: "Sıfırla",
        swStart: "Başlat", swLap: "Tur", swReset: "Sıfırla",
        cryptoTitle: "Özel Şifre Mimarisi", cryptoLabel: "Şifre Uzunluğu:",
        optUpper: "Büyük Harfler (A-Z)", optLower: "Küçük Harfler (a-z)", optNumbers: "Sayılar (0-9)", optSymbols: "Semboller (!@#$)",
        cryptoBtn: "Güvenli Şifre Üret",
        textTitle: "Akıllı Metin Analizörü", textHolder: "Metninizi buraya yazın veya yapıştırın...",
        btnUpper: "BÜYÜK HARF", btnLower: "küçük harf", btnClear: "Temizle",
        textChar: "Karakter", textWord: "Kelime", textReadTime: "Tahmini Okuma Süresi",
        navTodo: "📝 Yapılacaklar", todoTitle: "Akıllı Yapılacaklar Listesi", todoHolder: "Yeni bir görev ekle...", todoAddBtn: "Ekle", todoAll: "Tümü", todoActive: "Bekleyenler", todoCompleted: "Tamamlananlar",
        navPomo: "⏱️ Pomodoro", pomoTitle: "Akıllı Pomodoro Zamanlayıcı", pomoWork: "Odaklan (25dk)", pomoBreak: "Mola (5dk)", pomoStart: "Başlat", pomoReset: "Sıfırla", pomoLogTitle: "Odaklanma Geçmişi (Kayıtlı)", pomoClearLog: "Geçmişi Temizle",
        navConverter: "🔌 Birim Dönüştürücü", converterTitle: "Gelişmiş Birim Dönüştürücü", converterCategory: "Kategori Seçin:"
    },
    de: {
        settings: "Einstellungen", selectLanguage: "Sprache:", soundVolume: "Lautstärke:", selectAlarmSound: "Alarmton:", selectTheme: "Themenstil:",
        navColor: "🎨 Farbkonverter", navCalc: "🧮 Taschenrechner", navTimer: "⏱️ Timer", navCrypto: "🔐 Passwort-Gen", navText: "📝 Textanalyse",
        colorTitle: "Erweiterter Farb- & Paletten-Studio", colorLabel: "Farbe wählen:", colorBtn: "Code kopieren",
        paletteTitle: "Zufallspaletten-Generator", paletteBtn: "Palette generieren",
        calcTitle: "Moderner Taschenrechner",
        timerTitle: "Timer & Stoppuhr Studio", timerHolder: "Sekunden", timerStart: "Starten", timerReset: "Zurücksetzen",
        swStart: "Start", swLap: "Runde", swReset: "Zurücksetzen",
        cryptoTitle: "Eigener Passwort-Architekt", cryptoLabel: "Passwortlänge:",
        optUpper: "Großbuchstaben (A-Z)", optLower: "Kleinbuchstaben (a-z)", optNumbers: "Zahlen (0-9)", optSymbols: "Symbole (!@#$)",
        cryptoBtn: "Sicheres Passwort generieren",
        textTitle: "Intelligenter Textanalysator", textHolder: "Geben Sie Ihren Text hier ein...",
        btnUpper: "GROSSBUCHSTABEN", btnLower: "kleinbuchstaben", btnClear: "Löschen",
        textChar: "Zeichen", textWord: "Wörter", textReadTime: "Geschätzte Lesezeit",
        navTodo: "📝 Aufgaben", todoTitle: "Intelligente To-Do-Liste", todoHolder: "Neue Aufgabe...", todoAddBtn: "Hinzufügen", todoAll: "Alle", todoActive: "Aktiv", todoCompleted: "Erledigt",
        navPomo: "⏱️ Pomodoro", pomoTitle: "Intelligenter Pomodoro-Timer", pomoWork: "Fokus (25m)", pomoBreak: "Pause (5m)", pomoStart: "Starten", pomoReset: "Zurücksetzen", pomoLogTitle: "Fokus-Verlauf (Gespeichert)", pomoClearLog: "Verlauf löschen",
        navConverter: "🔌 Einheitenrechner", converterTitle: "Erweiterter Einheitenrechner", converterCategory: "Kategorie wählen:"
    },
    fr: {
        settings: "Paramètres", selectLanguage: "Langue:", soundVolume: "Volume du son:", selectAlarmSound: "Son de l'alarme:", selectTheme: "Style de thème:",
        navColor: "🎨 Convertisseur Couleur", navCalc: "🧮 Calculatrice", navTimer: "⏱️ Minuteur", navCrypto: "🔐 Générateur Mdp", navText: "📝 Analyse de Texte",
        colorTitle: "Studio de Couleur & Palette", colorLabel: "Sélectionner la couleur:", colorBtn: "Copier le code",
        paletteTitle: "Générateur de Palette Aléatoire", paletteBtn: "Générer la Palette",
        calcTitle: "Calculatrice Moderne",
        timerTitle: "Studio Minuteur & Chronomètre", timerHolder: "Secondes", timerStart: "Démarrer", timerReset: "Réinitialiser",
        swStart: "Démarrer", swLap: "Tour", swReset: "Réinitialiser",
        cryptoTitle: "Architecte de Mot de Passe", cryptoLabel: "Longueur du mot de passe:",
        optUpper: "Majuscules (A-Z)", optLower: "Minuscules (a-z)", optNumbers: "Chiffres (0-9)", optSymbols: "Symboles (!@#$)",
        cryptoBtn: "Générer un mot de passe sécurisé",
        textTitle: "Analyseur de Texte Intelligent", textHolder: "Tapez ou coulez votre texte ici...",
        btnUpper: "MAJUSCULES", btnLower: "minuscules", btnClear: "Effacer",
        textChar: "Caractères", textWord: "Mots", textReadTime: "Temps de lecture estimé",
        navTodo: "📝 Liste de tâches", todoTitle: "Liste de Tâches Intelligente", todoHolder: "Ajouter une tâche...", todoAddBtn: "Ajouter", todoAll: "Tout", todoActive: "Actif", todoCompleted: "Terminé",
        navPomo: "⏱️ Pomodoro", pomoTitle: "Minuteur Pomodoro Intelligent", pomoWork: "Mise au point (25m)", pomoBreak: "Pause (5m)", pomoStart: "Démarrer", pomoReset: "Réinitialiser", pomoLogTitle: "Historique de mise au point", pomoClearLog: "Effacer l'historique",
        navConverter: "🔌 Convertisseur d'unités", converterTitle: "Convertisseur d'Unités Avancé", converterCategory: "Choisir la catégorie:"
    },
    es: {
        settings: "Ajustes", selectLanguage: "Idioma:", soundVolume: "Volumen del sonido:", selectAlarmSound: "Sonido de alarma:", selectTheme: "Estilo de tema:",
        navColor: "🎨 Convertidor de Color", navCalc: "🧮 Calculadora", navTimer: "⏱️ Temporizador", navCrypto: "🔐 Generador Contraseña", navText: "📝 Analizador Texto",
        colorTitle: "Estudio de Color & Paleta", colorLabel: "Seleccionar color:", colorBtn: "Copiar Código",
        paletteTitle: "Generador de Paleta Aleatoria", paletteBtn: "Generar Paleta",
        calcTitle: "Calculadora Moderne",
        timerTitle: "Estudio de Temporizador & Chronómetro", timerHolder: "Segundos", timerStart: "Iniciar", timerReset: "Reiniciar",
        swStart: "Iniciar", swLap: "Vuelta", swReset: "Reiniciar",
        cryptoTitle: "Arquitecto de Contraseñas", cryptoLabel: "Longitud de contraseña:",
        optUpper: "Mayúsculas (A-Z)", optLower: "Minúsculas (a-z)", optNumbers: "Números (0-9)", optSymbols: "Símbolos (!@#$)",
        cryptoBtn: "Generar contraseña segura",
        textTitle: "Analizador de Texto Intelligent", textHolder: "Escriba o pegue su texto aquí...",
        btnUpper: "MAYÚSCULAS", btnLower: "minúsculas", btnClear: "Limpiar",
        textChar: "Caracteres", textWord: "Palabras", textReadTime: "Tiempo de lectura estimado",
        navTodo: "📝 Lista de tareas", todoTitle: "Lista de Tareas Inteligente", todoHolder: "Añadir tarea...", todoAddBtn: "Añadir", todoAll: "Todo", todoActive: "Activo", todoCompleted: "Completado",
        navPomo: "⏱️ Pomodoro", pomoTitle: "Temporizador Pomodoro Intelligent", pomoWork: "Enfoque (25m)", pomoBreak: "Descanso (5m)", pomoStart: "Iniciar", pomoReset: "Reiniciar", pomoLogTitle: "Historial de enfoque", pomoClearLog: "Borrar historial",
        navConverter: "🔌 Convertidor de unidades", converterTitle: "Convertidor de Unidades Avanzado", converterCategory: "Seleccionar categoría:"
    }
};
let currentLang = 'en';
const clickSound = new Audio('click.mp3');

window.addEventListener('DOMContentLoaded', () => {
    loadSettingsFromStorage();
    initAppFeatures();
    generateRandomPalette();
    renderTodos();       
    renderPomoHistory(); 
});

// --- SADECE BU İKİ FONKSİYONU BUL VE DEĞİŞTİR ---

function loadSettingsFromStorage() {
    const savedSettings = localStorage.getItem('pratix_pro_live_settings');
    
    let loadedLang = 'en';
    let loadedVolume = 0.5;
    let loadedAlarm = '1';
    let loadedTheme = 'original';

    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        loadedLang = settings.language || 'en';
        loadedVolume = settings.volume !== undefined ? settings.volume : 0.5;
        loadedAlarm = settings.alarmTone || '1';
        loadedTheme = settings.themeStyle || 'original';
    }

    currentLang = loadedLang;
    clickSound.volume = loadedVolume;

    // HTML elementlerinin varlığını güvenli bir şekilde denetle ve eşitle
    const langEl = document.getElementById('langSelect');
    const volEl = document.getElementById('volumeSlider');
    const alarmEl = document.getElementById('alarmSelect');
    const themeEl = document.getElementById('themeSelect');

    if (langEl) langEl.value = currentLang;
    if (volEl) volEl.value = clickSound.volume;
    if (alarmEl) alarmEl.value = loadedAlarm;
    if (themeEl) themeEl.value = loadedTheme;

    // Alt motor işlevlerini tetikle
    applyLanguage(currentLang);
    changeAlarmSoundDirect(loadedAlarm);
    changeThemeDirect(loadedTheme);
}

function saveSettingsToStorage() {
    const langEl = document.getElementById('langSelect');
    const volEl = document.getElementById('volumeSlider');
    const alarmEl = document.getElementById('alarmSelect');
    const themeEl = document.getElementById('themeSelect');

    // Eğer elementler henüz çizilmediyse hafızayı boş veriyle ezmemek için durdur
    if (!langEl || !volEl || !alarmEl || !themeEl) return;

    const settings = {
        language: langEl.value,
        volume: parseFloat(volEl.value),
        alarmTone: alarmEl.value,
        themeStyle: themeEl.value
    };
    
    clickSound.volume = settings.volume;
    localStorage.setItem('pratix_pro_live_settings', JSON.stringify(settings));
}

function changeThemeDirect(themeName) {
    const root = document.documentElement;
    if (!root) return;
    if (themeName === "original") {
        root.style.setProperty('--bg-main', '#0b0f19'); root.style.setProperty('--bg-sidebar', '#111827'); root.style.setProperty('--bg-card', '#1f2937'); root.style.setProperty('--accent', '#6366f1'); root.style.setProperty('--accent-hover', '#4f46e5');
    } else if (themeName === "cyberpunk") {
        root.style.setProperty('--bg-main', '#030712'); root.style.setProperty('--bg-sidebar', '#0b0f19'); root.style.setProperty('--bg-card', '#111827'); root.style.setProperty('--accent', '#a855f7'); root.style.setProperty('--accent-hover', '#c084fc');
    } else if (themeName === "matrix") {
        root.style.setProperty('--bg-main', '#09090b'); root.style.setProperty('--bg-sidebar', '#141416'); root.style.setProperty('--bg-card', '#18181b'); root.style.setProperty('--accent', '#22c55e'); root.style.setProperty('--accent-hover', '#4ade80');
    } else if (themeName === "nordic") {
        root.style.setProperty('--bg-main', '#110f0e'); root.style.setProperty('--bg-sidebar', '#171413'); root.style.setProperty('--bg-card', '#1c1917'); root.style.setProperty('--accent', '#d97706'); root.style.setProperty('--accent-hover', '#f59e0b');
    } else if (themeName === "ocean") {
        root.style.setProperty('--bg-main', '#050b14'); root.style.setProperty('--bg-sidebar', '#0a1220'); root.style.setProperty('--bg-card', '#0f172a'); root.style.setProperty('--accent', '#38bdf8'); root.style.setProperty('--accent-hover', '#0284c7');
    }
}

function changeAlarmSoundDirect(toneValue) {
    if (!alarmSound) return;
    const isPlaying = !alarmSound.paused;
    alarmSound.pause();
    if (toneValue === "1") alarmSound.src = "timesup.mp3";
    else if (toneValue === "2") alarmSound.src = "timesup2.mp3";
    else if (toneValue === "3") alarmSound.src = "timesup3.mp3";
    else if (toneValue === "4") alarmSound.src = "timesup4.mp3";
    if (isPlaying) { alarmSound.play().catch(() => {}); }
}

function changeLanguage(lang) {
    currentLang = lang;
    applyLanguage(lang);
    saveSettingsToStorage();
}

function applyLanguage(lang) {
    const langData = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) element.innerText = langData[key];
    });
    document.querySelectorAll('[data-i18n-holder]').forEach(element => {
        const key = element.getAttribute('data-i18n-holder');
        if (langData[key]) element.setAttribute('placeholder', langData[key]);
    });
}

function toggleSettings() {
    document.getElementById('settingsPanel').classList.toggle('open');
}

function playSound() {
    clickSound.currentTime = 0; 
    clickSound.play().catch(() => {});
}

document.addEventListener('click', function(e) {
    if (e.target.matches('button') || e.target.matches('.tab-btn') || e.target.matches('option')) {
        playSound();
    }
});

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// ANLIK RENK DEĞİŞTİREN CANLI TEMA MOTORU
function changeThemePro(themeName) {
    const root = document.documentElement;
    if (!root) return;
    
    if (themeName === "original") {
        root.style.setProperty('--bg-main', '#0b0f19');
        root.style.setProperty('--bg-sidebar', '#111827');
        root.style.setProperty('--bg-card', '#1f2937');
        root.style.setProperty('--accent', '#6366f1');
        root.style.setProperty('--accent-hover', '#4f46e5');
    } 
    else if (themeName === "cyberpunk") {
        root.style.setProperty('--bg-main', '#030712');
        root.style.setProperty('--bg-sidebar', '#0b0f19');
        root.style.setProperty('--bg-card', '#111827');
        root.style.setProperty('--accent', '#a855f7');
        root.style.setProperty('--accent-hover', '#c084fc');
    } 
    else if (themeName === "matrix") {
        root.style.setProperty('--bg-main', '#09090b');
        root.style.setProperty('--bg-sidebar', '#141416');
        root.style.setProperty('--bg-card', '#18181b');
        root.style.setProperty('--accent', '#22c55e');
        root.style.setProperty('--accent-hover', '#4ade80');
    } 
    else if (themeName === "nordic") {
        root.style.setProperty('--bg-main', '#110f0e');
        root.style.setProperty('--bg-sidebar', '#171413');
        root.style.setProperty('--bg-card', '#1c1917');
        root.style.setProperty('--accent', '#d97706');
        root.style.setProperty('--accent-hover', '#f59e0b');
    } 
    else if (themeName === "ocean") {
        root.style.setProperty('--bg-main', '#050b14');
        root.style.setProperty('--bg-sidebar', '#0a1220');
        root.style.setProperty('--bg-card', '#0f172a');
        root.style.setProperty('--accent', '#38bdf8');
        root.style.setProperty('--accent-hover', '#0284c7');
    }
    
    if (document.getElementById('themeSelect')) {
        saveSettingsToStorage();
    }
}
// --- 1. RENK VE PALET STÜDYOSU ---
function initAppFeatures() {
    const picker = document.getElementById('colorPicker');
    if(picker) {
        picker.addEventListener('input', function() {
            const hex = this.value;
            document.getElementById('hexOutput').value = hex;
            const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
            document.getElementById('rgbOutput').innerText = `rgb(${r}, ${g}, ${b})`;
            document.getElementById('hslOutput').innerText = `hsl(${Math.round(r%360)}, 80%, 60%)`;
        });
    }
}

function copyColor() {
    const hex = document.getElementById('hexOutput').value;
    navigator.clipboard.writeText(hex);
    alert("Pratix PRO: Copied!");
}

function generateRandomPalette() {
    const container = document.getElementById('paletteContainer');
    if(!container) return;
    container.innerHTML = '';
    for(let i=0; i<5; i++) {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        const item = document.createElement('div');
        item.className = 'palette-color';
        item.style.backgroundColor = randomColor;
        item.title = randomColor;
        item.onclick = function() {
            navigator.clipboard.writeText(randomColor);
            alert("Color copied: " + randomColor);
        };
        container.appendChild(item);
    }
}

// --- 2. AKILLI HESAP MAKİNESİ (KLAVYE DESTEKLİ) ---
const calcDisplay = document.getElementById('calcDisplay');

function pressCalc(val) {
    const errorStates = ['Error!', 'undefined', 'NaN', 'Infinity', 'Hata!'];
    if (errorStates.some(state => calcDisplay.value.includes(state))) {
        if (!isNaN(val) || val === '.') { calcDisplay.value = val; return; } 
        else { calcDisplay.value = ''; }
    }

    const currentInput = calcDisplay.value;
    const operators = ['+', '-', '*', '/', '.'];

    if (operators.includes(val)) {
        if (currentInput === "") {
            if (val === '-') calcDisplay.value += val;
            return;
        }
        const lastChar = currentInput.slice(-1);
        if (operators.includes(lastChar)) {
            if (lastChar === val) return;
            if (lastChar === '*' && val === '*') {
                if (currentInput.slice(-2) !== '**') calcDisplay.value += val;
                return;
            }
            calcDisplay.value = currentInput.slice(0, -1) + val;
            return;
        }
    }
    calcDisplay.value += val;
}

function clearCalc() { calcDisplay.value = ''; }

function calculateResult() {
    try { 
        if (calcDisplay.value.trim() === "") return;
        let result = eval(calcDisplay.value);
        if (result === undefined || result === null || isNaN(result) || !isFinite(result)) {
            calcDisplay.value = 'Error!';
        } else { calcDisplay.value = result; }
    } catch { calcDisplay.value = 'Error!'; }
}

function calcSpecial(type) {
    try {
        const errorStates = ['Error!', 'undefined', 'NaN', 'Infinity'];
        if (errorStates.some(state => calcDisplay.value.includes(state))) calcDisplay.value = '';
        const currentVal = eval(calcDisplay.value || '0');
        if (type === 'sqrt') {
            if (currentVal < 0) calcDisplay.value = 'Error!';
            else calcDisplay.value = Math.sqrt(currentVal);
        }
        if (type === 'percent') calcDisplay.value = currentVal / 100;
    } catch { calcDisplay.value = 'Error!'; }
}

function handleCalcKeyboard(event) {
    setTimeout(() => { calcDisplay.selectionStart = calcDisplay.selectionEnd = calcDisplay.value.length; }, 0);
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape', 'c', 'C'];
    if (!allowedKeys.includes(event.key)) { event.preventDefault(); return; }
    if (event.key === 'Enter') { event.preventDefault(); calculateResult(); return; }
    if (event.key === 'Escape' || event.key.toLowerCase() === 'c') { event.preventDefault(); clearCalc(); return; }
    if (event.key === 'Backspace') {
        const errorStates = ['Error!', 'undefined', 'NaN', 'Infinity'];
        if (errorStates.some(state => calcDisplay.value.includes(state))) { event.preventDefault(); clearCalc(); }
        return;
    }
    event.preventDefault();
    pressCalc(event.key);
}

// --- 4. SECURE PASSWORD GENERATOR ---
function generatePasswordPro() {
    const len = document.getElementById('passLength').value;
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", lower = "abcdefghijklmnopqrstuvwxyz", numbers = "0123456789", symbols = "!@#\$%^&*()_+~|}{[]:;?><,./-=";
    let allowedChars = "";
    if(document.getElementById('chkUpper').checked) allowedChars += upper;
    if(document.getElementById('chkLower').checked) allowedChars += lower;
    if(document.getElementById('chkNumbers').checked) allowedChars += numbers;
    if(document.getElementById('chkSymbols').checked) allowedChars += symbols;
    if(allowedChars === "") { document.getElementById('passwordResult').innerText = "Select at least 1 option!"; return; }
    let pass = "";
    for(let i=0; i<len; i++) pass += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    document.getElementById('passwordResult').innerText = pass;
}

// --- 5. SMART TEXT ANALYZER ---
function analyzeTextPro() {
    const text = document.getElementById('textInput').value;
    document.getElementById('charCount').innerText = text.length;
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    document.getElementById('wordCount').innerText = words.length;
    let readTimeSecs = Math.round((words.length / 200) * 60);
    document.getElementById('readTimeCount').innerText = readTimeSecs + "s";
}
function transformText(type) {
    const input = document.getElementById('textInput');
    if(type === 'upper') input.value = input.value.toUpperCase();
    if(type === 'lower') input.value = input.value.toLowerCase();
    analyzeTextPro();
}
// --- 3. TIMERS & STOPWATCH MODÜLÜ ---
let timerInterval, timerSecondsLeft = 0, timerRunning = false;
const alarmSound = new Audio('timesup.mp3');
alarmSound.loop = true;

function changeAlarmSound(toneValue) {
    const isPlaying = !alarmSound.paused;
    alarmSound.pause();
    if (toneValue === "1") alarmSound.src = "timesup.mp3";
    else if (toneValue === "2") alarmSound.src = "timesup2.mp3";
    else if (toneValue === "3") alarmSound.src = "timesup3.mp3";
    else if (toneValue === "4") alarmSound.src = "timesup4.mp3";
    if (isPlaying) { alarmSound.play().catch(() => {}); }
    saveSettingsToStorage();
}

function testAlarmSound() {
    const currentTone = document.getElementById('alarmSelect').value;
    let testSrc = "timesup.mp3";
    if (currentTone === "2") testSrc = "timesup2.mp3";
    else if (currentTone === "3") testSrc = "timesup3.mp3";
    else if (currentTone === "4") testSrc = "timesup4.mp3";
    const previewAudio = new Audio(testSrc);
    previewAudio.loop = false;
    previewAudio.volume = clickSound.volume;
    previewAudio.play().catch(() => {
        alert(currentLang === 'tr' ? "Ses dosyası bulunamadı!" : "Audio file not found!");
    });
}

function startTimer() {
    const startBtn = document.querySelector("button[onclick='startTimer()']");
    if (!alarmSound.paused) { stopAlarmAndResetUI(); return; }
    if (timerRunning) { clearInterval(timerInterval); timerRunning = false; startBtn.innerText = currentLang === 'tr' ? 'Başlat' : 'Start'; startBtn.style.backgroundColor = ""; return; }
    if (timerSecondsLeft <= 0) {
        const inputVal = parseInt(document.getElementById('timerInput').value);
        if (isNaN(inputVal) || inputVal <= 0) return;
        timerSecondsLeft = inputVal;
    }
    const display = document.getElementById('timerDisplay');
    timerRunning = true;
    startBtn.innerText = currentLang === 'tr' ? 'Durdur' : 'Stop';
    startBtn.style.backgroundColor = "#ef4444";
    timerInterval = setInterval(() => {
        let mins = Math.floor(timerSecondsLeft / 60), secs = timerSecondsLeft % 60;
        display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        if (timerSecondsLeft <= 0) { clearInterval(timerInterval); timerRunning = false; display.innerText = "Time's Up!"; alarmSound.currentTime = 0; alarmSound.play().catch(() => {}); startBtn.innerText = currentLang === 'tr' ? 'Durdur' : 'Stop'; }
        timerSecondsLeft--;
    }, 1000);
}
function resetTimer() { clearInterval(timerInterval); stopAlarmAndResetUI(); timerSecondsLeft = 0; document.getElementById('timerDisplay').innerText = "00:00"; document.getElementById('timerInput').value = ''; }
function stopAlarmAndResetUI() { alarmSound.pause(); alarmSound.currentTime = 0; timerRunning = false; const startBtn = document.querySelector("button[onclick='startTimer()']"); if(startBtn) { startBtn.innerText = currentLang === 'tr' ? 'Başlat' : 'Start'; startBtn.style.backgroundColor = ""; } }

let swInterval, swTime = 0, swRunning = false;
function startStopwatch() {
    const btn = document.getElementById('swStartBtn');
    if(!swRunning) {
        swRunning = true; btn.innerText = "Pause"; btn.style.backgroundColor = "#f59e0b";
        swInterval = setInterval(() => { swTime += 10; updateStopwatchDisplay(); }, 10);
    } else { swRunning = false; btn.innerText = "Start"; btn.style.backgroundColor = "#10b981"; clearInterval(swInterval); }
}
function updateStopwatchDisplay() {
    let totalSecs = Math.floor(swTime / 1000), mins = Math.floor(totalSecs / 60), secs = totalSecs % 60, ms = Math.floor((swTime % 1000) / 10);
    document.getElementById('stopwatchDisplay').innerHTML = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.<span style="font-size:1.8rem;">${ms.toString().padStart(2, '0')}</span>`;
}
function lapStopwatch() {
    if(swTime === 0) return;
    const list = document.getElementById('lapList'), li = document.createElement('li');
    li.innerText = `Lap ${list.children.length + 1}: ${document.getElementById('stopwatchDisplay').innerText}`;
    list.appendChild(li);
}
function resetStopwatch() { swRunning = false; clearInterval(swInterval); swTime = 0; document.getElementById('swStartBtn').innerText = "Start"; document.getElementById('swStartBtn').style.backgroundColor = "#10b981"; document.getElementById('stopwatchDisplay').innerHTML = `00:00.<span style="font-size:1.8rem;">00</span>`; document.getElementById('lapList').innerHTML = ''; }

// --- 6. AKILLI YAPILACAKLAR LİSTESİ MANTIĞI (HAFIZALI) ---
let todos = JSON.parse(localStorage.getItem('pratix_todo_data')) || [];
let currentTodoFilter = 'all';

function saveTodos() { localStorage.setItem('pratix_todo_data', JSON.stringify(todos)); }
function addTodo() {
    const input = document.getElementById('todoInput'), text = input.value.trim();
    if (text === "") return;
    todos.push({ id: Date.now(), text: text, completed: false });
    input.value = ""; saveTodos(); renderTodos();
}
function toggleTodo(id) { todos = todos.map(t => { if (t.id === id) t.completed = !t.completed; return t; }); saveTodos(); renderTodos(); }
function deleteTodo(id) { todos = todos.filter(t => t.id !== id); saveTodos(); renderTodos(); }
function filterTodos(filterType) {
    currentTodoFilter = filterType;
    const buttons = document.querySelectorAll("#todo-tool .btn-sm");
    buttons.forEach(btn => btn.classList.add("btn-alt"));
    if(event && event.currentTarget) event.currentTarget.classList.remove("btn-alt");
    renderTodos();
}
function renderTodos() {
    const list = document.getElementById('todoList'); if (!list) return; list.innerHTML = '';
    let filtered = todos;
    if (currentTodoFilter === 'active') filtered = todos.filter(t => !t.completed);
    if (currentTodoFilter === 'completed') filtered = todos.filter(t => t.completed);
    filtered.forEach(todo => {
        const li = document.createElement('li'); li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        const span = document.createElement('span'); span.innerText = todo.text; span.onclick = () => toggleTodo(todo.id);
        const deleteBtn = document.createElement('button'); deleteBtn.className = 'todo-delete-btn'; deleteBtn.innerHTML = '🗑️'; deleteBtn.onclick = () => deleteTodo(todo.id);
        li.appendChild(span); li.appendChild(deleteBtn); list.appendChild(li);
    });
}
document.getElementById('todoInput')?.addEventListener('keydown', function(e) { if (e.key === 'Enter') addTodo(); });

// --- 7. GEÇMİŞ KAYITLI POMODORO ZAMANLAYICI MANTIĞI ---
let pomoInterval, pomoSecondsLeft = 1500, pomoRunning = false, pomoCurrentMode = 'work';
let pomoHistory = JSON.parse(localStorage.getItem('pratix_pomo_history')) || [];

function setPomoMode(mode) {
    if (pomoRunning) return; pomoCurrentMode = mode;
    const buttons = document.querySelectorAll("#pomodoro-tool .btn-sm");
    buttons.forEach(btn => btn.classList.add("btn-alt"));
    if(event && event.currentTarget) event.currentTarget.classList.remove("btn-alt");
    pomoSecondsLeft = mode === 'work' ? 1500 : 300; updatePomoDisplay();
}
function updatePomoDisplay() { let mins = Math.floor(pomoSecondsLeft / 60), secs = pomoSecondsLeft % 60; document.getElementById('pomoDisplay').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`; }
function startPomo() {
    const startBtn = document.getElementById('pomoStartBtn');
    if (!alarmSound.paused) { alarmSound.pause(); alarmSound.currentTime = 0; resetPomo(); return; }
    if (pomoRunning) { clearInterval(pomoInterval); pomoRunning = false; startBtn.innerText = currentLang === 'tr' ? 'Başlat' : 'Start'; startBtn.style.backgroundColor = ""; return; }
    pomoRunning = true; startBtn.innerText = currentLang === 'tr' ? 'Durdur' : 'Stop'; startBtn.style.backgroundColor = "#ef4444";
    pomoInterval = setInterval(() => {
        pomoSecondsLeft--; updatePomoDisplay();
        if (pomoSecondsLeft <= 0) {
            clearInterval(pomoInterval); pomoRunning = false;
            if (pomoCurrentMode === 'work') savePomoLog();
            alarmSound.currentTime = 0; alarmSound.play().catch(() => {});
            startBtn.innerText = currentLang === 'tr' ? 'Durdur' : 'Stop';
            document.getElementById('pomoDisplay').innerText = currentLang === 'tr' ? "Bitti!" : "Done!";
        }
    }, 1000);
}
function resetPomo() { clearInterval(pomoInterval); pomoRunning = false; alarmSound.pause(); alarmSound.currentTime = 0; const startBtn = document.getElementById('pomoStartBtn'); if (startBtn) { startBtn.innerText = currentLang === 'tr' ? 'Başlat' : 'Start'; startBtn.style.backgroundColor = ""; } pomoSecondsLeft = pomoCurrentMode === 'work' ? 1500 : 300; updatePomoDisplay(); }
function savePomoLog() {
    const now = new Date(), timeString = now.toLocaleDateString() + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    pomoHistory.unshift(currentLang === 'tr' ? `🎯 Başarıyla Odaklanıldı: ${timeString}` : `🎯 Successfully Focused: ${timeString}`);
    localStorage.setItem('pratix_pomo_history', JSON.stringify(pomoHistory)); renderPomoHistory();
}
function renderPomoHistory() { const list = document.getElementById('pomoLogList'); if (!list) return; list.innerHTML = ''; pomoHistory.forEach(log => { const li = document.createElement('li'); li.innerText = log; list.appendChild(li); }); }
function clearPomoHistory() { if (confirm(currentLang === 'tr' ? "Temizlensin mi?" : "Clear?")) { pomoHistory = []; localStorage.removeItem('pratix_pomo_history'); renderPomoHistory(); } }
// ==========================================================================
// 🔌 BÖLÜM 8: GELİŞMİŞ BİRİM DÖNÜŞTÜRÜCÜ MOTORU (UNIT CONVERTER)
// ==========================================================================

// Birim Tanımlama Sözlüğü
const converterUnitsData = {
    data: [
        { value: "KB", label: "Kilobyte (KB)" },
        { value: "MB", label: "Megabyte (MB)" },
        { value: "GB", label: "Gigabyte (GB)" },
        { value: "TB", label: "Terabyte (TB)" }
    ],
    length: [
        { value: "m", label: "Meter (m)" },
        { value: "km", label: "Kilometer (km)" },
        { value: "in", label: "Inch (in)" },
        { value: "mi", label: "Mile (mi)" }
    ],
    temp: [
        { value: "C", label: "Celsius (°C)" },
        { value: "F", label: "Fahrenheit (°F)" },
        { value: "K", label: "Kelvin (K)" }
    ]
};

// Kategori değiştiğinde alt seçim kutularını dolduran fonksiyon
function updateConverterUnits() {
    const category = document.getElementById('converterCategorySelect').value;
    const fromSelect = document.getElementById('converterFromUnit');
    const toSelect = document.getElementById('converterToUnit');
    
    if (!fromSelect || !toSelect) return;

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    converterUnitsData[category].forEach((unit, index) => {
        const optFrom = document.createElement('option');
        optFrom.value = unit.value;
        optFrom.innerText = unit.label;
        fromSelect.appendChild(optFrom);

        const optTo = document.createElement('option');
        optTo.value = unit.value;
        optTo.innerText = unit.label;
        // Varsayılan olarak ikinci birimi seçili yap ki dönüşüm anlaşılsın
        if (index === 1) optTo.selected = true;
        toSelect.appendChild(optTo);
    });

    calculateConversionPro();
}

// Ana Hesaplama ve Çeviri Motoru
function calculateConversionPro() {
    const category = document.getElementById('converterCategorySelect').value;
    const inputVal = parseFloat(document.getElementById('converterInputVal').value);
    const fromUnit = document.getElementById('converterFromUnit').value;
    const toUnit = document.getElementById('converterToUnit').value;
    const outputField = document.getElementById('converterOutputVal');

    if (isNaN(inputVal)) {
        outputField.value = "";
        return;
    }

    let result = 0;

    // 1. DİJİTAL VERİ DÖNÜŞÜMÜ (Temel birim KB alınmıştır)
    if (category === "data") {
        const rates = { KB: 1, MB: 1024, GB: 1048576, TB: 1073741824 };
        const valueInKB = inputVal * rates[fromUnit];
        result = valueInKB / rates[toUnit];
    }
    // 2. UZUNLUK DÖNÜŞÜMÜ (Temel birim Metre alınmıştır)
    else if (category === "length") {
        const rates = { m: 1, km: 1000, in: 0.0254, mi: 1609.34 };
        const valueInMeter = inputVal * rates[fromUnit];
        result = valueInMeter / rates[toUnit];
    }
    // 3. SICAKLIK DÖNÜŞÜMÜ (Özel formüller içerir)
    else if (category === "temp") {
        if (fromUnit === toUnit) {
            result = inputVal;
        } else {
            let valueInCelsius = 0;
            // Önce Santigrat'a çevir
            if (fromUnit === "C") valueInCelsius = inputVal;
            else if (fromUnit === "F") valueInCelsius = (inputVal - 32) * 5 / 9;
            else if (fromUnit === "K") valueInCelsius = inputVal - 273.15;

            // Santigrat'tan hedef birime çevir
            if (toUnit === "C") result = valueInCelsius;
            else if (toUnit === "F") result = (valueInCelsius * 9 / 5) + 32;
            else if (toUnit === "K") result = valueInCelsius + 273.15;
        }
    }

    // Virgülden sonra çok fazla basamak çıkmasını önlemek için yuvarlama (Maksimum 6 basamak)
    outputField.value = Number(result.toFixed(6));
}

// Uygulama ilk açıldığında kutuları bir kez doldurması için DOMContentLoaded tetikleyicisine ekleme simülasyonu
setTimeout(() => {
    if (document.getElementById('converterCategorySelect')) {
        updateConverterUnits();
    }
}, 100);

// ==========================================================================
// 🖼️ BÖLÜM 9: SAF VE YEREL GÖRSEL SIKIŞTIRICI MOTORU (IMAGE COMPRESSOR)
// ==========================================================================

let compOriginalImage = null; // Seçilen orijinal resmi bellekte tutmak için küresel değişken
let compOriginalType = "image/jpeg"; // Varsayılan dosya türü
let compOriginalFileName = "compressed_image.jpg";
let compAspectRatio = 1; // En/boy oranını kilitlemek için

// Kullanıcı bilgisayarından görsel seçtiğinde tetiklenen fonksiyon
function handleCompFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    compOriginalType = file.type;
    compOriginalFileName = file.name;

    // Dosya boyutlarını KB/MB cinsinden hesaplama
    const origSizeKB = (file.size / 1024).toFixed(1);
    document.getElementById('compOrigSizeText').innerText = origSizeKB > 1024 ? (origSizeKB / 1024).toFixed(2) + " MB" : origSizeKB + " KB";
    
    // Bilgi metnini güncelle ve görünür yap
    const infoDiv = document.getElementById('compFileInfo');
    infoDiv.innerText = `${file.name} (${origSizeKB > 1024 ? (origSizeKB / 1024).toFixed(2) + " MB" : origSizeKB + " KB"})`;
    infoDiv.style.display = "block";

    // FileReader ile görseli tarayıcı belleğine yükle
    const reader = new FileReader();
    reader.onload = function(e) {
        compOriginalImage = new Image();
        compOriginalImage.src = e.target.result;
        
        compOriginalImage.onload = function() {
            compAspectRatio = compOriginalImage.width / compOriginalImage.height;
            
            // Genişlik ve yükseklik input alanlarını doldur
            document.getElementById('compWidthInput').value = compOriginalImage.width;
            document.getElementById('compHeightInput').value = compOriginalImage.height;
            
            // Ayar kartını görünür yap
            document.getElementById('compSettingsCard').style.display = "flex";
            
            // İlk sıkıştırma işlemini otomatik başlat
            compressImagePro();
        };
    };
    reader.readAsDataURL(file);
}

// Genişlik veya yükseklik elle değiştirildiğinde en/boy oranını koruyan fonksiyon
function handleDimensionChange(changedType) {
    const widthInput = document.getElementById('compWidthInput');
    const heightInput = document.getElementById('compHeightInput');
    
    let w = parseInt(widthInput.value);
    let h = parseInt(heightInput.value);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;

    if (changedType === 'width') {
        heightInput.value = Math.round(w / compAspectRatio);
    } else if (changedType === 'height') {
        widthInput.value = Math.round(h * compAspectRatio);
    }

    // Değerler değiştikçe sıkıştırmayı canlı olarak tekrar hesapla
    compressImagePro();
}

// Arka planda canvas (tuval) kullanarak sıkıştırma ve boyutlandırma yapan ana fonksiyon
function compressImagePro() {
    if (!compOriginalImage) return;

    const width = parseInt(document.getElementById('compWidthInput').value) || compOriginalImage.width;
    const height = parseInt(document.getElementById('compHeightInput').value) || compOriginalImage.height;
    const quality = parseFloat(document.getElementById('compQualitySlider').value) / 100;

    // Sanal bir tuval oluştur ve yeni ölçülerde resmi üzerine çiz
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(compOriginalImage, 0, 0, width, height);

    // Tuvali base64 formatına çevirirken kaliteyi (0.1 - 1.0 arası) sıkıştırıyoruz
    // PNG formatı yerel sıkıştırmayı desteklemediği için çıktı kalitesini korumak adına jpeg/webp'ye yönlendirilebilir, 
    // ancak orijinal yapıyı bozmamak için kullanıcının girdi tipini koruyoruz.
    const compressedDataUrl = canvas.toDataURL(compOriginalType, quality);

    // Yeni oluşan dosya boyutunu hesaplama (Base64 string uzunluğundan yaklaşık byte hesabı)
    const stringLength = compressedDataUrl.length - compressedDataUrl.indexOf(',') - 1;
    const sizeInBytes = stringLength * (3/4);
    const newSizeKB = (sizeInBytes / 1024).toFixed(1);

    document.getElementById('compNewSizeText').innerText = newSizeKB > 1024 ? (newSizeKB / 1024).toFixed(2) + " MB" : newSizeKB + " KB";
    
    // İndirme butonu için veriyi sakla
    window.pratixCompressedBlobData = compressedDataUrl;
}

// Sıkıştırılmış görseli bilgisayara anında indiren fonksiyon
function downloadCompressedImg() {
    if (!window.pratixCompressedBlobData) return;

    const a = document.createElement('a');
    a.href = window.pratixCompressedBlobData;
    
    // Orijinal dosya adının başına "pratix_" ekleyerek kaydet
    a.download = "pratix_" + compOriginalFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    playSound(); // Başarılı işlem tık sesini çal
}
