// --- Data ---
const categories = {
  "football": {
    name: "یاریزانی تۆپی پێ",
    items: [
      { name: "لیۆنێل مێسی", hint: "ئەرجەنتین" }, { name: "کریستیانۆ ڕۆناڵدۆ", hint: "پورتوگال" }, { name: "کیلیان مباپێ", hint: "فەڕەنسا" }, { name: "ئێرلینگ هالاند", hint: "نەرویج" }, { name: "کەریم بەنزیمە", hint: "فەڕەنسا" },
      { name: "ڕۆبەرت لیڤاندۆڤسکی", hint: "پۆڵەندا" }, { name: "لۆکا مۆدریچ", hint: "کرواتیا" }, { name: "کیڤن دی برۆین", hint: "بەلجیکا" }, { name: "محەمەد سەلاح", hint: "میسر" }, { name: "نەیمار جونیۆر", hint: "بەڕازیل" },
      { name: "ڤینیسیۆس جونیۆر", hint: "بەڕازیل" }, { name: "یۆرگن کڵۆپ (Rahêner)", hint: "ئەڵمانیا" }, { name: "پیپ گواردیۆڵا (Rahêner)", hint: "ئیسپانیا" }, { name: "زینەدین زێدان", hint: "فەڕەنسا" }, { name: "چاڤی هێرناندێز", hint: "ئیسپانیا" },
      { name: "ئەندرێس ئینێستا", hint: "ئیسپانیا" }, { name: "سێرجیۆ ڕامۆس", hint: "ئیسپانیا" }, { name: "ڤێرجڵ ڤان دایک", hint: "هۆڵەندا" }, { name: "تۆنی کروس", hint: "ئەڵمانیا" }, { name: "تۆماس مۆلەر", hint: "ئەڵمانیا" },
      { name: "مانیۆل نۆیەر", hint: "ئەڵمانیا" }, { name: "تایبۆ کۆرتوا", hint: "بەلجیکا" }, { name: "مارک ئەندریە تێر شتێگن", hint: "ئەڵمانیا" }, { name: "ئەلیسۆن بێکەر", hint: "بەڕازیل" }, { name: "ئێدێرسۆن مۆڕایس", hint: "بەڕازیل" },
      { name: "یان ئۆبلاک", hint: "سلۆڤینیا" }, { name: "ئەنتۆنیۆ ڕودیگێر", hint: "ئەڵمانیا" }, { name: "ڕوبن دیاز", hint: "پورتوگال" }, { name: "ماڕکینیۆس", hint: "بەڕازیل" }, { name: "ئەشرەف حەکیمی", hint: "مەغریب" },
      { name: "ترێنت ئەلێکساندەر ئارنۆڵد", hint: "ئینگلتەرا" }, { name: "ئەلفۆنسۆ دەیڤز", hint: "کەنەدا" }, { name: "جۆشوا کیمیچ", hint: "ئەڵمانیا" }, { name: "ڕۆدری هێرناندێز", hint: "ئیسپانیا" }, { name: "ئیلکای گۆندۆگان", hint: "ئەڵمانیا" },
      { name: "بێرناردۆ سیلڤا", hint: "پورتوگال" }, { name: "جوود بێلینگهام", hint: "ئینگلتەرا" }, { name: "جەمال موسیالا", hint: "ئەڵمانیا" }, { name: "بۆکایۆ ساکا", hint: "ئینگلتەرا" }, { name: "مارکۆس ڕاشفۆرد", hint: "ئینگلتەرا" },
      { name: "هاری کەین", hint: "ئینگلتەرا" }, { name: "هیۆنگ مین سۆن", hint: "کۆریای باشوور" }, { name: "ڕافایل لیاو", hint: "پورتوگال" }, { name: "ڤیکتۆر ئۆسیمین", hint: "نەیجیریا" }, { name: "خڤیچا کڤاراتسخێلیا", hint: "جۆرجیا" },
      { name: "پاوڵۆ دیبالا", hint: "ئەرجەنتین" }, { name: "لاوتارۆ مارتینێز", hint: "ئەرجەنتین" }, { name: "ئەنتوان گریزمان", hint: "فەڕەنسا" }, { name: "عوسمان دیمبێلی", hint: "فەڕەنسا" }, { name: "فرێنکی دی یۆنگ", hint: "هۆڵەندا" },
      { name: "پیدری گۆنزالێز", hint: "ئیسپانیا" }, { name: "گاڤی پاێز", hint: "ئیسپانیا" }, { name: "ئانسو فاتی", hint: "ئیسپانیا" }, { name: "ئەلیخاندرۆ باڵدێ", hint: "ئیسپانیا" }, { name: "ڕۆناڵد ئاراوخۆ", hint: "ئۆرۆگوای" },
      { name: "جوڵس کوندێ", hint: "فەڕەنسا" }, { name: "ئیدێر میلیتاو", hint: "بەڕازیل" }, { name: "دەیڤید ئالابا", hint: "نەمسا" }, { name: "فێدێریکۆ ڤاڵڤێردی", hint: "ئۆرۆگوای" }, { name: "ئۆڕێلیەن چوامێنی", hint: "فەڕەنسا" },
      { name: "ئێدواردۆ کاماڤینگا", hint: "فەڕەنسا" }, { name: "ڕۆدریگۆ گۆێس", hint: "بەڕازیل" }, { name: "ڕیاد مەحرەز", hint: "جەزائیر" }, { name: "کاڕلۆس کاسێمیڕۆ", hint: "بەڕازیل" }, { name: "ڕافایل ڤاران", hint: "فەڕەنسا" },
      { name: "برونۆ فێرناندێز", hint: "پورتوگال" }, { name: "لیرۆی سانێ", hint: "ئەڵمانیا" }, { name: "کینگسلی کۆمان", hint: "فەڕەنسا" }, { name: "سێرج گنابری", hint: "ئەڵمانیا" }, { name: "لیۆن گۆرێتزکا", hint: "ئەڵمانیا" },
      { name: "ماتێس دی لیخت", hint: "هۆڵەندا" }, { name: "دایۆت ئوپامێکانۆ", hint: "فەڕەنسا" }, { name: "تیۆ هێرناندێز", hint: "فەڕەنسا" }, { name: "مایک ماینان", hint: "فەڕەنسا" }, { name: "ئۆلیڤیە ژیرۆ", hint: "فەڕەنسا" },
      { name: "زڵاتان ئیبراهیمۆڤیچ", hint: "سوید" }, { name: "لویس سوارێز", hint: "ئۆرۆگوای" }, { name: "سێرجیۆ بۆسکێتس", hint: "ئیسپانیا" }, { name: "جۆردی ئەلبا", hint: "ئیسپانیا" }, { name: "جێرارد پیکێ", hint: "ئیسپانیا" },
      { name: "کارلەس پویۆڵ", hint: "ئیسپانیا" }, { name: "ڕۆناڵدینیۆ گاوتشۆ", hint: "بەڕازیل" }, { name: "ڕیڤاڵدۆ", hint: "بەڕازیل" }, { name: "ڕۆناڵدۆ نازاریۆ", hint: "بەڕازیل" }, { name: "ڕۆبێرتۆ کارلۆس", hint: "بەڕازیل" },
      { name: "کافو", hint: "بەڕازیل" }, { name: "پاوڵۆ ماڵدینی", hint: "ئیتاڵیا" }, { name: "ئەلیساندرۆ نێستا", hint: "ئیتاڵیا" }, { name: "فابیۆ کاناڤارۆ", hint: "ئیتاڵیا" }, { name: "جیانلویجی بوفۆن", hint: "ئیتاڵیا" },
      { name: "ئیکەر کاسیاس", hint: "ئیسپانیا" }, { name: "سێرجیۆ ئەگوێرۆ", hint: "ئەرجەنتین" }, { name: "داڤید سیلڤا", hint: "ئیسپانیا" }, { name: "یایا تۆرێ", hint: "کۆتدیڤوار" }, { name: "دیدێە دێرۆگبا", hint: "کۆتدیڤوار" },
      { name: "فرانک لامپارد", hint: "ئینگلتەرا" }, { name: "ستیڤن جێرارد", hint: "ئینگلتەرا" }, { name: "واین ڕوونی", hint: "ئینگلتەرا" }, { name: "پاوڵ سکۆڵز", hint: "ئینگلتەرا" }, { name: "ڕایان گیگز", hint: "وێڵز" },
      { name: "دەیڤید بێکام", hint: "ئینگلتەرا" }, { name: "تیێری هێنری", hint: "فەڕەنسا" }, { name: "پاتریک ڤیێرا", hint: "فەڕەنسا" }, { name: "دێنیس بێرکامپ", hint: "هۆڵەندا" }, { name: "ڕوود ڤان ن نیستەلڕۆی", hint: "هۆڵەندا" },
      { name: "ڕۆبن ڤان پێرسی", hint: "هۆڵەندا" }, { name: "ئاریێن ڕۆبن", hint: "هۆڵەندا" }, { name: "وێسلی سنایدەر", hint: "هۆڵەندا" }, { name: "فڕانک ڕیبێری", hint: "فەڕەنسا" }, { name: "ماڕکۆ ڕیۆس", hint: "ئەڵمانیا" },
      { name: "تیاگۆ سیلڤا", hint: "بەڕازیل" }, { name: "ئێن گۆڵۆ کانتێ", hint: "فەڕەنسا" }, { name: "پۆڵ پۆگبا", hint: "فەڕەنسا" }, { name: "لوکا کوکو", hint: "بەلجیکا" }, { name: "ئەنجێل دی ماریا", hint: "ئەرجەنتین" },
      { name: "ئەلیخاندرۆ گارناچۆ", hint: "ئەرجەنتین" }, { name: "خولین ئەلڤارێز", hint: "ئەرجەنتین" }, { name: "ئینزۆ فێرناندێز", hint: "ئەرجەنتین" }, { name: "ئەلێکسیس ماک ئەلیستەر", hint: "ئەرجەنتین" }, { name: "ئیمیلیانۆ مارتینێز", hint: "ئەرجەنتین" },
      { name: "ناسان ئاکێ", hint: "هۆڵەندا" }, { name: "فیل فۆدێن", hint: "ئینگلتەرا" }, { name: "جاک گرێلیش", hint: "ئینگلتەرا" }, { name: "دێکلان ڕایس", hint: "ئینگلتەرا" }, { name: "مارتن ئۆدیگارد", hint: "نەرویج" },
      { name: "ویلیام سالیبا", hint: "فەڕەنسا" }, { name: "گابرێل خیسوس", hint: "بەڕازیل" }, { name: "قابرێل مارتینێلی", hint: "بەڕازیل" }, { name: "محمد قودوس", hint: "غانا" }, { name: "داروین نونێز", hint: "ئۆرۆگوای" },
      { name: "لویس دیاز", hint: "کۆڵۆمبیا" }, { name: "دۆمینیک سۆبۆسلای", hint: "هەنگاریا" }, { name: "محەمەد سەڵاح", hint: "میسر" }, { name: "فیرجیل ڤان دایک", hint: "هۆڵەندا" }, { name: "ئەلیسۆن", hint: "بەڕازیل" },
      { name: "ترێنت ئارنۆڵد", hint: "ئینگلتەرا" }, { name: "ئەندی ڕۆبەرتسۆن", hint: "سکۆتلەندا" }, { name: "سادۆ مانێ", hint: "سەنیگال" }, { name: "ڕۆبەرتۆ فێرمینیۆ", hint: "بەڕازیل" }, { name: "فابینیۆ", hint: "بەڕازیل" },
      { name: "جۆردن هێندێرسۆن", hint: "ئینگلتەرا" }, { name: "جەیمس میلنەر", hint: "ئینگلتەرا" }, { name: "نابی کەیتا", hint: "غینیا" }, { name: "تیاگۆ ئەلکانتارا", hint: "ئیسپانیا" }, { name: "دیۆگۆ جۆتا", hint: "پورتوگال" },
      { name: "کۆدی گاکپۆ", hint: "هۆڵەندا" }, { name: "هارڤی ئێلیۆت", hint: "ئینگلتەرا" }, { name: "ستێفان بایچێتیچ", hint: "ئیسپانیا" }, { name: "ئیبراهیما کۆناتێ", hint: "فەڕەنسا" }, { name: "خۆسێ ماریا خیمێنێز", hint: "ئۆرۆگوای" },
      { name: "یاسین بۆنۆ", hint: "مەغریب" }, { name: "یوسف نەسیر", hint: "مەغریب" }, { name: "سۆفیان ئەمرابەت", hint: "مەغریب" }, { name: "حەکیم زیاش", hint: "مەغریب" }, { name: "نەسیر مەزراوی", hint: "مەغریب" },
      { name: "فڕانک کێسی", hint: "کۆتدیڤوار" }, { name: "ئیسماعیل بن ناسر", hint: "جەزائیر" }, { name: "ڕیاز مەحرەز", hint: "جەزائیر" }, { name: "ئیسلام سلێمانی", hint: "جەزائیر" }, { name: "میڕالێم پیانیچ", hint: "بۆسنیا" }
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
      { name: "John Cena", hint: "Male" }, { name: "The Rock", hint: "Male" }, { name: "Roman Reigns", hint: "Male" }, { name: "Undertaker", hint: "Male" }, { name: "Stone Cold Steve Austin", hint: "Male" },
      { name: "Triple H", hint: "Male" }, { name: "Randy Orton", hint: "Male" }, { name: "Brock Lesnar", hint: "Male" }, { name: "Cody Rhodes", hint: "Male" }, { name: "Seth Rollins", hint: "Male" },
      { name: "CM Punk", hint: "Male" }, { name: "Rey Mysterio", hint: "Male" }, { name: "Hulk Hogan", hint: "Male" }, { name: "Shawn Michaels", hint: "Male" }, { name: "Edge", hint: "Male" },
      { name: "Batista", hint: "Male" }, { name: "Kane", hint: "Male" }, { name: "Big Show", hint: "Male" }, { name: "Chris Jericho", hint: "Male" }, { name: "Kurt Angle", hint: "Male" },
      { name: "Ric Flair", hint: "Male" }, { name: "Bret Hart", hint: "Male" }, { name: "Macho Man Randy Savage", hint: "Male" }, { name: "Andre the Giant", hint: "Male" },
      { name: "Ultimate Warrior", hint: "Male" }, { name: "Goldberg", hint: "Male" }, { name: "Sting", hint: "Male" }, { name: "AJ Styles", hint: "Male" }, { name: "Daniel Bryan", hint: "Male" },
      { name: "Drew McIntyre", hint: "Male" }, { name: "Becky Lynch", hint: "Female" }, { name: "Charlotte Flair", hint: "Female" }, { name: "Ronda Rousey", hint: "Female" }, { name: "Bianca Belair", hint: "Female" },
      { name: "Rhea Ripley", hint: "Female" }, { name: "Sasha Banks", hint: "Female" }, { name: "Bayley", hint: "Female" }, { name: "Asuka", hint: "Female" }, { name: "Trish Stratus", hint: "Female" }, { name: "Lita", hint: "Female" },
      { name: "The Miz", hint: "Male" }, { name: "Sheamus", hint: "Male" }, { name: "Jeff Hardy", hint: "Male" }, { name: "Matt Hardy", hint: "Male" }, { name: "Rob Van Dam", hint: "Male" },
      { name: "Booker T", hint: "Male" }, { name: "Eddie Guerrero", hint: "Male" }, { name: "JBL", hint: "Male" }, { name: "Mick Foley", hint: "Male" }, { name: "Diesel (Kevin Nash)", hint: "Male" },
      { name: "Logan Paul", hint: "Male" }, { name: "LA Knight", hint: "Male" }, { name: "Finn Balor", hint: "Male" }, { name: "Gunther", hint: "Male" }, { name: "Jey Uso", hint: "Male" }, { name: "Jimmy Uso", hint: "Male" }, { name: "Solo Sikoa", hint: "Male" },
      { name: "Bray Wyatt", hint: "Male" }, { name: "Braun Strowman", hint: "Male" }, { name: "Bobby Lashley", hint: "Male" }, { name: "Mark Henry", hint: "Male" }
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
};

// --- Core Functions ---

function startGame() {
  const playerCount = parseInt(document.getElementById('player-count').value);
  const imposterCount = parseInt(document.getElementById('imposter-count').value);
  const categoryKey = document.getElementById('category-select').value;

  if (playerCount < 3) {
    alert("ژمارەی یاریزان نابێت لە ٣ کەس کەمتر بێت!");
    return;
  }

  if (imposterCount >= playerCount) {
    alert("ژمارەی ئیمپۆستەر نابێت لە یاریزانەکان زیاتر بێت!");
    return;
  }

  // Setup Data
  const categoryData = categories[categoryKey];
  const randomItem = categoryData.items[Math.floor(Math.random() * categoryData.items.length)];

  // Handle Object vs String items
  if (typeof randomItem === 'object') {
    state.secretWord = randomItem.name;
    state.secretHint = randomItem.hint;
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
  document.getElementById('player-indicator').textContent = `یاریزان ${playerNum}`;

  // Reset card state
  document.getElementById('card-front').style.display = 'flex';
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
  cardBack.style.display = 'flex';

  // Populate Content
  if (player.isImposter) {
    let imposterHtml = "تۆ ئیمپۆستەری!<br><span style='font-size:1rem'>(درۆزنەکە)</span> 🤫";
    // Show hint if available
    if (state.secretHint) {
      imposterHtml += `<br><br><span style='font-size:0.9rem; color:#ccc;'>لێزانی (Hint):<br>${state.secretHint}</span>`;
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
  switchScreen('result-screen');
  startTimer(true); // Optional auto start, or let them click
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
