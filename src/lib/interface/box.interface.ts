import type { Picture } from './picture.interface';



interface Teacher {
  img: Picture;
  name: string;
  subject: string;
}

export interface WorkingPlan {
  title: string;
  description: string;
}

export interface Test {
  text: string;
  bold: boolean
}




export interface FullBox {
  heading: string;
  href: string;
  description: string;
  teachers?: Teacher[]
  workingPlans: WorkingPlan[]
  test?: Test[]
  imgs: Picture[]
}

export interface Box {
  alt?: string
  img?: Picture;
  heading?: string;
  href: string;
}