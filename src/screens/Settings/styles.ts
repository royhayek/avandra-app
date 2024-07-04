// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: mvs(16),
      backgroundColor: theme.colors.background
    },
    contentContainer: {
      marginTop: mvs(16),
      paddingBottom: mvs(30)
    },
    upgradeContainer: {
      paddingVertical: mvs(16),
      paddingHorizontal: ms(12),
      marginTop: ms(12),
      borderRadius: ms(12),
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: ms(16),
      justifyContent: 'space-between',
      backgroundColor: theme.colors.primary
    },
    titleAndDesc: {
      flex: 1,
      paddingHorizontal: ms(12),
      justifyContent: 'flex-start'
    },
    upgradeTitle: {
      color: theme.colors.white,
      fontFamily: 'urbanist-bold'
    },
    upgradeDesc: {
      marginTop: mvs(2),
      color: theme.colors.white,
      fontFamily: 'urbanist-semibold'
    },
    upgradeIllustration: {
      width: ms(50),
      height: ms(48)
    }
  });
