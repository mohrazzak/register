// import awael1 from '$lib/assets/images/institutes/awael-syria/outer.jpg?enhanced'
// import awael12 from '$lib/assets/images/institutes/awael-syria/IMG_5250.jpg?enhanced'
// import awael13 from '$lib/assets/images/institutes/awael-syria/IMG_5256.jpg?enhanced'
// import awael from '$lib/assets/images/logos/nukhbeh-awael.png?enhanced';

// import twelve1 from '$lib/assets/images/institutes/awael-syria/12/IMG_5238.jpg?enhanced';
// import twelve12 from '$lib/assets/images/institutes/awael-syria/12/IMG_5242.jpg?enhanced';
// import twelve13 from '$lib/assets/images/institutes/awael-syria/12/IMG_5243.jpg?enhanced';
// import twelve14 from '$lib/assets/images/institutes/awael-syria/12/exam.jpg?enhanced';
// import twelve15 from '$lib/assets/images/institutes/awael-syria/12/in_class.jpg?enhanced';



import { teachersData } from '../teachers';
import { bacTest, bacWorkingPlan, ninthTest, ninthWorkingPlan } from './shared';


export const awaelSyriaInistitute = {
  slug: '/institutes/awael-syria',
  name: 'معهد أوائل سوريا',
  logo: 'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824402/register/images/logos/hsyy0uqeklc1mbi5wsh0.png',
  logoAlt: "لوغو معهد أوائل سوريا",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يقدم معهد أوائل سوريا تجربة تعليمية متميزة عبر مركزه في حلب. 
      يهدف المعهد إلى تخريج جيل مثقف فكريًا وأخلاقيًا من خلال تعزيز روح المنافسة والتنظيم، مع تشجيع الطلاب على الإصرار لتحقيق أهدافهم وجعل المستحيل ممكنًا. 
      نسعى لتطوير طلابنا ليصبحوا مميزين في مختلف المجالات.
    `,
  images: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824210/register/images/institutes/awael-syria/jzdukiiwmhvbchuwsclt.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824192/register/images/institutes/awael-syria/htvju4y6xtnerezg8szv.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824188/register/images/institutes/awael-syria/mkx2lnfauubcvwmu4suq.jpg'],
  address: 'الفرقان - خلف بنك البركة.',
  reception: '0989557707',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/awael-syria/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824175/register/images/institutes/awael-syria/12/fgmw80nqxbpljnxneipw.jpeg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824173/register/images/institutes/awael-syria/12/z4hkwmzqhhrcahbszlsl.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824167/register/images/institutes/awael-syria/12/odv7upeiizlhem0g2h9h.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824154/register/images/institutes/awael-syria/12/inusuzbm1e7dhm91uziz.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824152/register/images/institutes/awael-syria/12/jea8l3juvsliumtljg1r.jpg'],
      teachers: [
        // math
        teachersData.safwanIdress,

        // phy
        teachersData.mohammadHilal,

        // chem
        teachersData.samerSleman,


        // science
        teachersData.ahmadOthman,

        // ar
        teachersData.ramezAlSaeed,


        // en 
        teachersData.hasanNaasan,


        // fr
        teachersData.alaaAttar,


        // rel

        teachersData.ihabGamal



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
        teachersData.adeebAlsayed,


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