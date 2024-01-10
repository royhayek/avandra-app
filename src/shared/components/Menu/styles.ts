// Packages
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    content: {
      margin: ms(5),
      padding: ms(5),
      shadowOpacity: 0.2,
      backgroundColor: theme.colors.background
    },
    itemTitle: {
      ...theme.fonts.labelMedium
    }
  });
