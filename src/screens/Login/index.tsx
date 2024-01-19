// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { NavigationContainerProps, NavigationProp, useNavigation } from '@react-navigation/native';
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
import { getAuthLoading } from '@redux/auth/slice';
import { registerAction } from '@redux/auth/thunks';
import { useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { appName } from '@shared/utils';
import { useAppTheme } from '@shared/assets/theme';
import { SocialLoginProps } from '@shared/types/SocialLoginProps';
import { TranslateOptions } from 'i18n-js';

// Component
const Login = () => {
  // Redux
  const dispatch = useAppThunkDispatch();

  const loading = useAppSelector(getAuthLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  // Callbacks
  const handleSignInPress = useCallback(async (type: string) => {
    let payload: SocialLoginProps;

    switch (type) {
      case 'google':
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();

          const token = userInfo.idToken;

          const { id, name, photo, email } = userInfo.user || {};

          payload = {
            providerId: id,
            token,
            name,
            email,
            image: photo,
            provider: type
          };

          console.info('[handleSignInPress - Google] ::', { payload });

          const response = await dispatch(registerAction(payload));
          if (response.payload.success) navigation.navigate('Profile');
        } catch (error) {
          console.error('[handleSignInPress] :: Google Error', error);
        }
        break;

      case 'facebook':
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
          const { userID, name, imageURL, email } = profile || {};

          payload = {
            providerId: userID,
            token,
            name,
            email,
            image: imageURL,
            provider: type
          };

          console.info('[handleSignInPress - Facebook] ::', { payload });

          const response = await dispatch(registerAction(payload));
          if (response.payload.success) navigation.navigate('Profile');
        } catch (error) {
          console.error('[handleSignInPress] :: Facebook Error', error);
        }
        break;

      case 'apple':
        try {
          const result = await signInAsync({
            requestedScopes: [AppleAuthenticationScope.FULL_NAME, AppleAuthenticationScope.EMAIL]
          });

          const { fullName, user, identityToken, email } = result || {};

          payload = {
            providerId: user,
            token: identityToken,
            name: fullName?.givenName,
            image: null,
            email,
            provider: type
          };

          console.info('[handleSignInPress - Apple] ::', { payload });

          const response = await dispatch(registerAction(payload));
          if (response.payload.success) navigation.navigate('Profile');

          break;
        } catch (error) {
          console.error('[handleSignInPress] :: Apple Error', error);
        }
    }
  }, []);

  const handleNavigateToInfo = useCallback(
    (type: string, options?: object) => navigation.navigate('Info', { type, name: t(`settings.${type}`, options) }),
    []
  );

  // Renderer vars
  const socialButtons = [
    {
      key: 'google',
      title: 'Continue with Google',
      icon: <GoogleIcon />
    },
    {
      key: 'facebook',
      title: 'Continue with Facebook',
      icon: <FacebookIcon />
    },
    ...(Platform.OS === 'ios'
      ? [
          {
            key: 'apple',
            title: 'Continue with Apple',
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
          Let's Get Started!
        </Text>
        <Text variant="xLarge">Your Passport to Adventure Awaits</Text>
      </View>

      <View style={styles.socialButtons}>
        {_.map(socialButtons, ({ key, title, icon }) => (
          <SocialButton key={key} title={title} icon={icon} onPress={() => handleSignInPress(key)} />
        ))}
      </View>

      <View style={styles.infoPages}>
        <RegularButton variant="text" title="Privacy Policy" onPress={() => handleNavigateToInfo('privacy_policy')} />
        <Text variant="bodyMedium">•</Text>
        <RegularButton
          variant="text"
          title="Terms of Service"
          onPress={() => handleNavigateToInfo('terms', { name: appName })}
        />
      </View>

      {loading && <Loading message="Please wait..." />}
    </SafeAreaView>
  );
};

export default Login;
