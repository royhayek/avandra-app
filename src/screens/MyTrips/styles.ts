// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import { isTablet } from '@shared/utils';

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
      marginVertical: mvs(24),
      marginHorizontal: ms(24)
    },
    // Empty Layout
    emptyContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: ms(24)
    },
    emptyImage: {
      width: ms(85),
      height: ms(85),
      marginVertical: mvs(16)
    },
    emptyTitle: {
      width: isTablet ? '60%' : '100%',
      marginTop: mvs(24),
      textAlign: 'center',
      fontFamily: 'urbanist-semibold'
    },
    startPlanningBtn: {
      marginTop: mvs(24)
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
    },
    // Shimmer
    shimmerView: {
      flex: 1,
      padding: ms(24)
    },
    shimmerItems: {
      marginTop: mvs(16)
    },
    shimmerToggleBtns: {
      marginHorizontal: ms(24)
    },
    shimmerToggleBtn: {
      width: '100%',
      height: mvs(45),
      marginTop: mvs(24),
      borderRadius: theme.roundness
    }
  });
