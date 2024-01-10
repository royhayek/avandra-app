// Packages
import React, { useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';

// Components
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
      textInputProps={{
        placeholderTextColor: theme.colors.secondary
      }}
      query={{
        language: 'en',
        type: '(cities)',
        key: GOOGLE_MAPS_API_KEY
      }}
      renderLeftButton={() => <Ionicons name="md-search" size={ms(22)} color={theme.colors.secondary} />}
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
