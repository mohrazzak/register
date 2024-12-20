import type { Picture } from './picture.interface';


export interface Box {
  heading: string;
  href: string;
  img?: Picture;
  alt?: string;
  questions?: {
    question: string;
    answer: string
  }[]
}