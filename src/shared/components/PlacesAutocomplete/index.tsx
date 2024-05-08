// Packages
import _ from 'lodash';
import React from 'react';

// Components
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  Query
} from 'react-native-google-places-autocomplete';

// Utilities
import i18n from '@app/i18n';
import getEnvVars from 'environment';
import { autocompleteStyles } from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface PlacesAutocompleteProps {
  value: string | null;
  query: Query | object;
  placeholder?: string;
  fetchDetails?: boolean;
  handleTextChange: (text: string) => void;
  renderRow?: ((data: GooglePlaceData, index: number) => JSX.Element) | null;
  handlePlacePress: (data: GooglePlaceData, details: GooglePlaceDetail | null) => void;
}

// Component
const { googleMapsApiKey } = getEnvVars();

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  value,
  query,
  renderRow,
  placeholder,
  fetchDetails,
  handleTextChange,
  handlePlacePress
}) => {
  // Statics
  const theme = useAppTheme();

  // Renderers
  return (
    <GooglePlacesAutocomplete
      suppressDefaultStyles
      onPress={handlePlacePress}
      fetchDetails={fetchDetails}
      enablePoweredByContainer={false}
      styles={autocompleteStyles(theme)}
      renderRow={renderRow ?? undefined}
      keepResultsAfterBlur={false}
      
      placeholder={placeholder ?? 'Search'}
      textInputProps={{
        value,
        defaultValue: value,
        onChangeText: handleTextChange,
        cursorColor: theme.colors.secondary,
        placeholderTextColor: theme.colors.secondary
      }}
      query={{
        key: googleMapsApiKey,
        language: i18n.locale,
        ...query
      }}
    />
  );
};

PlacesAutocomplete.defaultProps = {
  query: {},
  fetchDetails: false,
  placeholder: 'Search'
};

export default PlacesAutocomplete;
