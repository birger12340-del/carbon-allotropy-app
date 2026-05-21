// Localization data, glossary terms, quiz, exam questions, and sorter properties
// Supports Hebrew (he), English (en), and Arabic (ar)

const translations = {
  he: {
    appTitle: "אלוטרופיית הפחמן",
    appSubtitle: "מסע אינטראקטיבי בממלכת הפחמן - פרויקט 1000",
    masteryLevel: "רמת מומחיות פחמן:",
    levelNovice: "טירון פחמן",
    levelApprentice: "שוליה",
    levelExpert: "מומחה פחמן",
    levelMaster: "רב-אמן פחמן",
    
    // Tabs
    tabGlossary: "מילון מונחים",
    tabSimulations: "הדמיות תלת-ממד",
    tabGameRace: "מרוץ הפחמן",
    tabGameSorter: "ממיין הפחמן",
    tabQuiz: "אימון מהיר",
    tabExam: "מבחן מסכם",

    // Headers / HUD
    score: "ניקוד",
    highScore: "שיא",
    time: "זמן",
    lives: "חיים",
    seconds: "שניות",
    
    // Glossary
    searchPlaceholder: "חפש מושג או תכונה...",
    glossaryDesc: "חקור את המאפיינים, המבנים והשימושים של אלוטרופי הפחמן השונים.",
    noResults: "לא מצאנו מושג כזה. נסה לחפש מילה אחרת.",
    structureLabel: "מבנה סריג:",
    propertiesLabel: "תכונות מרכזיות:",
    usesLabel: "שימושים נפוצים:",

    // Simulations
    allotropeSelect: "בחר אלוטרופ",
    simsDesc: "סובב וחקור את המבנים המולקולריים של אלוטרופי הפחמן השונים ברמת אטומים וקשרים.",
    viewLevel: "רמת תצוגה",
    viewSingle: "אטום יחיד / קשר יחיד",
    viewFew: "תא יחידה / שכבה קטנה",
    viewFull: "סריג מורחב / מבנה מלא",
    resetView: "אפס תצוגה",
    instructions3d: "גרור כדי לסובב | גלול כדי לקרב/להרחיק | קליק ימני+גרור להזזה",

    // Game 1: Carbon Race
    gameRaceTitle: "מרוץ הפחמן: טריוויה מהירה",
    gameRaceDesc: "ענה על כמה שיותר שאלות נכונות בתוך 45 שניות. כל תשובה נכונה מעניקה 10 נקודות!",
    startGame: "התחל משחק",
    restartGame: "שחק שוב",
    gameOver: "המשחק נגמר!",
    newHighScore: "שיא חדש!",
    finalScore: "ציון סופי:",
    gameRaceGOMsg: "כל הכבוד! הגעת לקצה גבול היכולת.",

    // Game 2: Carbon Sorter
    gameSorterTitle: "ממיין הפחמן: מיון תכונות",
    gameSorterDesc: "גרור או לחץ על התכונה כדי למיין אותה לאלוטרופ הנכון. יש לך 3 חיים. היזהר!",
    sortInstruction: "שייך את התכונה המוצגת למטה לאחד מחמשת האלוטרופים:",
    dropTargetLabel: "לחץ או שחרר כאן",
    gameSorterGOMsg: "אזלו לך כל החיים. אל תתייאש, נסה שוב ולמד מהשגיאות!",


    // Quiz
    quizTitle: "אימון מהיר: 10 שאלות",
    quizDesc: "תרגל את הידע שלך עם רמזים והסברים מיידיים לכל שאלה.",
    questionCount: "שאלה {current} מתוך {total}",
    getHint: "הצג רמז",
    nextQuestion: "השאלה הבאה",
    showResults: "ראה תוצאות",
    correctAlert: "כל הכבוד! תשובה נכונה.",
    wrongAlert: "לא מדויק. התשובה הנכונה היא:",
    quizCompleted: "סיימת את האימון המהיר!",

    // Exam
    examTitle: "מבחן מסכם: 25 שאלות",
    examDesc: "מבחן מקיף על כל תכונות הפחמן. עליך לענות על כל השאלות כדי להגיש. אין הגבלת זמן, בהצלחה!",
    submitExam: "הגש מבחן",
    unansweredWarningTitle: "מבחן לא מושלם!",
    unansweredWarningText: "לא ענית על כל 25 השאלות. אנא השלם את השאלות החסרות המודגשות באדום.",
    closeModal: "חזור למבחן",
    examResultTitle: "תוצאות המבחן המסכם",
    examGrade: "הציון שלך:",
    examPassed: "עברת בהצלחה! מדהים!",
    examFailed: "כמעט! כדאי לחזור על המונחים והאימון ולנסות שוב.",
    correctAnswersCount: "תשובות נכונות:",
    examDisclaimer: "המבחן ננעל. התשובות הנכונות מסומנות בירוק, והשגיאות שלך מסומנות באדום למטה.",

    // Footer
    branding: "Project 1000 - אלוטרופיית הפחמן",
    credits: "פותח עבור תלמידי כיתה ט' במדעים | משרד החינוך",
    author: "כל הזכויות שמורות © 2026",
    raceQuestionTag: "שאלה מהירה",
    sorterQuestionTag: "תכונה למיון",
    navInstructionsLabel: "הוראות ניווט:",
    quizResultsMsg: "אימון מביא לשלמות. כעת אתה מוכן יותר למבחן המסכם."
  },
  en: {
    appTitle: "Carbon Allotropy",
    appSubtitle: "An Interactive Journey into the World of Carbon - Project 1000",
    masteryLevel: "Carbon Mastery Level:",
    levelNovice: "Carbon Novice",
    levelApprentice: "Apprentice",
    levelExpert: "Carbon Expert",
    levelMaster: "Carbon Master",
    
    // Tabs
    tabGlossary: "Glossary",
    tabSimulations: "3D Simulations",
    tabGameRace: "Carbon Race",
    tabGameSorter: "Carbon Sorter",
    tabQuiz: "Quick Practice",
    tabExam: "Final Exam",

    // Headers / HUD
    score: "Score",
    highScore: "High Score",
    time: "Time",
    lives: "Lives",
    seconds: "sec",
    
    // Glossary
    searchPlaceholder: "Search term or property...",
    noResults: "We couldn't find this term. Try another word.",
    structureLabel: "Lattice Structure:",
    propertiesLabel: "Key Properties:",
    usesLabel: "Common Uses:",

    // Simulations
    allotropeSelect: "Select Allotrope",
    viewLevel: "View Level",
    viewSingle: "Single Atom / Bond",
    viewFew: "Unit Cell / Small Sheet",
    viewFull: "Extended Lattice / Full Structure",
    resetView: "Reset View",
    instructions3d: "Drag to rotate | Scroll to zoom | Right click+drag to pan",

    // Game 1: Carbon Race
    gameRaceTitle: "Carbon Race: Fast Trivia",
    gameRaceDesc: "Answer as many questions as you can in 45 seconds. Each correct answer gives 10 points!",
    startGame: "Start Game",
    restartGame: "Play Again",
    gameOver: "Game Over!",
    newHighScore: "New High Score!",
    finalScore: "Final Score:",

    // Game 2: Carbon Sorter
    gameSorterTitle: "Carbon Sorter: Property Match",
    gameSorterDesc: "Drag or click properties to sort them into the correct allotrope bin. You have 3 lives. Watch out!",
    sortInstruction: "Match the property below to one of the five allotropes:",
    dropTargetLabel: "Click or drop here",

    // Quiz
    quizTitle: "Quick Practice: 10 Questions",
    quizDesc: "Practice your knowledge with hints and immediate feedback for each question.",
    questionCount: "Question {current} of {total}",
    getHint: "Show Hint",
    nextQuestion: "Next Question",
    showResults: "Show Results",
    correctAlert: "Well done! Correct answer.",
    wrongAlert: "Incorrect. The correct answer is:",
    quizCompleted: "You completed the Quick Practice!",

    // Exam
    examTitle: "Final Exam: 25 Questions",
    examDesc: "Comprehensive test on all carbon properties. You must answer all questions to submit. No time limit, good luck!",
    submitExam: "Submit Exam",
    unansweredWarningTitle: "Incomplete Exam!",
    unansweredWarningText: "You did not answer all 25 questions. Please complete the highlighted questions in red.",
    closeModal: "Return to Exam",
    examResultTitle: "Final Exam Results",
    examGrade: "Your Grade:",
    examPassed: "Passed successfully! Excellent!",
    examFailed: "Almost there! Review glossary & practice quiz, then try again.",
    correctAnswersCount: "Correct Answers:",
    examDisclaimer: "The exam is now locked. Correct answers are highlighted in green, and your errors are marked in red below.",

    // Footer
    branding: "Project 1000 - Carbon Allotropy",
    credits: "Developed for 9th Grade Science Students",
    author: "All rights reserved © 2026",
    glossaryDesc: "Explore the characteristics, structures, and common uses of different carbon allotropes.",
    simsDesc: "Rotate and explore the molecular structures of different carbon allotropes at the atomic and bond level.",
    gameRaceGOMsg: "Great job! You reached your limit.",
    gameSorterGOMsg: "You ran out of lives. Don't be discouraged, try again and learn from your mistakes!",
    quizResultsMsg: "Practice makes perfect. Now you are more ready for the final exam.",
    raceQuestionTag: "Quick Question",
    sorterQuestionTag: "Property to Sort",
    navInstructionsLabel: "Navigation Controls:"
  },
  ar: {
    appTitle: "أشكال الكربون التآصلية",
    appSubtitle: "رحلة تفاعلية في عالم الكربون - مشروع 1000",
    masteryLevel: "مستوى إتقان الكربون:",
    levelNovice: "مبتدئ كربون",
    levelApprentice: "مساعد",
    levelExpert: "خبير كربون",
    levelMaster: "محترف كربون",
    
    // Tabs
    tabGlossary: "قاموس المصطلحات",
    tabSimulations: "محاكاة ثلاثية الأبعاد",
    tabGameRace: "سباق الكربون",
    tabGameSorter: "فرز الكربون",
    tabQuiz: "تدريب سريع",
    tabExam: "الامتحان النهائي",

    // Headers / HUD
    score: "النقاط",
    highScore: "أعلى نتيجة",
    time: "الوقت",
    lives: "القلوب",
    seconds: "ثانية",
    
    // Glossary
    searchPlaceholder: "ابحث عن مصطلح أو ميزة...",
    noResults: "لم نجد هذا المصطلح. حاول البحث عن كلمة أخرى.",
    structureLabel: "بنية الشبكة التبلورية:",
    propertiesLabel: "الخصائص الرئيسية:",
    usesLabel: "الاستخدامات الشائعة:",

    // Simulations
    allotropeSelect: "اختر المتآصل",
    viewLevel: "مستوى العرض",
    viewSingle: "ذرة واحدة / رابطة واحدة",
    viewFew: "خلية وحدة / طبقة صغيرة",
    viewFull: "شبكة ممتدة / بنية كاملة",
    resetView: "إعادة ضبط العرض",
    instructions3d: "اسحب للتدوير | قم بالتمرير للتقريب/التبعيد | انقر بزر الفأرة الأيمن + اسحب للتحريك",

    // Game 1: Carbon Race
    gameRaceTitle: "سباق الكربون: أسئلة سريعة",
    gameRaceDesc: "أجب عن أكبر عدد ممكن من الأسئلة في غضون 45 ثانية. كل إجابة صحيحة تمنحك 10 نقاط!",
    startGame: "ابدأ اللعبة",
    restartGame: "العب مجدداً",
    gameOver: "انتهت اللعبة!",
    newHighScore: "رقم قياسي جديد!",
    finalScore: "النتيجة النهائية:",

    // Game 2: Carbon Sorter
    gameSorterTitle: "فرز الكربون: مطابقة الخصائص",
    gameSorterDesc: "اسحب أو انقر فوق الخاصية لفرزها في صندوق المتآصل الصحيح. لديك 3 محاولات. احذر!",
    sortInstruction: "طابق الخاصية المعروضة أدناه مع أحد المتآصلات الخمسة:",
    dropTargetLabel: "انقر أو أفلت هنا",

    // Quiz
    quizTitle: "تدريب سريع: 10 أسئلة",
    quizDesc: "تدرب على معلوماتك مع تلميحات وشرح فوري لكل سؤال.",
    questionCount: "سؤال {current} من {total}",
    getHint: "عرض التلميح",
    nextQuestion: "السؤال التالي",
    showResults: "عرض النتائج",
    correctAlert: "أحسنت! إجابة صحيحة.",
    wrongAlert: "غير دقيق. الإجابة الصحيحة هي:",
    quizCompleted: "لقد أكملت التدريب السريع!",

    // Exam
    examTitle: "الامتحان النهائي: 25 سؤالاً",
    examDesc: "اختبار شامل لجميع خصائص الكربون. يجب الإجابة على جميع الأسئلة لتقديم الامتحان. لا يوجد وقت محدد، بالتوفيق!",
    submitExam: "تقديم الامتحان",
    unansweredWarningTitle: "امتحان غير مكتمل!",
    unansweredWarningText: "لم تجب عن جميع الأسئلة الـ 25. يرجى إكمال الأسئلة الناقصة المحددة باللون الأحمر.",
    closeModal: "العودة للامتحان",
    examResultTitle: "نتائج الامتحان النهائي",
    examGrade: "علامتك:",
    examPassed: "لقد نجحت! رائع جداً!",
    examFailed: "لقد كنت قريباً! راجع القاموس والتدريبات ثم حاول مرة أخرى.",
    correctAnswersCount: "الإجابات الصحيحة:",
    examDisclaimer: "تم قفل الامتحان. الإجابات الصحيحة موضحة باللون الأخضر، والأخطاء موضحة باللون الأحمر بالأسفل.",

    // Footer
    branding: "مشروع 1000 - أشكال الكربون التآصلية",
    credits: "تم التطوير لطلاب الصف التاسع في العلوم | وزارة التربية والتعليم",
    author: "جميع الحقوق محفوظة © 2026",
    glossaryDesc: "استكشف الخصائص والبنى والاستخدامات الشائعة لمختلف أشكال الكربون التآصلية.",
    simsDesc: "قم بتدوير واستكشاف البنى الجزيئية لمختلف أشكال الكربون التآصلية على مستوى الذرات والروابط.",
    gameRaceGOMsg: "عمل رائع! لقد وصلت إلى أقصى حدودك.",
    gameSorterGOMsg: "لقد نفدت محاولاتك. لا تستسلم، حاول مجدداً وتعلم من أخطائك!",
    quizResultsMsg: "التدريب يؤدي إلى الكمال. أنت الآن أكثر استعداداً للامتحان النهائي.",
    raceQuestionTag: "سؤال سريع",
    sorterQuestionTag: "خاصية للفرز",
    navInstructionsLabel: "تعليمات التحكم:"
  }
};

