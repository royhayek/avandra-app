// Packages
import React, { useCallback } from 'react';

// Components
import { SearchIcon } from '@shared/assets/icons';
import { GooglePlaceData, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { GOOGLE_MAPS_API_KEY } from '@redux/places/thunks';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';

interface DestinationInputProps {
  handleSubmit: (city: any) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const DestinationInput: React.FC<DestinationInputProps> = ({ handleSubmit }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleValueChange = useCallback(
    (data: GooglePlaceData) => {
      console.debug('[handleValueChange] :: ', { data });
      // Split the description by commas to get parts of the address
      const parts = data.description.split(', ');

      // The city is usually the first part in the address
      const city = parts.length > 0 ? parts[0] : '';

      handleSubmit(city);
    },
    [handleSubmit]
  );

  // Renderers
  return (
    <GooglePlacesAutocomplete
      onPress={handleValueChange}
      placeholder={_t('search_by')}
      enablePoweredByContainer={false}
      renderLeftButton={() => <SearchIcon />}
      textInputProps={{
        placeholderTextColor: theme.dark ? theme.colors.gray[600] : theme.colors.gray[400]
      }}
      query={{
        language: 'en',
        type: '(cities)',
        key: GOOGLE_MAPS_API_KEY
      }}
      styles={{
        listView: styles.listView,
        textInput: styles.textInput,
        container: styles.container,
        textInputContainer: styles.textInputContainer
      }}
    />
  );
};

export default DestinationInput;
