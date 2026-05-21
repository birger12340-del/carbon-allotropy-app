// Game 1: Carbon Race & Game 2: Carbon Sorter Engines
// Coordinates with js/data.js and js/app.js

const GameRace = {
  score: 0,
  timeLeft: 45,
  highScore: 0,
  timerInterval: null,
  currentQuestion: null,
  isPlaying: false,
  isDebouncing: false,
  questionsPool: [],

  init() {
    this.highScore = parseInt(localStorage.getItem('carbon_race_hs')) || 0;
    document.getElementById('game1-hs-val').innerText = this.highScore;
    document.getElementById('game1-active-hs').innerText = this.highScore;
    document.getElementById('game1-final-hs').innerText = this.highScore;

    // Start Button Event
    document.getElementById('game1-start-btn').addEventListener('click', () => this.startGame());
    document.getElementById('game1-restart-btn').addEventListener('click', () => this.startGame());
  },

  startGame() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.score = 0;
    this.timeLeft = 45;
    this.isDebouncing = false;

    // Sync high score
    this.highScore = parseInt(localStorage.getItem('carbon_race_hs')) || 0;
    document.getElementById('game1-active-hs').innerText = this.highScore;

    // Sound
    App.playSynthSound('start');

    // UI Updates
    document.getElementById('game1-score').innerText = this.score;
    document.getElementById('game1-timer').innerText = this.timeLeft;
    document.getElementById('game1-start-screen').classList.add('hidden');
    document.getElementById('game1-gameover-screen').classList.add('hidden');
    document.getElementById('game1-new-record-badge').classList.add('hidden');
    document.getElementById('game1-active-layout').classList.remove('hidden');

    // Prepare questions pool (clone array)
    this.questionsPool = [...quizQuestions[App.currentLanguage]];
    this.shuffleArray(this.questionsPool);

    this.loadNextQuestion();

    // Start Timer Interval
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      document.getElementById('game1-timer').innerText = this.timeLeft;
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  },

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },

  loadNextQuestion() {
    if (!this.isPlaying) return;

    // If pool is empty, reload questions
    if (this.questionsPool.length === 0) {
      this.questionsPool = [...quizQuestions[App.currentLanguage]];
      this.shuffleArray(this.questionsPool);
    }

    this.currentQuestion = this.questionsPool.pop();
    document.getElementById('game1-question-text').innerText = this.currentQuestion.question;

    const answersBox = document.getElementById('game1-answers-box');
    answersBox.innerHTML = '';
    
    // Create options
    this.currentQuestion.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = "w-full text-start px-5 py-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl shadow-sm hover:border-emerald-500 hover:bg-emerald-500/5 active:scale-[0.99] transition-all font-semibold text-sm md:text-base cursor-pointer";
      btn.innerText = opt;
      btn.addEventListener('click', () => this.handleAnswer(index, btn));
      answersBox.appendChild(btn);
    });
  },

  handleAnswer(selectedIndex, btnElement) {
    if (this.isDebouncing || !this.isPlaying) return;
    this.isDebouncing = true;

    const answersBox = document.getElementById('game1-answers-box');
    const buttons = answersBox.getElementsByTagName('button');

    // Disable all buttons temporarily
    for (let btn of buttons) {
      btn.classList.add('pointer-events-none-override');
    }

    if (selectedIndex === this.currentQuestion.correct) {
      // Correct!
      this.score += 10;
      document.getElementById('game1-score').innerText = this.score;
      btnElement.classList.remove('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800');
      btnElement.classList.add('bg-emerald-500', 'border-emerald-500', 'text-white');
      App.playSynthSound('correct');

      setTimeout(() => {
        this.isDebouncing = false;
        this.loadNextQuestion();
      }, 500);

    } else {
      // Incorrect!
      btnElement.classList.remove('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800');
      btnElement.classList.add('bg-red-500', 'border-red-500', 'text-white');
      
      // Highlight correct answer in emerald
      const correctBtn = buttons[this.currentQuestion.correct];
      correctBtn.classList.remove('bg-white', 'dark:bg-slate-900');
      correctBtn.classList.add('bg-emerald-500', 'border-emerald-500', 'text-white');

      // Shake animation
      answersBox.classList.add('shake-animation');
      App.playSynthSound('wrong');

      setTimeout(() => {
        answersBox.classList.remove('shake-animation');
        this.isDebouncing = false;
        this.loadNextQuestion();
      }, 750);
    }
  },

  endGame() {
    this.isPlaying = false;
    clearInterval(this.timerInterval);

    // Save high score
    let recordBroken = false;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('carbon_race_hs', this.highScore);
      recordBroken = true;
      App.playSynthSound('success');
    } else {
      App.playSynthSound('gameover');
    }

    // Update game over UI
    document.getElementById('game1-final-score').innerText = this.score;
    document.getElementById('game1-final-hs').innerText = this.highScore;
    document.getElementById('game1-hs-val').innerText = this.highScore;

    if (recordBroken) {
      document.getElementById('game1-new-record-badge').classList.remove('hidden');
    }

    document.getElementById('game1-active-layout').classList.add('hidden');
    document.getElementById('game1-gameover-screen').classList.remove('hidden');

    // Trigger score progression update
    App.updateMasteryLevel();
  },

  reset() {
    this.isPlaying = false;
    clearInterval(this.timerInterval);
    document.getElementById('game1-active-layout').classList.add('hidden');
    document.getElementById('game1-gameover-screen').classList.add('hidden');
    document.getElementById('game1-new-record-badge').classList.add('hidden');
    document.getElementById('game1-start-screen').classList.remove('hidden');
  }
};

