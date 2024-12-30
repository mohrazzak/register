import schoolBuilding from '$lib/assets/images/inistitutes/school/building.jpg?enhanced'
import schoolClass from '$lib/assets/images/inistitutes/school/class.jpg?enhanced'
import schoolFootball from '$lib/assets/images/inistitutes/school/football.jpg?enhanced'
import shahbaBuilding from '$lib/assets/images/inistitutes/school/shahba_building.jpg?enhanced'
import schools from '$lib/assets/images/logos/nukhbeh-schools.png?enhanced';
import kg1 from '$lib/assets/images/inistitutes/school/kg/1.jpg?enhanced'
import kg2 from '$lib/assets/images/inistitutes/school/kg/2.jpg?enhanced'

import level2 from '$lib/assets/images/inistitutes/school/1-6/2.jpg?enhanced'
import level3 from '$lib/assets/images/inistitutes/school/1-6/3.jpg?enhanced'
import level4 from '$lib/assets/images/inistitutes/school/1-6/4.jpg?enhanced'
import level5 from '$lib/assets/images/inistitutes/school/1-6/5.jpg?enhanced'
import level6 from '$lib/assets/images/inistitutes/school/1-6/6.jpg?enhanced'
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
      تأسست مدارس نخبة حلب الخاصة في عام 2013، وكانت البداية مع المرحلة الثانوية ثم توسعت لتشمل المرحلتين الإعدادية والابتدائية. 
      منذ تأسيسها، قدمت المدرسة إسهامات مميزة في تخريج أعداد كبيرة من الطلاب المتفوقين الذين أثروا الجامعات السورية بتميزهم الأكاديمي. 
      تقدم المدرسة خدمات تعليمية شاملة تغطي جميع المراحل الدراسية، بدءًا من الروضة وحتى الصف الثالث الثانوي العلمي. 
      ما يميز مدارس نخبة حلب هو الاهتمام الفردي بكل طالب، مع التركيز على تطوير الجوانب النفسية والتعليمية باستخدام أساليب تعليمية مبتكرة.
    `,
  images: [schoolBuilding, shahbaBuilding, schoolClass, schoolFootball,],
  address: 'الشهباء - دوّار جامع الغزالي.',
  reception: '0989557701',
  accounting: '0989557738',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/school/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: [],
      teachers: [
        teachersData.jamalSheikhDiab, teachersData.abdalazizZakaria, teachersData.anasDrgham, teachersData.jalalAddas, teachersData.anasNajjar, teachersData.alaaArab, teachersData.younesDsouki, teachersData.mahmoudDarwish, teachersData.mahmoudHreh, teachersData.kamelKadi, teachersData.ahmadOthman, teachersData.othmanAlMohammad, teachersData.ramezAlSaeed, teachersData.sobhiSawwas, teachersData.hussamDwick, teachersData.hasanNaasan, teachersData.alaaAttar, teachersData.saeedAlHasan, teachersData.mohammadAlIssa, teachersData.ihabGamal, teachersData.mohammadFarek, teachersData.mohammadTabbakh, teachersData.mohammadAmeenSeedo, teachersData.samerSleman, teachersData.waseemShayyah, teachersData.tariqSayedAli, teachersData.safwanIdress, teachersData.mohammadHilal, teachersData.hazemGhnaimi, teachersData.salemGazeh
      ],
      workingPlans: bacWorkingPlan,
      test: bacTest

    },
    {
      heading: 'الحادي عشر',
      href: '/institutes/school/eleventh',
      description: 'الصف الحادي عشر هو التحضير الجاد للبكالوريا، حيث نعمل على بناء أساس أكاديمي قوي يمكن الطلاب من التفوق في الصف النهائي. في مدارس نخبة حلب، نركز على تطوير التفكير النقدي والمهارات العلمية، مع الاهتمام بالجوانب النفسية والاجتماعية للطلاب. ندعمهم عبر كوادر تعليمية متخصصة وأساليب تدريس متقدمة تفتح أمامهم آفاقًا جديدة لتحقيق أهدافهم.',
      imgs: [],
      teachers: [
        teachersData.jamalSheikhDiab, teachersData.abdalazizZakaria, teachersData.anasDrgham, teachersData.jalalAddas, teachersData.anasNajjar, teachersData.alaaArab, teachersData.younesDsouki, teachersData.mahmoudDarwish, teachersData.mahmoudHreh, teachersData.kamelKadi, teachersData.ahmadOthman, teachersData.othmanAlMohammad, teachersData.ramezAlSaeed, teachersData.sobhiSawwas, teachersData.hussamDwick, teachersData.hasanNaasan, teachersData.alaaAttar, teachersData.saeedAlHasan, teachersData.mohammadAlIssa, teachersData.ihabGamal, teachersData.mohammadFarek, teachersData.mohammadTabbakh, teachersData.mohammadAmeenSeedo, teachersData.samerSleman, teachersData.waseemShayyah, teachersData.tariqSayedAli, teachersData.safwanIdress, teachersData.mohammadHilal, teachersData.hazemGhnaimi, teachersData.salemGazeh
      ],
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
          title: '',
          description: 'تبدأ الدورة في 1/9/2024، وتنتهي بنهاية العام الدراسي. وتشمل منهاج الصف الحادي عشر بالإضافة الى مواد البكالوريا النظرية, وأساسيات المواد العلمية لضمان انطلاقة قوية في مرحلة البكالوريا..'
        },
      ],
    },
    {
      heading: 'العاشر',
      href: '/institutes/school/tenth',
      description: 'الصف العاشر يمثل نقطة البداية في المسار الثانوي، حيث تُبنى فيه أسس النجاح في البكالوريا. نحرص على تعزيز الفهم العميق للمفاهيم الدراسية ومعالجة أي ثغرات تعليمية لضمان استعداد الطلاب الكامل للمراحل القادمة. مع مدارس نخبة حلب، نرسم معًا خطوات أولى ثابتة نحو تحقيق التفوق الدراسي.',
      imgs: [],
      workingPlans: [{
        title: '',
        description: 'مرحلة الصف العاشر تُعَدّ خطوة محورية في مسار الطالب التعليمي، حيث تشكل الأساس الذي تُبنى عليه مهاراته ومعارفه للمرحلة الثانوية والبكالوريا. في هذه المرحلة، يتم تعزيز المفاهيم الأساسية وترميم أي ضعف قد تراكم خلال السنوات السابقة، مما يضمن انتقالًا سلسًا نحو المرحلة الثانوية. إهمال هذه المرحلة قد يؤدي إلى فجوات تعليمية يصعب تداركها لاحقًا، مما يؤثر على تحصيل الطالب الأكاديمي وثقته بنفسه. لذلك، الاهتمام بهذه المرحلة يُعزز من فرص النجاح المستقبلي ويضع الطالب على الطريق الصحيح لتحقيق أهدافه التعليمية.'
      },],
    },
    {
      heading: 'التاسع',
      href: '/institutes/school/ninth',
      description: 'الصف التاسع هو مرحلة مفصلية نحو الامتحانات الشاملة التي تحدد مسار الطلاب المستقبلي. في مدارس نخبة حلب، نقدم برامج تعليمية مبتكرة وموجهة تساعد الطلاب على التفوق في الامتحانات الرسمية. نضمن بيئة تعليمية محفزة وداعمة تجعل من التفوق الخيار الوحيد أمامهم.',
      imgs: [],
      teachers: [],
      test: ninthTest,
      workingPlans: ninthWorkingPlan,
    },
    {
      heading: 'السابع و الثامن',
      href: '/institutes/school/seventh-and-eighth',
      description: 'في الصفين السابع والثامن، نركز على بناء المهارات الأساسية وتعزيز الثقة بالنفس، حيث يشكلان الأساس لاستيعاب المناهج المتقدمة في المراحل القادمة. في مدارس نخبة حلب، نقدم تعليمًا شموليًا يهتم بالجوانب الأكاديمية والنفسية، لنضمن أن كل طالب يسير بخطى ثابتة نحو التميز.'
      ,
      imgs: [],
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
        title: '',
        description: 'مرحلة الصف السابع و الثامن تُعَدّ خطوة محورية في مسار الطالب التعليمي، حيث تشكل الأساس الذي تُبنى عليه مهاراته ومعارفه للصف التاسع. في هذه المرحلة، يتم تعزيز المفاهيم الأساسية وترميم أي ضعف قد تراكم خلال السنوات السابقة، مما يضمن انتقالًا سلسًا نحو الصف التاسع. إهمال هذه المرحلة قد يؤدي إلى فجوات تعليمية يصعب تداركها لاحقًا، مما يؤثر على تحصيل الطالب الأكاديمي وثقته بنفسه. لذلك، الاهتمام بهذه المرحلة يُعزز من فرص النجاح المستقبلي ويضع الطالب على الطريق الصحيح لتحقيق أهدافه التعليمية.'
      },],
    },
    {
      heading: 'الابتدائي',
      href: '/institutes/school/primary',
      description: 'المرحلة الابتدائية في مدارس نخبة حلب تشهد تطبيق أساليب تعليمية حديثة تهدف إلى بناء جيل من الطلاب القادرين على التفكير النقدي والإبداعي. نحن نولي اهتمامًا خاصًا ببناء شخصية الطالب وتنمية مهاراته الحياتية جنبًا إلى جنب مع تحصيله الأكاديمي. مدارس نخبة حلب توفر بيئة تعليمية محفزة تسهم في تحفيز الأطفال لتحقيق النجاح في مراحلهم المقبلة.',
      imgs: [level2, level3, level4, level5, level6],
      workingPlans: [

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
      description: 'البداية الصحيحة هي الأساس لتعليم مثمر. في روضات مدارس نخبة حلب، نقدم بيئة تعليمية مليئة بالحب والرعاية حيث يتم تحفيز فضول الأطفال واكتشاف مواهبهم منذ الصغر. برامجنا التعليمية التفاعلية تضمن تنمية مهاراتهم العقلية والاجتماعية في أجواء مليئة بالمرح.',
      imgs: [kg1, kg2],
      workingPlans: [
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