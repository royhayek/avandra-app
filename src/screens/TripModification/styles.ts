// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    content: {
      paddingTop: mvs(8),
      paddingEnd: ms(8),
      paddingStart: ms(6),
      paddingBottom: mvs(16)
    },
    // Shimmer
    shimmerView: {
      marginHorizontal: ms(24),
      marginTop: mvs(16)
    },
    shimmerDate: {
      width: ms(125),
      height: mvs(28),
      marginTop: mvs(6),
      marginBottom: mvs(10)
    },
    shimmerItem: {
      width: '100%',
      height: mvs(65),
      marginVertical: mvs(8)
    },
    shimmerButton: {
      width: '100%',
      height: mvs(40),
      borderRadius: ms(100),
      marginTop: mvs(12),
      marginBottom: mvs(8)
    }
  });
