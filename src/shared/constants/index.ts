import { t } from '../../app/i18n';
import { store } from '../../app/store';
import { Platform } from 'react-native';
import { TestIds } from 'react-native-google-mobile-ads';

const state = store.getState();

export const publicUrl = process.env.EXPO_PUBLIC_SERVER_API_URL ?? 'http://172.20.10.14:4000/api';

// Place your rewarded ad unit ids heres
export const REWARDED_AD_UNIT_ID = Platform.select({
  ios: __DEV__ ? TestIds.REWARDED : state.app.config?.ads?.rewarded.ios || '',
  android: __DEV__ ? TestIds.REWARDED : state.app.config?.ads?.rewarded.android || ''
});

export const Firebase = {
  CONFIGURATION_REF: 'configuration'
};

export const Endpoints = {
  TEXT_COMPLETIONS: 'completions',
  TEXT_COMPLETIONS_TURBO: 'chat/completions'
};
