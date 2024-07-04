// Packages
import _ from 'lodash';
import React from 'react';

// Components
import Input from '@shared/components/Input';
import { SearchIcon } from '@shared/assets/icons';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  NativeTouchEvent,
  NativeSyntheticEvent
} from 'react-native';

// Utilities
import { t } from '@app/i18n';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface DestinationInputProps {
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  onChange?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  onPressIn?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`home.${key}`, options);

const SearchInput: React.FC<DestinationInputProps> = ({
  value,
  onChange,
  onPressIn,
  inputStyle,
  placeholder,
  containerStyle,
  disabled = false,
  ...inputProps
}) => {
  // Renderers
  return (
    <TouchableOpacity style={containerStyle} onPress={onPressIn}>
      <Input
        value={value}
        disabled={disabled}
        autoFocus={!disabled}
        onPressIn={onPressIn}
        inputStyle={inputStyle}
        leftIcon={<SearchIcon />}
        placeholder={placeholder ?? _t('search_by')}
        handleChange={_.isFunction(onChange) ? onChange : () => null}
        {...inputProps}
      />
    </TouchableOpacity>
  );
};

export default SearchInput;
