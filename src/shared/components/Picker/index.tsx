// Packages
import _ from 'lodash';
import React, { RefObject, useCallback } from 'react';

// Components
import CustomBottomSheet from '../BottomSheet';
import { Divider, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
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
      onClose={handleClosePicker}
      title={t('common.select_option')}
      contentStyle={styles.contentStyle}>
      {_.map(options, ({ key, title, icon, color, onPress }, index) => (
        <View key={key}>
          <TouchableOpacity key={key} style={styles.option} onPress={() => onPress(key)}>
            {icon}
            <Text variant="xLarge" style={[styles.title, { color }]}>
              {title}
            </Text>
          </TouchableOpacity>
          {!_.isEqual(index, options?.length - 1) && <Divider />}
        </View>
      ))}
    </CustomBottomSheet>
  );
};

export default Picker;
