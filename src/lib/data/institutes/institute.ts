import { bacTest, bacWorkingPlan } from './shared';
import { teachersData } from '../teachers';


export const nukhbehInstitute = {
  slug: '/institutes/institute',
  name: 'مركز النخبة التعليمي',
  logo: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:eco/v1737824408/register/images/logos/qzb9rs1zt2zhou1o1eeo.png',
  logoAlt: "لوغو مركز النخبة التعليمي",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يعمل مركز النخبة التعليمي على تقديم تعليم عالي الجودة من خلال مراكزه الموزعة في مدينة حلب. 
      يهدف المركز إلى بناء جيل واعٍ ومثقف، مع التركيز على تعزيز الثقة بالنفس وروح التحدي لدى الطلاب، مما يساعدهم على تحقيق أهدافهم الأكاديمية والشخصية.
    `,
  images: ['https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:eco/v1737824251/register/images/institutes/institute/zrtji4uljhutjftw2nqq.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:eco/v1737824247/register/images/institutes/institute/nxlwxaht8gtqlsuwucbl.jpg'],
  address: 'حي السبيل - أمام جامع الرحمن.',
  reception: '0989557705',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/institute/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      teachers: [

        // math
        teachersData.jamalSheikhDiab,
        teachersData.abdalazizZakaria,
        teachersData.anasDrgham,


        // phy
        teachersData.jalalAddas,
        teachersData.anasNajjar,
        teachersData.alaaArab,
        teachersData.younesDsouki,

        // Chem
        teachersData.mahmoudDarwish,
        teachersData.mahmoudHreh,


        // Science
        teachersData.kamelKadi, teachersData.ahmadOthman, teachersData.othmanAlMohammad,



        // Ar
        teachersData.ramezAlSaeed,
        teachersData.hussamDwick,
        teachersData.sobhiSawwas,

        // en
        teachersData.hasanNaasan,
        // fr
        teachersData.alaaAttar,
        // rele
        teachersData.ihabGamal
      ],
      imgs: [],
      test: bacTest,
      workingPlans: bacWorkingPlan,
    },
  ]
}