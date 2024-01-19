// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { scaledFontSize } from '@shared/utils';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    input: {
      height: mvs(50),
      marginTop: mvs(8),
      fontWeight: 'bold',
      maxHeight: mvs(120),
      borderRadius: ms(8),
      marginBottom: mvs(8),
      marginHorizontal: ms(4),
      justifyContent: 'center',
      fontSize: scaledFontSize(14),
      borderWidth: theme.dark ? 1 : 0,
      borderColor: theme.dark ? theme.colors.inputBg : 'transparent',
      backgroundColor: theme.dark ? 'transparent' : theme.colors.inputBg
    },
    underline: {
      display: 'none'
    },
    inputOutlineStyle: {
      borderRadius: ms(50),
      borderWidth: ms(1.5)
    }
  });
