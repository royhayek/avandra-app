// Interfaces
import { LanguageProps } from './Language';

export interface FaqProps {
  _id: string;
  order: number;
  answer: string;
  question: string;
  category: string;
  language: LanguageProps;
}
