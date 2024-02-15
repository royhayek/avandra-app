// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: mvs(16),
      backgroundColor: theme.colors.background
    },
    listContent: {
      paddingTop: mvs(8),
      paddingHorizontal: ms(24)
    },
    toggleButtons: {
      marginTop: 0,
      marginBottom: mvs(24),
      marginHorizontal: ms(24)
    },
    // Empty Layout
    emptyContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    emptyImage: {
      width: ms(100),
      height: mvs(100)
    },
    emptyTitle: {
      marginTop: mvs(24),
      fontFamily: 'urbanist-bold'
    },
    emptyDesc: {
      marginTop: mvs(16),
      textAlign: 'center',
      marginBottom: mvs(32),
      marginHorizontal: ms(24),
      fontFamily: 'urbanist-regular'
    },
    searchButton: {
      paddingHorizontal: 16
    }
  });
