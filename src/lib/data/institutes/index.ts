import schoolBuilding from '$lib/assets/images/inistitutes/school/building.jpg?enhanced'
import schoolClass from '$lib/assets/images/inistitutes/school/class.jpg?enhanced'
import schoolFootball from '$lib/assets/images/inistitutes/school/football.jpg?enhanced'
// Logos
import schools from '$lib/assets/images/logos/nukhbeh-schools.png?enhanced';
import awael from '$lib/assets/images/logos/nukhbeh-awael.png?enhanced';
import inistitute from '$lib/assets/images/logos/nukhbeh-inst.png?enhanced';
import shahba from '$lib/assets/images/logos/nukhbeh-shahba.png?enhanced';
import shams from '$lib/assets/images/logos/nukhbeh-shams.png?enhanced';

import shahbaBuilding from '$lib/assets/images/inistitutes/school/shahba_building.jpg?enhanced'


// Institutes imgs
import genAlshahba1 from '$lib/assets/images/inistitutes/gen-alshahba/outer.jpg?enhanced'
import genAlshahba2 from '$lib/assets/images/inistitutes/gen-alshahba/registeration.jpg?enhanced'

import inistitute1 from '$lib/assets/images/inistitutes/institute/outer.jpg?enhanced'
import inistitute2 from '$lib/assets/images/inistitutes/institute/inside.jpg?enhanced'
import inistitute3 from '$lib/assets/images/inistitutes/institute/mktb.jpg?enhanced'

import shams1 from '$lib/assets/images/inistitutes/shams/outer.jpg?enhanced'

import awael1 from '$lib/assets/images/inistitutes/awael-syria/outer.jpg?enhanced'



// Level Images
import kg1 from '$lib/assets/images/inistitutes/school/kg/1.jpg?enhanced'
import kg2 from '$lib/assets/images/inistitutes/school/kg/2.jpg?enhanced'

import level2 from '$lib/assets/images/inistitutes/school/1-6/2.jpg?enhanced'
import level3 from '$lib/assets/images/inistitutes/school/1-6/3.jpg?enhanced'
import level4 from '$lib/assets/images/inistitutes/school/1-6/4.jpg?enhanced'
import level5 from '$lib/assets/images/inistitutes/school/1-6/5.jpg?enhanced'
import level6 from '$lib/assets/images/inistitutes/school/1-6/6.jpg?enhanced'


// Teachers
import jalalAddasImage from '$lib/assets/images/teachers/jalal_addas.jpeg?enhanced';
import abdImage from '$lib/assets/images/teachers/abdalwahab_taskya.jpeg?enhanced';
import kamelKadiImage from '$lib/assets/images/teachers/kamel_kadi.jpeg?enhanced';
import jamalSheikhDiabImage from '$lib/assets/images/teachers/jamal_sheikh_diab.jpeg?enhanced';
import mohamadKarbojImage from '$lib/assets/images/teachers/mohamad_karbouj.jpg?enhanced';
import salwa from '$lib/assets/images/teachers/salwa_abo_galon.jpg?enhanced';
import hazemGhnaimi from '$lib/assets/images/teachers/hazem_ghnaimi.jpeg?enhanced';
import type { Picture } from '$lib/interface/picture.interface';
import type { FullBox, Test, WorkingPlan } from '$lib/interface/box.interface';





interface Institutes {
  slug: string;
  name: string;
  logo: Picture;
  logoAlt: string;
  smallDescription: string;
  description: string;
  images: Picture[]
  boxes: FullBox[]
  address: string;
  reception: string;
  accounting?: string;
}

type subjects = 'الرياضيات' | "الفيزياء" | "الكيمياء" | "اللغة العربية" | "اللغة الإنجليزية" | "اللغة الفرنسية" | "التربية الدينية" | "التربية الوطنية" | "العلوم" | null

type TeachersPhoto = {
  [key: string]: { img: Picture, subject: subjects }
}

const teachersPhoto: TeachersPhoto = {
  jalalAddas: { img: jalalAddasImage, subject: "الفيزياء" },
  kamelKadi: { img: kamelKadiImage, subject: "العلوم" },
  jamalSheikhDiab: { img: jamalSheikhDiabImage, subject: 'الرياضيات' }
  , abdalhadi: { img: abdImage, subject: 'اللغة الإنجليزية' },
  mohamadKarboj: { img: mohamadKarbojImage, subject: null },
  salwa: { img: salwa, subject: null },
  hazemGhnaimi: { img: hazemGhnaimi, subject: null },
}


