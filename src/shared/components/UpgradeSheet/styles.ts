// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    upgradeIllustration: {
      width: ms(58),
      height: ms(58),
      marginRight: ms(6),
      alignSelf: 'center',
      marginVertical: mvs(8)
    },
    option: {
      flexDirection: 'row'
    },
    title: {
      marginBottom: mvs(8)
    },
    description: {
      textAlign: 'center',
      fontFamily: 'urbanist-regular'
    },
    contentStyle: {
      marginTop: mvs(8),
      alignItems: 'center',
      marginBottom: mvs(8),
      justifyContent: 'center'
    }
  });
