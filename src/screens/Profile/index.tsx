// Packages
import _ from 'lodash';
import { ms, s } from 'react-native-size-matters';
import React, { useCallback, useState, useRef } from 'react';

// Components
import { Text } from 'react-native-paper';
import Icon from '@shared/components/Icon';
import { Formik, FormikProps } from 'formik';
import Input from '@shared/components/Input';
import FastImage from 'react-native-fast-image';
import { ScrollView, View } from 'react-native';
import BackButton from '@shared/components/Buttons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegularButton from '@shared/components/Buttons/Regular';
import CountryPicker, { Country, DARK_THEME, DEFAULT_THEME } from '@theankur/react-native-country-picker-modal';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { authActions, selectAuthLoading } from '@redux/auth/slice';
import { useAppTheme } from '@shared/assets/theme';
import { useRoute } from '@react-navigation/native';
import { registerAction } from '@redux/auth/thunks';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { updateProfileAction } from '@redux/user/thunks';
import { signUpSchema } from '@schemas/User/SignUpSchema';
import { profileSchema } from '@schemas/User/ProfileSchema';
import { selectUser, selectUserSubmitting } from '@redux/user/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { SignUpFormValuesProps } from '@shared/types/SignUpForm';
import { ProfileFormValuesProps } from '@shared/types/ProfileForm';
import { TouchableOpacity } from 'react-native';

interface RouteParams {
  screen: string;
}

