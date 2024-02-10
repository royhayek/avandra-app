// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    rowContainer: {
      paddingEnd: ms(16),
      paddingStart: ms(24),
      alignItems: 'center',
      flexDirection: 'row'
    },
    image: {
      width: ms(115),
      height: ms(75),
      borderRadius: theme.roundness
    },
    content: {
      flex: 1,
      gap: mvs(4),
      marginEnd: ms(8),
      marginStart: ms(12)
    },
    type: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.gray[700]
    },
    name: {
      fontFamily: 'urbanist-bold'
    },
    addEventBtn: {
      marginBottom: mvs(24),
      marginHorizontal: ms(16)
    }
  });
