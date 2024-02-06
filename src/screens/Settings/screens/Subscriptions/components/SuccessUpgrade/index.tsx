// Packages
import _ from 'lodash';
import React from 'react';

// Components
import FastImage from 'react-native-fast-image';
import { ScrollView, View } from 'react-native';
import { CheckIcon } from '@shared/assets/icons';
import { Divider, Text } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { PlanProps } from '@shared/types/Plan';
import { useNavigation } from '@react-navigation/native';

interface SuccessUpgradeProps {
  item: PlanProps;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`subscription.${key}`, options);

const SuccessUpgrade: React.FC<SuccessUpgradeProps> = ({
  item: { _id, name, best, price, trial, period, popular, currency, benefits }
}) => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation();

  // Callbacks
  const handleOkPress = () => navigation.goBack();

  // Renderers
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <FastImage source={require('@shared/assets/images/UpgradedIllustration.png')} style={styles.illutration} />
        <Text variant="h3" style={styles.title}>
          Congratulations!
        </Text>
        <Text variant="xLarge" style={styles.name}>
          You're now a {name}!
        </Text>

        <Divider style={styles.divider} />

        <Text variant="h4" style={styles.benefitsTitle}>
          Benefits Unlocked
        </Text>

        <View style={styles.benefitsList}>
          {_.map(benefits, (benefit) => (
            <View style={styles.benefit}>
              <CheckIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
              <Text variant="xLarge" style={styles.benefitText}>
                {benefit}
              </Text>
            </View>
          ))}
        </View>

        <Divider style={styles.divider} />

        <Text variant="large" style={styles.acknowledge}>
          Thank you for upgrading to our Premium Adventurer plan. Your journey with Tripify just got even more exciting!
        </Text>
      </ScrollView>

      <View style={commonStyles.footer}>
        <RegularButton title="Ok" onPress={handleOkPress} fullWidth />
      </View>
    </>
  );
};

export default SuccessUpgrade;
