// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly'
    },
    content: {
      alignItems: 'center'
    },
    header: {
      top: mvs(48),
      left: ms(24),
      right: ms(24),
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    logo: {
      width: ms(80),
      height: ms(80),
      marginBottom: mvs(50)
    },
    title: {
      textAlign: 'center',
      marginBottom: mvs(12)
    },
    socialButtons: {
      gap: 28,
      marginHorizontal: ms(24)
    },
    infoPages: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    inputsContainer: {
      gap: mvs(8),
      marginHorizontal: ms(32)
    },
    forgotPassText: {
      lineHeight: 18,
      textAlign: 'right',
      color: theme.colors.primary,
      fontFamily: 'urbanist-semibold'
    },
    noAccountText: {
      marginTop: 16,
      textAlign: 'center',
      fontFamily: 'urbanist-semibold'
    },
    signUpText: {
      color: theme.colors.primary
    },
    signInBtn: {
      marginTop: mvs(24)
    }
  });
