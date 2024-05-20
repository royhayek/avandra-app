import { WalkthroughProps } from '@shared/types/Walkthrough';
import { ParsedURL } from 'expo-linking';

export interface AppInitialState {
  config: {
    privacyPolicy: string;
    termsAndConditions: string;
  };
  networkError: {
    message: string;
    status: number;
  } | null;
  language: string;
  themeMode: string;
  plannerStep: number;
  subscriptions: any[];
  messagesCount: number;
  deviceUuid: string | null;
  lastSentDate: Date | null;
  lastRewardedDate: Date | null;
  ownedSubscription: any | null;
  deepLinkData: ParsedURL | null;
  walkthrough: WalkthroughProps[];
}
