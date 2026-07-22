/* =========================================================
   Titina Games - Sistema de idiomas (i18n)
   Idiomas: Español, Inglés, Portugués, Indonesio,
            Tailandés, Birmano, Hindi
   ========================================================= */

const LANGS = [
    { code: 'es', name: 'Español', tag: 'ES' },
    { code: 'en', name: 'English', tag: 'EN' },
    { code: 'pt', name: 'Português', tag: 'PT' },
    { code: 'id', name: 'Bahasa Indonesia', tag: 'ID' },
    { code: 'th', name: 'ไทย', tag: 'TH' },
    { code: 'my', name: 'မြန်မာ', tag: 'MY' },
    { code: 'hi', name: 'हिन्दी', tag: 'HI' }
];

/* Keys that contain HTML markup are applied via innerHTML (see data-i18n-html). */
const translations = {
    /* ================= ESPAÑOL ================= */
    es: {
        'meta.title': 'Titina Games - Estudio de Videojuegos',
        'lang.label': 'Cambiar idioma',
        'nav.home': 'Inicio',
        'nav.games': 'Juegos',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
        'nav.menu': 'Abrir menú de navegación',
        'hero.badge': '¡Ya disponible en Google Play!',
        'hero.title': 'Diversión y <span class="highlight-text">Aventuras</span> para todos',
        'hero.subtitle': 'Titina Games es un estudio enfocado en crear juegos casuales, muy divertidos y experiencias de mundo abierto de todo tipo.',
        'hero.cta_secondary': 'Conoce el juego',
        'hero.trust': 'Gratis para jugar',
        'hero.platform': 'Disponible para Android',
        'play.get': 'DISPONIBLE EN',
        'feature.openworld.title': 'Mundo Abierto',
        'feature.openworld.text': 'Explora una ciudad enorme con total libertad.',
        'feature.casual.title': 'Fácil de Jugar',
        'feature.casual.text': 'Controles simples y diversión inmediata para todos.',
        'feature.action.title': 'Acción y Vehículos',
        'feature.action.text': 'Conduce autos, corre y vive aventuras sin límites.',
        'feature.free.title': 'Gratis',
        'feature.free.text': 'Descarga y juega sin costo en tu teléfono Android.',
        'games.eyebrow': 'NUESTRO JUEGO',
        'games.title': 'Nuestro Lanzamiento',
        'games.subtitle': 'Disfruta de la magia de Titina Games',
        'game.badge': 'YA DISPONIBLE',
        'game.title': 'Nuestro Primer Juego',
        'game.description': 'Explora un mundo abierto lleno de diversión, estilo y mucha acción en nuestro primer gran lanzamiento. ¡Ya puedes descargarlo gratis en Google Play y comenzar tu aventura!',
        'tag.openworld': 'Mundo Abierto',
        'tag.action': 'Acción',
        'tag.free': 'Gratis',
        'about.title': 'Sobre el Estudio',
        'about.text': 'Nacimos con la pasión de llevar diversión directa, mecánicas pulidas y estilos artísticos vibrantes a los teléfonos móviles de todo el mundo. Creemos que los mejores juegos son aquellos que capturan tu atención al instante, ofreciendo desafíos gratificantes que puedes disfrutar en cualquier lugar.',
        'stat.games.label': 'Juego Publicado',
        'stat.year.label': 'Año de Fundación',
        'stat.indie.label': 'Desarrollo Indie',
        'contact.title': '¿Tienes preguntas o comentarios?',
        'contact.text': 'Estamos siempre listos para escuchar a nuestra comunidad. Si tienes sugerencias, reportes de fallos o consultas comerciales, envíanos un correo electrónico.',
        'footer.support': 'Soporte',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos y Condiciones',
        'footer.rights': '© 2026 Titina Games. Todos los derechos reservados.'
    },

    /* ================= ENGLISH ================= */
    en: {
        'meta.title': 'Titina Games - Video Game Studio',
        'lang.label': 'Change language',
        'nav.home': 'Home',
        'nav.games': 'Games',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.menu': 'Open navigation menu',
        'hero.badge': 'Now available on Google Play!',
        'hero.title': 'Fun and <span class="highlight-text">Adventures</span> for everyone',
        'hero.subtitle': 'Titina Games is a studio focused on creating casual, super fun games and open-world experiences of all kinds.',
        'hero.cta_secondary': 'Explore the game',
        'hero.trust': 'Free to play',
        'hero.platform': 'Available for Android',
        'play.get': 'GET IT ON',
        'feature.openworld.title': 'Open World',
        'feature.openworld.text': 'Explore a huge city with complete freedom.',
        'feature.casual.title': 'Easy to Play',
        'feature.casual.text': 'Simple controls and instant fun for everyone.',
        'feature.action.title': 'Action & Vehicles',
        'feature.action.text': 'Drive cars, run around and live endless adventures.',
        'feature.free.title': 'Free',
        'feature.free.text': 'Download and play for free on your Android phone.',
        'games.eyebrow': 'OUR GAME',
        'games.title': 'Our Release',
        'games.subtitle': 'Enjoy the magic of Titina Games',
        'game.badge': 'AVAILABLE NOW',
        'game.title': 'Our First Game',
        'game.description': 'Explore an open world full of fun, style and tons of action in our first big release. Download it for free on Google Play and start your adventure!',
        'tag.openworld': 'Open World',
        'tag.action': 'Action',
        'tag.free': 'Free',
        'about.title': 'About the Studio',
        'about.text': 'We were born with a passion for bringing direct fun, polished mechanics and vibrant art styles to mobile phones around the world. We believe the best games are the ones that grab your attention instantly, offering rewarding challenges you can enjoy anywhere.',
        'stat.games.label': 'Published Game',
        'stat.year.label': 'Founding Year',
        'stat.indie.label': 'Indie Development',
        'contact.title': 'Have questions or feedback?',
        'contact.text': "We're always ready to listen to our community. If you have suggestions, bug reports or business inquiries, send us an email.",
        'footer.support': 'Support',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms & Conditions',
        'footer.rights': '© 2026 Titina Games. All rights reserved.'
    },

    /* ================= PORTUGUÊS ================= */
    pt: {
        'meta.title': 'Titina Games - Estúdio de Jogos',
        'lang.label': 'Mudar idioma',
        'nav.home': 'Início',
        'nav.games': 'Jogos',
        'nav.about': 'Sobre',
        'nav.contact': 'Contato',
        'nav.menu': 'Abrir menu de navegação',
        'hero.badge': 'Já disponível no Google Play!',
        'hero.title': 'Diversão e <span class="highlight-text">Aventuras</span> para todos',
        'hero.subtitle': 'A Titina Games é um estúdio focado em criar jogos casuais, muito divertidos e experiências de mundo aberto de todos os tipos.',
        'hero.cta_secondary': 'Conheça o jogo',
        'hero.trust': 'Grátis para jogar',
        'hero.platform': 'Disponível para Android',
        'play.get': 'DISPONÍVEL NO',
        'feature.openworld.title': 'Mundo Aberto',
        'feature.openworld.text': 'Explore uma cidade enorme com total liberdade.',
        'feature.casual.title': 'Fácil de Jogar',
        'feature.casual.text': 'Controles simples e diversão imediata para todos.',
        'feature.action.title': 'Ação e Veículos',
        'feature.action.text': 'Dirija carros, corra e viva aventuras sem limites.',
        'feature.free.title': 'Grátis',
        'feature.free.text': 'Baixe e jogue de graça no seu celular Android.',
        'games.eyebrow': 'NOSSO JOGO',
        'games.title': 'Nosso Lançamento',
        'games.subtitle': 'Aproveite a magia da Titina Games',
        'game.badge': 'JÁ DISPONÍVEL',
        'game.title': 'Nosso Primeiro Jogo',
        'game.description': 'Explore um mundo aberto cheio de diversão, estilo e muita ação no nosso primeiro grande lançamento. Já pode baixá-lo de graça no Google Play e começar sua aventura!',
        'tag.openworld': 'Mundo Aberto',
        'tag.action': 'Ação',
        'tag.free': 'Grátis',
        'about.title': 'Sobre o Estúdio',
        'about.text': 'Nascemos com a paixão de levar diversão direta, mecânicas refinadas e estilos artísticos vibrantes para os celulares do mundo todo. Acreditamos que os melhores jogos são aqueles que capturam sua atenção na hora, oferecendo desafios recompensadores que você pode aproveitar em qualquer lugar.',
        'stat.games.label': 'Jogo Publicado',
        'stat.year.label': 'Ano de Fundação',
        'stat.indie.label': 'Desenvolvimento Indie',
        'contact.title': 'Tem perguntas ou comentários?',
        'contact.text': 'Estamos sempre prontos para ouvir nossa comunidade. Se tiver sugestões, relatos de erros ou consultas comerciais, envie-nos um e-mail.',
        'footer.support': 'Suporte',
        'footer.privacy': 'Política de Privacidade',
        'footer.terms': 'Termos e Condições',
        'footer.rights': '© 2026 Titina Games. Todos os direitos reservados.'
    },

    /* ================= BAHASA INDONESIA ================= */
    id: {
        'meta.title': 'Titina Games - Studio Game',
        'lang.label': 'Ganti bahasa',
        'nav.home': 'Beranda',
        'nav.games': 'Game',
        'nav.about': 'Tentang',
        'nav.contact': 'Kontak',
        'nav.menu': 'Buka menu navigasi',
        'hero.badge': 'Sudah tersedia di Google Play!',
        'hero.title': 'Keseruan dan <span class="highlight-text">Petualangan</span> untuk semua',
        'hero.subtitle': 'Titina Games adalah studio yang berfokus membuat game kasual yang seru dan pengalaman dunia terbuka dari berbagai jenis.',
        'hero.cta_secondary': 'Lihat gamenya',
        'hero.trust': 'Gratis dimainkan',
        'hero.platform': 'Tersedia untuk Android',
        'play.get': 'DAPATKAN DI',
        'feature.openworld.title': 'Dunia Terbuka',
        'feature.openworld.text': 'Jelajahi kota besar dengan kebebasan penuh.',
        'feature.casual.title': 'Mudah Dimainkan',
        'feature.casual.text': 'Kontrol sederhana dan keseruan instan untuk semua.',
        'feature.action.title': 'Aksi & Kendaraan',
        'feature.action.text': 'Kemudikan mobil, berlari, dan nikmati petualangan tanpa batas.',
        'feature.free.title': 'Gratis',
        'feature.free.text': 'Unduh dan mainkan gratis di ponsel Android kamu.',
        'games.eyebrow': 'GAME KAMI',
        'games.title': 'Rilisan Kami',
        'games.subtitle': 'Nikmati keseruan dari Titina Games',
        'game.badge': 'SUDAH TERSEDIA',
        'game.title': 'Game Pertama Kami',
        'game.description': 'Jelajahi dunia terbuka yang penuh keseruan, gaya, dan banyak aksi di rilisan besar pertama kami. Unduh gratis sekarang di Google Play dan mulai petualanganmu!',
        'tag.openworld': 'Dunia Terbuka',
        'tag.action': 'Aksi',
        'tag.free': 'Gratis',
        'about.title': 'Tentang Studio',
        'about.text': 'Kami lahir dengan semangat menghadirkan keseruan langsung, mekanik yang halus, dan gaya seni yang cerah ke ponsel di seluruh dunia. Kami percaya game terbaik adalah yang langsung menarik perhatianmu, dengan tantangan seru yang bisa dinikmati di mana saja.',
        'stat.games.label': 'Game Dirilis',
        'stat.year.label': 'Tahun Berdiri',
        'stat.indie.label': 'Pengembangan Indie',
        'contact.title': 'Punya pertanyaan atau masukan?',
        'contact.text': 'Kami selalu siap mendengar komunitas kami. Jika kamu punya saran, laporan bug, atau pertanyaan bisnis, kirim email kepada kami.',
        'footer.support': 'Dukungan',
        'footer.privacy': 'Kebijakan Privasi',
        'footer.terms': 'Syarat & Ketentuan',
        'footer.rights': '© 2026 Titina Games. Semua hak dilindungi.'
    },

    /* ================= ไทย (Thai) ================= */
    th: {
        'meta.title': 'Titina Games - สตูดิโอเกม',
        'lang.label': 'เปลี่ยนภาษา',
        'nav.home': 'หน้าแรก',
        'nav.games': 'เกม',
        'nav.about': 'เกี่ยวกับเรา',
        'nav.contact': 'ติดต่อ',
        'nav.menu': 'เปิดเมนูนำทาง',
        'hero.badge': 'พร้อมให้เล่นแล้วบน Google Play!',
        'hero.title': 'ความสนุกและ<span class="highlight-text">การผจญภัย</span>สำหรับทุกคน',
        'hero.subtitle': 'Titina Games คือสตูดิโอที่มุ่งสร้างเกมแคชวลสุดสนุกและประสบการณ์โลกเปิดหลากหลายรูปแบบ',
        'hero.cta_secondary': 'ดูเกม',
        'hero.trust': 'เล่นฟรี',
        'hero.platform': 'รองรับ Android',
        'play.get': 'ดาวน์โหลดได้ที่',
        'feature.openworld.title': 'โลกเปิดกว้าง',
        'feature.openworld.text': 'สำรวจเมืองขนาดใหญ่ได้อย่างอิสระเต็มที่',
        'feature.casual.title': 'เล่นง่าย',
        'feature.casual.text': 'ควบคุมง่ายและสนุกได้ทันทีสำหรับทุกคน',
        'feature.action.title': 'แอ็กชันและยานพาหนะ',
        'feature.action.text': 'ขับรถ วิ่งเล่น และสนุกกับการผจญภัยไม่รู้จบ',
        'feature.free.title': 'ฟรี',
        'feature.free.text': 'ดาวน์โหลดและเล่นฟรีบนมือถือ Android ของคุณ',
        'games.eyebrow': 'เกมของเรา',
        'games.title': 'ผลงานของเรา',
        'games.subtitle': 'เพลิดเพลินไปกับความมหัศจรรย์ของ Titina Games',
        'game.badge': 'พร้อมให้เล่นแล้ว',
        'game.title': 'เกมแรกของเรา',
        'game.description': 'สำรวจโลกเปิดกว้างที่เต็มไปด้วยความสนุก สไตล์ และแอ็กชันมากมายในผลงานชิ้นใหญ่ชิ้นแรกของเรา ดาวน์โหลดฟรีได้แล้วบน Google Play และเริ่มการผจญภัยของคุณ!',
        'tag.openworld': 'โลกเปิดกว้าง',
        'tag.action': 'แอ็กชัน',
        'tag.free': 'ฟรี',
        'about.title': 'เกี่ยวกับสตูดิโอ',
        'about.text': 'เราเกิดขึ้นด้วยความหลงใหลที่จะนำความสนุกโดยตรง ระบบการเล่นที่ลื่นไหล และงานศิลป์สดใสไปสู่มือถือทั่วโลก เราเชื่อว่าเกมที่ดีที่สุดคือเกมที่ดึงความสนใจของคุณได้ในทันที พร้อมความท้าทายที่คุ้มค่าให้เล่นได้ทุกที่',
        'stat.games.label': 'เกมที่เผยแพร่แล้ว',
        'stat.year.label': 'ปีที่ก่อตั้ง',
        'stat.indie.label': 'พัฒนาแบบอินดี้',
        'contact.title': 'มีคำถามหรือความคิดเห็นไหม?',
        'contact.text': 'เราพร้อมรับฟังชุมชนของเราเสมอ หากคุณมีข้อเสนอแนะ รายงานข้อผิดพลาด หรือข้อสอบถามทางธุรกิจ ส่งอีเมลถึงเราได้เลย',
        'footer.support': 'สนับสนุน',
        'footer.privacy': 'นโยบายความเป็นส่วนตัว',
        'footer.terms': 'ข้อกำหนดและเงื่อนไข',
        'footer.rights': '© 2026 Titina Games สงวนลิขสิทธิ์ทั้งหมด'
    },

    /* ================= မြန်မာ (Burmese) ================= */
    my: {
        'meta.title': 'Titina Games - ဂိမ်းစတူဒီယို',
        'lang.label': 'ဘာသာစကားပြောင်းရန်',
        'nav.home': 'ပင်မ',
        'nav.games': 'ဂိမ်းများ',
        'nav.about': 'အကြောင်း',
        'nav.contact': 'ဆက်သွယ်ရန်',
        'nav.menu': 'လမ်းညွှန်မီနူးဖွင့်ရန်',
        'hero.badge': 'Google Play တွင် ယခုရရှိနိုင်ပါပြီ!',
        'hero.title': 'အားလုံးအတွက် ပျော်ရွှင်မှုနှင့် <span class="highlight-text">စွန့်စားခန်းများ</span>',
        'hero.subtitle': 'Titina Games သည် ပျော်စရာကောင်းသော ဂိမ်းများနှင့် အမျိုးမျိုးသော open-world အတွေ့အကြုံများကို ဖန်တီးသည့် ဂိမ်းစတူဒီယိုတစ်ခုဖြစ်သည်။',
        'hero.cta_secondary': 'ဂိမ်းကို ကြည့်ရန်',
        'hero.trust': 'အခမဲ့ ကစားနိုင်သည်',
        'hero.platform': 'Android အတွက် ရရှိနိုင်သည်',
        'play.get': 'ရယူရန်',
        'feature.openworld.title': 'ကမ္ဘာဖွင့် (Open World)',
        'feature.openworld.text': 'မြို့ကြီးတစ်ခုကို လွတ်လပ်စွာ လှည့်လည်ရှာဖွေပါ။',
        'feature.casual.title': 'ကစားရလွယ်ကူ',
        'feature.casual.text': 'ရိုးရှင်းသော ထိန်းချုပ်မှုနှင့် အားလုံးအတွက် ချက်ချင်းပျော်ရွှင်မှု။',
        'feature.action.title': 'အက်ရှင်နှင့် ယာဉ်များ',
        'feature.action.text': 'ကားများမောင်း၍ အကန့်အသတ်မဲ့ စွန့်စားခန်းများကို ခံစားပါ။',
        'feature.free.title': 'အခမဲ့',
        'feature.free.text': 'သင့် Android ဖုန်းတွင် အခမဲ့ ဒေါင်းလုဒ်လုပ်၍ ကစားပါ။',
        'games.eyebrow': 'ကျွန်ုပ်တို့၏ ဂိမ်း',
        'games.title': 'ကျွန်ုပ်တို့၏ ထုတ်လုပ်မှု',
        'games.subtitle': 'Titina Games ၏ မှော်ဆန်မှုကို ခံစားပါ',
        'game.badge': 'ယခုရရှိနိုင်ပါပြီ',
        'game.title': 'ကျွန်ုပ်တို့၏ ပထမဆုံးဂိမ်း',
        'game.description': 'ကျွန်ုပ်တို့၏ ပထမဆုံး ဂိမ်းကြီးတွင် ပျော်ရွှင်မှု၊ စတိုင်နှင့် အက်ရှင်များ ပြည့်နှက်နေသော ကမ္ဘာဖွင့်ကို လှည့်လည်ရှာဖွေပါ။ Google Play တွင် ယခု အခမဲ့ ဒေါင်းလုဒ်လုပ်၍ သင့်စွန့်စားခန်းကို စတင်ပါ။',
        'tag.openworld': 'ကမ္ဘာဖွင့်',
        'tag.action': 'အက်ရှင်',
        'tag.free': 'အခမဲ့',
        'about.title': 'စတူဒီယိုအကြောင်း',
        'about.text': 'ကျွန်ုပ်တို့သည် ကမ္ဘာတစ်ဝှမ်းရှိ မိုဘိုင်းဖုန်းများသို့ တိုက်ရိုက်ပျော်ရွှင်မှု၊ ချောမွေ့သော ကစားနည်းနှင့် တောက်ပသော အနုပညာစတိုင်များ ယူဆောင်လာရန် စိတ်အားထက်သန်စွာ မွေးဖွားလာခဲ့သည်။ အကောင်းဆုံးဂိမ်းများသည် သင့်အာရုံကို ချက်ချင်းဖမ်းစားနိုင်ပြီး မည်သည့်နေရာတွင်မဆို ကစားနိုင်သည့် တန်ဖိုးရှိသော စိန်ခေါ်မှုများ ပေးသည်ဟု ကျွန်ုပ်တို့ ယုံကြည်သည်။',
        'stat.games.label': 'ထုတ်ဝေပြီးဂိမ်း',
        'stat.year.label': 'တည်ထောင်သည့်နှစ်',
        'stat.indie.label': 'Indie ဖွံ့ဖြိုးရေး',
        'contact.title': 'မေးခွန်း သို့မဟုတ် အကြံပြုချက် ရှိပါသလား?',
        'contact.text': 'ကျွန်ုပ်တို့သည် ကျွန်ုပ်တို့၏ အသိုင်းအဝိုင်းကို အမြဲနားထောင်ရန် အသင့်ရှိသည်။ အကြံပြုချက်များ၊ ချွတ်ယွင်းချက် အစီရင်ခံစာများ သို့မဟုတ် စီးပွားရေးဆိုင်ရာ မေးမြန်းချက်များ ရှိပါက ကျွန်ုပ်တို့ထံ အီးမေးလ်ပို့ပါ။',
        'footer.support': 'အကူအညီ',
        'footer.privacy': 'ကိုယ်ရေးအချက်အလက် မူဝါဒ',
        'footer.terms': 'စည်းမျဉ်းနှင့် သတ်မှတ်ချက်များ',
        'footer.rights': '© 2026 Titina Games။ မူပိုင်ခွင့်အားလုံး ရယူထားသည်။'
    },

    /* ================= हिन्दी (Hindi) ================= */
    hi: {
        'meta.title': 'Titina Games - वीडियो गेम स्टूडियो',
        'lang.label': 'भाषा बदलें',
        'nav.home': 'होम',
        'nav.games': 'गेम्स',
        'nav.about': 'हमारे बारे में',
        'nav.contact': 'संपर्क',
        'nav.menu': 'नेविगेशन मेनू खोलें',
        'hero.badge': 'अब Google Play पर उपलब्ध!',
        'hero.title': 'सबके लिए मज़ा और <span class="highlight-text">रोमांच</span>',
        'hero.subtitle': 'Titina Games एक ऐसा स्टूडियो है जो मज़ेदार कैज़ुअल गेम और हर तरह के ओपन-वर्ल्ड अनुभव बनाने पर केंद्रित है।',
        'hero.cta_secondary': 'गेम देखें',
        'hero.trust': 'मुफ़्त में खेलें',
        'hero.platform': 'Android के लिए उपलब्ध',
        'play.get': 'यहाँ से पाएँ',
        'feature.openworld.title': 'ओपन वर्ल्ड',
        'feature.openworld.text': 'पूरी आज़ादी के साथ एक विशाल शहर की खोज करें।',
        'feature.casual.title': 'खेलने में आसान',
        'feature.casual.text': 'आसान कंट्रोल और सबके लिए तुरंत मज़ा।',
        'feature.action.title': 'एक्शन और वाहन',
        'feature.action.text': 'कारें चलाएँ, दौड़ें और अनंत रोमांच का आनंद लें।',
        'feature.free.title': 'मुफ़्त',
        'feature.free.text': 'अपने Android फ़ोन पर मुफ़्त डाउनलोड करें और खेलें।',
        'games.eyebrow': 'हमारा गेम',
        'games.title': 'हमारी रिलीज़',
        'games.subtitle': 'Titina Games के जादू का आनंद लें',
        'game.badge': 'अब उपलब्ध',
        'game.title': 'हमारा पहला गेम',
        'game.description': 'हमारी पहली बड़ी रिलीज़ में मज़े, स्टाइल और ढेर सारे एक्शन से भरी एक ओपन वर्ल्ड की खोज करें। इसे अभी Google Play पर मुफ़्त डाउनलोड करें और अपना रोमांच शुरू करें!',
        'tag.openworld': 'ओपन वर्ल्ड',
        'tag.action': 'एक्शन',
        'tag.free': 'मुफ़्त',
        'about.title': 'स्टूडियो के बारे में',
        'about.text': 'हम दुनिया भर के मोबाइल फ़ोन तक सीधा मज़ा, बेहतरीन मैकेनिक्स और जीवंत आर्ट स्टाइल लाने के जुनून के साथ बने हैं। हमारा मानना है कि सबसे अच्छे गेम वही हैं जो तुरंत आपका ध्यान खींच लें और ऐसी संतोषजनक चुनौतियाँ दें जिन्हें आप कहीं भी खेल सकें।',
        'stat.games.label': 'प्रकाशित गेम',
        'stat.year.label': 'स्थापना वर्ष',
        'stat.indie.label': 'इंडी डेवलपमेंट',
        'contact.title': 'कोई सवाल या सुझाव है?',
        'contact.text': 'हम हमेशा अपने समुदाय की सुनने के लिए तैयार हैं। अगर आपके पास सुझाव, बग रिपोर्ट या व्यावसायिक पूछताछ है, तो हमें ईमेल भेजें।',
        'footer.support': 'सहायता',
        'footer.privacy': 'गोपनीयता नीति',
        'footer.terms': 'नियम और शर्तें',
        'footer.rights': '© 2026 Titina Games. सर्वाधिकार सुरक्षित।'
    }
};

