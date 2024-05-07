// Packages
import i18n from '@app/i18n';
import { ms, mvs } from 'react-native-size-matters';

// Interfaces
import { AppTheme } from '@shared/assets/theme';

export const autocompleteStyles = (theme: AppTheme) => ({
  container: {
    marginTop: mvs(8)
  },
  textInput: {
    ...theme.fonts.xLarge,
    flex: 1,
    minHeight: mvs(50),
    paddingBottom: mvs(10),
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    textAlign: i18n.locale === 'ar' ? 'right' : 'left'
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
    backgroundColor: theme.colors.backdrop,
    borderRadius: theme.roundness,
    paddingHorizontal: ms(12),
    paddingVertical: mvs(12)
  },
  description: {
    ...theme.fonts.large,
    color: theme.colors.gray[600]
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
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
    marginVertical: mvs(12),
    backgroundColor: theme.colors.gray[300]
  }
});
