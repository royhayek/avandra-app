// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    option: {
      gap: ms(8),
      flexDirection: 'row',
      paddingVertical: mvs(16)
    },
    title: {
      fontFamily: 'urbanist-semibold'
    },
    contentStyle: {
      marginTop: 0,
      marginBottom: mvs(8)
    }
  });
