// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    content: {
      paddingEnd: ms(8),
      paddingStart: ms(16),
      paddingBottom: mvs(50)
    },
    list: {
      gap: mvs(24),
      paddingVertical: mvs(24)
    },
    date: {
      paddingHorizontal: ms(8),
      marginTop: mvs(8)
    }
  });
