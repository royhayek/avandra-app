// Packages
import { Dimensions, StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

const windowWidth = Dimensions.get('window').width;

export default (theme: AppTheme) =>
  StyleSheet.create({
    scrollView: {
      flex: 1
    },
    curvedContainer: {
      overflow: 'hidden',
      alignSelf: 'center',
      width: windowWidth,
      height: windowWidth / 1.3
    },
    stickyHeader: {
      bottom: 0,
      overflow: 'hidden',
      position: 'absolute',
      width: windowWidth * 2,
      height: windowWidth * 3,
      marginLeft: -(windowWidth / 2),
      borderRadius: windowWidth / 1.04
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
    paddedContent: {
      paddingHorizontal: ms(24)
    },
    countryContainer: {
      gap: ms(10),
      alignItems: 'center',
      flexDirection: 'row'
    },
    country: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
    },
    description: {
      marginTop: mvs(10)
    },
    galleryList: {
      paddingHorizontal: ms(24)
    },
    galleryImage: {
      width: ms(110),
      height: ms(110),
      marginEnd: ms(12),
      borderRadius: theme.roundness
    },
    title: {
      marginTop: mvs(24),
      marginBottom: ms(16),
      paddingHorizontal: ms(24)
    }
  });
