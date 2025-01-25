import type { Subject } from '$lib/data/teachers';



interface Teacher {
  img: string;
  name: string;
  subject: Subject;
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
  imgs: string[]
}

export interface Box {
  alt?: string
  img?: string;
  heading?: string;
  href: string;
}