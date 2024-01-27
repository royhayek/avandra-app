// Packages
import _ from 'lodash';
import React, { useCallback, useMemo } from 'react';

// Components

// Utilities
import { t } from '@app/i18n';
import { appName } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import NavigationButton, { NavigationButtonProps } from '../../components/NavigationButton';

// Component
const AccountSecurityScreen = () => {
  // Statics
  const theme = useAppTheme();

  const enabledFaceId = false;
  const enabledBiometricId = false;

  // Callbacks
  const handleBiometricIdToggle = useCallback(() => {}, []);

  const handleFaceIdToggle = useCallback(() => {}, []);

  const handleDeactivateAccount = useCallback(() => {}, []);

  const handleDeleteAccount = useCallback(() => {}, []);

  // Renderer Vars
  const buttons: NavigationButtonProps[] = useMemo(
    () => [
      {
        key: 'biometric_id',
        name: t('settings.biometric_id'),
        isSwitch: true,
        switchProps: { value: enabledBiometricId, onValueChange: handleBiometricIdToggle }
      },
      {
        key: 'face_id',
        name: t('settings.face_id'),
        isSwitch: true,
        switchProps: { value: enabledFaceId, onValueChange: handleFaceIdToggle }
      },
      {
        key: 'deactivate_account',
        name: t('settings.deactivate_account'),
        description: t('settings.deactivate_account_desc'),
        onPress: handleDeactivateAccount
      },
      {
        key: 'delete_account',
        name: t('settings.delete_account'),
        description: t('settings.delete_account_desc', { name: appName }),
        onPress: handleDeleteAccount,
        color: theme.colors.red
      }
    ],
    [
      enabledBiometricId,
      handleBiometricIdToggle,
      enabledFaceId,
      handleFaceIdToggle,
      handleDeactivateAccount,
      handleDeleteAccount,
      theme.colors.red
    ]
  );

  // Renderers
  return _.map(buttons, ({ key, name, color, description, onPress, isSwitch, switchProps }) => (
    <NavigationButton
      key={key}
      name={name}
      color={color}
      onPress={onPress}
      isSwitch={isSwitch}
      description={description}
      switchProps={switchProps}
    />
  ));
};

export default AccountSecurityScreen;
