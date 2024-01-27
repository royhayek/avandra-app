// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AppleAuthenticationScope, signInAsync } from 'expo-apple-authentication';
import { LoginManager, AuthenticationToken, AccessToken, Profile } from 'react-native-fbsdk-next';

// Components
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import Loading from '@shared/components/Loading';
import SocialButton from './components/SocialButton';
import { Platform, SafeAreaView, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import { AppleIconDark, AppleIconLight, FacebookIcon, GoogleIcon } from '@shared/assets/icons';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { authActions, getAuthLoading } from '@redux/auth/slice';
import { registerAction } from '@redux/auth/thunks';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { appName } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';
import { SocialLoginProps } from '@shared/types/SocialLoginProps';

// Component
const Login = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const loading = useAppSelector(getAuthLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  // Callbacks
  const handleRegisterUser = useCallback(
    async (type: string, payload: SocialLoginProps, socialId: string | null | undefined) => {
      console.info(`[handleSignInPress - ${type}] ::`, { payload });

      const response = await dispatchThunk(registerAction(payload));

      const { providerId, name, email, country } = response.payload.user || {};

      if (response.payload?.success) {
        if (_.isEqual(providerId, socialId) && !_.isEmpty(name) && !_.isEmpty(email) && !_.isEmpty(country)) {
          dispatch(authActions.update({ authenticated: true }));
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
        const result = await LoginManager.logInWithPermissions(['public_profile']);
        let token;

        if (Platform.OS === 'ios') {
          const result = await AuthenticationToken.getAuthenticationTokenIOS();
          if (result) token = result.authenticationToken;
        } else {
          const result = await AccessToken.getCurrentAccessToken();
          if (result) token = result.accessToken;
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

  const handleNavigateToInfo = useCallback(
    (type: string, options?: object) => navigation.navigate('Info', { type, name: t(`common.${type}`, options) }),
    [navigation]
  );

  // Renderer vars
  const socialButtons = [
    {
      key: 'google',
      title: t('login.continue_with_google'),
      icon: <GoogleIcon />
    },
    {
      key: 'facebook',
      title: t('login.continue_with_facebook'),
      icon: <FacebookIcon />
    },
    ...(Platform.OS === 'ios'
      ? [
          {
            key: 'apple',
            title: t('login.continue_with_apple'),
            icon: theme.dark ? <AppleIconDark /> : <AppleIconLight />
          }
        ]
      : [])
  ];

  // Renders
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FastImage source={require('@shared/assets/images/logo.png')} style={styles.logo} />
        <Text variant="h3" style={styles.title}>
          {t('login.title')}
        </Text>
        <Text variant="xLarge">{t('login.description')}</Text>
      </View>

      <View style={styles.socialButtons}>
        {_.map(socialButtons, ({ key, title, icon }) => (
          <SocialButton key={key} title={title} icon={icon} onPress={() => handleSignInPress(key)} />
        ))}
      </View>

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

      {loading && <Loading message={t('common.please_wait')} />}
    </SafeAreaView>
  );
};

export default Login;
