// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: ms(24)
    },
    title: {
      marginTop: mvs(20),
      marginBottom: mvs(10),
      paddingHorizontal: ms(24),
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subtitle: {
      textAlign: 'center',
      color: theme.colors.secondary
    }
  });
