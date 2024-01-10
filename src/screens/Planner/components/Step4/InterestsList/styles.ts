// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    flatList: {
      marginTop: mvs(20)
    },
    listColumnWrapper: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    chip: {
      margin: ms(5),
      backgroundColor: 'transparent'
    }
  });
