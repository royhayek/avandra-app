// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

// Components
import { View } from 'react-native';
import PartnersList from './PartnersList';
import { Text, useTheme } from 'react-native-paper';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { PARTNERS_LIST } from './data';
import { destinationsActions } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const Step3 = () => {
  // Redux
  const dispatch = useDispatch();

  // Statics
  const theme = useTheme();
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
      <Text variant="titleLarge" style={styles.title}>
        {_t('who_is_coming')}
      </Text>
      <Text variant="titleSmall" style={styles.subtitle}>
        Choose one
      </Text>
      <PartnersList value={whoIsGoing} setValue={setWhoIsGoing} />
    </View>
  );
};

export default Step3;
