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
      borderWidth: ms(1),
      marginRight: ms(10),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.roundness,
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200],
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    activeContainer: {
      borderColor: theme.colors.primary
    },
    title: {
      marginTop: mvs(10),
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    activeTitle: {
      color: theme.colors.primary
    }
  });
