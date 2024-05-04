// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    scollView: {
      flex: 1,
      direction: 'ltr',
      marginTop: mvs(8),
      paddingHorizontal: ms(16),
      backgroundColor: theme.colors.background
    },
    scrollViewContainer: {
      paddingBottom: mvs(50)
    }
  });
