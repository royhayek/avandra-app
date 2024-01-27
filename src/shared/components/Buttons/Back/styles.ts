import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    title: {
      fontWeight: 'bold',
      color: theme.colors.white
    }
  });
