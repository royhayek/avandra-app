import { ParsedURL } from 'expo-linking';
import { PurchasesPackage } from 'react-native-purchases';
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
  currentOffering: PurchasesPackage[] | null;
  subscriptionState: SubscriptionStateProps | null;
  config: {
    appleAppId: string;
    privacyPolicy: string;
    googlePackageName: string;
    termsAndConditions: string;
  };
}
