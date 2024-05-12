// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    option: {
      paddingVertical: mvs(16),
      flexDirection: 'row',
      gap: ms(8)
    },
    title: {
      fontFamily: 'urbanist-semibold'
    },
    contentStyle: {
      marginTop: 0,
      marginBottom: mvs(8)
    }
  });
