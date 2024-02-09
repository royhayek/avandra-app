// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: ms(24)
    },
    title: {
      marginTop: mvs(8),
      fontFamily: 'urbanist-medium'
    },
    form: {
      flex: 1,
      marginTop: mvs(24)
    },
    message: {
      minHeight: mvs(170),
      justifyContent: 'flex-start'
    },
    submitButton: {
      marginTop: mvs(16)
    }
  });
