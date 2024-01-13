// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      minHeight: mvs(42),
      alignItems: 'center',
      borderWidth: ms(1.5),
      borderRadius: ms(50),
      marginBottom: mvs(16),
      justifyContent: 'center',
      borderColor: theme.dark ? theme.colors.gray : theme.colors.lightGray
    },
    content: {
      width: '100%',
      padding: ms(5),
      display: 'flex',
      minHeight: mvs(45),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    iconContent: {
      left: ms(16),
      borderRadius: 50,
      position: 'absolute',
      justifyContent: 'center'
    },
    icon: {
      width: ms(26),
      height: mvs(26)
    },
    title: {
      fontWeight: 'bold',
      color: theme.dark ? theme.colors.white : theme.colors.black
    }
  });
