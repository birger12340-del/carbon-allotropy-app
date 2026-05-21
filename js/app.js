// Core Application Logic: Tab Routing, Localization, Three.js 3D Viewer, Quiz, Exam, and Synthesized Audio
// Coordinates with js/data.js and js/games.js

const App = {
  currentLanguage: 'he',
  currentTheme: 'dark',
  activeTab: 'glossary',
  currentAllotrope: 'diamond',
  viewLevel: 'full',
  
  // Audio Context for synthesized sound
  audioCtx: null,

  // Three.js instances
  scene: null,
  camera: null,
  renderer: null,
  controls: null,
  molecularGroup: null,

  // Quiz State
  quizActiveIndex: 0,
  quizScore: 0,
  quizQuestions: [],
  quizSelected: false,

  // Exam Answers State
  examAnswers: {}, // { questionId: selectedIndex }
  examSubmitted: false,

  init() {
    this.loadSettings();
    this.translatePage();
    this.setupEventListeners();
    this.updateMasteryLevel();

    // Initial load
    this.renderGlossary();
    this.initThreeJS();
    
    // Initialize games
    GameRace.init();
    GameSorter.init();
  },

  loadSettings() {
    // Theme
    const savedTheme = localStorage.getItem('carbon_theme') || 'dark';
    this.currentTheme = savedTheme;
    const htmlTag = document.documentElement;
    if (savedTheme === 'dark') {
      htmlTag.classList.add('dark');
      document.getElementById('sun-icon').classList.remove('hidden');
      document.getElementById('moon-icon').classList.add('hidden');
    } else {
      htmlTag.classList.remove('dark');
      document.getElementById('sun-icon').classList.add('hidden');
      document.getElementById('moon-icon').classList.remove('hidden');
    }

    // Language
    const savedLang = localStorage.getItem('carbon_lang') || 'he';
    this.currentLanguage = savedLang;
  },

  setupEventListeners() {
    // Language buttons
    document.getElementById('lang-he').addEventListener('click', () => this.switchLanguage('he'));
    document.getElementById('lang-en').addEventListener('click', () => this.switchLanguage('en'));
    document.getElementById('lang-ar').addEventListener('click', () => this.switchLanguage('ar'));

    // Dark Mode Toggle
    document.getElementById('dark-mode-toggle').addEventListener('click', () => this.toggleTheme());

    // Navigation Buttons
    const navButtons = [
      { id: 'nav-btn-glossary', tab: 'glossary' },
      { id: 'nav-btn-simulations', tab: 'simulations' },
      { id: 'nav-btn-game1', tab: 'game1' },
      { id: 'nav-btn-game2', tab: 'game2' },
      { id: 'nav-btn-quiz', tab: 'quiz' },
      { id: 'nav-btn-exam', tab: 'exam' }
    ];

    navButtons.forEach(btn => {
      document.getElementById(btn.id).addEventListener('click', () => this.switchTab(btn.tab));
    });

    // Glossary search
    document.getElementById('search-input').addEventListener('keyup', () => this.renderGlossary());

    // Three.js controls
    document.getElementById('reset-view-btn').addEventListener('click', () => this.resetThreeView());
    document.getElementById('btn-view-single').addEventListener('click', () => this.setViewLevel('single'));
    document.getElementById('btn-view-few').addEventListener('click', () => this.setViewLevel('few'));
    document.getElementById('btn-view-full').addEventListener('click', () => this.setViewLevel('full'));

    // Quiz Buttons
    document.getElementById('quiz-start-btn').addEventListener('click', () => this.startQuiz());
    document.getElementById('quiz-hint-btn').addEventListener('click', () => this.toggleQuizHint());
    document.getElementById('quiz-next-btn').addEventListener('click', () => this.nextQuizQuestion());
    document.getElementById('quiz-restart-btn').addEventListener('click', () => this.startQuiz());

    // Exam Button
    document.getElementById('exam-submit-btn').addEventListener('click', () => this.submitFinalExam());
    document.getElementById('modal-close-btn').addEventListener('click', () => {
      document.getElementById('exam-modal').classList.add('hidden');
    });

    // Page-wide click handler to activate AudioContext (for Autoplay policy)
    window.addEventListener('click', () => this.initAudioContext(), { once: true });
    window.addEventListener('touchstart', () => this.initAudioContext(), { once: true });
  },

  initAudioContext() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  // Synthesized Sound Generator (Web Audio API)
  playSynthSound(type) {
    if (!this.audioCtx) return;
    
    // Resume context if suspended
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const playTone = (freq, duration, typeOsc = 'sine', startTimeOffset = 0) => {
      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();
      
      osc.type = typeOsc;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + startTimeOffset);
      
      gainNode.gain.setValueAtTime(0.12, this.audioCtx.currentTime + startTimeOffset);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + startTimeOffset + duration - 0.02);
      
      osc.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
      
      osc.start(this.audioCtx.currentTime + startTimeOffset);
      osc.stop(this.audioCtx.currentTime + startTimeOffset + duration);
    };

    switch (type) {
      case 'start':
        // A rising sequence of tones
        playTone(330, 0.12, 'sine', 0);
        playTone(440, 0.12, 'sine', 0.12);
        playTone(660, 0.25, 'sine', 0.24);
        break;
      case 'correct':
        // High double beep
        playTone(880, 0.08, 'triangle', 0);
        playTone(1320, 0.15, 'triangle', 0.08);
        break;
      case 'wrong':
        // Low buzzy sliding down thud
        playTone(150, 0.3, 'sawtooth', 0);
        playTone(110, 0.3, 'sawtooth', 0.05);
        break;
      case 'success':
        // Happy triumphant arpeggio (for records/passing exam)
        playTone(523, 0.1, 'sine', 0); // C5
        playTone(659, 0.1, 'sine', 0.1); // E5
        playTone(784, 0.1, 'sine', 0.2); // G5
        playTone(1046, 0.3, 'sine', 0.3); // C6
        break;
      case 'gameover':
        // Melancholic descending tone
        playTone(330, 0.2, 'triangle', 0);
        playTone(293, 0.2, 'triangle', 0.2);
        playTone(220, 0.4, 'triangle', 0.4);
        break;
    }
  },

  switchLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem('carbon_lang', lang);
    
    // Highlight correct language button
    const buttons = {
      he: document.getElementById('lang-he'),
      en: document.getElementById('lang-en'),
      ar: document.getElementById('lang-ar')
    };

    Object.keys(buttons).forEach(key => {
      if (key === lang) {
        buttons[key].className = "px-3 py-1 text-xs font-bold rounded-full transition-all bg-cyan-500 text-slate-950 shadow-sm";
      } else {
        buttons[key].className = "px-3 py-1 text-xs font-medium rounded-full transition-all text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400";
      }
    });

    // Reset Games and Exams to prevent UI sync/translation errors
    GameRace.reset();
    GameSorter.reset();
    this.resetQuiz();
    this.resetExam();

    this.translatePage();
    this.renderGlossary();
    this.renderAllotropeSelectors();

    // Rebuild the 3D scene labels
    if (this.scene) {
      this.setViewLevel(this.viewLevel);
    }
  },

  translatePage() {
    const dict = translations[this.currentLanguage];
    
    // Set html direction attribute
    const isRtl = this.currentLanguage === 'he' || this.currentLanguage === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLanguage;

    // Direct IDs translation
    const idList = [
      'app-title-text', 'app-subtitle-text', 'mastery-lbl',
      'nav-btn-glossary', 'nav-btn-simulations', 'nav-btn-game1', 'nav-btn-game2', 'nav-btn-quiz', 'nav-btn-exam',
      'glossary-header-title', 'glossary-header-desc', 'no-results-text',
      'sims-header-title', 'sims-header-desc', 'sims-select-allotrope-title', 'control-inst-lbl-text', 'control-inst-desc', 'reset-view-lbl', 'view-level-title',
      'btn-view-single', 'btn-view-few', 'btn-view-full',
      'race-header-title', 'race-header-desc', 'race-banner-title', 'race-banner-desc', 'race-start-hs-lbl', 'game1-start-btn',
      'race-hud-time-lbl', 'race-hud-score-lbl', 'race-hud-hs-lbl', 'race-question-tag', 'race-go-title', 'game1-gameover-msg', 'race-go-score-lbl', 'race-go-hs-lbl', 'game1-restart-btn',
      'sorter-header-title', 'sorter-header-desc', 'sorter-banner-title', 'sorter-banner-desc', 'sorter-start-hs-lbl', 'game2-start-btn',
      'sorter-hud-lives-lbl', 'sorter-hud-score-lbl', 'sorter-hud-hs-lbl', 'sorter-question-tag', 'sorter-instruction-lbl', 'sorter-go-title', 'game2-gameover-msg', 'sorter-go-score-lbl', 'sorter-go-hs-lbl', 'game2-restart-btn',
      'quiz-header-title', 'quiz-header-desc', 'quiz-banner-title', 'quiz-banner-desc', 'quiz-start-btn', 'quiz-hint-btn', 'quiz-next-btn', 'quiz-res-title', 'quiz-results-msg', 'quiz-res-sc-lbl', 'quiz-restart-btn',
      'exam-header-title', 'exam-header-desc', 'exam-grade-lbl', 'exam-status-msg', 'exam-disclaimer-text', 'exam-submit-btn',
      'footer-brand', 'footer-credits', 'footer-author',
      'modal-warning-title', 'modal-warning-desc', 'modal-close-btn'
    ];

    idList.forEach(id => {
      const el = document.getElementById(id);
      const dictKey = this.mapIdToKey(id);
      if (el && dict[dictKey]) {
        if (el.tagName === 'INPUT') {
          el.placeholder = dict[dictKey];
        } else {
          // Keep structure labels, or replace full innerText
          el.innerText = dict[dictKey];
        }
      }
    });

    // Special translation for search placeholder
    const searchInp = document.getElementById('search-input');
    if (searchInp) {
      searchInp.placeholder = dict.searchPlaceholder;
    }
  },

  mapIdToKey(id) {
    const mapping = {
      'app-title-text': 'appTitle',
      'app-subtitle-text': 'appSubtitle',
      'mastery-lbl': 'masteryLevel',
      'nav-btn-glossary': 'tabGlossary',
      'nav-btn-simulations': 'tabSimulations',
      'nav-btn-game1': 'tabGameRace',
      'nav-btn-game2': 'tabGameSorter',
      'nav-btn-quiz': 'tabQuiz',
      'nav-btn-exam': 'tabExam',
      'glossary-header-title': 'tabGlossary',
      'glossary-header-desc': 'glossaryDesc',
      'search-input': 'searchPlaceholder',
      'no-results-text': 'noResults',
      'sims-header-title': 'tabSimulations',
      'sims-header-desc': 'simsDesc',
      'sims-select-allotrope-title': 'allotropeSelect',
      'control-inst-lbl-text': 'navInstructionsLabel',
      'control-inst-desc': 'instructions3d',
      'reset-view-lbl': 'resetView',
      'view-level-title': 'viewLevel',
      'btn-view-single': 'viewSingle',
      'btn-view-few': 'viewFew',
      'btn-view-full': 'viewFull',
      'race-header-title': 'gameRaceTitle',
      'race-header-desc': 'gameRaceDesc',
      'race-banner-title': 'gameRaceTitle',
      'race-banner-desc': 'gameRaceDesc',
      'race-start-hs-lbl': 'highScore',
      'game1-start-btn': 'startGame',
      'race-hud-time-lbl': 'time',
      'race-hud-score-lbl': 'score',
      'race-hud-hs-lbl': 'highScore',
      'race-question-tag': 'raceQuestionTag',
      'race-go-title': 'gameOver',
      'game1-gameover-msg': 'gameRaceGOMsg',
      'race-go-score-lbl': 'finalScore',
      'race-go-hs-lbl': 'highScore',
      'game1-restart-btn': 'restartGame',
      'sorter-header-title': 'gameSorterTitle',
      'sorter-header-desc': 'gameSorterDesc',
      'sorter-banner-title': 'gameSorterTitle',
      'sorter-banner-desc': 'gameSorterDesc',
      'sorter-start-hs-lbl': 'highScore',
      'game2-start-btn': 'startGame',
      'sorter-hud-lives-lbl': 'lives',
      'sorter-hud-score-lbl': 'score',
      'sorter-hud-hs-lbl': 'highScore',
      'sorter-question-tag': 'sorterQuestionTag',
      'sorter-instruction-lbl': 'sortInstruction',
      'sorter-go-title': 'gameOver',
      'game2-gameover-msg': 'gameSorterGOMsg',
      'sorter-go-score-lbl': 'finalScore',
      'sorter-go-hs-lbl': 'highScore',
      'game2-restart-btn': 'restartGame',
      'quiz-header-title': 'quizTitle',
      'quiz-header-desc': 'quizDesc',
      'quiz-banner-title': 'quizTitle',
      'quiz-banner-desc': 'quizDesc',
      'quiz-start-btn': 'startGame',
      'quiz-hint-btn': 'getHint',
      'quiz-next-btn': 'nextQuestion',
      'quiz-res-title': 'quizCompleted',
      'quiz-results-msg': 'quizResultsMsg',
      'quiz-res-sc-lbl': 'finalScore',
      'quiz-restart-btn': 'restartGame',
      'exam-header-title': 'examTitle',
      'exam-header-desc': 'examDesc',
      'exam-grade-lbl': 'examGrade',
      'exam-status-msg': 'examPassed',
      'exam-disclaimer-text': 'examDisclaimer',
      'exam-submit-btn': 'submitExam',
      'footer-brand': 'branding',
      'footer-credits': 'credits',
      'footer-author': 'author',
      'modal-warning-title': 'unansweredWarningTitle',
      'modal-warning-desc': 'unansweredWarningText',
      'modal-close-btn': 'closeModal'
    };

    // If key not in mapping, clean ID to guess key
    if (mapping[id]) return mapping[id];
    return id;
  },

  getTranslation(key) {
    return translations[this.currentLanguage][key] || key;
  },

  toggleTheme() {
    const htmlTag = document.documentElement;
    if (this.currentTheme === 'dark') {
      this.currentTheme = 'light';
      htmlTag.classList.remove('dark');
      document.getElementById('sun-icon').classList.add('hidden');
      document.getElementById('moon-icon').classList.remove('hidden');
    } else {
      this.currentTheme = 'dark';
      htmlTag.classList.add('dark');
      document.getElementById('sun-icon').classList.remove('hidden');
      document.getElementById('moon-icon').classList.add('hidden');
    }
    localStorage.setItem('carbon_theme', this.currentTheme);
  },

  switchTab(tab) {
    if (this.activeTab === tab) return;
    
    // Stop games running if switching away
    if (this.activeTab === 'game1') GameRace.reset();
    if (this.activeTab === 'game2') GameSorter.reset();

    // Remove active styles from former tab buttons
    this.deactivateTabButtons(this.activeTab);

    // Hide former section
    document.getElementById(`section-${this.activeTab}`).classList.add('hidden-section');
    document.getElementById(`section-${this.activeTab}`).classList.remove('fade-in');

    // Set new active
    this.activeTab = tab;
    
    // Show new section
    const newSec = document.getElementById(`section-${this.activeTab}`);
    newSec.classList.remove('hidden-section');
    newSec.classList.add('fade-in');

    // Apply active class to new buttons
    this.activateTabButtons(this.activeTab);

    // Extra setups for specific sections
    if (tab === 'simulations') {
      this.renderAllotropeSelectors();
      this.setViewLevel(this.viewLevel);
      setTimeout(() => this.onResize3D(), 100);
    } else if (tab === 'exam' && !this.examSubmitted) {
      this.renderFinalExam();
    }
  },

  deactivateTabButtons(tab) {
    const map = {
      glossary: ['nav-btn-glossary', 'active-blue-tab'],
      simulations: ['nav-btn-simulations', 'active-blue-tab'],
      game1: ['nav-btn-game1', 'active-green-tab'],
      game2: ['nav-btn-game2', 'active-green-tab'],
      quiz: ['nav-btn-quiz', 'active-orange-tab'],
      exam: ['nav-btn-exam', 'active-orange-tab']
    };

    const entry = map[tab];
    if (entry) {
      const btn = document.getElementById(entry[0]);
      btn.classList.remove(entry[1]);
      // restore hover
      if (tab === 'glossary' || tab === 'simulations') btn.classList.add('hover:bg-blue-500/10');
      if (tab === 'game1' || tab === 'game2') btn.classList.add('hover:bg-emerald-500/10');
      if (tab === 'quiz' || tab === 'exam') btn.classList.add('hover:bg-orange-500/10');
    }
  },

  activateTabButtons(tab) {
    const map = {
      glossary: ['nav-btn-glossary', 'active-blue-tab'],
      simulations: ['nav-btn-simulations', 'active-blue-tab'],
      game1: ['nav-btn-game1', 'active-green-tab'],
      game2: ['nav-btn-game2', 'active-green-tab'],
      quiz: ['nav-btn-quiz', 'active-orange-tab'],
      exam: ['nav-btn-exam', 'active-orange-tab']
    };

    const entry = map[tab];
    if (entry) {
      const btn = document.getElementById(entry[0]);
      btn.classList.add(entry[1]);
      btn.classList.remove('hover:bg-blue-500/10', 'hover:bg-emerald-500/10', 'hover:bg-orange-500/10');
    }
  },

  // Glossary Rendering Engine
  renderGlossary() {
    const grid = document.getElementById('glossary-grid');
    const emptyState = document.getElementById('glossary-empty-state');
    const searchVal = document.getElementById('search-input').value.toLowerCase().trim();

    grid.innerHTML = '';
    const items = glossaryData[this.currentLanguage];
    const dict = translations[this.currentLanguage];

    let renderedCount = 0;

    items.forEach(item => {
      // Filter logic
      const matchesTerm = item.term.toLowerCase().includes(searchVal);
      const matchesStructure = item.structure.toLowerCase().includes(searchVal);
      const matchesProperties = item.properties.toLowerCase().includes(searchVal);
      const matchesUses = item.uses.toLowerCase().includes(searchVal);

      if (searchVal === '' || matchesTerm || matchesStructure || matchesProperties || matchesUses) {
        renderedCount++;
        
        const card = document.createElement('div');
        card.className = "p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-500 hover:scale-[1.01] transition-all glow-cyan";
        
        card.innerHTML = `
          <div class="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
            <span class="text-2xl">${this.getIconForAllotrope(item.term)}</span>
            <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">${item.term}</h3>
          </div>
          <div class="space-y-2 text-xs md:text-sm">
            <p class="leading-relaxed"><strong class="text-blue-500 dark:text-blue-400 font-semibold">${dict.structureLabel}</strong> ${item.structure}</p>
            <p class="leading-relaxed"><strong class="text-blue-500 dark:text-blue-400 font-semibold">${dict.propertiesLabel}</strong> ${item.properties}</p>
            <p class="leading-relaxed"><strong class="text-blue-500 dark:text-blue-400 font-semibold">${dict.usesLabel}</strong> ${item.uses}</p>
          </div>
        `;
        grid.appendChild(card);
      }
    });

    if (renderedCount === 0) {
      grid.classList.add('hidden');
      emptyState.classList.remove('hidden');
      emptyState.classList.add('flex');
    } else {
      grid.classList.remove('hidden');
      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');
    }
  },

  getIconForAllotrope(term) {
    term = term.toLowerCase();
    if (term.includes('יהלום') || term.includes('diamond') || term.includes('الماس')) return '💎';
    if (term.includes('גרפיט') || term.includes('graphite') || term.includes('غرافيت')) return '✏️';
    if (term.includes('גרפן') || term.includes('graphene') || term.includes('غرافين')) return '🕸️';
    if (term.includes('פולרן') || term.includes('fullerene') || term.includes('فوليرين')) return '⚽';
    if (term.includes('צינורית') || term.includes('nanotube') || term.includes('أنبوب')) return '🧪';
    return '📦';
  },

  // Simulations Left Sidebar Render
  renderAllotropeSelectors() {
    const container = document.getElementById('allotrope-sim-selector');
    container.innerHTML = '';
    
    const items = glossaryData[this.currentLanguage];
    
    items.forEach(item => {
      const termKey = this.normalizeTermToKey(item.term);
      const isSelected = this.currentAllotrope === termKey;

      const btn = document.createElement('button');
      btn.className = isSelected
        ? "w-full text-start flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-500 text-white font-bold shadow-md transition-all text-xs md:text-sm shrink-0"
        : "w-full text-start flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-all text-xs md:text-sm shrink-0";
      
      btn.innerHTML = `
        <span>${this.getIconForAllotrope(item.term)}</span>
        <span>${item.term}</span>
      `;
      btn.addEventListener('click', () => this.selectAllotropeSim(termKey, item.term));
      container.appendChild(btn);
    });
  },

  normalizeTermToKey(term) {
    term = term.toLowerCase();
    if (term.includes('יהלום') || term.includes('diamond') || term.includes('الماس')) return 'diamond';
    if (term.includes('גרפיט') || term.includes('graphite') || term.includes('غرافيت')) return 'graphite';
    if (term.includes('גרפן') || term.includes('graphene') || term.includes('غرافين')) return 'graphene';
    if (term.includes('פולרן') || term.includes('fullerene') || term.includes('فوليرين')) return 'fullerene';
    if (term.includes('צינורית') || term.includes('nanotube') || term.includes('أنبوب')) return 'nanotube';
    return term;
  },

  selectAllotropeSim(key, displayName) {
    this.currentAllotrope = key;
    document.getElementById('active-allotrope-label').innerText = displayName;
    this.renderAllotropeSelectors();
    this.setViewLevel(this.viewLevel);
  },

  setViewLevel(level) {
    this.viewLevel = level;
    
    // Update Button Classes
    const btns = {
      single: document.getElementById('btn-view-single'),
      few: document.getElementById('btn-view-few'),
      full: document.getElementById('btn-view-full')
    };

    Object.keys(btns).forEach(key => {
      if (key === level) {
        btns[key].className = "px-4 py-2 text-xs font-bold rounded-xl border border-blue-500 bg-blue-500 text-white shadow-md transition-all";
      } else {
        btns[key].className = "px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all";
      }
    });

    this.rebuildMolecularModel();
  },

  // Three.js Simulator Setup
  initThreeJS() {
    const container = document.getElementById('3d-canvas-container');
    
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f172a); // Slate-900

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    this.camera.position.set(0, 0, 10);

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight1.position.set(5, 10, 7);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 0.3); // Cyan tint
    dirLight2.position.set(-5, -5, -5);
    this.scene.add(dirLight2);

    // Molecular Container Group
    this.molecularGroup = new THREE.Group();
    this.scene.add(this.molecularGroup);

    // Orbit Controls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxDistance = 25;
    this.controls.minDistance = 2;

    // Start render loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (this.controls) this.controls.update();
      
      // Auto-rotation when not dragging
      if (this.molecularGroup && !this.controls.state === -1) {
        this.molecularGroup.rotation.y += 0.002;
      }
      
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
    };
    animate();

    // Resize listener
    window.addEventListener('resize', () => this.onResize3D());
  },

  onResize3D() {
    const container = document.getElementById('3d-canvas-container');
    if (!container || !this.camera || !this.renderer) return;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  },

  resetThreeView() {
    if (this.camera && this.controls) {
      this.camera.position.set(0, 0, 10);
      this.controls.target.set(0, 0, 0);
      this.controls.update();
      if (this.molecularGroup) {
        this.molecularGroup.rotation.set(0, 0, 0);
      }
    }
  },

  rebuildMolecularModel() {
    if (!this.molecularGroup) return;

    // Clear previous elements
    while (this.molecularGroup.children.length > 0) {
      const obj = this.molecularGroup.children[0];
      this.molecularGroup.remove(obj);
    }

    const atoms = [];
    const bonds = []; // { fromIndex, toIndex, type: 'covalent'|'vdW' }

    // Colors & materials
    const atomMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155, // Charcoal Slate
      roughness: 0.1,
      metalness: 0.1,
      roughnessMap: null
    });

    const bondMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Light Slate
      roughness: 0.3
    });

    const vdWMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Glowing Cyan
      roughness: 0.5,
      transparent: true,
      opacity: 0.5
    });

    const scaleFactor = 1.3;

    // Generate structures mathematically based on selection and view level
    switch (this.currentAllotrope) {
      case 'diamond':
        this.generateDiamondLattice(atoms, bonds);
        break;
      case 'graphene':
        this.generateGrapheneLattice(atoms, bonds);
        break;
      case 'graphite':
        this.generateGraphiteLattice(atoms, bonds);
        break;
      case 'fullerene':
        this.generateFullereneC60(atoms, bonds);
        break;
      case 'nanotube':
        this.generateNanotube(atoms, bonds);
        break;
    }

    // Render atoms
    const atomRadius = this.currentAllotrope === 'fullerene' ? 0.22 : 0.28;
    const atomGeom = new THREE.SphereGeometry(atomRadius, 16, 16);

    atoms.forEach((pos) => {
      // Center & scale positions
      pos.multiplyScalar(scaleFactor);
      
      const mesh = new THREE.Mesh(atomGeom, atomMaterial);
      mesh.position.copy(pos);
      this.molecularGroup.add(mesh);
    });

    // Render bonds
    bonds.forEach((bond) => {
      const start = atoms[bond.fromIndex];
      const end = atoms[bond.toIndex];
      if (!start || !end) return;

      const isVdw = bond.type === 'vdW';
      const bondRadius = isVdw ? 0.04 : 0.08;

      const direction = new THREE.Vector3().subVectors(end, start);
      const length = direction.length();
      const center = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);

      const geom = new THREE.CylinderGeometry(bondRadius, bondRadius, length, 8);
      const mat = isVdw ? vdWMaterial : bondMaterial;
      const mesh = new THREE.Mesh(geom, mat);

      // Rotate cylinder to align with the connection line
      const up = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction.clone().normalize());
      mesh.quaternion.copy(quaternion);
      mesh.position.copy(center);

      this.molecularGroup.add(mesh);
    });

    // Center scene camera target
    this.resetThreeView();
  },

  // 1. DIAMOND LATTICE GENERATOR
  generateDiamondLattice(atoms, bonds) {
    // FCC Diamond basis in unit cell:
    // Lattice 1: FCC points
    // Lattice 2: shifted by (0.25, 0.25, 0.25)
    const unitSize = 2.0;
    const cellsLimit = this.viewLevel === 'single' ? 0 : (this.viewLevel === 'few' ? 1 : 2);
    
    // single = just a tetrahedral unit
    if (this.viewLevel === 'single') {
      const center = new THREE.Vector3(0, 0, 0);
      atoms.push(center);
      // Tetrahedral offsets
      atoms.push(new THREE.Vector3( 0.6,  0.6,  0.6));
      atoms.push(new THREE.Vector3(-0.6, -0.6,  0.6));
      atoms.push(new THREE.Vector3(-0.6,  0.6, -0.6));
      atoms.push(new THREE.Vector3( 0.6, -0.6, -0.6));

      for (let i = 1; i <= 4; i++) {
        bonds.push({ fromIndex: 0, toIndex: i, type: 'covalent' });
      }
      return;
    }

    // Standard FCC Cubic lattice generation loop
    for (let cx = -cellsLimit; cx < cellsLimit; cx++) {
      for (let cy = -cellsLimit; cy < cellsLimit; cy++) {
        for (let cz = -cellsLimit; cz < cellsLimit; cz++) {
          
          // Basic cell coordinate system (corners & faces)
          const basePoints = [
            [0,0,0], [1,1,0], [1,0,1], [0,1,1],
            [1,0,0], [0,1,0], [0,0,1], [1,1,1] // unit limits
          ];

          basePoints.forEach(pt => {
            const px = (cx + pt[0]/2) * unitSize;
            const py = (cy + pt[1]/2) * unitSize;
            const pz = (cz + pt[2]/2) * unitSize;

            const p1 = new THREE.Vector3(px, py, pz);
            const p2 = new THREE.Vector3(px + unitSize/4, py + unitSize/4, pz + unitSize/4);

            // Add unique coordinates only
            if (!this.containsVector(atoms, p1)) atoms.push(p1);
            if (!this.containsVector(atoms, p2)) atoms.push(p2);
          });
        }
      }
    }

    // Connect atoms closer than covalent threshold (~0.9 units for side length unitSize=2)
    const threshold = 1.0; 
    this.computeBondsFromDistance(atoms, bonds, threshold, 'covalent');
  },

  // 2. GRAPHENE LATTICE GENERATOR
  generateGrapheneLattice(atoms, bonds) {
    const size = this.viewLevel === 'single' ? 1 : (this.viewLevel === 'few' ? 3 : 5);
    const spacing = 1.0;
    
    // We generate a hexagonal coordinates grid
    for (let i = -size; i <= size; i++) {
      for (let j = -size; j <= size; j++) {
        const offsetX = (Math.abs(j) % 2) * (Math.sqrt(3) / 2) * spacing;
        const x = (i * Math.sqrt(3) + offsetX);
        const y = j * 1.5 * spacing;
        
        const a1 = new THREE.Vector3(x, y, 0);
        const a2 = new THREE.Vector3(x, y + 1.0 * spacing, 0);

        if (this.viewLevel === 'single') {
          // just one hexagon
          if (i === 0 && j >= 0 && j <= 1) {
            atoms.push(a1, a2);
          }
        } else {
          atoms.push(a1, a2);
        }
      }
    }

    // Center Graphene Sheet
    this.centerAtoms(atoms);

    const threshold = 1.1 * spacing;
    this.computeBondsFromDistance(atoms, bonds, threshold, 'covalent');
  },

  // 3. GRAPHITE LATTICE GENERATOR
  generateGraphiteLattice(atoms, bonds) {
    const size = this.viewLevel === 'single' ? 1 : (this.viewLevel === 'few' ? 3 : 4);
    const spacing = 1.0;
    const layerOffsetZ = 1.9; // Layer separation distance

    // 3 stacked layers (A-B-A)
    const layers = this.viewLevel === 'single' ? 2 : (this.viewLevel === 'few' ? 2 : 3);

    for (let l = 0; l < layers; l++) {
      const z = (l - (layers - 1) / 2) * layerOffsetZ;
      // Shift Layer B horizontally to show AB stacking
      const shiftX = (l % 2 === 1) ? (Math.sqrt(3) / 3) * spacing : 0;
      
      const layerAtomsStart = atoms.length;

      for (let i = -size; i <= size; i++) {
        for (let j = -size; j <= size; j++) {
          const offsetX = (Math.abs(j) % 2) * (Math.sqrt(3) / 2) * spacing;
          const x = (i * Math.sqrt(3) + offsetX) + shiftX;
          const y = j * 1.5 * spacing;
          
          const a1 = new THREE.Vector3(x, y, z);
          const a2 = new THREE.Vector3(x, y + 1.0 * spacing, z);

          if (this.viewLevel === 'single') {
            if (i === 0 && j >= 0 && j <= 1) {
              atoms.push(a1, a2);
            }
          } else {
            atoms.push(a1, a2);
          }
        }
      }

      // Generate covalent bonds for this layer specifically
      const layerAtomsEnd = atoms.length;
      const layerAtoms = atoms.slice(layerAtomsStart, layerAtomsEnd);
      const layerBonds = [];
      const threshold = 1.15 * spacing;
      
      this.computeBondsFromDistance(layerAtoms, layerBonds, threshold, 'covalent');
      
      // Map temporary indices back to global atoms index
      layerBonds.forEach(b => {
        bonds.push({
          fromIndex: b.fromIndex + layerAtomsStart,
          toIndex: b.toIndex + layerAtomsStart,
          type: 'covalent'
        });
      });
    }

    this.centerAtoms(atoms);

    // Weak van der Waals interlayer bonds representation
    if (this.viewLevel !== 'single') {
      const vdwThreshold = layerOffsetZ * 1.05;
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = Math.abs(atoms[i].x - atoms[j].x);
          const dy = Math.abs(atoms[i].y - atoms[j].y);
          const dz = Math.abs(atoms[i].z - atoms[j].z);
          
          // If vertically aligned but in adjacent layers
          if (dx < 0.2 && dy < 0.2 && Math.abs(dz - layerOffsetZ) < 0.1) {
            bonds.push({ fromIndex: i, toIndex: j, type: 'vdW' });
          }
        }
      }
    }
  },

  // 4. FULLERENE C60 GENERATOR
  generateFullereneC60(atoms, bonds) {
    const phi = (1 + Math.sqrt(5)) / 2;
    
    // Create standard Truncated Icosahedron coordinates
    const baseCoords = [];
    
    const permute = (x, y, z) => {
      const permutations = [
        [x, y, z], [x, z, y], [y, x, z], [y, z, x], [z, x, y], [z, y, x]
      ];
      const added = new Set();

      permutations.forEach(([p0, p1, p2]) => {
        const signs = [-1, 1];
        signs.forEach(s0 => {
          signs.forEach(s1 => {
            signs.forEach(s2 => {
              const rx = p0 * s0;
              const ry = p1 * s1;
              const rz = p2 * s2;
              const key = `${rx.toFixed(3)},${ry.toFixed(3)},${rz.toFixed(3)}`;
              if (!added.has(key)) {
                added.add(key);
                baseCoords.push(new THREE.Vector3(rx, ry, rz));
              }
            });
          });
        });
      });
    };

    // Permute base coordinates (values scaled for nice C-C bond length of approx 1.0)
    permute(0, 1, 3 * phi);
    permute(2, 1 + 2 * phi, phi);
    permute(1, 2 + phi, 2 * phi);

    // Scaling factor to normal size
    baseCoords.forEach(v => {
      v.normalize().multiplyScalar(3.0); // radius 3.0 units
    });

    if (this.viewLevel === 'single') {
      // Just a pentagon fragment of C60
      atoms.push(...baseCoords.slice(0, 5));
    } else if (this.viewLevel === 'few') {
      // Half sphere cage
      atoms.push(...baseCoords.filter(v => v.y >= 0));
    } else {
      // Full C60
      atoms.push(...baseCoords);
    }

    this.centerAtoms(atoms);

    // Compute covalent bonds
    // Vertices coordinates has slightly two different bond lengths, threshold 1.2 is ideal
    this.computeBondsFromDistance(atoms, bonds, 1.25, 'covalent');
  },

  // 5. CARBON NANOTUBE (CNT) GENERATOR
  generateNanotube(atoms, bonds) {
    const Nc = 6; // Hexagons in circumference
    const R = (Nc * Math.sqrt(3)) / (2 * Math.PI); // Radius of rolled sheet
    const length = this.viewLevel === 'single' ? 1 : (this.viewLevel === 'few' ? 3 : 6);
    const spacing = 1.0;

    for (let i = 0; i < Nc; i++) {
      for (let j = -length; j <= length; j++) {
        const offsetX = (Math.abs(j) % 2) * (Math.sqrt(3) / 2) * spacing;
        const xg = (i * Math.sqrt(3) + offsetX) * spacing;
        const yg = j * 1.5 * spacing;
        
        // Roll coordinates around Y axis
        const theta = xg / R;
        const x = R * Math.cos(theta);
        const z = R * Math.sin(theta);
        const y = yg;

        atoms.push(new THREE.Vector3(x, y, z));

        // Shifted basis point
        const xg2 = xg;
        const yg2 = yg + 1.0 * spacing;
        const theta2 = xg2 / R;
        const x2 = R * Math.cos(theta2);
        const z2 = R * Math.sin(theta2);
        const y2 = yg2;

        atoms.push(new THREE.Vector3(x2, y2, z2));
      }
    }

    this.centerAtoms(atoms);

    const threshold = 1.15 * spacing;
    this.computeBondsFromDistance(atoms, bonds, threshold, 'covalent');
  },

  // Helpers for structural coordinates
  containsVector(arr, vec, eps = 0.05) {
    return arr.some(v => v.distanceTo(vec) < eps);
  },

  centerAtoms(atoms) {
    if (atoms.length === 0) return;
    const center = new THREE.Vector3(0, 0, 0);
    atoms.forEach(v => center.add(v));
    center.divideScalar(atoms.length);
    atoms.forEach(v => v.sub(center));
  },

  computeBondsFromDistance(atoms, bonds, threshold, type) {
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        const dist = atoms[i].distanceTo(atoms[j]);
        if (dist < threshold) {
          bonds.push({ fromIndex: i, toIndex: j, type: type });
        }
      }
    }
  },

  // Practice Quiz Manager
  startQuiz() {
    this.quizScore = 0;
    this.quizActiveIndex = 0;
    this.quizSelected = false;
    
    // Prepare randomized quiz questions pool
    this.quizQuestions = [...quizQuestions[this.currentLanguage]];
    this.shuffleArray(this.quizQuestions);

    document.getElementById('quiz-start-screen').classList.add('hidden');
    document.getElementById('quiz-results-screen').classList.add('hidden');
    document.getElementById('quiz-active-layout').classList.remove('hidden');

    this.renderQuizQuestion();
  },

  renderQuizQuestion() {
    this.quizSelected = false;
    document.getElementById('quiz-hint-text').classList.add('hidden');
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-next-btn').classList.add('hidden');

    // Count tag
    const currentQ = this.quizQuestions[this.quizActiveIndex];
    document.getElementById('quiz-count-text').innerText = this.getTranslation('questionCount')
      .replace('{current}', this.quizActiveIndex + 1)
      .replace('{total}', 10);

    // Question body
    document.getElementById('quiz-question-text').innerText = currentQ.question;
    
    // Hint text
    document.getElementById('quiz-hint-text').innerText = currentQ.hint;

    // Render options
    const optBox = document.getElementById('quiz-options-box');
    optBox.innerHTML = '';

    currentQ.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = "w-full text-start px-5 py-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl shadow-sm hover:border-orange-500 hover:bg-orange-500/5 active:scale-[0.99] transition-all font-semibold text-sm md:text-base cursor-pointer";
      btn.innerText = opt;
      btn.addEventListener('click', () => this.selectQuizOption(idx, btn));
      optBox.appendChild(btn);
    });
  },

  toggleQuizHint() {
    const hintEl = document.getElementById('quiz-hint-text');
    hintEl.classList.toggle('hidden');
  },

  selectQuizOption(selectedIndex, btnElement) {
    if (this.quizSelected) return;
    this.quizSelected = true;

    const currentQ = this.quizQuestions[this.quizActiveIndex];
    const optBox = document.getElementById('quiz-options-box');
    const buttons = optBox.getElementsByTagName('button');

    // Disable all options
    for (let btn of buttons) {
      btn.classList.add('pointer-events-none-override');
    }

    const feedbackContainer = document.getElementById('quiz-feedback');
    const feedbackTitle = document.getElementById('quiz-feedback-title');
    const feedbackExp = document.getElementById('quiz-feedback-explanation');

    if (selectedIndex === currentQ.correct) {
      // Correct!
      this.quizScore++;
      btnElement.classList.remove('bg-white', 'dark:bg-slate-900');
      btnElement.classList.add('bg-emerald-500', 'border-emerald-500', 'text-white');
      
      feedbackContainer.className = "p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-800 dark:text-emerald-400 text-xs md:text-sm leading-relaxed";
      feedbackTitle.innerText = this.getTranslation('correctAlert');
      this.playSynthSound('correct');
    } else {
      // Incorrect!
      btnElement.classList.remove('bg-white', 'dark:bg-slate-900');
      btnElement.classList.add('bg-red-500', 'border-red-500', 'text-white');

      const correctBtn = buttons[currentQ.correct];
      correctBtn.classList.remove('bg-white', 'dark:bg-slate-900');
      correctBtn.classList.add('bg-emerald-500', 'border-emerald-500', 'text-white');

      feedbackContainer.className = "p-5 rounded-2xl border border-red-500/20 bg-red-500/5 text-red-800 dark:text-red-400 text-xs md:text-sm leading-relaxed";
      feedbackTitle.innerText = `${this.getTranslation('wrongAlert')} "${currentQ.options[currentQ.correct]}"`;
      this.playSynthSound('wrong');
    }

    feedbackExp.innerText = currentQ.feedback;
    feedbackContainer.classList.remove('hidden');

    // Show next button
    document.getElementById('quiz-next-btn').classList.remove('hidden');
    
    // Change next text if it's the last question
    if (this.quizActiveIndex === 9) {
      document.getElementById('quiz-next-btn').innerText = this.getTranslation('showResults');
    } else {
      document.getElementById('quiz-next-btn').innerText = this.getTranslation('nextQuestion');
    }
  },

  nextQuizQuestion() {
    this.quizActiveIndex++;
    if (this.quizActiveIndex < 10) {
      this.renderQuizQuestion();
    } else {
      this.endQuiz();
    }
  },

  endQuiz() {
    document.getElementById('quiz-active-layout').classList.add('hidden');
    document.getElementById('quiz-final-score').innerText = `${this.quizScore} / 10`;
    document.getElementById('quiz-results-screen').classList.remove('hidden');

    // Trigger high score celebration if perfect
    if (this.quizScore === 10) {
      this.playSynthSound('success');
      this.triggerConfetti();
    } else {
      this.playSynthSound('gameover');
    }

    // Save progression
    localStorage.setItem('quiz_completed', 'true');
    this.updateMasteryLevel();
  },

  resetQuiz() {
    document.getElementById('quiz-active-layout').classList.add('hidden');
    document.getElementById('quiz-results-screen').classList.add('hidden');
    document.getElementById('quiz-start-screen').classList.remove('hidden');
  },

  // Final Exam Manager
  renderFinalExam() {
    const listContainer = document.getElementById('exam-questions-scroll');
    listContainer.innerHTML = '';

    const questions = examQuestions[this.currentLanguage];
    
    questions.forEach((q, qIndex) => {
      const qDiv = document.createElement('div');
      qDiv.id = `exam-q-box-${q.id}`;
      qDiv.className = "py-6 space-y-4 transition-all duration-300";

      // Add a border left styling to unanswered questions highlighted
      qDiv.innerHTML = `
        <div class="flex gap-2">
          <span class="font-extrabold text-orange-500 text-sm md:text-base">${qIndex + 1}.</span>
          <p class="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base leading-relaxed">${q.question}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ps-6">
          ${q.options.map((opt, optIndex) => `
            <label class="flex items-start gap-3 p-3.5 border border-slate-200 dark:border-slate-800 hover:border-orange-500 rounded-xl cursor-pointer transition-all hover:bg-orange-500/5 text-xs md:text-sm font-semibold select-none">
              <input type="radio" name="exam-q-${q.id}" value="${optIndex}" class="mt-0.5 text-orange-500 focus:ring-orange-500 cursor-pointer" ${this.examSubmitted ? 'disabled' : ''}>
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      `;

      // Setup inputs change events
      const inputs = qDiv.querySelectorAll('input[type="radio"]');
      inputs.forEach(input => {
        input.addEventListener('change', (e) => {
          this.examAnswers[q.id] = parseInt(e.target.value);
          // Remove red highlighted border if selected
          qDiv.classList.remove('border-r-4', 'border-red-500', 'ps-2', 'bg-red-500/5');
        });
      });

      listContainer.appendChild(qDiv);
    });
  },

  submitFinalExam() {
    if (this.examSubmitted) return;

    const questions = examQuestions[this.currentLanguage];
    const unanswered = [];

    // Check validation
    questions.forEach(q => {
      if (this.examAnswers[q.id] === undefined) {
        unanswered.push(q.id);
      }
    });

    if (unanswered.length > 0) {
      // Show warning modal
      const modal = document.getElementById('exam-modal');
      modal.classList.remove('hidden');
      App.playSynthSound('wrong');

      // Scroll to the first unanswered question
      const firstId = unanswered[0];
      const element = document.getElementById(`exam-q-box-${firstId}`);
      
      // Highlight all unanswered in red
      unanswered.forEach(id => {
        const box = document.getElementById(`exam-q-box-${id}`);
        box.classList.add('border-r-4', 'border-red-500', 'ps-2', 'bg-red-500/5');
      });

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }

      return;
    }

    // Submit Exam & Grade
    this.examSubmitted = true;
    let correctCount = 0;

    questions.forEach(q => {
      const userChoice = this.examAnswers[q.id];
      const isCorrect = userChoice === q.correct;
      if (isCorrect) correctCount++;

      const qBox = document.getElementById(`exam-q-box-${q.id}`);
      const labels = qBox.getElementsByTagName('label');

      // Loop options and color code them
      q.options.forEach((opt, optIndex) => {
        const label = labels[optIndex];
        const radio = label.querySelector('input');
        
        label.classList.remove('hover:border-orange-500', 'hover:bg-orange-500/5', 'cursor-pointer');
        label.classList.add('pointer-events-none');
        radio.disabled = true;

        if (optIndex === q.correct) {
          // Highlight correct answer in emerald
          label.classList.add('bg-emerald-500/10', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-400');
        } else if (optIndex === userChoice && !isCorrect) {
          // Highlight user's incorrect choice in red
          label.classList.add('bg-red-500/10', 'border-red-500', 'text-red-800', 'dark:text-red-400');
        }
      });
    });

    const grade = Math.round((correctCount / 25) * 100);

    // Save exam grades in localStorage
    const savedHighScore = parseInt(localStorage.getItem('carbon_exam_hs')) || 0;
    if (grade > savedHighScore) {
      localStorage.setItem('carbon_exam_hs', grade);
    }

    // Show Results HUD
    document.getElementById('exam-final-grade').innerText = `${grade}%`;
    document.getElementById('exam-grade-count').innerText = `${correctCount} ${this.getTranslation('correctAnswersCount').toLowerCase()} 25`;

    const statusMsg = document.getElementById('exam-status-msg');
    if (grade >= 60) {
      statusMsg.innerText = this.getTranslation('examPassed');
      statusMsg.className = "font-bold block text-emerald-500";
      this.playSynthSound('success');
      if (grade === 100) {
        this.triggerConfetti();
      }
    } else {
      statusMsg.innerText = this.getTranslation('examFailed');
      statusMsg.className = "font-bold block text-red-500";
      this.playSynthSound('gameover');
    }

    document.getElementById('exam-results-screen').classList.remove('hidden');
    document.getElementById('exam-disclaimer-box').classList.remove('hidden');
    document.getElementById('exam-submit-btn').classList.add('hidden');

    this.updateMasteryLevel();
  },

  resetExam() {
    this.examSubmitted = false;
    this.examAnswers = {};
    document.getElementById('exam-results-screen').classList.add('hidden');
    document.getElementById('exam-disclaimer-box').classList.add('hidden');
    document.getElementById('exam-submit-btn').classList.remove('hidden');
  },

  // Confetti particles explosion
  triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  },

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },

  // Carbon Mastery progression calculations
  updateMasteryLevel() {
    // Collect stats from localStorage
    const raceHs = parseInt(localStorage.getItem('carbon_race_hs')) || 0;
    const sorterHs = parseInt(localStorage.getItem('carbon_sorter_hs')) || 0;
    const quizDone = localStorage.getItem('quiz_completed') === 'true';
    const examHs = parseInt(localStorage.getItem('carbon_exam_hs')) || 0;

    let points = 0;
    points += Math.round(raceHs / 10); // 10 points = 1 progress point
    points += sorterHs * 5; // 1 sorted property = 5 progress points
    if (quizDone) points += 20; // 20 points for quiz completion
    points += Math.round(examHs * 0.8); // up to 80 points for exam grade

    let levelTextKey = 'levelNovice';
    if (points >= 30 && points <= 80) {
      levelTextKey = 'levelApprentice';
    } else if (points > 80 && points <= 150) {
      levelTextKey = 'levelExpert';
    } else if (points > 150) {
      levelTextKey = 'levelMaster';
    }

    const dict = translations[this.currentLanguage];
    document.getElementById('user-mastery-level').innerText = dict[levelTextKey] || levelTextKey;
  }
};

// Initialize main app on page load
window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
