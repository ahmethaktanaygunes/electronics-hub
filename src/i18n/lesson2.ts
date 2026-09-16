import type { Lang } from "@/i18n/lang";

export interface LessonTwoCopy {
  label: string;
  title: string;
  subtitle: string;

  objectives: {
    title: string;
    subtitle: string;
    aimTitle: string;
    aim: string;
    topicsTitle: string;
    topics: string[];
    flowTitle: string;
    flow: string[];
  };

  series: {
    title: string;
    subtitle: string;
    body: string[];
    exampleTitle: string;
    example: string;
    exampleNote: string;
    ruleTitle: string;
    rules: string[];
  };

  parallel: {
    title: string;
    subtitle: string;
    body: string[];
    exampleTitle: string;
    example: string;
    noteTitle: string;
    note: string;
    ruleTitle: string;
    rules: string[];
  };

  observation: {
    title: string;
    subtitle: string;
    circuitA: { name: string; setup: string; tasks: string[]; expected: string };
    circuitB: { name: string; setup: string; tasks: string[]; expected: string };
    checklistTitle: string;
    checklistNote: string;
    checklist: string[];
  };

  quiz: {
    section: string;
    title: string;
  };

  outcomes: {
    title: string;
    subtitle: string;
    items: string[];
    indexLabel: string;
    nextLabel: string;
    nextHint: string;
  };
}

/** Copy variants of a question, one per language. */
export interface QuestionCopy {
  prompt: string;
  solution: string;
}

export interface ChoiceQuestionCopy extends QuestionCopy {
  options: string[];
}

/**
 * A question defined once with both language variants plus the
 * language-neutral data (kind, answer, tolerance, unit).
 */
export type LocalizedQuestion =
  | {
      id: string;
      kind: "numeric";
      unit: string;
      answer: number;
      tolerance: number;
      en: QuestionCopy;
      tr: QuestionCopy;
    }
  | {
      id: string;
      kind: "choice";
      correctIndex: number;
      en: ChoiceQuestionCopy;
      tr: ChoiceQuestionCopy;
    }
  | { id: string; kind: "text"; en: QuestionCopy; tr: QuestionCopy };