const GameSorter = {
  score: 0,
  lives: 3,
  highScore: 0,
  isPlaying: false,
  isDebouncing: false,
  propertiesPool: [],
  currentProperty: null,

  init() {
    this.highScore = parseInt(localStorage.getItem('carbon_sorter_hs')) || 0;
    document.getElementById('game2-hs-val').innerText = this.highScore;
    document.getElementById('game2-active-hs').innerText = this.highScore;
    document.getElementById('game2-final-hs').innerText = this.highScore;

    // Start Button Events
    document.getElementById('game2-start-btn').addEventListener('click', () => this.startGame());
    document.getElementById('game2-restart-btn').addEventListener('click', () => this.startGame());

    // Setup drag-and-drop on the property card
    const propCard = document.getElementById('game2-property-card');
    propCard.addEventListener('dragstart', (e) => {
      if (!this.isPlaying || this.isDebouncing) {
        e.preventDefault();
        return;
      }
      e.dataTransfer.setData('text/plain', this.currentProperty.category);
      propCard.classList.add('opacity-50');
    });

    propCard.addEventListener('dragend', () => {
      propCard.classList.remove('opacity-50');
    });
  },

  startGame() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.score = 0;
    this.lives = 3;
    this.isDebouncing = false;

    // Sync high score
    this.highScore = parseInt(localStorage.getItem('carbon_sorter_hs')) || 0;
    document.getElementById('game2-active-hs').innerText = this.highScore;

    // Sound
    App.playSynthSound('start');

    // UI Updates
    document.getElementById('game2-score').innerText = this.score;
    this.updateHearts();
    document.getElementById('game2-start-screen').classList.add('hidden');
    document.getElementById('game2-gameover-screen').classList.add('hidden');
    document.getElementById('game2-new-record-badge').classList.add('hidden');
    document.getElementById('game2-active-layout').classList.remove('hidden');

    // Load static items list
    this.propertiesPool = [...sorterProperties[App.currentLanguage]];
    this.shuffleArray(this.propertiesPool);

    this.renderBins();
    this.loadNextProperty();
  },

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },

  updateHearts() {
    for (let i = 1; i <= 3; i++) {
      const heart = document.getElementById(`life-${i}`);
      if (i <= this.lives) {
        heart.innerText = "❤️";
        heart.classList.remove('opacity-25', 'grayscale');
      } else {
        heart.innerText = "🖤";
        heart.classList.add('opacity-25', 'grayscale');
      }
    }
  },

  renderBins() {
    const binsContainer = document.getElementById('game2-bins-container');
    binsContainer.innerHTML = '';

    // Get allotropes list from glossary to ensure language match
    const glossaryTerms = glossaryData[App.currentLanguage];
    
    glossaryTerms.forEach((allotrope) => {
      const binName = allotrope.term;
      
      const binDiv = document.createElement('div');
      binDiv.className = "flex flex-col items-center justify-center p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl shadow-sm text-center font-bold text-xs md:text-sm cursor-pointer hover:border-emerald-500 hover:bg-emerald-500/5 transition-all select-none hover:scale-[1.02] active:scale-[0.98]";
      
      binDiv.innerHTML = `
        <span class="text-xl md:text-2xl mb-1">${this.getIconForCategory(binName)}</span>
        <span class="text-slate-800 dark:text-slate-200 block truncate w-full">${binName}</span>
        <span class="text-[9px] text-slate-400 mt-1 uppercase font-normal pointer-events-none">${App.getTranslation('dropTargetLabel')}</span>
      `;

      // Click to sort handler
      binDiv.addEventListener('click', () => this.handleSortSelection(binName, binDiv));

      // Drag and drop handlers
      binDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        binDiv.classList.add('border-emerald-500', 'bg-emerald-500/10');
      });

      binDiv.addEventListener('dragleave', () => {
        binDiv.classList.remove('border-emerald-500', 'bg-emerald-500/10');
      });

      binDiv.addEventListener('drop', (e) => {
        e.preventDefault();
        binDiv.classList.remove('border-emerald-500', 'bg-emerald-500/10');
        this.handleSortSelection(binName, binDiv);
      });

      binsContainer.appendChild(binDiv);
    });
  },

  getIconForCategory(name) {
    // Normalization check for he/en/ar terms
    name = name.toLowerCase();
    if (name.includes('יהלום') || name.includes('diamond') || name.includes('الماس')) return '💎';
    if (name.includes('גרפיט') || name.includes('graphite') || name.includes('غرافيت')) return '✏️';
    if (name.includes('גרפן') || name.includes('graphene') || name.includes('غرافين')) return '🕸️';
    if (name.includes('פולרן') || name.includes('fullerene') || name.includes('فوليرين')) return '⚽';
    if (name.includes('צינורית') || name.includes('nanotube') || name.includes('أنبوب')) return '🧪';
    return '📦';
  },

  loadNextProperty() {
    if (!this.isPlaying) return;

    if (this.propertiesPool.length === 0) {
      this.propertiesPool = [...sorterProperties[App.currentLanguage]];
      this.shuffleArray(this.propertiesPool);
    }

    this.currentProperty = this.propertiesPool.pop();
    document.getElementById('game2-property-card').innerText = this.currentProperty.text;
  },

  handleSortSelection(binName, binElement) {
    if (this.isDebouncing || !this.isPlaying) return;
    this.isDebouncing = true;

    const gameArea = document.getElementById('game2-sorter-area');
    const propCard = document.getElementById('game2-property-card');

    // Normalize comparison values
    const targetCategoryNormalized = this.normalizeCategory(this.currentProperty.category);
    const chosenCategoryNormalized = this.normalizeCategory(binName);

    if (targetCategoryNormalized === chosenCategoryNormalized) {
      // Correct Match!
      this.score++;
      document.getElementById('game2-score').innerText = this.score;

      // Animate success
      gameArea.classList.add('success-flash');
      binElement.classList.add('bg-emerald-500/20', 'border-emerald-500');
      App.playSynthSound('correct');

      setTimeout(() => {
        gameArea.classList.remove('success-flash');
        binElement.classList.remove('bg-emerald-500/20', 'border-emerald-500');
        this.isDebouncing = false;
        this.loadNextProperty();
      }, 500);

    } else {
      // Mismatch error
      this.lives--;
      this.updateHearts();

      // Animate error
      gameArea.classList.add('error-flash');
      propCard.classList.add('shake-animation');
      binElement.classList.add('bg-red-500/20', 'border-red-500');
      App.playSynthSound('wrong');

      setTimeout(() => {
        gameArea.classList.remove('error-flash');
        propCard.classList.remove('shake-animation');
        binElement.classList.remove('bg-red-500/20', 'border-red-500');

        if (this.lives <= 0) {
          this.endGame();
        } else {
          this.isDebouncing = false;
          this.loadNextProperty();
        }
      }, 750);
    }
  },

  normalizeCategory(name) {
    name = name.toLowerCase().trim();
    if (name.includes('יהלום') || name.includes('diamond') || name.includes('الماس')) return 'diamond';
    if (name.includes('גרפיט') || name.includes('graphite') || name.includes('غرافيت')) return 'graphite';
    if (name.includes('גרפן') || name.includes('graphene') || name.includes('غرافين')) return 'graphene';
    if (name.includes('פולרן') || name.includes('fullerene') || name.includes('فوليرين')) return 'fullerene';
    if (name.includes('צינורית') || name.includes('nanotube') || name.includes('أنبوب')) return 'nanotube';
    return name;
  },

  endGame() {
    this.isPlaying = false;

    // Save high score
    let recordBroken = false;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('carbon_sorter_hs', this.highScore);
      recordBroken = true;
      App.playSynthSound('success');
    } else {
      App.playSynthSound('gameover');
    }

    // Update game over screen values
    document.getElementById('game2-final-score').innerText = this.score;
    document.getElementById('game2-final-hs').innerText = this.highScore;
    document.getElementById('game2-hs-val').innerText = this.highScore;

    if (recordBroken) {
      document.getElementById('game2-new-record-badge').classList.remove('hidden');
    }

    document.getElementById('game2-active-layout').classList.add('hidden');
    document.getElementById('game2-gameover-screen').classList.remove('hidden');

    // Trigger score progression update
    App.updateMasteryLevel();
  },

  reset() {
    this.isPlaying = false;
    document.getElementById('game2-active-layout').classList.add('hidden');
    document.getElementById('game2-gameover-screen').classList.add('hidden');
    document.getElementById('game2-new-record-badge').classList.add('hidden');
    document.getElementById('game2-start-screen').classList.remove('hidden');
  }
};