const glossaryData = {
  he: [
    {
      term: "יהלום",
      structure: "סריג אטומרי ענק תלת-ממדי. כל אטום פחמן קשור קוולנטית ל-4 אטומי פחמן אחרים במבנה טטרהדראלי מושלם.",
      properties: "החומר הטבעי הקשה ביותר המוכר. מבודד חשמל מעולה (אין אלקטרונים חופשיים), מוליך חום מצוין, שקוף ובעל מקדם שבירת אור גבוה מאוד.",
      uses: "כלי חיתוך וקידוח תעשייתיים, תכשיטים, ציפויים עמידים לשחיקה."
    },
    {
      term: "גרפיט",
      structure: "מבנה שכבתי דו-ממדי. אטומי הפחמן מסודרים בטבעות משושות (כל אטום קשור ל-3 אטומים אחרים). בין השכבות קיימים כוחות ואן-דר-ואלס חלשים המאפשרים להן להחליק זו על גבי זו.",
      properties: "רך וחלש בכיוון אחד (נשחק בקלות), מוליך חשמל וחום מצוין (בשל אלקטרון לא-מאותר אחד לכל אטום פחמן החופשי לנוע בין השכבות), צבע אפור-שחור אטום.",
      uses: "ליבות של עפרונות כתיבה, חומרי סיכה יבשים, אלקטרודות בתעשייה האלקטרוכימית, סוללות."
    },
    {
      term: "גרפן",
      structure: "שכבה יחידה בעובי אטום אחד של אטומי פחמן המסודרים בסריג משושה דו-ממדי (חלת דבש).",
      properties: "חזק פי 200 מפלדה באותו משקל, גמיש ביותר, שקוף כמעט לחלוטין (סופג רק 2.3% מהאור), מוליך החשמל והחום הטוב ביותר המוכר למדע.",
      uses: "מסכי מגע גמישים, מעגלים אלקטרוניים סופר-מהירים, חומרים מרוכבים חזקים וקלי משקל, סוללות מתקדמות וקבלים."
    },
    {
      term: "פולרן C60",
      structure: "מולקולת כלוב כדורית המורכבת מ-60 אטומי פחמן המסודרים ב-12 מחומשים ו-20 משושים (בצורת כדור כדורגל).",
      properties: "מולקולה יציבה ביותר, מתפקדת כמוליך למחצה (יכולה להפוך למוליך-על בתוספת אטומים מסוימים), חלולה מבפנים, בעלת תכונות נוגדות חמצון ייחודיות.",
      uses: "נשא מולקולרי לתרופות (כלוב מיקרוסקופי לשחרור מבוקר בגוף), קטליזטורים, ננו-טכנולוגיה, קולטי שמש מתקדמים."
    },
    {
      term: "צינורית פחמן (ננו-טיוב)",
      structure: "שכבת גרפן מגולגלת לצורת גליל חד-דופן או רב-דופן, סגור בקצוות לעיתים קרובות בחצי פולרן.",
      properties: "חוזק מתיחה עצום (פי 100 מפלדה), קלות משקל יוצאת דופן, יכולה לתפקד כמוליך מעולה או כמוליך למחצה בהתאם לכיוון הגלגול (כיראליות).",
      uses: "חיזוק חומרים מרוכבים (אופניים, חלקי מטוסים), ננו-אלקטרוניקה, חוטים מוליכים זעירים, חיישנים רפואיים."
    }
  ],
  en: [
    {
      term: "Diamond",
      structure: "Giant 3D covalent network lattice. Each carbon atom is covalently bonded to 4 other carbon atoms in a perfect tetrahedral geometry.",
      properties: "The hardest known natural material. Excellent electrical insulator (no free electrons), exceptional thermal conductor, highly transparent with a very high refractive index.",
      uses: "Industrial cutting and drilling tools, jewelry, wear-resistant coatings."
    },
    {
      term: "Graphite",
      structure: "Layered 2D structure. Carbon atoms are arranged in hexagonal rings (each bonded to 3 others) forming sheets. Weak van der Waals forces hold sheets together, allowing them to slide easily.",
      properties: "Soft and slippery, conducts electricity and heat exceptionally well (due to one delocalized electron per carbon atom free to move between layers), opaque grey-black color.",
      uses: "Pencil leads, dry lubricants, industrial electrodes, battery anodes."
    },
    {
      term: "Graphene",
      structure: "A single, one-atom-thick layer of carbon atoms tightly packed in a 2D honeycomb crystal lattice.",
      properties: "200 times stronger than steel of equivalent weight, highly flexible, nearly transparent (absorbs only 2.3% of light), superior electrical and thermal conductor.",
      uses: "Flexible touchscreens, ultra-fast transistors, lightweight composites, high-capacity batteries and supercapacitors."
    },
    {
      term: "Fullerene C60",
      structure: "Spherical cage molecule made of 60 carbon atoms arranged in 12 pentagons and 20 hexagons (shaped like a soccer ball).",
      properties: "Extremely stable molecule, acts as a semiconductor (superconducting when doped), hollow interior cavity, high affinity for free radicals.",
      uses: "Targeted drug delivery (molecular cages), chemical catalysts, nanotechnology materials, organic solar cells."
    },
    {
      term: "Carbon Nanotube",
      structure: "A rolled-up sheet of graphene forming a cylinder (single-walled or multi-walled), often capped with hemisphere fullerene-like structures.",
      properties: "Immense tensile strength (100 times stronger than steel), extremely lightweight, behaves as either a conductor or semiconductor based on its roll angle (chirality).",
      uses: "Structural reinforcement in aerospace and sports gear, nano-electronics, ultra-thin wiring, medical biosensors."
    }
  ],
  ar: [
    {
      term: "الماس",
      structure: "شبكة تساهمية ضخمة ثلاثية الأبعاد. ترتبط كل ذرة كربون بـ 4 ذرات كربون أخرى بروابط تساهمية قوية في بنية رباعية الأسطح مثالية.",
      properties: "أصلب مادة طبيعية معروفة. عازل كهربائي ممتاز (لعدم وجود إلكترونات حرة)، موصل حراري استثنائي، شفاف للغاية وله معامل انكسار ضوئي مرتفع جداً.",
      uses: "أدوات القطع والحفر الصناعية، المجوهرات، طلاءات مقاومة للتآكل والخدش."
    },
    {
      term: "غرافيت",
      structure: "بنية طبقات ثنائية الأبعاد. تترتب ذرات الكربون في حلقات سداسية الشكل (ترتبط كل ذرة بـ 3 ذرات أخرى)، وتتماسك الطبقات بقوى فان دير فالس الضعيفة مما يتيح انزلاقها فوق بعضها.",
      properties: "ناعم وزلق، موصل ممتاز للكهرباء والحرارة (بسبب وجود إلكترون واحد غير متموضع لكل ذرة كربون يتحرك بحرية بين الطبقات)، لونه رمادي مسود معتم.",
      uses: "قلم الرصاص، مواد التشحيم الجافة، الأقطاب الكهربائية الصناعية، بطاريات الليثيوم."
    },
    {
      term: "غرافين",
      structure: "طبقة منفردة بسمك ذرة واحدة من ذرات الكربون مرتبة في شبكة قرص عسل سداسية ثنائية الأبعاد.",
      properties: "أقوى بـ 200 مرة من الفولاذ بنفس الوزن، مرن للغاية، شبه شفاف بالكامل (يمتص 2.3% فقط من الضوء)، أفضل موصل كهربائي وحراري معروف للعلم.",
      uses: "شاشات اللمس المرنة، الدوائر الإلكترونية فائقة السرعة، مواد البناء خفيفة الوزن ومتينة، بطاريات المستقبل وسوبر كباسيتورز."
    },
    {
      term: "فوليرين C60",
      structure: "جزيء قفص كروي مجوف يتكون من 60 ذرة كربون مرتبة في 12 خماسياً و20 سداسياً (على شكل كرة قدم).",
      properties: "جزيء مستقر للغاية، يعمل كشبه موصل (يمكن تحويله لموصل فائق بالشوائب)، مجوف من الداخل، يمتلك خصائص مميزة كمضاد للأكسدة.",
      uses: "نقل الأدوية المستهدفة داخل الجسم (أقفاص جزيئية)، عوامل حفازة كيميائية، تكنولوجيا النانو، الخلايا الشمسية العضوية."
    },
    {
      term: "أنبوب نانو كربوني",
      structure: "طبقة غرافين ملفوفة على شكل أسطوانة (أحادية الجدار أو متعددة الجدران)، وغالباً ما تكون مغلقة الأطراف بنصف كرة فوليرين.",
      properties: "قوة شد هائلة (أقوى 100 مرة من الفولاذ)، خفيف الوزن بشكل مذهل، يسلك سلوك الموصل أو شبه الموصل حسب زاوية اللف (اللف اليدوي).",
      uses: "تدعيم المواد المركبة (هياكل الطائرات، معدات الرياضة)، نانو إلكترونيات، أسلاك توصيل ميكروسكوبية، مستشعرات طبية."
    }
  ]
};

