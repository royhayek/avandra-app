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
      height: isVertical ? mvs(200) : mvs(140)
    },
    name: {
      marginTop: mvs(6),
      paddingHorizontal: ms(5),
      fontFamily: isVertical ? 'urbanist-semibold' : 'urbanist-bold'
    },
    country: {
      paddingHorizontal: ms(5),
      color: theme.colors.secondary,
      fontFamily: isVertical ? 'urbanist-medium' : 'urbanist-regular'
    }
  });
