// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    bottomSheetBackground: {
      backgroundColor: theme.colors.background
    },
    bottomSheetHeader: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    bottomSheetTitle: {
      flex: 1,
      textAlign: 'center'
    },
    bottomSheetContent: {
      alignItems: 'center',
      marginVertical: mvs(40)
    },
    closeButton: { position: 'absolute' },
    freeMessagesTextBg: {
      width: '90%',
      padding: ms(15),
      marginTop: mvs(20),
      borderRadius: ms(10),
      alignItems: 'center',
      backgroundColor: theme.dark ? theme.colors.backdrop : theme.colors.lightGray
    },
    availableMsgs: { textAlign: 'center' },
    upgradeButton: { width: '90%' },
    earnButton: {
      width: '90%',
      marginTop: mvs(15)
    },
    playLottie: {
      height: mvs(25),
      marginRight: ms(8),
      transform: [{ scale: ms(1.1) }]
    }
  });
