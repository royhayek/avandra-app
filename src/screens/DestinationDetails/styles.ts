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
      height: windowWidth / 1.3,
      marginLeft: windowWidth / 2
    },
    content: {
      flex: 1,
      paddingTop: mvs(12),
      borderRadius: ms(40),
      paddingBottom: mvs(30)
    },
    paddedContent: {
      gap: mvs(12),
      paddingHorizontal: ms(24)
    },
    countryContainer: {
      gap: ms(10),
      alignItems: 'center',
      flexDirection: 'row'
    },
    flag: {
      width: ms(20),
      height: ms(14)
    },
    country: {
      fontFamily: 'urbanist-medium',
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
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
      marginTop: mvs(16),
      marginBottom: ms(16),
      paddingHorizontal: ms(24)
    },
    modalImage: {
      width: windowWidth,
      height: windowWidth
    },
    infoRow: {
      gap: ms(8),
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    infoIcon: {
      marginTop: mvs(7)
    },
    infoContentText: {
      flex: 1,
      fontFamily: 'urbanist-regular',
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
    },
    shimmerView: {
      marginTop: mvs(24),
      paddingHorizontal: ms(24)
    },
    shimmerImage: {
      height: windowWidth / 1.3
    },
    shimmerCity: {
      width: ms(110),
      height: mvs(30)
    },
    shimmerCountry: {
      width: ms(90),
      height: mvs(20),
      marginTop: mvs(10)
    },
    shimmerDescription: {
      width: '100%',
      height: mvs(145),
      marginTop: mvs(10)
    },
    shimmerTitle: {
      width: ms(110),
      height: mvs(28),
      marginTop: mvs(28)
    },
    shimmerGallery: {
      marginTop: mvs(20),
      flexDirection: 'row'
    },
    shimmerGalleryItem: {
      width: ms(110),
      height: ms(110),
      marginEnd: ms(12),
      borderRadius: theme.roundness
    }
  });
