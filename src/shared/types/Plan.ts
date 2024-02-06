interface LanguageProps {
  en: string;
  fr: string;
  ar: string;
}

export interface PlanProps {
  _id: string;
  name: LanguageProps;
  price: number;
  best: boolean;
  period: string;
  trial: boolean;
  popular: boolean;
  currency: string;
  benefits: LanguageProps[];
}
