// Packages
import _ from 'lodash';
import React, { MutableRefObject, RefObject } from 'react';

// Components
import {
  Query,
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef
} from 'react-native-google-places-autocomplete';

// Utilities
import i18n, { t } from '@app/i18n';
import { autocompleteStyles } from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { GOOGLE_PLACES_API_KEY } from '@shared/constants';

// Interfaces
interface PlacesAutocompleteProps {
  value?: string | null;
  query: Query | object;
  placeholder?: string;
  fetchDetails?: boolean;
  handleTextChange?: (text: string) => void;
  renderRow?: ((data: GooglePlaceData, index: number) => JSX.Element) | null;
  handlePlacePress: (data: GooglePlaceData, details: GooglePlaceDetail | null) => void;
  inputRef: RefObject<GooglePlacesAutocompleteRef> | MutableRefObject<GooglePlacesAutocompleteRef>;
}

// Component
const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  value,
  query,
  inputRef,
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
      ref={inputRef}
      suppressDefaultStyles
      onPress={handlePlacePress}
      fetchDetails={fetchDetails}
      keepResultsAfterBlur={false}
      enablePoweredByContainer={false}
      styles={autocompleteStyles(theme)}
      renderRow={renderRow ?? undefined}
      placeholder={placeholder ?? t('common.search')}
      textInputProps={{
        value,
        blurOnSubmit: true,
        defaultValue: value,
        onChangeText: handleTextChange,
        cursorColor: theme.colors.secondary,
        placeholderTextColor: theme.colors.secondary
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: i18n.locale,
        ...query
      }}
    />
  );
};

PlacesAutocomplete.defaultProps = {
  query: {},
  fetchDetails: false
};

export default PlacesAutocomplete;
