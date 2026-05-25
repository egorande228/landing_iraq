import type { MarketContent } from '@/content/markets/types';
import { getLocaleDirection, type Locale } from '@/lib/i18n';

const sportsLink = 'https://refpa3665.com/L?tag=d_4092175m_66329c_IRAQSport';
const casinoBonusLink = 'https://refpa3665.com/L?tag=d_4092175m_66329c_MLBIRAQ26';
const telegramLink = 'https://t.me/Team_cash_iraq';
const emailLink = 'mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM';

const messagingChannels = {
  telegram: {
    href: telegramLink,
    iconSrc: '/telegram.png',
    platform: 'telegram' as const,
  },
  email: {
    href: emailLink,
    platform: 'email' as const,
  },
};

const iraqContentByLocale: Record<Locale, MarketContent> = {
  ar: {
    market: 'Iraq',
    locale: 'ar',
    direction: getLocaleDirection('ar'),
    seo: {
      title: 'MELBET العراق',
      description: 'واجهة عراقية داكنة تبيع الرياضة والكازينو والعروض ومسارات الشراكة بهوية عربية واضحة.',
    },
    brand: {
      name: 'MELBET العراق',
      tag: 'رياضة، كازينو، ومكافآت داخل تجربة مهيأة للهاتف.',
    },
    ui: {
      languageLabel: 'تبديل اللغة',
    },
    navigation: {
      global: [
        { label: 'الرئيسية', href: '/' },
        { label: 'الشراكة', href: '/partnership' },
        { label: 'الأسئلة', href: '/faq' },
      ],
      home: [
        { label: 'البداية', href: '/#top' },
        { label: 'الرياضة', href: '/#sports' },
        { label: 'الكازينو', href: '/#casino' },
        { label: 'العروض', href: '/#offers' },
        { label: 'المزايا', href: '/#benefits' },
        { label: 'ابدأ', href: '/#final-cta' },
      ],
      partnership: [
        { label: 'نظرة عامة', href: '/partnership#top' },
        { label: 'لماذا نحن', href: '/partnership#why-partner' },
        { label: 'المسارات', href: '/partnership#routes' },
        { label: 'الأدوات', href: '/partnership#tools' },
        { label: 'البداية', href: '/partnership#onboarding' },
        { label: 'التواصل', href: '/partnership#final-cta' },
      ],
      faq: [
        { label: 'اللاعبين', href: '/faq#players' },
        { label: 'الشراكة', href: '/faq#partnership' },
        { label: 'الدعم', href: '/faq#support' },
      ],
    },
    footer: {
      description:
        'سواء جئت للمباريات أو ألعاب الكازينو أو العروض، ابدأ بسرعة وتحرك بين الأقسام من الهاتف من دون تعقيد.',
      links: [
        { label: 'الرئيسية', href: '/' },
        { label: 'الشراكة', href: '/partnership' },
        { label: 'الأسئلة', href: '/faq' },
      ],
      note: 'تختلف العروض وشروطها وخيارات الشراكة أو الوكالة بحسب نوع النشاط وطبيعة الاتفاق وآلية التشغيل.',
    },
    home: {
      seo: {
        title: 'MELBET العراق | الرئيسية',
        description: 'رياضة، كازينو، عروض، وهدايا في تجربة عراقية سريعة ومهيأة للهاتف.',
      },
      hero: {
        id: 'top',
        eyebrow: 'تجربة اللاعبين',
        title: 'رياضة أقوى، كازينو أوسع، ومكافآت تبدأ من أول خطوة.',
        highlightPhrases: ['رياضة', 'كازينو', 'مكافآت'],
        description:
          'ابدأ بمباريات اليوم، جرّب ألعاب الكازينو، واستفد من الهدايا التي ترفع أول جلسة لعب. التسجيل سريع، والتنقل بين الرياضة والكازينو والعروض يتم بخطوات قليلة من الهاتف.',
        primaryCta: {
          label: 'ابدأ من الرياضة',
          href: sportsLink,
          external: true,
        },
        secondaryCta: {
          label: 'اكتشف الكازينو',
          href: casinoBonusLink,
          external: true,
        },
        highlights: ['هدايا', 'لفات مجانية', 'رهانات مجانية', 'مكافأة أول إيداع حتى 200%'],
        stats: [
          {
            value: '200%',
            label: 'مكافأة أول إيداع',
            note: 'حتى 200% حسب العرض المعتمد',
          },
          {
            value: '2 in 1',
            label: 'رياضة وكازينو',
            note: 'تنقل واضح بين أقسام اللعب الأساسية',
          },
          {
            value: '360°',
            label: 'جاهزة للهاتف',
            note: 'تجربة خفيفة وسريعة على الشاشات الصغيرة',
          },
        ],
        stageBadge: 'واجهة الليلة',
        stageChips: ['كرة القدم', 'كازينو حي', 'مكافآت'],
        stageTitle: 'كرة قدم الليلة، ألعاب مباشرة، ومكافآت تضيف قيمة لبدايتك.',
        stageNote: 'ابدأ من المباريات، انتقل إلى الكازينو، أو خذ العرض الذي يناسب جلستك التالية.',
        stageMetrics: [
          { label: 'مباراة اليوم', value: '21:45' },
          { label: 'هدايا البداية', value: 'Up to 200%' },
          { label: 'الدخول', value: 'Mobile Ready' },
        ],
        stageCards: [
          {
            eyebrow: 'Match day',
            title: 'كرة القدم في الواجهة',
            description: 'المباريات المهمة، الرهانات الحية، والطاقة التي يبحث عنها اللاعب في ليلة المباراة.',
            metric: 'Live',
            footnote: 'تركيز مباشر على المباريات الأكثر طلباً.',
          },
          {
            eyebrow: 'Casino',
            title: 'طاولات وألعاب سريعة',
            description: 'انتقل بين السلوات، البث المباشر، والألعاب الفورية من دون أن تتوقف الجلسة.',
            metric: 'Top',
          },
          {
            eyebrow: 'Rewards',
            title: 'عروض لها قيمة واضحة',
            description: 'هدايا، لفات مجانية، ورهانات مجانية تساعد اللاعب على البدء أو العودة بقوة.',
            metric: 'Boost',
          },
        ],
        stageShowcase: [
          {
            title: 'الليلة',
            note: 'عرض يرتبط بطاقة المباريات الكبيرة ويظهر بسرعة داخل الواجهة.',
            imageSrc: '/home/hero/football.png',
            imageAlt: 'عرض الليلة لكرة القدم',
            gameIcon: 'FB',
            gameName: 'Derby Rush',
            ratingValue: 5,
            ratingLabel: 'تقييم 4.8',
            freeSpinsLabel: '120 لفة مجانية',
            promoCodeLabel: 'الرمز: NIGHT120',
            validTillLabel: 'صالح حتى 11:59 مساءً',
          },
          {
            title: 'Crazy Monday',
            note: 'بطاقة كازينو أسرع لمن يريد الدخول مباشرة إلى جلسات السلوات.',
            imageSrc: '/home/hero/casino.png',
            imageAlt: 'عرض Crazy Monday للكازينو',
            gameIcon: '777',
            gameName: 'Lucky Wheel',
            ratingValue: 5,
            ratingLabel: 'تقييم 4.9',
            freeSpinsLabel: '75 لفة مجانية',
            promoCodeLabel: 'الرمز: CRAZYMONDAY',
            validTillLabel: 'صالح حتى الاثنين 23:59',
          },
          {
            title: 'Weekend Rush',
            note: 'دفعة نهاية الأسبوع لمن يريد العودة بهدايا أقوى قبل الجلسة التالية.',
            imageSrc: '/home/hero/promo.png',
            imageAlt: 'عرض Weekend Rush للمكافآت',
            gameIcon: 'JP',
            gameName: 'Golden Reels',
            ratingValue: 4,
            ratingLabel: 'تقييم 4.7',
            freeSpinsLabel: '60 لفة مجانية',
            promoCodeLabel: 'الرمز: WEEKENDRUSH',
            validTillLabel: 'صالح حتى الأحد 23:59',
          },
        ],
      },
      sports: {
        id: 'sports',
        eyebrow: 'الرياضة',
        title: 'المباراة تبدأ قبل صافرة البداية.',
        highlightPhrases: ['المباراة'],
        description:
          'تابع قمم كرة القدم، ادخل إلى الرهان الحي، واستفد من رهانات مجانية وهدايا حول المباريات الكبيرة.',
        cards: [
          {
            eyebrow: 'Football',
            title: 'تركيز على مباريات كرة القدم',
            description: 'مباريات اليوم، قمم الدوريات، وأجواء يوم المباراة لمن يريد الدخول مباشرة إلى أهم المواجهات.',
            metric: 'Top',
            footnote: 'ادخل إلى أهم المواجهات من دون لف طويل.',
          },
          {
            eyebrow: 'Live',
            title: 'رهانات مباشرة مع إيقاع أسرع',
            description: 'تابع اللعب لحظة بلحظة وانتقل إلى الرهان الحي من دون الدخول في صفحات مزدحمة.',
            metric: 'Live',
            footnote: 'أفضل للمباريات التي تتغير فيها الصورة بسرعة.',
          },
          {
            eyebrow: 'Free bets',
            title: 'عروض تدعم بداية اللاعب',
            description: 'رهانات مجانية وهدايا مرتبطة بالمباريات الكبرى أو فترات النشاط لرفع قيمة الدخول.',
            metric: 'Bonus',
            footnote: 'الشروط الفعلية تعرض مع كل حملة عند التفعيل.',
          },
          {
            eyebrow: 'Access',
            title: 'الوصول من الهاتف أسهل',
            description: 'ابدأ من شاشة صغيرة، تحرك بسرعة بين الأقسام، وخذ قرارك من دون خطوات زائدة.',
            metric: 'Mobile',
          },
        ],
      },
      casino: {
        id: 'casino',
        eyebrow: 'الكازينو',
        title: 'ألعاب أكثر لمن يريد السلوات والطاولات والبث الحي في مكان واحد.',
        highlightPhrases: ['السلوات', 'البث الحي'],
        description:
          'انتقل من السلوات إلى الطاولات والبث المباشر، واختر نوع اللعب الذي يناسب جلستك مع حضور قوي لأفضل مزودي الألعاب.',
        cards: [
          {
            eyebrow: 'Slots',
            title: 'سلوات سريعة وجلسات مرنة',
            description: 'ألعاب دوران مناسبة للجلسات القصيرة مع انتقال سريع بين العناوين والفئات.',
            metric: 'Fast',
          },
          {
            eyebrow: 'Live casino',
            title: 'كازينو حي بطابع مباشر',
            description: 'طاولات وبث حي لمن يريد أجواء أقرب إلى الصالة من الهاتف.',
            metric: 'Live',
          },
          {
            eyebrow: 'Table games',
            title: 'ألعاب طاولة كلاسيكية',
            description: 'روليت، بلاك جاك، وباقي ألعاب الطاولة في تقسيم يسهّل التنقل بين الخيارات.',
            metric: 'Classic',
          },
          {
            eyebrow: 'Providers',
            title: 'مزودون معروفون في ألعاب الكازينو',
            description: 'اختر من بين ألعاب قوية ومتنوعة بدل الضياع في أسماء كثيرة بلا فائدة.',
            metric: 'Top',
            footnote: 'ابدأ بالنوع الذي يناسبك من أول نظرة.',
          },
        ],
      },
      promos: {
        id: 'offers',
        eyebrow: 'العروض والهدايا',
        title: 'عروض تدعم أول جلسة أو تعيدك في الوقت المناسب.',
        highlightPhrases: ['عروض', 'أول جلسة'],
        description:
          'استفد من هدايا، لفات مجانية، رهانات مجانية، ومكافأة أول إيداع حتى 200% عندما تكون الحملة مفعلة.',
        cards: [
          {
            eyebrow: 'Welcome',
            title: 'مكافأة أول إيداع حتى 200%',
            description: 'عرض بداية قوي يساعد اللاعب على دخول التجربة بقيمة أعلى من أول إيداع.',
            metric: '200%',
            footnote: 'القيمة النهائية وشروط التفعيل تعتمد على الحملة المعروضة.',
          },
          {
            eyebrow: 'Gifts',
            title: 'هدايا مرنة للحملات اليومية',
            description: 'هدايا يمكن ربطها بالمباريات الكبرى، أسابيع الكازينو، أو فترات النشاط الخاصة.',
            metric: 'Daily',
          },
          {
            eyebrow: 'Free spins',
            title: 'لفات مجانية لألعاب مختارة',
            description: 'طريقة سريعة لتقوية تجربة الكازينو ومنح اللاعب سبباً إضافياً للعودة.',
            metric: 'Spins',
          },
          {
            eyebrow: 'Free bets',
            title: 'رهانات مجانية للمباريات المهمة',
            description: 'حوافز مناسبة لكرة القدم والرهان المباشر عندما يكون التوقيت جزءاً من القرار.',
            metric: 'Bets',
          },
        ],
      },
      trust: {
        id: 'benefits',
        eyebrow: 'المزايا',
        title: 'ما يحتاجه اللاعب فعلاً ليكمل رحلته.',
        highlightPhrases: ['اللاعب', 'رحلته'],
        description:
          'سجل بسرعة، احصل على المساعدة عند الحاجة، وتحرك بين الرياضة والكازينو والعروض من دون تعطيل.',
        cards: [
          {
            eyebrow: 'Signup',
            title: 'تسجيل أسرع',
            description: 'ابدأ من المسار المناسب بسرعة ومن دون إرباك في التنقل بين الرياضة والكازينو والعروض.',
            metric: 'Fast',
          },
          {
            eyebrow: 'Support',
            title: 'دعم قريب عند الحاجة',
            description: 'إذا احتجت مساعدة في العرض أو الحساب أو الخطوة التالية، ستصل إلى الدعم بسرعة.',
            metric: 'Direct',
          },
          {
            eyebrow: 'Mobile',
            title: 'مصممة للعب من الهاتف',
            description: 'ابدأ، المس، وانتقل بين الأقسام بسهولة حتى على الشاشة الصغيرة.',
            metric: 'Ready',
          },
          {
            eyebrow: 'Providers',
            title: 'مزودون يعرفهم اللاعب',
            description: 'الأسماء القوية في الألعاب تساعدك على الدخول بثقة من أول جلسة.',
            metric: 'Trusted',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'ابدأ اللعب',
        title: 'اختر المسار الأقرب لك وادخل التجربة من القسم المناسب.',
        highlightPhrases: ['اختر', 'التجربة'],
        description:
          'ابدأ من الرياضة إذا كنت تبحث عن طاقة يوم المباراة، أو انتقل إلى الكازينو إذا كنت تريد جلسات أسرع، أو راجع العروض قبل أول خطوة.',
        primaryCta: {
          label: 'اذهب إلى الرياضة',
          href: sportsLink,
          external: true,
        },
        secondaryCta: {
          label: 'راجع العروض',
          href: casinoBonusLink,
          external: true,
        },
      },
    },
    partnership: {
      seo: {
        title: 'MELBET العراق | الشراكة',
        description: 'مسارات شراكة ووكالة واضحة للسوق العراقي مع أدوات، متابعة، وتواصل مباشر.',
      },
      hero: {
        id: 'top',
        eyebrow: 'فرص الشراكة',
        title: 'شراكة أو وكالة؟ اختر الطريق الذي يناسب جمهورك أو شبكتك المحلية.',
        highlightPhrases: ['شراكة', 'وكالة', 'اختر'],
        description:
          'إذا كنت تملك جمهوراً، قناة، مجتمعاً، أو قدرة على إدارة معاملات محلية، اختر المسار الذي يناسب عملك وابدأ مع دعم من مدير مختص.',
        primaryCta: {
          label: 'راجع المسارات',
          href: '#routes',
        },
        secondaryCta: {
          label: 'ابدأ التواصل',
          href: '#final-cta',
        },
        highlights: ['Partners', 'Agents', 'Tracking', 'Manager Support'],
        stats: [
          {
            value: '25% - 40%',
            label: 'Revenue share',
            note: 'نطاق شائع للشركاء حسب الجمهور والاتفاق',
          },
          {
            value: 'CPA / Hybrid',
            label: 'نماذج إضافية',
            note: 'تحدد حسب الخبرة، الحجم، ونوع الشراكة',
          },
          {
            value: '5% - 10%',
            label: 'عمولات الإيداع للوكلاء',
            note: 'والسحب غالباً بين 4% و8% حسب التشغيل',
          },
        ],
        stageBadge: 'لوحة التشغيل',
        stageChips: ['شريك', 'وكيل', 'متابعة'],
        stageTitle: 'اختر مسارك، استلم أدواتك، وابدأ بخطوات مدروسة.',
        stageNote: 'سواء بدأت كشريك أو كوكيل، ستحصل على المسار المناسب، المتابعة، ونقطة تواصل مباشرة.',
        stageMetrics: [
          { label: 'Work routes', value: '02' },
          { label: 'Tracking', value: 'Visible' },
          { label: 'Support', value: 'Manager-led' },
        ],
        stageCards: [
          {
            eyebrow: 'Partner',
            title: 'رمز ترويجي ومسار إحالة واضح',
            description: 'لمن يروّج عبر جمهوره أو قناته أو مجتمعه ويحتاج اتفاقاً مناسباً لطبيعة الترافيك.',
            metric: 'Promo',
          },
          {
            eyebrow: 'Agent',
            title: 'تشغيل معاملات محلي',
            description: 'لمن يدير الإيداعات والسحوبات ويشكّل حلقة الوصل بين اللاعب والمنصة داخل مدينة أو منطقة محددة.',
            metric: 'Cashier',
          },
          {
            eyebrow: 'Managers',
            title: 'دعم من مديري الشراكة',
            description: 'مدير الشراكة يساعدك في اختيار النموذج، بدء العمل، ومتابعة النتائج.',
            metric: 'Support',
          },
        ],
      },
      benefits: {
        id: 'why-partner',
        eyebrow: 'لماذا الشراكة',
        title: 'فرصة عملية فيها أكثر من مسار ربح.',
        highlightPhrases: ['فرصة', 'ربح'],
        description:
          'إذا كنت تملك جمهوراً أو تدير معاملات محلية، فهنا أكثر من طريقة للدخول وتحويل النشاط إلى فرصة عمل.',
        cards: [
          {
            eyebrow: 'Market fit',
            title: 'عرض مناسب للسوق المحلي',
            description: 'رياضة، كازينو، وعروض تمنح الشريك أو الوكيل أكثر من زاوية للدخول على نفس الجمهور.',
            metric: 'Local',
          },
          {
            eyebrow: 'Flexible deals',
            title: 'نماذج اتفاق مختلفة',
            description: 'Revenue share أو CPA أو Hybrid للشركاء، مع نسب تشغيل متغيرة للوكلاء حسب الاتفاق والواقع الفعلي.',
            metric: 'Flexible',
            footnote: 'لا توجد نسب ثابتة مضمونة للجميع بنفس الشكل.',
          },
          {
            eyebrow: 'Managers',
            title: 'مدير شراكة مخصص',
            description: 'تحديد النموذج المناسب، مراجعة الأداء، وتوجيه الحملات أو التشغيل خطوة بخطوة.',
            metric: 'Guided',
          },
          {
            eyebrow: 'Visibility',
            title: 'تتبع يبيّن أين تتحرك النتائج',
            description: 'تابع مصدر الحركة، استجابة الحملات، وما يستحق التوسع في مدينتك أو جمهورك.',
            metric: 'Track',
          },
        ],
      },
      routes: {
        id: 'routes',
        eyebrow: 'المسارات',
        title: 'طريقان واضحان للدخول: Partner أو Agent.',
        highlightPhrases: ['Partner', 'Agent'],
        description:
          'اختر الطريق الذي يعكس طريقة عملك الحقيقية. الشريك يركز على الترويج والجمهور، والوكيل يركز على المعاملات والتشغيل المحلي.',
        cards: [
          {
            eyebrow: 'Affiliate partner',
            title: 'Partner',
            description:
              'شريك إحالة يروّج لمنتجات الشركة إلى جمهوره أو مجتمعه أو قاعدته المتابعة باستخدام رمز أو مسار ترويجي خاص به.',
            metric: '25% - 40%',
            footnote: 'النطاقات تعتمد على حجم الجمهور، نوع الترافيك، الخبرة، والاتفاق النهائي.',
            bullets: [
              'Revenue share شائع بين 25% و40%',
              'إمكانية العمل بنموذج CPA',
              'إمكانية العمل بنموذج Hybrid',
              'مدير شراكة يراجع النموذج المناسب للحملة',
            ],
          },
          {
            eyebrow: 'Local operations',
            title: 'Agent',
            description:
              'وكيل يدير الإيداعات والسحوبات ويعمل كحلقة الوصل بين اللاعبين والمنصة داخل مدينة أو منطقة أو شبكة دفع محلية.',
            metric: '5% - 10%',
            footnote: 'عمولات السحب غالباً بين 4% و8% وتختلف حسب المدينة، الحجم، وطريقة الدفع.',
            bullets: [
              'يشمل التشغيل عبر Crypto أو التحويل البنكي أو الطرق المحلية',
              'مناسب لمن يملك بنية دفع أو حضوراً ميدانياً',
              'الاتفاق يتغير حسب حجم الحركة وطبيعة التشغيل',
              'الدعم الإداري والمتابعة جزء من المسار',
            ],
          },
        ],
      },
      tools: {
        id: 'tools',
        eyebrow: 'الأدوات',
        title: 'ما الذي يحصل عليه الشريك أو الوكيل بعد البداية؟',
        highlightPhrases: ['الشريك', 'الوكيل'],
        description:
          'ابدأ بمواد تسويقية، تتبع للأداء، ودعم من مدير يساعدك في الإطلاق والمتابعة.',
        cards: [
          {
            eyebrow: 'Marketing kit',
            title: 'مواد تسويقية جاهزة',
            description: 'نسخ، رسائل، وأصول حملة تساعد على بدء الترويج بسرعة وبصورة أكثر اتساقاً.',
            metric: 'Ready',
          },
          {
            eyebrow: 'Tracking',
            title: 'تتبع ومتابعة أداء',
            description: 'اعرف مصدر الحركة، الحملة الأقوى، والخطوة التالية للتوسع أو التعديل.',
            metric: 'Visible',
          },
          {
            eyebrow: 'Operations',
            title: 'مساندة تشغيلية',
            description: 'دعم في الإطلاق، مراجعة الإعداد، وتوجيه عملي حسب نوع الشراكة أو طبيعة الوكالة.',
            metric: 'Support',
          },
          {
            eyebrow: 'Payments',
            title: 'مرونة في الدفع والبنية المحلية',
            description: 'إمكانية العمل حسب المدينة، طريقة الدفع، وحجم المعاملات ضمن الاتفاق المناسب.',
            metric: 'Local',
          },
        ],
      },
      steps: {
        id: 'onboarding',
        eyebrow: 'خطوات البدء',
        title: 'من أول رسالة إلى بداية التشغيل، كل خطوة لها مكانها.',
        highlightPhrases: ['أول رسالة', 'بداية التشغيل'],
        description:
          'حدد مسارك، راجع الاتفاق المناسب، استلم الأدوات، ثم ابدأ العمل مع متابعة من المدير.',
        items: [
          {
            step: '01',
            title: 'أرسل طلب الشراكة',
            description: 'ابدأ بتحديد هل أنت Partner أم Agent، وما نوع الجمهور أو الشبكة التي تملكها.',
          },
          {
            step: '02',
            title: 'راجع النموذج المناسب',
            description: 'يتم تقييم الجمهور، المدينة، طريقة الدفع، والخبرة لتحديد أفضل اتفاق للبداية.',
          },
          {
            step: '03',
            title: 'استلم الأدوات والإعداد',
            description: 'تحصل على المسار المناسب، المواد الجاهزة، وأي متطلبات تشغيل أو تتبع مطلوبة.',
          },
          {
            step: '04',
            title: 'ابدأ العمل والمتابعة',
            description: 'ابدأ الترويج أو إدارة المعاملات المحلية، ثم تابع الأداء والاستجابة مع المدير.',
          },
          {
            step: '05',
            title: 'وسع النشاط بثقة',
            description: 'بعد ظهور نتائج أولية واضحة، يمكن تطوير الاتفاق أو القنوات أو حجم التشغيل.',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'ابدأ المحادثة',
        title: 'إذا كنت جاهزاً للشراكة أو الوكالة، اختر قناتك وابدأ مباشرة.',
        highlightPhrases: ['الشراكة', 'الوكالة', 'ابدأ'],
        description:
          'أرسل تفاصيل جمهورك أو مدينتك أو طريقة العمل عبر تيليجرام أو البريد الإلكتروني، وسيتم توجيهك إلى المسار المناسب.',
        helperText:
          'نطاقات العمولات والشروط النهائية تحدد بعد مراجعة حجم الجمهور، المدينة، وسائل الدفع، وخطة التشغيل.',
        primaryCta: {
          label: 'راجع الأسئلة',
          href: '/faq#partnership',
        },
        channels: [
          {
            ...messagingChannels.telegram,
            label: 'تواصل عبر تيليجرام',
          },
          {
            ...messagingChannels.email,
            label: 'تواصل عبر البريد',
          },
        ],
      },
    },
    faq: {
      seo: {
        title: 'MELBET العراق | الأسئلة الشائعة',
        description: 'إجابات سريعة للاعبين وللشركاء والوكلاء داخل صفحة واحدة.',
      },
      intro: {
        id: 'top',
        eyebrow: 'FAQ',
        title: 'إجابات سريعة للاعبين والشركاء من دون لف طويل.',
        highlightPhrases: ['إجابات سريعة', 'اللاعبين', 'الشركاء'],
        description:
          'إذا كنت تريد الإجابة السريعة قبل أن تبدأ كلاعب أو تتواصل كشريك، ستجد أهم النقاط هنا.',
        primaryCta: {
          label: 'أسئلة اللاعبين',
          href: '#players',
        },
        secondaryCta: {
          label: 'أسئلة الشراكة',
          href: '#partnership',
        },
      },
      player: {
        id: 'players',
        eyebrow: 'Players',
        title: 'أسئلة اللاعبين',
        highlightPhrases: ['اللاعبين'],
        description: 'أسئلة سريعة قبل أن تبدأ اللعب أو تختار العرض المناسب.',
        items: [
          {
            question: 'ماذا أجد في الصفحة الرئيسية؟',
            answer: 'ستجد الرياضة، الكازينو، العروض، والمزايا التي تساعدك على البدء بسرعة من القسم الذي يهمك.',
          },
          {
            question: 'هل يوجد تركيز على كرة القدم؟',
            answer: 'نعم، كرة القدم هي نقطة الدخول الأساسية في صفحة الرياضة مع حضور واضح للمباريات الحية.',
          },
          {
            question: 'ما نوع العروض المتوقعة؟',
            answer: 'هدايا، لفات مجانية، رهانات مجانية، ومكافأة أول إيداع حتى 200% عند توفر الحملة المناسبة.',
          },
          {
            question: 'هل الكازينو مناسب للهاتف؟',
            answer: 'نعم، ستنتقل بين السلوات والألعاب الحية والطاولات بسهولة من الهاتف.',
          },
          {
            question: 'إلى أين أذهب إذا احتجت مساعدة؟',
            answer: 'يمكنك الرجوع إلى الدعم أو الانتقال إلى صفحة الشراكة إذا كنت تريد التواصل مع الفريق.',
          },
        ],
      },
      partnership: {
        id: 'partnership',
        eyebrow: 'Partnership',
        title: 'أسئلة الشراكة',
        highlightPhrases: ['الشراكة'],
        description: 'أسئلة أساسية عن Partner وAgent والاتفاقات والأدوات المتاحة.',
        items: [
          {
            question: 'من يمكنه التقديم كشريك؟',
            answer: 'أي شخص يملك جمهوراً أو قناة أو مجتمعاً أو شبكة تشغيل محلية وله قدرة على قيادة حركة حقيقية.',
          },
          {
            question: 'ما الفرق بين Partner وAgent؟',
            answer: 'Partner يركز على الترويج والإحالة، بينما Agent يدير الإيداعات والسحوبات ويشكّل حلقة الوصل التشغيلية مع اللاعبين.',
          },
          {
            question: 'هل النسب ثابتة ومضمونة؟',
            answer: 'لا، النطاقات المذكورة هي أمثلة شائعة وتتحدد فعلياً حسب الحجم، الخبرة، المدينة، طريقة الدفع، ونوع الاتفاق.',
          },
          {
            question: 'ما الذي يحصل عليه الشريك بعد القبول؟',
            answer: 'مواد تسويقية، دعم من المدير، أدوات متابعة، وتوجيه عملي للإطلاق أو التوسع.',
          },
          {
            question: 'كيف أبدأ بسرعة؟',
            answer: 'راجع مسارك المناسب في صفحة الشراكة ثم استخدم تيليجرام أو البريد الإلكتروني في القسم الأخير لبدء المحادثة.',
          },
        ],
      },
      support: {
        id: 'support',
        eyebrow: 'الدعم',
        title: 'هل تريد الخطوة التالية بعد الأسئلة؟',
        highlightPhrases: ['الخطوة التالية'],
        description:
          'ارجع إلى الرئيسية إذا كنت تريد الرياضة أو الكازينو، أو انتقل إلى الشراكة إذا كنت تبحث عن مسار شريك أو وكيل.',
        primaryCta: {
          label: 'العودة إلى الرئيسية',
          href: '/',
        },
        secondaryCta: {
          label: 'الذهاب إلى الشراكة',
          href: '/partnership#final-cta',
        },
      },
    },
  },
  en: {
    market: 'Iraq',
    locale: 'en',
    direction: getLocaleDirection('en'),
    seo: {
      title: 'MELBET Iraq',
      description: 'Sports, casino, rewards, and partnership routes for Iraq players, partners, and agents.',
    },
    brand: {
      name: 'MELBET Iraq',
      tag: 'Sports, casino, and rewards with fast mobile access.',
    },
    ui: {
      languageLabel: 'Switch language',
    },
    navigation: {
      global: [
        { label: 'Home', href: '/' },
        { label: 'Partnership', href: '/partnership' },
        { label: 'FAQ', href: '/faq' },
      ],
      home: [
        { label: 'Overview', href: '/#top' },
        { label: 'Sports', href: '/#sports' },
        { label: 'Casino', href: '/#casino' },
        { label: 'Promos', href: '/#offers' },
        { label: 'Benefits', href: '/#benefits' },
        { label: 'Start', href: '/#final-cta' },
      ],
      partnership: [
        { label: 'Overview', href: '/partnership#top' },
        { label: 'Why Partner', href: '/partnership#why-partner' },
        { label: 'Routes', href: '/partnership#routes' },
        { label: 'Tools', href: '/partnership#tools' },
        { label: 'Onboarding', href: '/partnership#onboarding' },
        { label: 'Contact', href: '/partnership#final-cta' },
      ],
      faq: [
        { label: 'Players', href: '/faq#players' },
        { label: 'Partnership', href: '/faq#partnership' },
        { label: 'Support', href: '/faq#support' },
      ],
    },
    footer: {
      description:
        'Whether you came for sports, casino, or rewards, start fast and move between sections from mobile without slowing down.',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Partnership', href: '/partnership' },
        { label: 'FAQ', href: '/faq' },
      ],
      note: 'Offers, terms, and partnership or agent setups can vary depending on activity type, agreement, and operating model.',
    },
    home: {
      seo: {
        title: 'MELBET Iraq | Home',
        description: 'Sports, casino, gifts, and rewards for players who want to start fast from mobile.',
      },
      hero: {
        id: 'top',
        eyebrow: 'Player Experience',
        title: 'Stronger sports, deeper casino, and rewards that start from the first move.',
        highlightPhrases: ['sports', 'casino', 'rewards'],
        description:
          'Start with match-day football, move into casino play, and pick up gifts, free spins, or free bets along the way. Sign up fast, switch sections easily, and play from mobile without slowing down.',
        primaryCta: {
          label: 'Start with Sports',
          href: sportsLink,
          external: true,
        },
        secondaryCta: {
          label: 'Explore Casino',
          href: casinoBonusLink,
          external: true,
        },
        highlights: ['Gifts', 'Free spins', 'Free bets', 'First deposit bonus up to 200%'],
        stats: [
          {
            value: '200%',
            label: 'First deposit bonus',
            note: 'Up to 200% when the campaign is active',
          },
          {
            value: '2 in 1',
            label: 'Sports and casino',
            note: 'Quick access to both core player routes',
          },
          {
            value: '360°',
            label: 'Mobile-ready flow',
            note: 'Moves smoothly on smaller screens',
          },
        ],
        stageBadge: 'Tonight',
        stageChips: ['Football', 'Live casino', 'Rewards'],
        stageTitle: 'Match-day football, live casino, and rewards worth using.',
        stageNote: 'Start with the fixtures, jump into casino sessions, or grab a promo before the next kickoff.',
        stageMetrics: [
          { label: 'Kickoff', value: '21:45' },
          { label: 'Launch offer', value: 'Up to 200%' },
          { label: 'Access', value: 'Mobile Ready' },
        ],
        stageCards: [
          {
            eyebrow: 'Match day',
            title: 'Football stays in front',
            description: 'Big matches, live betting, and the kind of match-day energy players expect first.',
            metric: 'Live',
            footnote: 'Go straight to the fixtures most players open first.',
          },
          {
            eyebrow: 'Casino',
            title: 'Live tables and fast sessions',
            description: 'Move quickly between slots, live tables, and instant games without breaking the session.',
            metric: 'Top',
          },
          {
            eyebrow: 'Rewards',
            title: 'Offers with real player value',
            description: 'Gifts, free spins, and free bets that help the player start strong or come back.',
            metric: 'Boost',
          },
        ],
        stageShowcase: [
          {
            title: 'Tonight',
            note: 'A football-led drop timed for the biggest match traffic.',
            imageSrc: '/home/hero/football.png',
            imageAlt: 'Tonight football offer',
            gameIcon: 'FB',
            gameName: 'Derby Rush',
            ratingValue: 5,
            ratingLabel: '4.8 player rating',
            freeSpinsLabel: '120 free spins',
            promoCodeLabel: 'Promo code: NIGHT120',
            validTillLabel: 'Valid till 11:59 PM',
          },
          {
            title: 'Crazy Monday',
            note: 'A slot-heavy kickoff for players who want fast casino sessions.',
            imageSrc: '/home/hero/casino.png',
            imageAlt: 'Crazy Monday slot offer',
            gameIcon: '777',
            gameName: 'Lucky Wheel',
            ratingValue: 5,
            ratingLabel: '4.9 player rating',
            freeSpinsLabel: '75 free spins',
            promoCodeLabel: 'Promo code: CRAZYMONDAY',
            validTillLabel: 'Valid till Monday 23:59',
          },
          {
            title: 'Weekend Rush',
            note: 'Extra value for players coming back late in the week.',
            imageSrc: '/home/hero/promo.png',
            imageAlt: 'Weekend Rush reward offer',
            gameIcon: 'JP',
            gameName: 'Golden Reels',
            ratingValue: 4,
            ratingLabel: '4.7 player rating',
            freeSpinsLabel: '60 free spins',
            promoCodeLabel: 'Promo code: WEEKENDRUSH',
            validTillLabel: 'Valid till Sunday 23:59',
          },
        ],
      },
      sports: {
        id: 'sports',
        eyebrow: 'Sports',
        title: 'The match starts before kickoff.',
        highlightPhrases: ['match'],
        description:
          'Follow strong fixtures, live momentum, and free bet offers around the matches players care about most.',
        cards: [
          {
            eyebrow: 'Football',
            title: 'Football first from the biggest fixtures',
            description: 'Today’s biggest matches, top leagues, and the match-day focus most players open first.',
            metric: 'Top',
            footnote: 'Jump into the biggest fixtures without wasting time.',
          },
          {
            eyebrow: 'Live',
            title: 'Live betting with faster pacing',
            description: 'Move into live match action without fighting through crowded screens or unnecessary steps.',
            metric: 'Live',
          },
          {
            eyebrow: 'Free bets',
            title: 'Promos that strengthen the start',
            description: 'Free bet style offers and match-linked gifts help turn big events into stronger first sessions.',
            metric: 'Bonus',
            footnote: 'Each campaign can show its own real conditions when active.',
          },
          {
            eyebrow: 'Access',
            title: 'Simple entry from mobile',
            description: 'Start from a smaller screen, move between sections quickly, and keep the journey short.',
            metric: 'Mobile',
          },
        ],
      },
      casino: {
        id: 'casino',
        eyebrow: 'Casino',
        title: 'More casino options for every kind of session.',
        highlightPhrases: ['casino'],
        description:
          'Move from slots to live tables and back again while keeping top providers within reach.',
        cards: [
          {
            eyebrow: 'Slots',
            title: 'Fast slots for shorter sessions',
            description: 'A quick route into spinning games, ideal for players who want speed and easy movement between titles.',
            metric: 'Fast',
          },
          {
            eyebrow: 'Live casino',
            title: 'A stronger live casino feel',
            description: 'Live tables and streamed sessions for players who want something closer to a real floor.',
            metric: 'Live',
          },
          {
            eyebrow: 'Table games',
            title: 'Classic table play',
            description: 'Roulette, blackjack, and table categories grouped so you can move between them fast.',
            metric: 'Classic',
          },
          {
            eyebrow: 'Providers',
            title: 'Top game providers',
            description: 'Strong providers keep the line-up interesting across slots, live tables, and instant play.',
            metric: 'Top',
          },
        ],
      },
      promos: {
        id: 'offers',
        eyebrow: 'Promos and Gifts',
        title: 'Rewards that add value to the first session or the comeback.',
        highlightPhrases: ['Rewards', 'first session'],
        description:
          'Pick up gifts, free spins, free bets, and a first deposit bonus up to 200% when the campaign is live.',
        cards: [
          {
            eyebrow: 'Welcome',
            title: 'First deposit bonus up to 200%',
            description: 'A stronger first step for players who want more value from the opening deposit.',
            metric: '200%',
            footnote: 'Exact value and conditions depend on the active campaign.',
          },
          {
            eyebrow: 'Gifts',
            title: 'Flexible gift campaigns',
            description: 'Gift-driven campaigns can support football peaks, casino pushes, or short seasonal bursts.',
            metric: 'Daily',
          },
          {
            eyebrow: 'Free spins',
            title: 'Free spins on selected titles',
            description: 'Extra spins on selected titles give players one more reason to try a game or come back.',
            metric: 'Spins',
          },
          {
            eyebrow: 'Free bets',
            title: 'Free bets for key fixtures',
            description: 'A natural fit for football-first campaigns where timing and momentum matter.',
            metric: 'Bets',
          },
        ],
      },
      trust: {
        id: 'benefits',
        eyebrow: 'Benefits',
        title: 'What players actually need to keep moving.',
        highlightPhrases: ['players', 'need'],
        description:
          'Sign up fast, get help when you need it, and move between sports, casino, and promos without friction.',
        cards: [
          {
            eyebrow: 'Signup',
            title: 'Faster sign-up path',
            description: 'A shorter route into sports, casino, and promos without forcing the player through clutter.',
            metric: 'Fast',
          },
          {
            eyebrow: 'Support',
            title: 'Support when you need it',
            description: 'Get direct help and simple answers when you want to move, claim an offer, or keep playing.',
            metric: 'Direct',
          },
          {
            eyebrow: 'Mobile',
            title: 'Made for mobile play',
            description: 'Tap, move, and switch sections easily even when you stay on a smaller screen.',
            metric: 'Ready',
          },
          {
            eyebrow: 'Providers',
            title: 'Providers players already know',
            description: 'Well-known names across the line-up help the offer feel worth the click from the first session.',
            metric: 'Trusted',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'Start Playing',
        title: 'Pick your next move and start now.',
        highlightPhrases: ['next move', 'start'],
        description:
          'Open sports for tonight’s fixtures, jump into casino play, or check the latest promo before you start.',
        primaryCta: {
          label: 'Go to Sports',
          href: sportsLink,
          external: true,
        },
        secondaryCta: {
          label: 'View Promos',
          href: casinoBonusLink,
          external: true,
        },
      },
    },
    partnership: {
      seo: {
        title: 'MELBET Iraq | Partnership',
        description: 'Partnership and agent routes for Iraq with manager support, tools, and direct contact.',
      },
      hero: {
        id: 'top',
        eyebrow: 'Partnership Opportunities',
        title: 'Partner or agent? Choose the route that matches your audience or local network.',
        highlightPhrases: ['Partner', 'agent', 'Choose'],
        description:
          'If you run traffic, a community, a channel, or local transactions, choose the route that fits your work and start with manager support.',
        primaryCta: {
          label: 'View the Routes',
          href: '#routes',
        },
        secondaryCta: {
          label: 'Contact the Team',
          href: '#final-cta',
        },
        highlights: ['Partners', 'Agents', 'Tracking', 'Manager Support'],
        stats: [
          {
            value: '25% - 40%',
            label: 'Revenue share',
            note: 'A common partner range, reviewed case by case',
          },
          {
            value: 'CPA / Hybrid',
            label: 'Alternative deal models',
            note: 'Based on audience type, size, and agreement',
          },
          {
            value: '5% - 10%',
            label: 'Typical agent deposit range',
            note: 'Withdrawals are often around 4% to 8%',
          },
        ],
        stageBadge: 'Operating View',
        stageChips: ['Partner', 'Agent', 'Tracking'],
        stageTitle: 'Choose your route, get your tools, and move with support.',
        stageNote: 'Start as a partner or local agent, get the right setup, and keep moving with manager follow-up.',
        stageMetrics: [
          { label: 'Work routes', value: '02' },
          { label: 'Tracking', value: 'Visible' },
          { label: 'Support', value: 'Manager-led' },
        ],
        stageCards: [
          {
            eyebrow: 'Partner',
            title: 'Promo code and traffic route',
            description: 'For affiliate partners who promote to their own audience, fan base, or community.',
            metric: 'Promo',
          },
          {
            eyebrow: 'Agent',
            title: 'Local transaction route',
            description: 'For local operators who manage deposits, withdrawals, and player-facing transaction flow.',
            metric: 'Cashier',
          },
          {
            eyebrow: 'Managers',
            title: 'Dedicated manager support',
            description: 'Get help with the right model, launch steps, and performance follow-up after you start.',
            metric: 'Support',
          },
        ],
      },
      benefits: {
        id: 'why-partner',
        eyebrow: 'Why Partner',
        title: 'A real opportunity built around more than one earning route.',
        highlightPhrases: ['opportunity', 'earning route'],
        description:
          'Bring traffic, manage local transactions, or do both through an offer that gives you more than one way to earn.',
        cards: [
          {
            eyebrow: 'Market fit',
            title: 'An offer that fits the local market',
            description: 'Sports, casino, and rewards give both partners and agents more than one angle into the same player base.',
            metric: 'Local',
          },
          {
            eyebrow: 'Flexible deals',
            title: 'Different agreement models',
            description: 'Revenue share, CPA, and hybrid options for partners, plus variable agent ranges based on real setup needs.',
            metric: 'Flexible',
            footnote: 'Nothing here should be read as a fixed promise for every case.',
          },
          {
            eyebrow: 'Managers',
            title: 'Dedicated manager guidance',
            description: 'Managers help shape the right route, review performance, and support launch or expansion decisions.',
            metric: 'Guided',
          },
          {
            eyebrow: 'Visibility',
            title: 'Tracking that shows real movement',
            description: 'Follow traffic, campaign response, and operating activity so you know where to push next.',
            metric: 'Track',
          },
        ],
      },
      routes: {
        id: 'routes',
        eyebrow: 'Routes',
        title: 'Two clear ways in: Partner or Agent.',
        highlightPhrases: ['Partner', 'Agent'],
        description:
          'Choose the route that matches how you actually work. Partners drive promotion and traffic. Agents run transactions and local player operations.',
        cards: [
          {
            eyebrow: 'Affiliate partner',
            title: 'Partner',
            description:
              'Affiliate partners promote the company offer to their own audience, fan base, channel, or community using a dedicated promo route or code.',
            metric: '25% - 40%',
            footnote: 'Typical ranges depend on audience size, traffic quality, experience, and final agreement.',
            bullets: [
              'Revenue share commonly sits between 25% and 40%',
              'CPA deals may be available',
              'Hybrid models may be available',
              'Dedicated managers help shape the right structure',
            ],
          },
          {
            eyebrow: 'Local operations',
            title: 'Agent',
            description:
              'Agents act as the local cashier or transaction representative, handling deposits and withdrawals while connecting players to the platform.',
            metric: '5% - 10%',
            footnote: 'Withdrawal ranges are often around 4% to 8%, depending on city, setup, payment method, and volume.',
            bullets: [
              'Can operate through crypto, bank transfer, or local payment methods',
              'Best suited to local transaction infrastructure',
              'Terms vary by market coverage and operating volume',
              'Managers support setup and ongoing direction',
            ],
          },
        ],
      },
      tools: {
        id: 'tools',
        eyebrow: 'Tools',
        title: 'What do partners and agents get after they start?',
        highlightPhrases: ['partners', 'agents', 'start'],
        description:
          'Start with marketing tools, tracking, and manager support that help with promotion, setup, and day-to-day follow-up.',
        cards: [
          {
            eyebrow: 'Marketing kit',
            title: 'Ready marketing tools',
            description: 'Use launch-ready copy, campaign messaging, and materials that help you start without delay.',
            metric: 'Ready',
          },
          {
            eyebrow: 'Tracking',
            title: 'Tracking and performance visibility',
            description: 'Track traffic sources, campaign movement, and the next place to push or adjust.',
            metric: 'Visible',
          },
          {
            eyebrow: 'Operations',
            title: 'Operational help',
            description: 'Managers support setup, workflow, and the practical side of launching as a partner or agent.',
            metric: 'Support',
          },
          {
            eyebrow: 'Payments',
            title: 'Flexible local payment routes',
            description: 'The setup can be shaped around the city, payment method, and local transaction infrastructure.',
            metric: 'Local',
          },
        ],
      },
      steps: {
        id: 'onboarding',
        eyebrow: 'Onboarding',
        title: 'From first message to launch, the route stays practical.',
        highlightPhrases: ['first message', 'launch'],
        description:
          'Choose the right route, review the terms, receive the tools, and go live with manager support.',
        items: [
          {
            step: '01',
            title: 'Send your request',
            description: 'Start by showing whether you fit the partner route or the agent route.',
          },
          {
            step: '02',
            title: 'Review the right model',
            description: 'Audience size, city, payment method, and experience help shape the best starting agreement.',
          },
          {
            step: '03',
            title: 'Receive tools and setup',
            description: 'Get the promo path, materials, and any operating notes needed for launch.',
          },
          {
            step: '04',
            title: 'Launch and track',
            description: 'Start promoting or handling local transactions, then track the response with your manager.',
          },
          {
            step: '05',
            title: 'Scale with confidence',
            description: 'Once the first results are clear, the route can expand through better terms, more channels, or broader coverage.',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'Start the Conversation',
        title: 'If you are ready to work as a partner or agent, choose your channel and move now.',
        highlightPhrases: ['partner', 'agent', 'move now'],
        description:
          'Send your audience details, city coverage, or operating setup on Telegram or email and the team will point you to the right route.',
        helperText:
          'Final terms and commission ranges are reviewed after checking audience size, city coverage, payment method, and operating plan.',
        primaryCta: {
          label: 'Read the FAQ',
          href: '/faq#partnership',
        },
        channels: [
          {
            ...messagingChannels.telegram,
            label: 'Contact on Telegram',
          },
          {
            ...messagingChannels.email,
            label: 'Contact by Email',
          },
        ],
      },
    },
    faq: {
      seo: {
        title: 'MELBET Iraq | FAQ',
        description: 'Short answers for players, partners, and agents in one Iraq FAQ.',
      },
      intro: {
        id: 'top',
        eyebrow: 'FAQ',
        title: 'Quick answers before you play or reach out as a partner.',
        highlightPhrases: ['Quick answers', 'play', 'partner'],
        description:
          'Check the key points first, then move to the player route or the partnership route that fits you.',
        primaryCta: {
          label: 'Player FAQ',
          href: '#players',
        },
        secondaryCta: {
          label: 'Partnership FAQ',
          href: '#partnership',
        },
      },
      player: {
        id: 'players',
        eyebrow: 'Players',
        title: 'Player FAQ',
        highlightPhrases: ['Player'],
        description: 'Short answers players usually want before the first session.',
        items: [
          {
            question: 'What will I find on the home page?',
            answer: 'Sports, casino, promos, and the key player benefits that help you start fast.',
          },
          {
            question: 'Is football a core part of the offer?',
            answer: 'Yes. Football sits at the front of the sports experience, especially around live matches and major fixtures.',
          },
          {
            question: 'What kind of promos are expected?',
            answer: 'Gifts, free spins, free bets, and a first deposit bonus up to 200% when the matching campaign is active.',
          },
          {
            question: 'Does casino play work well on mobile?',
            answer: 'Yes. Slots, live games, and tables are easy to open and move between from a smaller screen.',
          },
          {
            question: 'Where do I go if I need help?',
            answer: 'Go back to the support CTA or move to the partnership page if you want direct contact with the team.',
          },
        ],
      },
      partnership: {
        id: 'partnership',
        eyebrow: 'Partnership',
        title: 'Partnership FAQ',
        highlightPhrases: ['Partnership'],
        description: 'Short answers around the partner route, the agent route, and how deals are handled.',
        items: [
          {
            question: 'Who can apply as a partner or agent?',
            answer: 'Anyone with a real audience, an active community, traffic experience, or local transaction coverage can be reviewed.',
          },
          {
            question: 'What is the difference between a partner and an agent?',
            answer: 'Partners focus on promotion and traffic. Agents focus on deposits, withdrawals, and local player transaction support.',
          },
          {
            question: 'Are the percentages fixed for everyone?',
            answer: 'No. The listed ranges are typical examples and depend on traffic, city, payment method, experience, and agreement.',
          },
          {
            question: 'What support is included after approval?',
            answer: 'Managers, marketing tools, tracking visibility, campaign help, and operating guidance can all be part of the setup.',
          },
          {
            question: 'How do I start quickly?',
            answer: 'Review the routes on the partnership page, then use the Telegram or email CTA at the end of the page to begin.',
          },
        ],
      },
      support: {
        id: 'support',
        eyebrow: 'Support',
        title: 'Need your next move after the FAQ?',
        highlightPhrases: ['next move'],
        description:
          'Go back to home for sports, casino, and promos, or open the partnership page if you want the partner or agent route.',
        primaryCta: {
          label: 'Back to Home',
          href: '/',
        },
        secondaryCta: {
          label: 'Go to Partnership',
          href: '/partnership#final-cta',
        },
      },
    },
  },
};

export const iraqContent = iraqContentByLocale.ar;

export function getIraqContent(locale: Locale) {
  return iraqContentByLocale[locale];
}
