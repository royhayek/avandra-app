// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    content: {
      minHeight: 200
    },
    phoneLogo: {
      width: ms(100),
      height: ms(100),
      alignSelf: 'center',
      marginVertical: mvs(16)
    },
    title: {
      textAlign: 'center',
      marginBottom: mvs(8)
    },
    description: {
      textAlign: 'center',
      fontFamily: 'urbanist'
    },
    signInBtn: {
      marginTop: mvs(24),
      marginBottom: mvs(8)
    }
  });
