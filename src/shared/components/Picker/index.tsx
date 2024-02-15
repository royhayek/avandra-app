// Packages
import _ from 'lodash';
import { Divider, Text } from 'react-native-paper';
import React, { RefObject, useCallback } from 'react';

// Components
import CustomBottomSheet from '../BottomSheet';
import { TouchableOpacity } from 'react-native';

// Utilities
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface OptionProps {
  key: string;
  title: string;
  onPress: (key: string) => void;
}

interface PickerProps {
  options: OptionProps[];
  sheetRef: RefObject<BottomSheetMethods>;
}

// Component
const Picker: React.FC<PickerProps> = ({ sheetRef, options }) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleClosePicker = useCallback(() => sheetRef.current?.close(), [sheetRef]);

  // Effects
  return (
    <CustomBottomSheet
      sheetRef={sheetRef}
      title="Select an option"
      onClose={handleClosePicker}
      contentStyle={styles.contentStyle}>
      {_.map(options, ({ key, title, onPress }, index) => (
        <>
          <TouchableOpacity key={key} style={styles.option} onPress={() => onPress(key)}>
            <Text variant="xLarge">{title}</Text>
          </TouchableOpacity>
          {!_.isEqual(index, options?.length - 1) && <Divider />}
        </>
      ))}
    </CustomBottomSheet>
  );
};

export default Picker;
