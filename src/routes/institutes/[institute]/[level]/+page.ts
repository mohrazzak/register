import { institutes } from '$lib/data';
import type { PageLoad } from './$types';



export const load: PageLoad = ({ params, url }) => {
  const institute = institutes.find(l =>
    l.slug.slice(12) === params.institute
  );
  if (!institute) throw new Error()

  const level = institute.boxes.find(b => b.href === url.pathname)
  if (!level) throw new Error()


  return {
    institute,
    level,
  };
};