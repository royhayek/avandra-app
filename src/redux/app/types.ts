import { WalkthroughProps } from '@shared/types/Walkthrough';

export interface AppInitialState {
  config: {
    privacyPolicy: string;
    termsAndConditions: string;
  };
  language: string;
  themeMode: string;
  plannerStep: number;
  subscriptions: any[];
  messagesCount: number;
  deviceUuid: string | null;
  lastSentDate: Date | null;
  lastRewardedDate: Date | null;
  ownedSubscription: any | null;
  walkthrough: WalkthroughProps[];
}
