// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { AppTheme } from '../../assets/theme';
import { scaledFontSize } from '@shared/utils';

// Types
import { MarkedStyles } from 'react-native-marked/dist/typescript/theme/types';

export default (theme: AppTheme) =>
  StyleSheet.create({
    title: {
      color: theme.colors.black
    },
    row: {
      height: mvs(56),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    parentHr: {
      height: 1,
      width: '100%',
      color: theme.colors.black
    },
    child: {
      paddingVertical: mvs(8),
      backgroundColor: theme.colors.background
    }
  });

export const markdownStyles = (theme: AppTheme, isRTL?: boolean): MarkedStyles => ({
  text: {
    ...theme.fonts.labelLarge,
    direction: isRTL ? 'rtl' : 'ltr',
    color: theme.dark ? theme.colors.white : theme.colors.black
  },
  blockquote: {
    ...theme.fonts.labelLarge,
    direction: isRTL ? 'rtl' : 'ltr'
    // color: theme.dark ? theme.colors.white : theme.colors.black
  },
  em: {
    ...theme.fonts.bodySmall,
    fontWeight: '500',
    fontSize: scaledFontSize(12.8),
    lineHeight: scaledFontSize(19),
    direction: isRTL ? 'rtl' : 'ltr',
    color: theme.dark ? theme.colors.white : theme.colors.black
  },
  codespan: {
    ...theme.fonts.labelLarge,
    fontWeight: 'bold',
    direction: isRTL ? 'rtl' : 'ltr',
    color: theme.dark ? theme.colors.white : theme.colors.black,
    backgroundColor: theme.dark ? theme.colors.secondaryContainer : 'transparent'
  },
  link: {
    ...theme.fonts.labelLarge,
    direction: isRTL ? 'rtl' : 'ltr'
  },
  code: {
    ...theme.fonts.labelLarge,
    flex: 1,
    padding: ms(16),
    borderRadius: ms(8),
    marginVertical: mvs(5),
    direction: isRTL ? 'rtl' : 'ltr',
    backgroundColor: theme.dark ? theme.colors.background : theme.colors.white
  },
  table: {
    flex: 1,
    borderWidth: ms(1),
    borderRadius: ms(2),
    borderColor: theme.colors.white,
    direction: isRTL ? 'rtl' : 'ltr'
  },
  li: {
    ...theme.fonts.labelLarge,
    flex: 1,
    marginBottom: mvs(10),
    color: theme.colors.primary,
    direction: isRTL ? 'rtl' : 'ltr'
  }
});
