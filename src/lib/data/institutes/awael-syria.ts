import awael1 from '$lib/assets/images/institutes/awael-syria/outer.jpg?enhanced'
import awael from '$lib/assets/images/logos/nukhbeh-awael.png?enhanced';
import { teachersData } from '../teachers';
import { bacTest, bacWorkingPlan, ninthTest, ninthWorkingPlan } from './shared';


export const awaelSyriaInistitute = {
  slug: '/institutes/awael-syria',
  name: 'معهد أوائل سوريا',
  logo: awael,
  logoAlt: "لوغو معهد أوائل سوريا",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يقدم معهد أوائل سوريا تجربة تعليمية متميزة عبر مركزه في حلب. 
      يهدف المعهد إلى تخريج جيل مثقف فكريًا وأخلاقيًا من خلال تعزيز روح المنافسة والتنظيم، مع تشجيع الطلاب على الإصرار لتحقيق أهدافهم وجعل المستحيل ممكنًا. 
      نسعى لتطوير طلابنا ليصبحوا مميزين في مختلف المجالات.
    `,
  images: [awael1],
  address: 'الفرقان - خلف بنك البركة.',
  reception: '0989557707',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/awael-syria/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      teachers: [teachersData.ramezAlSaeed, teachersData.safwanIdress, teachersData.samerSleman, teachersData.hasanNaasan, teachersData.alaaAttar, teachersData.mohammadAlIssa, teachersData.mohammadHilal, teachersData.ahmadOthman, teachersData.ihabGamal,],
      imgs: [],
      test: bacTest,
      workingPlans: bacWorkingPlan,
    },
    {
      heading: 'التاسع',
      href: '/institutes/awael-syria/ninth',
      description: 'الصف التاسع هو مرحلة مفصلية نحو الامتحانات الشاملة التي تحدد مسار الطلاب المستقبلي. في مدارس نخبة حلب، نقدم برامج تعليمية مبتكرة وموجهة تساعد الطلاب على التفوق في الامتحانات الرسمية. نضمن بيئة تعليمية محفزة وداعمة تجعل من التفوق الخيار الوحيد أمامهم.',
      teachers: [teachersData.yamanAbras, teachersData.mehdiBasteka, teachersData.adeebAlsayed, teachersData.adeebZohor, teachersData.ammarKhdry, teachersData.nihadSeno, teachersData.ihabGamal, teachersData.saleemKaroub, teachersData.mohannadAshor],
      imgs: [],

      test: ninthTest,
      workingPlans: ninthWorkingPlan,
    },
  ]
}