const sorterProperties = {
  he: [
    { text: "מוליך החשמל הטוב ביותר הידוע למדע", category: "גרפן" },
    { text: "החומר הטבעי הקשה ביותר הידוע לאדם", category: "יהלום" },
    { text: "משמש כחומר סיכה יבש בתעשייה מפני שהשכבות שלו מחליקות זו על גבי זו", category: "גרפיט" },
    { text: "מולקולה כדורית חלולה המזכירה כדור כדורגל", category: "פולרן C60" },
    { text: "שכבת גרפן מגולגלת לגליל בעל חוזק מתיחה עצום", category: "צינורית פחמן (ננו-טיוב)" },
    { text: "מבודד חשמל מעולה שכן כל אלקטרוני הערכיות שלו משתתפים בקשרים קוולנטיים מקומיים", category: "יהלום" },
    { text: "משמש לייצור ליבות של עפרונות ציור וכתיבה", category: "גרפיט" },
    { text: "עוביו אטום יחיד בלבד, גמיש ביותר וכמעט שקוף לגמרי", category: "גרפן" },
    { text: "משמש ברפואה כמגן או 'כלוב' ננו-מטרי להובלת תרופות ישירות לתאים חולים", category: "פולרן C60" },
    { text: "בעל מוליכות חשמלית המשתנה מחצי-מוליך למוליך מעולה לפי זווית הפיתול שלו", category: "צינורית פחמן (ננו-טיוב)" },
    { text: "מוליך חום יוצא מן הכלל המבוסס על רעידות של הסריג האטומרי הצפוף שלו", category: "יהלום" },
    { text: "מכיל אלקטרונים חופשיים (אלקטרוני pi לא-מאותרים) הנעים בחופשיות בין שכבותיו", category: "גרפיט" },
    { text: "חזק פי 200 מפלדה באותו משקל ומהווה את הבסיס לכל משפחת הננו-חומרים של הפחמן", category: "גרפן" }
  ],
  en: [
    { text: "The best electrical conductor known to science", category: "Graphene" },
    { text: "The hardest natural material known to man", category: "Diamond" },
    { text: "Used as a dry lubricant in industry because its layers slide over each other", category: "Graphite" },
    { text: "A hollow spherical molecule resembling a soccer ball", category: "Fullerene C60" },
    { text: "A rolled-up sheet of graphene forming a cylinder with immense tensile strength", category: "Carbon Nanotube" },
    { text: "Excellent electrical insulator as all valence electrons participate in localized covalent bonds", category: "Diamond" },
    { text: "Used to manufacture writing and drawing pencil leads", category: "Graphite" },
    { text: "Only a single atom thick, highly flexible and nearly transparent", category: "Graphene" },
    { text: "Used in medicine as a nanometric 'cage' to transport drug molecules to target cells", category: "Fullerene C60" },
    { text: "Electrical conductivity changes from semiconductor to conductor depending on its roll angle", category: "Carbon Nanotube" },
    { text: "Outstanding heat conductor based on vibrations in its dense covalent lattice", category: "Diamond" },
    { text: "Contains free, delocalized pi-electrons moving between sheets", category: "Graphite" },
    { text: "200 times stronger than steel of equivalent weight, forms the basis of carbon nanomaterials", category: "Graphene" }
  ],
  ar: [
    { text: "أفضل موصل كهربائي معروف للعلم على الإطلاق", category: "غرافين" },
    { text: "أصلب مادة طبيعية معروفة للإنسان في الطبيعة", category: "الماس" },
    { text: "يستخدم كمواد تشحيم جافة لأن طبقاته تنزلق فوق بعضها بسهولة", category: "غرافيت" },
    { text: "جزيء كروي مجوف يشبه في تصميمه كرة القدم", category: "فوليرين C60" },
    { text: "ورقة غرافين ملفوفة على شكل أسطوانة تتميز بقوة شد هائلة للغاية", category: "أنبوب نانو كربوني" },
    { text: "عازל كهربائي ممتاز لمشاركتها بجميع إلكترونات التكافؤ بروابط تساهمية موضعية", category: "الماس" },
    { text: "يستخدم في صناعة لب أقلام الرصاص المخصصة للكتابة والرسم", category: "غرافيت" },
    { text: "سمكه ذرة واحدة فقط، مرن للغاية وشبه شفاف تماماً", category: "غرافين" },
    { text: "يستخدم في الطب كـ 'قفص' جزيئي دقيق لنقل وتوصيل الدواء للخلايا المصابة", category: "فوليرين C60" },
    { text: "تتغير موصليته الكهربائية من شبه موصل إلى موصل ممتاز بناءً على زاوية لفه", category: "أنبوب نانو كربوني" },
    { text: "موصل حراري مذهל يعتمد على اهتزازات شبكته التساهمية الكثيفة", category: "الماس" },
    { text: "يحتوي على إلكترونات حرة وغير متموضعة تتحرك بين طبقاته", category: "غرافيت" },
    { text: "أقوى بـ 200 مرة من الفولاذ بنفس الوزن ويمثل الأساس لجميع النانو كربونות", category: "غرافين" }
  ]
};

