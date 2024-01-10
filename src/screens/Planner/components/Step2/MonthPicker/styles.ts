// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: ms(90),
      height: mvs(90),
      borderRadius: ms(8),
      marginRight: ms(10),
      borderWidth: ms(1.8),
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.lightGray
    },
    activeContainer: {
      borderColor: theme.colors.primary
    },
    title: {
      marginTop: mvs(10),
      fontWeight: '600',
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    activeTitle: {
      color: theme.colors.primary
    }
  });
