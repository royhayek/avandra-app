// Packages
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';

// Components
import { Text } from 'react-native-paper';
import { ScrollView } from 'react-native';
import DestinationInput from './DestinationInput';
import PopularDestinations from './PopularDestinations';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { destinationsActions } from '@redux/destinations/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { useAppTheme } from '@shared/assets/theme';

interface Step1Props {
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.${key}`, options);

const Step1: React.FC<Step1Props> = ({ setActive }) => {
  // Redux
  const dispatch = useDispatch();

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  // Callbacks
  const handleSubmitPrompt = useCallback(
    (city: any) => {
      console.debug('[Step 1 - handleSubmitPrompt] :: ', city);
      dispatch(destinationsActions.setPayload({ destination: city }));
      setActive(1);
    },
    [dispatch, setActive]
  );

  // Renderers
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      <DestinationInput handleSubmit={handleSubmitPrompt} />
      <PopularDestinations handleSubmit={handleSubmitPrompt} />
    </ScrollView>
  );
};

export default Step1;
