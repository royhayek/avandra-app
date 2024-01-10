// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { isRTL } from '../../app/i18n';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background
    },
    content: {
      marginHorizontal: ms(24)
    },
    contentContainer: { paddingBottom: mvs(30) },
    iconAndTitle: {
      gap: ms(16),
      flexDirection: 'row',
      alignItems: 'center'
    },
    anchor: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    iconContainer: {
      width: ms(48),
      height: ms(48),
      borderWidth: ms(1.5),
      borderRadius: ms(50),
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.dark ? theme.colors.secondary : theme.colors.lightGray
    },
    title: {
      marginVertical: ms(16),
      color: theme.colors.secondary
    },
    item: {
      marginVertical: mvs(4),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    endIcon: {
      color: theme.dark ? theme.colors.white : theme.colors.black
    },
    arrowIcon: {
      marginStart: ms(3),
      transform: isRTL ? [{ rotateY: '180deg' }] : []
    },
    upgradeContainer: {
      padding: mvs(20),
      marginTop: ms(5),
      borderRadius: ms(12),
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: ms(16),
      justifyContent: 'space-between',
      backgroundColor: theme.colors.primary
    },
    upgradeTitle: {
      color: theme.colors.white,
      fontWeight: 'bold'
    },
    upgradeDesc: {
      marginTop: mvs(5),
      color: theme.colors.white
    },
    modalContainer: {
      margin: ms(24),
      shadowOpacity: 0,
      borderRadius: ms(8),
      backgroundColor: theme.colors.background
    },
    modalHeader: {
      padding: ms(16),
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    modalHeaderTitle: {
      fontWeight: 'bold'
    },
    modalContent: {
      padding: ms(16)
    },
    planTitle: {
      fontWeight: 'bold',
      marginBottom: mvs(10),
      color: theme.colors.secondary
    },
    upgradeBtn: {
      height: mvs(46),
      borderRadius: ms(8),
      justifyContent: 'center'
    }
  });
