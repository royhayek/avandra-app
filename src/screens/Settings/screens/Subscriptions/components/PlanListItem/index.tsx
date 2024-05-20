// Packages
import _ from 'lodash';
import React from 'react';
import Purchases from 'react-native-purchases';

// Components
import { View } from 'react-native';
import Shimmer from '@shared/components/Shimmer';
import { CheckIcon } from '@shared/assets/icons';
import { Divider, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import makeStyles from './styles';
import i18n, { t } from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';
import { ENTITLEMENT_ID } from '@shared/constants';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { PlanProps } from '@shared/types/Plan';

interface PlanListItemProps {
  item: PlanProps;
  isLoading?: boolean;
  setIsSuccess?: (success: boolean) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const PlanListItem: React.FC<PlanListItemProps> = ({
  item: { _id, name, best, price, trial, period, popular, currency, benefits },
  isLoading,
  setIsSuccess
}) => {
  // Redux
  const currenctPlanId = '1';

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleSelectPlan = async () => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(item);
      if (typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined') {
        // Unlock that great "pro" content
        setIsSuccess(true);
      }
    } catch (error) {
      if (!error.userCancelled) {
        console.debug('[handleSelectPlan - error] :: ', error);
      }
    }
  };

  // Renderers
  if (isLoading) {
    return (
      <View style={[styles.plan, styles.shimmerPlan]}>
        <Shimmer style={styles.shimmerName} width={120} height={26} />
        <Shimmer style={styles.shimmerPrice} width={80} height={32} />
        <Shimmer style={styles.divider} />
        {_.times(5, (i) => (
          <View style={styles.shimmerBenefitRow}>
            <Shimmer key={i} width={26} height={24} />
            <Shimmer key={i} style={styles.shimmerBenefit} width={i % 2 ? 140 : 200} height={24} />
          </View>
        ))}
        <Shimmer style={styles.divider} />
        <Shimmer style={styles.shimmerName} width={120} height={22} />
      </View>
    );
  }

  return (
    <View style={styles.plan}>
      {(best || popular) && (
        <View style={styles.badge}>
          <Text variant="large" style={styles.badgeText}>
            {best ? _t('best_value') : popular ? _t('popular') : ''}
          </Text>
        </View>
      )}

      <Text variant="h5" style={styles.name}>
        {name[i18n.locale]}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text variant="h2" style={styles.price}>
          {price === 0 ? _t('free') : `${currency} ${price}`}
        </Text>
        <Text variant="h6">
          {period && !String(period.en).match(/lifetime|free/) ? ` / ${period[i18n.locale]}` : ''}
        </Text>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.benefits}>
        {_.map(benefits, (benefit, index) => (
          <View key={index} style={styles.benefit}>
            <CheckIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
            <Text variant="xLarge" style={styles.benefitText}>
              {benefit[i18n.locale]}
            </Text>
          </View>
        ))}
      </View>

      <Divider style={styles.divider} />

      {_.isEqual(currenctPlanId, _id) ? (
        <Text variant="h6" style={styles.currentPlan}>
          {_t('your_current_plan')}
        </Text>
      ) : (
        <View style={styles.actions}>
          {trial && (
            <RegularButton
              variant="secondary"
              style={styles.button}
              title={_t('free_trial')}
              onPress={handleSelectPlan}
            />
          )}
          <RegularButton title={_t('select_plan')} onPress={handleSelectPlan} style={styles.button} />
        </View>
      )}
    </View>
  );
};

PlanListItem.defaultProps = {
  isLoading: false
};

export default PlanListItem;
