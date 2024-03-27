// Packages
import { Moment } from 'moment';

// Interfaces
import { ArticleProps } from '@shared/types/Article';

export interface ArticleInitialState {
  isLoading: boolean;
  lastRefresh: Moment | null;
  details: ArticleProps | null;
  articles: ArticleProps[] | null;
  error: string | null | undefined;
  popularArticles: ArticleProps[] | null;
}
