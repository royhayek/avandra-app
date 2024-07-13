// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      gap: ms(12),
      height: mvs(40),
      flexDirection: 'row',
      marginVertical: mvs(8),
      paddingHorizontal: ms(24)
    },
    tab: {
      flex: 1,
      width: ms(130),
      borderWidth: ms(1),
      minHeight: mvs(48),
      borderRadius: ms(50),
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[300]
    },
    activeTab: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary
    },
    title: {
      fontFamily: 'urbanist-semibold'
    },
    activeTitle: {
      color: theme.colors.white
    },
    shimmerView: {
      gap: ms(12),
      height: mvs(40),
      flexDirection: 'row',
      marginVertical: mvs(8),
      paddingHorizontal: ms(24)
    },
    shimmerPlaceholder: {
      width: ms(130),
      height: mvs(40),
      alignItems: 'center',
      borderRadius: ms(50)
    }
  });
