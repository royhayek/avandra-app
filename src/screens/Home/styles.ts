// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    container: {
      paddingBottom: mvs(50)
    },
    searchInput: {
      marginHorizontal: ms(24)
    }
  });
