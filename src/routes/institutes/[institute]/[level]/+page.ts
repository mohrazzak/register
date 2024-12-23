import { institutes } from '$lib/data';
import type { PageLoad } from './$types';
import jalalAddasImage from '$lib/assets/images/teachers/jalal_addas.jpeg?enhanced';
import abdImage from '$lib/assets/images/teachers/abdalwahab_taskya.jpeg?enhanced';
import kamelKadiImage from '$lib/assets/images/teachers/kamel_kadi.jpeg?enhanced';
import jamalSheikhDiabImage from '$lib/assets/images/teachers/jamal_sheikh_diab.jpeg?enhanced';
import type { Picture } from '$lib/interface/picture.interface';



interface Teacher {
  img: Picture;
  name: string;
  subject: string;
}

interface WorkingPlan {
  title: string;
  description: string;
}

export const load: PageLoad = ({ params, url }) => {
  const institute = institutes.find(l =>
    l.slug.slice(12) === params.institute
  );
  if (!institute) throw new Error()

  const level = institute.boxes.find(b => b.href === url.pathname)
  if (!level) throw new Error()

  const teachers: Teacher[] = [
    { img: jalalAddasImage, name: 'جلال عدّاس', subject: 'فيزياء' },
    { img: abdImage, name: 'عبد الوهاب تسقية', subject: 'لغة إنجليزية' },
    { img: kamelKadiImage, name: 'كامل قاضي', subject: 'علوم' },
    { img: jamalSheikhDiabImage, name: 'جمال شيخ دياب', subject: 'رياضيات' }
  ];

  // Working plans for the institute
  const workingPlans: WorkingPlan[] = [
    {
      title: 'الدورة الصيفية:',
      description:
        'تبدأ الدورة في 1/6/2024، وتنتهي في 15/9/2024. وتشمل مراجعات شاملة للحادي عشر، وبعض أبحاث البكالوريا.'
    },
    {
      title: 'الدورة الشتوية:',
      description: 'تبدأ الدورة في 15/9/2024، وتنتهي 15/3/2025. وتشمل ماتبقى من منهاج البكالوريا.'
    },
    {
      title: 'دورة المراجعات والمذاكرات:',
      description:
        'تبدأ الدورة في 15/3/2025، وتنتهي 28/5/2025. وتشمل مذاكرات نصفية وشاملة لكافة المواد مع مراجعة شاملة لكافة المنهاج وينظم الطالب من خلالها دراسته حتى يوم الامتحان النهائي.'
    }
  ];

  const test = [
    {
      text: `
	تتضمن النوطة المراجعات الشاملة التي قام مدرسو النخبة بتنظيمها لاهم العناوين والمحاور ، التي
				يجب على الطلاب الإلمام بها جيداً، لكي يضمنوا انطلاقة قوية مع بداية العام الدراسي الجديد .`,
      bold: false
    },
    {
      text: 'تطلب النوطة من مكتبة الغزالي : <br> الشهباء الجديدة -نزلة جامع الغزالي – امام جامعة الاتحاد .',
      bold: true
    }
  ];

  return {
    institute,
    level, teachers, workingPlans, test
  };
};