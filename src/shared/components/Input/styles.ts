// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import i18n from '@app/i18n';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme, hasIcon: boolean, notEmpty: boolean) =>
  StyleSheet.create({
    container: {
      marginTop: mvs(8),
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: mvs(8),
      paddingHorizontal: ms(20),
      borderRadius: theme.roundness,
      borderWidth: theme.dark ? ms(1) : 0,
      borderColor: theme.dark ? theme.colors.dark[3] : 'transparent',
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    textInput: {
      flex: 1,
      minHeight: mvs(50),
      backgroundColor: 'transparent',
      paddingHorizontal: hasIcon ? ms(10) : 0,
      textAlign: i18n.locale === 'ar' ? 'right' : 'left'
    },
    underline: {
      display: 'none'
    },
    contentStyle: {
      fontSize: theme.fonts.xLarge.fontSize,
      fontFamily: notEmpty ? 'urbanist-semibold' : 'urbanist-regular',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    },
    label: {
      fontFamily: 'urbanist-semibold'
    },
    errorText: {
      marginTop: mvs(-2),
      marginBottom: mvs(6),
      color: theme.colors.error
    }
  });
