import { t } from '../../app/i18n';
import { store } from '../../app/store';
import { Platform } from 'react-native';
import { TestIds } from 'react-native-google-mobile-ads';

const state = store.getState();

// Modify the app languages from here
// Uncomment the line below and replace "language" and "key" with the language
export const Languages = [
  // { item: 'language', title: t('settings.languages.lang') },
  { item: 'en', title: t('settings.languages.english') },
  { item: 'fr', title: t('settings.languages.french') },
  { item: 'ar', title: t('settings.languages.arabic') }
];

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
