// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background
    },
    contentContainer: {
      marginTop: mvs(16),
      paddingBottom: mvs(30)
    },
    title: {
      marginVertical: ms(16),
      color: theme.colors.secondary
    },
    endIcon: {
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    upgradeContainer: {
      padding: ms(14),
      marginTop: ms(12),
      borderRadius: ms(12),
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: ms(16),
      justifyContent: 'space-between',
      backgroundColor: theme.colors.primary
    },
    upgradeTitle: {
      color: theme.colors.white,
      fontFamily: 'urbanist-bold'
    },
    upgradeDesc: {
      marginTop: mvs(2),
      color: theme.colors.white
    },
    upgradeIllustration: {
      width: ms(50),
      height: ms(48),
      marginRight: ms(6)
    },
    upgradeBtn: {
      height: mvs(46),
      borderRadius: ms(8),
      justifyContent: 'center'
    }
  });
