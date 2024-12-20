import { institutes } from '$lib/data';
import type { PageLoad } from './$types';





export const load: PageLoad = ({ params }) => {
  const institute = institutes.find(l =>
    l.slug.slice(12) === params.institute
  );

  if (!institute) throw new Error()
  return {
    institute
  };
};