export const LESSON_TWO_COPY: Record<Lang, LessonTwoCopy> = {
  en: {
    label: "Lesson 2",
    title: "Series and Parallel Circuits",
    subtitle: "Lesson 2 · Beginner · 20 min · card-by-card",

    objectives: {
      title: "Series and Parallel Circuits",
      subtitle:
        "Lesson 2 · Beginner · 20 min · identifying connections, current paths and component failure.",
      aimTitle: "Aim of this lesson",
      aim: "Students will identify series and parallel connections, explain how current paths differ, and build simple lamp circuits.",
      topicsTitle: "Topics",
      topics: [
        "Series vs Parallel",
        "Current paths",
        "Component failure behavior",
        "Circuit symbols & diagrams",
        "Everyday examples",
      ],
      flowTitle: "How this lesson runs",
      flow: [
        "One idea or one task per card",
        "Question cards unlock the next step when answered correctly",
        "Circuit A and Circuit B are analysed side by side",
        "Everyday examples close each concept",
      ],
    },

    series: {
      title: "Series Connection",
      subtitle: "Components one after another — a single path for the current.",
      body: [
        "Components are connected one after another, so the same current passes through each of them in turn.",
        "Current has only one path to follow: there is no alternative route around any component.",
        "If one component is disconnected or fails, the loop is broken and the entire circuit stops working.",
        "The supply voltage is shared between the components, while the current is the same everywhere in the loop.",
      ],
      exampleTitle: "Example",
      example:
        "Two lamps connected in series to a battery. The same current flows through both lamps, and each lamp receives only part of the battery voltage — so both glow dimmer than a single lamp would.",
      exampleNote: "Remove one lamp and the second lamp goes dark as well.",
      ruleTitle: "Series rules",
      rules: [
        "One current path",
        "Same current through every component",
        "Voltage divides between components",
        "One break stops everything",
      ],
    },

    parallel: {
      title: "Parallel Connection",
      subtitle: "Components on separate branches — more than one path for the current.",
      body: [
        "Components are connected on separate branches across the same supply, so each branch forms its own complete loop.",
        "Current has more than one path to follow: it splits between the branches and rejoins at the supply.",
        "If one branch is disconnected, the other branches continue working, because their loops are still complete.",
        "Each branch sees the full supply voltage, while the total current from the battery is the sum of the branch currents.",
      ],
      exampleTitle: "Example",
      example:
        "Two lamps in parallel across one battery. Each lamp receives the full battery voltage, so both glow at normal brightness and independently of each other.",
      noteTitle: "Everyday note",
      note: "Home lighting systems generally use parallel connections. That way every lamp receives the full mains voltage, and switching one lamp off does not affect the others.",
      ruleTitle: "Parallel rules",
      rules: [
        "Multiple current paths",
        "Same voltage across every branch",
        "Branch currents add up at the supply",
        "One branch failing leaves the others on",
      ],
    },

    observation: {
      title: "Circuit Observations: Circuit A & Circuit B",
      subtitle:
        "Build both circuits, then compare lamp brightness and what happens when a lamp is removed.",
      circuitA: {
        name: "Circuit A — Series",
        setup: "Battery + switch + Lamp 1 + Lamp 2, all in one loop.",
        tasks: [
          "Close the switch and compare the brightness of the two lamps.",
          "Note how bright they are compared with a single lamp on the same battery.",
          "Remove Lamp 1 from its holder and watch Lamp 2.",
        ],
        expected:
          "Both lamps glow dimly and equally. Removing Lamp 1 switches Lamp 2 off as well, because the single loop is broken.",
      },
      circuitB: {
        name: "Circuit B — Parallel",
        setup: "Battery + switch + two separate lamp branches across the supply.",
        tasks: [
          "Close the switch and compare the brightness of the two lamps.",
          "Note whether they are brighter or dimmer than the lamps in Circuit A.",
          "Remove Lamp 1 from its holder and watch Lamp 2.",
        ],
        expected:
          "Both lamps glow at full brightness. Removing Lamp 1 leaves Lamp 2 lit, because its own branch is still a complete loop.",
      },
      checklistTitle: "Observation checklist",
      checklistNote: "Tick each observation once you have actually seen it on the bench.",
      checklist: [
        "Circuit A: both lamps glow dimly",
        "Circuit A: removing Lamp 1 also switches Lamp 2 off",
        "Circuit B: both lamps glow at full brightness",
        "Circuit B: removing Lamp 1 leaves Lamp 2 lit",
      ],
    },

    quiz: {
      section: "Mini Test",
      title: "Series & Parallel Question",
    },

    outcomes: {
      title: "Learning Outcomes",
      subtitle: "You have worked through the whole lesson. Here is what you can now do.",
      items: [
        "Identify a series connection and a parallel connection from a diagram or a build.",
        "Explain how the number of current paths differs between the two circuits.",
        "Predict what happens to the remaining components when one component fails.",
        "Read the lamp, switch and battery symbols used in circuit diagrams.",
        "Recognise series and parallel wiring in everyday systems such as home lighting.",
      ],
      indexLabel: "Lesson Index",
      nextLabel: "Next Lesson",
      nextHint: "Module 03 · Voltage Dividers & Sensor Interfacing",
    },
  },

  tr: {
    label: "Ders 2",
    title: "Seri ve Paralel Devreler",
    subtitle: "Ders 2 · Başlangıç · 20 dk · kart kart",

    objectives: {
      title: "Seri ve Paralel Devreler",
      subtitle:
        "Ders 2 · Başlangıç · 20 dk · bağlantı türlerini, akım yollarını ve eleman arıza davranışını tanıma.",
      aimTitle: "Dersin amacı",
      aim: "Öğrenciler seri ve paralel bağlantıları tanıyacak, akım yollarının nasıl farklılaştığını açıklayacak ve basit lamba devreleri kuracaktır.",
      topicsTitle: "Ana başlıklar",
      topics: [
        "Seri ve Paralel",
        "Akım yolları",
        "Eleman arıza davranışı",
        "Devre sembolleri ve şemalar",
        "Günlük hayattan örnekler",
      ],
      flowTitle: "Bu ders nasıl işliyor",
      flow: [
        "Her kartta tek bir fikir ya da tek bir görev",
        "Soru kartları doğru cevaplanınca sonraki adımı açar",
        "Devre A ve Devre B yan yana incelenir",
        "Her kavramın sonunda günlük hayattan bir örnek",
      ],
    },

    series: {
      title: "Seri Bağlantı",
      subtitle: "Elemanlar arka arkaya — akım için tek bir yol.",
      body: [
        "Elemanlar arka arkaya bağlanır; aynı akım sırayla her birinin içinden geçer.",
        "Akımın izleyebileceği yalnızca tek bir yol vardır: hiçbir elemanın etrafından dolanacak alternatif bir güzergâh yoktur.",
        "Elemanlardan biri sökülür ya da arızalanırsa çevrim kesilir ve devrenin tamamı çalışmaz.",
        "Kaynak gerilimi elemanlar arasında paylaşılır; akım ise çevrimin her noktasında aynıdır.",
      ],
      exampleTitle: "Örnek",
      example:
        "Bir pile seri bağlanmış iki lamba. Aynı akım her iki lambadan da geçer ve her lamba pil geriliminin yalnızca bir kısmını alır; bu yüzden ikisi de tek lambaya göre daha soluk yanar.",
      exampleNote: "Lambalardan birini sökerseniz ikinci lamba da söner.",
      ruleTitle: "Seri bağlantı kuralları",
      rules: [
        "Tek akım yolu",
        "Her elemanda aynı akım",
        "Gerilim elemanlar arasında bölünür",
        "Tek kopukluk her şeyi durdurur",
      ],
    },

    parallel: {
      title: "Paralel Bağlantı",
      subtitle: "Elemanlar ayrı kollarda — akım için birden fazla yol.",
      body: [
        "Elemanlar aynı kaynağa ayrı kollar hâlinde bağlanır; böylece her kol kendi tam çevrimini oluşturur.",
        "Akımın izleyebileceği birden fazla yol vardır: kollar arasında bölünür ve kaynağa dönerken yeniden birleşir.",
        "Bir kol sökülürse diğer kollar çalışmaya devam eder, çünkü onların çevrimleri hâlâ tamdır.",
        "Her kol tam kaynak gerilimini görür; pilden çekilen toplam akım ise kol akımlarının toplamıdır.",
      ],
      exampleTitle: "Örnek",
      example:
        "Tek pile paralel bağlanmış iki lamba. Her lamba pil geriliminin tamamını alır; bu yüzden ikisi de normal parlaklıkta ve birbirinden bağımsız yanar.",
      noteTitle: "Günlük hayattan not",
      note: "Ev aydınlatma sistemleri genellikle paralel bağlantı kullanır. Böylece her lamba şebeke geriliminin tamamını alır ve bir lambayı kapatmak diğerlerini etkilemez.",
      ruleTitle: "Paralel bağlantı kuralları",
      rules: [
        "Birden fazla akım yolu",
        "Her kolda aynı gerilim",
        "Kol akımları kaynakta toplanır",
        "Bir kol arızalanırsa diğerleri yanmaya devam eder",
      ],
    },

    observation: {
      title: "Devre Gözlemleri: Devre A ve Devre B",
      subtitle:
        "İki devreyi de kurun, ardından lamba parlaklığını ve bir lamba söküldüğünde ne olduğunu karşılaştırın.",
      circuitA: {
        name: "Devre A — Seri",
        setup: "Pil + anahtar + Lamba 1 + Lamba 2, hepsi tek çevrimde.",
        tasks: [
          "Anahtarı kapatın ve iki lambanın parlaklığını karşılaştırın.",
          "Aynı pilde tek lambaya göre ne kadar parlak olduklarını not edin.",
          "Lamba 1'i duyundan çıkarın ve Lamba 2'yi izleyin.",
        ],
        expected:
          "İki lamba da soluk ve eşit parlaklıkta yanar. Lamba 1 söküldüğünde tek çevrim kesildiği için Lamba 2 de söner.",
      },
      circuitB: {
        name: "Devre B — Paralel",
        setup: "Pil + anahtar + kaynağa paralel iki ayrı lamba kolu.",
        tasks: [
          "Anahtarı kapatın ve iki lambanın parlaklığını karşılaştırın.",
          "Devre A'daki lambalara göre daha parlak mı yoksa daha soluk mu olduklarını not edin.",
          "Lamba 1'i duyundan çıkarın ve Lamba 2'yi izleyin.",
        ],
        expected:
          "İki lamba da tam parlaklıkta yanar. Lamba 1 söküldüğünde Lamba 2 yanmaya devam eder, çünkü kendi kolu hâlâ tam bir çevrimdir.",
      },
      checklistTitle: "Gözlem kontrol listesi",
      checklistNote: "Her gözlemi tezgâhta gerçekten gördükten sonra işaretleyin.",
      checklist: [
        "Devre A: iki lamba da soluk yanıyor",
        "Devre A: Lamba 1 sökülünce Lamba 2 de sönüyor",
        "Devre B: iki lamba da tam parlaklıkta yanıyor",
        "Devre B: Lamba 1 sökülünce Lamba 2 yanmaya devam ediyor",
      ],
    },

    quiz: {
      section: "Mini Test",
      title: "Seri ve Paralel Sorusu",
    },

    outcomes: {
      title: "Öğrenme Çıktıları",
      subtitle: "Dersin tamamını bitirdiniz. Artık şunları yapabilirsiniz.",
      items: [
        "Bir şemadan ya da kurulumdan seri ve paralel bağlantıyı ayırt etmek.",
        "İki devrede akım yollarının sayısının nasıl farklılaştığını açıklamak.",
        "Bir eleman arızalandığında kalan elemanlara ne olacağını öngörmek.",
        "Devre şemalarındaki lamba, anahtar ve pil sembollerini okumak.",
        "Ev aydınlatması gibi günlük sistemlerde seri ve paralel kablolamayı tanımak.",
      ],
      indexLabel: "Ders Listesi",
      nextLabel: "Sonraki Ders",
      nextHint: "Modül 03 · Gerilim Bölücüler ve Sensör Arayüzleri",
    },
  },
};

