import schoolBuilding from '$lib/assets/images/institutes/school/building.jpg?enhanced'
import schoolFootball from '$lib/assets/images/institutes/school/football.jpg?enhanced'
import shahbaBuilding from '$lib/assets/images/institutes/school/shahba_building.jpg?enhanced'
import schools from '$lib/assets/images/logos/nukhbeh-schools.png?enhanced';
import kg1 from '$lib/assets/images/institutes/school/kg/1.jpg?enhanced'
import kg2 from '$lib/assets/images/institutes/school/kg/2.jpg?enhanced'

import level2 from '$lib/assets/images/institutes/school/1-6/2.jpg?enhanced'
import level3 from '$lib/assets/images/institutes/school/1-6/3.jpg?enhanced'
import level4 from '$lib/assets/images/institutes/school/1-6/4.jpg?enhanced'
import level5 from '$lib/assets/images/institutes/school/1-6/5.jpg?enhanced'
import level6 from '$lib/assets/images/institutes/school/1-6/6.jpg?enhanced'
import inClass1 from '$lib/assets/images/institutes/school/+7/in_class.jpg?enhanced'
import inClass3 from '$lib/assets/images/institutes/school/+7/IMG_20240807_120113_087.jpg?enhanced'
import smile from '$lib/assets/images/institutes/school/1-6/1.jpg?enhanced'
import smile2 from '$lib/assets/images/institutes/school/1-6/smile.jpg?enhanced'
import ninth1 from '$lib/assets/images/institutes/school/9/IMG_1790.jpg?enhanced'
import ninth2 from '$lib/assets/images/institutes/school/9/IMG_1793.jpg?enhanced'






import act7 from '$lib/assets/images/institutes/school/+7/act.jpeg?enhanced'
import act72 from '$lib/assets/images/institutes/school/+7/act2.jpeg?enhanced'
import act73 from '$lib/assets/images/institutes/school/+7/IMG_20240807_120113_087.jpg?enhanced'


import kg3 from '$lib/assets/images/institutes/school/kg/IMG_6083.png?enhanced'

import nine from '$lib/assets/images/institutes/school/9/IMG_20240807_103108_678.jpg?enhanced'



import twelve1 from '$lib/assets/images/institutes/school/12/IMG_2555.jpg?enhanced'
import twelve2 from '$lib/assets/images/institutes/school/12/IMG_2566.jpg?enhanced'
import twelve3 from '$lib/assets/images/institutes/school/12/photo_2024-12-30_12-02-29.jpg?enhanced'
import twelve4 from '$lib/assets/images/institutes/school/12/photo_2024-12-30_12-02-36.jpg?enhanced'






import { bacTest, bacWorkingPlan, ninthTest, ninthWorkingPlan } from './shared';
import { teachersData, } from '../teachers';
import type { Institute } from '..';



