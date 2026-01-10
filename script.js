// --- Data ---
const categories = {
  "football": {
    name: "یاریزانی تۆپی پێ",
    items: [
      { name: "Lionel Messi", hint: "Argentina" }, { name: "Cristiano Ronaldo", hint: "Portugal" }, { name: "Kylian Mbappé", hint: "France" }, { name: "Erling Haaland", hint: "Norway" }, { name: "Karim Benzema", hint: "France" },
      { name: "Robert Lewandowski", hint: "Poland" }, { name: "Luka Modrić", hint: "Croatia" }, { name: "Kevin De Bruyne", hint: "Belgium" }, { name: "Mohamed Salah", hint: "Egypt" }, { name: "Neymar Jr", hint: "Brazil" },
      { name: "Vinícius Júnior", hint: "Brazil" }, { name: "Jürgen Klopp (Manager)", hint: "Germany" }, { name: "Pep Guardiola (Manager)", hint: "Spain" }, { name: "Zinedine Zidane", hint: "France" }, { name: "Xavi Hernández", hint: "Spain" },
      { name: "Andrés Iniesta", hint: "Spain" }, { name: "Sergio Ramos", hint: "Spain" }, { name: "Virgil van Dijk", hint: "Netherlands" }, { name: "Toni Kroos", hint: "Germany" }, { name: "Thomas Müller", hint: "Germany" },
      { name: "Manuel Neuer", hint: "Germany" }, { name: "Thibaut Courtois", hint: "Belgium" }, { name: "Marc-André ter Stegen", hint: "Germany" }, { name: "Alisson Becker", hint: "Brazil" }, { name: "Ederson Moraes", hint: "Brazil" },
      { name: "Jan Oblak", hint: "Slovenia" }, { name: "Antonio Rüdiger", hint: "Germany" }, { name: "Rúben Dias", hint: "Portugal" }, { name: "Marquinhos", hint: "Brazil" }, { name: "Achraf Hakimi", hint: "Morocco" },
      { name: "Trent Alexander-Arnold", hint: "England" }, { name: "Alphonso Davies", hint: "Canada" }, { name: "Joshua Kimmich", hint: "Germany" }, { name: "Rodri Hernández", hint: "Spain" }, { name: "Ilkay Gündogan", hint: "Germany" },
      { name: "Bernardo Silva", hint: "Portugal" }, { name: "Jude Bellingham", hint: "England" }, { name: "Jamal Musiala", hint: "Germany" }, { name: "Bukayo Saka", hint: "England" }, { name: "Marcus Rashford", hint: "England" },
      { name: "Harry Kane", hint: "England" }, { name: "Son Heung-min", hint: "South Korea" }, { name: "Rafael Leão", hint: "Portugal" }, { name: "Victor Osimhen", hint: "Nigeria" }, { name: "Khvicha Kvaratskhelia", hint: "Georgia" },
      { name: "Paulo Dybala", hint: "Argentina" }, { name: "Lautaro Martínez", hint: "Argentina" }, { name: "Antoine Griezmann", hint: "France" }, { name: "Ousmane Dembélé", hint: "France" }, { name: "Frenkie de Jong", hint: "Netherlands" },
      { name: "Pedri González", hint: "Spain" }, { name: "Gavi Páez", hint: "Spain" }, { name: "Ansu Fati", hint: "Spain" }, { name: "Alejandro Balde", hint: "Spain" }, { name: "Ronald Araújo", hint: "Uruguay" },
      { name: "Jules Koundé", hint: "France" }, { name: "Éder Militão", hint: "Brazil" }, { name: "David Alaba", hint: "Austria" }, { name: "Federico Valverde", hint: "Uruguay" }, { name: "Aurélien Tchouaméni", hint: "France" },
      { name: "Eduardo Camavinga", hint: "France" }, { name: "Rodrygo Goes", hint: "Brazil" }, { name: "Riyad Mahrez", hint: "Algeria" }, { name: "Casemiro", hint: "Brazil" }, { name: "Raphaël Varane", hint: "France" },
      { name: "Bruno Fernandes", hint: "Portugal" }, { name: "Leroy Sané", hint: "Germany" }, { name: "Kingsley Coman", hint: "France" }, { name: "Serge Gnabry", hint: "Germany" }, { name: "Leon Goretzka", hint: "Germany" },
      { name: "Matthijs de Ligt", hint: "Netherlands" }, { name: "Dayot Upamecano", hint: "France" }, { name: "Theo Hernández", hint: "France" }, { name: "Mike Maignan", hint: "France" }, { name: "Olivier Giroud", hint: "France" },
      { name: "Zlatan Ibrahimović", hint: "Sweden" }, { name: "Luis Suárez", hint: "Uruguay" }, { name: "Sergio Busquets", hint: "Spain" }, { name: "Jordi Alba", hint: "Spain" }, { name: "Gerard Piqué", hint: "Spain" },
      { name: "Carles Puyol", hint: "Spain" }, { name: "Ronaldinho Gaúcho", hint: "Brazil" }, { name: "Rivaldo", hint: "Brazil" }, { name: "Ronaldo Nazário", hint: "Brazil" }, { name: "Roberto Carlos", hint: "Brazil" },
      { name: "Cafu", hint: "Brazil" }, { name: "Paolo Maldini", hint: "Italy" }, { name: "Alessandro Nesta", hint: "Italy" }, { name: "Fabio Cannavaro", hint: "Italy" }, { name: "Gianluigi Buffon", hint: "Italy" },
      { name: "Iker Casillas", hint: "Spain" }, { name: "Sergio Agüero", hint: "Argentina" }, { name: "David Silva", hint: "Spain" }, { name: "Yaya Touré", hint: "Ivory Coast" }, { name: "Didier Drogba", hint: "Ivory Coast" },
      { name: "Frank Lampard", hint: "England" }, { name: "Steven Gerrard", hint: "England" }, { name: "Wayne Rooney", hint: "England" }, { name: "Paul Scholes", hint: "England" }, { name: "Ryan Giggs", hint: "Wales" },
      { name: "David Beckham", hint: "England" }, { name: "Thierry Henry", hint: "France" }, { name: "Patrick Vieira", hint: "France" }, { name: "Dennis Bergkamp", hint: "Netherlands" }, { name: "Ruud van Nistelrooy", hint: "Netherlands" },
      { name: "Robin van Persie", hint: "Netherlands" }, { name: "Arjen Robben", hint: "Netherlands" }, { name: "Wesley Sneijder", hint: "Netherlands" }, { name: "Franck Ribéry", hint: "France" }, { name: "Marco Reus", hint: "Germany" },
      { name: "Thiago Silva", hint: "Brazil" }, { name: "N'Golo Kanté", hint: "France" }, { name: "Paul Pogba", hint: "France" }, { name: "Romelu Lukaku", hint: "Belgium" }, { name: "Ángel Di María", hint: "Argentina" },
      { name: "Alejandro Garnacho", hint: "Argentina" }, { name: "Julián Álvarez", hint: "Argentina" }, { name: "Enzo Fernández", hint: "Argentina" }, { name: "Alexis Mac Allister", hint: "Argentina" }, { name: "Emiliano Martínez", hint: "Argentina" },
      { name: "Nathan Aké", hint: "Netherlands" }, { name: "Phil Foden", hint: "England" }, { name: "Jack Grealish", hint: "England" }, { name: "Declan Rice", hint: "England" }, { name: "Martin Ødegaard", hint: "Norway" },
      { name: "William Saliba", hint: "France" }, { name: "Gabriel Jesus", hint: "Brazil" }, { name: "Gabriel Martinelli", hint: "Brazil" }, { name: "Mohammed Kudus", hint: "Ghana" }, { name: "Darwin Núñez", hint: "Uruguay" },
      { name: "Luis Díaz", hint: "Colombia" }, { name: "Dominik Szoboszlai", hint: "Hungary" }, { name: "Andy Robertson", hint: "Scotland" }, { name: "Sadio Mané", hint: "Senegal" }, { name: "Roberto Firmino", hint: "Brazil" },
      { name: "Fabinho", hint: "Brazil" }, { name: "Jordan Henderson", hint: "England" }, { name: "James Milner", hint: "England" }, { name: "Naby Keïta", hint: "Guinea" }, { name: "Thiago Alcântara", hint: "Spain" },
      { name: "Diogo Jota", hint: "Portugal" }, { name: "Cody Gakpo", hint: "Netherlands" }, { name: "Harvey Elliott", hint: "England" }, { name: "Stefan Bajcetic", hint: "Spain" }, { name: "Ibrahima Konaté", hint: "France" },
      { name: "José María Giménez", hint: "Uruguay" }, { name: "Yassine Bounou", hint: "Morocco" }, { name: "Youssef En-Nesyri", hint: "Morocco" }, { name: "Sofyan Amrabat", hint: "Morocco" }, { name: "Hakim Ziyech", hint: "Morocco" },
      { name: "Noussair Mazraoui", hint: "Morocco" }, { name: "Franck Kessié", hint: "Ivory Coast" }, { name: "Ismaël Bennacer", hint: "Algeria" }, { name: "Islam Slimani", hint: "Algeria" }, { name: "Miralem Pjanić", hint: "Bosnia" },
      // --- New Players (100+) ---
      { name: "Florian Wirtz", hint: "Germany" }, { name: "Granit Xhaka", hint: "Switzerland" }, { name: "Victor Boniface", hint: "Nigeria" }, { name: "Nico Williams", hint: "Spain" }, { name: "Lamine Yamal", hint: "Spain" },
      { name: "Dani Olmo", hint: "Spain" }, { name: "Cole Palmer", hint: "England" }, { name: "Ollie Watkins", hint: "England" }, { name: "Kobbie Mainoo", hint: "England" }, { name: "Gabriel Magalhães", hint: "Brazil" },
      { name: "David Raya", hint: "Spain" }, { name: "Kai Havertz", hint: "Germany" }, { name: "James Maddison", hint: "England" }, { name: "Cristian Romero", hint: "Argentina" }, { name: "Guglielmo Vicario", hint: "Italy" },
      { name: "Micky van de Ven", hint: "Netherlands" }, { name: "Alexander Isak", hint: "Sweden" }, { name: "Bruno Guimarães", hint: "Brazil" }, { name: "Anthony Gordon", hint: "England" }, { name: "Douglas Luiz", hint: "Brazil" },
      { name: "Leon Bailey", hint: "Jamaica" }, { name: "Pau Torres", hint: "Spain" }, { name: "John Stones", hint: "England" }, { name: "Kyle Walker", hint: "England" }, { name: "Manuel Akanji", hint: "Switzerland" },
      { name: "Joško Gvardiol", hint: "Croatia" }, { name: "Mateo Kovačić", hint: "Croatia" }, { name: "Ferland Mendy", hint: "France" }, { name: "Dani Carvajal", hint: "Spain" }, { name: "Brahim Díaz", hint: "Morocco" },
      { name: "Endrick", hint: "Brazil" }, { name: "Samuel Lino", hint: "Brazil" }, { name: "Rodrigo De Paul", hint: "Argentina" }, { name: "Nahuel Molina", hint: "Argentina" }, { name: "Nico Schlotterbeck", hint: "Germany" },
      { name: "Gregor Kobel", hint: "Switzerland" }, { name: "Mats Hummels", hint: "Germany" }, { name: "Julian Brandt", hint: "Germany" }, { name: "Niclas Füllkrug", hint: "Germany" }, { name: "Dušan Vlahović", hint: "Serbia" },
      { name: "Federico Chiesa", hint: "Italy" }, { name: "Adrien Rabiot", hint: "France" }, { name: "Gleison Bremer", hint: "Brazil" }, { name: "Hakan Çalhanoğlu", hint: "Turkey" }, { name: "Nicolò Barella", hint: "Italy" },
      { name: "Alessandro Bastoni", hint: "Italy" }, { name: "Marcus Thuram", hint: "France" }, { name: "Yann Sommer", hint: "Switzerland" }, { name: "Christian Pulisic", hint: "USA" }, { name: "Ruben Loftus-Cheek", hint: "England" },
      { name: "Tijjani Reijnders", hint: "Netherlands" }, { name: "Stanislav Lobotka", hint: "Slovakia" }, { name: "Lorenzo Pellegrini", hint: "Italy" }, { name: "Bradley Barcola", hint: "France" }, { name: "Vitinha", hint: "Portugal" },
      { name: "Warren Zaïre-Emery", hint: "France" }, { name: "Diego Maradona", hint: "Argentina" }, { name: "Johan Cruyff", hint: "Netherlands" }, { name: "Franz Beckenbauer", hint: "Germany" }, { name: "Michel Platini", hint: "France" },
      { name: "George Best", hint: "Northern Ireland" }, { name: "Ferenc Puskás", hint: "Hungary" }, { name: "Alfredo Di Stéfano", hint: "Spain" }, { name: "Eusébio", hint: "Portugal" }, { name: "Bobby Charlton", hint: "England" },
      { name: "Gerd Müller", hint: "Germany" }, { name: "Marco van Basten", hint: "Netherlands" }, { name: "Ruud Gullit", hint: "Netherlands" }, { name: "Frank Rijkaard", hint: "Netherlands" }, { name: "Lothar Matthäus", hint: "Germany" },
      { name: "Oliver Kahn", hint: "Germany" }, { name: "Philipp Lahm", hint: "Germany" }, { name: "Michael Ballack", hint: "Germany" }, { name: "Miroslav Klose", hint: "Germany" }, { name: "Bastian Schweinsteiger", hint: "Germany" },
      { name: "Xabi Alonso", hint: "Spain" }, { name: "Víctor Valdés", hint: "Spain" }, { name: "David Villa", hint: "Spain" }, { name: "Fernando Torres", hint: "Spain" }, { name: "Javier Mascherano", hint: "Argentina" },
      { name: "Juan Román Riquelme", hint: "Argentina" }, { name: "Gabriel Batistuta", hint: "Argentina" }, { name: "Hernán Crespo", hint: "Argentina" }, { name: "Javier Zanetti", hint: "Argentina" }, { name: "Franco Baresi", hint: "Italy" },
      { name: "Alessandro Del Piero", hint: "Italy" }, { name: "Francesco Totti", hint: "Italy" }, { name: "Andrea Pirlo", hint: "Italy" }, { name: "Roberto Baggio", hint: "Italy" }, { name: "Filippo Inzaghi", hint: "Italy" },
      { name: "Gianluca Zambrotta", hint: "Italy" }, { name: "Fabien Barthez", hint: "France" }, { name: "Lilian Thuram", hint: "France" }, { name: "Marcel Desailly", hint: "France" }, { name: "Claude Makélélé", hint: "France" },
      { name: "Eric Cantona", hint: "France" }, { name: "David Trezeguet", hint: "France" }, { name: "Michael Owen", hint: "England" }, { name: "Alan Shearer", hint: "England" }, { name: "Raúl González", hint: "Spain" },
      { name: "Gareth Bale", hint: "Wales" }, { name: "Luís Figo", hint: "Portugal" }, { name: "Gary Neville", hint: "England" }, { name: "Rio Ferdinand", hint: "England" }, { name: "John Terry", hint: "England" },
      { name: "Ashley Cole", hint: "England" }, { name: "Petr Čech", hint: "Czech Republic" }
    ]
  },
  "clash_royale": {
    name: "کڵاش ڕۆیاڵ",
    items: [
      "Mega Knight", "P.E.K.K.A", "Electro Giant", "Hog Rider", "Sparky", "The Log", "Fireball", "Graveyard", "Princess", "Miner",
      "Ice Wizard", "Magic Archer", "Lumberjack", "Inferno Dragon", "Bandit", "Ram Rider", "Electro Wizard", "Night Witch",
      "Mother Witch", "Royal Ghost", "Fisherman", "Phoenix", "Golden Knight", "Skeleton King", "Archer Queen", "Mighty Miner",
      "Monk", "Little Prince", "Valkyrie", "Musketeer", "Mini P.E.K.K.A", "Giant", "Wizard", "Ice Golem", "Dart Goblin",
      "Inferno Tower", "Rocket", "Balloon", "Giant Skeleton", "Prince", "Dark Prince", "Executioner", "Bowler", "Hunter",
      "X-Bow", "Tornado", "Goblin Barrel", "Guards", "Skeleton Army", "Electro Dragon", "Cannon Cart", "Wall Breakers",
      "Royal Giant", "Elite Barbarians", "Barbarians", "Minion Horde", "Rascals", "Firecracker", "Royal Hogs", "Goblin Cage",
      "Battle Ram", "Magic Archer", "Lava Hound", "Golem", "Witch", "Baby Dragon", "Heal Spirit", "Electro Spirit",
      "Fire Spirit", "Ice Spirit", "Zap", "Arrows", "Poison", "Freeze", "Lightning", "Mirror", "Clone", "Rage",
      "Log", "Earthquake", "Tombstone", "Goblin Hut", "Barbarian Hut", "Furnace", "Goblin Drill", "Tesla", "Bomb Tower"
    ]
  },
  "cars": {
    name: "سەیارە",
    items: [
      "BMW", "Mercedes-Benz", "Toyota", "Ferrari", "Ford", "Audi", "Tesla", "Honda", "Lamborghini", "Porsche",
      "Bugatti", "Nissan", "Chevrolet", "Dodge", "Jeep", "Kia", "Hyundai", "Mazda", "Lexus", "Range Rover",
      "Land Cruiser", "Hilux", "Camry", "Corolla", "Avalon", "Yaris", "Prado", "Santa Fe", "Tucson", "Elantra",
      "Sonata", "Accent", "Sportage", "Sorento", "Optima", "Cerato", "Picanto", "Rio", "Mohave", "Malibu",
      "Camaro", "Corvette", "Tahoe", "Suburban", "Silverado", "Impala", "Cruze", "Opel", "Charger", "Challenger",
      "Durango", "Ram", "Shelby", "Mustang", "Expedition", "Raptor", "Golf", "Passat", "Tiguan", "Touareg",
      "Beetle", "Fiat", "Alfa Romeo", "Maserati", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Lotus",
      "Jaguar", "Mini Cooper", "Volvo", "Saab", "Skoda", "Seat", "Peugeot", "Renault", "Citroen", "Bugatti Chiron",
      "Koenigsegg", "Pagani", "Hummer", "Cadillac", "Lincoln", "GMC", "Acadia", "Yukon", "Infiniti", "Acura",
      "Subaru", "Mitsubishi", "Pajero", "Lancer", "Pickup Truck", "Taxi", "Bus"
    ]
  },
  "animals": {
    name: "ئاژەڵ",
    items: [
      "شێر", "پشیلە", "سەگ", "مار", "ئەسپ", "گورگ", "مەیمون", "فیل", "کەروێشک", "هەڵۆ",
      "بەور", "ماسی", "مانگا", "مەڕ", "بزن", "کەر", "توتی", "کۆتر", "مریشک", "کەڵەشێر",
      "قەل", "نەعامە", "حوشتر", "زەڕافە", "کەر کێوی", "ڕێوی", "چەقەڵ", "کەمتیار", "دۆڵفین", "نەهەنگ",
      "قرژاڵ", "باڵندە", "پەپولە", "مێش", "مێشوولە", "سیسرک", "جاڵجاڵۆکە", "مارمێلکە", "تەیمانە", "کیسەڵ",
      "بۆق", "سمۆرە", "ژیشک", "بەراز", "ورچ", "پاندا", "کەنگەر", "کوالا", "شەمشەمەکوێرە", "داڵ",
      "قاز", "مراوی", "پەڕەسێلکە", "کوندەپەپوو", "پەنگوین", "نەهەنگی شین",
      "ئەختەبوت", "گوێچکە ماسی", "سەلەمون", "ماسی تونا", "باز",
      "شاهێن", "پۆڕ", "کەو", "سوێسکە", "بزنی کێوی", "خەزال", "مامز", "بەرازی کێوی",
      "مشک", "جرج", "هامستەر", "کرم", "هەنگ", "زیڕە", "قۆڕ", "کرما دەریایی", "ئەسپێ",
      "سەگی ئاوی", "مەیمونی بچوک", "گۆرێلا", "شمپانزی", "مێرولە", "کوللە", "تەرزە", "قاڵۆنچە", "پشیلەی کێوی"
    ]
  },
  "cities": {
    name: "شارەکان",
    items: [
      "سلێمانی", "هەولێر", "دهۆک", "کەرکوک", "هەڵەبجە", "زاخۆ", "ڕانیە", "کەلار", "چەمچەماڵ", "سۆران",
      "کۆیە", "پێنجوێن", "سەیدسادق", "دەربەندیخان", "قەڵادزێ", "ئاکرێ", "شەقڵاوە", "خەلیفان", "چۆمان", "ڕەواندز",
      "هیران", "شێخان", "بەردەڕەش", "ئامێدی", "شێلادزێ", "سێمێل", "خانەقین", "مەندەلی", "توزخورماتوو", "کفری",
      "حاجی ئۆمەران", "ماوەت", "چوارتا", "دوکان", "پیرەمەگرون", "بازیان", "تەکیە", "شۆڕش", "بالیسان", "خەلەکان",
      "قەرەداغ", "عەربەت", "خورماڵ", "بیارە", "تەوێڵە", "سیروان", "بەرزنجە", "شارەزوور", "دەشتی هەولێر", "کەسنەزان",
      "بنەسڵاوە", "دارەتوو", "بەحرکە", "مەسیف", "هەریر", "خەبات", "عەنکاوە", "قوشتەپە", "مخمور", "گوێڕ",
      "شنگال", "تەلعەفەر", "حەویجە", "داقوق", "لیلان", "یایچی", "بەریزان", "ئاغجەلەر", "سەنگاو", "باوەنور",
      "ڕزگاری", "سمود", "شێخ باوە", "جەلەولا", "سەعدییە", "قەرەتەپە", "جەبارە", "کۆکس", "باتایە", "سەرسەنگ",
      "دێرەلوک", "قەدش", "بامرنی", "کانی ماسی", "بێگۆڤا", "دەرکار", "باتێفا", "دۆمیس", "فایدی", "کەلەک"
    ]
  },
  "food": {
    name: "خواردن",
    items: [
      "یاپراخ", "کەباب", "برنج", "کوبە", "مەستاو", "فاسۆلیا", "نیسک", "تەشریب", "دۆڵمە", "سەرپێ",
      "قەلیاوە", "کوتڵک", "شفتە", "شلە", "بامیە", "شڵەمین", "دانولە", "کەشکە", "دۆینە", "تۆراخ",
      "کنگر", "کارگ", "شۆربا", "مریشکی برژاو", "قاز و قورینگ", "باڵەفڕە (باڵی مریشک)", "جگەر", "دڵ",
      "سەروپێ", "پاقلە", "شێلم", "نۆکاو", "ساوەر", "مەقلوبە", "بریانی", "قۆزی", "خۆورش",
      "شاورمە", "فەلافل", "پیتزا", "بەرگەر", "کێنتاکی", "ساندویچ", "مەعکەرۆنی", "سپاگێتی", "لازانیا", "ستێک",
      "سۆسج", "پەنیری کوردی", "ماست", "کەرە", "ڕۆنی کوردی", "هەنگوین", "دۆشاو", "ڕاشی", "تەحین", "نانی تیری",
      "نانی هەورامی", "کولێرە", "ناوساجی", "کەلەوێ", "برنج و شلە", "فاسۆلیای وشک", "پەتاتەی سورەوکراو", "زەڵاتە", "ترشیات", "ماست و خەیار",
      "جاجیک", "هێلکە و ڕۆن", "هێلکە کوڵاو", "قەیماغ", "گەزنە", "عەدەس", "لۆبیا", "بیبەری تون", "خەیار", "تەماتە",
      "باینجان", "کولەکە", "گەمە", "قەیسی", "هەنجیر", "هەنار", "تری", "کاڵەک", "شوتی", "چا",
      "قاوە", "شەربەت", "ئاوی هەنار", "مۆز", "سێو", "پرتەقاڵ", "لالەنگی", "کەلەرم", "قەرنابیت", "سپێناخ"
    ]
  },
  "wwe": {
    name: "موسارەعە",
    items: [
      "John Cena", "The Rock", "Roman Reigns", "Undertaker", "Stone Cold Steve Austin",
      "Triple H", "Randy Orton", "Brock Lesnar", "Cody Rhodes", "Seth Rollins",
      "CM Punk", "Rey Mysterio", "Hulk Hogan", "Shawn Michaels", "Edge",
      "Batista", "Kane", "Big Show", "Chris Jericho", "Kurt Angle",
      "Ric Flair", "Bret Hart", "Macho Man Randy Savage", "Andre the Giant",
      "Ultimate Warrior", "Goldberg", "Sting", "AJ Styles", "Daniel Bryan",
      "Drew McIntyre", "The Miz", "Sheamus", "Jeff Hardy", "Matt Hardy", "Rob Van Dam",
      "Booker T", "Eddie Guerrero", "JBL", "Mick Foley", "Diesel (Kevin Nash)",
      "Logan Paul", "LA Knight", "Finn Balor", "Gunther", "Jey Uso", "Jimmy Uso", "Solo Sikoa",
      "Bray Wyatt", "Braun Strowman", "Bobby Lashley", "Mark Henry"
    ]
  }
};

