// Packages
import { mvs } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    title: {
      fontWeight: 'bold',
      marginBottom: mvs(10)
    }
  });
