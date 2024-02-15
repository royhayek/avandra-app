// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export default (theme: AppTheme) =>
  StyleSheet.create({
    content: {
      paddingEnd: ms(8),
      paddingStart: ms(6),
      paddingBottom: mvs(50)
    }
  });
