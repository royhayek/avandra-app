// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: mvs(16)
    },
    searchInput: {
      marginHorizontal: ms(24)
    },
    listContainer: {
      gap: mvs(16),
      paddingVertical: mvs(16)
    }
  });
