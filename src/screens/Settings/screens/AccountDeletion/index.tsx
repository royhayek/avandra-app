// Packages
import _ from 'lodash';
import React, { useCallback, useState } from 'react';

// Components
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Modal, Portal, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { authActions } from '@redux/auth/slice';
import { useAppTheme } from '@shared/assets/theme';
import { snackbarActions } from '@redux/snackbar/slice';
import { deleteAccountAction } from '@redux/user/thunks';
import { selectUserId, userActions } from '@redux/user/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface AccountDeletionModalProps {
  visible: boolean;
  onCancel: () => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`account_deletion.${key}`, options);

const AccountDeletionModal: React.FC<AccountDeletionModalProps> = ({ visible, onCancel }) => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const userId = useAppSelector(selectUserId);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isDeleting, setIsDeleting] = useState(false);

  // Callbacks
  const handleDeletePress = useCallback(async () => {
    setIsDeleting(true);
    const response = await dispatchThunk(deleteAccountAction(userId));

    if (response.payload?.success) {
      setIsDeleting(false);
      onCancel();

      dispatch(authActions.reset());
      dispatch(userActions.reset());

      dispatch(
        snackbarActions.showSnackbar({
          delay: 2000,
          type: 'success',
          title: 'Success',
          message: 'Account deleted successfully.'
        })
      );
    } else {
      setIsDeleting(false);

      dispatch(
        snackbarActions.showSnackbar({
          delay: 2000,
          type: 'error',
          title: 'Error',
          message: 'An error occurred while deleting your account. Please try again.'
        })
      );
    }
  }, [dispatch, dispatchThunk, onCancel, userId]);

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
          <RegularButton
            loading={isDeleting}
            style={styles.button}
            onPress={handleDeletePress}
            title={_t('delete_account')}
          />
          <RegularButton variant="secondary" onPress={onCancel} style={styles.button} title={t('common.cancel')} />
        </View>
      </Modal>
    </Portal>
  );
};

export default AccountDeletionModal;
