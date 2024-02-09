// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '80%',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: ms(16),
      paddingVertical: ms(24),
      justifyContent: 'center',
      paddingHorizontal: ms(24),
      backgroundColor: theme.colors.background
    },
    image: {
      width: ms(100),
      height: ms(100)
    },
    title: {
      marginTop: mvs(16),
      textAlign: 'center',
      fontFamily: 'urbanist-bold',
      color: theme.colors.primary
    },
    description: {
      textAlign: 'center',
      marginTop: mvs(16),
      marginBottom: mvs(24),
      fontFamily: 'urbanist-regular'
    },
    actions: {
      width: '100%',
      gap: mvs(12)
    },
    button: {
      width: '100%'
    }
  });
