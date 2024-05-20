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
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.background
    },
    title: {
      marginTop: mvs(24),
      textAlign: 'center',
      fontFamily: 'urbanist-bold',
      color: theme.colors.primary
    },
    description: {
      marginTop: mvs(10),
      textAlign: 'center',
      fontFamily: 'urbanist-regular'
    }
  });
