// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    successContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: ms(24)
    },
    content: {
      flex: 1,
      marginHorizontal: ms(24)
    },
    title: {
      marginVertical: mvs(12)
    },
    subtitle: {
      textAlign: 'center'
    },
    avatarContainer: {
      marginVertical: 24,
      alignSelf: 'center',
      alignItems: 'center'
    },
    editIconButton: {
      right: 10,
      bottom: 10,
      position: 'absolute'
    },
    successLogo: {
      width: ms(100),
      height: ms(100)
    }
  });