// Component
const Profile = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const user = useAppSelector(selectUser);
  const isSignUpLoading = useAppSelector(selectAuthLoading);
  const loading = useAppSelector(selectUserSubmitting);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const formRef = useRef<FormikProps<ProfileFormValuesProps> | null>(null);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isOpenCountryPicker, setIsOpenCountryPicker] = useState(false);

  const route = useRoute();
  const { screen } = (route.params as RouteParams) || {};
  const isSigningUp = screen && _.isEqual(screen, 'SignUp');

  const { _id, name, email } = user;
  const profileFormInitialValues = { _id, name, email, country: '' };
  const signUpFormInitialValues = { name: '', email: '', password: '', country: '' };

  // Callbacks
  const handleOpenCountryPicker = useCallback(() => setIsOpenCountryPicker(true), []);

  const handleCloseCountryPicker = useCallback(() => setIsOpenCountryPicker(false), []);

  const handleExplorePress = useCallback(() => dispatch(authActions.update({ authenticated: true })), [dispatch]);

  const handleSignUpFormSubmit = useCallback(
    async (values: SignUpFormValuesProps) => {
      console.info('[handleSignUpFormSubmit] :: ', { values });
      const response = await dispatchThunk(registerAction(values));

      if (response.payload?.success) setIsSuccess(true);
      else
        dispatch(
          snackbarActions.showSnackbar({
            type: 'error',
            title: 'Error',
            message: 'An error has occured, try again later.'
          })
        );
    },
    [dispatch, dispatchThunk]
  );

  const handleProfileFormSubmit = useCallback(
    async (values: ProfileFormValuesProps) => {
      console.info('[handleFormSubmit] :: ', { values });
      const response = await dispatchThunk(updateProfileAction(values));

      if (response.payload.success) setIsSuccess(true);
      else
        dispatch(
          snackbarActions.showSnackbar({
            type: 'error',
            title: 'Error',
            message: 'An error has occured, try again later.'
          })
        );
    },
    [dispatch, dispatchThunk]
  );

  const handleViewPassPress = useCallback(() => {
    setIsPasswordShown((prev) => !prev);
  }, []);

  // Renders
  const renderSignUpForm = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text variant="h3" style={styles.title}>
          {isSigningUp ? t('register.title') : t('profile.title')}
        </Text>
        <Text variant="xLarge">{isSigningUp ? t('register.description') : t('profile.description')}</Text>

        <Formik
          innerRef={formRef}
          validateOnChange={false}
          validationSchema={signUpSchema}
          onSubmit={handleSignUpFormSubmit}
          initialValues={signUpFormInitialValues}>
          {({ handleChange, values, errors }) => (
            <View style={styles.form}>
              <Input
                name="name"
                value={values.name}
                error={errors.name}
                label={t('profile.full_name')}
                handleChange={handleChange('name')}
                placeholder={t('profile.full_name')}
                leftIcon={
                  <Icon size={ms(20)} name="profile" color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
                }
              />

              <Input
                name="email"
                error={errors.email}
                value={values.email}
                label={t('profile.email')}
                keyboardType="email-address"
                placeholder={t('profile.email')}
                handleChange={handleChange('email')}
                leftIcon={
                  <Icon size={ms(20)} name="message" color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
                }
              />

              <Input
                name="password"
                value={values.password}
                error={errors.password}
                label={t('profile.password')}
                secureTextEntry={!isPasswordShown}
                placeholder={t('profile.password')}
                handleChange={handleChange('password')}
                leftIcon={
                  <Icon size={ms(20)} name="lock" color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
                }
                rightIcon={
                  <TouchableOpacity onPress={handleViewPassPress}>
                    <Icon
                      size={ms(20)}
                      name={isPasswordShown ? 'hide' : 'show'}
                      color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                    />
                  </TouchableOpacity>
                }
              />

              <Input
                name="country"
                error={errors.country}
                value={values.country}
                label={t('profile.country')}
                onFocus={handleOpenCountryPicker}
                placeholder={t('profile.country')}
                handleChange={handleChange('country')}
                leftIcon={
                  <Icon
                    size={ms(20)}
                    name="location"
                    onPress={handleOpenCountryPicker}
                    color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                  />
                }
                rightIcon={
                  <Icon
                    size={ms(20)}
                    name="chevronDown"
                    onPress={handleOpenCountryPicker}
                    color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                  />
                }
              />

              {isOpenCountryPicker && (
                <CountryPicker
                  withFilter
                  countryCode="AD"
                  visible={isOpenCountryPicker}
                  onClose={handleCloseCountryPicker}
                  onSelect={(country: Country) => formRef.current?.setFieldValue('country', country.name)}
                  theme={{ ...(theme.dark ? DARK_THEME : DEFAULT_THEME), backgroundColor: theme.colors.background }}
                />
              )}
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );

  const renderProfileForm = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text variant="h3" style={styles.title}>
          {t('profile.title')}
        </Text>
        <Text variant="xLarge">{t('profile.description')}</Text>

        <Formik
          innerRef={formRef}
          onSubmit={handleProfileFormSubmit}
          validationSchema={profileSchema}
          initialValues={profileFormInitialValues}>
          {({ handleChange, values, errors }) => (
            <View style={styles.form}>
              <Input
                name="name"
                value={values.name}
                error={errors.name}
                label={t('profile.full_name')}
                handleChange={handleChange('name')}
                placeholder={t('profile.full_name')}
              />

              <Input
                name="email"
                error={errors.email}
                value={values.email}
                label={t('profile.email')}
                keyboardType="email-address"
                placeholder={t('profile.email')}
                handleChange={handleChange('email')}
                leftIcon={
                  <Icon size={ms(20)} name="message" color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
                }
              />

              <Input
                name="country"
                error={errors.country}
                value={values.country}
                label={t('profile.country')}
                onFocus={handleOpenCountryPicker}
                placeholder={t('profile.country')}
                handleChange={handleChange('country')}
                rightIcon={
                  <Icon
                    size={ms(20)}
                    name="chevronDown"
                    color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                  />
                }
              />

              {isOpenCountryPicker && (
                <CountryPicker
                  withFilter
                  countryCode="AD"
                  visible={isOpenCountryPicker}
                  onClose={handleCloseCountryPicker}
                  onSelect={(country: Country) => formRef.current?.setFieldValue('country', country.name)}
                  theme={{ ...(theme.dark ? DARK_THEME : DEFAULT_THEME), backgroundColor: theme.colors.background }}
                />
              )}
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
        loading={loading || isSignUpLoading}
        onPress={() => (isSuccess ? handleExplorePress() : formRef.current?.handleSubmit())}
        title={
          isSuccess ? t('profile.explore_destinations') : isSigningUp ? t('register.get_started') : t('common.continue')
        }
      />
    </View>
  );

  if (isSuccess) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.successContainer}>
          <FastImage source={require('@shared/assets/images/SuccessProfileLogo.png')} style={styles.successLogo} />
          <Text variant="h3" style={styles.title}>
            {t('profile.success_title')}
          </Text>
          <Text variant="xLarge" style={styles.subtitle}>
            {t('profile.success_desc')}
          </Text>
        </View>

        {renderFooter()}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      {isSigningUp ? renderSignUpForm() : renderProfileForm()}
      {renderFooter()}
    </SafeAreaView>
  );
};

export default Profile;
