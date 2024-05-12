// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: mvs(16)
    },
    searchInput: {
      marginHorizontal: ms(24)
    },
    scrollView: {
      marginVertical: mvs(16)
    },
    title: {
      marginHorizontal: ms(24),
      marginTop: mvs(8)
    },
    listContainer: {
      gap: mvs(16),
      paddingVertical: mvs(16)
    },
    // Shimmer
    shimmerView: {
      marginHorizontal: ms(24),
      paddingVertical: mvs(16)
    },
    shimmerItem: {
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: mvs(16),
      justifyContent: 'space-between'
    },
    shimmerRow: {
      gap: ms(16),
      alignItems: 'center',
      flexDirection: 'row'
    },
    shimmerImage: {
      width: ms(115),
      height: ms(75),
      borderRadius: theme.roundness
    },
    shimmerName: {
      width: ms(120),
      height: ms(20),
      marginBottom: mvs(8)
    },
    shimmerBtn: {
      width: ms(30),
      height: ms(30),
      borderRadius: ms(50)
    }
  });
