import type { MarketContent } from '@/content/markets/types';
import { getLocaleDirection, type Locale } from '@/lib/i18n';

const messagingChannels = {
  telegram: {
    href: '#',
    iconSrc: '/telegram.png',
    platform: 'telegram' as const,
  },
  whatsapp: {
    href: '#',
    iconSrc: '/whatsapp.png',
    platform: 'whatsapp' as const,
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
        'سواء كنت هنا للرياضة أو الكازينو أو العروض، تمنحك MELBET العراق تجربة أسرع وأوضح وجاهزة للهاتف من أول خطوة.',
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
        description:
          'ادخل إلى مباريات اليوم، ألعاب الكازينو، والهدايا التي ترفع بداية اللعب. تسجيل سريع، وصول سهل من الهاتف، وتجربة واضحة بين الرياضة والكازينو والعروض.',
        primaryCta: {
          label: 'ابدأ من الرياضة',
          href: '#sports',
        },
        secondaryCta: {
          label: 'اكتشف الكازينو',
          href: '#casino',
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
        stageTitle: 'إيقاع مباراة، ألعاب مباشرة، ومسار واضح للعروض',
        stageNote: 'الواجهة مبنية لتبدأ من الرياضة ثم توسع التجربة إلى الكازينو والعروض دون تشتيت.',
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
            description: 'تنقل مريح بين السلوات، البث المباشر، والألعاب الفورية داخل مساحة واحدة.',
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
            note: 'دفعة عودة نهاية الأسبوع مع بطاقة مكافآت أوضح داخل الواجهة.',
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
        description:
          'هذا القسم يبيع أجواء كرة القدم كما يحبها اللاعب: مباريات قوية، متابعة حية، ورهانات مجانية تدعم قرار البداية في الوقت المناسب.',
        cards: [
          {
            eyebrow: 'Football',
            title: 'تركيز على مباريات كرة القدم',
            description: 'مباريات اليوم، قمم الدوريات، وأجواء يوم المباراة داخل تجربة واضحة وسهلة القراءة.',
            metric: 'Top',
            footnote: 'مصمم لمن يريد الوصول إلى أهم المواجهات بسرعة.',
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
        title: 'قسم ألعاب متنوع بجودة أقرب لما يبحث عنه اللاعب.',
        description:
          'من السلوات إلى الطاولات والبث المباشر، التجربة هنا تعطي اللاعب مساحة واضحة لاختيار نوع اللعب مع حضور قوي لأفضل مزودي الألعاب.',
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
            description: 'طاولات وبث حي لمن يريد تجربة أقرب إلى أجواء الصالة مع وضوح أفضل في الهاتف.',
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
            title: 'أقوى مزودي الألعاب في العالم',
            description: 'فئات كازينو مبنية حول جودة الألعاب وتنوعها، لا حول أسماء كثيرة بلا قيمة حقيقية.',
            metric: 'Top',
            footnote: 'التجربة تبرز النوع المناسب بسرعة بدل إغراق اللاعب بالخيارات.',
          },
        ],
      },
      promos: {
        id: 'offers',
        eyebrow: 'العروض والهدايا',
        title: 'عروض تشجع البداية والعودة، لا مجرد ضوضاء على الصفحة.',
        description:
          'الوعود هنا مباشرة: هدايا، لفات مجانية، رهانات مجانية، ومكافأة أول إيداع حتى 200% عندما يكون العرض متاحاً.',
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
        description:
          'القاعدة هنا عملية: تسجيل أسرع، مزودون موثوقون، دعم أوضح، وتجربة هاتف لا تجعل اللاعب يقاتل مع الواجهة.',
        cards: [
          {
            eyebrow: 'Signup',
            title: 'تسجيل أسرع',
            description: 'ابدأ من المسار المناسب بسرعة ومن دون إرباك في التنقل بين الرياضة والكازينو والعروض.',
            metric: 'Fast',
          },
          {
            eyebrow: 'Support',
            title: 'خدمة ودعم بجودة أفضل',
            description: 'لغة مباشرة، نقاط مساعدة واضحة، وتجربة تشعر اللاعب أن الوصول إلى الدعم سهل عندما يحتاجه.',
            metric: 'Direct',
          },
          {
            eyebrow: 'Mobile',
            title: 'مبنية للهاتف أولاً',
            description: 'تسلسل بصري قوي، أزرار سهلة اللمس، ومسافات مدروسة تمنع الزحام على الشاشات الصغيرة.',
            metric: 'Ready',
          },
          {
            eyebrow: 'Providers',
            title: 'مزودون معروفون وتجربة أنظف',
            description: 'القيمة تأتي من جودة العرض وتنظيمه، لا من زيادة الكلام أو المبالغة في الوعود.',
            metric: 'Trusted',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'ابدأ اللعب',
        title: 'اختر المسار الأقرب لك وادخل التجربة من القسم المناسب.',
        description:
          'ابدأ من الرياضة إذا كنت تبحث عن طاقة يوم المباراة، أو انتقل إلى الكازينو إذا كنت تريد جلسات أسرع، أو راجع العروض قبل أول خطوة.',
        primaryCta: {
          label: 'اذهب إلى الرياضة',
          href: '#sports',
        },
        secondaryCta: {
          label: 'راجع العروض',
          href: '#offers',
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
        description:
          'إذا كنت تملك جمهوراً، قناة، مجتمعاً، أو بنية معاملات محلية، فهذه الصفحة تشرح كيف تدخل كشريك أو كوكيل مع أدوات جاهزة، متابعة أوضح، ودعم من مديري الشراكة.',
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
        stageTitle: 'بداية أوضح، أدوات جاهزة، ومسار قابل للتوسع.',
        stageNote: 'الهيكل يشرح الفرصة بوضوح ثم يقود إلى أدوات المتابعة، خطوات البدء، ونقطة التواصل النهائية.',
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
            description: 'مراجعة أفضل نموذج، مساعدة في الإطلاق، ورؤية أوضح للأداء وخيارات التوسع.',
            metric: 'Support',
          },
        ],
      },
      benefits: {
        id: 'why-partner',
        eyebrow: 'لماذا الشراكة',
        title: 'فرصة واقعية مبنية على أكثر من مسار ربح واحد.',
        description:
          'الصفحة لا تبيع عنواناً عاماً. هي تشرح فرصة يمكن أن تناسب صاحب جمهور أو شريك إحالة أو وكيل معاملات يبحث عن تشغيل محلي مباشر.',
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
            title: 'رؤية أوضح للحملات والتشغيل',
            description: 'تتبع، أدوات، ومواد تسويقية تقلل العشوائية وتساعد على قياس ما يتحرك فعلاً.',
            metric: 'Track',
          },
        ],
      },
      routes: {
        id: 'routes',
        eyebrow: 'المسارات',
        title: 'طريقان واضحان للدخول: Partner أو Agent.',
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
        description:
          'الأدوات هنا تدعم البيع والتشغيل معاً: مواد جاهزة، متابعة أوضح، ومساندة عملية من المديرين عند إطلاق الحملات أو إدارة النشاط.',
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
            description: 'رؤية أوضح لمصدر الحركة، الحملة الأفضل، وما الذي يستحق التوسع أو التعديل.',
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
        title: 'من أول رسالة حتى أول تشغيل، الطريق واضح.',
        description:
          'المسار مصمم ليبدأ بسرعة لكن من دون غموض: تحديد نوع الفرصة، مراجعة الشروط المناسبة، ثم الإطلاق والمتابعة مع المدير.',
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
            description: 'أطلق الحملة أو التشغيل المحلي مع متابعة أوضح للأداء والاستجابة.',
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
        description:
          'تحدث مع الفريق عبر تيليجرام أو واتساب لعرض جمهورك، مدينتك، أو طريقة التشغيل التي تناسبك. بعدها يتم توجيهك إلى المسار الأنسب لك.',
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
            ...messagingChannels.whatsapp,
            label: 'تواصل عبر واتساب',
          },
        ],
      },
    },
    faq: {
      seo: {
        title: 'MELBET العراق | الأسئلة الشائعة',
        description: 'أسئلة سريعة للاعبين وللشركاء داخل صفحة FAQ متناسقة مع نفس الهوية العراقية.',
      },
      intro: {
        id: 'top',
        eyebrow: 'FAQ',
        title: 'إجابات سريعة للاعبين والشركاء من دون لف طويل.',
        description:
          'إذا كنت تريد فهم ما الذي ينتظرك كلاعب أو كشريك أو كوكيل، فهذه الصفحة تختصر أهم النقاط بطريقة سهلة للمسح والقراءة.',
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
        description: 'ما الذي يريد اللاعب معرفته قبل أن يبدأ؟ الإجابات هنا مباشرة وقصيرة.',
        items: [
          {
            question: 'ماذا أجد في الصفحة الرئيسية؟',
            answer: 'ستجد الرياضة، الكازينو، العروض، والمزايا مرتبة بشكل يقودك سريعاً إلى القسم الذي يهمك.',
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
            answer: 'نعم، تقسيم الكازينو مبني ليبقى واضحاً وسريعاً على الهاتف في السلوات والألعاب الحية والطاولة.',
          },
          {
            question: 'هل توجد مساعدة إذا احتجت إلى توضيح؟',
            answer: 'الرحلة نفسها مبنية لتكون أوضح، ويمكنك دائماً استخدام صفحة الأسئلة أو صفحة الشراكة للوصول إلى نقطة التواصل المناسبة.',
          },
        ],
      },
      partnership: {
        id: 'partnership',
        eyebrow: 'Partnership',
        title: 'أسئلة الشراكة',
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
            answer: 'راجع مسارك المناسب في صفحة الشراكة ثم استخدم تيليجرام أو واتساب في القسم الأخير لبدء المحادثة.',
          },
        ],
      },
      support: {
        id: 'support',
        eyebrow: 'الدعم',
        title: 'هل تريد طريقاً أوضح بعد قراءة الأسئلة؟',
        description:
          'ارجع إلى الرئيسية إذا كنت لاعباً، أو انتقل إلى صفحة الشراكة إذا كنت تريد فرصة Partner أو Agent مع نقطة تواصل مباشرة.',
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
      description: 'A dark Iraq market landing with sports, casino, rewards, and partnership routes in one polished system.',
    },
    brand: {
      name: 'MELBET Iraq',
      tag: 'Sports, casino, and rewards in a mobile-first premium flow.',
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
        'Whether you are here for sports, casino, or rewards, MELBET Iraq is built to give you a faster, clearer, mobile-ready experience from the first step.',
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
        description: 'Sports, casino, rewards, and fast access in a premium Iraq player experience.',
      },
      hero: {
        id: 'top',
        eyebrow: 'Player Experience',
        title: 'Stronger sports, deeper casino, and rewards that start from the first move.',
        description:
          'Step into match-day action, casino play, and promo offers built to convert fast. The flow is simple, mobile-ready, and clearly split between sports, casino, and rewards.',
        primaryCta: {
          label: 'Start with Sports',
          href: '#sports',
        },
        secondaryCta: {
          label: 'Explore Casino',
          href: '#casino',
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
            note: 'Clear access to both core player routes',
          },
          {
            value: '360°',
            label: 'Mobile-ready flow',
            note: 'Built to stay sharp on smaller screens',
          },
        ],
        stageBadge: 'Tonight',
        stageChips: ['Football', 'Live casino', 'Rewards'],
        stageTitle: 'Match energy, live games, and a cleaner route to offers.',
        stageNote: 'The journey starts with sports and expands naturally into casino and promos without losing clarity.',
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
            footnote: 'Built around the events that drive fast decisions.',
          },
          {
            eyebrow: 'Casino',
            title: 'Live tables and fast sessions',
            description: 'Move quickly between slots, live tables, and instant games inside one clear surface.',
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
            note: 'A rewards card built for late-week return play and stronger re-entry.',
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
        description:
          'This section sells football the right way: strong fixtures, live momentum, and free bet energy around the matches players care about most.',
        cards: [
          {
            eyebrow: 'Football',
            title: 'A clear football-first route',
            description: 'Today’s biggest matches, top leagues, and match-day focus inside a clean mobile-friendly layout.',
            metric: 'Top',
            footnote: 'Made for fast entry into the most requested fixtures.',
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
        title: 'A broader game floor with better structure.',
        description:
          'From slots to live tables, the casino flow is built to help players find the right category fast while keeping top global providers in view.',
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
            description: 'Roulette, blackjack, and table categories organized for easier browsing and better clarity.',
            metric: 'Classic',
          },
          {
            eyebrow: 'Providers',
            title: 'Top game providers',
            description: 'The experience is positioned around quality and variety, not long lists that slow the decision down.',
            metric: 'Top',
          },
        ],
      },
      promos: {
        id: 'offers',
        eyebrow: 'Promos and Gifts',
        title: 'Offers that support the player journey instead of crowding it.',
        description:
          'The message is simple: gifts, free spins, free bets, and a first deposit bonus up to 200% when the right campaign is live.',
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
            description: 'A clean way to add extra reason to test or revisit casino play.',
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
        description:
          'This foundation stays practical: faster sign-up, cleaner support points, reliable providers, and a mobile flow that does not get in the way.',
        cards: [
          {
            eyebrow: 'Signup',
            title: 'Faster sign-up path',
            description: 'A shorter route into sports, casino, and promos without forcing the player through clutter.',
            metric: 'Fast',
          },
          {
            eyebrow: 'Support',
            title: 'Better service feel',
            description: 'Direct wording, cleaner help points, and a journey that feels easier to understand.',
            metric: 'Direct',
          },
          {
            eyebrow: 'Mobile',
            title: 'Built for mobile first',
            description: 'Tap-friendly buttons, stronger rhythm, and spacing that works better on smaller screens.',
            metric: 'Ready',
          },
          {
            eyebrow: 'Providers',
            title: 'Trusted provider positioning',
            description: 'The promise comes from quality, organization, and clarity instead of inflated claims.',
            metric: 'Trusted',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'Start Playing',
        title: 'Choose the route that fits your mood and move in fast.',
        description:
          'Go straight to sports for match-day intensity, jump into casino for faster sessions, or check the promos before you make your first move.',
        primaryCta: {
          label: 'Go to Sports',
          href: '#sports',
        },
        secondaryCta: {
          label: 'View Promos',
          href: '#offers',
        },
      },
    },
    partnership: {
      seo: {
        title: 'MELBET Iraq | Partnership',
        description: 'A cleaner Iraq partnership page for partners and agents with stronger routes, tools, and contact CTA.',
      },
      hero: {
        id: 'top',
        eyebrow: 'Partnership Opportunities',
        title: 'Partner or agent? Choose the route that matches your audience or local network.',
        description:
          'If you run traffic, a community, a channel, or a local transaction setup, this page shows how to enter as an affiliate partner or agent with better visibility, ready tools, and support from dedicated managers.',
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
        stageTitle: 'A cleaner start, ready support, and a route built to scale.',
        stageNote: 'The structure explains the opportunity first, then moves into tools, onboarding, and a direct contact close.',
        stageMetrics: [
          { label: 'Work routes', value: '02' },
          { label: 'Tracking', value: 'Visible' },
          { label: 'Support', value: 'Manager-led' },
        ],
        stageCards: [
          {
            eyebrow: 'Partner',
            title: 'Promo code and traffic route',
            description: 'Built for affiliate partners who promote to their own audience, fan base, or community.',
            metric: 'Promo',
          },
          {
            eyebrow: 'Agent',
            title: 'Local transaction route',
            description: 'Built for local operators who manage deposits, withdrawals, and player-facing transaction flow.',
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
        description:
          'This page is not selling a vague label. It is designed to help affiliate partners and local agents understand where they fit and how the work model can start cleanly.',
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
            title: 'Clearer operating visibility',
            description: 'Tracking, support, and campaign structure make it easier to see what is working and what should grow.',
            metric: 'Track',
          },
        ],
      },
      routes: {
        id: 'routes',
        eyebrow: 'Routes',
        title: 'Two clear ways in: Partner or Agent.',
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
        description:
          'The support layer is built for both sales and operations: marketing tools, tracking visibility, campaign guidance, and practical help from managers.',
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
            description: 'Get a clearer view of traffic sources, campaign movement, and where to improve or scale.',
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
        title: 'From first message to first live setup, the path is clear.',
        description:
          'The goal is fast entry without confusion: define the route, review the right terms, receive the tools, launch, then scale with manager support.',
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
            description: 'Start promotion or local operations with clearer follow-up on activity and response.',
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
        description:
          'Use Telegram or WhatsApp to show your audience, city coverage, or operating setup. From there, the team can direct you to the right route.',
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
            ...messagingChannels.whatsapp,
            label: 'Contact on WhatsApp',
          },
        ],
      },
    },
    faq: {
      seo: {
        title: 'MELBET Iraq | FAQ',
        description: 'Short answers for players, partners, and agents inside one cleaner FAQ page.',
      },
      intro: {
        id: 'top',
        eyebrow: 'FAQ',
        title: 'Quick answers for players and partnership leads without the long scroll.',
        description:
          'If you want the short version of what the player offer or partnership route looks like, this page keeps the answers easy to scan.',
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
        description: 'The questions most players ask before they choose a route.',
        items: [
          {
            question: 'What will I find on the home page?',
            answer: 'A cleaner player route across sports, casino, promos, and the key benefits that support the first session.',
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
            question: 'Is the casino experience built for mobile?',
            answer: 'Yes. The casino layout is built to stay clear and fast on smaller screens across slots, live games, and tables.',
          },
          {
            question: 'Where do I go if I need more clarity?',
            answer: 'The FAQ gives the short answers first, and the partnership page can also direct you to the contact point when needed.',
          },
        ],
      },
      partnership: {
        id: 'partnership',
        eyebrow: 'Partnership',
        title: 'Partnership FAQ',
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
            answer: 'Review the routes on the partnership page, then use the Telegram or WhatsApp CTA at the end of the page to begin.',
          },
        ],
      },
      support: {
        id: 'support',
        eyebrow: 'Support',
        title: 'Need the next step after the FAQ?',
        description:
          'Go back to the player home if you want the sports and casino offer, or move to the partnership page if you want the partner or agent route.',
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
