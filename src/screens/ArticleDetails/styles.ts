// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    scrollView: {
      paddingTop: mvs(24),
      paddingBottom: mvs(50),
      paddingHorizontal: ms(24)
    },
    shareButton: {
      marginRight: ms(16)
    },
    content: {
      flex: 1,
      borderRadius: 40,
      paddingTop: mvs(12),
      paddingBottom: mvs(50)
    },
    date: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
    },
    shimmerContent: {
      marginTop: mvs(20)
    },
    shimmerHtmlBody: {
      width: '100%',
      marginTop: mvs(12)
    }
  });
