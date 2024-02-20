// Packages
import _ from 'lodash';
import { Divider, Text } from 'react-native-paper';
import React, { RefObject, useCallback } from 'react';

// Components
import CustomBottomSheet from '../BottomSheet';
import { TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';

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
  const styles = makeStyles();

  // Callbacks
  const handleClosePicker = useCallback(() => sheetRef.current?.close(), [sheetRef]);

  // Effects
  return (
    <CustomBottomSheet
      sheetRef={sheetRef}
      title={t('common.select_option')}
      onClose={handleClosePicker}
      contentStyle={styles.contentStyle}>
      {_.map(options, ({ key, title, onPress }, index) => (
        <View key={key}>
          <TouchableOpacity key={key} style={styles.option} onPress={() => onPress(key)}>
            <Text variant="xLarge">{title}</Text>
          </TouchableOpacity>
          {!_.isEqual(index, options?.length - 1) && <Divider />}
        </View>
      ))}
    </CustomBottomSheet>
  );
};

export default Picker;
