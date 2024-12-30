import inistitute from '$lib/assets/images/logos/nukhbeh-inst.png?enhanced';
import inistitute1 from '$lib/assets/images/institutes/institute/outer.jpg?enhanced'
import inistitute2 from '$lib/assets/images/institutes/institute/inside.jpg?enhanced'
import inistitute3 from '$lib/assets/images/institutes/institute/mktb.jpg?enhanced'
import { bacTest, bacWorkingPlan } from './shared';
import { teachersData } from '../teachers';


export const nukhbehInstitute = {
  slug: '/institutes/institute',
  name: 'مركز النخبة التعليمي',
  logo: inistitute,
  logoAlt: "لوغو مركز النخبة التعليمي",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يعمل مركز النخبة التعليمي على تقديم تعليم عالي الجودة من خلال مراكزه الموزعة في مدينة حلب. 
      يهدف المركز إلى بناء جيل واعٍ ومثقف، مع التركيز على تعزيز الثقة بالنفس وروح التحدي لدى الطلاب، مما يساعدهم على تحقيق أهدافهم الأكاديمية والشخصية.
    `,
  images: [inistitute1, inistitute2, inistitute3],
  address: 'حي السبيل - أمام جامع الرحمن.',
  reception: '0989557705',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/institute/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      teachers: [teachersData.jamalSheikhDiab, teachersData.abdalazizZakaria, teachersData.anasDrgham, teachersData.jalalAddas, teachersData.anasNajjar, teachersData.alaaArab, teachersData.younesDsouki, teachersData.mahmoudDarwish, teachersData.mahmoudHreh, teachersData.kamelKadi, teachersData.ahmadOthman, teachersData.othmanAlMohammad, teachersData.ramezAlSaeed, teachersData.sobhiSawwas, teachersData.hussamDwick, teachersData.hasanNaasan, teachersData.alaaAttar, teachersData.saeedAlHasan, teachersData.mohammadAlIssa, teachersData.ihabGamal],
      imgs: [],
      test: bacTest,
      workingPlans: bacWorkingPlan,
    },
  ]
}