const bacWorkingPlan = [
  {
    title: 'الدورة الصيفية',
    description:
      'تبدأ الدورة في 1/6/2024، وتنتهي في 15/9/2024. وتشمل مراجعات شاملة للحادي عشر، وبعض أبحاث البكالوريا.'
  },
  {
    title: 'الدورة الشتوية',
    description: 'تبدأ الدورة في 15/9/2024، وتنتهي 15/3/2025. وتشمل ماتبقى من منهاج البكالوريا.'
  },
  {
    title: 'دورة المراجعات والمذاكرات',
    description:
      'تبدأ الدورة في 15/3/2025، وتنتهي 28/5/2025. وتشمل مذاكرات نصفية وشاملة لكافة المواد مع مراجعة شاملة لكافة المنهاج وينظم الطالب من خلالها دراسته حتى يوم الامتحان النهائي.'
  }
]


const bacTest = [
  {
    text: `السبر هو امتحان يقيم مستوى الطلاب قبل الالتحاق بالبكالوريا. يشمل المواد الأساسية التالية:<br/> اللغة العربية، الرياضيات، الفيزياء، والكيمياء. <br/>يهدف السبر إلى اختبار قدرة الطالب على استيعاب هذه المواد لضمان استعداده للمرحلة الدراسية القادمة.`,
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
  }
];
const ninthWorkingPlan: WorkingPlan[] = [];
const ninthTest: Test[] = [];


