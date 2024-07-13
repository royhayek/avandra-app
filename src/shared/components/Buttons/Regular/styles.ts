// Packages
import { Platform, StyleSheet } from 'react-native';
import { ms, mvs, s } from 'react-native-size-matters';

// Interfaces
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
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: ms(100),
      justifyContent: 'center'
    },
    title: {
      paddingHorizontal: 3,
      color: theme.colors.white
    },
    subtitle: {
      color: theme.colors.white,
      fontFamily: 'urbanist-semibold'
    },
    endIcon: {
      marginHorizontal: 8
    },
    button: {
      minHeight: mvs(46),
      alignItems: 'center',
      borderRadius: ms(100),
      justifyContent: 'center',
      paddingHorizontal: ms(16),
      flex: fullWidth ? 1 : undefined,
      paddingVertical: mvs(Platform.OS === 'ios' ? 6 : 8)
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    primaryButton: {
      backgroundColor: theme.colors.primary
    },
    primaryButtonLabel: {
      lineHeight: s(18),
      color: theme.colors.white
    },
    secondaryButton: {
      backgroundColor: theme.dark ? theme.colors.dark[5] : theme.colors.greenBg
    },
    secondaryButtonLabel: {
      lineHeight: s(18),
      color: theme.dark ? theme.colors.white : theme.colors.primary
    }
  });
