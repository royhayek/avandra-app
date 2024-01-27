// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    flex1: { flex: 1 },
    container: {
      flex: 1
    },
    divider: {
      marginTop: mvs(10)
    },
    input: {
      marginTop: mvs(6),
      maxHeight: mvs(120),
      borderRadius: ms(30),
      marginBottom: mvs(8),
      marginHorizontal: ms(16),
      justifyContent: 'center'
    },
    underline: {
      display: 'none'
    },
    stopButton: {
      bottom: 0,
      left: '20%',
      right: '20%',
      position: 'absolute',
      alignItems: 'center'
    },
    inputOutlineStyle: {
      borderRadius: ms(50),
      borderWidth: ms(1.5)
    },
    popularDestText: {
      marginVertical: mvs(16),
      marginHorizontal: ms(16)
    },
    footer: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: mvs(16),
      paddingHorizontal: ms(24),
      justifyContent: 'space-between'
    }
  });
