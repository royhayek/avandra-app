// Packages
import _ from 'lodash';
import React, { useCallback, useMemo } from 'react';

// Components
import { View } from 'react-native';
import AccountDeletionModal from '../AccountDeletion';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { appName } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';
import NavigationButton, { NavigationButtonProps } from '../../components/NavigationButton';

// Component
const AccountSecurityScreen = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isDeletionModalOpen, setIsDeletionModalOpen] = React.useState(false);

  const enabledFaceId = false;
  const enabledBiometricId = false;

  // Callbacks
  const handleBiometricIdToggle = useCallback(() => {}, []);

  const handleFaceIdToggle = useCallback(() => {}, []);

  const handleDeleteAccount = useCallback(() => setIsDeletionModalOpen(true), []);

  const handleCancelDeletion = useCallback(() => setIsDeletionModalOpen(false), []);

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
        key: 'delete_account',
        name: t('settings.delete_account'),
        description: t('settings.delete_account_desc', { name: appName }),
        onPress: handleDeleteAccount,
        color: theme.colors.red
      }
    ],
    [
      enabledFaceId,
      theme.colors.red,
      enabledBiometricId,
      handleFaceIdToggle,
      handleDeleteAccount,
      handleBiometricIdToggle
    ]
  );

  // Renderers
  return (
    <View style={styles.container}>
      {_.map(buttons, ({ key, name, color, description, onPress, isSwitch, switchProps }) => (
        <NavigationButton
          key={key}
          name={name}
          color={color}
          onPress={onPress}
          isSwitch={isSwitch}
          description={description}
          switchProps={switchProps}
        />
      ))}

      <AccountDeletionModal visible={isDeletionModalOpen} onCancel={handleCancelDeletion} />
    </View>
  );
};

export default AccountSecurityScreen;
