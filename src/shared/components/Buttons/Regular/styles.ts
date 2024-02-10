// Packages
import { StyleSheet } from 'react-native';
// Types
import { ms, mvs } from 'react-native-size-matters';
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme, fullWidth: boolean | undefined) =>
  StyleSheet.create({
    container: {
      opacity: 1
    },
    disabledContainer: {
      opacity: 0.5
    },
    linearBackground: {
      padding: ms(12),
      borderRadius: ms(100),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    title: {
      paddingHorizontal: 3,
      color: theme.colors.white
    },
    endIcon: {
      marginHorizontal: 8
    },
    button: {
      borderRadius: ms(100),
      flex: fullWidth ? 1 : undefined
    },
    buttonLabelStyle: {
      lineHeight: mvs(30)
    },
    primaryButton: {
      backgroundColor: theme.colors.primary
    },
    primaryButtonLabel: {
      color: theme.colors.white
    },
    secondaryButton: {
      backgroundColor: theme.dark ? theme.colors.dark[5] : theme.colors.greenBg
    },
    secondaryButtonLabel: {
      color: theme.dark ? theme.colors.white : theme.colors.primary
    }
  });
