// Packages
import _ from 'lodash';
import React, { useRef } from 'react';
import { ms } from 'react-native-size-matters';
import { PurchasesPackage } from 'react-native-purchases';

// Components
import { Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import BouncyCheckbox, { BouncyCheckboxHandle } from 'react-native-bouncy-checkbox';

// Utilities
import i18n, { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppSelector } from '@app/store';
import { selectMetaData } from '@redux/app/slice';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';

interface PlanListItemProps {
  item: PurchasesPackage;
  selected: boolean;
  setSelected: (item: PurchasesPackage) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const PlanListItem: React.FC<PlanListItemProps> = ({ item, selected, setSelected }) => {
  // Redux
  const metaData = useAppSelector(selectMetaData);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme, selected);

  const { packageType, product } = item;
  const { price, priceString } = product;

  const checkboxRef = useRef<BouncyCheckboxHandle>(null);

  const period = String(packageType).match(/monthly/i) ? _t('month') : _t('year');

  const description = metaData?.offerings[item.packageType]?.description[i18n.locale] || '';

  // Callbacks
  const handleCheckboxPress = () => {
    setSelected(item);
    checkboxRef.current?.onCheckboxPress();
  };

  // Renderers
  return (
    <TouchableOpacity onPress={handleCheckboxPress}>
      <View style={styles.plan}>
        <BouncyCheckbox
          ref={checkboxRef}
          size={ms(22)}
          isChecked={selected}
          onPress={handleCheckboxPress}
          fillColor={theme.colors.primary}
          innerIconStyle={styles.checkboxIconStyle}
        />

        <View>
          <Text variant="h5">
            {price === 0 ? _t('free') : priceString}
            <Text variant="h6">{period && !String(packageType).match(/lifetime|free/) ? ` / ${period}` : ''}</Text>
          </Text>

          <Text variant="large" style={styles.name} numberOfLines={1}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanListItem;
