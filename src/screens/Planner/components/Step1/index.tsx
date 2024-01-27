// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

// Components
import { View } from 'react-native';
import StepHeader from '../StepHeader';
import PartnersList from './PartnersList';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PARTNERS_LIST } from './data';
import { useAppTheme } from '@shared/assets/theme';
import { destinationsActions } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step1.${key}`, options);

const Step1 = () => {
  // Redux
  const dispatch = useDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [whoIsGoing, setWhoIsGoing] = useState(PARTNERS_LIST[0].key);

  // Effects
  useEffect(() => {
    const partner = _.find(PARTNERS_LIST, { key: whoIsGoing });
    const withWho = _.isEqual(partner?.key, 'alone') ? 'alone' : `with ${partner?.title}`;
    dispatch(destinationsActions.setPayload({ whoIsGoing: withWho }));
  }, [whoIsGoing, dispatch]);

  // Renderers
  return (
    <View style={styles.container}>
      <StepHeader title={_t('who_is_going')} description={_t('lets_start')} />
      <PartnersList transKey="step1" list={PARTNERS_LIST} value={whoIsGoing} setValue={setWhoIsGoing} />
    </View>
  );
};

export default Step1;
