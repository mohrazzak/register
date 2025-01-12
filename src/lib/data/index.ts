
// Logos

// Institutes imgs







// Level Images


import type { Picture } from '$lib/interface/picture.interface';
import type { FullBox, } from '$lib/interface/box.interface';
import { schoolInstitute } from './institutes/school';
import { awaelSyriaInistitute } from './institutes/awael-syria';
import { nukhbehInstitute } from './institutes/institute';
import { gelAlshahbaaInstitute } from './institutes/gel-alshahbaa';
import { shamsInstitute } from './institutes/shams';





export interface Institute {
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




export const institutes: Institute[] = [
  nukhbehInstitute,
  gelAlshahbaaInstitute,
  schoolInstitute,
  shamsInstitute,
  awaelSyriaInistitute,
];
