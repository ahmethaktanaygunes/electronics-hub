import type { Lang } from "@/i18n/lang";

export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface UiStrings {
  /** Language switcher */
  language: string;

  /** Home page */
  heroEyebrow: string;
  heroTitleLineOne: string;
  heroTitleAccentOne: string;
  heroTitleLineTwo: string;
  heroTitleAccentTwo: string;
  heroLead: string;
  heroCtaStart: string;
  heroCtaTools: string;
  heroHighlightLessons: string;
  heroHighlightCalculators: string;
  heroHighlightPractical: string;
  miniWorkbench: string;
  heroSignalPath: string;
  heroSourceLabel: string;
  heroOutputNodeLabel: string;
  live: string;
  voltageDividerSchematic: string;
  percentOfInput: string;
  methodSection: string;
  methodItems: Array<{ title: string; description: string }>;
  toolsSection: string;
  toolsTitle: string;
  toolsLead: string;
  footerTrack: string;

  /** Lesson and tools */
  home: string;
  module: string;
  topics: string;
  componentLabel: string;
  law: string;
  circuit: string;
  syllabus: string;
  unpublishedLesson: string;
  backToLessonIndex: string;
  resistorTool: string;
  ohmsLawTool: string;
  bands: string;
  band: string;
  digits: string;
  multiplier: string;
  tolerance: string;
  range: string;
  selectKnown: string;
  given: string;
  solved: string;
  notes: string;
  ohmsNotes: string;
  voltage: string;
  current: string;
  resistance: string;
  power: string;

  /** Site header */
  navLessons: string;
  navCalculators: string;
  workbench: string;

  /** Curriculum index */
  curriculumTitle: string;
  curriculumLead: string;
  modules: string;
  minAbbrev: string;
  levels: Record<Level, string>;
  startLesson: string;
  comingSoon: string;

  /** Lesson player chrome */
  lessonIndex: string;
  stepCounter: (current: number, total: number) => string;
  complete: string;
  back: string;
  continueLabel: string;
  finishLesson: string;
  hintKeyboard: string;
  hintLocked: string;
  solvedCounter: (solved: number, total: number) => string;

  /** Quiz card */
  numericAnswer: string;
  writtenAnswer: string;
  choiceAnswer: string;
  stepUnlocked: string;
  yourAnswer: string;
  check: string;
  showSolution: string;
  tryThenReveal: string;
  orReveal: string;
  writeFirst: string;
  correctUnlock: string;
  notQuite: string;
  workedSolution: string;
  answerIs: string;

  /** Completion card */
  lessonFinished: string;
  stepsCompleted: string;
  stepsCompletedHint: string;
  answersCorrect: string;
  answersCorrectHint: string;
  solutionsRevealed: string;
  solutionsRevealedHint: string;
  whatYouCanDo: string;
  restartLesson: string;
  backToLessonIndex: string;
  nextLesson: string;

  /** Authentication */
  signIn: string;
  signUp: string;
  signOut: string;
  myAccount: string;
  loading: string;
  loginTitle: string;
  loginSubtitle: string;
  registerTitle: string;
  registerSubtitle: string;
  fullName: string;
  authEmail: string;
  authPassword: string;
  continueWithGoogle: string;
  orDivider: string;
  noAccount: string;
  haveAccount: string;
  createAccount: string;
  errNameMin: string;
  errEmailRequired: string;
  errEmailInvalid: string;
  errPasswordMin: string;
  errPasswordRequired: string;
  errInvalidCredentials: string;
  errEmailTaken: string;
  errGeneric: string;
  errGoogle: string;
}

