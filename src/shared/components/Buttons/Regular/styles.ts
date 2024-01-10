// Packages
import { StyleSheet } from 'react-native';
// Types
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      opacity: 1
    },
    disabledContainer: {
      opacity: 0.5
    },
    linearBackground: {
      padding: 12,
      borderRadius: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    title: {
      paddingHorizontal: 3,
      color: theme.colors.white
    },
    endIcon: {
      marginHorizontal: 8
    }
  });
