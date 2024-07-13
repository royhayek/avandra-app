// Packages
import _ from 'lodash';
import { ms, s } from 'react-native-size-matters';
import React, { useCallback, useRef, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppleAuthenticationScope, signInAsync } from 'expo-apple-authentication';
import { AccessToken, AuthenticationToken, LoginManager, Profile } from 'react-native-fbsdk-next';

// Components
import Icon from '@shared/components/Icon';
import Input from '@shared/components/Input';
import { Formik, FormikProps } from 'formik';
import FastImage from 'react-native-fast-image';
import Loading from '@shared/components/Loading';
import { Button, Text } from 'react-native-paper';
import SocialButton from './components/SocialButton';
import BackButton from '@shared/components/Buttons/Back';
import RegularButton from '@shared/components/Buttons/Regular';
import { Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { appName } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';
import { loginSchema } from '@schemas/User/LoginSchema';
import { loginAction, registerAction } from '@redux/auth/thunks';
import { authActions, selectAuthLoading } from '@redux/auth/slice';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { SocialLoginProps } from '@shared/types/SocialLogin';
import { SignInFormValuesProps } from '@shared/types/SignInForm';

// Component
const Login: React.FC = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const isLoading = useAppSelector(selectAuthLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const formRef = useRef<FormikProps<SignInFormValuesProps> | null>(null);

  const [byEmailView, setByEmailView] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const formInitialValues = { email: '', password: '' };

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleRegisterUser = useCallback(
    async (type: string, payload: SocialLoginProps, socialId: string | null | undefined) => {
      // console.info(`[handleSignInPress - ${type}] ::`, { payload });

      const response = await dispatchThunk(registerAction(payload));

      const { providerId, name, email } = response.payload.user || {};

      console.debug('response.payload.user', response.payload.user);

      if (response.payload?.success) {
        if (_.isEqual(providerId, socialId) && !_.isEmpty(name) && !_.isEmpty(email)) {
          dispatch(authActions.update({ authenticated: true, guest: false }));
        } else {
          navigation.navigate('Profile');
        }
      }
    },
    [dispatch, dispatchThunk, navigation]
  );

  const handleGoogleSignIn = useCallback(
    async (type: string) => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const token = userInfo.idToken;
        const { id: providerId, name, photo, email } = userInfo.user || {};

        const payload = {
          providerId,
          token,
          name,
          email,
          image: photo,
          provider: type
        };

        await handleRegisterUser(type, payload, providerId);
      } catch (error) {
        console.error('[handleSignInPress] :: Google Error', error);
      }
    },
    [handleRegisterUser]
  );

  const handleFacebookSignIn = useCallback(
    async (type: string) => {
      try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        console.log('[handleFacebookSignIn - logInWithPermissions] :: ', { result });

        let token;

        if (Platform.OS === 'ios') {
          const result = await AuthenticationToken.getAuthenticationTokenIOS();
          console.log('[handleFacebookSignIn - getAuthenticationTokenIOS] :: ', { result });
          if (result?.authenticationToken) token = result.authenticationToken;
        } else {
          const result = await AccessToken.getCurrentAccessToken();
          if (result?.accessToken) token = result.accessToken;
        }

        const profile = await Profile.getCurrentProfile();
        const { userID: providerId, name, imageURL, email } = profile || {};

        const payload = {
          providerId,
          token,
          name,
          email,
          image: imageURL,
          provider: type
        };

        await handleRegisterUser(type, payload, providerId);
      } catch (error) {
        console.error('[handleSignInPress] :: Facebook Error', error);
      }
    },
    [handleRegisterUser]
  );

  const handleAppleSignIn = useCallback(
    async (type: string) => {
      try {
        const result = await signInAsync({
          requestedScopes: [AppleAuthenticationScope.FULL_NAME, AppleAuthenticationScope.EMAIL]
        });

        const { fullName, user: providerId, identityToken, email } = result || {};

        const payload = {
          providerId,
          token: identityToken,
          name: `${fullName?.givenName} ${fullName?.familyName}`,
          image: null,
          email,
          provider: type
        };

        await handleRegisterUser(type, payload, providerId);
      } catch (error) {
        console.error('[handleSignInPress] :: Apple Error', error);
      }
    },
    [handleRegisterUser]
  );

  const handleSignInPress = useCallback(
    async (type: string) => {
      switch (type) {
        case 'email':
          setByEmailView(true);
          break;

        case 'google':
          await handleGoogleSignIn(type);
          break;

        case 'facebook':
          await handleFacebookSignIn(type);
          break;

        case 'apple':
          await handleAppleSignIn(type);
          break;

        default:
          break;
      }
    },
    [handleAppleSignIn, handleFacebookSignIn, handleGoogleSignIn]
  );

  const handleFormSubmit = useCallback(
    async (values: SignInFormValuesProps) => {
      console.info('[handleFormSubmit] :: ', { values });
      await dispatchThunk(loginAction(values));
    },
    [dispatchThunk]
  );

  const handleNavigateToInfo = useCallback(
    (type: string, options?: object) => navigation.navigate('Info', { type, name: t(`common.${type}`, options) }),
    [navigation]
  );

  const handleOnBackPress = useCallback(() => {
    setByEmailView(false);
    console.debug('by email', byEmailView);
  }, [byEmailView]);

  const handleSkipPress = useCallback(async () => {
    dispatch(authActions.update({ guest: true }));
  }, [dispatch]);

  const handleSignUpPress = useCallback(() => {
    navigation.navigate('Profile', { screen: 'SignUp' });
  }, [navigation]);

  const handleForgotPassPress = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  const handleViewPassPress = useCallback(() => {
    setIsPasswordShown((prev) => !prev);
  }, []);

  // Renderer vars
  const socialButtons = [
    {
      key: 'email',
      title: t('login.continue_with_email'),
      icon: <Icon name="message" size={s(20)} color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
    },
    {
      key: 'google',
      title: t('login.continue_with_google'),
      icon: <Icon name="google" size={s(20)} />
    },
    {
      key: 'facebook',
      title: t('login.continue_with_facebook'),
      icon: <Icon name="facebook" size={s(20)} />
    },
    ...(Platform.OS === 'ios'
      ? [
          {
            key: 'apple',
            title: t('login.continue_with_apple'),
            icon: <Icon name={theme.dark ? 'appleLight' : 'appleDark'} size={s(20)} />
          }
        ]
      : [])
  ];

  // Renders
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { justifyContent: byEmailView ? 'space-between' : 'flex-end' }]}>
        {byEmailView && <BackButton onPressOut={handleOnBackPress} />}

        <Button
          mode="contained"
          onPress={handleSkipPress}
          textColor={theme.colors.primary}
          buttonColor={theme.dark ? theme.colors.dark[3] : theme.colors.gray[50]}>
          {t('common.skip')}
        </Button>
      </View>

      <View style={styles.content}>
        <FastImage source={require('@shared/assets/icons/app-icon.png')} style={styles.logo} />

        <Text variant="h3" style={styles.title}>
          {t('login.title')}
        </Text>
        <Text variant="xLarge">{t('login.description')}</Text>
      </View>

      {byEmailView ? (
        <Formik
          innerRef={formRef}
          validateOnChange={false}
          onSubmit={handleFormSubmit}
          validationSchema={loginSchema}
          initialValues={formInitialValues}>
          {({ handleChange, submitForm, values, errors }) => (
            <>
              <View style={styles.inputsContainer}>
                <Input
                  name="email"
                  error={errors.email}
                  value={values.email}
                  label={t('profile.email')}
                  handleChange={handleChange('email')}
                  keyboardType="email-address"
                  placeholder={t('profile.email')}
                  leftIcon={
                    <Icon
                      size={s(14)}
                      name="message"
                      color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                    />
                  }
                />

                <Input
                  name="password"
                  error={errors.password}
                  value={values.password}
                  label={t('profile.password')}
                  secureTextEntry={!isPasswordShown}
                  handleChange={handleChange('password')}
                  placeholder={t('profile.password')}
                  leftIcon={
                    <Icon size={s(14)} name="lock" color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
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
                <Text variant="medium" onPress={handleForgotPassPress} style={styles.forgotPassText}>
                  {t('login.forgot_your_password')}
                </Text>

                <RegularButton title={t('login.sign_in')} style={styles.signInBtn} onPress={submitForm} />

                <Text variant="large" style={styles.noAccountText}>
                  {t('login.dont_have_account')}{' '}
                  <Text variant="large" style={styles.signUpText} onPress={handleSignUpPress}>
                    {t('login.sign_up_now')}
                  </Text>
                </Text>
              </View>
            </>
          )}
        </Formik>
      ) : (
        <View style={styles.socialButtons}>
          {_.map(socialButtons, ({ key, title, icon }) => (
            <SocialButton key={key} title={title} icon={icon} onPress={() => handleSignInPress(key)} />
          ))}
        </View>
      )}

      <View style={styles.infoPages}>
        <RegularButton
          variant="text"
          title={t('common.privacy_policy')}
          onPress={() => handleNavigateToInfo('privacy_policy')}
        />
        <Text variant="bodyMedium">•</Text>
        <RegularButton
          variant="text"
          title={t('common.terms')}
          onPress={() => handleNavigateToInfo('terms', { name: appName })}
        />
      </View>

      {isLoading && <Loading message={t('common.please_wait')} />}
    </SafeAreaView>
  );
};

export default Login;