export const UI: Record<Lang, UiStrings> = {
  en: {
    language: "Language",
    heroEyebrow: "Electronics learning platform",
    heroTitleLineOne: "Understand Electronics.",
    heroTitleAccentOne: "Electronics.",
    heroTitleLineTwo: "Build What Matters.",
    heroTitleAccentTwo: "Build",
    heroLead:
      "From fundamental electrical principles to practical circuit design, develop your electronics knowledge through interactive lessons and engineering tools.",
    heroCtaStart: "Start Learning",
    heroCtaTools: "Explore Tools",
    heroHighlightLessons: "Interactive Lessons",
    heroHighlightCalculators: "Engineering Calculators",
    heroHighlightPractical: "Practical Learning",
    miniWorkbench: "Voltage divider workbench",
    heroSignalPath: "Signal path · voltage divider",
    heroSourceLabel: "Supply",
    heroOutputNodeLabel: "Output node",
    live: "live",
    voltageDividerSchematic: "Voltage divider schematic",
    percentOfInput: "of input",
    methodSection: "Section 02 · Method",
    methodItems: [
      {
        title: "Derive before you simulate",
        description:
          "Each concept starts from the governing equation and a hand-calculated component value. Simulation only checks the derivation.",
      },
      {
        title: "Every value is measurable",
        description:
          "Each circuit is drawn so it can be built on a breadboard and probed, then compared against the predicted node voltages.",
      },
      {
        title: "Tolerances are part of the answer",
        description:
          "E-series rounding, resistor tolerance and power derating are treated as first-class design inputs, not footnotes.",
      },
    ],
    toolsSection: "Section 04 · Interactive workbench",
    toolsTitle: "Basic electronics calculators",
    toolsLead:
      "Live tools for the fundamentals. Enter measured or specified values; results update as you type.",
    footerTrack: "Track: Basic Electronics · doc rev 1.0",
    home: "Home",
    module: "Module",
    topics: "Topics",
    componentLabel: "Component",
    law: "Law",
    circuit: "Circuit",
    syllabus: "Syllabus",
    unpublishedLesson: "This module is not published yet. Lesson 1 is fully available now.",
    backToLessonIndex: "Back to lesson index",
    resistorTool: "Tool 01 · Resistor colour code",
    ohmsLawTool: "Tool 02 · Ohm's law matrix",
    bands: "Bands",
    band: "Band",
    digits: "digits",
    multiplier: "Multiplier",
    tolerance: "Tolerance",
    range: "range",
    selectKnown: "Select two known quantities",
    given: "given",
    solved: "solved",
    notes: "Notes",
    ohmsNotes:
      "DC / resistive case only. For a real part, check the dissipation above against the package rating — a 0603 chip resistor derates to roughly 100 mW at 70 °C.",
    voltage: "Voltage",
    current: "Current",
    resistance: "Resistance",
    power: "Power",
    navLessons: "Lessons",
    navCalculators: "Calculators",
    workbench: "Engineering Workbench",

    curriculumTitle: "Basic Electronics curriculum",
    curriculumLead:
      "Modules are ordered by dependency. Each lesson opens with a derivation and ends with a circuit you can measure on the bench.",
    modules: "modules",
    minAbbrev: "min",
    levels: {
      Beginner: "Beginner",
      Intermediate: "Intermediate",
      Advanced: "Advanced",
    },
    startLesson: "Start Lesson",
    comingSoon: "Coming soon",

    lessonIndex: "Lesson index",
    stepCounter: (current, total) => `Step ${current} / ${total}`,
    complete: "Complete",
    back: "Back",
    continueLabel: "Continue",
    finishLesson: "Finish lesson",
    hintKeyboard: "Use ← / → on the keyboard, or the buttons",
    hintLocked: "Answer correctly to unlock the next step",
    solvedCounter: (solved, total) => `${solved} of ${total} questions solved this run`,

    numericAnswer: "numeric answer",
    writtenAnswer: "written answer · self-assessed",
    choiceAnswer: "pick one option",
    stepUnlocked: "step unlocked",
    yourAnswer: "your answer",
    check: "Check",
    showSolution: "Show solution",
    tryThenReveal: "try once to unlock the solution",
    orReveal: "or reveal the worked solution",
    writeFirst: "write first, then compare with the model answer",
    correctUnlock: "Correct — the next step is unlocked.",
    notQuite: "Not quite. Re-check the question and the arithmetic, then try again.",
    workedSolution: "Worked solution",
    answerIs: "answer",

    lessonFinished: "Lesson finished",
    stepsCompleted: "Steps completed",
    stepsCompletedHint: "every card in the flow",
    answersCorrect: "Answers correct",
    answersCorrectHint: "solved without revealing",
    solutionsRevealed: "Solutions revealed",
    solutionsRevealedHint: "review these before moving on",
    whatYouCanDo: "What you should be able to do now",
    restartLesson: "Restart lesson",
    backToLessonIndex: "Back to lesson index",
    nextLesson: "Next lesson",

    signIn: "Sign in",
    signUp: "Sign up",
    signOut: "Sign out",
    myAccount: "My account",
    loading: "Loading…",
    loginTitle: "Sign in",
    loginSubtitle: "Welcome back. Continue where you left off.",
    registerTitle: "Create an account",
    registerSubtitle: "Create an account to enrol in live lessons.",
    fullName: "Full name",
    authEmail: "Email",
    authPassword: "Password",
    continueWithGoogle: "Continue with Google",
    orDivider: "or",
    noAccount: "No account yet?",
    haveAccount: "Already have an account?",
    createAccount: "Create account",
    errNameMin: "Please enter your name.",
    errEmailRequired: "Email is required.",
    errEmailInvalid: "Enter a valid email address.",
    errPasswordMin: "Password must be at least 8 characters.",
    errPasswordRequired: "Password is required.",
    errInvalidCredentials: "Sign-in failed. Check your email and password.",
    errEmailTaken: "That email address is already registered.",
    errGeneric: "Something went wrong. Please try again.",
    errGoogle: "Google sign-in could not be completed.",
  },

  tr: {
    language: "Dil",
    heroEyebrow: "Elektronik öğrenme platformu",
    heroTitleLineOne: "Elektroniği Anla.",
    heroTitleAccentOne: "Elektroniği",
    heroTitleLineTwo: "Üret. Değer Kat.",
    heroTitleAccentTwo: "Üret.",
    heroLead:
      "Temel elektrik ilkelerinden uygulamalı devre tasarımına kadar, elektronik bilginizi etkileşimli dersler ve mühendislik araçlarıyla geliştirin.",
    heroCtaStart: "Öğrenmeye Başla",
    heroCtaTools: "Araçları İncele",
    heroHighlightLessons: "Etkileşimli Dersler",
    heroHighlightCalculators: "Mühendislik Hesaplayıcıları",
    heroHighlightPractical: "Uygulamalı Öğrenme",
    miniWorkbench: "Gerilim bölücü tezgâhı",
    heroSignalPath: "Sinyal yolu · gerilim bölücü",
    heroSourceLabel: "Besleme",
    heroOutputNodeLabel: "Çıkış düğümü",
    live: "canlı",
    voltageDividerSchematic: "Gerilim bölücü şeması",
    percentOfInput: "girişin yüzdesi",
    methodSection: "Bölüm 02 · Yöntem",
    methodItems: [
      {
        title: "Simüle etmeden önce türetin",
        description:
          "Her kavram temel denklemden ve elle hesaplanan bir bileşen değerinden başlar. Simülasyon yalnızca türetimi kontrol eder.",
      },
      {
        title: "Her değer ölçülebilir",
        description:
          "Her devre breadboard üzerinde kurulup probla ölçülecek şekilde çizilir ve tahmin edilen düğüm gerilimleriyle karşılaştırılır.",
      },
      {
        title: "Toleranslar cevabın parçasıdır",
        description:
          "E-serisi yuvarlama, direnç toleransı ve güç düşürme ilk düzey tasarım girdisi olarak ele alınır.",
      },
    ],
    toolsSection: "Bölüm 04 · Etkileşimli tezgâh",
    toolsTitle: "Temel elektronik hesaplayıcıları",
    toolsLead:
      "Temel bilgiler için canlı araçlar. Ölçülen veya belirtilen değerleri girin; sonuçlar yazdıkça güncellenir.",
    footerTrack: "İz: Temel Elektronik · belge rev 1.0",
    home: "Ana sayfa",
    module: "Modül",
    topics: "Konular",
    componentLabel: "Bileşen",
    law: "Kanun",
    circuit: "Devre",
    syllabus: "Müfredat",
    unpublishedLesson: "Bu modül henüz yayımlanmadı. 1. Ders şu an tamamen kullanılabilir.",
    backToLessonIndex: "Ders listesine dön",
    resistorTool: "Araç 01 · Direnç renk kodu",
    ohmsLawTool: "Araç 02 · Ohm kanunu matrisi",
    bands: "Bantlar",
    band: "Bant",
    digits: "basamak",
    multiplier: "Çarpan",
    tolerance: "Tolerans",
    range: "aralık",
    selectKnown: "Bilinen iki büyüklüğü seçin",
    given: "verilen",
    solved: "çözülen",
    notes: "Notlar",
    ohmsNotes:
      "Yalnızca doğru akım / direnç durumu. Gerçek bir bileşen için yukarıdaki güç tüketimini paket değerleriyle karşılaştırın — 0603 çip direnç 70 °C'de yaklaşık 100 mW'a kadar düşer.",
    voltage: "Gerilim",
    current: "Akım",
    resistance: "Direnç",
    power: "Güç",
    navLessons: "Dersler",
    navCalculators: "Hesaplayıcılar",
    workbench: "Mühendislik Tezgâhı",

    curriculumTitle: "Temel Elektronik müfredatı",
    curriculumLead:
      "Modüller bağımlılık sırasına göre dizilmiştir. Her ders bir türetmeyle başlar ve tezgâhta ölçebileceğiniz bir devreyle biter.",
    modules: "modül",
    minAbbrev: "dk",
    levels: {
      Beginner: "Başlangıç",
      Intermediate: "Orta",
      Advanced: "İleri",
    },
    startLesson: "Derse Başla",
    comingSoon: "Yakında",

    lessonIndex: "Ders listesi",
    stepCounter: (current, total) => `Adım ${current} / ${total}`,
    complete: "Tamamlandı",
    back: "Geri",
    continueLabel: "Devam Et",
    finishLesson: "Dersi bitir",
    hintKeyboard: "Klavyede ← / → tuşlarını ya da düğmeleri kullanın",
    hintLocked: "Sonraki adıma geçmek için doğru cevaplayın",
    solvedCounter: (solved, total) => `Bu turda ${total} sorudan ${solved} tanesi çözüldü`,

    numericAnswer: "sayısal cevap",
    writtenAnswer: "yazılı cevap · kendi değerlendirmeniz",
    choiceAnswer: "bir seçenek işaretleyin",
    stepUnlocked: "adım açıldı",
    yourAnswer: "cevabınız",
    check: "Kontrol Et",
    showSolution: "Çözümü göster",
    tryThenReveal: "çözümü açmak için önce bir kez deneyin",
    orReveal: "veya çözümü görüntüleyin",
    writeFirst: "önce yazın, sonra örnek cevapla karşılaştırın",
    correctUnlock: "Doğru — sonraki adım açıldı.",
    notQuite: "Tam olarak değil. Soruyu ve işlemi yeniden kontrol edip tekrar deneyin.",
    workedSolution: "Çözüm",
    answerIs: "cevap",

    lessonFinished: "Ders tamamlandı",
    stepsCompleted: "Tamamlanan adım",
    stepsCompletedHint: "akıştaki tüm kartlar",
    answersCorrect: "Doğru cevap",
    answersCorrectHint: "çözüm açılmadan çözülenler",
    solutionsRevealed: "Açılan çözüm",
    solutionsRevealedHint: "devam etmeden önce bunları gözden geçirin",
    whatYouCanDo: "Artık neler yapabilmelisiniz",
    restartLesson: "Dersi baştan başlat",
    backToLessonIndex: "Ders listesine dön",
    nextLesson: "Sonraki ders",

    signIn: "Giriş yap",
    signUp: "Kayıt ol",
    signOut: "Çıkış yap",
    myAccount: "Hesabım",
    loading: "Yükleniyor…",
    loginTitle: "Giriş yap",
    loginSubtitle: "Tekrar hoş geldiniz. Kaldığınız yerden devam edin.",
    registerTitle: "Hesap oluştur",
    registerSubtitle: "Canlı derslere kaydolmak için bir hesap oluşturun.",
    fullName: "Ad soyad",
    authEmail: "E-posta",
    authPassword: "Şifre",
    continueWithGoogle: "Google ile devam et",
    orDivider: "veya",
    noAccount: "Henüz hesabınız yok mu?",
    haveAccount: "Zaten hesabınız var mı?",
    createAccount: "Hesap oluştur",
    errNameMin: "Lütfen adınızı girin.",
    errEmailRequired: "E-posta gereklidir.",
    errEmailInvalid: "Geçerli bir e-posta adresi girin.",
    errPasswordMin: "Şifre en az 8 karakter olmalıdır.",
    errPasswordRequired: "Şifre gereklidir.",
    errInvalidCredentials: "Giriş başarısız. E-posta ve şifrenizi kontrol edin.",
    errEmailTaken: "Bu e-posta adresi zaten kayıtlı.",
    errGeneric: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
    errGoogle: "Google ile giriş tamamlanamadı.",
  },
};
