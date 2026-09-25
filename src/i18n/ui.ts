import type { Lang } from "@/i18n/lang";

export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface UiStrings {
  /** Language switcher */
  language: string;

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
