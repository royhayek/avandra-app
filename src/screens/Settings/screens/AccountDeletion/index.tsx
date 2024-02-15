// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';

// Components
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Modal, Portal, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface AccountDeletionModalProps {
  visible: boolean;
  onCancel: () => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`account_deletion.${key}`, options);

const AccountDeletionModal: React.FC<AccountDeletionModalProps> = ({ visible, onCancel }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleDeletePress = useCallback(async () => {
    onCancel();
  }, [onCancel]);

  // Renderers
  return (
    <Portal>
      <Modal visible={visible} dismissable={false} contentContainerStyle={styles.container}>
        <FastImage source={require('@shared/assets/images/SuccessProfileLogo.png')} style={styles.image} />

        <Text variant="h4" style={styles.title}>
          {_t('account_deletion')}
        </Text>

        <Text variant="large" style={styles.description}>
          {_t('losing_data')}
        </Text>

        <View style={styles.actions}>
          <RegularButton onPress={handleDeletePress} title={_t('delete_account')} style={styles.button} />
          <RegularButton variant="secondary" onPress={onCancel} style={styles.button} title={t('common.cancel')} />
        </View>
      </Modal>
    </Portal>
  );
};

export default AccountDeletionModal;
