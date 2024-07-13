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
      paddingTop: mvs(12),
      borderRadius: ms(40),
      paddingBottom: mvs(50)
    },
    paddedContent: {
      gap: mvs(12)
    },
    info: {
      gap: mvs(6),
      paddingHorizontal: ms(24)
    },
    type: {
      textTransform: 'capitalize',
      color: theme.colors.secondary,
      fontFamily: 'urbanist-semibold'
    },
    contantInfo: {
      gap: mvs(12),
      paddingHorizontal: ms(24)
    },
    contactRow: {
      gap: ms(6),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    ratingContainer: {
      gap: ms(4),
      flexDirection: 'row',
      alignItems: 'center'
    },
    ratingText: {
      fontFamily: 'urbanist-bold',
      color: theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]
    },
    divider: {
      marginVertical: mvs(8),
      paddingHorizontal: ms(24)
    },
    title: {
      marginBottom: mvs(4),
      paddingHorizontal: ms(24),
      color: theme.dark ? theme.colors.white : theme.colors.gray[900]
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
    address: {
      paddingHorizontal: ms(24),
      fontFamily: 'urbanist-regular'
    },
    mapContainer: {
      overflow: 'hidden',
      paddingHorizontal: ms(24),
      borderRadius: theme.roundness
    },
    map: {
      width: '100%',
      height: mvs(180),
      borderRadius: theme.roundness
    },
    openingHours: {
      gap: mvs(8),
      paddingHorizontal: ms(24)
    },
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5
    },
    ratingLabel: {
      width: 30
    },
    barBackground: {
      flex: 1,
      height: 10,
      backgroundColor: '#e0e0e0',
      marginHorizontal: 10,
      borderRadius: 5
    },
    barFill: {
      height: 10,
      backgroundColor: '#000',
      borderRadius: 5
    },
    ratingCount: {
      width: 40,
      textAlign: 'right'
    }
  });
