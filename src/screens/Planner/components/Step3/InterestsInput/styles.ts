// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    input: {
      fontWeight: '500',
      marginTop: mvs(6),
      maxHeight: mvs(120),
      borderRadius: ms(8),
      marginHorizontal: ms(8),
      justifyContent: 'center'
    },
    underline: {
      display: 'none'
    },
    inputOutlineStyle: {
      borderWidth: ms(1.5),
      borderColor: theme.colors.lightGray
    }
  });
