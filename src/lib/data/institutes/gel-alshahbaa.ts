
import { teachersData } from '../teachers';
import { bacTest, bacWorkingPlan } from './shared';

export const gelAlshahbaaInstitute = {
  slug: '/institutes/alshahba-generation',
  name: 'معهد جيل الشهباء',
  logo: 'https://res.cloudinary.com/dgive1g2g/image/upload/w_200,q_auto:eco/v1737824413/register/images/logos/adw251vjxi06ssjojvk8.png',
  logoAlt: "لوغو معهد جيل الشهباء",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يسعى معهد جيل الشهباء إلى تقديم تعليم متميز يساعد الطلاب على تحقيق النجاح في جميع المجالات. 
      يتميز المعهد بروح المنافسة الإيجابية وتنظيم البيئة التعليمية، مما يساهم في تعزيز الإبداع والإصرار لدى الطلاب للوصول إلى أعلى المستويات.
    `,
  images: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737824250/register/images/institutes/gen-alshahba/javfrib19neu98ilyayc.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737824240/register/images/institutes/gen-alshahba/z4u3q4qu5ogf1iia9y5q.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737824228/register/images/institutes/gen-alshahba/juruyl499oodbglqwuzi.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737824211/register/images/institutes/gen-alshahba/e1zeougeugdw2pdaohqy.jpg'],
  address: 'الفرقان - أمام كلية الاقتصاد.',
  reception: '0989557706',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/alshahba-generation/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737827131/register/images/institutes/gen-alshahba/12/fjsdofd1x8dmtnnv70ob.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737824203/register/images/institutes/gen-alshahba/12/y9zgrnyll8wgp5of1rwh.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737824210/register/images/institutes/gen-alshahba/12/gpjeo0qeawrv164jrrmi.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_800,q_auto:eco/v1737824205/register/images/institutes/gen-alshahba/12/axefrgsw2avpazgvlcey.jpg'],
      teachers: [

        // Math
        teachersData.abdalazizZakaria,
        teachersData.anasDrgham,
        teachersData.waseemShayyah,


        // phy
        teachersData.jalalAddas, teachersData.anasNajjar, teachersData.alaaArab,

        // Chem

        teachersData.mahmoudDarwish,



        // Science 
        teachersData.kamelKadi, teachersData.ahmadOthman,



        // Ar
        teachersData.ramezAlSaeed, teachersData.sobhiSawwas,



        // En

        teachersData.tariqSayedAli,

        // rel
        teachersData.ihabGamal


      ],
      test: bacTest,
      workingPlans: bacWorkingPlan,
    },
  ]
};