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
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: mvs(10),
      paddingHorizontal: ms(24)
    },
    subtitle: {
      textAlign: 'center',
      color: theme.colors.secondary
    },
    interests: {
      flex: 1,
      paddingTop: mvs(8),
      paddingHorizontal: ms(16)
    }
  });
