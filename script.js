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
      { name: "تیاگۆ سیلڤا", hint: "بەڕازیل" }, { name: "ئێن گۆڵۆ کانتێ", hint: "فەڕەنسا" }, { name: "پۆڵ پۆگبا", hint: "فەڕەنسا" }, { name: "ڕۆمیلۆ لوکاکو", hint: "بەلجیکا" }, { name: "ئەنجێل دی ماریا", hint: "ئەرجەنتین" },
      { name: "ئەلیخاندرۆ گارناچۆ", hint: "ئەرجەنتین" }, { name: "خولین ئەلڤارێز", hint: "ئەرجەنتین" }, { name: "ئینزۆ فێرناندێز", hint: "ئەرجەنتین" }, { name: "ئەلێکسیس ماک ئەلیستەر", hint: "ئەرجەنتین" }, { name: "ئیمیلیانۆ مارتینێز", hint: "ئەرجەنتین" },
      { name: "ناسان ئاکێ", hint: "هۆڵەندا" }, { name: "فیل فۆدێن", hint: "ئینگلتەرا" }, { name: "جاک گرێلیش", hint: "ئینگلتەرا" }, { name: "دێکلان ڕایس", hint: "ئینگلتەرا" }, { name: "مارتن ئۆدیگارد", hint: "نەرویج" },
      { name: "ویلیام سالیبا", hint: "فەڕەنسا" }, { name: "گابرێل خیسوس", hint: "بەڕازیل" }, { name: "قابرێل مارتینێلی", hint: "بەڕازیل" }, { name: "محمد قودوس", hint: "غانا" }, { name: "داروین نونێز", hint: "ئۆرۆگوای" },
      { name: "لویس دیاز", hint: "کۆڵۆمبیا" }, { name: "دۆمینیک سۆبۆسلای", hint: "هەنگاریا" }, { name: "ئەندی ڕۆبەرتسۆن", hint: "سکۆتلەندا" }, { name: "سادۆ مانێ", hint: "سەنیگال" }, { name: "ڕۆبەرتۆ فێرمینیۆ", hint: "بەڕازیل" },
      { name: "فابینیۆ", hint: "بەڕازیل" }, { name: "جۆردن هێندێرسۆن", hint: "ئینگلتەرا" }, { name: "جەیمس میلنەر", hint: "ئینگلتەرا" }, { name: "نابی کەیتا", hint: "غینیا" }, { name: "تیاگۆ ئەلکانتارا", hint: "ئیسپانیا" },
      { name: "دیۆگۆ جۆتا", hint: "پورتوگال" }, { name: "کۆدی گاکپۆ", hint: "هۆڵەندا" }, { name: "هارڤی ئێلیۆت", hint: "ئینگلتەرا" }, { name: "ستێفان بایچێتیچ", hint: "ئیسپانیا" }, { name: "ئیبراهیما کۆناتێ", hint: "فەڕەنسا" },
      { name: "خۆسێ ماریا خیمێنێز", hint: "ئۆرۆگوای" }, { name: "یاسین بۆنۆ", hint: "مەغریب" }, { name: "یوسف نەسیر", hint: "مەغریب" }, { name: "سۆفیان ئەمرابەت", hint: "مەغریب" }, { name: "حەکیم زیاش", hint: "مەغریب" },
      { name: "نەسیر مەزراوی", hint: "مەغریب" }, { name: "فڕانک کێسی", hint: "کۆتدیڤوار" }, { name: "ئیسماعیل بن ناسر", hint: "جەزائیر" }, { name: "ئیسلام سلێمانی", hint: "جەزائیر" }, { name: "میڕالێم پیانیچ", hint: "بۆسنیا" },
      // --- New Players (100+) ---
      { name: "فلۆریان ڤێرتز", hint: "ئەڵمانیا" }, { name: "گرانیت ژاکا", hint: "سویسرا" }, { name: "ڤیکتۆر بۆنیفەیس", hint: "نەیجیریا" }, { name: "نیکۆ ویلیامز", hint: "ئیسپانیا" }, { name: "لامین یامال", hint: "ئیسپانیا" },
      { name: "دانی ئۆلمۆ", hint: "ئیسپانیا" }, { name: "کۆڵ پاڵمەر", hint: "ئینگلتەرا" }, { name: "ئۆڵی واتکینس", hint: "ئینگلتەرا" }, { name: "کۆبی ماینۆ", hint: "ئینگلتەرا" }, { name: "گابریێل ماگالیس", hint: "بەڕازیل" },
      { name: "دەیڤید ڕایا", hint: "ئیسپانیا" }, { name: "کای هاڤێرتز", hint: "ئەڵمانیا" }, { name: "جەیمس مادیسۆن", hint: "ئینگلتەرا" }, { name: "کریستیان ڕۆمێرۆ", hint: "ئەرجەنتین" }, { name: "گویلیلمۆ ڤیکاریۆ", hint: "ئیتاڵیا" },
      { name: "میکی ڤان دی ڤێن", hint: "هۆڵەندا" }, { name: "ئەلێکساندەر ئیساک", hint: "سوید" }, { name: "برونۆ گیمارایس", hint: "بەڕازیل" }, { name: "ئەنتۆنی گۆردۆن", hint: "ئینگلتەرا" }, { name: "دۆگلاس لویس", hint: "بەڕازیل" },
      { name: "لیۆن بایلی", hint: "جامایکا" }, { name: "پاو تۆرێس", hint: "ئیسپانیا" }, { name: "جۆن ستۆنز", hint: "ئینگلتەرا" }, { name: "کایل واکەر", hint: "ئینگلتەرا" }, { name: "مانوێل ئەکانجی", hint: "سویسرا" },
      { name: "جۆشکۆ گڤاردیۆڵ", hint: "کرواتیا" }, { name: "ماتۆ کۆڤاچیچ", hint: "کرواتیا" }, { name: "فێرلان مێندی", hint: "فەڕەنسا" }, { name: "دانی کارڤاخاڵ", hint: "ئیسپانیا" }, { name: "براهیم دیاز", hint: "مەغریب" },
      { name: "ئیندریک", hint: "بەڕازیل" }, { name: " ساموێل لینۆ", hint: "بەڕازیل" }, { name: "ڕۆدریگۆ دی پۆڵ", hint: "ئەرجەنتین" }, { name: "ناهوێل مۆلینا", hint: "ئەرجەنتین" }, { name: "نیکۆ شلۆتەربێک", hint: "ئەڵمانیا" },
      { name: "گریگۆر کۆبێل", hint: "سویسرا" }, { name: "ماتس هەمڵس", hint: "ئەڵمانیا" }, { name: "جولیان براندت", hint: "ئەڵمانیا" }, { name: "نیکلاس فولکروگ", hint: "ئەڵمانیا" }, { name: "دوشان ڤلاهۆڤیچ", hint: "سربیا" },
      { name: "فێدێریکۆ کیێزا", hint: "ئیتاڵیا" }, { name: "ئادریان ڕابیۆ", hint: "فەڕەنسا" }, { name: "گڵیسۆن بریمەر", hint: "بەڕازیل" }, { name: "هاکان چالهانۆغلو", hint: "تورکیا" }, { name: "نیکۆلۆ بارێلا", hint: "ئیتاڵیا" },
      { name: "ئەلێساندرۆ باستۆنی", hint: "ئیتاڵیا" }, { name: "مارکۆس تورام", hint: "فەڕەنسا" }, { name: "یان سۆمەر", hint: "سویسرا" }, { name: "کریستیان پۆلیسیک", hint: "ئەمریکا" }, { name: "ڕوبن لۆفتوس-چیک", hint: "ئینگلتەرا" },
      { name: "تیجانی ڕێیندەرز", hint: "هۆڵەندا" }, { name: "ستانیسلاڤ لۆبۆتکا", hint: "سلۆڤاکیا" }, { name: "لۆرێنزۆ پێلێگرینی", hint: "ئیتاڵیا" }, { name: "برادلی بارکۆلا", hint: "فەڕەنسا" }, { name: "ڤیتینها", hint: "پورتوگال" },
      { name: "وارن زایر-ئیمری", hint: "فەڕەنسا" }, { name: "دیێگۆ مارادۆنا", hint: "ئەرجەنتین" }, { name: "یۆهان کرۆیف", hint: "هۆڵەندا" }, { name: "فڕانز بێکنباوەر", hint: "ئەڵمانیا" }, { name: "میشێل پلاتینی", hint: "فەڕەنسا" },
      { name: "جۆرج بێست", hint: "ئێرلەندای باکوور" }, { name: "فێرێنتس پوشکاش", hint: "هەنگاریا" }, { name: "ئەلفریدۆ دی ستیفانۆ", hint: "ئیسپانیا" }, { name: "ئۆزیبیۆ", hint: "پورتوگال" }, { name: "بابی چارڵتۆن", hint: "ئینگلتەرا" },
      { name: "گێرد مۆلەر", hint: "ئەڵمانیا" }, { name: "مارکۆ ڤان باستن", hint: "هۆڵەندا" }, { name: "ڕوود گولیت", hint: "هۆڵەندا" }, { name: "فڕانک ڕایکارد", hint: "هۆڵەندا" }, { name: "لۆتار ماتیۆس", hint: "ئەڵمانیا" },
      { name: "ئۆلیڤەر کان", hint: "ئەڵمانیا" }, { name: "فلیپ لام", hint: "ئەڵمانیا" }, { name: "مایکڵ بالاک", hint: "ئەڵمانیا" }, { name: "میرۆسلاڤ کلۆزە", hint: "ئەڵمانیا" }, { name: "باستۆن شواینشتایگەر", hint: "ئەڵمانیا" },
      { name: "چابی ئەلۆنسۆ", hint: "ئیسپانیا" }, { name: "ڤیکتۆر ڤاڵدێس", hint: "ئیسپانیا" }, { name: "داڤید ڤیا", hint: "ئیسپانیا" }, { name: "فێرناندۆ تۆرێس", hint: "ئیسپانیا" }, { name: "خافێر ماسچێرانیۆ", hint: "ئەرجەنتین" },
      { name: "خوان ڕۆمان ڕیکێڵمی", hint: "ئەرجەنتین" }, { name: "گابریێل باتیستۆتا", hint: "ئەرجەنتین" }, { name: "هێرنان کرێسپۆ", hint: "ئەرجەنتین" }, { name: "خافێر زانێتی", hint: "ئەرجەنتین" }, { name: "فڕانکۆ بارێزی", hint: "ئیتاڵیا" },
      { name: "ئەلێساندرۆ دێل پیێرۆ", hint: "ئیتاڵیا" }, { name: "فڕانچێسکۆ تۆتی", hint: "ئیتاڵیا" }, { name: "ئەندریا پیرلۆ", hint: "ئیتاڵیا" }, { name: "ڕۆبێرتۆ باجیۆ", hint: "ئیتاڵیا" }, { name: "فلیپۆ ئینزاگی", hint: "ئیتاڵیا" },
      { name: "جیانلوکا زامبرۆتا", hint: "ئیتاڵیا" }, { name: "فابیەن بارتێز", hint: "فەڕەنسا" }, { name: "لیلیان تورام", hint: "فەڕەنسا" }, { name: "مارسێل دێسایلی", hint: "فەڕەنسا" }, { name: "کڵۆد ماکێلێلێ", hint: "فەڕەنسا" },
      { name: "ئیریک کانتۆنا", hint: "فەڕەنسا" }, { name: "داڤید تریزێگێ", hint: "فەڕەنسا" }, { name: "مایکڵ ئۆوێن", hint: "ئینگلتەرا" }, { name: "ئەلان شیرەر", hint: "ئینگلتەرا" }, { name: "ڕاول گۆنزالێز", hint: "ئیسپانیا" },
      { name: "گاریس بەیڵ", hint: "وێڵز" }, { name: "لویس فیگۆ", hint: "پورتوگال" }, { name: "گاری نێڤڵ", hint: "ئینگلتەرا" }, { name: "ڕیۆ فێردیناند", hint: "ئینگلتەرا" }, { name: "جۆن تێری", hint: "ئینگلتەرا" },
      { name: "ئاشلی کۆڵ", hint: "ئینگلتەرا" }, { name: "پیتەر چیک", hint: "چیک" }
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
  const footballHintGroup = document.getElementById('football-hint-group');

  window.setHintMode = function (val) {
    document.getElementById('football-hint-val').value = val;
    document.getElementById('btn-with-hint').classList.toggle('active', val);
    document.getElementById('btn-no-hint').classList.toggle('active', !val);
  };

  function checkHintsAvailable() {
    const categoryKey = select.value;

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

  // Get football-specific hint choice
  let showHints = false;
  if (categoryKey === 'football') {
    showHints = document.getElementById('football-hint-val').value === 'true';
  } else {
    // Other categories that might have hints (like WWE) - optional behavior
    // For now, based on scenario, we default to showing them OR keeping it simpler
    const categoryData = categories[categoryKey];
    showHints = categoryData.items.length > 0 && typeof categoryData.items[0] === 'object';
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
  const categoryData = categories[categoryKey];
  const randomItem = categoryData.items[Math.floor(Math.random() * categoryData.items.length)];

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
