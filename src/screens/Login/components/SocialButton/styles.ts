// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs, vs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import { isTablet } from '@shared/utils';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderWidth: ms(1),
      borderRadius: ms(50),
      justifyContent: 'center',
      minHeight: isTablet ? vs(40) : vs(48),
      backgroundColor: theme.dark ? theme.colors.dark[3] : 'transparent',
      borderColor: theme.dark ? theme.colors.dark[5] : theme.colors.gray[200]
    },
    content: {
      width: '100%',
      padding: ms(5),
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      minHeight: isTablet ? vs(40) : vs(48)
    },
    iconContent: {
      left: ms(16),
      borderRadius: ms(50),
      position: 'absolute',
      justifyContent: 'center'
    },
    title: {
      fontFamily: 'urbanist-semibold',
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
    }
  });
