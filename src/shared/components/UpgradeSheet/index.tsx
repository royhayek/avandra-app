// Packages
import _ from 'lodash';
import React, { RefObject, useCallback } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Components
import CustomBottomSheet from '../BottomSheet';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text, useTheme } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';

// Interfaces
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface UpgradeSheetProps {
  title: string;
  description: string;
  sheetRef: RefObject<BottomSheetMethods>;
}

// Component
const UpgradeSheet: React.FC<UpgradeSheetProps> = ({ sheetRef, title, description }) => {
  // Statics
  const theme = useTheme();
  const styles = makeStyles();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // Callbacks
  const handleClosePicker = useCallback(() => sheetRef.current?.close(), [sheetRef]);

  const handleUpgradePlan = () => {
    handleClosePicker();
    navigation.navigate('Subscriptions');
  };

  // Effects
  return (
    <CustomBottomSheet
      sheetRef={sheetRef}
      onClose={handleClosePicker}
      contentStyle={styles.contentStyle}
      primaryBtnProps={{ title: t('common.upgrade'), onPress: handleUpgradePlan }}
      secondaryBtnProps={{ title: t('common.cancel'), onPress: handleClosePicker }}>
      <>
        <FastImage
          style={styles.upgradeIllustration}
          source={require('@shared/assets/images/UpgradedIllustration.png')}
        />

        <Text variant="h5" style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text variant="large" style={[styles.description, { color: theme.fonts.xLarge.color }]}>
            {description}
          </Text>
        </TouchableOpacity>
      </>
    </CustomBottomSheet>
  );
};

export default UpgradeSheet;
