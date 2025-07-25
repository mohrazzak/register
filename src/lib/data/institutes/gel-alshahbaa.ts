
import { teachersData } from '../teachers';
import { bacTest, bacWorkingPlan } from './shared';

export const gelAlshahbaaInstitute = {
  slug: '/institutes/alshahba-generation',
  name: 'معهد جيل الشهباء',
  logo: 'https://res.cloudinary.com/dgive1g2g/image/upload/v1738744596/register/images/logos/ewxwyu32d27yyfik4atu.png',
  logoAlt: "لوغو معهد جيل الشهباء",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يسعى معهد جيل الشهباء إلى تقديم تعليم متميز يساعد الطلاب على تحقيق النجاح في جميع المجالات. 
      يتميز المعهد بروح المنافسة الإيجابية وتنظيم البيئة التعليمية، مما يساهم في تعزيز الإبداع والإصرار لدى الطلاب للوصول إلى أعلى المستويات.
    `,
  images: ['https://res.cloudinary.com/dgive1g2g/image/upload/v1737824250/register/images/institutes/gen-alshahba/javfrib19neu98ilyayc.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1738744835/register/images/institutes/gen-alshahba/r418yr5qj5s9lnyiuarp.png', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646149/register/images/institutes/gen-alshahba/gfjvaoxcqeiizfnsbms4.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646150/register/images/institutes/gen-alshahba/xkwr0yht4eekyg3bkvet.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646152/register/images/institutes/gen-alshahba/i3ojsqpy4hra58rfojdc.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646149/register/images/institutes/gen-alshahba/b55zxnku8admhxxun8lz.jpg',


    'https://res.cloudinary.com/dgive1g2g/image/upload/v1739645446/register/images/institutes/shams/jic6asqnvd3rrk60x9q2.jpg'
  ],
  address: 'الفرقان - أمام كلية الاقتصاد.',
  reception: '0989557706',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/alshahba-generation/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737827131/register/images/institutes/gen-alshahba/12/fjsdofd1x8dmtnnv70ob.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1738745155/register/images/institutes/gen-alshahba/12/s9hrrtwq6p7parhd2aij.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824203/register/images/institutes/gen-alshahba/12/y9zgrnyll8wgp5of1rwh.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824210/register/images/institutes/gen-alshahba/12/gpjeo0qeawrv164jrrmi.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1738745153/register/images/institutes/gen-alshahba/12/ldrjpqdwxnyq2kbewuho.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824205/register/images/institutes/gen-alshahba/12/axefrgsw2avpazgvlcey.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646320/register/images/institutes/gen-alshahba/12/ayao116rdud0jxojwg44.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646822/register/images/institutes/gen-alshahba/12/awd4qfnx19rldrqodfsi.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646821/register/images/institutes/gen-alshahba/12/xtci0drilm2fjcufwyhd.jpg'],
      teachers: [
        teachersData.jamalSheikhDiab,
        teachersData.abdalazizZakaria,
        teachersData.anasDrgham,
        teachersData.khaledAljasem,
        teachersData.mohammadFarek,
        teachersData.mohammadSarhan,
        teachersData.waseemShayyah,


        // en 
        teachersData.mohammadHilal,
        teachersData.ahmadMutlaq,
        teachersData.anasNajjar,
        teachersData.mahmoudAlkhalaf,
        teachersData.younesDsouki,
        teachersData.mohammadAmeenSeedo,
        teachersData.mohammadTalalini,



        teachersData.mahmoudDarwish,
        teachersData.samerSleman,
        teachersData.mahmoudHreh,
        teachersData.hazemGhnaimi,
        teachersData.sohaybSarmini,

        teachersData.kamelKadi,
        teachersData.ahmadOthman,
        teachersData.othmanAlMohammad,

        teachersData.ramezAlSaeed,
        teachersData.hussamDwick,

        teachersData.hasanNaasan,
        teachersData.tariqSayedAli,
        teachersData.salemGazeh,
        teachersData.basharGamalAldeen,
        teachersData.ahmadTwish,

        teachersData.alaaAttar,
        teachersData.ahmadKarzon,
        teachersData.mustafaAntakly,
        teachersData.mustafaRslan,
        teachersData.FerasMgadmi,

        teachersData.ihabGamal,
        teachersData.mohammadIssa,
      ],
      test: bacTest,
      workingPlans: bacWorkingPlan,
    },
    {
      heading: 'البكالوريا - مواد',
      href: '/institutes/alshahba-generation/baccalaureate',
      description: `على اعتبار  أنَّ البكالوريا ليست فقط مجرَّد مرحلة دراسيَّة بل إنَّها رحلة مفصليَّة لتحقيق الأحلام والطموحات الأكاديميَّة
وبناءً على اختلاف أهداف الطلاب ارتأينا  في مركز جيل الشهباء افتتاح دورات المواد لتحضير منهاج البكالوريا لطلاب الصف الحادي عشر  وتشمل المواد الأساسيَّة على الشكل الآتي :
الإجبارية : ( الرياضيات -الفيزياء – العلوم )
الاختيارية (حسب رغبة الطالب)  : اللغة العربيَّة  – الكيمياء – اللغة الإنكليزيَّة
كي تكون الداعم الرئيس للبكالوريا  وبهدف توزيع الجهد وتخفيف الضغط عن الطالب في هذه المرحلة .
`,
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737827131/register/images/institutes/gen-alshahba/12/fjsdofd1x8dmtnnv70ob.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1738745155/register/images/institutes/gen-alshahba/12/s9hrrtwq6p7parhd2aij.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824203/register/images/institutes/gen-alshahba/12/y9zgrnyll8wgp5of1rwh.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824210/register/images/institutes/gen-alshahba/12/gpjeo0qeawrv164jrrmi.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1738745153/register/images/institutes/gen-alshahba/12/ldrjpqdwxnyq2kbewuho.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824205/register/images/institutes/gen-alshahba/12/axefrgsw2avpazgvlcey.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646320/register/images/institutes/gen-alshahba/12/ayao116rdud0jxojwg44.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646822/register/images/institutes/gen-alshahba/12/awd4qfnx19rldrqodfsi.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/v1739646821/register/images/institutes/gen-alshahba/12/xtci0drilm2fjcufwyhd.jpg'],
      teachers: [

        // Math
        teachersData.abdalazizZakaria,
        teachersData.anasDrgham,
        teachersData.waseemShayyah,


        // phy
        teachersData.jalalAddas, teachersData.anasNajjar, teachersData.alaaArab,
        teachersData.mohammadAmeenSeedo,

        // Chem

        teachersData.mahmoudDarwish,



        // Science 
        teachersData.kamelKadi, teachersData.ahmadOthman,



        // Ar
        teachersData.ramezAlSaeed, teachersData.sobhiSawwas,



        // En

        teachersData.tariqSayedAli,



      ],
      test: bacTest,
      workingPlans: [
        {
          title: 'الدورة الصيفية',
          description:
            'تبدأ الدورة في 15/7/2025، وتنتهي في 15/9/2025. وتشمل المراجعات الشاملة و التأسيس الضروري لتحضير الطالب للبدء في منهاج البكالوريا، وبعض أبحاث البكالوريا.'
        },
        {
          title: 'الدورة الشتوية',
          description: 'تبدأ الدورة في 15/9/2025، وتنتهي 30/5/2026. وتشمل استكمال منهاج البكالوريا كاملاً مع المذاكرات.'
        },

      ],
    },
  ]
};