const quizQuestions = {
  he: [
    {
      question: "מדוע יהלום אינו מוליך חשמל בעוד שגרפיט מוליך חשמל מצוין?",
      options: [
        "בגרפיט יש אלקטרונים חופשיים (לא-מאותרים) שיכולים לנוע, בעוד שביהלום כל האלקטרונים קשורים קוולנטית.",
        "גרפיט מורכב מאטומי מתכת המעורבבים עם פחמן, בעוד שיהלום הוא פחמן טהור.",
        "יהלום דחוס מדי ולכן אלקטרונים אינם יכולים לעבור דרכו פיזית.",
        "בגרפיט יש אטומי מימן המאפשרים הולכת מטען."
      ],
      correct: 0,
      hint: "חשוב על אלקטרוני הערכיות של אטום הפחמן. לכל אטום פחמן יש 4 אלקטרונים כאלו. כמה מהם נקשרים בגרפיט לעומת יהלום?",
      feedback: "ביהלום כל אטום פחמן יוצר 4 קשרים קוולנטים יציבים (כל אלקטרוני הערכיות תפוסים). בגרפיט כל אטום יוצר רק 3 קשרים, והאלקטרון הרביעי חופשי לנוע בין השכבות ולהוליך זרם חשמלי."
    },
    {
      question: "איזה אלוטרופ של פחמן מורכב משכבה דו-ממדית יחידה בעובי אטום אחד?",
      options: [
        "גרפיט",
        "פולרן",
        "גרפן",
        "צינורית פחמן"
      ],
      correct: 2,
      hint: "מבנה זה זכה בפרס נובל בשנת 2010 ומתואר לעיתים קרובות כ'חומר הפלא' של המאה ה-21.",
      feedback: "גרפן הוא סדין דו-ממדי של אטומי פחמן המסודרים במבנה חלת דבש בעובי אטום אחד בלבד. גרפיט מורכב מהרבה שכבות גרפן כאלו המונחות זו על גבי זו."
    },
    {
      question: "מה מאפשר לשכבות הגרפיט להחליק בקלות זו על גבי זו?",
      options: [
        "הקשרים הקוולנטים החזקים שבין השכבות.",
        "מולקולות מים הלכודות בין השכבות ומשמשות כחומר סיכה.",
        "כוחות משיכה בין-מולקולריים חלשים (ואן-דר-ואלס) הפועלים בין השכבות.",
        "המבנה הגלילי שלהן."
      ],
      correct: 2,
      hint: "בתוך השכבה הקשרים חזקים מאוד, אך מה מחזיק את השכבות השונות יחד?",
      feedback: "השכבות בגרפיט מוחזקות יחד על ידי כוחות ואן-דר-ואלס חלשים. כוחות אלו נשברים בקלות תחת לחץ מכני קל, מה שמאפשר לשכבות להחליק ולהישחק (למשל בעת כתיבה בעיפרון)."
    },
    {
      question: "כמה קשרים קוולנטיים יוצר כל אטום פחמן במבנה היהלום?",
      options: [
        "3",
        "4",
        "5",
        "2"
      ],
      correct: 1,
      hint: "הפחמן נמצא בקבוצה 4 בטבלה המחזורית ושואף להשלים את רמת האנרגיה החיצונית שלו ל-8 אלקטרונים.",
      feedback: "בסריג היהלום כל אטום פחמן יוצר 4 קשרים קוולנטיים יחידים עם 4 אטומים שכנים במבנה טטרהדרלי. זהו ניצול מלא של כל אלקטרוני הערכיות של הפחמן."
    },
    {
      question: "איזה אלוטרופ מעוצב כמולקולת כלוב חלולה בעלת 60 אטומי פחמן?",
      options: [
        "צינורית פחמן",
        "פולרן C60",
        "יהלום",
        "גרפן"
      ],
      correct: 1,
      hint: "נקרא גם באקיבול (Buckyball) על שם האדריכל באקמינסטר פולר שעיצב כיפות גיאודזיות דומות.",
      feedback: "פולרן C60 הוא אלוטרופ פחמן מולקולרי. 60 אטומי הפחמן יוצרים צורה של כדור כדורגל חלול המכיל מחומשים ומשושים."
    },
    {
      question: "מהו ההסבר העיקרי לכך שיהלום הוא חומר קשה במיוחד?",
      options: [
        "הוא מורכב מאטומים כבדים מאוד.",
        "כל אטום פחמן קשור קוולנטית בקשרים חזקים ל-4 אטומים במבנה תלת-ממדי אינסופי.",
        "הוא נוצר תחת לחץ גבוה במעמקי האדמה ולכן האטומים דחוסים פיזית.",
        "יש בו קשרים יוניים חזקים."
      ],
      correct: 1,
      hint: "חוזק החומר נובע מאופי הקשרים הכימיים והפריסה שלהם במרחב.",
      feedback: "הקושי העצום של היהלום נובע מרשת תלת-ממדית רציפה של קשרים קוולנטיים חזקים (בין-אטומיים) שמתפרסת לכל כיוון. כדי לשבור את היהלום יש להשקיע אנרגיה עצומה בשבירת קשרים קוולנטיים אלו."
    },
    {
      question: "איזה אלוטרופ מתאים ביותר להולכת תרופות ממוקדת בגוף האדם?",
      options: [
        "גרפיט",
        "יהלום",
        "פולרן C60",
        "גרפן"
      ],
      correct: 2,
      hint: "חפש את האלוטרופ בעל מבנה כלוב חלול שיכול לכלוא בתוכו מולקולות אחרות.",
      feedback: "פולרנים (ובמיוחד C60) נחקרים רבות ככלובים ננו-מטריים להובלת תרופות. המבנה החלול שלהם מאפשר לכלוא מולקולת תרופה בפנים ולשחרר אותה בבטחה רק ביעד המיועד בגוף."
    },
    {
      question: "כיצד נוצרת צינורית פחמן (ננו-טיוב)?",
      options: [
        "מגלגול של שכבת גרפן למבנה גלילי זעיר.",
        "מחיבור של הרבה מולקולות פולרן זו לזו בשרשרת.",
        "על ידי מתיחה של יהלום בטמפרטורה גבוהה.",
        "מלחץ תעשייתי המופעל על גרפיט רגיל."
      ],
      correct: 0,
      hint: "צינורית פחמן היא חד-ממדית באופן יחסי (ארוכה וצרה מאוד) ונחשבת לגרסה מגולגלת של חומר דו-ממדי.",
      feedback: "ננו-צינורית פחמן היא למעשה שכבת גרפן אחת (או יותר) שמגולגלת לצורת צינור ננומטרי. הקצוות לעיתים סגורים במבנה דמוי חצי-כדור של פולרן."
    },
    {
      question: "איזה אלוטרופ של פחמן הוא מוליך חום מעולה אך מבודד חשמל מעולה?",
      options: [
        "גרפיט",
        "יהלום",
        "גרפן",
        "צינורית פחמן"
      ],
      correct: 1,
      hint: "מוליכות חום יכולה להתרחש גם באמצעות רעידות של הסריג (פונונים), ללא צורך באלקטרונים ניידים.",
      feedback: "יהלום הוא שילוב נדיר: מבודד חשמלי מצוין (אין אלקטרונים חופשיים) אך מוליך חום מעולה (אפילו יותר מנחושת פי כמה) הודות לקשרים הקוולנטיים הקשיחים המעבירים רעידות תרמיות במהירות רבה בסריג."
    },
    {
      question: "מהו המונח המדעי לתופעה בה יסוד אחד מופיע בצורות שונות בטבע שלהן מבנה שונה ותכונות שונות?",
      options: [
        "איזומרים",
        "איזוטופים",
        "אלוטרופיה",
        "פולימריזציה"
      ],
      correct: 2,
      hint: "זהו חלק משם הפרויקט והנושא המרכזי של כל הלמידה כאן.",
      feedback: "אלוטרופיה היא התופעה שבה יסוד כימי יחיד (כמו פחמן) קיים במספר צורות פיזיקליות שונות במצב צבירה זהה, בשל סידור שונה של האטומים במרחב."
    }
  ],
  en: [
    {
      question: "Why does diamond insulate electricity while graphite conducts it excellently?",
      options: [
        "Graphite has free, delocalized electrons that can move, while in diamond all valence electrons are locked in covalent bonds.",
        "Graphite contains metallic impurities mixed with carbon, whereas diamond is pure carbon.",
        "Diamond is too dense, so electrons cannot physically pass through the lattice.",
        "Graphite has hydrogen atoms that carry electrical charges."
      ],
      correct: 0,
      hint: "Think about the valence electrons. Carbon has 4. How many bonds does it form in graphite versus diamond?",
      feedback: "In diamond, each carbon atom forms 4 stable covalent bonds (all valence electrons are occupied). In graphite, each carbon atom forms only 3 bonds, leaving the 4th electron free to move between layers and conduct electricity."
    },
    {
      question: "Which carbon allotrope consists of a single, one-atom-thick 2D sheet?",
      options: [
        "Graphite",
        "Fullerene",
        "Graphene",
        "Carbon Nanotube"
      ],
      correct: 2,
      hint: "This material won the Nobel Prize in Physics in 2010 and is known as the 'wonder material' of the 21st century.",
      feedback: "Graphene is a single 2D sheet of carbon atoms arranged in a honeycomb lattice only one atom thick. Graphite is composed of many such sheets stacked together."
    },
    {
      question: "What allows the layers of graphite to slide easily over one another?",
      options: [
        "Strong covalent bonds linking the layers.",
        "Water molecules trapped between the layers acting as a lubricant.",
        "Weak intermolecular forces (van der Waals forces) acting between layers.",
        "Their cylindrical rolling shape."
      ],
      correct: 2,
      hint: "Bonds within each layer are very strong, but what holds the separate layers together?",
      feedback: "Graphite layers are held together by weak van der Waals forces. These weak interactions break easily under pressure, allowing sheets to slide, which makes graphite soft and slippery."
    },
    {
      question: "How many covalent bonds does each carbon atom form in a diamond structure?",
      options: [
        "3",
        "4",
        "5",
        "2"
      ],
      correct: 1,
      hint: "Carbon is in group 4 of the periodic table and seeks to complete its outer valence shell with 8 electrons.",
      feedback: "In a diamond lattice, each carbon atom forms 4 single covalent bonds with 4 neighboring atoms in a tetrahedral geometry, fully utilizing all 4 valence electrons."
    },
    {
      question: "Which allotrope is shaped as a hollow cage molecule containing exactly 60 carbon atoms?",
      options: [
        "Carbon Nanotube",
        "Fullerene C60",
        "Diamond",
        "Graphene"
      ],
      correct: 1,
      hint: "Also called a 'Buckyball', named after architect Buckminster Fuller who designed similar geodesic domes.",
      feedback: "Fullerene C60 is a molecular carbon allotrope. Its 60 carbon atoms form a soccer ball-like hollow cage containing pentagonal and hexagonal rings."
    },
    {
      question: "What is the primary explanation for why diamond is extremely hard?",
      options: [
        "It consists of very heavy carbon atoms.",
        "Each carbon atom is connected by strong covalent bonds to 4 neighbors in a continuous 3D network.",
        "It is compressed physically by high pressure deep within the Earth's mantle.",
        "It contains strong ionic bonds."
      ],
      correct: 1,
      hint: "A material's hardness is determined by the strength and spatial distribution of its chemical bonds.",
      feedback: "Diamond's hardness is due to its continuous 3D network of strong covalent bonds in all directions. To scratch or break it, strong covalent bonds must be broken, requiring immense energy."
    },
    {
      question: "Which allotrope is most suitable for targeted drug delivery in medicine?",
      options: [
        "Graphite",
        "Diamond",
        "Fullerene C60",
        "Graphene"
      ],
      correct: 2,
      hint: "Look for the allotrope with a hollow cage structure capable of enclosing other molecules.",
      feedback: "Fullerenes, specifically C60, are researched as nanometric cages for drug delivery. Their hollow centers can trap drug molecules, safely releasing them at specific target sites in the body."
    },
    {
      question: "How is a carbon nanotube (nanotube) formed?",
      options: [
        "By rolling up a single sheet of graphene into a microscopic tube.",
        "By joining many fullerene molecules together in a long chain.",
        "By stretching a diamond at extremely high temperatures.",
        "By applying extreme industrial pressure to regular graphite."
      ],
      correct: 0,
      hint: "A nanotube is relatively one-dimensional (very long and narrow) and is considered a rolled-up version of a 2D sheet.",
      feedback: "A carbon nanotube is a single-walled or multi-walled sheet of graphene rolled into a cylinder. The ends are often capped with hemisphere fullerene structures."
    },
    {
      question: "Which carbon allotrope is an excellent thermal conductor but an electrical insulator?",
      options: [
        "Graphite",
        "Diamond",
        "Graphene",
        "Carbon Nanotube"
      ],
      correct: 1,
      hint: "Heat conduction can occur through lattice vibrations (phonons) without needing mobile electrons.",
      feedback: "Diamond exhibits a rare combination: it is an electrical insulator (no free electrons) but a superb thermal conductor (several times better than copper) due to its rigid covalent lattice transmitting thermal vibrations rapidly."
    },
    {
      question: "What is the scientific term for a single element existing in multiple physical forms with different structures and properties?",
      options: [
        "Isomerism",
        "Isotopes",
        "Allotropy",
        "Polymerization"
      ],
      correct: 2,
      hint: "This term is the core subject of our study and is part of this project's title.",
      feedback: "Allotropy is the property of some chemical elements to exist in two or more different forms in the same physical state, due to different structural arrangements of atoms."
    }
  ],
  ar: [
    {
      question: "لماذا يعتبر الماس عازلاً للكهرباء بينما يعتبر الغرافيت موصلاً ممتازاً لها؟",
      options: [
        "يحتوي الغرافيت على إلكترونات حرة يمكنها الحركة، بينما في الماس ترتبط جميع الإلكترونات بروابط تساهمية.",
        "يتكون الغرافيت من ذرات معدنية ممزوجة بالكربون، بينما الماس كربون نقي.",
        "الماس كثيف للغاية وبالتالي לא يمكن للإلكترونات المرور في شبكته.",
        "يحتوي الغرافيت على ذرات هيدروجين تحمل شحنات كهربائية."
      ],
      correct: 0,
      hint: "فكر في إلكترونات التكافؤ. للكربون 4 إلكترونات تكافؤ. كم رابطة يكونها الكربون في الغرافيت مقارنة بالماس؟",
      feedback: "في الماس، ترتبط كل ذرة كربون بـ 4 روابط تساهمية مستقرة (جميع الإلكترونات مشغولة). في الغرافيت، ترتبط كل ذرة بـ 3 روابط فقط، مما يترك الإلكترون الرابع حراً للحركة وتوصيل التيار."
    },
    {
      question: "أي من الأشكال التآصلية للكربون يتكون من طبقة ثنائية الأبعاد واحدة بسمك ذرة واحدة؟",
      options: [
        "غرافيت",
        "فوليرين",
        "غرافين",
        "أنبوب نانو كربوني"
      ],
      correct: 2,
      hint: "فاز مكتشفا هذه المادة بجائزة نوبل في الفيزياء عام 2010، وتوصف بأنها 'المادة العجيبة' للقرن الحادي والعشرين.",
      feedback: "الغرافين هو طبقة ثنائية الأبعاد من ذرات الكربون المرتبة في هيكل قرص عسل بسمك ذرة واحدة فقط. أما الغرافيت فيتكون من طبقات عديدة من الغرافين المتراصة فوق بعضها."
    },
    {
      question: "ما الذي يسمح لطبقات الغرافيت بالانزلاق بسهولة فوق بعضها البعض؟",
      options: [
        "الروابط التساهمية القوية بين الطبقات.",
        "جزيئات الماء المحاصرة بين الطبقات والتي تعمل كمشحم.",
        "قوى تجاذب بين الجزيئات ضعيفة (قوى فان دير فالس) بين الطبقات.",
        "شكلها الأسطواني الملفوف."
      ],
      correct: 2,
      hint: "الروابط داخل كل طبقة قوية جداً، ولكن ما الذي يربط الطبقات المختلفة معاً؟",
      feedback: "تتماسك طبقات الغرافيت مع بعضها البعض بقوى فان دير فالس الضعيفة. هذه القوى سهلة الكسر تحت تأثير قوة ضغط طفيفة، مما يسمح للطبقات بالانزلاق والتآكل (كما يحدث أثناء الكتابة بقلم الرصاص)."
    },
    {
      question: "كم عدد الروابط التساهمية التي تشكلها كل ذرة كربون في الماس؟",
      options: [
        "3",
        "4",
        "5",
        "2"
      ],
      correct: 1,
      hint: "يقع الكربون في المجموعة الرابعة في الجدول الدوري ويسعى لإكمال مدار طاقته الخارجي بـ 8 إلكترونات.",
      feedback: "في الماس، تشكل كل ذرة كربون 4 روابط تساهمية أحادية مع 4 ذرات مجاورة في بنية رباعية الأسطح، مستغلة بذلك جميع إلكترونات التكافؤ الأربعة."
    },
    {
      question: "أي من الأشكال التآصلية يكون على شكل قفص جزيئي مجوف يحتوي على 60 ذرة كربون؟",
      options: [
        "أنبوب نانو كربوني",
        "فوليرين C60",
        "الماس",
        "غرافين"
      ],
      correct: 1,
      hint: "يُطلق عليه أيضاً اسم 'كرة باكي' (Buckyball)، تيمناً بالمهندس المعماري باكمينستر فولر الذي صمم قباباً جيوديسية مماثلة.",
      feedback: "الفوليرين C60 هو شكل تآصلي جزيئي للكربون. تشكل ذرات الكربون الـ 60 قفصاً كروياً مجوفاً شبيهاً بكرة القدم يحتوي على خماسيات وسداسيات."
    },
    {
      question: "ما هو التفسير الأساسي لصلابة الماس الفائقة؟",
      options: [
        "لأنه يتكون من ذرات كربون ثقيلة جداً.",
        "ترتبط كل ذرة كربون بروابط تساهمية قوية مع 4 ذرات أخرى في شبكة ثلاثية الأبعاد مستمرة.",
        "يتشكل تحت ضغط عالٍ في أعماق الأرض مما يجعل ذراته متراصة فيزيائياً.",
        "يحتوي على روابط أيونية قوية."
      ],
      correct: 1,
      hint: "تنبع صلابة المواد من طبيعة الروابط الكيميائية وتوزيعها في الفراغ.",
      feedback: "ترجع صلابة الماس الفائقة إلى شبكته ثلاثية الأبعاد المستمرة من الروابط التساهمية القوية (بين الذرات) في جميع الاتجاهات. لكسره، يلزم بذل طاقة هائلة لكسر هذه الروابط التساهمية."
    },
    {
      question: "أي الأشكال التآصلية هو الأنسب لإيصال الأدوية المستهدفة داخل جسم الإنسان؟",
      options: [
        "غرافيت",
        "الماس",
        "فوليرين C60",
        "غرافين"
      ],
      correct: 2,
      hint: "ابحث عن الشكل التآصلي ذي البنية المجوفة الذي يمكنه احتواء وحبس جزيئات أخرى بداخله.",
      feedback: "تتم دراسة الفوليرينات (وخاصة C60) على نطاق واسع كأقفاص نانومترية لنقل الأدوية. تتيح بنيتها المجوفة حبس جزيء الدواء بالداخل وإطلاقه بأمان فقط في الموقع المستهدف بالجسم."
    },
    {
      question: "كيف يتشكل أنبوب النانو الكربوني؟",
      options: [
        "عن طريق لف طبقة غرافين واحدة في بنية أسطوانية دقيقة.",
        "عن طريق ربط العديد من جزيئات الفوليرين معاً في سلسلة طويلة.",
        "عن طريق سحب وتمديد الماس عند درجات حرارة مرتفعة جداً.",
        "من الضغط الصناعي المطبق على الغرافيت العادي."
      ],
      correct: 0,
      hint: "الأنبوب النانوي هو هيكل أحادي البعد نسبياً (طويل وضيق جداً) ويعتبر نسخة ملفوفة من مادة ثنائية الأبعاد.",
      feedback: "أنبوب النانو الكربوني هو في الأساس طبقة غرافين واحدة (أو أكثر) ملفوفة على شكل أسطوانة نانومترية، وغالباً ما تكون أطرافها مغلقة بنصف كرة فوليرين."
    },
    {
      question: "أي متآصلات الكربون موصل حراري ممتاز وعازל كهربائي ممتاز في نفس الوقت؟",
      options: [
        "غرافيت",
        "الماس",
        "غرافين",
        "أنبوب نانو كربوني"
      ],
      correct: 1,
      hint: "يمكن أن يحدث التوصيل الحراري عبر اهتزازات الشبكة البلورية (الفونونات) دون الحاجة لإلكترونات حرة للحركة.",
      feedback: "يمتلك الماس تركيبة نادرة: عازل كهربائي (אין إلكترونات حرة) وموصل حراري ممتاز (أفضل من النحاس بعدة مرات) بفضل الروابط التساهمية الصلبة التي تنقل الاهتزازات الحرارية بسرعة فائقة."
    },
    {
      question: "ما هو المصطلح العلمي لظاهرة وجود عنصر كيميائي واحد في عدة أشكال فيزيائية مختلفة في البنية والخواص؟",
      options: [
        "التסמר (Isomerism)",
        "النظائر (Isotopes)",
        "التآصل (Allotropy)",
        "הפולימריזציה (Polymerization)"
      ],
      correct: 2,
      hint: "هذا المصطلح هو جزء من اسم مشروعنا والموضوع الرئيسي لدراستنا هنا.",
      feedback: "التآصل هو ظاهرة وجود عنصر كيميائي واحد (مثل الكربون) بأشكال فيزيائية متعددة في نفس الحالة الفيزيائية، نظراً לאختلاف ترتيب الذرات في الفراغ."
    }
  ]
};

