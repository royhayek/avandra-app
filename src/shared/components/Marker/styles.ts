
// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    label: {
      fontWeight: 'bold',
      position: 'absolute',
      color: theme.colors.white
    },
    markerWrap: {
      width: ms(55),
      height: mvs(55),
      alignItems: 'center',
      justifyContent: 'center'
    },
    marker: {
      width: ms(40),
      height: mvs(40)
    }
  });
