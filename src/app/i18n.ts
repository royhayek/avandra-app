// Packages
import _ from 'lodash';
import * as Updates from 'expo-updates';
import { I18n, TranslateOptions } from 'i18n-js';
import { DevSettings, I18nManager } from 'react-native';

// Utilities
import { wait } from '../shared/utils';
import fr from '../shared/locale/fr.json';
import ar from '../shared/locale/ar.json';
import en from '../shared/locale/en.json';

const i18n = new I18n();

// Uncomment the following line and replace "language" with the language
// i18n.store(language);
i18n.store(en);
i18n.store(fr);
i18n.store(ar);

i18n.enableFallback = true;

export const changeLanguage = (lng: string) => {
  i18n.locale = lng;

  wait(10).then(() => {
    const isRTL = _.isEqual(lng, 'ar');
    I18nManager.forceRTL(isRTL);
    I18nManager.allowRTL(isRTL);

    if (__DEV__) {
      DevSettings.reload();
    } else {
      Updates.reloadAsync();
    }
  });
};

export const changeLocale = (locale: string) => {
  i18n.locale = locale;

  wait(10).then(() => {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
    } else {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    }
  });
};

export const isRTL = I18nManager.isRTL;

export const t = (key: string, options?: TranslateOptions) => i18n.t(key, options);

export default i18n;