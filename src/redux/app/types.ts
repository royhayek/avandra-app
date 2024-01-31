export interface AppInitialState {
  config: {
    ads: {
      rewarded: {
        android: string;
        ios: string;
      };
    };
    links: {
      privacyPolicy: string;
      termsAndConditions: string;
    };
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
}