const STORAGE_KEY = 'titina_lang';

function getSavedLang() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved && translations[saved]) return saved;

    const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    if (translations[nav]) return nav;
    return 'es';
}

function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.es;
    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (dict[key] != null) el.textContent = dict[key];
    });

    // HTML content (allows inline <span> highlights)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] != null) el.innerHTML = dict[key];
    });

    // aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-aria');
        if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });

    // Update the switcher button label
    const codeEl = document.getElementById('lang-code');
    const meta = LANGS.find(function (l) { return l.code === lang; });
    if (codeEl && meta) codeEl.textContent = meta.tag;

    // Reflect active state in the menu
    document.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        opt.setAttribute('aria-selected', opt.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    saveLang(lang);
}

function buildLangMenu() {
    const menu = document.getElementById('lang-menu');
    if (!menu) return;
    menu.innerHTML = '';
    LANGS.forEach(function (l) {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'lang-option';
        btn.type = 'button';
        btn.setAttribute('role', 'option');
        btn.setAttribute('data-lang', l.code);
        btn.innerHTML = '<span class="lang-name">' + l.name + '</span><span class="lang-tag">' + l.tag + '</span>';
        li.appendChild(btn);
        menu.appendChild(li);
    });
}

function initLangSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    const toggle = document.getElementById('lang-toggle');
    const menu = document.getElementById('lang-menu');
    if (!switcher || !toggle || !menu) return;

    buildLangMenu();

    function closeMenu() {
        switcher.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    }
    function openMenu() {
        switcher.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        if (switcher.classList.contains('open')) closeMenu();
        else openMenu();
    });

    menu.addEventListener('click', function (e) {
        const opt = e.target.closest('.lang-option');
        if (!opt) return;
        const lang = opt.getAttribute('data-lang');
        applyLanguage(lang);
        closeMenu();
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
        if (!switcher.contains(e.target)) closeMenu();
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    applyLanguage(getSavedLang());
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
} else {
    initLangSwitcher();
}
