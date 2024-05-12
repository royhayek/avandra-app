// Packages
import i18n from '@app/i18n';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';
import { Platform } from 'react-native';

export const autocompleteStyles = (theme: AppTheme) => ({
  container: {
    marginTop: mvs(8)
  },
  textInput: {
    ...theme.fonts.xLarge,
    flex: 1,
    minHeight: mvs(50),
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    textAlign: i18n.locale === 'ar' ? 'right' : 'left',
    paddingBottom: Platform.OS === 'android' ? 0 : mvs(6)
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(20),
    borderRadius: theme.roundness,
    borderWidth: theme.dark ? ms(1) : 0,
    borderColor: theme.dark ? theme.colors.dark[3] : 'transparent',
    backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[100]
  },
  listView: {
    marginTop: mvs(6),
    paddingHorizontal: ms(12),
    borderRadius: theme.roundness,
    backgroundColor: theme.dark ? theme.colors.backdrop : theme.colors.gray[50]
  },
  description: {
    ...theme.fonts.large,
    color: theme.colors.gray[600]
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(14),
    backgroundColor: theme.dark ? theme.colors.dark[3] : theme.colors.gray[50]
  },
  loader: {
    marginHorizontal: ms(20),
    marginTop: mvs(8)
  },
  predefinedPlacesDescription: {
    color: theme.colors.gray[600]
  },
  separator: {
    height: 0.5,
    backgroundColor: theme.colors.gray[300]
  }
});
