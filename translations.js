// ============================================
// Translations / i18n
// ============================================

const translations = {
    en: {
        // Form labels and placeholders
        'customize-title': 'Birthday Celebration',
        'customize-subtitle': 'Make this moment special',
        'label-name': "Birthday Star's Name",
        'label-age': 'Age',
        'label-theme': 'Choose Theme',
        'label-language': 'Language',
        'placeholder-name': 'Enter name...',
        'placeholder-age': 'Enter age...',
        'btn-start': 'Start Celebration',
        
        // Theme names
        'theme-classic': 'Classic Purple',
        'theme-romantic': 'Romantic Rose',
        'theme-cute': 'Cute Pastel',
        'theme-classy': 'Classy Gold',
        'theme-neon': 'Neon Lights',
        'theme-ocean': 'Ocean Breeze',
        'theme-sunset': 'Sunset Dreams',
        'theme-forest': 'Forest Mystique',
        'theme-royal': 'Royal Elegance',
        'theme-candy': 'Candy Pop',
        
        // Celebration content
        'title-happy': 'Happy',
        'title-birthday': 'Birthday',
        'age-turning': "You're turning",
        'age-today': 'today!',
        'btn-replay': 'Replay Celebration',
        'btn-customize': 'Customize',
        'footer-message': 'Made with love 💖 just for you',
        
        // Birthday wishes
        wishes: [
            "May this year bring you endless joy and unforgettable moments! ✨",
            "Here's to new adventures and dreams coming true! 🌟",
            "Wishing you health, happiness, and all the success you deserve! 🎊",
            "May every day be filled with laughter and love! 💫",
            "Cheers to another amazing year around the sun! 🎉",
            "May your birthday be as special as you are! 🎈",
            "Here's to celebrating you and all the wonderful things ahead! 🌈",
            "Wishing you a year full of beautiful surprises! 🎁",
            "May all your wishes and dreams come true this year! ⭐",
            "Sending you all the love and happiness in the world! 💖"
        ]
    },
    
    ur: {
        // Urdu translations
        'customize-title': '✨ سالگرہ کی تقریب کو اپنی مرضی سے بنائیں',
        'customize-subtitle': 'اس لمحے کو خاص بنائیں',
        'label-name': 'سالگرہ کے ستارے کا نام',
        'label-age': 'عمر',
        'label-theme': 'تھیم منتخب کریں',
        'label-language': 'زبان',
        'placeholder-name': 'نام درج کریں...',
        'placeholder-age': 'عمر درج کریں...',
        'btn-start': 'جشن شروع کریں',
        
        'theme-classic': 'کلاسک جامنی',
        'theme-romantic': 'رومانوی گلاب',
        'theme-cute': 'پیارا پیسٹل',
        'theme-classy': 'کلاسی سونا',
        'theme-neon': 'نیون لائٹس',
        'theme-ocean': 'سمندری ہوا',
        'theme-sunset': 'غروب آفتاب کے خواب',
        'theme-forest': 'جنگل کا راز',
        'theme-royal': 'شاہی خوبصورتی',
        'theme-candy': 'کینڈی پاپ',
        
        'title-happy': 'سالگرہ',
        'title-birthday': 'مبارک',
        'age-turning': 'آپ',
        'age-today': 'سال کے ہو رہے ہیں!',
        'btn-replay': 'جشن دوبارہ چلائیں',
        'btn-customize': 'تبدیل کریں',
        'footer-message': 'محبت کے ساتھ آپ کے لیے بنایا گیا 💖',
        
        wishes: [
            "یہ سال آپ کے لیے لامتناہی خوشیاں اور یادگار لمحات لے کر آئے! ✨",
            "نئی مہم جوئی اور خوابوں کے پورے ہونے کی دعا! 🌟",
            "صحت، خوشی اور کامیابی کی دعائیں! 🎊",
            "ہر دن ہنسی اور محبت سے بھرا ہو! 💫",
            "زندگی کے ایک اور شاندار سال کی خوشیاں! 🎉",
            "آپ کی سالگرہ اتنی ہی خاص ہو جتنے آپ ہیں! 🎈",
            "آپ کا جشن اور آنے والی خوبصورت چیزوں کا استقبال! 🌈",
            "خوبصورت حیرتوں سے بھرے سال کی دعا! 🎁",
            "آپ کی تمام خواہشیں اور خواب پورے ہوں! ⭐",
            "دنیا بھر کی محبت اور خوشیاں آپ کے لیے! 💖"
        ]
    },
    
    hi: {
        // Hindi translations
        'customize-title': '✨ जन्मदिन समारोह को अनुकूलित करें',
        'customize-subtitle': 'इस पल को खास बनाएं',
        'label-name': 'जन्मदिन के सितारे का नाम',
        'label-age': 'आयु',
        'label-theme': 'थीम चुनें',
        'label-language': 'भाषा',
        'placeholder-name': 'नाम दर्ज करें...',
        'placeholder-age': 'आयु दर्ज करें...',
        'btn-start': 'उत्सव शुरू करें',
        
        'theme-classic': 'क्लासिक बैंगनी',
        'theme-romantic': 'रोमांटिक गुलाब',
        'theme-cute': 'प्यारा पेस्टल',
        'theme-classy': 'क्लासी गोल्ड',
        'theme-neon': 'नियॉन लाइट्स',
        'theme-ocean': 'समुद्री हवा',
        'theme-sunset': 'सूर्यास्त के सपने',
        'theme-forest': 'वन रहस्य',
        'theme-royal': 'शाही सुंदरता',
        'theme-candy': 'कैंडी पॉप',
        
        'title-happy': 'जन्मदिन',
        'title-birthday': 'मुबारक',
        'age-turning': 'आप',
        'age-today': 'साल के हो रहे हैं!',
        'btn-replay': 'उत्सव फिर से चलाएं',
        'btn-customize': 'अनुकूलित करें',
        'footer-message': 'प्यार के साथ आपके लिए बनाया गया 💖',
        
        wishes: [
            "यह वर्ष आपके लिए अनंत खुशी और यादगार पल लाए! ✨",
            "नए रोमांच और सपनों के सच होने की शुभकामनाएं! 🌟",
            "स्वास्थ्य, खुशी और सफलता की कामना! 🎊",
            "हर दिन हंसी और प्यार से भरा हो! 💫",
            "सूरज के चारों ओर एक और अद्भुत वर्ष की शुभकामनाएं! 🎉",
            "आपका जन्मदिन उतना ही खास हो जितने आप हैं! 🎈",
            "आपका उत्सव और आगे की सभी अद्भुत चीजें! 🌈",
            "सुंदर आश्चर्यों से भरे वर्ष की कामना! 🎁",
            "आपकी सभी इच्छाएं और सपने इस वर्ष सच हों! ⭐",
            "दुनिया भर का प्यार और खुशी आपके लिए! 💖"
        ]
    },
    
    tr: {
        // Turkish translations
        'customize-title': '✨ Doğum Günü Kutlamasını Özelleştir',
        'customize-subtitle': 'Bu anı özel kıl',
        'label-name': 'Doğum Günü Yıldızının Adı',
        'label-age': 'Yaş',
        'label-theme': 'Tema Seç',
        'label-language': 'Dil',
        'placeholder-name': 'İsim girin...',
        'placeholder-age': 'Yaş girin...',
        'btn-start': 'Kutlamayı Başlat',
        
        'theme-classic': 'Klasik Mor',
        'theme-romantic': 'Romantik Gül',
        'theme-cute': 'Sevimli Pastel',
        'theme-classy': 'Şık Altın',
        'theme-neon': 'Neon Işıklar',
        'theme-ocean': 'Okyanus Esintisi',
        'theme-sunset': 'Gün Batımı Rüyaları',
        'theme-forest': 'Orman Gizemi',
        'theme-royal': 'Kraliyet Zarafeti',
        'theme-candy': 'Şeker Pop',
        
        'title-happy': 'İyi Ki',
        'title-birthday': 'Doğdun',
        'age-turning': 'Bugün',
        'age-today': 'yaşına giriyorsun!',
        'btn-replay': 'Kutlamayı Tekrarla',
        'btn-customize': 'Özelleştir',
        'footer-message': 'Senin için sevgiyle yapıldı 💖',
        
        wishes: [
            "Bu yıl sana sonsuz neşe ve unutulmaz anlar getirsin! ✨",
            "Yeni maceralar ve hayallerin gerçek olsun! 🌟",
            "Sağlık, mutluluk ve hak ettiğin tüm başarıları dilerim! 🎊",
            "Her gün kahkaha ve sevgiyle dolsun! 💫",
            "Güneşin etrafındaki bir başka harika yıla şerefe! 🎉",
            "Doğum günün sen kadar özel olsun! 🎈",
            "Seni ve önündeki tüm harika şeyleri kutlamak için! 🌈",
            "Güzel sürprizlerle dolu bir yıl dilerim! 🎁",
            "Tüm dilek ve hayallerin bu yıl gerçek olsun! ⭐",
            "Dünyadaki tüm sevgi ve mutluluğu sana gönderiyorum! 💖"
        ]
    },
    
    es: {
        // Spanish translations
        'customize-title': '✨ Personaliza la Celebración de Cumpleaños',
        'customize-subtitle': 'Haz este momento especial',
        'label-name': 'Nombre del Cumpleañero',
        'label-age': 'Edad',
        'label-theme': 'Elige Tema',
        'label-language': 'Idioma',
        'placeholder-name': 'Ingresa el nombre...',
        'placeholder-age': 'Ingresa la edad...',
        'btn-start': 'Iniciar Celebración',
        
        'theme-classic': 'Púrpura Clásico',
        'theme-romantic': 'Rosa Romántico',
        'theme-cute': 'Pastel Lindo',
        'theme-classy': 'Oro Elegante',
        'theme-neon': 'Luces de Neón',
        'theme-ocean': 'Brisa Marina',
        'theme-sunset': 'Sueños del Atardecer',
        'theme-forest': 'Mística del Bosque',
        'theme-royal': 'Elegancia Real',
        'theme-candy': 'Dulce Pop',
        
        'title-happy': 'Feliz',
        'title-birthday': 'Cumpleaños',
        'age-turning': 'Estás cumpliendo',
        'age-today': 'hoy!',
        'btn-replay': 'Repetir Celebración',
        'btn-customize': 'Personalizar',
        'footer-message': 'Hecho con amor 💖 solo para ti',
        
        wishes: [
            "¡Que este año te traiga alegría sin fin y momentos inolvidables! ✨",
            "¡Por nuevas aventuras y sueños que se hacen realidad! 🌟",
            "¡Te deseo salud, felicidad y todo el éxito que mereces! 🎊",
            "¡Que cada día esté lleno de risas y amor! 💫",
            "¡Brindemos por otro año increíble alrededor del sol! 🎉",
            "¡Que tu cumpleaños sea tan especial como tú! 🎈",
            "¡Celebrándote a ti y todas las cosas maravillosas por venir! 🌈",
            "¡Te deseo un año lleno de hermosas sorpresas! 🎁",
            "¡Que todos tus deseos y sueños se hagan realidad este año! ⭐",
            "¡Te envío todo el amor y la felicidad del mundo! 💖"
        ]
    },
    
    ru: {
        // Russian translations
        'customize-title': '✨ Настройте Празднование Дня Рождения',
        'customize-subtitle': 'Сделайте этот момент особенным',
        'label-name': 'Имя Именинника',
        'label-age': 'Возраст',
        'label-theme': 'Выберите Тему',
        'label-language': 'Язык',
        'placeholder-name': 'Введите имя...',
        'placeholder-age': 'Введите возраст...',
        'btn-start': 'Начать Празднование',
        
        'theme-classic': 'Классический Фиолетовый',
        'theme-romantic': 'Романтическая Роза',
        'theme-cute': 'Милая Пастель',
        'theme-classy': 'Классическое Золото',
        'theme-neon': 'Неоновые Огни',
        'theme-ocean': 'Океанский Бриз',
        'theme-sunset': 'Закатные Мечты',
        'theme-forest': 'Лесная Мистика',
        'theme-royal': 'Королевская Элегантность',
        'theme-candy': 'Конфетный Поп',
        
        'title-happy': 'С Днём',
        'title-birthday': 'Рождения',
        'age-turning': 'Тебе исполняется',
        'age-today': 'сегодня!',
        'btn-replay': 'Повторить Празднование',
        'btn-customize': 'Настроить',
        'footer-message': 'Сделано с любовью 💖 специально для тебя',
        
        wishes: [
            "Пусть этот год принесёт тебе бесконечную радость и незабываемые моменты! ✨",
            "За новые приключения и сбывшиеся мечты! 🌟",
            "Желаю здоровья, счастья и всех успехов, которых ты заслуживаешь! 🎊",
            "Пусть каждый день будет наполнен смехом и любовью! 💫",
            "За ещё один удивительный год вокруг солнца! 🎉",
            "Пусть твой день рождения будет таким же особенным, как и ты! 🎈",
            "Празднуем тебя и все прекрасное, что ждёт впереди! 🌈",
            "Желаю года, полного прекрасных сюрпризов! 🎁",
            "Пусть все твои желания и мечты сбудутся в этом году! ⭐",
            "Посылаю тебе всю любовь и счастье мира! 💖"
        ]
    },
    
    fr: {
        // French translations
        'customize-title': '✨ Personnaliser la Célébration d\'Anniversaire',
        'customize-subtitle': 'Rendez ce moment spécial',
        'label-name': 'Nom de la Star d\'Anniversaire',
        'label-age': 'Âge',
        'label-theme': 'Choisir un Thème',
        'label-language': 'Langue',
        'placeholder-name': 'Entrez le nom...',
        'placeholder-age': 'Entrez l\'âge...',
        'btn-start': 'Commencer la Célébration',
        
        'theme-classic': 'Violet Classique',
        'theme-romantic': 'Rose Romantique',
        'theme-cute': 'Pastel Mignon',
        'theme-classy': 'Or Élégant',
        'theme-neon': 'Lumières Néon',
        'theme-ocean': 'Brise Océanique',
        'theme-sunset': 'Rêves de Coucher de Soleil',
        'theme-forest': 'Mystique de la Forêt',
        'theme-royal': 'Élégance Royale',
        'theme-candy': 'Bonbon Pop',
        
        'title-happy': 'Joyeux',
        'title-birthday': 'Anniversaire',
        'age-turning': 'Tu as',
        'age-today': 'ans aujourd\'hui!',
        'btn-replay': 'Rejouer la Célébration',
        'btn-customize': 'Personnaliser',
        'footer-message': 'Fait avec amour 💖 juste pour toi',
        
        wishes: [
            "Que cette année t'apporte une joie sans fin et des moments inoubliables! ✨",
            "À de nouvelles aventures et à la réalisation de tes rêves! 🌟",
            "Je te souhaite santé, bonheur et tout le succès que tu mérites! 🎊",
            "Que chaque jour soit rempli de rires et d'amour! 💫",
            "À une autre année incroyable autour du soleil! 🎉",
            "Que ton anniversaire soit aussi spécial que toi! 🎈",
            "Célébrons-toi et toutes les merveilleuses choses à venir! 🌈",
            "Je te souhaite une année pleine de belles surprises! 🎁",
            "Que tous tes vœux et rêves se réalisent cette année! ⭐",
            "Je t'envoie tout l'amour et le bonheur du monde! 💖"
        ]
    },
    
    de: {
        // German translations
        'customize-title': '✨ Geburtstagsfeier Anpassen',
        'customize-subtitle': 'Mach diesen Moment besonders',
        'label-name': 'Name des Geburtstagskindes',
        'label-age': 'Alter',
        'label-theme': 'Thema Wählen',
        'label-language': 'Sprache',
        'placeholder-name': 'Namen eingeben...',
        'placeholder-age': 'Alter eingeben...',
        'btn-start': 'Feier Starten',
        
        'theme-classic': 'Klassisches Lila',
        'theme-romantic': 'Romantische Rose',
        'theme-cute': 'Süßes Pastell',
        'theme-classy': 'Elegantes Gold',
        'theme-neon': 'Neonlichter',
        'theme-ocean': 'Meeresbrise',
        'theme-sunset': 'Sonnenuntergangsträume',
        'theme-forest': 'Waldmystik',
        'theme-royal': 'Königliche Eleganz',
        'theme-candy': 'Süßigkeiten Pop',
        
        'title-happy': 'Alles Gute',
        'title-birthday': 'zum Geburtstag',
        'age-turning': 'Du wirst heute',
        'age-today': 'Jahre alt!',
        'btn-replay': 'Feier Wiederholen',
        'btn-customize': 'Anpassen',
        'footer-message': 'Mit Liebe gemacht 💖 nur für dich',
        
        wishes: [
            "Möge dieses Jahr dir endlose Freude und unvergessliche Momente bringen! ✨",
            "Auf neue Abenteuer und Träume, die wahr werden! 🌟",
            "Ich wünsche dir Gesundheit, Glück und all den Erfolg, den du verdienst! 🎊",
            "Möge jeder Tag voller Lachen und Liebe sein! 💫",
            "Auf ein weiteres fantastisches Jahr um die Sonne! 🎉",
            "Möge dein Geburtstag so besonders sein wie du! 🎈",
            "Feiern wir dich und all die wunderbaren Dinge, die kommen! 🌈",
            "Ich wünsche dir ein Jahr voller schöner Überraschungen! 🎁",
            "Mögen all deine Wünsche und Träume dieses Jahr wahr werden! ⭐",
            "Ich sende dir all die Liebe und das Glück der Welt! 💖"
        ]
    },
    
    ar: {
        // Arabic translations
        'customize-title': '✨ تخصيص احتفال عيد الميلاد',
        'customize-subtitle': 'اجعل هذه اللحظة مميزة',
        'label-name': 'اسم نجم عيد الميلاد',
        'label-age': 'العمر',
        'label-theme': 'اختر الثيم',
        'label-language': 'اللغة',
        'placeholder-name': 'أدخل الاسم...',
        'placeholder-age': 'أدخل العمر...',
        'btn-start': 'ابدأ الاحتفال',
        
        'theme-classic': 'بنفسجي كلاسيكي',
        'theme-romantic': 'وردة رومانسية',
        'theme-cute': 'باستيل لطيف',
        'theme-classy': 'ذهب أنيق',
        'theme-neon': 'أضواء نيون',
        'theme-ocean': 'نسيم المحيط',
        'theme-sunset': 'أحلام الغروب',
        'theme-forest': 'غموض الغابة',
        'theme-royal': 'أناقة ملكية',
        'theme-candy': 'حلوى بوب',
        
        'title-happy': 'عيد ميلاد',
        'title-birthday': 'سعيد',
        'age-turning': 'أنت تبلغ',
        'age-today': 'اليوم!',
        'btn-replay': 'إعادة الاحتفال',
        'btn-customize': 'تخصيص',
        'footer-message': 'صُنع بحب 💖 خصيصاً لك',
        
        wishes: [
            "ليجلب لك هذا العام فرحاً لا نهاية له ولحظات لا تُنسى! ✨",
            "لمغامرات جديدة وأحلام تتحقق! 🌟",
            "أتمنى لك الصحة والسعادة وكل النجاح الذي تستحقه! 🎊",
            "ليكن كل يوم مليئاً بالضحك والحب! 💫",
            "لعام رائع آخر حول الشمس! 🎉",
            "ليكن عيد ميلادك مميزاً مثلك! 🎈",
            "للاحتفال بك وبكل الأشياء الرائعة القادمة! 🌈",
            "أتمنى لك عاماً مليئاً بالمفاجآت الجميلة! 🎁",
            "لتتحقق جميع أمنياتك وأحلامك هذا العام! ⭐",
            "أرسل لك كل الحب والسعادة في العالم! 💖"
        ]
    },
    
    zh: {
        // Chinese translations
        'customize-title': '✨ 自定义生日庆祝',
        'customize-subtitle': '让这一刻特别',
        'label-name': '寿星的名字',
        'label-age': '年龄',
        'label-theme': '选择主题',
        'label-language': '语言',
        'placeholder-name': '输入名字...',
        'placeholder-age': '输入年龄...',
        'btn-start': '开始庆祝',
        
        'theme-classic': '经典紫色',
        'theme-romantic': '浪漫玫瑰',
        'theme-cute': '可爱粉彩',
        'theme-classy': '优雅金色',
        'theme-neon': '霓虹灯',
        'theme-ocean': '海洋微风',
        'theme-sunset': '日落之梦',
        'theme-forest': '森林神秘',
        'theme-royal': '皇家优雅',
        'theme-candy': '糖果流行',
        
        'title-happy': '生日',
        'title-birthday': '快乐',
        'age-turning': '你今天',
        'age-today': '岁了！',
        'btn-replay': '重播庆祝',
        'btn-customize': '自定义',
        'footer-message': '用爱制作 💖 只为你',
        
        wishes: [
            "愿这一年给你带来无尽的快乐和难忘的时刻！✨",
            "祝新的冒险和梦想成真！🌟",
            "祝你健康、幸福和你应得的一切成功！🎊",
            "愿每一天都充满欢笑和爱！💫",
            "为围绕太阳的又一个美好年份干杯！🎉",
            "愿你的生日和你一样特别！🎈",
            "庆祝你和即将到来的所有美好事物！🌈",
            "祝你拥有充满美丽惊喜的一年！🎁",
            "愿你所有的愿望和梦想今年成真！⭐",
            "向你发送世界上所有的爱和幸福！💖"
        ]
    }
};
