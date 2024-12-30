import type { Test, WorkingPlan } from '$lib/interface/box.interface';

export const bacWorkingPlan: WorkingPlan[] = [
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


export const bacTest: Test[] = [
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


export const ninthWorkingPlan: WorkingPlan[] = [
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
]


export const ninthTest: Test[] = [{
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
}];


