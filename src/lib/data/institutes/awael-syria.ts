

import { teachersData } from '../teachers';
import { bacTest, bacWorkingPlan, ninthTest, ninthWorkingPlan } from './shared';


export const awaelSyriaInistitute = {
  slug: '/institutes/awael-syria',
  name: 'معهد أوائل سوريا',
  logo: 'https://res.cloudinary.com/dgive1g2g/image/upload/w_200,q_auto:eco/v1737824402/register/images/logos/hsyy0uqeklc1mbi5wsh0.png',
  logoAlt: "لوغو معهد أوائل سوريا",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يقدم معهد أوائل سوريا تجربة تعليمية متميزة عبر مركزه في حلب. 
      يهدف المعهد إلى تخريج جيل مثقف فكريًا وأخلاقيًا من خلال تعزيز روح المنافسة والتنظيم، مع تشجيع الطلاب على الإصرار لتحقيق أهدافهم وجعل المستحيل ممكنًا. 
      نسعى لتطوير طلابنا ليصبحوا مميزين في مختلف المجالات.
    `,
  images: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824210/register/images/institutes/awael-syria/jzdukiiwmhvbchuwsclt.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824192/register/images/institutes/awael-syria/htvju4y6xtnerezg8szv.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824188/register/images/institutes/awael-syria/mkx2lnfauubcvwmu4suq.jpg'],
  address: 'الفرقان - خلف بنك البركة.',
  reception: '0989557707',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/awael-syria/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824175/register/images/institutes/awael-syria/12/fgmw80nqxbpljnxneipw.jpeg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824173/register/images/institutes/awael-syria/12/z4hkwmzqhhrcahbszlsl.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824167/register/images/institutes/awael-syria/12/odv7upeiizlhem0g2h9h.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824154/register/images/institutes/awael-syria/12/inusuzbm1e7dhm91uziz.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824152/register/images/institutes/awael-syria/12/jea8l3juvsliumtljg1r.jpg'],
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
      heading: 'التاسع',
      href: '/institutes/awael-syria/ninth',
      description: 'الصف التاسع هو مرحلة مفصلية نحو الامتحانات الشاملة التي تحدد مسار الطلاب المستقبلي. في مدارس نخبة حلب، نقدم برامج تعليمية مبتكرة وموجهة تساعد الطلاب على التفوق في الامتحانات الرسمية. نضمن بيئة تعليمية محفزة وداعمة تجعل من التفوق الخيار الوحيد أمامهم.',
      teachers: [

        // math


        // phy and chem
        teachersData.mehdiBasteka,

        // science
        teachersData.saleemKaroub,

        // ar 
        teachersData.yamanAbras,

        // en
        teachersData.mohannadAshor,

        // fr

        teachersData.ammarKhdry,
        teachersData.nihadSeno,

        // t + j
        teachersData.adeebZohor,


        // rel
        teachersData.ihabGamal


      ],
      imgs: [],

      test: ninthTest,
      workingPlans: ninthWorkingPlan,
    },
  ]
}