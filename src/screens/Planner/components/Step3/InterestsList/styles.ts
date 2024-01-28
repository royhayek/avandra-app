// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    flatList: {
      paddingTop: mvs(6)
    },
    listColumnWrapper: {
      flexWrap: 'wrap'
    },
    chip: {
      margin: ms(5),
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[300]
    },
    activeChip: {
      borderColor: 'transparent',
      backgroundColor: theme.colors.primary
    },
    textStyle: {
      ...theme.fonts.large,
      fontFamily: 'urbanist-semibold',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    },
    activeTextStyle: {
      color: theme.colors.white
    }
  });
