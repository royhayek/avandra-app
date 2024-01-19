// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { scaledFontSize } from '@shared/utils';

// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme, hasIcon: boolean, notEmpty: boolean) =>
  StyleSheet.create({
    textInput: {
      minHeight: mvs(50),
      marginTop: mvs(8),
      borderRadius: ms(8),
      marginBottom: mvs(8),
      justifyContent: 'center',
      borderWidth: theme.dark ? ms(1) : 0,
      paddingHorizontal: hasIcon ? ms(6) : 'auto',
      borderColor: theme.dark ? theme.colors.dark[3] : 'transparent',
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    underline: {
      display: 'none'
    },
    contentStyle: {
      lineHeight: 0,
      color: theme.dark ? theme.colors.white : theme.colors.gray[900],
      fontFamily: notEmpty ? 'urbanist-semibold' : 'urbanist-regular'
    },
    label: {
      fontFamily: 'urbanist-semibold'
    },
    errorText: {
      color: theme.colors.error,
      marginTop: mvs(-2),
      marginBottom: mvs(6)
    }
  });
