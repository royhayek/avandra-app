// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
// Utilities
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    accordionContainer: {
      flex: 1,
      marginBottom: mvs(8)
    },
    titleStyle: {
      borderRadius: ms(8),
      paddingHorizontal: ms(16),
      backgroundColor: theme.dark ? 'transparent' : theme.colors.card
    },
    title: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    accordion: {
      borderRadius: ms(8),
      marginBottom: mvs(10),
      borderWidth: theme.dark ? 1 : 0,
      backgroundColor: theme.dark ? 'transparent' : theme.colors.card,
      borderColor: theme.dark ? theme.colors.secondary : 'transparent'
    },
    accordionTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    placeTitle: {
      paddingStart: mvs(10)
    },
    divider: {
      marginVertical: mvs(8)
    }
  });
