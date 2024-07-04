// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: mvs(32),
      marginHorizontal: ms(24)
    },
    illutration: {
      width: ms(80),
      height: ms(80),
      alignSelf: 'center',
      marginBottom: mvs(32)
    },
    title: {
      textAlign: 'center',
      marginBottom: mvs(8),
      fontFamily: 'urbanist-semibold',
      fontSize: theme.fonts.xLarge.fontSize
    },
    exireInfo: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: ms(24),
      fontFamily: 'urbanist-regular'
    },
    cancelButton: {
      // lineHeight: mvs(15),
      ...theme.fonts.large,
      color: theme.colors.primary,
      fontFamily: 'urbanist-semibold'
    }
  });
