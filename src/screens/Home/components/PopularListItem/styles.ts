// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs, s } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import { isTablet } from '@shared/utils';

export default (theme: AppTheme, isVertical: boolean) =>
  StyleSheet.create({
    button: {
      flex: 1,
      width: !isVertical ? (isTablet ? ms(180) : ms(200)) : '100%'
    },
    image: {
      borderRadius: ms(12),
      width: !isVertical ? (isTablet ? ms(180) : ms(200)) : '100%',
      height: !isVertical ? (isTablet ? mvs(160) : mvs(140)) : mvs(200)
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
