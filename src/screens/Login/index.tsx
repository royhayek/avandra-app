// Packages
import _ from 'lodash';
import React, { useCallback } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// Components
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import SocialButton from './components/SocialButton';

// Utils
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Component
const Login = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleSignInPress = useCallback(async (type: string) => {
    console.debug('[handleSignInPress] :: ', type);

    switch (type) {
      case 'google':
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();

          const idToken = userInfo.idToken;
          const tokenBlob = new Blob([JSON.stringify({ access_token: idToken }, null, 2)], {
            type: 'application/json'
          });
          const formData = new FormData();
          formData.append('access_token', tokenBlob);
        } catch (error) {
          console.debug('[handleSignInPress] :: Google Error', error);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.debug('SIGN_IN_CANCELLED');
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.debug('IN_PROGRESS');

            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.debug('PLAY_SERVICES_NOT_AVAILABLE');
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
        break;
    }
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
    {
      key: 'apple',
      title: 'Continue with Apple',
      icon: require('@shared/assets/icons/apple-icon.png')
    }
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
