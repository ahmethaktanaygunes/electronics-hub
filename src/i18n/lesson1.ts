const LESSON_ONE_TR: Record<string, string> = {
  Foundations: "Temeller",
  "The Resistor": "Direnç",
  "Practice · Units": "Alıştırma · Birimler",
  "Ohm’s Law": "Ohm Kanunu",
  "LED Circuit": "LED Devresi",
  "Mini Test": "Mini Test",
  "Introduction to Electronics & Ohm’s Law": "Elektroniğe Giriş ve Ohm Kanunu",
  "Lesson 1 · Beginner · 25 min · card-by-card": "Ders 1 · Başlangıç · 25 dk · kart kart",
  "Electronics with Haktan": "Haktan ile Elektronik",
  "Engineering Workbench · Module 01": "Mühendislik Tezgâhı · Modül 01",
  "This lesson runs card by card instead of as one long page. Read one idea, then prove it with one question. A question card locks the flow until it is solved — a correct answer opens the next step.":
    "Bu ders uzun bir sayfa yerine kartlar hâlinde ilerler. Her kartta bir fikri okuyup bir soruyla pekiştirin. Soru kartı çözülene kadar ilerlemeyi durdurur; doğru cevap bir sonraki adımı açar.",
  "What you will learn": "Neler öğreneceksiniz",
  "4 blocks": "4 bölüm",
  "The difference between electricity and electronics": "Elektrik ve elektronik arasındaki fark",
  "What an electronic circuit really is": "Elektronik devrenin ne olduğu",
  "Voltage (V), current (I) and resistance (R)": "Gerilim (V), akım (I) ve direnç (R)",
  "The resistor: physics, symbol, values and unit conversions":
    "Direnç: fiziği, sembolü, değerleri ve birim dönüşümleri",
  "Ohm’s Law — solved for all three unknowns": "Ohm Kanunu — üç bilinmeyen için çözüm",
  "A battery + resistor + LED series circuit": "Pil + direnç + LED seri devresi",
  "How the flow works": "Dersin işleyişi",
  "step player": "adım adım",
  "One concept or one question per card": "Her kartta tek bir kavram ya da soru",
  "The progress bar and step counter show your position":
    "İlerleme çubuğu ve adım sayacı konumunuzu gösterir",
  "Question cards unlock only when answered correctly":
    "Soru kartları yalnızca doğru cevaplandığında açılır",
  "“Show solution” is available after one attempt — you are never stuck":
    "Bir denemeden sonra “Çözümü göster” seçeneğini kullanabilirsiniz; takılıp kalmazsınız",
  "Use ← / → on the keyboard, or the Back / Continue buttons":
    "Klavyedeki ← / → tuşlarını ya da Geri / Devam düğmelerini kullanın",
  "Electricity vs. Electronics": "Elektrik ve Elektronik",
  "Two words beginners use interchangeably — they are not the same thing.":
    "Yeni başlayanların birbirinin yerine kullandığı bu iki sözcük aynı şeyi anlatmaz.",
  Electricity: "Elektrik,",
  "is the general physical phenomenon of electric charge in motion or at rest — the reality behind lighting, motors, heating and power distribution.":
    "hareket hâlindeki ya da durağan elektrik yüklerinin genel fiziksel olayıdır; aydınlatmanın, motorların, ısıtmanın ve güç dağıtımının temelinde yer alır.",
  Electronics: "Elektronik,",
  "is the engineering discipline of": "enerjiyi",
  controlling: "bileşenlerle kontrol eden",
  "that energy with components — resistors, diodes, transistors — so the circuit can process information, not merely transport power.":
    "ve devrenin yalnızca güç taşımakla kalmayıp bilgi işlemesini sağlayan bir alandır.",
  "Electricity answers “how is energy transported?”; electronics answers “what decision does the circuit make?”":
    "Elektrik “Enerji nasıl taşınır?” sorusunu; elektronik ise “Devre hangi kararı verir?” sorusunu yanıtlar.",
  "One-sentence summary": "Tek cümlelik özet",
  "keep this": "aklınızda tutun",
  "Electricity is the raw phenomenon; electronics is the designed behaviour we impose on it with components.":
    "Elektrik temel fiziksel olaydır; elektronik ise bileşenlerle bu olaya kazandırdığımız tasarlanmış davranıştır.",
  "What is an Electronic Circuit?": "Elektronik Devre Nedir?",
  "A circuit is either complete or it is not — there is no middle state.":
    "Bir devre ya tamamlanmıştır ya da değildir; arada bir durum yoktur.",
  "A closed loop of conductive material that gives charge carriers a continuous path to follow.":
    "Yük taşıyıcılarına kesintisiz bir yol sunan iletken malzemeden oluşmuş kapalı bir çevrimdir.",
  "It needs three things: a source (battery or supply), a path (wires or PCB traces) and a load (the component doing the work).":
    "Üç öğe gerekir: bir kaynak (pil veya güç kaynağı), bir yol (kablolar veya PCB izleri) ve işi yapan bir yük (bileşen).",
  "Break the loop anywhere and the current stops everywhere.":
    "Çevrimin herhangi bir yerini açarsanız akım her yerde durur.",
  "Every circuit in this course can be built on a breadboard and probed — that is the point.":
    "Bu kurstaki her devre devre tahtasında kurulup ölçülebilir; amaç da bunu öğrenmektir.",
  Source: "Kaynak",
  "energy in": "enerji girişi",
  "The battery pushes charge around the loop and fixes the available voltage.":
    "Pil, yükleri çevrim boyunca hareket ettirir ve kullanılabilir gerilimi belirler.",
  Path: "Yol",
  conductor: "iletken",
  "Wires and PCB traces carry the current between components.":
    "Kablolar ve PCB izleri akımı bileşenler arasında taşır.",
  Load: "Yük",
  "work done": "yapılan iş",
  "The component that converts electrical energy into light, heat, motion or signal.":
    "Elektrik enerjisini ışığa, ısıya, harekete veya sinyale dönüştüren bileşen.",
  "Voltage (V), Current (I) & Resistance (R)": "Gerilim (V), Akım (I) ve Direnç (R)",
  "Three quantities describe everything that happens inside a circuit.":
    "Devrede gerçekleşen her şeyi üç temel büyüklük tanımlar.",
  "Voltage · V": "Gerilim · V",
  "volt (V)": "volt (V)",
  "The electrical pressure, or potential difference, between two points. It is what pushes charge around the loop. Measured":
    "İki nokta arasındaki elektriksel basınç, yani potansiyel farktır. Yükleri çevrim boyunca hareket ettirir. Bileşene",
  "in parallel": "paralel",
  "with the component, node to node.": "bağlanarak, düğümden düğüme ölçülür.",
  "Current · I": "Akım · I",
  "ampere (A)": "amper (A)",
  "The rate of charge flow — how many coulombs pass a point each second. Measured by breaking the loop and inserting the meter":
    "Yük akış hızıdır; bir noktadan saniyede kaç coulomb geçtiğini belirtir. Akımı ölçmek için çevrim açılır ve ölçü aleti",
  "in series": "seri bağlanarak ölçülür",
  ".": ".",
  "Resistance · R": "Direnç · R",
  "ohm (Ω)": "ohm (Ω)",
  "The opposition to that flow. It turns electrical energy into heat and sets how much current a given voltage will actually produce.":
    "Akım akışına karşı koyar. Elektrik enerjisini ısıya dönüştürür ve belirli bir gerilimin oluşturacağı akım miktarını belirler.",
  "Memory hook": "Akılda kalıcı benzetme",
  "from the bench": "tezgâhtan",
  "Think of voltage as pressure, current as flow rate and resistance as the narrow pipe that limits the flow. You will reuse this picture in the conceptual questions at the end of the lesson.":
    "Gerilimi basınç, akımı debi, direnci ise akışı kısıtlayan dar bir boru gibi düşünün. Dersin sonundaki kavramsal sorularda bu benzetmeden yararlanacaksınız.",
  "What is Resistance?": "Direnç Nedir?",
  "The property that opposes the movement of charge — measured in ohms (Ω).":
    "Yük hareketine karşı koyan özelliktir; ohm (Ω) ile ölçülür.",
  "Resistance is caused by collisions between drifting electrons and the atoms of the conductor lattice; each collision converts kinetic energy into heat.":
    "Direnç, hareket eden elektronların iletken örgüsündeki atomlarla çarpışmasından kaynaklanır; her çarpışma kinetik enerjiyi ısıya dönüştürür.",
  "It is measured in ohms (Ω) — the resistance across which 1 volt drives exactly 1 ampere.":
    "Ohm (Ω) ile ölçülür; 1 volt uygulandığında tam 1 amper akım oluşturan dirence 1 ohm denir.",
  "Conductors such as copper have very low resistance; insulators such as air and glass have extremely high resistance; resistors sit in a controlled middle ground.":
    "Bakır gibi iletkenlerin direnci çok düşüktür; hava ve cam gibi yalıtkanların direnci çok yüksektir. Dirençler bu aralığın kontrollü bir bölümünde çalışır.",
  "A real resistor is specified by two numbers: the resistance value and the power it can dissipate.":
    "Gerçek bir direnç iki değerle tanımlanır: direnç değeri ve dağıtabileceği güç.",
  "Physical picture": "Fiziksel açıklama",
  "why heat appears": "ısının nedeni",
  "Charge carriers do not travel through a resistor freely — they are constantly scattered by the material. The energy lost in those collisions leaves the resistor as heat, which is exactly why power rating matters.":
    "Yük taşıyıcıları dirençten serbestçe geçemez; malzeme tarafından sürekli saçılır. Bu çarpışmalarda kaybolan enerji dirençten ısı olarak çıkar. Güç değerinin önemli olmasının nedeni budur.",
  "Why Do We Use Resistors?": "Dirençleri Neden Kullanırız?",
  "The simplest and most used passive component — a deliberate bottleneck for charge.":
    "En basit ve en yaygın pasif bileşen; yük akışı için bilinçli bir dar boğaz.",
  "Symbol in a circuit": "Devre sembolü",
  "IEC 60617": "IEC 60617",
  "IEC rectangle resistor symbol and ANSI zig-zag resistor symbol":
    "IEC dikdörtgen direnç sembolü ve ANSI zikzak direnç sembolü",
  "IEC 60617 · rectangle": "IEC 60617 · dikdörtgen",
  "ANSI · zig-zag": "ANSI · zikzak",
  "Reference designators start with": "Referans adları",
  "(R1, R2, R47) and the value is written next to it, for example":
    "ile başlar ve değer yanına yazılır; örneğin",
  ". In text schematics you will also meet":
    ". Metin şemalarında şu gösterimlerle de karşılaşabilirsiniz:",
  and: "ve",
  "shorthand.": "kısaltmasıyla.",
  "Five reasons a resistor exists": "Direnç kullanmanın beş nedeni",
  applications: "uygulamalar",
  "To limit current to a safe value for a sensitive component — the LED case later in this lesson.":
    "LED örneğinde olduğu gibi hassas bir bileşenin akımını güvenli düzeyde sınırlamak.",
  "To divide voltage, creating a smaller reference voltage from a larger supply.":
    "Gerilimi bölerek yüksek bir kaynaktan daha düşük bir referans gerilimi elde etmek.",
  "To set the operating point (bias) of transistors and amplifiers.":
    "Transistör ve yükselteçlerin çalışma noktasını (bias) ayarlamak.",
  "To pull a signal line to a defined level (pull-up / pull-down) so it is never left floating.":
    "Sinyal hattını boşta kalmaması için tanımlı bir seviyeye çekmek (pull-up / pull-down).",
  "To convert electrical energy into heat on purpose — heaters, fuses and sensing elements.":
    "Isıtıcılar, sigortalar ve algılama elemanlarında elektrik enerjisini kasıtlı olarak ısıya dönüştürmek.",
  "Engineering Units & Conversions": "Mühendislik Birimleri ve Dönüşümler",
  "Milli, kilo and mega prefixes are used constantly in electronics — convert them fluently.":
    "Mili, kilo ve mega önekleri elektronikte sürekli kullanılır; bunlar arasında rahatça dönüşüm yapın.",
  "Prefix reference": "Önek tablosu",
  Prefix: "Önek",
  Symbol: "Sembol",
  Factor: "Çarpan",
  Example: "Örnek",
  "In base unit": "Temel birimde",
  milliampere: "miliamper",
  microampere: "mikroamper",
  "kilo-ohm": "kilo-ohm",
  "mega-ohm": "mega-ohm",
  millivolt: "milivolt",
  "0.75 A": "0,75 A",
  "0.00025 A": "0,00025 A",
  "4.7 kΩ": "4,7 kΩ",
  "2.2 MΩ": "2,2 MΩ",
  "3.3 V": "3,3 V",
  "Going from a small unit to a larger one you divide by the factor (mA → A divides by 1000); going from a larger unit to a smaller one you multiply (A → mA multiplies by 1000).":
    "Küçük birimden büyük birime geçerken çarpana bölün (mA → A dönüşümünde 1000'e bölün); büyük birimden küçük birime geçerken çarpın (A → mA dönüşümünde 1000 ile çarpın).",
  "Next: 10 conversion drills": "Sırada: 10 birim dönüşümü alıştırması",
  gated: "kilitli adımlar",
  Check: "Kontrol Et",
  "Each of the next ten cards is a single conversion exercise. Enter the value in the unit that is requested, press":
    "Sonraki on kartın her biri bir dönüşüm alıştırmasıdır. İstenen birimdeki değeri girip",
  ", and the correct answer unlocks the following card.":
    " düğmesine basın; doğru cevap sonraki kartı açar.",
  "Part A": "Bölüm A",
  "Unit Conversion Exercises": "Birim Dönüşümü Alıştırmaları",
  "Enter the converted value and submit. Accepted answers use engineering-prefix notation (mA, kΩ, MΩ).":
    "Dönüştürülmüş değeri girip gönderin. Mühendislik öneklerini (mA, kΩ, MΩ) kullanın.",
  "Unit Conversion Drill": "Birim Dönüşümü Alıştırması",
  "The Law: V = I × R": "Kanun: V = I × R",
  "The single most useful equation in electronics — it links all three quantities.":
    "Elektronikteki en kullanışlı denklem; üç temel büyüklüğü birbirine bağlar.",
  "V in volts · I in amperes · R in ohms": "V volt · I amper · R ohm cinsindendir",
  "current from voltage and resistance": "gerilim ve dirençten akım",
  "resistance from voltage and current": "gerilim ve akımdan direnç",
  "voltage from current and resistance": "akım ve dirençten gerilim",
  "The relationship": "Büyüklükler arasındaki ilişki",
  "three proportionalities": "üç orantı",
  "V and I are directly proportional: at constant R, doubling the voltage doubles the current.":
    "V ve I doğru orantılıdır: R sabitken gerilimi iki katına çıkarmak akımı da iki katına çıkarır.",
  "I and R are inversely proportional: at constant V, doubling the resistance halves the current.":
    "I ve R ters orantılıdır: V sabitken direnci iki katına çıkarmak akımı yarıya indirir.",
  "At constant I, voltage and resistance rise together — more resistance needs more pressure to keep the same flow.":
    "I sabitken gerilim ve direnç birlikte artar; aynı akışı korumak için daha yüksek dirençte daha fazla gerilim gerekir.",
  "Using the Formula for Three Unknowns": "Formülü Üç Bilinmeyen İçin Kullanma",
  "Same law, rearranged three ways — always check what is given and what is asked.":
    "Aynı kanunun üç farklı düzenlenişi; verilenleri ve isteneni her zaman kontrol edin.",
  "Find the current": "Akımı bulun",
  "A 12 V supply is across a 470 Ω resistor.": "470 Ω direnç uçlarına 12 V uygulanıyor.",
  "Find the resistance": "Direnci bulun",
  "6 V appears across a resistor while 3 mA flows through it.":
    "Bir direncin uçlarında 6 V varken içinden 3 mA akım geçiyor.",
  "Find the voltage": "Gerilimi bulun",
  "A current of 0.25 A flows through a 100 Ω resistor.": "100 Ω dirençten 0,25 A akım geçiyor.",
  "Bench check": "Tezgâhta doğrulama",
  verification: "ölçüm",
  "Measure V with the voltmeter in parallel, measure I by breaking the loop and inserting the ammeter in series, then confirm the arithmetic. If the measured current is far from the predicted value, check the resistor tolerance and the actual supply voltage first.":
    "V'yi voltmetreyi paralel bağlayarak ölçün. I'yi çevrimi açıp ampermetreyi seri bağlayarak ölçün ve hesapla karşılaştırın. Ölçülen akım tahminden çok farklıysa önce direnç toleransını ve gerçek kaynak gerilimini kontrol edin.",
  "Interactive Simulation: I = V / R": "Etkileşimli Simülasyon: I = V / R",
  "Move the voltage and resistance sliders and watch the electron flow change.":
    "Gerilim ve direnç kaydırıcılarını hareket ettirip elektron akışının değişimini izleyin.",
  "What to look for": "Nelere dikkat etmeli",
  "the visible link": "gözle görülen ilişki",
  "The equation readout updates in real time as you move either slider.":
    "Kaydırıcılardan birini hareket ettirdiğinizde denklem anında güncellenir.",
  "The green electron dots in the wire loop change speed and density according to the resulting current I — a high current produces a fast, dense stream; a small current produces a slow, sparse one.":
    "Tel çevrimindeki elektron noktalarının hızı ve yoğunluğu akıma (I) göre değişir: yüksek akım hızlı ve yoğun, düşük akım yavaş ve seyrek bir akış oluşturur.",
  "The amber constriction in the top wire is the resistor: it is the bottleneck that determines how much charge can pass per second.":
    "Üstteki telde bulunan kehribar renkli daralma dirençtir; saniyede ne kadar yük geçeceğini belirleyen dar boğazdır.",
  "Try the preset 9 V / 470 Ω, then increase the resistance to 1 kΩ: voltage is unchanged, so the current must fall.":
    "9 V / 470 Ω hazır ayarını deneyin, ardından direnci 1 kΩ'a çıkarın. Gerilim aynı kaldığından akım azalmalıdır.",
  "Today's Circuit: Battery + Resistor + LED": "Bugünün Devresi: Pil + Direnç + LED",
  "An LED is a current device, not a voltage device. The resistor converts a fixed supply into a safe current.":
    "LED bir gerilim değil, akım bileşenidir. Direnç, sabit kaynak gerilimini güvenli bir akıma dönüştürür.",
  "Schematic · series LED": "Şema · seri LED",
  "Battery, resistor and LED connected in series": "Pil, direnç ve LED seri bağlı",
  "Why the resistor protects the LED": "Direnç LED'i neden korur?",
  "design rule": "tasarım kuralı",
  "An LED has an almost fixed forward voltage (Vf ≈ 1.8 V for red, ≈ 3.2 V for blue/white). Below that value almost no current flows.":
    "LED'in ileri gerilimi yaklaşık sabittir (kırmızı için Vf ≈ 1,8 V; mavi/beyaz için ≈ 3,2 V). Bu değerin altında neredeyse hiç akım geçmez.",
  "Once the supply exceeds Vf, the extra voltage must be dropped somewhere — that is the resistor's job.":
    "Kaynak gerilimi Vf değerini aştığında aradaki gerilimin bir yerde düşürülmesi gerekir; bu dirençlerin görevidir.",
  "Without a resistor the current rises until something fails: the PN junction is destroyed in milliseconds by thermal runaway.":
    "Direnç olmazsa akım bir bileşen bozulana kadar yükselir; PN jonksiyonu termal kaçak nedeniyle milisaniyeler içinde zarar görür.",
  "Design equation: R = (VS − Vf) / I_LED.": "Tasarım denklemi: R = (VS − Vf) / I_LED.",
  "Worked design · 5 V supply, red LED": "Örnek tasarım · 5 V kaynak, kırmızı LED",
  "check the numbers": "hesabı kontrol edin",
  "Step 1 — find the resistor": "Adım 1 — direnci bulun",
  "VS = 5 V, Vf = 2 V, target current = 10 mA": "VS = 5 V, Vf = 2 V, hedef akım = 10 mA",
  "R = (5 − 2) V / 0.010 A = 300 Ω → nearest E12 value 330 Ω":
    "R = (5 − 2) V / 0,010 A = 300 Ω → en yakın E12 değeri 330 Ω",
  "Step 2 — check the dissipation": "Adım 2 — güç kaybını kontrol edin",
  "I = 10 mA through 330 Ω": "330 Ω üzerinden I = 10 mA",
  "P = I²R = 0.01² × 330 = 33 mW → a 1/4 W resistor is more than adequate":
    "P = I²R = 0,01² × 330 = 33 mW → 1/4 W direnç fazlasıyla yeterlidir",
  "The Result of Choosing the Wrong Resistor": "Yanlış Direnç Seçiminin Sonuçları",
  "Both directions of error have a signature — learn to recognise them.":
    "Direncin fazla küçük ya da büyük olmasının farklı sonuçları vardır; bunları tanımayı öğrenin.",
  "Too small": "Çok küçük",
  overdrive: "aşırı akım",
  "Current exceeds the LED rating, often by an order of magnitude.":
    "Akım, çoğu zaman bir büyüklük mertebesiyle LED sınırını aşar.",
  "Junction temperature climbs, light output droops, then the bond wires or the die fail.":
    "Jonksiyon sıcaklığı yükselir, ışık çıkışı düşer; ardından bağlantı telleri veya yonga bozulur.",
  "Result: a dead LED — sometimes a shorted one that becomes a 0 Ω path across the supply.":
    "Sonuç: LED söner; bazen kısa devre olarak bozulup kaynak uçları arasında 0 Ω yol oluşturur.",
  "Too large": "Çok büyük",
  underdrive: "düşük akım",
  "Current sits far below the design value.": "Akım tasarım değerinin çok altında kalır.",
  "The LED still works but is visibly dim or barely glowing.":
    "LED çalışmaya devam eder ancak belirgin biçimde sönük yanar.",
  "Common symptom when a 10 kΩ resistor is used by mistake instead of 330 Ω.":
    "330 Ω yerine yanlışlıkla 10 kΩ direnç kullanıldığında sık görülür.",
  "Rule of thumb": "Pratik kural",
  "verify every time": "her zaman doğrulayın",
  "Size the resistor for the current the LED actually wants, then confirm the resistor's power rating is at least twice the calculated dissipation. A resistor that survives on paper still runs hot inside a closed enclosure.":
    "Direnci LED'in ihtiyaç duyduğu akıma göre seçin ve güç değerinin hesaplanan kaybın en az iki katı olduğunu doğrulayın. Hesapta güvenli görünen bir direnç, kapalı bir kutuda yine de aşırı ısınabilir.",
  "Series Connection & the Path of Current": "Seri Bağlantı ve Akımın İzlediği Yol",
  "Components in series share one current — there is only one path to follow.":
    "Seri bağlı bileşenlerden aynı akım geçer; izlenecek tek bir yol vardır.",
  "Series principles": "Seri bağlantı ilkeleri",
  "one path": "tek yol",
  "Components in series share the same current: every coulomb that leaves the battery passes through the resistor and then the LED.":
    "Seri bağlı bileşenlerden aynı akım geçer: pilden çıkan her coulomb önce dirençten, sonra LED'den geçer.",
  "The voltage is divided between them: VS = V_R + V_LED.":
    "Gerilim bileşenler arasında bölünür: VS = V_R + V_LED.",
  "Adding a series component always increases the total resistance and therefore reduces the current.":
    "Seri bir bileşen eklemek toplam direnci artırır ve bu nedenle akımı azaltır.",
  "The path of current, step by step": "Akımın izlediği yol, adım adım",
  "closed loop": "kapalı çevrim",
  "Current leaves the positive (+) terminal of the battery.":
    "Akım pilin pozitif (+) ucundan çıkar.",
  "It travels along the wire to the resistor, which drops V_R = I × R volts across itself.":
    "Tel üzerinden dirence ulaşır; direnç uçlarında V_R = I × R kadar gerilim düşer.",
  "It continues through the LED, which drops its forward voltage V_LED ≈ 2 V.":
    "İleri gerilimi V_LED ≈ 2 V olan LED'den geçmeye devam eder.",
  "It returns to the negative (−) terminal of the battery, closing the loop.":
    "Çevrimi tamamlayarak pilin negatif (−) ucuna geri döner.",
  "Because the loop is series, the same current I flows through every element — I is set by VS and the total series resistance.":
    "Çevrim seri olduğundan her elemandan aynı I akımı geçer; I değerini VS ve toplam seri direnç belirler.",
  "Part B": "Bölüm B",
  "Circuit & Conceptual Questions": "Devre ve Kavram Soruları",
  "Solve each circuit with Ohm’s Law (V = I × R). Read the unit requested in brackets — it tells you what to enter.":
    "Her devreyi Ohm Kanunu (V = I × R) ile çözün. Köşeli parantezde istenen birimi okuyup cevabınızı o birimde girin.",
  "Circuit & Conceptual Question": "Devre ve Kavram Sorusu",
  "Convert 2.5 A to mA.": "2,5 A değerini mA birimine dönüştürün.",
  "1 A = 1000 mA, so 2.5 A × 1000 = 2500 mA.": "1 A = 1000 mA olduğundan 2,5 A × 1000 = 2500 mA.",
  "Convert 750 mA to A.": "750 mA değerini A birimine dönüştürün.",
  "1 mA = 0.001 A, so 750 mA ÷ 1000 = 0.75 A.": "1 mA = 0,001 A olduğundan 750 mA ÷ 1000 = 0,75 A.",
  "Convert 0.035 A to mA.": "0,035 A değerini mA birimine dönüştürün.",
  "0.035 A × 1000 = 35 mA.": "0,035 A × 1000 = 35 mA.",
  "Convert 4.7 kΩ to Ω.": "4,7 kΩ değerini Ω birimine dönüştürün.",
  "1 kΩ = 1000 Ω, so 4.7 kΩ × 1000 = 4700 Ω.": "1 kΩ = 1000 Ω olduğundan 4,7 kΩ × 1000 = 4700 Ω.",
  "Convert 6800 Ω to kΩ.": "6800 Ω değerini kΩ birimine dönüştürün.",
  "6800 Ω ÷ 1000 = 6.8 kΩ.": "6800 Ω ÷ 1000 = 6,8 kΩ.",
  "Convert 2.2 MΩ to Ω.": "2,2 MΩ değerini Ω birimine dönüştürün.",
  "1 MΩ = 1 000 000 Ω, so 2.2 MΩ × 1 000 000 = 2 200 000 Ω.":
    "1 MΩ = 1 000 000 Ω olduğundan 2,2 MΩ × 1 000 000 = 2 200 000 Ω.",
  "Convert 0.0047 A to mA.": "0,0047 A değerini mA birimine dönüştürün.",
  "0.0047 A × 1000 = 4.7 mA.": "0,0047 A × 1000 = 4,7 mA.",
  "Convert 3300 mV to V.": "3300 mV değerini V birimine dönüştürün.",
  "1 mV = 0.001 V, so 3300 mV ÷ 1000 = 3.3 V.": "1 mV = 0,001 V olduğundan 3300 mV ÷ 1000 = 3,3 V.",
  "Convert 0.75 kΩ to Ω.": "0,75 kΩ değerini Ω birimine dönüştürün.",
  "0.75 kΩ × 1000 = 750 Ω.": "0,75 kΩ × 1000 = 750 Ω.",
  "Which is larger: 470 Ω or 0.68 kΩ? Enter the value of the LARGER resistance in Ω.":
    "Hangisi daha büyüktür: 470 Ω mı, 0,68 kΩ mı? BÜYÜK olan direncin değerini Ω cinsinden girin.",
  "0.68 kΩ = 680 Ω, and 680 Ω > 470 Ω. The larger value is 680 Ω.":
    "0,68 kΩ = 680 Ω ve 680 Ω > 470 Ω. Büyük değer 680 Ω'tur.",
  "Q1 — A 9 V battery is connected to a 1 kΩ resistor. What is the current? (answer in mA)":
    "S1 — 9 V pil, 1 kΩ dirence bağlanıyor. Akım kaçtır? (cevabı mA cinsinden verin)",
  "I = V / R = 9 V ÷ 1000 Ω = 0.009 A = 9 mA.": "I = V / R = 9 V ÷ 1000 Ω = 0,009 A = 9 mA.",
  "Q2 — An LED needs about 2 V and should run at 10 mA. If the supply is 5 V, what series resistor is required? (answer in Ω)":
    "S2 — Bir LED yaklaşık 2 V ister ve 10 mA akımla çalışmalıdır. Kaynak 5 V ise gereken seri direnç kaç Ω'dur?",
  "The resistor drops the difference: V_R = 5 V − 2 V = 3 V. R = V_R / I = 3 V ÷ 0.01 A = 300 Ω.":
    "Direnç fark gerilimini düşürür: V_R = 5 V − 2 V = 3 V. R = V_R / I = 3 V ÷ 0,01 A = 300 Ω.",
  "Q3 — Conceptual: give your own real-life analogy for voltage, current, and resistance.":
    "S3 — Kavramsal: gerilim, akım ve direnç için günlük hayattan kendi benzetmenizi verin.",
  "Any consistent analogy is valid, for example a water pipe: voltage is the water pressure pushing the flow, current is the volume of water flowing per second, and resistance is a narrow section of pipe that restricts the flow. Electrical version: voltage is the potential difference, current is the charge passing per second, resistance opposes that charge movement.":
    "Tutarlı herhangi bir benzetme geçerlidir. Örneğin su borusunda gerilim akışı iten su basıncı, akım saniyede akan su miktarı, direnç ise akışı kısıtlayan dar boru bölümüdür. Elektrikte gerilim potansiyel farkı, akım saniyede geçen yük miktarı, direnç ise yük hareketine karşı koyan etkidir.",
  "Q4 — Conceptual: if the resistance increases while the voltage stays constant, what happens to the current?":
    "S4 — Kavramsal: gerilim sabit kalırken direnç artarsa akıma ne olur?",
  "From I = V / R, current and resistance are inversely proportional. With V constant, increasing R decreases I. Double the resistance and the current halves.":
    "I = V / R denklemine göre akım ve direnç ters orantılıdır. V sabitken R artarsa I azalır. Direnç iki katına çıkarsa akım yarıya iner.",
  "Q5 — A 12 V supply is connected across a 470 Ω resistor. What current flows? (answer in mA, 2 decimals)":
    "S5 — 470 Ω dirence 12 V uygulanıyor. Akım kaç mA'dir? (2 ondalık basamakla cevaplayın)",
  "I = V / R = 12 V ÷ 470 Ω = 0.02553 A = 25.53 mA.":
    "I = V / R = 12 V ÷ 470 Ω = 0,02553 A = 25,53 mA.",
  "Q6 — A current of 0.25 A flows through a 100 Ω resistor. What is the voltage across it? (answer in V)":
    "S6 — 100 Ω dirençten 0,25 A akım geçiyor. Direnç uçlarındaki gerilim kaç V'tur?",
  "V = I × R = 0.25 A × 100 Ω = 25 V.": "V = I × R = 0,25 A × 100 Ω = 25 V.",
  "Q7 — A 6 V drop appears across a resistor while 3 mA flows through it. What is its resistance? (answer in Ω)":
    "S7 — Üzerinde 6 V düşüm olan bir dirençten 3 mA akım geçiyor. Direnç değeri kaç Ω'dur?",
  "R = V / I = 6 V ÷ 0.003 A = 2000 Ω (2 kΩ).": "R = V / I = 6 V ÷ 0,003 A = 2000 Ω (2 kΩ).",
  "Q8 — A resistor has 5 V across it and 20 mA through it. How much power does it dissipate? (answer in mW)":
    "S8 — Uçlarında 5 V olan ve içinden 20 mA geçen direnç ne kadar güç harcar? (cevabı mW cinsinden verin)",
  "P = V × I = 5 V × 0.02 A = 0.1 W = 100 mW. A 1/8 W (125 mW) resistor is the minimum safe standard rating.":
    "P = V × I = 5 V × 0,02 A = 0,1 W = 100 mW. Güvenli en düşük standart değer 1/8 W (125 mW) dirençtir.",
};

export function lessonOneText(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  const translation = LESSON_ONE_TR[normalized];
  if (!translation) return text;

  const leading = text.match(/^\s*/)?.[0] ?? "";
  const trailing = text.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translation}${trailing}`;
}
