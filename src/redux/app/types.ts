import { ParsedURL } from 'expo-linking';
import { PurchasesOffering } from 'react-native-purchases';
import { WalkthroughProps } from '@shared/types/Walkthrough';
import { NetworkErrorProps } from '@shared/types/NetworkError';
import { SubscriptionStateProps } from '@shared/types/SubscriptionState';

export interface AppInitialState {
  language: string;
  themeMode: string;
  plannerStep: number;
  deepLinkData: ParsedURL | null;
  walkthrough: WalkthroughProps[];
  networkError: NetworkErrorProps | null;
  currentOffering: PurchasesOffering | null;
  subscriptionState: SubscriptionStateProps | null;
  config: {
    privacyPolicy: string;
    termsAndConditions: string;
  };
}
