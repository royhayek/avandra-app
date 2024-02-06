// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    search: {
      marginHorizontal: ms(24)
    },
    list: {
      paddingHorizontal: ms(24)
    },
    listContent: {
      gap: mvs(20),
      paddingTop: mvs(16),
      paddingBottom: mvs(70)
    },
    item: {
      borderWidth: 1,
      borderRadius: theme.roundness,
      backgroundColor: theme.dark ? theme.colors.dark[3] : 'transparent',
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200]
    },
    question: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: mvs(20),
      paddingHorizontal: ms(20),
      justifyContent: 'space-between'
    },
    questionText: {
      fontFamily: 'urbanist-bold'
    },
    divider: {
      marginBottom: mvs(16),
      marginHorizontal: ms(16)
    },
    answer: {
      paddingBottom: mvs(20),
      paddingHorizontal: ms(20)
    },
    answerText: {
      fontFamily: 'urbanist-regular'
    }
  });
