// Packages
import { StyleSheet } from 'react-native';
import { mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: mvs(24)
    }
  });
