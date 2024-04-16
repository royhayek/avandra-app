// Packages
import { Moment } from 'moment';

// Interfaces
import { FaqProps } from '@shared/types/Faq';
import { FaqCategoryProps } from '@shared/types/FaqCategory';

export interface SettingsInitialState {
  faq: FaqProps[];
  loading: boolean;
  privacyPolicy: string;
  lastRefresh: Moment | null;
  termsAndConditions: string;
  faqCategoriesLoading: boolean;
  error: string | null | undefined;
  faqCategories: FaqCategoryProps[];
}
