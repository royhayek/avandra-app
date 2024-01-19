import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';
import { ms } from 'react-native-size-matters';
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: ms(8),
    },
    title: {
      fontWeight: 'bold',
      color: theme.colors.white
    }
  });
