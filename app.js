/* مائة سؤال عن الإسلام — 100 QUESTIONS ABOUT ISLAM — app.js v1.0 */
/* Based on "Mi'at Su'al 'an al-Islam" by Sheikh Mohammed al-Ghazali (1917-1996) */
/* Dialogue between Khalid Muhammad Khalid (questions) and Al-Ghazali (answers) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'مائة سؤال عن الإسلام',
    splashSub: 'حوار بين خالد محمد خالد والشيخ الغزالي',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الأنبياء ٢١: ١٠٧',
    tabHome: 'الرئيسية', tabQuestions: 'الأسئلة', tabSearch: 'بحث',
    tabQuiz: 'مسابقة', tabFavorites: 'المفضلة', tabAbout: 'الكتاب',
    questionsTitle: 'أسئلة وأجوبة',
    questionsDesc: '٢٥ سؤالاً وجواباً مختاراً من حوار خالد محمد خالد والشيخ الغزالي',
    searchTitle: 'ابحث عن سؤالك',
    searchDesc: 'اكتب سؤالك وسنجد لك أقرب إجابة من الكتاب',
    quizTitle: 'من يريد أن يكون عالماً؟',
    quizDesc: 'اختبر معرفتك بالإسلام — ١٥ سؤالاً بأسلوب المسابقات',
    favoritesTitle: 'المفضلة',
    favoritesDesc: 'الأسئلة التي حفظتها للمراجعة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية طلب العلم',
    searchPlaceholder: 'اكتب سؤالك هنا...',
    dailyLabel: '✨ سؤال اليوم',
    question: '❓ السؤال',
    answer: '💡 الجواب',
    verse: 'الآية',
    theme: 'الموضوع',
    share: 'مشاركة',
    favorite: '⭐ حفظ',
    unfavorite: '★ محفوظ',
    noFavorites: 'لم تحفظ أي سؤال بعد',
    startQuiz: 'ابدأ المسابقة',
    nextQuestion: 'السؤال التالي',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    lifeline5050: '50/50',
    lifelineHint: '📖 سؤال الشيخ',
    lifelineVerse: '🤲 استخارة',
    correct: 'صحيح! أحسنت!',
    wrong: 'خطأ! الجواب الصحيح هو:',
    quizAgain: 'أعد المسابقة',
    xpLabel: 'نقاط الخبرة',
    level: 'المستوى',
    badges: 'الأوسمة',
    youngMode: '🌱 المستكشف الصغير',
    teenMode: '📚 الباحث الشاب',
    streakMsg: 'يوم متتالي!',
    splashFeatures: [
      '٢٥ سؤالاً وجواباً من الكتاب',
      'بحث ذكي — اكتب سؤالك واحصل على الإجابة',
      'مسابقة "من يريد أن يكون عالماً؟"',
      'نقاط خبرة وأوسمة'
    ],
  },
  en: {
    appTitle: '100 Questions About Islam',
    splashSub: 'Dialogue between Khalid M. Khalid & Al-Ghazali',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Anbiya 21:107',
    tabHome: 'Home', tabQuestions: 'Questions', tabSearch: 'Search',
    tabQuiz: 'Quiz', tabFavorites: 'Favorites', tabAbout: 'Book',
    questionsTitle: 'Questions & Answers',
    questionsDesc: '25 selected Q&A from the dialogue between Khalid M. Khalid and Sheikh Al-Ghazali',
    searchTitle: 'Find Your Answer',
    searchDesc: 'Type your question and we\'ll find the closest answer from the book',
    quizTitle: 'Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islam — 15 questions, millionaire style',
    favoritesTitle: 'Favorites',
    favoritesDesc: 'Questions you saved for later review',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Seeking Knowledge',
    searchPlaceholder: 'Type your question here...',
    dailyLabel: '✨ Question of the Day',
    question: '❓ Question',
    answer: '💡 Answer',
    verse: 'Verse',
    theme: 'Theme',
    share: 'Share',
    favorite: '⭐ Save',
    unfavorite: '★ Saved',
    noFavorites: 'No saved questions yet',
    startQuiz: 'Start Quiz',
    nextQuestion: 'Next Question',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    lifeline5050: '50/50',
    lifelineHint: '📖 Ask the Sheikh',
    lifelineVerse: '🤲 Guidance',
    correct: 'Correct! Well done!',
    wrong: 'Wrong! The correct answer is:',
    quizAgain: 'Retake Quiz',
    xpLabel: 'Experience Points',
    level: 'Level',
    badges: 'Badges',
    youngMode: '🌱 Young Explorer',
    teenMode: '📚 Teen Scholar',
    streakMsg: 'day streak!',
    splashFeatures: [
      '25 Q&A from the book',
      'Smart search — type your question, get the answer',
      '"Who Wants to Be a Scholar?" quiz',
      'XP points and badges'
    ],
  },
  fr: {
    appTitle: '100 Questions sur l\'Islam',
    splashSub: 'Dialogue entre Khalid M. Khalid et Al-Ghazali',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Anbiya 21:107',
    tabHome: 'Accueil', tabQuestions: 'Questions', tabSearch: 'Recherche',
    tabQuiz: 'Quiz', tabFavorites: 'Favoris', tabAbout: 'Livre',
    questionsTitle: 'Questions et Reponses',
    questionsDesc: '25 Q&R choisies du dialogue entre Khalid M. Khalid et Cheikh Al-Ghazali',
    searchTitle: 'Trouvez Votre Reponse',
    searchDesc: 'Ecrivez votre question et nous trouverons la reponse la plus proche du livre',
    quizTitle: 'Qui Veut Etre un Savant ?',
    quizDesc: 'Testez vos connaissances sur l\'Islam — 15 questions, style millionnaire',
    favoritesTitle: 'Favoris',
    favoritesDesc: 'Les questions que vous avez sauvegardees',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Quete du Savoir',
    searchPlaceholder: 'Ecrivez votre question ici...',
    dailyLabel: '✨ Question du Jour',
    question: '❓ Question',
    answer: '💡 Reponse',
    verse: 'Verset',
    theme: 'Theme',
    share: 'Partager',
    favorite: '⭐ Sauver',
    unfavorite: '★ Sauvee',
    noFavorites: 'Aucune question sauvegardee',
    startQuiz: 'Commencer le Quiz',
    nextQuestion: 'Question Suivante',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    lifeline5050: '50/50',
    lifelineHint: '📖 Demander au Cheikh',
    lifelineVerse: '🤲 Guidance',
    correct: 'Correct ! Bravo !',
    wrong: 'Faux ! La bonne reponse est :',
    quizAgain: 'Refaire le Quiz',
    xpLabel: 'Points d\'Experience',
    level: 'Niveau',
    badges: 'Badges',
    youngMode: '🌱 Jeune Explorateur',
    teenMode: '📚 Jeune Savant',
    streakMsg: 'jours consecutifs !',
    splashFeatures: [
      '25 Q&R du livre',
      'Recherche intelligente — posez votre question',
      'Quiz « Qui Veut Etre un Savant ? »',
      'Points d\'experience et badges'
    ],
  }
};

// ═══════════════ QUESTION THEMES ═══════════════
const THEMES = {
  basics: { ar: 'أساسيات الإسلام', en: 'Basics of Islam', fr: 'Les bases de l\'Islam', emoji: '🕌' },
  worship: { ar: 'العبادات', en: 'Worship', fr: 'Le culte', emoji: '🤲' },
  society: { ar: 'المجتمع', en: 'Society', fr: 'La societe', emoji: '🏘️' },
  misconceptions: { ar: 'شبهات ورد', en: 'Misconceptions', fr: 'Idees recues', emoji: '🛡️' },
  contemporary: { ar: 'قضايا معاصرة', en: 'Contemporary Issues', fr: 'Questions contemporaines', emoji: '🌍' },
};

// ═══════════════ Q&A DATA (25 questions organized by theme) ═══════════════
const QA_DATA = [
  // === BASICS OF ISLAM (5) ===
  {
    id:1, theme:'basics', emoji:'🕌',
    ar:{q:'ما هو الإسلام؟',a:'الإسلام هو الاستسلام لله وحده بالتوحيد، والانقياد له بالطاعة. هو دين الفطرة الذي يخاطب العقل والقلب معاً. ليس مجرد طقوس بل نظام حياة كامل يشمل العقيدة والعبادة والأخلاق والمعاملات.',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',verseRef:'الأنعام ١٦٢'},
    en:{q:'What is Islam?',a:'Islam is submitting to God alone through monotheism and obeying Him. It is the religion of natural disposition that speaks to both mind and heart. It is not merely rituals but a complete life system encompassing belief, worship, ethics, and social dealings.',verse:'Say: My prayer, my worship, my life, and my death are all for God, Lord of the worlds',verseRef:'Al-An\'am 6:162'},
    fr:{q:'Qu\'est-ce que l\'Islam ?',a:'L\'Islam est la soumission a Dieu seul par le monotheisme et l\'obeissance a Lui. C\'est la religion de la nature humaine qui s\'adresse a l\'esprit et au coeur. Ce n\'est pas seulement des rituels mais un systeme de vie complet.',verse:'Dis : Ma priere, mon culte, ma vie et ma mort appartiennent a Dieu, Seigneur des mondes',verseRef:'Al-An\'am 6:162'}
  },
  {
    id:2, theme:'basics', emoji:'📖',
    ar:{q:'ما مكانة القرآن في الإسلام؟',a:'القرآن هو كلام الله المنزل على محمد صلى الله عليه وسلم. هو المصدر الأول للتشريع والهداية. معجز في لفظه ومعناه، محفوظ من التحريف. يخاطب كل زمان ومكان بأسلوب يجمع بين الإعجاز البلاغي والحكمة التشريعية.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ٩'},
    en:{q:'What is the place of the Quran in Islam?',a:'The Quran is the word of God revealed to Prophet Muhammad. It is the primary source of legislation and guidance. It is miraculous in both wording and meaning, preserved from corruption. It addresses every time and place with a style that combines linguistic miracle and legislative wisdom.',verse:'Indeed, it is We who sent down the Reminder and indeed, We will be its guardian',verseRef:'Al-Hijr 15:9'},
    fr:{q:'Quelle est la place du Coran dans l\'Islam ?',a:'Le Coran est la parole de Dieu revelee au Prophete Muhammad. C\'est la source principale de legislation et de guidance. Il est miraculeux dans sa formulation et son sens, preserve de toute corruption.',verse:'C\'est Nous qui avons fait descendre le Rappel et c\'est Nous qui en sommes les gardiens',verseRef:'Al-Hijr 15:9'}
  },
  {
    id:3, theme:'basics', emoji:'🌟',
    ar:{q:'ما هي أركان الإسلام الخمسة؟',a:'الإسلام يقوم على خمسة أركان: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت لمن استطاع إليه سبيلاً. هذه الأركان تشكل الإطار العملي للإيمان.',verse:'بُنِيَ الإسلامُ على خَمْسٍ',verseRef:'متفق عليه'},
    en:{q:'What are the five pillars of Islam?',a:'Islam is built on five pillars: testifying that there is no god but God and Muhammad is His messenger, establishing prayer, paying zakat, fasting Ramadan, and pilgrimage to Mecca for those who are able. These pillars form the practical framework of faith.',verse:'Islam is built upon five pillars',verseRef:'Agreed upon (Bukhari & Muslim)'},
    fr:{q:'Quels sont les cinq piliers de l\'Islam ?',a:'L\'Islam repose sur cinq piliers : temoigner qu\'il n\'y a de dieu que Dieu et que Muhammad est Son messager, accomplir la priere, payer la zakat, jeuner le Ramadan et faire le pelerinage pour ceux qui le peuvent.',verse:'L\'Islam est bati sur cinq piliers',verseRef:'Unanimement reconnu (Bukhari et Muslim)'}
  },
  {
    id:4, theme:'basics', emoji:'💫',
    ar:{q:'ما الفرق بين الإسلام والإيمان؟',a:'الإسلام هو الأعمال الظاهرة كالصلاة والصيام. والإيمان هو التصديق القلبي بالله وملائكته وكتبه ورسله واليوم الآخر والقدر. الإحسان هو أعلى المراتب: أن تعبد الله كأنك تراه. هذه المراتب الثلاث تشكل الدين الكامل.',verse:'أَنْ تَعْبُدَ اللهَ كَأَنَّكَ تَرَاهُ',verseRef:'حديث جبريل — مسلم'},
    en:{q:'What is the difference between Islam and Iman?',a:'Islam refers to the outward acts like prayer and fasting. Iman is the heart\'s belief in God, His angels, books, messengers, the Last Day, and divine decree. Ihsan is the highest level: to worship God as if you see Him. These three levels constitute the complete religion.',verse:'To worship God as if you see Him',verseRef:'Hadith of Jibreel — Muslim'},
    fr:{q:'Quelle est la difference entre Islam et Iman ?',a:'L\'Islam designe les actes exterieurs comme la priere et le jeune. L\'Iman est la croyance du coeur en Dieu, Ses anges, Ses livres, Ses messagers, le Jour Dernier et le destin. L\'Ihsan est le plus haut niveau : adorer Dieu comme si on Le voyait.',verse:'Adorer Dieu comme si tu Le voyais',verseRef:'Hadith de Jibreel — Muslim'}
  },
  {
    id:5, theme:'basics', emoji:'🤝',
    ar:{q:'هل الإسلام دين ودولة؟',a:'الإسلام نظام شامل لا يفصل بين الدين والحياة. لكنه لم يحدد شكلاً واحداً للحكم، بل وضع مبادئ عامة كالشورى والعدل والمساواة. الحكم في الإسلام يقوم على تحقيق مصالح الناس وحفظ حقوقهم، وليس على نموذج جامد.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى ٣٨'},
    en:{q:'Is Islam both religion and state?',a:'Islam is a comprehensive system that does not separate religion from life. However, it did not prescribe a single form of governance, but laid down general principles like consultation, justice, and equality. Governance in Islam aims to serve people\'s interests and protect their rights, not follow a rigid model.',verse:'And their affair is determined by consultation among themselves',verseRef:'Ash-Shura 42:38'},
    fr:{q:'L\'Islam est-il a la fois religion et Etat ?',a:'L\'Islam est un systeme global qui ne separe pas la religion de la vie. Cependant, il n\'a pas prescrit une forme unique de gouvernance, mais a pose des principes generaux comme la consultation, la justice et l\'egalite.',verse:'Et ils se consultent entre eux pour leurs affaires',verseRef:'Ash-Shura 42:38'}
  },

  // === WORSHIP (5) ===
  {
    id:6, theme:'worship', emoji:'🕐',
    ar:{q:'لماذا يصلي المسلم خمس مرات في اليوم؟',a:'الصلاة صلة مباشرة بين العبد وربه. الصلوات الخمس موزعة على اليوم لتكون محطات تجديد روحي مستمر. كل صلاة تمحو ما بينها من ذنوب، كنهر يغتسل فيه المرء خمس مرات يومياً.',verse:'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ',verseRef:'العنكبوت ٤٥'},
    en:{q:'Why does a Muslim pray five times a day?',a:'Prayer is a direct connection between the servant and their Lord. The five prayers are distributed throughout the day as stations of continuous spiritual renewal. Each prayer erases the sins between it and the next, like a river one bathes in five times daily.',verse:'Indeed, prayer prohibits immorality and wrongdoing',verseRef:'Al-Ankabut 29:45'},
    fr:{q:'Pourquoi le musulman prie-t-il cinq fois par jour ?',a:'La priere est un lien direct entre le serviteur et son Seigneur. Les cinq prieres sont reparties tout au long de la journee comme des stations de renouvellement spirituel continu.',verse:'En verite, la priere preserve de la turpitude et du blamable',verseRef:'Al-Ankabut 29:45'}
  },
  {
    id:7, theme:'worship', emoji:'🌙',
    ar:{q:'ما حكمة الصيام في الإسلام؟',a:'الصيام ليس مجرد امتناع عن الطعام. هو تربية للنفس على الصبر وقوة الإرادة. يشعر الصائم بحال الفقراء فيرق قلبه. الصيام يعلم الإنسان أنه أقوى من شهواته، وأن الروح تسمو حين يتحرر الجسد من سلطة الغرائز.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',verseRef:'البقرة ١٨٣'},
    en:{q:'What is the wisdom behind fasting in Islam?',a:'Fasting is not merely abstaining from food. It is training the soul in patience and willpower. The fasting person feels the condition of the poor, softening their heart. Fasting teaches that one is stronger than their desires, and that the spirit rises when the body is freed from the dominion of impulses.',verse:'O you who believe, fasting is prescribed for you as it was prescribed for those before you, that you may become mindful of God',verseRef:'Al-Baqarah 2:183'},
    fr:{q:'Quelle est la sagesse du jeune en Islam ?',a:'Le jeune n\'est pas simplement s\'abstenir de nourriture. C\'est une education de l\'ame a la patience et a la volonte. Le jeuneur ressent la condition des pauvres, adoucissant son coeur.',verse:'O vous qui croyez, le jeune vous est prescrit comme il a ete prescrit a ceux avant vous, afin que vous deveniez pieux',verseRef:'Al-Baqarah 2:183'}
  },
  {
    id:8, theme:'worship', emoji:'💰',
    ar:{q:'لماذا فرضت الزكاة في الإسلام؟',a:'الزكاة ليست صدقة اختيارية بل فريضة. هي حق الفقير في مال الغني. تطهر المال من الشح وتطهر النفس من البخل. الزكاة نظام اقتصادي إسلامي يمنع تكدس الثروة ويحارب الفقر.',verse:'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا',verseRef:'التوبة ١٠٣'},
    en:{q:'Why was zakat made obligatory in Islam?',a:'Zakat is not optional charity but an obligation. It is the right of the poor in the wealth of the rich. It purifies wealth from greed and the soul from stinginess. Zakat is an Islamic economic system that prevents wealth accumulation and fights poverty.',verse:'Take from their wealth a charity to purify and cleanse them',verseRef:'At-Tawbah 9:103'},
    fr:{q:'Pourquoi la zakat est-elle obligatoire en Islam ?',a:'La zakat n\'est pas une charite optionnelle mais une obligation. C\'est le droit du pauvre dans la richesse du riche. Elle purifie la richesse de l\'avarice et l\'ame de la radinerie.',verse:'Prends de leurs biens une aumone pour les purifier et les sanctifier',verseRef:'At-Tawbah 9:103'}
  },
  {
    id:9, theme:'worship', emoji:'🕋',
    ar:{q:'ما الحكمة من الحج؟',a:'الحج مؤتمر إسلامي عالمي يجتمع فيه المسلمون من كل أنحاء الأرض. يتساوى فيه الغني والفقير في لباس واحد. هو تدريب على التواضع والصبر والأخوة. يذكّر بيوم القيامة حين يقف الناس جميعاً بين يدي الله.',verse:'وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا',verseRef:'الحج ٢٧'},
    en:{q:'What is the wisdom behind Hajj?',a:'Hajj is a global Islamic conference where Muslims gather from all corners of the earth. Rich and poor are equal in the same garment. It is training in humility, patience, and brotherhood. It reminds us of the Day of Judgment when all people will stand before God.',verse:'And proclaim to the people the Hajj; they will come to you on foot',verseRef:'Al-Hajj 22:27'},
    fr:{q:'Quelle est la sagesse du Hajj ?',a:'Le Hajj est une conference islamique mondiale ou les musulmans se reunissent de tous les coins de la terre. Riches et pauvres sont egaux dans le meme vetement. C\'est un entrainement a l\'humilite, la patience et la fraternite.',verse:'Et fais aux gens une annonce pour le Hajj, ils viendront a toi a pied',verseRef:'Al-Hajj 22:27'}
  },
  {
    id:10, theme:'worship', emoji:'📿',
    ar:{q:'هل العبادة في الإسلام مقتصرة على الشعائر؟',a:'العبادة في الإسلام أوسع بكثير من الشعائر. كل عمل صالح يُبتغى به وجه الله هو عبادة: العمل عبادة، طلب العلم عبادة، الابتسامة في وجه أخيك صدقة، إماطة الأذى عن الطريق صدقة. الإسلام يحول الحياة كلها إلى عبادة.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',verseRef:'الذاريات ٥٦'},
    en:{q:'Is worship in Islam limited to rituals?',a:'Worship in Islam is far broader than rituals. Every good deed done for God\'s sake is worship: work is worship, seeking knowledge is worship, smiling at your brother is charity, removing harm from the road is charity. Islam transforms all of life into worship.',verse:'I did not create the jinn and mankind except to worship Me',verseRef:'Adh-Dhariyat 51:56'},
    fr:{q:'Le culte en Islam se limite-t-il aux rituels ?',a:'Le culte en Islam est bien plus large que les rituels. Toute bonne action faite pour Dieu est un culte : le travail est un culte, la quete du savoir est un culte, sourire a son frere est une charite. L\'Islam transforme toute la vie en adoration.',verse:'Je n\'ai cree les djinns et les hommes que pour qu\'ils M\'adorent',verseRef:'Adh-Dhariyat 51:56'}
  },

  // === SOCIETY (5) ===
  {
    id:11, theme:'society', emoji:'👩',
    ar:{q:'ما مكانة المرأة في الإسلام؟',a:'المرأة في الإسلام شقيقة الرجل. لها حق التعليم والعمل والتملك والميراث. كرّمها الإسلام أمّاً وبنتاً وزوجة. الإسلام أعطى المرأة حقوقها قبل أن تطالب بها الحضارات الأخرى بقرون.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢٢٨'},
    en:{q:'What is the status of women in Islam?',a:'Woman in Islam is the sister of man. She has the right to education, work, ownership, and inheritance. Islam honored her as mother, daughter, and wife. Islam gave women their rights centuries before other civilizations demanded them.',verse:'And women have rights similar to those over them in kindness',verseRef:'Al-Baqarah 2:228'},
    fr:{q:'Quelle est la place de la femme en Islam ?',a:'La femme en Islam est la soeur de l\'homme. Elle a le droit a l\'education, au travail, a la propriete et a l\'heritage. L\'Islam l\'a honoree comme mere, fille et epouse. L\'Islam a donne aux femmes leurs droits des siecles avant les autres civilisations.',verse:'Et elles ont des droits similaires a ceux exerces sur elles, selon les convenances',verseRef:'Al-Baqarah 2:228'}
  },
  {
    id:12, theme:'society', emoji:'🤝',
    ar:{q:'كيف ينظر الإسلام إلى غير المسلمين؟',a:'الإسلام يأمر بالعدل مع جميع الناس مسلمين وغير مسلمين. حرية العقيدة مكفولة: "لا إكراه في الدين". المعاملة بالحسنى واجبة مع الجميع. التنوع البشري سنة إلهية، والتعارف بين الشعوب مقصد قرآني.',verse:'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ... أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',verseRef:'الممتحنة ٨'},
    en:{q:'How does Islam view non-Muslims?',a:'Islam commands justice with all people, Muslim and non-Muslim alike. Freedom of belief is guaranteed: "There is no compulsion in religion." Kind treatment is obligatory toward everyone. Human diversity is a divine plan, and getting to know other nations is a Quranic purpose.',verse:'God does not forbid you from those who do not fight you in religion... to deal kindly and justly with them',verseRef:'Al-Mumtahanah 60:8'},
    fr:{q:'Comment l\'Islam voit-il les non-musulmans ?',a:'L\'Islam ordonne la justice envers tous les gens, musulmans et non-musulmans. La liberte de croyance est garantie : « Pas de contrainte en religion. » Le bon traitement est obligatoire envers tous. La diversite humaine est un plan divin.',verse:'Dieu ne vous interdit pas d\'etre bons et justes envers ceux qui ne vous combattent pas a cause de la religion',verseRef:'Al-Mumtahanah 60:8'}
  },
  {
    id:13, theme:'society', emoji:'⚖️',
    ar:{q:'ما موقف الإسلام من العدالة الاجتماعية؟',a:'العدالة الاجتماعية ركيزة أساسية في الإسلام. الزكاة فريضة لمحاربة الفقر. الإسلام يرفض الاستغلال والاحتكار. كل إنسان له حق الحياة الكريمة والعمل والتعليم. الغزالي يؤكد أن الفقر ليس قدراً بل نتيجة ظلم يجب إصلاحه.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ٩٠'},
    en:{q:'What is Islam\'s position on social justice?',a:'Social justice is a fundamental pillar in Islam. Zakat is an obligation to fight poverty. Islam rejects exploitation and monopoly. Every person has the right to a dignified life, work, and education. Al-Ghazali affirms that poverty is not destiny but the result of injustice that must be corrected.',verse:'Indeed, God commands justice and good conduct',verseRef:'An-Nahl 16:90'},
    fr:{q:'Quelle est la position de l\'Islam sur la justice sociale ?',a:'La justice sociale est un pilier fondamental de l\'Islam. La zakat est une obligation pour combattre la pauvrete. L\'Islam rejette l\'exploitation et le monopole. Chaque personne a droit a une vie digne, au travail et a l\'education.',verse:'En verite, Dieu ordonne la justice et la bienfaisance',verseRef:'An-Nahl 16:90'}
  },
  {
    id:14, theme:'society', emoji:'📚',
    ar:{q:'ما علاقة الإسلام بالعلم؟',a:'الإسلام دين يحثّ على العلم بقوة. أول كلمة نزلت في القرآن هي "اقرأ". طلب العلم فريضة على كل مسلم ومسلمة. الحضارة الإسلامية قدمت للعالم إنجازات في الطب والرياضيات والفلك والكيمياء. لا تعارض في الإسلام بين العلم والدين.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١'},
    en:{q:'What is Islam\'s relationship with knowledge?',a:'Islam is a religion that strongly encourages knowledge. The first word revealed in the Quran is "Read." Seeking knowledge is an obligation for every Muslim, male and female. Islamic civilization contributed achievements in medicine, mathematics, astronomy, and chemistry. In Islam, there is no conflict between science and religion.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 96:1'},
    fr:{q:'Quelle est la relation de l\'Islam avec le savoir ?',a:'L\'Islam est une religion qui encourage fortement le savoir. Le premier mot revele dans le Coran est « Lis ». La quete du savoir est une obligation pour tout musulman. La civilisation islamique a offert au monde des avancees en medecine, mathematiques, astronomie et chimie.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 96:1'}
  },
  {
    id:15, theme:'society', emoji:'🌳',
    ar:{q:'ما موقف الإسلام من البيئة؟',a:'الإنسان في الإسلام خليفة الله في الأرض، مسؤول عن حمايتها وإعمارها. الإسراف محرم حتى في الماء. غرس الأشجار عبادة. الرفق بالحيوان واجب. الإسلام سبق العالم في وضع أسس حماية البيئة.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف ٥٦'},
    en:{q:'What is Islam\'s position on the environment?',a:'In Islam, humans are God\'s vicegerents on Earth, responsible for protecting and developing it. Wastefulness is forbidden, even with water. Planting trees is an act of worship. Kindness to animals is obligatory. Islam preceded the world in laying the foundations of environmental protection.',verse:'And do not cause corruption on the earth after its reformation',verseRef:'Al-A\'raf 7:56'},
    fr:{q:'Quelle est la position de l\'Islam sur l\'environnement ?',a:'En Islam, l\'homme est le vicaire de Dieu sur Terre, responsable de sa protection et de son developpement. Le gaspillage est interdit, meme avec l\'eau. Planter des arbres est un acte d\'adoration. La bonte envers les animaux est obligatoire.',verse:'Et ne commettez pas de corruption sur la terre apres sa reforme',verseRef:'Al-A\'raf 7:56'}
  },

  // === MISCONCEPTIONS (5) ===
  {
    id:16, theme:'misconceptions', emoji:'⚔️',
    ar:{q:'هل انتشر الإسلام بالسيف؟',a:'هذا من أكبر الأخطاء الشائعة. الإسلام انتشر بالدعوة والقدوة الحسنة. دخل ملايين الناس الإسلام في جنوب شرق آسيا وأفريقيا دون أن تصل إليهم جيوش. الفتوحات كانت لإزالة الطغاة لا لإكراه الناس. والدليل أن غير المسلمين عاشوا في البلاد الإسلامية قروناً.',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'البقرة ٢٥٦'},
    en:{q:'Was Islam spread by the sword?',a:'This is one of the biggest misconceptions. Islam spread through preaching and good example. Millions embraced Islam in Southeast Asia and Africa without any armies reaching them. Conquests were to remove tyrants, not to force people. The proof is that non-Muslims lived in Islamic lands for centuries.',verse:'There is no compulsion in religion',verseRef:'Al-Baqarah 2:256'},
    fr:{q:'L\'Islam s\'est-il repandu par l\'epee ?',a:'C\'est l\'une des plus grandes idees recues. L\'Islam s\'est repandu par la predication et le bon exemple. Des millions de personnes ont embrasse l\'Islam en Asie du Sud-Est et en Afrique sans qu\'aucune armee ne les atteigne.',verse:'Pas de contrainte en religion',verseRef:'Al-Baqarah 2:256'}
  },
  {
    id:17, theme:'misconceptions', emoji:'🕊️',
    ar:{q:'هل الإسلام دين إرهاب؟',a:'الإسلام يعني السلام. قتل نفس واحدة بغير حق كقتل الناس جميعاً. الإرهاب ليس من الإسلام في شيء. من يرتكب العنف باسم الإسلام يخالف تعاليمه. النبي نهى عن قتل النساء والأطفال والشيوخ والرهبان حتى في الحرب.',verse:'مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',verseRef:'المائدة ٣٢'},
    en:{q:'Is Islam a religion of terrorism?',a:'Islam means peace. Killing one innocent soul is like killing all of humanity. Terrorism has nothing to do with Islam. Those who commit violence in Islam\'s name violate its teachings. The Prophet forbade killing women, children, elderly, and monks even in war.',verse:'Whoever kills a soul, unless for a soul or corruption, it is as if he killed all mankind',verseRef:'Al-Ma\'idah 5:32'},
    fr:{q:'L\'Islam est-il une religion de terrorisme ?',a:'Islam signifie paix. Tuer une seule ame innocente equivaut a tuer toute l\'humanite. Le terrorisme n\'a rien a voir avec l\'Islam. Ceux qui commettent la violence au nom de l\'Islam violent ses enseignements.',verse:'Quiconque tue une ame, sauf pour une ame ou corruption, c\'est comme s\'il avait tue toute l\'humanite',verseRef:'Al-Ma\'idah 5:32'}
  },
  {
    id:18, theme:'misconceptions', emoji:'🔒',
    ar:{q:'هل الإسلام يقيد الحرية؟',a:'الإسلام يكفل الحريات الأساسية: حرية العقيدة والتعبير والتملك والتنقل. لكنه يضع حدوداً تمنع الأذى. الحرية المطلقة تؤدي إلى الفوضى. الإسلام يوازن بين حرية الفرد وحقوق المجتمع. القيود الإسلامية كقوانين المرور: تحمي لا تقيد.',verse:'وَقُلِ الْحَقُّ مِن رَّبِّكُمْ فَمَن شَاءَ فَلْيُؤْمِن وَمَن شَاءَ فَلْيَكْفُرْ',verseRef:'الكهف ٢٩'},
    en:{q:'Does Islam restrict freedom?',a:'Islam guarantees fundamental freedoms: freedom of belief, expression, ownership, and movement. But it sets limits that prevent harm. Absolute freedom leads to chaos. Islam balances individual freedom with community rights. Islamic limits are like traffic laws: they protect, not restrict.',verse:'Say: The truth is from your Lord. Whoever wills, let them believe; and whoever wills, let them disbelieve',verseRef:'Al-Kahf 18:29'},
    fr:{q:'L\'Islam restreint-il la liberte ?',a:'L\'Islam garantit les libertes fondamentales : liberte de croyance, d\'expression, de propriete et de deplacement. Mais il pose des limites qui empechent le mal. La liberte absolue mene au chaos. L\'Islam equilibre la liberte individuelle et les droits de la communaute.',verse:'Dis : La verite vient de votre Seigneur. Quiconque veut, qu\'il croie ; et quiconque veut, qu\'il mecroie',verseRef:'Al-Kahf 18:29'}
  },
  {
    id:19, theme:'misconceptions', emoji:'🧕',
    ar:{q:'هل الحجاب قمع للمرأة؟',a:'الحجاب خيار إيماني وليس قمعاً. هو تكريم للمرأة وحماية لها من أن تُقيّم بمظهرها فقط. كثير من المسلمات يرتدينه بفخر واقتناع. الحجاب الحقيقي حجاب السلوك قبل اللباس: الحشمة والأخلاق والعفة.',verse:'يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ',verseRef:'الأحزاب ٥٩'},
    en:{q:'Is hijab oppression of women?',a:'Hijab is a faith-based choice, not oppression. It honors women and protects them from being judged solely by appearance. Many Muslim women wear it with pride and conviction. True hijab is the hijab of conduct before clothing: modesty, ethics, and dignity.',verse:'O Prophet, tell your wives and daughters and the women of the believers to bring down over themselves their outer garments',verseRef:'Al-Ahzab 33:59'},
    fr:{q:'Le hijab est-il une oppression des femmes ?',a:'Le hijab est un choix de foi, pas une oppression. Il honore les femmes et les protege d\'etre jugees uniquement sur l\'apparence. De nombreuses musulmanes le portent avec fierte et conviction. Le vrai hijab est celui du comportement avant le vetement.',verse:'O Prophete, dis a tes epouses, a tes filles et aux femmes des croyants de ramener sur elles leurs grands voiles',verseRef:'Al-Ahzab 33:59'}
  },
  {
    id:20, theme:'misconceptions', emoji:'📜',
    ar:{q:'هل الإسلام ضد الديمقراطية؟',a:'الشورى مبدأ إسلامي أصيل يتوافق مع جوهر الديمقراطية. الإسلام يرفض الاستبداد ويأمر بالتشاور. لكنه لا يقبل أن تكون الأغلبية مبرراً لانتهاك حقوق الإنسان أو مخالفة العدل. الديمقراطية كآلية لا تتعارض مع الإسلام.',verse:'وَشَاوِرْهُمْ فِي الْأَمْرِ',verseRef:'آل عمران ١٥٩'},
    en:{q:'Is Islam against democracy?',a:'Shura (consultation) is an authentic Islamic principle that aligns with the essence of democracy. Islam rejects tyranny and commands consultation. However, it does not accept that majority rule can justify violating human rights or justice. Democracy as a mechanism does not conflict with Islam.',verse:'And consult them in the matter',verseRef:'Aal-Imran 3:159'},
    fr:{q:'L\'Islam est-il contre la democratie ?',a:'La Shura (consultation) est un principe islamique authentique qui s\'aligne avec l\'essence de la democratie. L\'Islam rejette la tyrannie et ordonne la consultation. Cependant, il n\'accepte pas que la majorite justifie la violation des droits humains.',verse:'Et consulte-les sur la question',verseRef:'Aal-Imran 3:159'}
  },

  // === CONTEMPORARY ISSUES (5) ===
  {
    id:21, theme:'contemporary', emoji:'💡',
    ar:{q:'كيف يواجه الإسلام تحديات العصر؟',a:'الإسلام يملك مرونة فقهية تتيح له مواجهة كل عصر. الثوابت قليلة والمتغيرات واسعة. الاجتهاد باب مفتوح لمواكبة التطور. المقاصد الشرعية الخمسة (حفظ الدين والنفس والعقل والنسل والمال) تغطي كل قضية معاصرة.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧'},
    en:{q:'How does Islam face modern challenges?',a:'Islam possesses jurisprudential flexibility that allows it to face every era. The constants are few and the variables are vast. Ijtihad (independent reasoning) is an open door to keep pace with progress. The five objectives of Sharia (preserving religion, life, mind, lineage, and wealth) cover every contemporary issue.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 21:107'},
    fr:{q:'Comment l\'Islam fait-il face aux defis modernes ?',a:'L\'Islam possede une flexibilite juridique qui lui permet de faire face a chaque epoque. Les constantes sont peu nombreuses et les variables sont vastes. L\'ijtihad (raisonnement independant) est une porte ouverte pour suivre le progres.',verse:'Et Nous ne t\'avons envoye qu\'en misericorde pour les mondes',verseRef:'Al-Anbiya 21:107'}
  },
  {
    id:22, theme:'contemporary', emoji:'🌐',
    ar:{q:'ما موقف الإسلام من العولمة؟',a:'الإسلام يرحب بالتواصل بين الشعوب والتعارف الحضاري. لكنه يرفض الذوبان الثقافي والهيمنة. الإسلام يميز بين الانفتاح المفيد والتبعية الضارة. التقنية مرحب بها ما دامت تخدم الإنسان ولا تستعبده.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣'},
    en:{q:'What is Islam\'s position on globalization?',a:'Islam welcomes communication between peoples and civilizational exchange. But it rejects cultural dissolution and domination. Islam distinguishes between beneficial openness and harmful dependency. Technology is welcome as long as it serves humanity and does not enslave it.',verse:'O mankind, We created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 49:13'},
    fr:{q:'Quelle est la position de l\'Islam sur la mondialisation ?',a:'L\'Islam accueille la communication entre les peuples et l\'echange civilisationnel. Mais il rejette la dissolution culturelle et la domination. L\'Islam distingue entre l\'ouverture benefique et la dependance nuisible.',verse:'O gens, Nous vous avons crees d\'un male et d\'une femelle et avons fait de vous des peuples et des tribus pour que vous vous connaissiez',verseRef:'Al-Hujurat 49:13'}
  },
  {
    id:23, theme:'contemporary', emoji:'🧬',
    ar:{q:'ما موقف الإسلام من العلم الحديث؟',a:'لا تعارض بين الإسلام والعلم الحديث. القرآن يحث على التفكر والبحث. كثير من الاكتشافات العلمية تتوافق مع إشارات قرآنية. الإسلام يشجع البحث العلمي ويعتبره فرض كفاية على الأمة.',verse:'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ',verseRef:'العنكبوت ٢٠'},
    en:{q:'What is Islam\'s position on modern science?',a:'There is no conflict between Islam and modern science. The Quran encourages reflection and research. Many scientific discoveries align with Quranic references. Islam encourages scientific research and considers it a communal obligation upon the Muslim nation.',verse:'Say: Travel through the earth and observe how He began creation',verseRef:'Al-Ankabut 29:20'},
    fr:{q:'Quelle est la position de l\'Islam sur la science moderne ?',a:'Il n\'y a pas de conflit entre l\'Islam et la science moderne. Le Coran encourage la reflexion et la recherche. De nombreuses decouvertes scientifiques concordent avec des references coraniques. L\'Islam encourage la recherche scientifique.',verse:'Dis : Parcourez la terre et observez comment Il a commence la creation',verseRef:'Al-Ankabut 29:20'}
  },
  {
    id:24, theme:'contemporary', emoji:'🏦',
    ar:{q:'ما موقف الإسلام من الاقتصاد؟',a:'الإسلام له نظام اقتصادي متكامل يقوم على: تحريم الربا لأنه يستغل المحتاج، وجوب الزكاة لمحاربة الفقر، منع الاحتكار والغش، تشجيع التجارة الحلال والعمل. الاقتصاد الإسلامي يوازن بين حرية السوق والعدالة الاجتماعية.',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'البقرة ٢٧٥'},
    en:{q:'What is Islam\'s position on economics?',a:'Islam has a comprehensive economic system based on: prohibiting usury because it exploits the needy, obligating zakat to fight poverty, banning monopoly and fraud, and encouraging lawful trade and work. Islamic economics balances market freedom with social justice.',verse:'God has permitted trade and forbidden usury',verseRef:'Al-Baqarah 2:275'},
    fr:{q:'Quelle est la position de l\'Islam sur l\'economie ?',a:'L\'Islam a un systeme economique complet base sur : l\'interdiction de l\'usure car elle exploite le necessiteux, l\'obligation de la zakat pour combattre la pauvrete, l\'interdiction du monopole et de la fraude, et l\'encouragement du commerce licite et du travail.',verse:'Dieu a permis le commerce et interdit l\'usure',verseRef:'Al-Baqarah 2:275'}
  },
  {
    id:25, theme:'contemporary', emoji:'🕊️',
    ar:{q:'ما رسالة الإسلام للعالم اليوم؟',a:'رسالة الإسلام للعالم هي السلام والرحمة والعدل. الإسلام يدعو إلى التعايش والحوار والتعاون على الخير. يحترم التنوع ويرفض العنف. رسالته الأساسية: أن الله واحد، وأن البشر إخوة، وأن العدل أساس العمران.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧'},
    en:{q:'What is Islam\'s message to the world today?',a:'Islam\'s message to the world is peace, mercy, and justice. Islam calls for coexistence, dialogue, and cooperation in goodness. It respects diversity and rejects violence. Its core message: God is One, humans are brothers, and justice is the foundation of civilization.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 21:107'},
    fr:{q:'Quel est le message de l\'Islam au monde aujourd\'hui ?',a:'Le message de l\'Islam au monde est la paix, la misericorde et la justice. L\'Islam appelle a la coexistence, au dialogue et a la cooperation dans le bien. Il respecte la diversite et rejette la violence.',verse:'Et Nous ne t\'avons envoye qu\'en misericorde pour les mondes',verseRef:'Al-Anbiya 21:107'}
  },
];

// ═══════════════ QUIZ QUESTIONS (15 for "Who Wants to Be a Scholar?") ═══════════════
const QUIZ_DATA = [
  // Easy (1-5)
  {
    id:1, difficulty:1,
    ar:{q:'ما أول كلمة نزلت في القرآن الكريم؟',options:['اقرأ','قل','بسم','الحمد'],correct:0,hint:'نزلت في غار حراء'},
    en:{q:'What was the first word revealed in the Holy Quran?',options:['Read','Say','In the name','Praise'],correct:0,hint:'It was revealed in the Cave of Hira'},
    fr:{q:'Quel est le premier mot revele dans le Saint Coran ?',options:['Lis','Dis','Au nom','Louange'],correct:0,hint:'Il a ete revele dans la grotte de Hira'}
  },
  {
    id:2, difficulty:1,
    ar:{q:'كم عدد أركان الإسلام؟',options:['ثلاثة','أربعة','خمسة','ستة'],correct:2,hint:'الشهادتان والصلاة والزكاة والصيام والحج'},
    en:{q:'How many pillars of Islam are there?',options:['Three','Four','Five','Six'],correct:2,hint:'Shahada, prayer, zakat, fasting, and Hajj'},
    fr:{q:'Combien de piliers de l\'Islam y a-t-il ?',options:['Trois','Quatre','Cinq','Six'],correct:2,hint:'Shahada, priere, zakat, jeune et Hajj'}
  },
  {
    id:3, difficulty:1,
    ar:{q:'ما معنى كلمة "إسلام"؟',options:['السلام','الاستسلام لله','الحرب','العبادة'],correct:1,hint:'من الجذر سلم — الخضوع لله'},
    en:{q:'What does the word "Islam" mean?',options:['Peace','Submission to God','War','Worship'],correct:1,hint:'From the root s-l-m — submission to God'},
    fr:{q:'Que signifie le mot « Islam » ?',options:['La paix','La soumission a Dieu','La guerre','Le culte'],correct:1,hint:'De la racine s-l-m — soumission a Dieu'}
  },
  {
    id:4, difficulty:1,
    ar:{q:'من هو مؤلف كتاب "مائة سؤال عن الإسلام"؟',options:['الشيخ محمد الغزالي','ابن تيمية','الشيخ الشعراوي','خالد محمد خالد'],correct:0,hint:'عالم مصري من الأزهر'},
    en:{q:'Who is the author of "100 Questions About Islam"?',options:['Sheikh Mohammed Al-Ghazali','Ibn Taymiyyah','Sheikh Al-Sha\'rawi','Khalid M. Khalid'],correct:0,hint:'An Egyptian scholar from Al-Azhar'},
    fr:{q:'Qui est l\'auteur de « 100 Questions sur l\'Islam » ?',options:['Cheikh Mohammed Al-Ghazali','Ibn Taymiyyah','Cheikh Al-Sha\'rawi','Khalid M. Khalid'],correct:0,hint:'Un savant egyptien d\'Al-Azhar'}
  },
  {
    id:5, difficulty:1,
    ar:{q:'ما هي السورة التي تعادل ثلث القرآن؟',options:['الفاتحة','الإخلاص','الناس','الفلق'],correct:1,hint:'قل هو الله أحد'},
    en:{q:'Which surah equals one-third of the Quran?',options:['Al-Fatiha','Al-Ikhlas','An-Nas','Al-Falaq'],correct:1,hint:'Say: He is God, the One'},
    fr:{q:'Quelle sourate equivaut a un tiers du Coran ?',options:['Al-Fatiha','Al-Ikhlas','An-Nas','Al-Falaq'],correct:1,hint:'Dis : Il est Dieu, l\'Unique'}
  },
  // Medium (6-10)
  {
    id:6, difficulty:2,
    ar:{q:'ما هو المبدأ القرآني الذي يضمن حرية الدين؟',options:['لا إكراه في الدين','ادع إلى سبيل ربك','وشاورهم في الأمر','اقرأ باسم ربك'],correct:0,hint:'سورة البقرة'},
    en:{q:'What Quranic principle guarantees religious freedom?',options:['No compulsion in religion','Call to the way of your Lord','Consult them in the matter','Read in the name of your Lord'],correct:0,hint:'Surah Al-Baqarah'},
    fr:{q:'Quel principe coranique garantit la liberte religieuse ?',options:['Pas de contrainte en religion','Appelle au chemin de ton Seigneur','Consulte-les sur la question','Lis au nom de ton Seigneur'],correct:0,hint:'Sourate Al-Baqarah'}
  },
  {
    id:7, difficulty:2,
    ar:{q:'ما الذي يميز الزكاة عن الصدقة العادية؟',options:['الزكاة تطوعية','الزكاة فريضة محددة النسبة','الصدقة أفضل','لا فرق بينهما'],correct:1,hint:'٢.٥٪ من المال الذي بلغ النصاب'},
    en:{q:'What distinguishes zakat from regular charity?',options:['Zakat is voluntary','Zakat is obligatory with a fixed rate','Charity is better','No difference'],correct:1,hint:'2.5% of wealth that reaches the threshold'},
    fr:{q:'Qu\'est-ce qui distingue la zakat de la charite ordinaire ?',options:['La zakat est volontaire','La zakat est obligatoire avec un taux fixe','La charite est meilleure','Pas de difference'],correct:1,hint:'2,5% de la richesse qui atteint le seuil'}
  },
  {
    id:8, difficulty:2,
    ar:{q:'من هو محاور الشيخ الغزالي في الكتاب؟',options:['أحمد أمين','عباس العقاد','خالد محمد خالد','طه حسين'],correct:2,hint:'كاتب مصري شهير صاحب "من هنا نبدأ"'},
    en:{q:'Who was Al-Ghazali\'s dialogue partner in the book?',options:['Ahmad Amin','Abbas Al-Aqqad','Khalid Muhammad Khalid','Taha Hussein'],correct:2,hint:'Famous Egyptian writer of "From Here We Start"'},
    fr:{q:'Qui etait le partenaire de dialogue d\'Al-Ghazali dans le livre ?',options:['Ahmad Amin','Abbas Al-Aqqad','Khalid Muhammad Khalid','Taha Hussein'],correct:2,hint:'Celebre ecrivain egyptien de « D\'ici nous commencons »'}
  },
  {
    id:9, difficulty:2,
    ar:{q:'ما هو مبدأ "الشورى" في الإسلام؟',options:['حكم الفرد','التشاور في اتخاذ القرارات','الخلافة','الجهاد'],correct:1,hint:'وأمرهم شورى بينهم'},
    en:{q:'What is the principle of "Shura" in Islam?',options:['Individual rule','Consultation in decision-making','Caliphate','Jihad'],correct:1,hint:'Their affair is determined by consultation'},
    fr:{q:'Qu\'est-ce que le principe de « Shura » en Islam ?',options:['Le pouvoir individuel','La consultation dans la prise de decision','Le califat','Le jihad'],correct:1,hint:'Leurs affaires se reglent par consultation entre eux'}
  },
  {
    id:10, difficulty:2,
    ar:{q:'ما هي المقاصد الخمسة للشريعة الإسلامية؟',options:['الصلاة والصيام والزكاة والحج والشهادة','حفظ الدين والنفس والعقل والنسل والمال','الإيمان والإحسان والتقوى والصبر والشكر','العلم والعمل والدعوة والصبر والمحاسبة'],correct:1,hint:'الضروريات الخمس'},
    en:{q:'What are the five objectives of Islamic law?',options:['Prayer, fasting, zakat, Hajj, testimony','Preserving religion, life, mind, lineage, wealth','Faith, excellence, piety, patience, gratitude','Knowledge, action, preaching, patience, accountability'],correct:1,hint:'The five necessities'},
    fr:{q:'Quels sont les cinq objectifs de la loi islamique ?',options:['Priere, jeune, zakat, Hajj, temoignage','Preserver la religion, la vie, l\'esprit, la descendance, la richesse','Foi, excellence, piete, patience, gratitude','Savoir, action, predication, patience, responsabilite'],correct:1,hint:'Les cinq necessites'}
  },
  // Hard (11-15)
  {
    id:11, difficulty:3,
    ar:{q:'ما موقف الشيخ الغزالي من العلاقة بين العلم والدين؟',options:['متعارضان دائماً','لا علاقة بينهما','متكاملان ولا تعارض','العلم أهم من الدين'],correct:2,hint:'القرآن يحث على التفكر والبحث'},
    en:{q:'What was Al-Ghazali\'s position on the relationship between science and religion?',options:['Always conflicting','No relationship','Complementary with no conflict','Science is more important'],correct:2,hint:'The Quran encourages reflection and research'},
    fr:{q:'Quelle etait la position d\'Al-Ghazali sur la relation entre science et religion ?',options:['Toujours en conflit','Aucune relation','Complementaires sans conflit','La science est plus importante'],correct:2,hint:'Le Coran encourage la reflexion et la recherche'}
  },
  {
    id:12, difficulty:3,
    ar:{q:'كيف يرد الغزالي على من يقول إن الإسلام انتشر بالسيف؟',a:'الإسلام انتشر بالدعوة',options:['يوافق على ذلك','يقول إن ذلك حدث فقط في البداية','يستدل بانتشار الإسلام في جنوب شرق آسيا دون جيوش','يتجاهل السؤال'],correct:2,hint:'إندونيسيا أكبر دولة إسلامية ولم تصلها جيوش'},
    en:{q:'How does Al-Ghazali respond to those who say Islam spread by the sword?',options:['He agrees','He says it happened only at first','He cites Islam\'s spread in Southeast Asia without armies','He ignores the question'],correct:2,hint:'Indonesia is the largest Muslim country and no armies reached it'},
    fr:{q:'Comment Al-Ghazali repond-il a ceux qui disent que l\'Islam s\'est repandu par l\'epee ?',options:['Il est d\'accord','Il dit que cela s\'est produit seulement au debut','Il cite la propagation de l\'Islam en Asie du Sud-Est sans armees','Il ignore la question'],correct:2,hint:'L\'Indonesie est le plus grand pays musulman et aucune armee ne l\'a atteinte'}
  },
  {
    id:13, difficulty:3,
    ar:{q:'ما مفهوم "الاجتهاد" في الإسلام؟',options:['اتباع أعمى للتراث','بذل الجهد في استنباط الأحكام من المصادر','رفض السنة','تغيير القرآن'],correct:1,hint:'باب مفتوح لمواكبة التطور'},
    en:{q:'What is the concept of "Ijtihad" in Islam?',options:['Blind following of tradition','Exerting effort to derive rulings from sources','Rejecting the Sunnah','Changing the Quran'],correct:1,hint:'An open door to keep pace with progress'},
    fr:{q:'Quel est le concept d\'« Ijtihad » en Islam ?',options:['Suivre aveuglement la tradition','Faire l\'effort de deduire des regles des sources','Rejeter la Sunna','Changer le Coran'],correct:1,hint:'Une porte ouverte pour suivre le progres'}
  },
  {
    id:14, difficulty:3,
    ar:{q:'ما رأي الغزالي في تعدد الزوجات؟',options:['واجب على كل مسلم','مباح بشرط العدل وهو استثناء لا قاعدة','محرم','مكروه دائماً'],correct:1,hint:'والعدل شرط صعب التحقيق'},
    en:{q:'What is Al-Ghazali\'s view on polygamy?',options:['Obligatory for every Muslim','Permissible with condition of justice, an exception not a rule','Forbidden','Always disliked'],correct:1,hint:'Justice is a condition that is hard to achieve'},
    fr:{q:'Quel est l\'avis d\'Al-Ghazali sur la polygamie ?',options:['Obligatoire pour chaque musulman','Permise a condition de justice, une exception pas une regle','Interdite','Toujours detestee'],correct:1,hint:'La justice est une condition difficile a realiser'}
  },
  {
    id:15, difficulty:3,
    ar:{q:'ما الفكرة الرئيسية للكتاب؟',options:['رفض الحضارة الغربية','الإسلام دين شامل يجيب على كل أسئلة العصر بالعقل والنقل','العودة للماضي فقط','السياسة أهم من الدين'],correct:1,hint:'حوار عقلاني بين مفكرين كبيرين'},
    en:{q:'What is the main idea of the book?',options:['Rejecting Western civilization','Islam is a comprehensive religion that answers all modern questions through reason and revelation','Only returning to the past','Politics is more important than religion'],correct:1,hint:'A rational dialogue between two great thinkers'},
    fr:{q:'Quelle est l\'idee principale du livre ?',options:['Rejeter la civilisation occidentale','L\'Islam est une religion globale qui repond a toutes les questions modernes par la raison et la revelation','Retourner uniquement au passe','La politique est plus importante que la religion'],correct:1,hint:'Un dialogue rationnel entre deux grands penseurs'}
  },
];

// ═══════════════ DUAS FOR SEEKING KNOWLEDGE ═══════════════
const DUAS = [
  {
    ar:{label:'دعاء طلب العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge (Taha 20:114)'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Seigneur, augmente-moi en savoir (Taha 20:114)'}
  },
  {
    ar:{label:'دعاء الفهم',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ',tr:'دعاء النبي لابن عباس'},
    en:{label:'Dua for Understanding',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ',tr:'O God, grant me understanding of religion and teach me interpretation'},
    fr:{label:'Dua pour la Comprehension',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ',tr:'O Dieu, accorde-moi la comprehension de la religion et enseigne-moi l\'interpretation'}
  },
  {
    ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'متفق عليه'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'O God, place light in my heart, my sight, and my hearing'},
    fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'O Dieu, mets de la lumiere dans mon coeur, ma vue et mon ouie'}
  },
  {
    ar:{label:'دعاء الاستفتاح',text:'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ',tr:'دعاء استفتاح الصلاة'},
    en:{label:'Opening Dua',text:'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ',tr:'Glory and praise be to You, O God. Blessed is Your Name and exalted is Your Majesty. There is no god but You.'},
    fr:{label:'Dua d\'Ouverture',text:'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ',tr:'Gloire et louange a Toi, O Dieu. Beni est Ton Nom et exaltee est Ta Majeste. Il n\'y a de dieu que Toi.'}
  },
  {
    ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً',tr:'رواه ابن ماجه'},
    en:{label:'Dua for Beneficial Knowledge',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً',tr:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds'},
    fr:{label:'Dua pour le Savoir Benefique',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً',tr:'O Dieu, je Te demande un savoir benefique, une bonne subsistance et des actes acceptes'}
  },
];

// ═══════════════ BADGES ═══════════════
const BADGES = [
  { id:'beginner', emoji:'🌟', ar:'مبتدئ', en:'Beginner', fr:'Debutant', condition:'open' },
  { id:'reader', emoji:'📖', ar:'قارئ', en:'Reader', fr:'Lecteur', condition:'read10' },
  { id:'scholar', emoji:'🧠', ar:'عالم', en:'Scholar', fr:'Savant', condition:'quizAll' },
  { id:'persistent', emoji:'🔥', ar:'مثابر', en:'Persistent', fr:'Perseverant', condition:'streak7' },
  { id:'expert', emoji:'🏆', ar:'خبير', en:'Expert', fr:'Expert', condition:'quizPerfect' },
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('ms-lang') || 'ar';
let theme = localStorage.getItem('ms-theme') || 'forest';
const themes = ['forest','night','oasis'];
const themeIcons = ['🌲','🌙','🏜️'];
const themeNames = { forest:'🌲 Forest / غابة', night:'🌙 Night / ليل', oasis:'🏜️ Oasis / واحة' };
let currentQuestionIdx = -1;
let ageMode = localStorage.getItem('ms-age') || 'teen';

// ═══════════════ XP & GAMIFICATION ═══════════════
function getXP() { return parseInt(localStorage.getItem('ms-xp') || '0'); }
function addXP(amount) {
  const xp = getXP() + amount;
  localStorage.setItem('ms-xp', xp);
  updateXPDisplay();
  checkBadges();
  return xp;
}
function getLevel() {
  const xp = getXP();
  if (xp >= 500) return { level: 5, ar:'عالم كبير', en:'Grand Scholar', fr:'Grand Savant', emoji:'🏆' };
  if (xp >= 300) return { level: 4, ar:'عالم', en:'Scholar', fr:'Savant', emoji:'🧠' };
  if (xp >= 150) return { level: 3, ar:'طالب متقدم', en:'Advanced Student', fr:'Etudiant Avance', emoji:'📚' };
  if (xp >= 50) return { level: 2, ar:'طالب', en:'Student', fr:'Etudiant', emoji:'📖' };
  return { level: 1, ar:'مبتدئ', en:'Beginner', fr:'Debutant', emoji:'🌱' };
}
function updateXPDisplay() {
  const xp = getXP();
  const lvl = getLevel();
  const xpBar = document.getElementById('xpBar');
  const xpText = document.getElementById('xpText');
  if (xpBar) {
    const thresholds = [0,50,150,300,500];
    const nextThreshold = thresholds[lvl.level] || 500;
    const prevThreshold = thresholds[lvl.level - 1] || 0;
    const pct = Math.min(100, ((xp - prevThreshold) / (nextThreshold - prevThreshold)) * 100);
    xpBar.style.width = pct + '%';
  }
  if (xpText) xpText.textContent = `${lvl.emoji} ${lvl[lang]} — ${xp} XP`;
}

function getEarnedBadges() { return JSON.parse(localStorage.getItem('ms-badges') || '[]'); }
function earnBadge(id) {
  const earned = getEarnedBadges();
  if (!earned.includes(id)) {
    earned.push(id);
    localStorage.setItem('ms-badges', JSON.stringify(earned));
    const badge = BADGES.find(b => b.id === id);
    if (badge) {
      showToast(`${badge.emoji} ${badge[lang]}!`);
      playSound('badge');
    }
  }
}
function checkBadges() {
  earnBadge('beginner');
  const readCards = parseInt(localStorage.getItem('ms-read-count') || '0');
  if (readCards >= 10) earnBadge('reader');
  const streak = getStreak();
  if (streak >= 7) earnBadge('persistent');
}

// ═══════════════ FAVORITES ═══════════════
function getFavorites() { return JSON.parse(localStorage.getItem('ms-favorites') || '[]'); }
function toggleFavorite(id) {
  let favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx > -1) favs.splice(idx, 1);
  else { favs.push(id); addXP(5); }
  localStorage.setItem('ms-favorites', JSON.stringify(favs));
  renderQuestions();
  renderFavorites();
  playSound(idx > -1 ? 'click' : 'success');
}

// ═══════════════ STREAK ═══════════════
function updateStreak() {
  const today = new Date().toDateString();
  let sd = JSON.parse(localStorage.getItem('ms-streak') || '{"count":0,"lastDate":""}');
  if (sd.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  if (sd.lastDate === yesterday.toDateString()) sd.count++;
  else if (sd.lastDate !== today) sd.count = 1;
  sd.lastDate = today;
  localStorage.setItem('ms-streak', JSON.stringify(sd));
}
function getStreak() { return JSON.parse(localStorage.getItem('ms-streak') || '{"count":0}').count; }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  initSplash();
  setLang(lang);
  setTheme(theme);
  initTabs();
  initScrollTop();
  renderHome();
  renderQuestions();
  renderSearch();
  renderQuiz();
  renderFavorites();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
  updateStreak();
  checkBadges();
  updateXPDisplay();
  // Award beginner badge
  earnBadge('beginner');
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('ms-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabQuestions', t.tabQuestions); set('tabSearch', t.tabSearch);
  set('tabQuiz', t.tabQuiz); set('tabFavorites', t.tabFavorites); set('tabAbout', t.tabAbout);
  set('questionsTitle', t.questionsTitle); set('questionsDesc', t.questionsDesc);
  set('searchTitle', t.searchTitle); set('searchDesc', t.searchDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('favoritesTitle', t.favoritesTitle); set('favoritesDesc', t.favoritesDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderQuestions(); renderSearch(); renderQuiz(); renderFavorites(); renderAbout(); renderHelp(); renderDuas();
  updateXPDisplay();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('ms-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ AGE MODE ═══════════════
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem('ms-age', ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  const t = T[lang];
  showToast(ageMode === 'young' ? t.youngMode : t.teenMode);
  renderQuestions(); renderSearch(); renderFavorites();
  playSound('click');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % QA_DATA.length;
  const qa = QA_DATA[dayIdx];
  const d = qa[lang];
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : '';
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${d.q}</div>
    <div class="daily-body">${d.a.substring(0, 120)}...</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=questions]').click()">${t.tabQuestions} &#8594;</div>
  `;
  // XP bar
  const xpSection = document.getElementById('xpSection');
  if (xpSection) {
    xpSection.innerHTML = `
      ${streakHTML}
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-fill" id="xpBar"></div></div>
        <div class="xp-text" id="xpText"></div>
      </div>
    `;
    updateXPDisplay();
  }
  // Badge display
  const badgeSection = document.getElementById('badgeSection');
  if (badgeSection) {
    const earned = getEarnedBadges();
    badgeSection.innerHTML = BADGES.map(b => `
      <span class="badge-item ${earned.includes(b.id) ? 'earned' : 'locked'}" title="${b[lang]}">
        ${b.emoji}
      </span>
    `).join('');
  }
  // Sections grid
  const sections = [
    {icon:'❓',tab:'questions',title:t.tabQuestions,desc:lang==='ar'?'٢٥ سؤالاً وجواباً':lang==='fr'?'25 Q&R':'25 Q&A'},
    {icon:'🔍',tab:'search',title:t.tabSearch,desc:lang==='ar'?'ابحث عن سؤالك':lang==='fr'?'Trouvez votre reponse':'Find your answer'},
    {icon:'🏆',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'من يريد أن يكون عالماً؟':lang==='fr'?'Qui veut etre savant ?':'Who wants to be a scholar?'},
    {icon:'⭐',tab:'favorites',title:t.tabFavorites,desc:lang==='ar'?'أسئلتك المحفوظة':lang==='fr'?'Vos questions sauvegardees':'Your saved questions'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: QUESTIONS ═══════════════
function renderQuestions() {
  const t = T[lang];
  const favs = getFavorites();
  // Theme filter
  const themeFilter = `<div class="theme-filter" id="themeFilter">
    <button class="theme-tag active" onclick="filterByTheme('all')" data-theme="all">${lang==='ar'?'الكل':lang==='fr'?'Tous':'All'}</button>
    ${Object.entries(THEMES).map(([k,v]) => `<button class="theme-tag" onclick="filterByTheme('${k}')" data-theme="${k}">${v.emoji} ${v[lang]}</button>`).join('')}
  </div>`;
  const cards = QA_DATA.map((qa, i) => {
    const d = qa[lang];
    const th = THEMES[qa.theme];
    const isFav = favs.includes(qa.id);
    return `
    <div class="qa-card scroll-reveal" id="qa-${qa.id}" data-theme="${qa.theme}" data-search="${d.q.toLowerCase()} ${d.a.toLowerCase()}">
      <div class="qa-head" onclick="toggleCard('qa-${qa.id}'); markRead(${qa.id})">
        <span class="qa-num">${qa.id}</span>
        <span class="qa-emoji">${qa.emoji}</span>
        <div class="qa-head-text">
          <span class="qa-title">${d.q}</span>
          <span class="qa-theme-label">${th.emoji} ${th[lang]}</span>
        </div>
        <span class="qa-chev">&#9660;</span>
      </div>
      <div class="qa-body">
        <div class="qa-inner">
          <p class="qa-answer">${d.a}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="qa-actions">
            <button class="fav-btn ${isFav?'active':''}" onclick="event.stopPropagation();toggleFavorite(${qa.id})">${isFav?t.unfavorite:t.favorite}</button>
            <button class="share-btn" onclick="event.stopPropagation();shareQA(${i})"><span class="share-icon">&#128279;</span> ${t.share}</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('questionsContainer').innerHTML = themeFilter + cards;
}

function filterByTheme(theme) {
  document.querySelectorAll('.theme-tag').forEach(b => b.classList.toggle('active', b.dataset.theme === theme));
  document.querySelectorAll('.qa-card').forEach(card => {
    card.style.display = (theme === 'all' || card.dataset.theme === theme) ? '' : 'none';
  });
}

function markRead(id) {
  let count = parseInt(localStorage.getItem('ms-read-count') || '0');
  const readSet = JSON.parse(localStorage.getItem('ms-read-set') || '[]');
  if (!readSet.includes(id)) {
    readSet.push(id);
    localStorage.setItem('ms-read-set', JSON.stringify(readSet));
    count++;
    localStorage.setItem('ms-read-count', count.toString());
    addXP(10);
  }
}

// ═══════════════ RENDER: SEARCH ═══════════════
function renderSearch() {
  const t = T[lang];
  document.getElementById('searchContainer').innerHTML = `
    <div class="search-bar">
      <input type="text" id="searchInput" class="search-input" placeholder="${t.searchPlaceholder}" oninput="performSearch(this.value)">
      <span class="search-icon">🔍</span>
    </div>
    <div id="searchResults"></div>
  `;
}

function performSearch(query) {
  const q = query.toLowerCase().trim();
  const results = document.getElementById('searchResults');
  if (!q || q.length < 2) { results.innerHTML = ''; return; }
  const t = T[lang];
  const matches = QA_DATA.filter(qa => {
    const d = qa[lang];
    return d.q.toLowerCase().includes(q) || d.a.toLowerCase().includes(q);
  });
  if (matches.length === 0) {
    results.innerHTML = `<div class="no-results">${lang==='ar'?'لم نجد نتائج. جرب كلمات أخرى.':lang==='fr'?'Aucun resultat. Essayez d\'autres mots.':'No results found. Try different words.'}</div>`;
    return;
  }
  results.innerHTML = matches.map(qa => {
    const d = qa[lang];
    const th = THEMES[qa.theme];
    return `
    <div class="search-result" onclick="showSearchAnswer(${qa.id})">
      <div class="sr-theme">${th.emoji} ${th[lang]}</div>
      <div class="sr-question">${qa.emoji} ${d.q}</div>
      <div class="sr-preview">${d.a.substring(0, 80)}...</div>
    </div>`;
  }).join('');
}

function showSearchAnswer(id) {
  const qa = QA_DATA.find(q => q.id === id);
  if (!qa) return;
  const d = qa[lang];
  const t = T[lang];
  const results = document.getElementById('searchResults');
  results.innerHTML = `
    <div class="search-answer-card">
      <div class="sa-header">${qa.emoji} ${d.q}</div>
      <div class="sa-body">${d.a}</div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
      <button class="share-btn" onclick="shareQA(${QA_DATA.indexOf(qa)})"><span class="share-icon">&#128279;</span> ${t.share}</button>
    </div>
  `;
  markRead(id);
  addXP(5);
}

// ═══════════════ SHARE ═══════════════
async function shareQA(idx) {
  const qa = QA_DATA[idx];
  const d = qa[lang];
  const text = `${qa.emoji} ${d.q}\n\n${d.a}\n\n📖 ${d.verse}\n— ${d.verseRef}\n\n— مائة سؤال عن الإسلام | 100 Questions About Islam`;
  if (navigator.share) {
    try { await navigator.share({ title: d.q, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang==='ar'?'تم النسخ!':lang==='fr'?'Copie !':'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: QUIZ ("Who Wants to Be a Scholar?") ═══════════════
let quizState = { active: false, questions: [], current: 0, score: 0, lifelines: {fifty:true,hint:true,verse:true}, answered: false };

function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-intro" id="quizIntro">
      <div class="quiz-intro-icon">🏆</div>
      <div class="quiz-intro-title">${t.quizTitle}</div>
      <div class="quiz-intro-desc">${t.quizDesc}</div>
      <button class="quiz-start-btn" onclick="startQuiz()">${t.startQuiz}</button>
    </div>
    <div class="quiz-arena hidden" id="quizArena">
      <div class="quiz-hud">
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="quizProgressFill"></div></div>
        <div class="quiz-score-display" id="quizScoreDisplay"></div>
      </div>
      <div class="quiz-lifelines" id="quizLifelines"></div>
      <div class="quiz-question-box" id="quizQuestionBox"></div>
    </div>
    <div class="quiz-result hidden" id="quizResult"></div>
  `;
}

function startQuiz() {
  // Shuffle and pick 15 questions
  const shuffled = [...QUIZ_DATA].sort(() => Math.random() - 0.5);
  quizState = { active: true, questions: shuffled, current: 0, score: 0, lifelines: {fifty:true,hint:true,verse:true}, answered: false };
  document.getElementById('quizIntro').classList.add('hidden');
  document.getElementById('quizArena').classList.remove('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  renderQuizQuestion();
  playSound('click');
}

function renderQuizQuestion() {
  if (quizState.current >= quizState.questions.length) { endQuiz(); return; }
  quizState.answered = false;
  const t = T[lang];
  const q = quizState.questions[quizState.current];
  const d = q[lang];
  const pct = ((quizState.current) / quizState.questions.length * 100);
  document.getElementById('quizProgressFill').style.width = pct + '%';
  document.getElementById('quizScoreDisplay').textContent = `${t.score}: ${quizState.score}/${quizState.questions.length}`;
  // Lifelines
  document.getElementById('quizLifelines').innerHTML = `
    <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
    <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
    <button class="lifeline-btn ${quizState.lifelines.verse?'':'used'}" onclick="useVerse()" ${quizState.lifelines.verse?'':'disabled'}>${t.lifelineVerse}</button>
  `;
  // Question
  const diffStars = '⭐'.repeat(q.difficulty);
  document.getElementById('quizQuestionBox').innerHTML = `
    <div class="quiz-q-number">${lang==='ar'?'السؤال':'Q'} ${quizState.current + 1}/${quizState.questions.length} ${diffStars}</div>
    <div class="quiz-q-text">${d.q}</div>
    <div class="quiz-options" id="quizOptions">
      ${d.options.map((opt, i) => `<button class="quiz-opt" id="quizOpt${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
    </div>
    <div class="quiz-hint hidden" id="quizHintBox"></div>
    <div class="quiz-feedback hidden" id="quizFeedback"></div>
  `;
}

function answerQuiz(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.current];
  const d = q[lang];
  const t = T[lang];
  const correct = d.correct;
  const isCorrect = idx === correct;
  // Highlight
  document.getElementById('quizOpt' + idx).classList.add(isCorrect ? 'correct' : 'wrong');
  document.getElementById('quizOpt' + correct).classList.add('correct');
  // Disable all
  document.querySelectorAll('#quizOptions .quiz-opt').forEach(b => b.disabled = true);
  // Feedback
  const fb = document.getElementById('quizFeedback');
  fb.classList.remove('hidden');
  if (isCorrect) {
    quizState.score++;
    fb.innerHTML = `<div class="fb-correct">${t.correct}</div>`;
    addXP(5);
    playSound('success');
  } else {
    fb.innerHTML = `<div class="fb-wrong">${t.wrong} <strong>${d.options[correct]}</strong></div>`;
    playSound('click');
  }
  // Next button
  fb.innerHTML += `<button class="quiz-next-btn" onclick="nextQuizQuestion()">${quizState.current + 1 >= quizState.questions.length ? t.quizComplete : t.nextQuestion}</button>`;
}

function nextQuizQuestion() {
  quizState.current++;
  renderQuizQuestion();
}

function endQuiz() {
  quizState.active = false;
  const t = T[lang];
  const pct = Math.round(quizState.score / quizState.questions.length * 100);
  document.getElementById('quizArena').classList.add('hidden');
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  let emoji, title;
  if (pct >= 90) { emoji = '🏆'; title = lang==='ar'?'ممتاز! أنت عالم حقيقي!':lang==='fr'?'Excellent ! Vous etes un vrai savant !':'Excellent! You are a true scholar!'; earnBadge('expert'); }
  else if (pct >= 70) { emoji = '🌟'; title = lang==='ar'?'أحسنت! معرفتك رائعة':lang==='fr'?'Bravo ! Vos connaissances sont superbes':'Well done! Your knowledge is great'; }
  else if (pct >= 50) { emoji = '📚'; title = lang==='ar'?'جيد! واصل التعلم':lang==='fr'?'Bien ! Continuez a apprendre':'Good! Keep learning'; }
  else { emoji = '🌱'; title = lang==='ar'?'لا بأس! المعرفة رحلة':lang==='fr'?'Pas de souci ! Le savoir est un voyage':'No worries! Knowledge is a journey'; }
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${quizState.questions.length}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-pct">${pct}%</div>
    <button class="quiz-start-btn" onclick="renderQuiz();startQuiz()">${t.quizAgain}</button>
  `;
  addXP(20);
  earnBadge('scholar');
  launchConfetti();
}

// ═══════════════ LIFELINES ═══════════════
function useFiftyFifty() {
  if (!quizState.lifelines.fifty || quizState.answered) return;
  quizState.lifelines.fifty = false;
  const q = quizState.questions[quizState.current];
  const d = q[lang];
  const correct = d.correct;
  const wrongIndices = [0,1,2,3].filter(i => i !== correct);
  // Remove 2 wrong answers
  const toRemove = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
  toRemove.forEach(i => {
    const btn = document.getElementById('quizOpt' + i);
    if (btn) { btn.style.opacity = '0.3'; btn.disabled = true; }
  });
  renderQuizQuestion.__lifelines = true;
  document.querySelectorAll('.lifeline-btn')[0].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[0].disabled = true;
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint || quizState.answered) return;
  quizState.lifelines.hint = false;
  const q = quizState.questions[quizState.current];
  const d = q[lang];
  const hintBox = document.getElementById('quizHintBox');
  if (hintBox) { hintBox.classList.remove('hidden'); hintBox.textContent = '📖 ' + d.hint; }
  document.querySelectorAll('.lifeline-btn')[1].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[1].disabled = true;
  playSound('click');
}

function useVerse() {
  if (!quizState.lifelines.verse || quizState.answered) return;
  quizState.lifelines.verse = false;
  const q = quizState.questions[quizState.current];
  const d = q[lang];
  const correct = d.correct;
  // Highlight the correct answer briefly
  const btn = document.getElementById('quizOpt' + correct);
  if (btn) { btn.classList.add('verse-highlight'); setTimeout(() => btn.classList.remove('verse-highlight'), 2000); }
  document.querySelectorAll('.lifeline-btn')[2].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[2].disabled = true;
  playSound('click');
}

// ═══════════════ RENDER: FAVORITES ═══════════════
function renderFavorites() {
  const t = T[lang];
  const favs = getFavorites();
  const container = document.getElementById('favoritesContainer');
  if (favs.length === 0) {
    container.innerHTML = `<div class="no-favorites">${t.noFavorites}</div>`;
    return;
  }
  container.innerHTML = favs.map(id => {
    const qa = QA_DATA.find(q => q.id === id);
    if (!qa) return '';
    const d = qa[lang];
    return `
    <div class="qa-card" id="fav-${qa.id}">
      <div class="qa-head" onclick="toggleCard('fav-${qa.id}')">
        <span class="qa-num">${qa.id}</span>
        <span class="qa-emoji">${qa.emoji}</span>
        <span class="qa-title">${d.q}</span>
        <span class="qa-chev">&#9660;</span>
      </div>
      <div class="qa-body">
        <div class="qa-inner">
          <p class="qa-answer">${d.a}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <button class="fav-btn active" onclick="event.stopPropagation();toggleFavorite(${qa.id})">${t.unfavorite}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"مائة سؤال عن الإسلام" هو حوار فكري عميق بين المفكر خالد محمد خالد والشيخ محمد الغزالي. يطرح خالد أسئلة جريئة ومباشرة عن الإسلام، من أبسط المسائل إلى أعقد القضايا المعاصرة. ويجيب الغزالي بعقل منفتح وعلم راسخ، مقدماً صورة الإسلام الحقيقية البعيدة عن التشدد والجمود.',
      dialogueTitle: 'عن الحوار',
      dialogueDesc: 'خالد محمد خالد (١٩٢٠-١٩٩٦) كاتب مصري شهير صاحب كتاب "من هنا نبدأ". كان يحمل أسئلة كثيرة عن الإسلام وأراد إجابات عقلانية. فجاء هذا الحوار مع الغزالي ليقدم نموذجاً للحوار الراقي بين العقل والنقل.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "مائة سؤال عن الإسلام" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','كتب الشيخ الغزالي الأخرى'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending reason in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"100 Questions About Islam" is a deep intellectual dialogue between thinker Khalid Muhammad Khalid and Sheikh Mohammed al-Ghazali. Khalid asks bold, direct questions about Islam, from the simplest issues to the most complex contemporary problems. Al-Ghazali answers with an open mind and solid knowledge, presenting the true image of Islam, free from extremism and rigidity.',
      dialogueTitle: 'About the Dialogue',
      dialogueDesc: 'Khalid Muhammad Khalid (1920-1996) was a famous Egyptian writer, author of "From Here We Start." He carried many questions about Islam and wanted rational answers. This dialogue with Al-Ghazali presented a model of elevated discourse between reason and revelation.',
      sourcesTitle: 'Sources',
      sources: ['"100 Questions About Islam" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Other books by Sheikh al-Ghazali'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau et la lutte contre la rigidite.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« 100 Questions sur l\'Islam » est un dialogue intellectuel profond entre le penseur Khalid Muhammad Khalid et Cheikh Mohammed al-Ghazali. Khalid pose des questions audacieuses et directes sur l\'Islam. Al-Ghazali repond avec un esprit ouvert et un savoir solide, presentant la vraie image de l\'Islam.',
      dialogueTitle: 'A Propos du Dialogue',
      dialogueDesc: 'Khalid Muhammad Khalid (1920-1996) etait un celebre ecrivain egyptien, auteur de « D\'ici nous commencons ». Il avait beaucoup de questions sur l\'Islam et voulait des reponses rationnelles. Ce dialogue avec Al-Ghazali a presente un modele de discours eleve.',
      sourcesTitle: 'Sources',
      sources: ['« 100 Questions sur l\'Islam » — Cheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Autres livres du Cheikh al-Ghazali'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.dialogueTitle}</div>
      <p class="about-text">${a.dialogueDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "مائة سؤال عن الإسلام" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٥ سؤال وجواب، بحث ذكي، مسابقة "من يريد أن يكون عالماً؟"، نقاط خبرة وأوسمة.'},
      {title:'🌱 أنماط العمر',body:'نمطان: المستكشف الصغير (٧-١٢) والباحث الشاب (١٣+). اضغط زر 🌱/📚 للتبديل.'},
      {title:'⌨️ اختصارات',body:'Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/miat-sual'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"100 Questions About Islam" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 25 Q&A, smart search, "Who Wants to Be a Scholar?" quiz, XP and badges.'},
      {title:'🌱 Age Modes',body:'Two modes: Young Explorer (7-12) and Teen Scholar (13+). Press 🌱/📚 button to switch.'},
      {title:'⌨️ Shortcuts',body:'Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/miat-sual'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« 100 Questions sur l\'Islam » par Cheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 25 Q&R, recherche intelligente, quiz « Qui Veut Etre un Savant ? », XP et badges.'},
      {title:'🌱 Modes d\'age',body:'Deux modes : Jeune Explorateur (7-12) et Jeune Savant (13+). Appuyez sur le bouton 🌱/📚 pour changer.'},
      {title:'⌨️ Raccourcis',body:'Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/miat-sual'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  window._scrollObserver = observer;
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(observeAll, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.qa-card.open').forEach(c => c.classList.remove('open'));
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    else if (type === 'badge') { osc.frequency.value = 660; osc.type = 'sine'; gain.gain.value = 0.07; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.12);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#1B5E20','#4CAF50','#81C784','#FFD54F','#FF8C61','#4FC3F7','#B388FF'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height-canvas.height, w: Math.random()*10+5, h: Math.random()*6+3, color: colors[Math.floor(Math.random()*colors.length)], vx: (Math.random()-0.5)*4, vy: Math.random()*3+2, rot: Math.random()*360, rotSpeed: (Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ PAGE TRANSITIONS ═══════════════
(function upgradeTabTransitions() {
  const origInitTabs = initTabs;
  initTabs = function() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const isRTL = document.documentElement.dir === 'rtl';
        const exitClass = isRTL ? 'panel-exit-rtl' : 'panel-exit-ltr';
        const enterClass = isRTL ? 'panel-enter-rtl' : 'panel-enter-ltr';
        const currentPanel = document.querySelector('.panel.active');
        if (currentPanel) { currentPanel.classList.add(exitClass); setTimeout(() => currentPanel.classList.remove('active', exitClass), 280); }
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const newPanel = document.getElementById('panel-' + tab.dataset.tab);
        if (newPanel) {
          setTimeout(() => { newPanel.classList.add('active', enterClass); setTimeout(() => newPanel.classList.remove(enterClass), 300); }, currentPanel ? 280 : 0);
        }
        window.scrollTo({top: 0, behavior: 'smooth'});
        playSound('click');
        try { navigator.vibrate && navigator.vibrate(10); } catch(e) {}
        setTimeout(() => {
          document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); });
          initTypewriter();
        }, 350);
      });
    });
  };
})();
