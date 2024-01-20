import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';
import { ms } from 'react-native-size-matters';
import { AppTheme } from '@shared/assets/theme';
import i18n from '@app/i18n';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: ms(8),
      alignSelf: i18n.locale === 'ar' ? 'flex-end' : 'flex-start'
    },
    title: {
      fontWeight: 'bold',
      color: theme.colors.white
    }
  });