/**
 * The mini-test questions for Lesson 2. Each entry holds both language
 * variants plus the language-neutral data (kind, answer, unit, tolerance),
 * so the two translations can never drift apart.
 */
export const LESSON_TWO_QUESTIONS: LocalizedQuestion[] = [
  {
    id: "S1",
    kind: "choice",
    correctIndex: 0,
    en: {
      prompt: "How many paths can the current take in Circuit A (two lamps in series)?",
      options: ["Exactly one path", "Two paths", "Three paths", "One path per lamp"],
      solution:
        "In a series circuit the components sit one after another in a single loop, so there is exactly one path for the current — and the same current flows through every component.",
    },
    tr: {
      prompt: "Devre A'da (seri bağlı iki lamba) akım kaç farklı yolu izleyebilir?",
      options: ["Tam olarak tek bir yol", "İki yol", "Üç yol", "Her lamba için bir yol"],
      solution:
        "Seri bir devrede elemanlar tek bir çevrimde arka arkaya dizilir; bu yüzden akım için tam olarak tek bir yol vardır ve her elemandan aynı akım geçer.",
    },
  },

  {
    id: "S2",
    kind: "text",
    en: {
      prompt: "Lamp 1 is removed from its holder in Circuit A. What happens to Lamp 2? Explain.",
      solution:
        "Lamp 2 goes dark. Removing Lamp 1 opens the only current path, so the loop is broken and no current can flow anywhere in the circuit.",
    },
    tr: {
      prompt: "Devre A'da Lamba 1 duyundan çıkarılıyor. Lamba 2'ye ne olur? Açıklayın.",
      solution:
        "Lamba 2 söner. Lamba 1'in çıkarılması tek akım yolunu keser; çevrim bozulduğu için devrenin hiçbir noktasında akım akmaz.",
    },
  },

  {
    id: "S3",
    kind: "text",
    en: {
      prompt: "Lamp 1 fails in Circuit B. What happens to Lamp 2? Explain.",
      solution:
        "Lamp 2 stays lit. In a parallel circuit every lamp has its own branch, so Lamp 2 still has a complete loop from the supply and keeps receiving the full voltage with its own current.",
    },
    tr: {
      prompt: "Devre B'de Lamba 1 arızalanıyor. Lamba 2'ye ne olur? Açıklayın.",
      solution:
        "Lamba 2 yanmaya devam eder. Paralel bir devrede her lambanın kendi kolu vardır; Lamba 2'nin kaynağa giden çevrimi hâlâ tamdır ve tam gerilimi kendi akımıyla almaya devam eder.",
    },
  },

  {
    id: "S4",
    kind: "text",
    en: {
      prompt: "Which circuit — A or B — is more similar to a house lighting system? Why?",
      solution:
        "Circuit B (parallel). Branches operate independently: every lamp receives the full supply voltage, and switching off or losing one lamp does not affect the others. That is exactly how home lighting is wired.",
    },
    tr: {
      prompt: "Hangi devre — A mı B mi — bir ev aydınlatma sistemine daha çok benzer? Neden?",
      solution:
        "Devre B (paralel). Kollar birbirinden bağımsız çalışır: her lamba kaynak geriliminin tamamını alır ve bir lambanın kapanması ya da arızalanması diğerlerini etkilemez. Ev aydınlatması tam olarak bu şekilde kurulur.",
    },
  },

  {
    id: "S5",
    kind: "numeric",
    unit: "V",
    answer: 4.5,
    tolerance: 0.02,
    en: {
      prompt:
        "Two identical lamps are connected in series across a 9 V battery. What voltage appears across each lamp? (V)",
      solution:
        "In series the supply voltage is shared between the components. With two identical lamps: 9 V ÷ 2 = 4.5 V across each lamp.",
    },
    tr: {
      prompt:
        "İki özdeş lamba 9 V'luk bir pile seri bağlanıyor. Her lambanın üzerinde kaç volt gerilim oluşur? (V)",
      solution:
        "Seri bağlantıda kaynak gerilimi elemanlar arasında paylaşılır. İki özdeş lamba için: 9 V ÷ 2 = her lambada 4.5 V.",
    },
  },

  {
    id: "S6",
    kind: "numeric",
    unit: "Ω",
    answer: 200,
    tolerance: 0.02,
    en: {
      prompt: "Two 100 Ω resistors are connected in series. What is the total resistance? (Ω)",
      solution: "Series resistances simply add up: R_total = R1 + R2 = 100 Ω + 100 Ω = 200 Ω.",
    },
    tr: {
      prompt: "İki adet 100 Ω direnç seri bağlanıyor. Toplam direnç kaç ohmdur? (Ω)",
      solution:
        "Seri bağlı dirençler doğrudan toplanır: R_toplam = R1 + R2 = 100 Ω + 100 Ω = 200 Ω.",
    },
  },

  {
    id: "S7",
    kind: "numeric",
    unit: "Ω",
    answer: 50,
    tolerance: 0.03,
    en: {
      prompt: "Two 100 Ω resistors are connected in parallel. What is the total resistance? (Ω)",
      solution:
        "For equal resistors in parallel the result halves: R_total = R / n = 100 Ω ÷ 2 = 50 Ω. Check it with 1/R = 1/R1 + 1/R2 = 1/100 + 1/100 = 2/100 → R = 50 Ω.",
    },
    tr: {
      prompt: "İki adet 100 Ω direnç paralel bağlanıyor. Toplam direnç kaç ohmdur? (Ω)",
      solution:
        "Eşit dirençler paralel bağlandığında sonuç yarıya iner: R_toplam = R / n = 100 Ω ÷ 2 = 50 Ω. Kontrol: 1/R = 1/R1 + 1/R2 = 1/100 + 1/100 = 2/100 → R = 50 Ω.",
    },
  },

  {
    id: "S8",
    kind: "text",
    en: {
      prompt:
        "A third lamp branch is added in parallel to Circuit B. What happens to the total current drawn from the battery, and why?",
      solution:
        "The total current increases. Every parallel branch draws its own current and the branch currents add up at the supply: I_total = I1 + I2 + I3. The battery therefore has to deliver more current and will drain faster.",
    },
    tr: {
      prompt:
        "Devre B'ye paralel olarak üçüncü bir lamba kolu ekleniyor. Pilden çekilen toplam akıma ne olur ve neden?",
      solution:
        "Toplam akım artar. Paralel her kol kendi akımını çeker ve kol akımları kaynakta toplanır: I_toplam = I1 + I2 + I3. Bu yüzden pil daha fazla akım vermek zorunda kalır ve daha hızlı tükenir.",
    },
  },

  {
    id: "S9",
    kind: "choice",
    correctIndex: 0,
    en: {
      prompt: "In a circuit diagram, which symbol marks a lamp?",
      options: [
        "A circle with a cross inside",
        "Two parallel lines of unequal length",
        "A rectangle sitting on the wire",
        "A triangle touching a vertical bar",
      ],
      solution:
        "A lamp is drawn as a circle containing a cross (the glowing filament). Two parallel lines of unequal length are a battery, a rectangle is a resistor, and a triangle against a bar is a diode.",
    },
    tr: {
      prompt: "Bir devre şemasında lamba hangi sembolle gösterilir?",
      options: [
        "İçinde çarpı bulunan bir daire",
        "Farklı uzunlukta iki paralel çizgi",
        "Tel üzerinde duran bir dikdörtgen",
        "Dikey bir çizgiye değen bir üçgen",
      ],
      solution:
        "Lamba, içinde çarpı bulunan bir daire olarak çizilir (parlayan flaman). Farklı uzunlukta iki paralel çizgi pili, dikdörtgen direnci, çizgiye değen üçgen ise diyodu gösterir.",
    },
  },

  {
    id: "S10",
    kind: "numeric",
    unit: "",
    answer: 0,
    tolerance: 0,
    en: {
      prompt: "Three lamps are connected in series. If one of them fails, how many lamps stay lit?",
      solution:
        "Zero. In a series string all lamps share a single current path, so one failure opens the loop and every lamp goes dark.",
    },
    tr: {
      prompt:
        "Üç lamba seri bağlanmıştır. Lambalardan biri arızalanırsa kaç lamba yanmaya devam eder?",
      solution:
        "Sıfır. Seri bir dizide tüm lambalar tek bir akım yolunu paylaşır; tek bir arıza çevrimi keser ve bütün lambalar söner.",
    },
  },
];
