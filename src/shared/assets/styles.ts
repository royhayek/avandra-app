// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    footer: {
      gap: ms(16),
      borderTopWidth: 1,
      marginTop: mvs(24),
      flexDirection: 'row',
      paddingVertical: mvs(16),
      paddingHorizontal: ms(24),
      borderTopColor: theme.dark ? theme.colors.dark[5] : theme.colors.lightGray
    }

    // buttonsView: {
    //   gap: ms(16),
    //   marginTop: mvs(24),
    //   paddingTop: mvs(16),
    //   borderTopWidth: 1,
    //   flexDirection: 'row',
    //   paddingHorizontal: ms(24),
    //   borderTopColor: theme.colors.lightGray
    // },
  });
