// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    container: {
      paddingBottom: mvs(50)
    },
    containerStyle: {
      marginTop: mvs(6),
      marginBottom: mvs(4),
      marginHorizontal: ms(24)
    }
  });
