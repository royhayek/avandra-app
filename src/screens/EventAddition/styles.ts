// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    searchInput: {
      marginHorizontal: ms(24)
    },
    listContainer: {
      gap: mvs(16),
      paddingVertical: mvs(16)
    }
  });
