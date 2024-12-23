import a from '$lib/assets/images/school-building.jpg?enhanced'
import schools from '$lib/assets/images/nukhbeh-schools.png?enhanced';
import awael from '$lib/assets/images/nukhbeh-awael.png?enhanced';
import inistitute from '$lib/assets/images/nukhbeh-inst.png?enhanced';
import shahba from '$lib/assets/images/nukhbeh-shahba.png?enhanced';
import shams from '$lib/assets/images/nukhbeh-shams.png?enhanced';
import type { Picture } from './interface/picture.interface';
import type { Box } from './interface/box.interface';


interface Institutes {
  slug: string;
  name: string;
  logo: Picture;
  logoAlt: string;
  smallDescription: string;
  description: string;
  images: Picture[]
  boxes: Box[]
  address: string;
  reception: string;
  accounting: string;
}



export const institutes: Institutes[] = [
  {
    slug: '/institutes/school',
    name: 'مدارس نخبة حلب الخاصة',
    logo: schools,
    logoAlt: "لوغو مدارس نخبة حلب الخاصة",
    smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
    description: `
  تأسست مدارس النخبة التعليمية الرائدة في حلب عام 2013 بدأت من المرحلة الثانوية ثم الإعدادية ثم الابتدائية .وكان لها اثر مهم في رفد الجامعات السورية بأكبر عدد من الطلاب المتميزين والمتفوقين ... لكافة المراحل الدراسية ..من الروضة إلى الثالث الثانوي العلمي... تمتاز مدرستنا بإهتمامها الفائق بطلابها فرداً فرداً ..وبأساليبها التعليمية الإلمام بكل ما يتعلّق بالطالب من الحالة النفسية و التعليمية`,
    images: [a, a, a],
    address: 'حلب - الشهباء الجديدة = جانب دوار الغزالي.',
    reception: '0989557701',
    accounting: '0989557738',
    boxes: [{
      heading: 'البكالوريا', href: '/institutes/school/baccalaureate', questions: [{
        question: 'مايميزنا؟',
        answer:
          `
        <ul>
<li>
    خلق جو من المنافسة بين الطلاب  من خلال فرزهم في شعب تتناسب مع تحصيلهم العلمي

</li>
        </ul>
    <br>
    متابعة المدرسين للطلاب شفهياً
    <br>

    تدريب الطالب على أوراق العمل لتثبيت المعلومات بشكل علمي
    <br>

    إلزام الطالب بالمذاكرات الشهرية
    <br>

    توزيع تقارير شهرية تلخص أداء الطالب خلال الشهر وتحدد نقاط قوته ونقاط ضعفه
    <br>

    تحفيز الطلاب وتشجيعهم للوصول إلى هدفهم
    <br>

    التواصل المتكامل مع الأهل لمتابعة آخر المستجدات في تحصيل الطالب الدراسي والمعرفي
    `,
      },
      { question: 'مايميزنا؟', answer: 'نحن كويسين' },
      { question: 'مايميزنا؟', answer: 'نحن كويسين' }
      ]
    },
    { heading: 'التاسع', href: '/institutes/school/ninth' },
    { heading: 'العاشر و الحادي عشر', href: '/institutes/school/tenth-and-eleventh' },
    { heading: 'السابع والثامن', href: '/institutes/school/seventh-and-eighth' },
    { heading: 'الابتدائي', href: '/institutes/school/primary' },
    { heading: 'الروضة', href: '/institutes/school/kg' }]
  },
  {
    slug: '/institutes/awael-syria',
    name: 'معهد أوائل سوريا',
    logo: awael,
    logoAlt: "لوغو معهد أوائل سوريا",
    smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
    description: `
تسعى أسرة النخبة التعليمية من خلال مراكزها المنتشرة في مدينة حلب إلى تحقيق تعليم متميز .وتخريج جيل من الشباب المثقف فكريا وأخلاقيا .
وذلك عن طريق زرع روح المنافسة والتنظيم والإصرار على بلوغ الهدف وجعل كلمة مستحيل ممكنا دائما ليكون طالبنا مميزا في مختلف المجالات .
  `,
    images: [a, a, a],
    address: 'حلب - الشهباء الجديدة = جانب دوار الغزالي.',
    reception: '0989557701',
    accounting: '0989557738',
    boxes: [{ heading: 'البكالوريا', href: '/institutes/awael-syria/baccalaureate' },
    { heading: 'التاسع', href: '/institutes/awael-syria/ninth' },
    ]
  },
  {
    slug: '/institutes/institute',
    name: 'مركز النخبة التعليمي',
    logo: inistitute,
    logoAlt: "لوغو معهد مركز النخبة",
    smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
    description: `
تسعى أسرة النخبة التعليمية من خلال مراكزها المنتشرة في مدينة حلب إلى تحقيق تعليم متميز .وتخريج جيل من الشباب المثقف فكريا وأخلاقيا .
وذلك عن طريق زرع روح المنافسة والتنظيم والإصرار على بلوغ الهدف وجعل كلمة مستحيل ممكنا دائما ليكون طالبنا مميزا في مختلف المجالات .
  `,
    images: [a, a, a],
    boxes: [{ heading: 'البكالوريا', href: '/institutes/institute/baccalaureate' },
    ], address: 'حلب - الشهباء الجديدة = جانب دوار الغزالي.',
    reception: '0989557701',
    accounting: '0989557738',
  }, {
    slug: '/institutes/alshahba-generation',
    name: 'معهد جيل الشهباء',
    logo: shahba,
    logoAlt: "لوغو معهد جيل الشهباء",
    smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
    description: `
تسعى أسرة النخبة التعليمية من خلال مراكزها المنتشرة في مدينة حلب إلى تحقيق تعليم متميز .وتخريج جيل من الشباب المثقف فكريا وأخلاقيا .
وذلك عن طريق زرع روح المنافسة والتنظيم والإصرار على بلوغ الهدف وجعل كلمة مستحيل ممكنا دائما ليكون طالبنا مميزا في مختلف المجالات .
  `,
    images: [a, a, a],
    boxes: [{ heading: 'البكالوريا', href: '/institutes/alshahba-generation/baccalaureate' },
    ], address: 'حلب - الشهباء الجديدة = جانب دوار الغزالي.',
    reception: '0989557701',
    accounting: '0989557738',
  },
  {
    slug: '/institutes/shams',
    name: 'معهد شمس',
    logo: shams,
    logoAlt: "لوغو معهد شمس",
    smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
    description: `
تسعى أسرة النخبة التعليمية من خلال مراكزها المنتشرة في مدينة حلب إلى تحقيق تعليم متميز .وتخريج جيل من الشباب المثقف فكريا وأخلاقيا .
وذلك عن طريق زرع روح المنافسة والتنظيم والإصرار على بلوغ الهدف وجعل كلمة مستحيل ممكنا دائما ليكون طالبنا مميزا في مختلف المجالات .
  `,
    images: [a, a, a],
    boxes: [{ heading: 'البكالوريا', href: '/institutes/shams/baccalaureate' },
    { heading: 'التاسع', href: '/institutes/shams/ninth' },
    ], address: 'حلب - الشهباء الجديدة = جانب دوار الغزالي.',
    reception: '0989557701',
    accounting: '0989557738',
  }
  ,
];