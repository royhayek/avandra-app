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
      color: theme.colors.white,
      fontFamily: 'urbanist-semibold'
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
    },
    iconView: {
      top: 15,
      padding: 3,
      borderRadius: 50,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.white
    },
    dot: {
      top: 23,
      width: 10,
      height: 10,
      borderRadius: 50,
      position: 'absolute',
      backgroundColor: theme.colors.white
    },
    placeNo: {
      top: 10,
      left: 10,
      width: ms(15),
      height: ms(15),
      borderWidth: ms(0.5),
      borderRadius: ms(50),
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.white,
      backgroundColor: theme.colors.primary
    }
  });