// --- State ---
let state = {
  players: [], // Array of role objects: { isImposter: boolean, word: string }
  currentPlayerIndex: 0,
  secretWord: "",
  timerInterval: null,
  seconds: 0
};

// --- Initialization ---
window.onload = function () {
  const select = document.getElementById('category-select');
  for (const [key, value] of Object.entries(categories)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = value.name;
    select.appendChild(option);
  }
  const footballHintGroup = document.getElementById('football-hint-group');
  const customCategoryGroup = document.getElementById('custom-category-group');
  const customWordsInput = document.getElementById('custom-words');

  // Load saved custom words
  const savedWords = localStorage.getItem('custom_imposter_words');
  if (savedWords) {
    customWordsInput.value = savedWords;
  }

  // Save words on change
  customWordsInput.addEventListener('input', () => {
    localStorage.setItem('custom_imposter_words', customWordsInput.value);
  });

  window.setHintMode = function (val) {
    document.getElementById('football-hint-val').value = val;
    document.getElementById('btn-with-hint').classList.toggle('active', val);
    document.getElementById('btn-no-hint').classList.toggle('active', !val);
  };

  function checkHintsAvailable() {
    const categoryKey = select.value;

    // Show Custom Category textarea
    if (categoryKey === 'custom') {
      customCategoryGroup.style.display = 'block';
    } else {
      customCategoryGroup.style.display = 'none';
    }

    // Specifically show ONLY for football as per scenario
    if (categoryKey === 'football') {
      footballHintGroup.style.display = 'block';
    } else {
      footballHintGroup.style.display = 'none';
    }
  }

  select.addEventListener('change', checkHintsAvailable);

  // Initial check
  if (Object.keys(categories).length > 0) {
    select.value = Object.keys(categories)[0]; // Ensure header is consistent
    checkHintsAvailable();
  }
};

