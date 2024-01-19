// Packages
import * as Device from 'expo-device';
import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.primary
    },
    backgroundImg: {
      width: '85%',
      height: '95%',
      marginTop: Device.DeviceType.PHONE ? 0 : 50
    },
    bottomBackground: {
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      height:
        Device.deviceType === Device.DeviceType.PHONE ? (Platform.OS === 'android' ? mvs(415) : mvs(365)) : mvs(330)
    },
    content: {
      left: 0,
      right: 0,
      top: mvs(70),
      position: 'absolute'
    },
    contentImage: {
      width: '100%',
      height: '100%'
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: ms(20)
    },
    description: {
      textAlign: 'center',
      marginTop: mvs(10),
      marginBottom: mvs(16),
      paddingHorizontal: ms(20)
    },
    button: {
      flex: 1
    }
  });
