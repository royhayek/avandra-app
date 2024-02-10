// Packages
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import { ms, mvs } from 'react-native-size-matters';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    searchContainer: {
      flex: 1,
      marginEnd: 24
    },
    searchInput: {
      width: '100%',
      marginTop: 0
    },
    content: {
      flex: 1,
      marginTop: ms(12)
    },
    title: {
      marginHorizontal: ms(24)
    },
    listContainer: {
      gap: mvs(16),
      paddingVertical: mvs(16)
    }
  });
