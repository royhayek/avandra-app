// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// Components
import { View, Appearance } from 'react-native';
import CustomBottomSheet from '@shared/components/BottomSheet';
import { Divider, RadioButton, Text } from 'react-native-paper';
import NavigationButton, { NavigationButtonProps } from '../../components/NavigationButton';

// Utilities
import makeStyles from './styles';
import { changeLanguage, t } from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';
import { useAppDispatch, useAppSelector } from '@app/store';
import { appActions, getLanguage, getThemeMode } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`settings.${key}`, options);

const AppearanceScreen = () => {
  // Redux
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(getThemeMode);
  const appLanguage = useAppSelector(getLanguage);

  const themeSheetRef = useRef<BottomSheetMethods>(null);
  const languageSheetRef = useRef<BottomSheetMethods>(null);

  // Statics
  const appTheme = useAppTheme();
  const styles = makeStyles(appTheme);

  const isDark = _.isEqual(themeMode, 'dark');
  const isLight = _.isEqual(themeMode, 'light');

  const [theme, setTheme] = useState(themeMode ?? 'default');
  const [language, setLanguage] = useState(appLanguage ?? 'en');

  // Callbacks
  const handleLanguageSheetClose = useCallback(() => languageSheetRef.current?.close(), []);

  const handleThemeSheetClose = useCallback(() => themeSheetRef.current?.close(), []);

  const handleThemePress = useCallback(() => themeSheetRef.current?.expand(), []);

  const handleThemeChange = useCallback((value: string) => setTheme(value), []);

  const handleLanguageChange = useCallback((value: string) => setLanguage(value), []);

  const handleLanguagePress = useCallback(() => languageSheetRef.current?.expand(), []);

  const handleLanguage = useCallback(() => {
    dispatch(appActions.setLanguage(language));
    changeLanguage(language);
    handleLanguageSheetClose();
  }, [dispatch, handleLanguageSheetClose, language]);

  const handleTheme = useCallback(() => {
    dispatch(appActions.setThemeMode(theme));
    handleThemeSheetClose();
  }, [dispatch, handleThemeSheetClose, theme]);

  // Effects
  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      console.debug('colorScheme', colorScheme);
      // dispatch(appActions.setThemeMode(colorScheme));
    });
  }, [dispatch]);

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
      value: isDark ? 'Dark' : 'Light',
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
    <>
      {_.map(buttons, ({ key, icon, name, color, onPress, isSwitch, isMenu, switchProps, menuProps }) => (
        <NavigationButton
          key={key}
          icon={icon}
          name={name}
          color={color}
          onPress={onPress}
          isSwitch={isSwitch}
          isMenu={isMenu}
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
        <>
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

          <Divider style={styles.divider} />
        </>
      </CustomBottomSheet>

      <CustomBottomSheet
        sheetRef={themeSheetRef}
        title={_t('choose_theme')}
        onClose={handleThemeSheetClose}
        primaryBtnProps={{ title: t('common.ok'), onPress: handleTheme }}
        secondaryBtnProps={{ title: t('common.cancel'), onPress: handleThemeSheetClose }}>
        <>
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

          <Divider style={styles.divider} />
        </>
      </CustomBottomSheet>
    </>
  );
};

export default AppearanceScreen;
