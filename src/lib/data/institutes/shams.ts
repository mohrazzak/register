

import { bacTest, bacWorkingPlan, ninthTest, ninthWorkingPlan } from './shared';
import { teachersData } from '../teachers';



export const shamsInstitute = {
  slug: '/institutes/shams',
  name: 'معهد شمس',
  logo: 'https://res.cloudinary.com/dgive1g2g/image/upload/w_200,q_auto:eco/v1737824418/register/images/logos/iz6uge9xivucugf526wo.png',
  logoAlt: "لوغو معهد شمس",
  smallDescription: 'مع النخبة.. حول أمنياتك إلى أهداف',
  description: `
      يقدم معهد شمس برامج تعليمية متكاملة تهدف إلى بناء شخصية الطالب الأكاديمية والأخلاقية. 
      يسعى المعهد لخلق بيئة تعليمية محفزة تزرع في نفوس الطلاب حب التعلم والتطور، مع التركيز على تحقيق أعلى درجات التفوق. 
      كما يتيح المعهد للطلاب فرصة التسجيل في دورات خاصة لأخذ مواد البكالوريا أثناء سنة الحادي عشر، مما يمكنهم من الاستعداد المبكر وتحقيق نتائج متميزة.
    `,
  images: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_400,q_auto:eco/v1737824402/register/images/institutes/shams/qawwqfbrom6ckoxbxska.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_400,q_auto:eco/v1737824394/register/images/institutes/shams/jpuiv6nagzrfkyo2m8jq.jpg'],
  address: 'دوار الكرة - مقابل نادي الضباط.',
  reception: '0989557708',
  boxes: [
    {
      heading: 'البكالوريا',
      href: '/institutes/shams/baccalaureate',
      description: 'البكالوريا ليست مجرد مرحلة دراسية، بل هي البوابة لتحقيق الأحلام والطموحات الأكاديمية. في مدارس نخبة حلب، نقدم تعليمًا متميزًا يواكب تطلعات الطلاب نحو التفوق. نولي أهمية خاصة لمتابعة تطور كل طالب بشكل فردي، ونعتمد على تقنيات تعليمية مبتكرة تعزز الفهم والقدرة على حل المشكلات. بالإضافة إلى ذلك، نقدم بيئة تعليمية حديثة مجهزة بأفضل الوسائل لتحقيق النجاح، مما يجعلنا الشريك الأمثل لبناء مستقبل مشرق.', teachers: [
        /// math   
        teachersData.anasDrgham,
        teachersData.waseemShayyah,
        teachersData.mohammadFarek,

        // py

        teachersData.mohammadAmeenSeedo,
        teachersData.mohammadTabbakh,

        // chem
        teachersData.samerSleman,
        teachersData.mahmoudHreh,



        // science
        teachersData.kamelKadi,
        teachersData.othmanAlMohammad,


        // ar

        teachersData.ramezAlSaeed,
        teachersData.hussamDwick,


        // en
        teachersData.basharGamalAldeen,

        // rele
        teachersData.ihabGamal



      ],
      test: bacTest,
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_400,q_auto:eco/v1737824386/register/images/institutes/shams/12/hkvgh0jugepeedtuy2ed.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_400,q_auto:eco/v1737824383/register/images/institutes/shams/12/qcsteqzdzk93hluu3c8f.jpg'],
      workingPlans: bacWorkingPlan,
    },
    {
      heading: 'التاسع',
      href: '/institutes/shams/ninth',
      description: 'الصف التاسع هو مرحلة مفصلية نحو الامتحانات الشاملة التي تحدد مسار الطلاب المستقبلي. في مدارس نخبة حلب، نقدم برامج تعليمية مبتكرة وموجهة تساعد الطلاب على التفوق في الامتحانات الرسمية. نضمن بيئة تعليمية محفزة وداعمة تجعل من التفوق الخيار الوحيد أمامهم.',
      test: ninthTest,
      teachers: [

        // math
        teachersData.adeebAlsayed,

        // py chem
        teachersData.mehdiBasteka,


        // science
        teachersData.mehdiBasteka,

        // science
        teachersData.ahmadHafez,
        teachersData.saleemKaroub,

        // Ar
        teachersData.yamanAbras,

        // En
        teachersData.salyKayyali,
        teachersData.mohsenKadi,


        // fr
        teachersData.ammarKhdry,
        teachersData.nihadSeno,


        // t + j
        teachersData.adeebZohor,


        // Rel
        teachersData.ihabGamal



      ],
      imgs: ['https://res.cloudinary.com/dgive1g2g/image/upload/w_400,q_auto:eco/v1737824392/register/images/institutes/shams/9/tvcgrtwafuecsy3ceign.jpg', 'https://res.cloudinary.com/dgive1g2g/image/upload/w_400,q_auto:eco/v1737824388/register/images/institutes/shams/9/dw2jqyt6jlkinwrjhtps.jpg'],
      workingPlans: ninthWorkingPlan
    },
  ]
};