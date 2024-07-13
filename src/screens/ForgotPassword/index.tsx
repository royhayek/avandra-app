// Packages
import _ from 'lodash';
import { s } from 'react-native-size-matters';
import React, { useCallback, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Components
import { Text } from 'react-native-paper';
import Icon from '@shared/components/Icon';
import { Formik, FormikProps } from 'formik';
import Input from '@shared/components/Input';
import { ScrollView, View } from 'react-native';
import BackButton from '@shared/components/Buttons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegularButton from '@shared/components/Buttons/Regular';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { resetPassword } from '@redux/auth/api';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { selectUserSubmitting } from '@redux/user/slice';
import { useAppDispatch, useAppSelector } from '@app/store';
import { resetPassSchema } from '@schemas/User/ResetPassSchema';

// Interfaces
import { ResetPassFormValuesProps } from '@shared/types/ResetPassForm';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Component
const ForgotPasswordScreen = () => {
  // Redux
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectUserSubmitting);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const formRef = useRef<FormikProps<ResetPassFormValuesProps> | null>(null);

  const formInitialValues = { email: '' };

  // Callbacks
  const handleFormSubmit = useCallback(
    async (values: ResetPassFormValuesProps) => {
      console.info('[handleFormSubmit] :: ', { values });
      const response = await resetPassword(values);

      console.debug('response', response);
      if (response.data?.success) {
        dispatch(
          snackbarActions.showSnackbar({
            type: 'success',
            title: 'Success',
            message: 'Password reset link has been sent to your email.'
          })
        );

        navigation.goBack();
      } else
        dispatch(
          snackbarActions.showSnackbar({
            type: 'error',
            title: 'Error',
            message: 'An error has occured, try again later.'
          })
        );
    },
    [dispatch, navigation]
  );

  // Renders
  const renderForm = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text variant="h3" style={styles.title}>
          {t('resetPassword.title')}
        </Text>
        <Text variant="xLarge">{t('resetPassword.description')}</Text>

        <Formik
          innerRef={formRef}
          validateOnChange={false}
          onSubmit={handleFormSubmit}
          validationSchema={resetPassSchema}
          initialValues={formInitialValues}>
          {({ handleChange, values, errors }) => (
            <View style={styles.form}>
              <Input
                name="email"
                error={errors.email}
                value={values.email}
                label={t('profile.email')}
                keyboardType="email-address"
                placeholder={t('profile.email')}
                handleChange={handleChange('email')}
                leftIcon={
                  <Icon size={s(14)} name="message" color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
                }
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );

  const renderFooter = () => (
    <View style={commonStyles.footer}>
      <RegularButton
        fullWidth
        loading={loading}
        title={t('resetPassword.send_reset_link')}
        onPress={() => formRef.current?.handleSubmit()}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      {renderForm()}
      {renderFooter()}
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
