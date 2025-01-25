

import { bacTest, bacWorkingPlan, ninthTest, ninthWorkingPlan } from './shared';
import { teachersData, } from '../teachers';
import type { Institute } from '..';



export const schoolInstitute: Institute = {
  slug: '/institutes/school',
  name: 'مدارس نخبة حلب الخاصة',
  logo: 'https://res.cloudinary.com/dgive1g2g/image/upload/w_200,q_auto:eco/v1737824433/register/images/logos/ur9uzwhvkvqndfinpjnl.png',
  logoAlt: "لوغو مدارس نخبة حلب الخاصة",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      تأسست مدارس نخبة حلب الخاصة في عام 2013، وكانت البداية مع المرحلة الثانوية ثم توسعت لتشمل المرحلتين الإعدادية والابتدائية و الروضة. 
      منذ تأسيسها، قدمت المدرسة إسهامات مميزة في تخريج أعداد كبيرة من الطلاب المتفوقين الذين أثروا الجامعات السورية بتميزهم الأكاديمي. 
      تقدم المدرسة خدمات تعليمية شاملة تغطي جميع المراحل الدراسية، بدءًا من الروضة وحتى الصف الثالث الثانوي العلمي. 
      ما يميز مدارس نخبة حلب هو الاهتمام الفردي بكل طالب، مع التركيز على تطوير الجوانب النفسية والتعليمية باستخدام أساليب تعليمية مبتكرة.
    `,
  images: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824412/register/images/institutes/school/hwegjltho2opd2ph5xwu.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824352/register/images/institutes/school/vixsml7xfwf4vg4csw6q.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824347/register/images/institutes/school/bd9un8cqtygjz18avuwj.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824344/register/images/institutes/school/cfnhsrsdy3nu61p9okjb.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824333/register/images/institutes/school/qa7b5vx5ng2f4uqb0wb4.jpg'],
  address: 'الشهباء - دوّار جامع الغزالي.',
  reception: '0989557701',
  accounting: '0989557738',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/school/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.',
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824310/register/images/institutes/school/12/delrvqbsfdluhbgolwny.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824297/register/images/institutes/school/12/z66nhczo5j2vnaf6l5bt.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824284/register/images/institutes/school/12/tneenf1mzdphx7x5vuwf.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824287/register/images/institutes/school/12/ff8jyb9w5pdpztynwyw8.jpg'],
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
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824331/register/images/institutes/school/9/zbrayawjuhyguzlyjexq.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824294/register/images/institutes/school/9/wwzhgmkvxqiggbhptq6k.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824322/register/images/institutes/school/9/hm1ievkokgx3gi5apcqs.jpg'],
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
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824264/register/images/institutes/school/%2B7/aa6gdzbcylwzhd4nhtld.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824257/register/images/institutes/school/%2B7/bqfs85j11ozjnrxgdzjy.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824255/register/images/institutes/school/%2B7/iano6fipimlatnvns5kx.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824250/register/images/institutes/school/%2B7/i775mnfj17bpjqkcpcpb.jpg',],
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
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824304/register/images/institutes/school/1-6/po1qopfzrp3uwiuqkxw4.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824274/register/images/institutes/school/1-6/fom8zlwkzbw0rzd43gs2.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824268/register/images/institutes/school/1-6/b6x4gsubgux4d0vofdci.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824264/register/images/institutes/school/1-6/bmeic49osuwfb7ybkfx7.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824263/register/images/institutes/school/1-6/ai3ksxeopitpo3p1xjyz.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824263/register/images/institutes/school/1-6/c2palsk68spbhuwbhchv.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824258/register/images/institutes/school/1-6/bakxdfdpf8snhftnlbid.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824256/register/images/institutes/school/1-6/nvpq7qah6ktoyikdt6wr.jpg'],
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
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824678/register/images/institutes/school/kg/kh23ickusbzfeyhcxsuc.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824463/register/images/institutes/school/kg/fupgfy0oa4yu2rlcevjy.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824452/register/images/institutes/school/kg/kou1ky1keof7o8qklfp6.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824376/register/images/institutes/school/kg/h8sconuvubbfso2dqtv4.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824375/register/images/institutes/school/kg/jc9xvelh2s6krqcnwisz.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824372/register/images/institutes/school/kg/vggdrstkxygsigthxifk.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_600/q_auto:best/v1737824360/register/images/institutes/school/kg/lz79iwk43azctygerqvl.jpg'],
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