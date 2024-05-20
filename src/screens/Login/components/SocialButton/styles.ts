// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      minHeight: mvs(48),
      alignItems: 'center',
      borderWidth: ms(1),
      borderRadius: ms(50),
      justifyContent: 'center',
      backgroundColor: theme.dark ? theme.colors.dark[3] : 'transparent',
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200],
    },
    content: {
      width: '100%',
      padding: ms(5),
      display: 'flex',
      minHeight: mvs(48),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    iconContent: {
      left: ms(16),
      borderRadius: ms(50),
      position: 'absolute',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    }
  });