// --- Core Functions ---

function startGame() {
  const playerCount = parseInt(document.getElementById('player-count').value);
  const imposterCount = parseInt(document.getElementById('imposter-count').value);
  const categoryKey = document.getElementById('category-select').value;

  if (!categoryKey) {
    alert("تکایە جۆرێک (Category) هەڵبژێرە!");
    return;
  }

  // Get football-specific hint choice
  let showHints = false;
  if (categoryKey === 'football') {
    showHints = document.getElementById('football-hint-val').value === 'true';
  } else if (categoryKey !== 'custom' && categoryKey !== '') {
    const categoryData = categories[categoryKey];
    if (categoryData && categoryData.items) {
      showHints = categoryData.items.length > 0 && typeof categoryData.items[0] === 'object';
    }
  }


  if (playerCount < 3) {
    alert("ژمارەی یاریزان نابێت لە ٣ کەس کەمتر بێت!");
    return;
  }

  if (imposterCount >= playerCount) {
    alert("ژمارەی ئیمپۆستەر نابێت لە یاریزانەکان زیاتر بێت!");
    return;
  }

  // Setup Data
  let randomItem;
  if (categoryKey === 'custom') {
    const rawWords = document.getElementById('custom-words').value;
    const wordsArray = rawWords.split(/[،,]+/).map(w => w.trim()).filter(w => w.length > 0);

    if (wordsArray.length < 2) {
      alert("تکایە بەلایەنی کەم ٢ وشە بنووسە بۆ دەستپێکردنی جۆری تایبەت!");
      return;
    }
    randomItem = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  } else {
    const categoryData = categories[categoryKey];
    randomItem = categoryData.items[Math.floor(Math.random() * categoryData.items.length)];
  }

  // Handle Object vs String items
  if (typeof randomItem === 'object') {
    state.secretWord = randomItem.name;
    state.secretHint = showHints ? randomItem.hint : "";
  } else {
    state.secretWord = randomItem;
    state.secretHint = ""; // No hint for normal categories
  }

  // Build Roles array
  let roles = Array(playerCount).fill(false); // false = innocent
  let assignedImposters = 0;
  while (assignedImposters < imposterCount) {
    let randIndex = Math.floor(Math.random() * playerCount);
    if (!roles[randIndex]) {
      roles[randIndex] = true; // true = imposter
      assignedImposters++;
    }
  }

  // Create Player Objects
  state.players = roles.map(isImp => ({
    isImposter: isImp,
    word: isImp ? "IMPOSTER" : state.secretWord
  }));

  state.currentPlayerIndex = 0;
  state.currentCategory = categoryKey;

  // Switch Screen
  switchScreen('game-screen');
  updateGameScreen();
}

