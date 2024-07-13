// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    footer: {
      gap: ms(16),
      display: 'flex',
      borderTopWidth: 1,
      flexDirection: 'row',
      marginBottom: mvs(10),
      paddingVertical: mvs(16),
      paddingHorizontal: ms(24),
      borderTopColor: theme.dark ? theme.colors.dark[5] : theme.colors.lightGray
    }
  });
