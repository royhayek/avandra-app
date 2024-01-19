// Packages
import { StyleSheet } from 'react-native';
// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      gap: 8,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 50,
      backgroundColor: theme.dark ? theme.colors.dark[5] : theme.colors.lightGray
    },
    activeDot: {
      width: 32,
      height: 8,
      borderRadius: 50,
      backgroundColor: theme.colors.primary
    }
  });
