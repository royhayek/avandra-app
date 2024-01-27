// Packages
import _ from 'lodash';
import React, { useCallback, useMemo } from 'react';

// Components
import NavigationButton, { NavigationButtonProps } from '../../components/NavigationButton';

// Utilities
import { Languages } from '@shared/constants';
import { changeLanguage, t } from '@app/i18n';
import { useAppDispatch, useAppSelector } from '@app/store';
import { appActions, getLanguage, getThemeMode } from '@redux/app/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`settings.${key}`, options);

const AppearanceScreen = () => {
  // Redux
  const dispatch = useAppDispatch();
  const language = useAppSelector(getLanguage);
  const themeMode = useAppSelector(getThemeMode);

  // Statics
  const isDark = _.isEqual(themeMode, 'dark');

  // Callbacks
  const updateLanguage = useCallback(
    (lng: string) => {
      dispatch(appActions.setLanguage(lng));
      changeLanguage(lng);
    },
    [dispatch]
  );

  const toggleThemeMode = useCallback(
    () => dispatch(appActions.setThemeMode(isDark ? 'light' : 'dark')),
    [dispatch, isDark]
  );

  // Renderer Vars
  const buttons: NavigationButtonProps[] = useMemo(
    () => [
      {
        key: 'language',
        name: _t('language'),
        isMenu: true,
        menuProps: {
          items: Languages,
          value: t(_.find(Languages, { item: language })?.title || ''),
          onItemPress: updateLanguage
        }
      },
      {
        key: 'theme',
        name: _t('theme'),
        isSwitch: true,
        switchProps: { value: isDark, onValueChange: toggleThemeMode }
      }
    ],
    [isDark, language, toggleThemeMode, updateLanguage]
  );

  // Renderers
  return _.map(buttons, ({ key, icon, name, color, onPress, isSwitch, isMenu, switchProps, menuProps }) => (
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
  ));
};

export default AppearanceScreen;
