// Packages
import { Dimensions, StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

const windowWidth = Dimensions.get('window').width;

export default (theme: AppTheme) =>
  StyleSheet.create({
    scrollView: {
      paddingHorizontal: ms(24)
    },
    shareButton: {
      marginRight: ms(16)
    },
    image: {
      bottom: 0,
      position: 'absolute',
      width: windowWidth,
      height: windowWidth,
      marginLeft: windowWidth / 2
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
    }
  });
