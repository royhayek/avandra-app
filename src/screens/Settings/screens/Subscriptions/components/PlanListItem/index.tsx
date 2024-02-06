// Packages
import _ from 'lodash';
import React from 'react';

// Components
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import i18n, { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { PlanProps } from '@shared/types/Plan';
import { CheckIcon } from '@shared/assets/icons';

interface PlanListItemProps {
  item: PlanProps;
  setIsSuccess: (success: boolean) => void;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const PlanListItem: React.FC<PlanListItemProps> = ({
  item: { _id, name, best, price, trial, period, popular, currency, benefits },
  setIsSuccess
}) => {
  // Redux
  const currenctPlanId = '1';

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleSelectPlan = async () => {
    console.info('[handleSelectPlan] :: pressed');
    setIsSuccess(true);
  };

  // Renderers
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
          <Text variant="h6">
            {period && !String(period.en).match(/lifetime|free/) ? ` / ${period[i18n.locale]}` : ''}
          </Text>
        </Text>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.benefits}>
        {_.map(benefits, (benefit) => (
          <View style={styles.benefit}>
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

export default PlanListItem;
