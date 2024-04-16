// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme, isHorizontal: boolean) =>
  StyleSheet.create({
    header: {
      marginTop: mvs(10),
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: mvs(16),
      marginHorizontal: ms(24),
      justifyContent: 'space-between'
    },
    viewAllContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    viewAllText: {
      marginEnd: ms(8),
      color: theme.colors.primary
    },
    flatListContainer: {
      gap: mvs(16),
      paddingHorizontal: ms(24),
      paddingTop: isHorizontal ? 0 : mvs(24),
      paddingBottom: isHorizontal ? mvs(8) : mvs(20)
    },
    shimmerView: {
      flex: 1,
      gap: mvs(16),
      paddingHorizontal: ms(24),
      paddingTop: isHorizontal ? 0 : mvs(24),
      paddingBottom: isHorizontal ? mvs(8) : mvs(20),
      flexDirection: isHorizontal ? 'row' : 'column'
    },
    shimmerImage: {
      borderRadius: ms(12),
      width: isHorizontal ? ms(200) : '100%',
      height: isHorizontal ? mvs(140) : mvs(200)
    },
    shimmerTitle: {
      height: mvs(23),
      marginTop: mvs(6),
      paddingHorizontal: ms(5)
    },
    shimmerSubtitle: {
      height: mvs(16),
      marginTop: mvs(6),
      paddingHorizontal: ms(5)
    }
  });
