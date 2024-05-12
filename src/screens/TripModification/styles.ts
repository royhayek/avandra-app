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
      paddingVertical: mvs(16)
    },
    shimmerItemView: {
      marginTop: mvs(16),
      marginHorizontal: ms(16)
    },
    shimmerDate: {
      width: ms(125),
      height: mvs(28),
      marginTop: mvs(6),
      marginBottom: mvs(10)
    },
    shimmerItem: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: mvs(12),
      justifyContent: 'space-between'
    },
    shimmerDrag: {
      width: ms(25),
      height: ms(40)
    },
    shimmerRow: {
      gap: ms(16),
      alignItems: 'center',
      flexDirection: 'row'
    },
    shimmerImage: {
      width: ms(105),
      height: ms(75),
      borderRadius: theme.roundness
    },
    shimmerName: {
      width: ms(110),
      height: ms(20),
      marginBottom: mvs(8)
    },
    shimmerBtn: {
      width: ms(30),
      height: ms(30),
      borderRadius: ms(50)
    },
    shimmerButton: {
      width: '100%',
      height: mvs(45),
      marginTop: mvs(12),
      marginBottom: mvs(8),
      borderRadius: ms(100)
    }
  });
