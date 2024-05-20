// Packages
import { StyleSheet } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';

// Utilities
import { scaledFontSize } from '@shared/utils';

// Interfaces
import { AppTheme } from '../../assets/theme';
import { MarkedStyles } from 'react-native-marked/dist/typescript/theme/types';

export default (theme: AppTheme) =>
  StyleSheet.create({
    row: {
      height: mvs(56),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    parentHr: {
      width: '100%',
      color: theme.colors.black
    },
    child: {
      backgroundColor: theme.colors.background
    },
    expandText: {
      fontFamily: 'urbanist-semibold'
    }
  });

export const markdownStyles = (theme: AppTheme, isRTL?: boolean): MarkedStyles => ({
  text: {
    ...theme.fonts.large,
    direction: isRTL ? 'rtl' : 'ltr',
    color: theme.dark ? theme.colors.white : theme.colors.black
  },
  blockquote: {
    ...theme.fonts.large,
    direction: isRTL ? 'rtl' : 'ltr'
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
    ...theme.fonts.large,
    fontWeight: 'bold',
    direction: isRTL ? 'rtl' : 'ltr',
    color: theme.dark ? theme.colors.white : theme.colors.black,
    backgroundColor: theme.dark ? theme.colors.secondaryContainer : 'transparent'
  },
  link: {
    ...theme.fonts.large,
    direction: isRTL ? 'rtl' : 'ltr'
  },
  code: {
    ...theme.fonts.large,
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
    ...theme.fonts.large,
    flex: 1,
    marginBottom: mvs(10),
    color: theme.colors.primary,
    direction: isRTL ? 'rtl' : 'ltr'
  }
});