function updateGameScreen() {
  const playerNum = state.currentPlayerIndex + 1;
  document.getElementById('player-indicator').textContent = `یاریزان ${playerNum} `;

  // Reset card state
  document.getElementById('card-front').style.display = 'flex';
  document.getElementById('card-back').classList.add('hidden');
  document.getElementById('card-back').style.display = 'none';
  document.getElementById('role-content').classList.remove('visible', 'imposter-text', 'player-text');

  // Buttons
  document.getElementById('action-btn').classList.remove('hidden');
  document.getElementById('hide-btn').classList.add('hidden');
}

function revealRole() {
  const cardBack = document.getElementById('card-back');
  const cardFront = document.getElementById('card-front');

  // If already revealed, do nothing
  if (cardBack.style.display === 'flex') return;

  const player = state.players[state.currentPlayerIndex];
  const roleContent = document.getElementById('role-content');

  cardFront.style.display = 'none';
  cardBack.classList.remove('hidden');
  cardBack.style.display = 'flex';

  // Populate Content
  if (player.isImposter) {
    let imposterHtml = "تۆ ئیمپۆستەری!<br><span style='font-size:1rem'>(درۆزنەکە)</span> 🤫";
    // Show hint if available
    if (state.secretHint) {
      imposterHtml += `< br > <br><span style='font-size:0.9rem; color:#ccc;'>لێزانی (Hint):<br>${state.secretHint}</span>`;
    }
    roleContent.innerHTML = imposterHtml;
    roleContent.className = "role-text visible imposter-text";
  } else {
    let playerHtml = `وشەکە:<br><br>${player.word}`;
    // For WWE only, show hint to regular players too
    if (state.currentCategory === 'wwe' && state.secretHint) {
      playerHtml += `<br><br><span style='font-size:0.9rem; color:#ccc;'>لێزانی (Hint):<br>${state.secretHint}</span>`;
    }
    roleContent.innerHTML = playerHtml;
    roleContent.className = "role-text visible player-text";
  }

  // Swap Buttons
  document.getElementById('action-btn').classList.add('hidden');
  document.getElementById('hide-btn').classList.remove('hidden');
}

function hideRole() {
  state.currentPlayerIndex++;

  if (state.currentPlayerIndex >= state.players.length) {
    endGame();
  } else {
    updateGameScreen();
  }
}

function endGame() {
  const randomPlayer = Math.floor(Math.random() * state.players.length) + 1;
  document.getElementById('first-player-msg').innerHTML = `یاریزانی <span>${randomPlayer}</span> دەستپێدەکات!`;

  switchScreen('result-screen');
  startTimer(true);
}

function resetGame() {
  stopTimer();
  state.seconds = 0;
  document.getElementById('timer').textContent = "00:00";
  switchScreen('setup-screen');
}

// --- Utilities ---

function switchScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

let timerRunning = false;
function toggleTimer() {
  if (timerRunning) stopTimer();
  else startTimer();
}

function startTimer(reset = false) {
  if (reset) {
    state.seconds = 0;
  }
  if (state.timerInterval) clearInterval(state.timerInterval);
  timerRunning = true;

  state.timerInterval = setInterval(() => {
    state.seconds++;
    const mins = Math.floor(state.seconds / 60).toString().padStart(2, '0');
    const secs = (state.seconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${mins}:${secs}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
  timerRunning = false;
}
