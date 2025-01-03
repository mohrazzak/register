import genAlshahba1 from '$lib/assets/images/institutes/gen-alshahba/outer.jpg?enhanced'
import genAlshahba2 from '$lib/assets/images/institutes/gen-alshahba/registeration.jpg?enhanced'
import shahba from '$lib/assets/images/logos/nukhbeh-shahba.png?enhanced';
import { teachersData } from '../teachers';
import { bacTest, bacWorkingPlan } from './shared';

export const gelAlshahbaaInstitute = {
  slug: '/institutes/alshahba-generation',
  name: 'معهد جيل الشهباء',
  logo: shahba,
  logoAlt: "لوغو معهد جيل الشهباء",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يسعى معهد جيل الشهباء إلى تقديم تعليم متميز يساعد الطلاب على تحقيق النجاح في جميع المجالات. 
      يتميز المعهد بروح المنافسة الإيجابية وتنظيم البيئة التعليمية، مما يساهم في تعزيز الإبداع والإصرار لدى الطلاب للوصول إلى أعلى المستويات.
    `,
  images: [genAlshahba1, genAlshahba2],
  address: 'الفرقان - أمام كلية الاقتصاد.',
  reception: '0989557706',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/alshahba-generation/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: [],
      teachers: [teachersData.abdalazizZakaria, teachersData.anasDrgham, teachersData.jalalAddas, teachersData.anasDrgham, teachersData.alaaArab, teachersData.waseemShayyah, teachersData.mahmoudDarwish, teachersData.kamelKadi, teachersData.ahmadOthman, teachersData.ramezAlSaeed, teachersData.sobhiSawwas, teachersData.tariqSayedAli, teachersData.mohammadAlIssa, teachersData.ihabGamal],
      test: bacTest,
      workingPlans: bacWorkingPlan,
    },
  ]
};