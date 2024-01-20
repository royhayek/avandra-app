// Pckages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginTop: mvs(6),
      minHeight: mvs(50),
      borderRadius: ms(12),
      marginBottom: mvs(8),
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: ms(24),
      borderWidth: ms(1),
      borderColor: theme.dark ? theme.colors.dark[1] : theme.colors.white,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
    },
    textInput: {
      ...theme.fonts.xLarge,
      justifyContent: 'center',
      paddingBottom: 10,
      backgroundColor: 'transparent',
    },
    listView: {
      borderRadius: ms(8),
      borderWidth: ms(0.5),
      borderColor: theme.colors.lightGray
    },
    textInputContainer: {
      minHeight: mvs(50),
      alignItems: 'center',
      paddingHorizontal: ms(16),
    }
  });
