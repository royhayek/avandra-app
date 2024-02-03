// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      gap: ms(12),
      flexDirection: 'row',
      marginVertical: mvs(24),
      paddingStart: mvs(24)
    },
    tab: {
      flex: 1,
      width: ms(130),
      borderWidth: 1,
      borderRadius: ms(50),
      alignItems: 'center',
      paddingVertical: mvs(8),
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[300]
    },
    activeTab: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary
    },
    title: {
      fontFamily: 'urbanist-semibold'
    },
    activeTitle: {
      color: theme.colors.white
    }
  });
