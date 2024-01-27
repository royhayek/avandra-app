// Packages
import { ms, mvs } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    flatList: {
      gap: ms(12),
      marginTop: mvs(20),
      paddingBottom: mvs(50)
    },

    button: {
      flex: 1,
      paddingVertical: mvs(12),
      paddingHorizontal: ms(16),
      borderWidth: ms(1),
      borderRadius: ms(8),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200],
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[50]
    },
    activeButton: {
      borderColor: theme.colors.primary
    },
    description: {
      marginTop: mvs(4),
      fontFamily: 'urbanist-medium'
    }
  });