// 25 Exam questions
const examQuestions = {
  he: [
    {
      id: 1,
      question: "מהו אטום הבסיס המרכיב את כל האלוטרופים המוצגים באפליקציה?",
      options: ["מימן", "פחמן", "חמצן", "צורן (סיליקון)"],
      correct: 1
    },
    {
      id: 2,
      question: "איזה סוג קשר כימי פועל בין אטומי הפחמן בתוך שכבת הגרפן?",
      options: ["קשר יוני", "קשר מתכתי", "קשר קוולנטי", "קשר מימן"],
      correct: 2
    },
    {
      id: 3,
      question: "כמה אלקטרוני ערכיות יש לאטום פחמן במצבו היסודי?",
      options: ["2", "4", "6", "8"],
      correct: 1
    },
    {
      id: 4,
      question: "מדוע גרפיט משאיר סימן כהה על הנייר בעת כתיבה?",
      options: [
        "אטומי הפחמן נשרפים במגע עם הנייר.",
        "הקשרים הקוולנטיים בתוך שכבות הגרפיט חלשים מאוד ונשברים.",
        "כוחות ואן-דר-ואלס החלשים בין השכבות מאפשרים להן להיפרד ולהישאר על הנייר.",
        "הגרפיט מכיל נוזל שחור שנשפך מתוכו."
      ],
      correct: 2
    },
    {
      id: 5,
      question: "מהי צורת היחידה הבסיסית החוזרת על עצמה במבנה הגרפן והגרפיט?",
      options: ["ריבוע", "משולש", "משושה משוכלל", "מחומש"],
      correct: 2
    },
    {
      id: 6,
      question: "מהו המבנה הגיאומטרי המרחבי של הקשרים סביב אטום פחמן ביהלום?",
      options: ["מישורי משולש", "טטרהדרל (ארבעון)", "קווית", "תמניון (אוקטהדרל)"],
      correct: 1
    },
    {
      id: 7,
      question: "איזה אלוטרופ של פחמן התגלה בשנת 1985 ונראה כמו כדורגל?",
      options: ["פולרן C60", "גרפן", "צינורית פחמן", "יהלום"],
      correct: 0
    },
    {
      id: 8,
      question: "מהי רמת המוליכות החשמלית של יהלום טהור?",
      options: ["מוליך-על", "מוליך טוב מאוד", "מוליך למחצה", "מבודד מעולה"],
      correct: 3
    },
    {
      id: 9,
      question: "באילו תנאים נוצר יהלום טבעי במעמקי כדור הארץ?",
      options: [
        "לחץ נמוך וטמפרטורה נמוכה במיוחד.",
        "לחץ גבוה מאוד וטמפרטורה גבוהה מאוד.",
        "קרינה קוסמית חזקה ללא חמצן.",
        "בתוך מים עשירים במלחים תחת זרמים חזקים."
      ],
      correct: 1
    },
    {
      id: 10,
      question: "גרפן הוא חומר חזק במיוחד משום ש:",
      options: [
        "הוא עבה מאוד ומכיל מיליוני שכבות.",
        "הוא מורכב מקשרים קוולנטים חזקים במבנה דו-ממדי רציף ללא נקודות תורפה רבות.",
        "אטומי הפחמן שבו קשורים בקשרים מתכתיים צפופים.",
        "הוא סופג מים שמחזקים את המבנה שלו."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "איזו תכונה הופכת את פולרן C60 למתאים לשימוש כנשא תרופות?",
      options: [
        "המבנה הכלובי החלול שלו שיכול להגן על מולקולת תרופה.",
        "היותו קשה יותר מיהלום.",
        "מוליכות החשמל הגבוהה שלו בטמפרטורת החדר.",
        "הצבע השחור האטום שלו."
      ],
      correct: 0
    },
    {
      id: 12,
      question: "מהי 'כיראליות' (זווית פיתול) בהקשר של צינורית פחמן?",
      options: [
        "הצבע הפיזי של הצינורית תחת אור מקוטב.",
        "הכיוון והזווית שבהם מגולגלת שכבת הגרפן, הקובעים את תכונותיה החשמליות.",
        "המהירות שבה הצינורית מסתובבת סביב צירה.",
        "מספר השכבות המרכיבות את הצינורית."
      ],
      correct: 1
    },
    {
      id: 13,
      question: "כיצד משפיע מעבר לגרפיט על מוליכות החום ביחס ליהלום?",
      options: [
        "גרפיט מוליך חום טוב יותר מיהלום בכל כיוון.",
        "גרפיט מוליך חום מעולה לאורך השכבות, אך גרוע מאוד בניצב לשכבות.",
        "גרפיט הוא מבודד חום מוחלט.",
        "אין הבדל במוליכות החום ביניהם."
      ],
      correct: 1
    },
    {
      id: 14,
      question: "איזה פרס נובל הוענק לחוקרים אנדריי גיים וקונסטנטין נובוסלוב על גילוי הגרפן?",
      options: ["פרס נובל לכימיה", "פרס נובל לפיזיקה", "פרס נובל לרפואה", "פרס נובל לשלום"],
      correct: 1
    },
    {
      id: 15,
      question: "מה מייחד את המבנה המולקולרי של פולרן C60 לעומת שאר האלוטרופים?",
      options: [
        "הוא סריג אטומרי ענק אינסופי.",
        "הוא מורכב ממולקולות בדידות בעלות גודל מוגדר (C60), בעוד השאר הם מבנים אינסופיים (סריגים).",
        "אין בו קשרים קוולנטים בכלל.",
        "הוא מכיל אטומי פחמן טעונים חשמלית (יונים)."
      ],
      correct: 1
    },
    {
      id: 16,
      question: "כאשר שורפים יהלום או גרפיט בנוכחות חמצן מלאה, מהו הגז שנפלט?",
      options: ["פחמן חד-חמצני (CO)", "פחמן דו-חמצני (CO2)", "מימן (H2)", "מתאן (CH4)"],
      correct: 1
    },
    {
      id: 17,
      question: "איזה אלוטרופ משמש כחומר גלם לייצור צינוריות פחמן זעירות?",
      options: ["יהלום", "גרפיט", "גרפן", "פולרן"],
      correct: 2
    },
    {
      id: 18,
      question: "מדוע גרפיט משמש לייצור אלקטרודות בתאים אלקטרוכימיים?",
      options: [
        "הוא זול, אינרטי (לא מגיב בקלות) ומוליך חשמל מצוין.",
        "הוא ממיס מים במהירות.",
        "הוא קשה מאוד ומגן פיזית על התא.",
        "הוא פולט אור בהעברת זרם."
      ],
      correct: 0
    },
    {
      id: 19,
      question: "מהו עוביה של שכבת גרפן אחת?",
      options: ["כמיקרומטר אחד (1,000 ננומטר)", "כאטום יחיד (כ-0.34 ננומטר)", "כמילימטר אחד", "עוביה משתנה לפי כמות האור המוקרן עליה"],
      correct: 1
    },
    {
      id: 20,
      question: "אילו כוחות מחזיקים את מולקולות הפולרן C60 יחד במצב מוצק?",
      options: ["קשרים קוולנטים בין הכדורים", "קשרים יוניים חזקים", "כוחות ואן-דר-ואלס חלשים בין המולקולות", "קשרי מימן"],
      correct: 2
    },
    {
      id: 21,
      question: "מהם השימושים הפוטנציאליים של צינוריות פחמן בזכות חוזקן וקלותן?",
      options: [
        "ייצור חוטי מתיחה למעליות חלל, שלדות אופניים מתקדמות ומחבטי טניס.",
        "חומרי גלם לקוסמטיקה ולקרם הגנה.",
        "חומרי נפץ חזקים.",
        "ייצור זכוכית שקופה לחלונות."
      ],
      correct: 0
    },
    {
      id: 22,
      question: "איזה תיאור מתאים ביותר למבנה של גרפיט?",
      options: [
        "טבעות משושות מסודרות בשכבות מקבילות עם אלקטרונים ניידים ביניהן.",
        "קוביות תלת-ממדיות דחוסות המקושרות בפינות.",
        "מולקולות בצורת טבעות בעלות 8 אטומים.",
        "שרשרת ארוכה של פחמן מסועף."
      ],
      correct: 0
    },
    {
      id: 23,
      question: "מהי הסיבה שיהלום הוא שקוף?",
      options: [
        "האטומים שלו רחוקים מאוד זה מזה.",
        "פער האנרגיה בין רמות האלקטרונים שלו (Band gap) גדול מאוד, כך שאור נראה אינו נספג אלא עובר דרכו.",
        "הוא מורכב ממים קפואים שעברו לחץ גבוה.",
        "הוא מכיל גזים כלודים שמעבירים אור."
      ],
      correct: 1
    },
    {
      id: 24,
      question: "איזה אלוטרופ מציג מוליכות על בתנאים מסוימים (כאשר הוא מסומם באטומי מתכת אלקלית)?",
      options: ["יהלום", "פולרן C60", "גרפיט", "גרפן"],
      correct: 1
    },
    {
      id: 25,
      question: "מהי המשמעות הכימית של המושג 'אלוטרופיה של פחמן'?",
      options: [
        "תרכובות שונות המכילות פחמן ומימן.",
        "מצבי צבירה שונים של פחמן (מוצק, נוזל, גז).",
        "צורות שונות של פחמן טהור הנבדלות בסידור האטומים ובקשרים הכימיים ביניהם.",
        "איזוטופים שונים של פחמן כמו פחמן-12 ופחמן-14."
      ],
      correct: 2
    }
  ],
  en: [
    {
      id: 1,
      question: "What is the core atom that builds all carbon allotropes in this app?",
      options: ["Hydrogen", "Carbon", "Oxygen", "Silicon"],
      correct: 1
    },
    {
      id: 2,
      question: "Which type of chemical bond acts between carbon atoms within a graphene sheet?",
      options: ["Ionic bond", "Metallic bond", "Covalent bond", "Hydrogen bond"],
      correct: 2
    },
    {
      id: 3,
      question: "How many valence electrons does a carbon atom have in its ground state?",
      options: ["2", "4", "6", "8"],
      correct: 1
    },
    {
      id: 4,
      question: "Why does graphite leave a dark trace on paper when writing?",
      options: [
        "Carbon atoms burn when in contact with paper.",
        "Covalent bonds within graphite sheets are weak and break.",
        "Weak van der Waals forces between layers allow them to separate and stick to the paper.",
        "Graphite contains a black liquid that leaks out."
      ],
      correct: 2
    },
    {
      id: 5,
      question: "What is the basic repeating shape in the structure of graphene and graphite?",
      options: ["Square", "Triangle", "Regular hexagon", "Pentagon"],
      correct: 2
    },
    {
      id: 6,
      question: "What is the spatial geometric arrangement of bonds around a carbon atom in diamond?",
      options: ["Trigonal planar", "Tetrahedral", "Linear", "Octahedral"],
      correct: 1
    },
    {
      id: 7,
      question: "Which carbon allotrope discovered in 1985 looks like a soccer ball?",
      options: ["Fullerene C60", "Graphene", "Carbon Nanotube", "Diamond"],
      correct: 0
    },
    {
      id: 8,
      question: "What is the electrical conductivity level of pure diamond?",
      options: ["Superconductor", "Very good conductor", "Semiconductor", "Excellent insulator"],
      correct: 3
    },
    {
      id: 9,
      question: "Under what conditions do natural diamonds form deep inside the Earth?",
      options: [
        "Low pressure and extremely low temperature.",
        "Very high pressure and very high temperature.",
        "Strong cosmic radiation without oxygen.",
        "Inside highly saline water under strong currents."
      ],
      correct: 1
    },
    {
      id: 10,
      question: "Graphene is an exceptionally strong material because:",
      options: [
        "It is very thick and contains millions of sheets.",
        "It consists of strong covalent bonds in a continuous 2D plane with few weak points.",
        "Its carbon atoms are bound by dense metallic bonds.",
        "It absorbs water which reinforces its structure."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "Which property makes Fullerene C60 suitable for targeted drug delivery?",
      options: [
        "Its hollow cage-like structure that can enclose drug molecules.",
        "Being harder than diamond.",
        "Its high electrical conductivity at room temperature.",
        "Its opaque black color."
      ],
      correct: 0
    },
    {
      id: 12,
      question: "What is 'chirality' (roll angle) in the context of a carbon nanotube?",
      options: [
        "The physical color of the nanotube under polarized light.",
        "The direction and angle in which the graphene sheet is rolled, determining its electrical properties.",
        "The speed at which the nanotube rotates around its axis.",
        "The number of layers making up the nanotube."
      ],
      correct: 1
    },
    {
      id: 13,
      question: "How does switching to graphite affect thermal conductivity compared to diamond?",
      options: [
        "Graphite conducts heat better than diamond in all directions.",
        "Graphite conducts heat excellently along layers, but poorly perpendicular to them.",
        "Graphite is a perfect thermal insulator.",
        "There is no difference in heat conductivity between them."
      ],
      correct: 1
    },
    {
      id: 14,
      question: "Which Nobel Prize was awarded to Andre Geim and Konstantin Novoselov for discovering Graphene?",
      options: ["Nobel Prize in Chemistry", "Nobel Prize in Physics", "Nobel Prize in Medicine", "Nobel Peace Prize"],
      correct: 1
    },
    {
      id: 15,
      question: "What distinguishes the molecular structure of Fullerene C60 from the other allotropes?",
      options: [
        "It is an infinite giant atomic lattice.",
        "It is composed of discrete molecules of defined size (C60), whereas others are infinite networks.",
        "It has no covalent bonds at all.",
        "It contains electrically charged carbon atoms (ions)."
      ],
      correct: 1
    },
    {
      id: 16,
      question: "When diamond or graphite is burned in excess oxygen, what gas is emitted?",
      options: ["Carbon monoxide (CO)", "Carbon dioxide (CO2)", "Hydrogen (H2)", "Methane (CH4)"],
      correct: 1
    },
    {
      id: 17,
      question: "Which allotrope serves as the base raw material for forming carbon nanotubes?",
      options: ["Diamond", "Graphite", "Graphene", "Fullerene"],
      correct: 2
    },
    {
      id: 18,
      question: "Why is graphite used to manufacture electrodes in electrochemical cells?",
      options: [
        "It is cheap, inert, and an excellent electrical conductor.",
        "It dissolves water rapidly.",
        "It is extremely hard and physically protects the cell.",
        "It emits light when current passes."
      ],
      correct: 0
    },
    {
      id: 19,
      question: "What is the thickness of a single graphene sheet?",
      options: ["One micrometer (1,000 nanometers)", "One single atom (about 0.34 nanometers)", "One millimeter", "Thickness changes based on light projection"],
      correct: 1
    },
    {
      id: 20,
      question: "What forces hold Fullerene C60 molecules together in a solid state?",
      options: ["Covalent bonds between the spheres", "Strong ionic bonds", "Weak intermolecular van der Waals forces between molecules", "Hydrogen bonds"],
      correct: 2
    },
    {
      id: 21,
      question: "What are potential uses of carbon nanotubes due to their strength and lightness?",
      options: [
        "Tension cables for space elevators, advanced bicycle frames, and tennis rackets.",
        "Raw materials for cosmetics and sunscreens.",
        "High-power explosives.",
        "Manufacturing transparent glass windows."
      ],
      correct: 0
    },
    {
      id: 22,
      question: "Which description best fits the structure of graphite?",
      options: [
        "Hexagonal rings arranged in parallel layers with delocalized electrons between them.",
        "Packed 3D cubes connected at their corners.",
        "Ring-shaped molecules containing 8 atoms.",
        "Long chains of branched carbon."
      ],
      correct: 0
    },
    {
      id: 23,
      question: "Why is diamond transparent?",
      options: [
        "Its atoms are spaced very far apart.",
        "Its electronic band gap is very large, so visible light is not absorbed but passes through.",
        "It consists of highly compressed frozen water.",
        "It contains trapped gases that transmit light."
      ],
      correct: 1
    },
    {
      id: 24,
      question: "Which allotrope exhibits superconductivity under specific conditions (when doped with alkali metal atoms)?",
      options: ["Diamond", "Fullerene C60", "Graphite", "Graphene"],
      correct: 1
    },
    {
      id: 25,
      question: "What is the chemical meaning of the term 'allotropy of carbon'?",
      options: [
        "Different compounds containing carbon and hydrogen.",
        "Different states of matter of carbon (solid, liquid, gas).",
        "Different forms of pure carbon differing in atomic arrangement and chemical bonding.",
        "Different isotopes of carbon like carbon-12 and carbon-14."
      ],
      correct: 2
    }
  ],
  ar: [
    {
      id: 1,
      question: "ما هي الذرة الأساسية التي تبني جميع الأشكال التآصلية في التطبيق؟",
      options: ["الهيدروجين", "الكربون", "الأكسجين", "السيليكون"],
      correct: 1
    },
    {
      id: 2,
      question: "أي نوع من الروابط الكيميائية ينشأ بين ذرات الكربون داخل ورقة الغرافين؟",
      options: ["رابطة أيونية", "رابطة معدنية", "رابطة تساهمية", "رابطة هيدروجينية"],
      correct: 2
    },
    {
      id: 3,
      question: "كم عدد إلكترونات التكافؤ لذرة الكربون في حالتها المستقرة؟",
      options: ["2", "4", "6", "8"],
      correct: 1
    },
    {
      id: 4,
      question: "لماذا يترك الغرافيت أثراً داكناً على الورق أثناء الكتابة؟",
      options: [
        "تحترق ذرات الكربون عند ملامسة الورق.",
        "الروابط التساهمية داخل طبقات الغرافيت ضعيفة وتتكسر.",
        "تسمح قوى فان دير فالس الضعيفة بين الطبقات بانفصالها والتصاقها بالورق.",
        "يحتوي الغرافيت على سائل أسود يتسرب منه."
      ],
      correct: 2
    },
    {
      id: 5,
      question: "ما هو الشكل المتكرر الأساسي في بنية الغرافين والغرافيت؟",
      options: ["مربع", "مثلث", "سداسي منتظم", "خماسي"],
      correct: 2
    },
    {
      id: 6,
      question: "ما هو الترتيب الهندسي الفراغي للروابط حول ذرة الكربون في الماس؟",
      options: ["مثلث مستو", "رباعي الأوجه (تتراهيدرال)", "خطي", "ثماني الأوجه"],
      correct: 1
    },
    {
      id: 7,
      question: "أي من متآصلات الكربون الذي تم اكتشافه عام 1985 ويشبه كرة القدم؟",
      options: ["فوليرين C60", "غرافين", "أنبوب نانو كربوني", "الماس"],
      correct: 0
    },
    {
      id: 8,
      question: "ما هو مستوى الموصلية الكهربائية للماس النقي؟",
      options: ["موصل فائق", "موصل جيد جداً", "شبه موصل", "عازل ممتاز"],
      correct: 3
    },
    {
      id: 9,
      question: "تحت أي ظروف يتشكل الماس الطبيعي في أعماق الأرض؟",
      options: [
        "ضغط منخفض וدرجة حرارة منخفضة جداً.",
        "ضغط مرتفع جداً ودرجة حرارة مرتفعة جداً.",
        "إشعاع كوني قوي بدون أكسجين.",
        "داخل مياه شديدة الملوحة تحت تيارات قوية."
      ],
      correct: 1
    },
    {
      id: 10,
      question: "يعتبر الغرافين مادة قوية للغاية للأسباب التالية:",
      options: [
        "لأنه سميك جداً ويحتوي على ملايين الطبقات.",
        "يتكون من روابط تساهمية قوية في مستوى ثنائي الأبعاد مستمر مع قليل من نقاط الضعف.",
        "ترتبط ذرات الكربون فيه بروابط معدنية كثيفة.",
        "يمتص الماء الذي يعزز بنيته."
      ],
      correct: 1
    },
    {
      id: 11,
      question: "ما هي الخاصية التي تجعل الفوليرين C60 مناسباً لنقل الأدوية المستهدفة؟",
      options: [
        "بنيته المجوفة الشبيهة بالقفص والتي يمكنها احتواء جزيئات الدواء.",
        "كونه أصلب من الماس.",
        "موصليته الكهربائية العالية في درجة حرارة الغرفة.",
        "لونه الأسود المعتم."
      ],
      correct: 0
    },
    {
      id: 12,
      question: "ما هي 'اللف الكيرالي' (زاوية الالتواء) في سياق أنبوب النانو الكربوني؟",
      options: [
        "اللون الفيزيائي للأنبوب النانوي تحت الضوء المستقطب.",
        "الاتجاه والزاوية التي يتم لف ورقة الغرافين بها، والتي تحدد خصائصها الكهربائية.",
        "السرعة التي يدور بها الأنبوب حول محوره.",
        "عدد الطبقات المكونة للأنبوب النانوي."
      ],
      correct: 1
    },
    {
      id: 13,
      question: "كيف يؤثر التحول إلى الغرافيت على الموصلية الحرارية مقارنة بالماس؟",
      options: [
        "يوصل الغرافيت الحرارة بشكل أفضل من الماس في جميع الاتجاهات.",
        "يوصل الغرافيت الحرارة بشكل ممتاز على طول الطبقات، ولكن بشكل ضعيف عمودياً عليها.",
        "الغرافيت عازل حراري مثالي.",
        "لا يوجد فرق في التوصيل الحراري بينهما."
      ],
      correct: 1
    },
    {
      id: 14,
      question: "أي جائزة نوبل مُنحت للباحثين أندريه جيم وقسطنطين نوفوسيلوف لاكتشافهما الغرافين؟",
      options: ["جائزة نوبل في الكيمياء", "جائزة نوبل في الفيزياء", "جائزة نوبل في الطب", "جائزة نوبل للسلام"],
      correct: 1
    },
    {
      id: 15,
      question: "ما الذي يميز البنية الجزيئية للفوليرين C60 عن باقي المتآصلات؟",
      options: [
        "عبارة عن شبكة ذرية عملاقة لا نهائية.",
        "يتكون من جزيئات منفصلة ذات حجم محدد (C60)، بينما الأشكال الأخرى عبارة عن شبكات غير محدودة.",
        "لا يحتوي على روابط تساهمية على الإطلاق.",
        "يحتوي على ذرات كربون مشحونة كهربائياً (أيونات)."
      ],
      correct: 1
    },
    {
      id: 16,
      question: "عند حرق الماس أو الغرافيت في وفرة من الأكسجين، ما هو الغاز المنبعث؟",
      options: ["أول أكسيد الكربون (CO)", "ثاني أكسيد الكربون (CO2)", "الهيدروجين (H2)", "الميثان (CH4)"],
      correct: 1
    },
    {
      id: 17,
      question: "ما هو المتآصل الذي يعمل كمادة خام أساسية لتشكيل أنابيب النانو الكربونية؟",
      options: ["الماس", "الغرافيت", "الغرافين", "الفوليرين"],
      correct: 2
    },
    {
      id: 18,
      question: "لماذا يُستخدم الغرافيت لتصنيع الأقطاب الكهربائية في الخلايا الكهروكيميائية؟",
      options: [
        "لأنه رخيص، وخامل، وموصل كهربائي ممتاز.",
        "يذوب في الماء بسرعة.",
        "لأنه صلب جداً ويحمي الخلية فيزيائياً.",
        "ينبعث منه الضوء عند مرور التيار."
      ],
      correct: 0
    },
    {
      id: 19,
      question: "ما هو سمك طبقة الغرافين الواحدة؟",
      options: ["ميكرومتر واحد (1,000 نانومتر)", "ذرة واحدة فقط (حوالي 0.34 نانومتر)", "مليمتر واحد", "يختلف سمكه بناءً على شدة الضوء الساقط"],
      correct: 1
    },
    {
      id: 20,
      question: "ما هي القوى التي تربط جزيئات الفوليرين C60 معاً في الحالة الصلبة؟",
      options: ["روابط تساهمية بين الكرات", "روابط أيونية قوية", "قوى فان دير فالس الضعيفة بين الجزيئات", "روابط هيدروجينية"],
      correct: 2
    },
    {
      id: 21,
      question: "ما هي الاستخدامات المحتملة لأنابيب النانو الكربونية بفضل قوتها وخفتها؟",
      options: [
        "كابلات شد المصاعد الفضائية، هياكل الدراجات المتقدمة، ومضارب التنس.",
        "مواد خام لمستحضرات التجميل وواقي الشمس.",
        "المتفجرات شديدة القوة.",
        "تصنيع زجاج شفاف للنوافذ."
      ],
      correct: 0
    },
    {
      id: 22,
      question: "أي من الأوصاف التالية يناسب بنية الغرافيت بشكل أفضل؟",
      options: [
        "حلقات سداسية مرتبة في طبقات متوازية مع وجود إلكترونات حرة بينها.",
        "مكعبات ثلاثية الأبعاد متراصة ومتصلة عند الزوايا.",
        "جزيئات على شكل حلقات تحتوي على 8 ذرات.",
        "سلاسل طويلة من الكربون المتفرع."
      ],
      correct: 0
    },
    {
      id: 23,
      question: "ما هو السبب وراء شفافية الماس؟",
      options: [
        "تباعد ذراته عن بعضها البعض بشكل كبير.",
        "فجوة طاقته النطاقية للإلكترونات كبيرة جداً، بحيث لا يمتص الضوء المرئي بل يمر عبره.",
        "يتكون من ماء مجمد تعرض لضغط هائل جداً.",
        "يحتوي على غازات محاصرة تنقل الضوء."
      ],
      correct: 1
    },
    {
      id: 24,
      question: "أي متآصل يظهر موصلية فائقة في ظروف معينة (عند تطعيمه بذرات الفلزات القلوية)؟",
      options: ["الماس", "الفوليرين C60", "الغرافيت", "الغرافين"],
      correct: 1
    },
    {
      id: 25,
      question: "ما هو المعنى الكيميائي لمصطلح 'التآصل للكربون'؟",
      options: [
        "مركبات مختلفة تحتوي على الكربون والهيدروجين.",
        "حالات المادة المختلفة للكربون (صلب، سائل، غاز).",
        "أشكال مختلفة من الكربون النقي تختلف في ترتيب الذرات والروابط الكيميائية بينها.",
        "النظائر المختلفة للكربون مثل كربون-12 وكربون-14."
      ],
      correct: 2
    }
  ]
};
