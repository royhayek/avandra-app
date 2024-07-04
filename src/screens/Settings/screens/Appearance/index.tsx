// Packages
import _ from 'lodash';
import React, { useCallback, useRef, useState } from 'react';

// Components
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import CustomBottomSheet from '@shared/components/BottomSheet';
import NavigationButton, { NavigationButtonProps } from '../../components/NavigationButton';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { changeLanguage, changeLocale, t } from '@app/i18n';
import { useAppDispatch, useAppSelector } from '@app/store';
import { destinationsActions } from '@redux/destination/slice';
import { appActions, selectLanguage, selectSubscriptionState, selectThemeMode } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import UpgradeSheet from '@shared/components/UpgradeSheet';
import { PREMIUM_ENABLED } from '@shared/constants';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`settings.${key}`, options);

const AppearanceScreen = () => {
  // Redux
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectThemeMode);
  const appLanguage = useAppSelector(selectLanguage);
  const subscriptionState = useAppSelector(selectSubscriptionState);

  const themeSheetRef = useRef<BottomSheetMethods>(null);
  const upgradeSheetRef = useRef<BottomSheetMethods>(null);
  const languageSheetRef = useRef<BottomSheetMethods>(null);

  // Statics
  const appTheme = useAppTheme();
  const styles = makeStyles(appTheme);

  const [theme, setTheme] = useState<string>(themeMode ?? 'default');
  const [language, setLanguage] = useState<string>(appLanguage ?? 'en');

  // Callbacks
  const handleLanguageSheetClose = useCallback(() => languageSheetRef.current?.close(), []);

  const handleThemeSheetClose = useCallback(() => themeSheetRef.current?.close(), []);

  const handleThemePress = useCallback(() => themeSheetRef.current?.expand(), []);

  const handleThemeChange = useCallback((value: string) => setTheme(value), []);

  const handleLanguageChange = useCallback((value: string) => setLanguage(value), []);

  const handleLanguagePress = useCallback(() => languageSheetRef.current?.expand(), []);

  const handleLanguage = useCallback(async () => {
    await dispatch(destinationsActions.reset());
    await dispatch(appActions.setLanguage(language));
    changeLanguage(language);
    changeLocale(language);
    handleLanguageSheetClose();
  }, [dispatch, handleLanguageSheetClose, language]);

  const handleTheme = useCallback(() => {
    if (subscriptionState?.active || (!subscriptionState?.active && _.isEqual(theme, 'light')) || !PREMIUM_ENABLED) {
      dispatch(appActions.setThemeMode(theme));
    } else {
      upgradeSheetRef.current?.expand();
    }

    handleThemeSheetClose();
  }, [dispatch, handleThemeSheetClose, subscriptionState?.active, theme]);

  // Renderer Vars
  const languageOptions = [
    { value: 'en', title: _t('languages.english') },
    { value: 'fr', title: _t('languages.french') },
    { value: 'ar', title: _t('languages.arabic') }
  ];

  const themeOptions = [
    { value: 'default', title: _t('themeOptions.system_default') },
    { value: 'light', title: _t('themeOptions.light') },
    { value: 'dark', title: _t('themeOptions.dark') }
  ];

  const buttons: NavigationButtonProps[] = [
    {
      key: 'language',
      name: _t('language'),
      isMenu: true,
      onPress: handleLanguagePress,
      menuProps: {
        value: _.find(languageOptions, { value: appLanguage })?.title,
        onItemPress: handleLanguagePress
      }
    },
    {
      key: 'theme',
      name: _t('theme'),
      isMenu: true,
      onPress: handleThemePress,
      menuProps: {
        value: _.find(themeOptions, { value: themeMode })?.title,
        onItemPress: handleThemePress
      }
    }
  ];

  // Renderers
  return (
    <View style={styles.container}>
      {_.map(buttons, ({ key, icon, name, color, onPress, isSwitch, isMenu, switchProps, menuProps }) => (
        <NavigationButton
          key={key}
          icon={icon}
          name={name}
          color={color}
          isMenu={isMenu}
          onPress={onPress}
          isSwitch={isSwitch}
          menuProps={menuProps}
          switchProps={switchProps}
        />
      ))}

      <CustomBottomSheet
        sheetRef={languageSheetRef}
        title={_t('choose_language')}
        onClose={handleLanguageSheetClose}
        primaryBtnProps={{ title: t('common.ok'), onPress: handleLanguage }}
        secondaryBtnProps={{ title: t('common.cancel'), onPress: handleLanguageSheetClose }}>
        <RadioButton.Group onValueChange={handleLanguageChange} value={language}>
          {_.map(languageOptions, ({ value, title }) => (
            <View key={value} style={styles.radioButton}>
              <RadioButton.Android value={value} />
              <Text variant="h5" style={styles.radioTitle}>
                {title}
              </Text>
            </View>
          ))}
        </RadioButton.Group>
      </CustomBottomSheet>

      <CustomBottomSheet
        sheetRef={themeSheetRef}
        title={_t('choose_theme')}
        onClose={handleThemeSheetClose}
        primaryBtnProps={{ title: t('common.ok'), onPress: handleTheme }}
        secondaryBtnProps={{ title: t('common.cancel'), onPress: handleThemeSheetClose }}>
        <RadioButton.Group onValueChange={handleThemeChange} value={theme}>
          {_.map(themeOptions, ({ value, title }) => (
            <View key={value} style={styles.radioButton}>
              <RadioButton.Android value={value} />
              <Text variant="h5" style={styles.radioTitle}>
                {title}
              </Text>
            </View>
          ))}
        </RadioButton.Group>
      </CustomBottomSheet>

      <UpgradeSheet
        sheetRef={upgradeSheetRef}
        title={t('subscription.upgrade_for_other_themes')}
        description={t('subscription.upgrade_to_unlock_themes')}
      />
    </View>
  );
};

export default AppearanceScreen;
