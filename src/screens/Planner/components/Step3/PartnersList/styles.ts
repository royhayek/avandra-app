// Packages
import { ms, mvs } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    flatList: {
      gap: ms(8),
      marginTop: mvs(20)
    },
    listColumnWrapper: {
      gap: ms(10)
    },
    button: {
      flex: 1,
      padding: ms(16),
      height: mvs(80),
      borderRadius: ms(8),
      borderWidth: ms(1.8),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      marginTop: ms(4)
    },
    iconContainer: {
      padding: ms(6),
      borderRadius: ms(50),
      alignSelf: 'flex-start'
    }
  });