export const institutes: Institutes[] = [
  {
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
        description: 'نلتزم بتقديم تعليم عالي الجودة يرتقي بتطلعات طلابنا نحو التميز. يتميز القسم بنخبة من المدرسين ذوي الكفاءة والخبرة، الذين يعملون على تطوير قدرات الطلاب الأكاديمية بأساليب تعليمية مبتكرة. نولي اهتمامًا خاصًا بمتابعة تقدم الطلاب من خلال تقارير شهرية شاملة تُرسل إلى أولياء الأمور. بفضل البيئة التعليمية الحديثة والمجهزة بأحدث الوسائل، نضمن تحقيق أفضل النتائج الأكاديمية، مع توفير الدعم اللازم لتحقيق طموحات طلابنا المستقبلية. مدارس نخبة حلب الخاصة دائمًا ما تكون الخيار الأفضل لأبناء المستقبل.',
        imgs: [],
        teachers: [
          { img: teachersPhoto.jalalAddas.img, name: 'جلال عدّاس', subject: 'فيزياء' },
          { img: teachersPhoto.abdalhadi.img, name: 'عبد الوهاب تسقية', subject: 'لغة إنجليزية' },
          { img: teachersPhoto.kamelKadi.img, name: 'كامل قاضي', subject: 'علوم' },
          { img: teachersPhoto.jamalSheikhDiab.img, name: 'جمال شيخ دياب', subject: 'رياضيات' }
        ],
        workingPlans: bacWorkingPlan,
        test: bacTest

      },
      {
        heading: 'الحادي عشر',
        href: '/institutes/school/eleventh',
        description: 'في مدارس نخبة حلب، نعمل على توفير أفضل بيئة تعليمية لطلاب الحادي عشر، حيث نركز على تطوير مهاراتهم الأكاديمية والشخصية. نضمن لهم فرصًا متميزة لتحقيق التفوق، مع الاهتمام بتطوير شخصياتهم وتنمية قدراتهم الفكرية والنفسية. بفضل الكوادر التعليمية المتخصصة، ستجد أن الحادي عشر في مدارس نخبة حلب هو أقوى التحضيرات المستقبلية.',
        imgs: [],
        teachers: [],
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
        description: 'مرحلة الصف العاشر تُعَدّ خطوة محورية في مسار الطالب التعليمي، حيث تشكل الأساس الذي تُبنى عليه مهاراته ومعارفه للمرحلة الثانوية والبكالوريا. في هذه المرحلة، يتم تعزيز المفاهيم الأساسية وترميم أي ضعف قد تراكم خلال السنوات السابقة، مما يضمن انتقالًا سلسًا نحو المرحلة الثانوية. إهمال هذه المرحلة قد يؤدي إلى فجوات تعليمية يصعب تداركها لاحقًا، مما يؤثر على تحصيل الطالب الأكاديمي وثقته بنفسه. لذلك، الاهتمام بهذه المرحلة يُعزز من فرص النجاح المستقبلي ويضع الطالب على الطريق الصحيح لتحقيق أهدافه التعليمية.',
        imgs: [],
        workingPlans: [{
          title: '',
          description: 'مرحلة الصف العاشر تُعَدّ خطوة محورية في مسار الطالب التعليمي، حيث تشكل الأساس الذي تُبنى عليه مهاراته ومعارفه للمرحلة الثانوية والبكالوريا. في هذه المرحلة، يتم تعزيز المفاهيم الأساسية وترميم أي ضعف قد تراكم خلال السنوات السابقة، مما يضمن انتقالًا سلسًا نحو المرحلة الثانوية. إهمال هذه المرحلة قد يؤدي إلى فجوات تعليمية يصعب تداركها لاحقًا، مما يؤثر على تحصيل الطالب الأكاديمي وثقته بنفسه. لذلك، الاهتمام بهذه المرحلة يُعزز من فرص النجاح المستقبلي ويضع الطالب على الطريق الصحيح لتحقيق أهدافه التعليمية.'
        },],
      },
      {
        heading: 'التاسع',
        href: '/institutes/school/ninth',
        description: 'في مدارس نخبة حلب، نقوم بتزويد طلاب الصف التاسع بأساليب تعليمية مبتكرة ومتطورة تهدف إلى تنمية مهاراتهم العقلية والمعرفية. نقوم بتوجيههم إلى التفوق الدراسي والابتكار، مما يضمن لهم النجاح في امتحاناتهم. مدارس نخبة حلب تعد الخيار الأمثل لجميع طلاب الصف التاسع.',
        imgs: [],
        teachers: [],
        test: [{
          text: `السبر هو امتحان يقيم مستوى الطلاب قبل الالتحاق بصف التاسع. يشمل المواد الأساسية التالية:<br/> اللغة اللغة العربية, اللغة الانكليزية, الرياضيات. <br/>يهدف السبر إلى اختبار قدرة الطالب على استيعاب هذه المواد لضمان استعداده للمرحلة الدراسية القادمة.`,
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
            title: 'الدورة الصيفية:',
            description:
              'تبدأ الدورة في 1/6/2024، وتنتهي في 15/9/2024. وتشمل مراجعات شاملة للسابع والثامن وبعض أبحاث التاسع.'
          },
          {
            title: 'الدورة الشتوية:',
            description: 'تبدأ الدورة في 15/9/2024، وتنتهي 15/3/2025. وتشمل ماتبقى من منهاج التاسع.'
          },
          {
            title: 'دورة المراجعات والمذاكرات:',
            description:
              'تبدأ الدورة في 15/3/2025، وتنتهي 28/5/2025. وتشمل مذاكرات نصفية وشاملة لكافة المواد مع مراجعة شاملة لكافة المنهاج وينظم الطالب من خلالها دراسته حتى يوم الامتحان النهائي.'
          }
        ],
      },
      {
        heading: 'السابع و الثامن',
        href: '/institutes/school/seventh-and-eighth',
        description: 'في مراحل السابع والثامن، تعتبر مدارس نخبة حلب المكان الأمثل لتعليم وتنمية طلابنا، حيث نحرص على تقديم برامج تعليمية متكاملة تشمل كافة الجوانب الأكاديمية والنفسية. نحن نركز على التأسيس الجيد للطلاب من خلال تعليم متكامل ورؤية تربوية شاملة. مدارس نخبة حلب توفر لهم كل ما يحتاجون للتميز والنجاح.'
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
        description: 'الروضة في مدارس نخبة حلب تعد بداية رائعة لأطفالنا، حيث نوفر لهم بيئة تعليمية متميزة تركز على اللعب والتعلم في آن واحد. نحن نعمل على تطوير مهاراتهم الحركية والفكرية والاجتماعية، مما يجعل مدارس نخبة حلب الخيار الأول لأطفالنا في سن الروضة.',
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
  },
  {
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
        description: 'في معهد أوائل سوريا، نقدم بيئة تعليمية متميزة لطلاب البكالوريا، حيث نركز على بناء المهارات الأكاديمية الضرورية التي تساهم في التفوق الدراسي. نحن نوفر طرق تدريس مبتكرة تضمن للطلاب التفوق في امتحاناتهم. معهد أوائل سوريا هو الخيار الأمثل لتحقيق النجاح الأكاديمي المتكامل.',
        teachers: [],
        imgs: [],
        test: bacTest,
        workingPlans: bacWorkingPlan,
      },
      {
        heading: 'التاسع',
        href: '/institutes/awael-syria/ninth',
        description: 'في معهد أوائل سوريا، نولي اهتمامًا خاصًا بتدريب طلاب الصف التاسع، مع تقديم برامج تعليمية متميزة تضمن لهم النجاح في امتحاناتهم. المعهد يوفر بيئة تعليمية مشجعة ومتميزة لتطوير مهارات الطلاب الدراسية والحياتية.',
        teachers: [],
        imgs: [],

        test: ninthTest,
        workingPlans: ninthWorkingPlan,
      },
    ]
  },
  {
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
        description: 'في مركز النخبة التعليمي، نقدم للطلاب فرصة لتحقيق التفوق في مرحلة البكالوريا عبر تعليم متخصص وبيئة داعمة تشجع على النجاح. نحن نولي أهمية خاصة لتقديم أفضل الطرق التعليمية التي تضمن لهم التفوق في جميع جوانب الدراسة.',
        teachers: [],
        imgs: [],
        test: bacTest,
        workingPlans: bacWorkingPlan,
      },
    ]
  },
  {
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
        description: 'في معهد جيل الشهباء، نحن نقدم بيئة تعليمية قوية لطلاب البكالوريا حيث نركز على تطوير مهاراتهم الأكاديمية وتزويدهم بالمعرفة التي تؤهلهم للنجاح. نحن نقدم برامج تعليمية متكاملة تهدف إلى تحقيق التفوق في كافة الجوانب الدراسية.',
        imgs: [],
        teachers: [],
        test: bacTest,
        workingPlans: bacWorkingPlan,
      },
    ]
  },
  {
    slug: '/institutes/shams',
    name: 'معهد شمس',
    logo: shams,
    logoAlt: "لوغو معهد شمس",
    smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
    description: `
      يقدم معهد شمس برامج تعليمية متكاملة تهدف إلى بناء شخصية الطالب الأكاديمية والأخلاقية. 
      يسعى المعهد لخلق بيئة تعليمية محفزة تزرع في نفوس الطلاب حب التعلم والتطور، مع التركيز على تحقيق أعلى درجات التفوق. 
      كما يتيح المعهد للطلاب فرصة التسجيل في دورات خاصة لأخذ مواد البكالوريا أثناء سنة الحادي عشر، مما يمكنهم من الاستعداد المبكر وتحقيق نتائج متميزة.
    `,
    images: [shams1],
    address: 'دوار الكرة - مقابل نادي الضباط.',
    reception: '0989557708',
    boxes: [
      {
        heading: 'البكالوريا',
        href: '/institutes/shams/baccalaureate',
        description: 'في معهد شمس، نقدم بيئة تعليمية تشجع على التفوق الأكاديمي وتعزيز مهارات التفكير النقدي. مع تقديم برامج متميزة وطرق تدريس متطورة، نساعد طلاب البكالوريا على التألق في امتحاناتهم وتحقيق أهدافهم الأكاديمية.', teachers: [],
        test: bacTest,
        imgs: [],
        workingPlans: bacWorkingPlan,
      },
      {
        heading: 'التاسع',
        href: '/institutes/shams/ninth',
        description: 'في معهد شمس، نركز على تقديم برامج تعليمية شاملة ومتطورة للطلاب في الصف التاسع، مما يساهم في تطوير مهاراتهم الدراسية والشخصية. نحن نعمل على ضمان التفوق الأكاديمي وتحقيق نجاحات متميزة في امتحاناتهم.', teachers: [],
        test: [],
        imgs: [],
        workingPlans: [],
      },
    ]
  },
];
