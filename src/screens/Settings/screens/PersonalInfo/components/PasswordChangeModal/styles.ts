// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '85%',
      alignSelf: 'center',
      borderRadius: ms(16),
      paddingVertical: mvs(16),
      justifyContent: 'center',
      paddingHorizontal: ms(24),
      backgroundColor: theme.colors.background
    },
    image: {
      width: ms(100),
      height: ms(100)
    },
    title: {
      textAlign: 'center',
      fontFamily: 'urbanist-bold',
      color: theme.colors.primary
    },
    description: {
      marginTop: mvs(8),
      marginBottom: mvs(16),
      fontFamily: 'urbanist-regular'
    },
    actions: {
      width: '100%',
      gap: mvs(12)
    },
    button: {
      width: '100%',
    }
  });
