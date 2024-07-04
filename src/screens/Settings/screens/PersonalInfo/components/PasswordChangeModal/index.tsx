// Packages
import _ from 'lodash';
import React, { useCallback, useRef, useState } from 'react';

// Components
import { TouchableOpacity, View } from 'react-native';
import Input from '@shared/components/Input';
import { Formik, FormikProps } from 'formik';
import { EyeIcon, LockIcon } from '@shared/assets/icons';
import { IconButton, Modal, Portal, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { snackbarActions } from '@redux/snackbar/slice';
import { updateProfileAction } from '@redux/user/thunks';
import { newPassSchema } from '@schemas/User/NewPassSchema';
import { selectUserId, selectUserSubmitting } from '@redux/user/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { NewPassFormValuesProps } from '@shared/types/NewPassForm';

interface AccountDeletionModalProps {
  visible: boolean;
  onCancel: () => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`account_deletion.${key}`, options);

const PasswordChangeModal: React.FC<AccountDeletionModalProps> = ({ visible, onCancel }) => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const userId = useAppSelector(selectUserId);
  const isLoading = useAppSelector(selectUserSubmitting);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [shownPassword, setShownPassword] = useState<'currentPassword' | 'password' | 'confPassword' | null>(null);

  const formRef = useRef<FormikProps<NewPassFormValuesProps> | null>(null);

  const formInitialValues = { currentPassword: '', password: '', confPassword: '' };

  // Callbacks
  const handleFormSubmit = useCallback(
    async (values: NewPassFormValuesProps) => {
      console.info('[handleFormSubmit] :: ', { values });

      const { currentPassword, password, confPassword } = values;

      if ((currentPassword && !password && !confPassword) || !_.isEqual(password, confPassword)) {
        dispatch(
          snackbarActions.showSnackbar({
            type: 'error',
            title: 'Error',
            message: "New Password and Confirmed Password doesn't match"
          })
        );

        return;
      }

      const response = await dispatchThunk(updateProfileAction({ _id: userId, currentPassword, password }));

      console.debug('response in modal', response.payload);

      if (response.payload.success) {
        dispatch(
          snackbarActions.showSnackbar({
            type: 'success',
            title: 'Success',
            message: 'Password updated successfully'
          })
        );

        onCancel();
      } else {
        dispatch(
          snackbarActions.showSnackbar({
            type: 'error',
            title: 'Error',
            message: 'An error has occured, try again later.'
          })
        );
      }
    },
    [dispatch, dispatchThunk, onCancel, userId]
  );

  const handleViewPress = (type: 'currentPassword' | 'password' | 'confPassword') => {
    setShownPassword((prev) => (prev === type ? null : type));
  };

  // Renderers
  const renderViewIconBtn = (type) => (
    <TouchableOpacity onPress={() => handleViewPress(type)}>
      <EyeIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
    </TouchableOpacity>
  );

  return (
    <Portal>
      <Modal visible={visible} dismissable={false} contentContainerStyle={styles.container}>
        <Text variant="h4" style={styles.title}>
          {t('profile.change_password')}
        </Text>

        <Text variant="large" style={styles.description}>
          {t('profile.enter_current_and_new_pass')}
        </Text>

        <Formik
          innerRef={formRef}
          validateOnChange={false}
          onSubmit={handleFormSubmit}
          validationSchema={newPassSchema}
          initialValues={formInitialValues}>
          {({ handleChange, values, errors }) => (
            <View>
              <Input
                name="currentPassword"
                error={errors.currentPassword}
                value={values.currentPassword}
                label={t('profile.current_password')}
                handleChange={handleChange('currentPassword')}
                placeholder={t('profile.current_password')}
                rightIcon={renderViewIconBtn('currentPassword')}
                secureTextEntry={!shownPassword || shownPassword !== 'currentPassword'}
                leftIcon={<LockIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
              />

              <Input
                name="password"
                error={errors.password}
                value={values.password}
                label={t('profile.new_password')}
                handleChange={handleChange('password')}
                placeholder={t('profile.new_password')}
                rightIcon={renderViewIconBtn('password')}
                secureTextEntry={!shownPassword || shownPassword !== 'password'}
                leftIcon={<LockIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
              />

              <Input
                name="confPassword"
                error={errors.confPassword}
                value={values.confPassword}
                label={t('profile.conf_password')}
                handleChange={handleChange('confPassword')}
                placeholder={t('profile.conf_password')}
                rightIcon={renderViewIconBtn('confPassword')}
                secureTextEntry={!shownPassword || shownPassword !== 'confPassword'}
                leftIcon={<LockIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
              />
            </View>
          )}
        </Formik>

        <View style={styles.actions}>
          <RegularButton
            loading={isLoading}
            style={[styles.button, { marginTop: 8 }]}
            onPress={() => formRef.current?.submitForm()}
            title={t('profile.update_password')}
          />
          <RegularButton variant="secondary" onPress={onCancel} style={styles.button} title={t('common.cancel')} />
        </View>
      </Modal>
    </Portal>
  );
};

export default PasswordChangeModal;
