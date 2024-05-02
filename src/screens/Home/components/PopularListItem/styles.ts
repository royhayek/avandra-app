// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme, isVertical: boolean) =>
  StyleSheet.create({
    button: {
      width: isVertical ? '100%' : ms(200)
    },
    image: {
      borderRadius: ms(12),
      width: isVertical ? '100%' : undefined,
      height: isVertical ? mvs(200) : mvs(140)
    },
    name: {
      marginTop: mvs(6),
      paddingHorizontal: ms(5),
      fontFamily: isVertical ? 'urbanist-semibold' : 'urbanist-bold'
    },
    subtitleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: ms(5)
    },
    flag: {
      width: ms(18),
      height: ms(12)
    },
    subtitle: {
      paddingHorizontal: ms(5),
      color: theme.colors.secondary,
      fontFamily: isVertical ? 'urbanist-medium' : 'urbanist-regular'
    },
    shimmerImage: {
      borderRadius: ms(12),
      width: !isVertical ? ms(200) : '100%',
      height: !isVertical ? mvs(140) : mvs(200)
    },
    shimmerTitle: {
      height: mvs(23),
      marginTop: mvs(8),
      marginHorizontal: ms(5)
    },
    shimmerSubtitle: {
      height: mvs(16),
      marginTop: mvs(6),
      marginHorizontal: ms(5)
    }
  });
