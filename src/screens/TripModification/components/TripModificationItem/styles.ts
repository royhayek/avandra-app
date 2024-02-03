// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    list: {
      gap: mvs(16),
      paddingVertical: mvs(24)
    },
    date: {
      marginTop: mvs(8),
      paddingHorizontal: ms(8)
    },
    rowContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: mvs(6)
    },
    activeRowContainer: {
      borderRadius: theme.roundness,
      backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.primary
    },
    image: {
      width: ms(120),
      height: ms(80),
      marginStart: ms(12),
      borderRadius: theme.roundness
    },
    content: {
      flex: 1,
      marginHorizontal: ms(16)
    },
    name: {
      fontFamily: 'urbanist-bold'
    }
  });