export const schoolInstitute: Institute = {
  slug: '/institutes/school',
  name: 'مدارس نخبة حلب الخاصة',
  logo: schools,
  logoAlt: "لوغو مدارس نخبة حلب الخاصة",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      تأسست مدارس نخبة حلب الخاصة في عام 2013، وكانت البداية مع المرحلة الثانوية ثم توسعت لتشمل المرحلتين الإعدادية والابتدائية و الروضة. 
      منذ تأسيسها، قدمت المدرسة إسهامات مميزة في تخريج أعداد كبيرة من الطلاب المتفوقين الذين أثروا الجامعات السورية بتميزهم الأكاديمي. 
      تقدم المدرسة خدمات تعليمية شاملة تغطي جميع المراحل الدراسية، بدءًا من الروضة وحتى الصف الثالث الثانوي العلمي. 
      ما يميز مدارس نخبة حلب هو الاهتمام الفردي بكل طالب، مع التركيز على تطوير الجوانب النفسية والتعليمية باستخدام أساليب تعليمية مبتكرة.
    `,
  images: [schoolBuilding, shahbaBuilding, schoolFootball],
  address: 'الشهباء - دوّار جامع الغزالي.',
  reception: '0989557701',
  accounting: '0989557738',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/school/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: [twelve1, twelve2, twelve3, twelve4],
      teachers: [

        // Math
        teachersData.jamalSheikhDiab, teachersData.abdalazizZakaria, teachersData.safwanIdress, teachersData.anasDrgham, teachersData.waseemShayyah, teachersData.mohammadFarek,

        // Physics
        teachersData.jalalAddas, teachersData.anasNajjar, teachersData.alaaArab, teachersData.mohammadAmeenSeedo,

        // Chemistry

        teachersData.mahmoudDarwish,
        teachersData.samerSleman,
        teachersData.sohaybSarmini,
        teachersData.hazemGhnaimi,

        // Science
        teachersData.kamelKadi,
        teachersData.ahmadOthman,
        teachersData.othmanAlMohammad,
        teachersData.zakariaRajabBasha,

        // Arabic
        teachersData.ramezAlSaeed,
        teachersData.hussamDwick,
        teachersData.sobhiSawwas,
        teachersData.baraaSreo,


        // EN
        teachersData.hasanNaasan,
        teachersData.basharGamalAldeen,
        teachersData.salemGazeh,
        teachersData.wajeehDwidry,


        // FR
        teachersData.alaaAttar,

        // Releg
        teachersData.ihabGamal,

      ],
      workingPlans: bacWorkingPlan,
      test: bacTest

    },
    {
      heading: 'الحادي عشر',
      href: '/institutes/school/eleventh',
      description: 'الصف الحادي عشر هو التحضير الجاد للبكالوريا، حيث نعمل على بناء أساس أكاديمي قوي يمكن الطلاب من التفوق في الصف النهائي. في مدارس نخبة حلب، نركز على تطوير التفكير النقدي والمهارات العلمية، مع الاهتمام بالجوانب النفسية والاجتماعية للطلاب. ندعمهم عبر كوادر تعليمية متخصصة وأساليب تدريس متقدمة تفتح أمامهم آفاقًا جديدة لتحقيق أهدافهم.',
      imgs: [],
      test: [{
        text: `السبر هو امتحان يقيم مستوى الطلاب قبل الالتحاق بصف الحادي عشر. يشمل المواد الأساسية التالية:<br/> اللغة العربية، الرياضيات، الفيزياء، والكيمياء. <br/>يهدف السبر إلى اختبار قدرة الطالب على استيعاب هذه المواد لضمان استعداده للمرحلة الدراسية القادمة.`,
        bold: false
      },
      {
        text: `
    تتضمن النوطة مراجعات شاملة تنظمها مدارس النخبة لأهم المواضيع التي يجب على الطلاب الإلمام بها لضمان انطلاقة قوية مع بداية العام الدراسي الجديد.`,
        bold: false
      },
      {
        text: 'تطلب النوطة من مكتبة الغزالي: <br> الشهباء الجديدة - نزلة جامع الغزالي – أمام جامعة الاتحاد.',
        bold: true
      }],
      workingPlans: [
        {
          title: 'الدورة الأساسية',
          description: 'تبدأ الدورة في 15/9/2025، وتنتهي بنهاية العام الدراسي. وتشمل منهاج الصف الحادي عشر بالإضافة الى مواد البكالوريا النظرية, وأساسيات المواد العلمية لضمان انطلاقة قوية في مرحلة البكالوريا..'
        },
      ],
    },
    {
      heading: 'العاشر',
      href: '/institutes/school/tenth',
      description: 'الصف العاشر يمثل نقطة البداية في المسار الثانوي، حيث تُبنى فيه أسس النجاح في البكالوريا. نحرص على تعزيز الفهم العميق للمفاهيم الدراسية ومعالجة أي ثغرات تعليمية لضمان استعداد الطلاب الكامل للمراحل القادمة. مع مدارس نخبة حلب، نرسم معًا خطوات أولى ثابتة نحو تحقيق التفوق الدراسي.',
      imgs: [],
      workingPlans: [{
        title: 'الدورة الأساسية',
        description: 'تبدأ الدورة في 15/9/2025، وتنتهي مع نهايته, وتشمل منهاج الصف العاشر بلإضافة الى ترميم النقص بأساسيات المواد العلمية لضمان إنطلاقة قوية في المرحلة الثانوية.'
      },],
    },
    {
      heading: 'التاسع',
      href: '/institutes/school/ninth',
      description: 'الصف التاسع هو مرحلة مفصلية نحو الامتحانات الشاملة التي تحدد مسار الطلاب المستقبلي. في مدارس نخبة حلب، نقدم برامج تعليمية مبتكرة وموجهة تساعد الطلاب على التفوق في الامتحانات الرسمية. نضمن بيئة تعليمية محفزة وداعمة تجعل من التفوق الخيار الوحيد أمامهم.',
      imgs: [nine, ninth1, ninth2],
      teachers: [


        // Math
        teachersData.adeebAlsayed,
        teachersData.ferasAlsayyedOmar,

        // Phy + Chem
        teachersData.mehdiBasteka,


        // Science
        teachersData.salwaAboGalon,
        teachersData.ahmadHafez,


        // AR
        teachersData.safiKabbani,
        teachersData.yamanAbras,

        // EN
        teachersData.mohannadAshor,
        teachersData.abdalwahabTaskya,

        // FR
        teachersData.ammarKhdry,
        teachersData.nihadSeno,
        teachersData.mjdNahlawy,

        // T + J
        teachersData.adeebZohor,
        teachersData.mohammadNourAldeen,

        // releg
        teachersData.ihabGamal,

      ],
      test: ninthTest,
      workingPlans: ninthWorkingPlan,
    },
    {
      heading: 'السابع و الثامن',
      href: '/institutes/school/seventh-and-eighth',
      description: 'في الصفين السابع والثامن، نركز على بناء المهارات الأساسية وتعزيز الثقة بالنفس، حيث يشكلان الأساس لاستيعاب المناهج المتقدمة في المراحل القادمة. في مدارس نخبة حلب، نقدم تعليمًا شموليًا يهتم بالجوانب الأكاديمية والنفسية، لنضمن أن كل طالب يسير بخطى ثابتة نحو التميز.'
      ,
      imgs: [inClass1, inClass3, act7, act72, act73],
      test: [{
        text: `السبر هو امتحان يقيم مستوى الطلاب قبل الالتحاق بالمرحلة الدراسية. يشمل المواد الأساسية التالية:<br/> اللغة ,اللغة العربية, اللغة الانكليزية, رياضيات, اللغة الفرنسية. <br/>يهدف السبر إلى اختبار قدرة الطالب على استيعاب هذه المواد لضمان استعداده للمرحلة الدراسية القادمة.`,
        bold: false
      },
      {
        text: `
    تتضمن النوطة مراجعات شاملة تنظمها مدارس النخبة لأهم المواضيع التي يجب على الطلاب الإلمام بها لضمان انطلاقة قوية مع بداية العام الدراسي الجديد.`,
        bold: false
      },
      {
        text: 'تطلب النوطة من مكتبة الغزالي: <br> الشهباء الجديدة - نزلة جامع الغزالي – أمام جامعة الاتحاد.',
        bold: true
      }],
      workingPlans: [{
        title: 'الدورة الأساسية',
        description: 'تبدأ الدورة في 15/9/2025، وتنتهي مع نهايته, وتشمل المنهاج بلإضافة الى ترميم النقص بأساسيات المواد العلمية لضمان إنطلاقة قوية في شهادة التعليم الأساسي.'
      },],
    },
    {
      heading: 'الابتدائي',
      href: '/institutes/school/primary',
      description: 'المرحلة الابتدائية في مدارس نخبة حلب تشهد تطبيق أساليب تعليمية حديثة تهدف إلى بناء جيل من الطلاب القادرين على التفكير النقدي والإبداعي. نحن نولي اهتمامًا خاصًا ببناء شخصية الطالب وتنمية مهاراته الحياتية جنبًا إلى جنب مع تحصيله الأكاديمي. مدارس نخبة حلب توفر بيئة تعليمية محفزة تسهم في تحفيز الأطفال لتحقيق النجاح في مراحلهم المقبلة.',
      imgs: [level2, level3, level4, level5, level6, smile, smile2],
      workingPlans: [
        {
          title: 'بداية العام الدراسي',
          description: 'تبدأ الدورة في 15/9/2025، وتنتهي مع نهايته '
        },
        {
          title: 'المنهاج المقرر والمواد الإثرائية',
          description: `إلى جانب المنهاج الأساسي، نقدم أربع مواد إثرائية متميزة تشمل *Math* و*Science* باللغة الإنجليزية، مما يساعد على تعزيز التفكير العلمي والحسابي. كما نقدم برنامج *Beehive* لتنمية مهارات اللغة الإنجليزية، بالإضافة إلى مادة اللغة الفرنسية لإرساء أساس متين في لغة إضافية.`
        },
        {
          title: 'الأنشطة والاساليب التعليمية',
          description: `نضمّن خطتنا أنشطة متخصصة مثل الحساب الذهني لتطوير مهارات التفكير السريع وحل المشكلات. كما نحرص على تقديم أنشطة ترفيهية وأساليب تعلم مبتكرة تعتمد على اللعب، لإثراء تجربة الطالب التعليمية وإضفاء أجواء من المرح والتشويق.`
        },
        {
          title: 'تحفيز حب المدرسة والتعلم',
          description: `هدفنا الأساسي هو جعل المدرسة بيئة محببة للطلاب، حيث يشعرون بالراحة والشغف تجاه التعلم. نعمل على تعزيز استعداد الطالب لاستكشاف المعرفة وتنمية شغفه بها، مما يضمن رحلة تعليمية ممتعة ومثمرة.`
        }
      ]

    },
    {
      heading: 'الروضة',
      href: '/institutes/school/kg',
      description: 'البداية الصحيحة هي الأساس لتعليم مثمر, نقدم بيئة تعليمية مليئة بالحب والرعاية حيث يتم تحفيز فضول الأطفال واكتشاف مواهبهم منذ الصغر. برامجنا التعليمية التفاعلية تضمن تنمية مهاراتهم العقلية والاجتماعية في أجواء مليئة بالمرح.',
      imgs: [kg1, kg2, kg3,],
      workingPlans: [
        {
          title: 'بداية العام الدراسي',
          description: 'تبدأ الدورة في 15/9/2025، وتنتهي مع نهايته '
        },
        {
          title: 'غرس القيم والمبادئ',
          description: `نركز في مرحلة رياض الأطفال على تعزيز القيم والمبادئ الأخلاقية في نفوس الأطفال، مثل الاحترام، التعاون، والصدق، من خلال أنشطة يومية وتفاعلية تُغرس هذه القيم بطريقة بسيطة ومحببة تناسب أعمارهم.`
        },
        {
          title: 'أنشطة ترفيهية وتعليمية متنوعة',
          description: `نحرص على تنظيم أنشطة ترفيهية تجمع بين التعليم والمرح، مثل الفنون اليدوية، الموسيقى، والرياضة، مما يساعد على تطوير مهاراتهم الاجتماعية والنفسية.`
        },
        {
          title: 'تنمية المهارات الأساسية',
          description: `نقدم برنامجًا متكاملاً يعزز من مهارات القراءة والكتابة المبكرة، بالإضافة إلى تنمية المهارات الحركية الدقيقة من خلال أنشطة عملية تناسب المرحلة العمرية للأطفال، مما يؤهلهم للانتقال بسلاسة إلى المراحل الدراسية المقبلة.`
        },

        {
          title: 'رعاية واهتمام فردي',
          description: `نوفر بيئة تعليمية آمنة ورعاية فردية لكل طفل، مع الاهتمام باحتياجاته الخاصة، مما يضمن بناء شعور بالثقة والراحة لديه أثناء تواجده في المدرسة.`
        },

      ]
    },
  ]
}