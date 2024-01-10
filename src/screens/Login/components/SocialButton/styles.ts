// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      minHeight: mvs(42),
      borderWidth: ms(1.5),
      borderRadius: ms(50),
      marginBottom: mvs(10),
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.lightGray
    },
    content: {
      padding: 5,
      width: '100%',
      display: 'flex',
      minHeight: mvs(45),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    iconContent: {
      top: 0,
      left: ms(16),
      bottom: 0,
      position: 'absolute',
      justifyContent: 'center'
    },
    icon: {
      width: ms(26),
      height: mvs(26)
    },
    title: {
      fontWeight: 'bold',
      color: theme.colors.black
    }
  });
