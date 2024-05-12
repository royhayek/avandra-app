// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    contentContainer: {
      width: '70%',
      padding: ms(24),
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.background
    },
    icon: {
      width: ms(85),
      height: ms(85)
    },
    title: {
      marginTop: mvs(8),
      textAlign: 'center',
      fontFamily: 'urbanist-bold',
      color: theme.colors.primary
    },
    description: {
      marginTop: mvs(8),
      textAlign: 'center',
      marginBottom: mvs(16),
      fontFamily: 'urbanist-regular'
    }
  });
