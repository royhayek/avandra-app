// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { AppleAuthenticationScope, signInAsync } from 'expo-apple-authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AuthenticationToken, AccessToken, Profile } from 'react-native-fbsdk-next';

// Components
import { Platform, View } from 'react-native';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import SocialButton from './components/SocialButton';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { registerAction } from '@redux/auth/thunks';
import { useAppThunkDispatch } from '@app/store';

// Component
const Login = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const dispatch = useAppThunkDispatch();

  // Callbacks
  const handleSignInPress = useCallback(async (type: string) => {
    let payload;

    switch (type) {
      case 'google':
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();

          const token = userInfo.idToken;

          const { id, name, photo } = userInfo.user || {};

          payload = {
            providerId: id,
            token,
            name,
            image: photo
          };

          console.debug('[handleSignInPress - Google] ::', { payload });
        } catch (error) {
          console.debug('[handleSignInPress] :: Google Error', error);
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
          const { userID, name, imageURL } = profile || {};

          payload = {
            providerId: userID,
            token,
            name,
            image: imageURL
          };

          console.debug('[handleSignInPress - Facebook] ::', { payload });
        } catch (error) {
          console.debug('[handleSignInPress] :: Facebook Error', error);
        }
        break;

      case 'apple':
        try {
          const result = await signInAsync({
            requestedScopes: [AppleAuthenticationScope.FULL_NAME, AppleAuthenticationScope.EMAIL]
          });

          const { fullName, user, identityToken } = result || {};

          payload = {
            providerId: user,
            token: identityToken,
            name: fullName?.givenName,
            image: null
          };

          console.debug('[handleSignInPress - Apple] ::', { payload });
          break;
        } catch (error) {
          console.debug('[handleSignInPress] :: Apple Error', error);
        }
    }

    dispatch(registerAction(payload));
  }, []);

  // Renderer vars
  const socialButtons = [
    {
      key: 'google',
      title: 'Continue with Google',
      icon: require('@shared/assets/icons/google-icon.png')
    },
    {
      key: 'facebook',
      title: 'Continue with Facebook',
      icon: require('@shared/assets/icons/facebook-icon.png')
    },
    ...(Platform.OS === 'ios'
      ? [
          {
            key: 'apple',
            title: 'Continue with Apple',
            icon: require('@shared/assets/icons/apple-icon.png')
          }
        ]
      : [])
  ];

  // Renders
  return (
    <>
      <FastImage source={{ uri: 'https://picsum.photos/400/600' }} style={styles.backgroundImg} />
      <View style={styles.content}>
        <Text variant="titleMedium" style={styles.title}>
          Let's Get Started!
        </Text>
        {_.map(socialButtons, ({ key, title, icon }) => (
          <SocialButton key={key} title={title} icon={icon} onPress={() => handleSignInPress(key)} />
        ))}
      </View>
    </>
  );
};

export default Login;
