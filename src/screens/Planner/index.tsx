// Packages
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useMemo, useState } from 'react';

// Components
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import { Text, useTheme } from 'react-native-paper';
import RegularButton from '@shared/components/Buttons/Regular';
import { Keyboard, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { selectDestinations } from '@redux/destinations/slice';

// Component
const PlannerScreen = () => {
  // Redux
  const dispatch = useDispatch();

  const itinerarySelect = useSelector(selectDestinations);

  // Statics
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [active, setActive] = useState(0);

  // Callbacks
  const handleBackPress = useCallback(() => setActive((a) => a - 1), [setActive]);

  const handleNextPress = useCallback(() => {
    const { periodType, fromDate, toDate } = itinerarySelect.payload;

    switch (active) {
      case 1:
        if ((_.isEqual(periodType, 'date') && fromDate && toDate) || _.isEqual(periodType, 'days')) {
          setActive((a) => a + 1);
        } else {
          dispatch(snackbarActions.showSnackbar({ type: 'error', title: 'Error', message: 'Please select a start and end date' }));
        }
        break;

      case 2:
        setActive((a) => a + 1);
        break;

      default:
        break;
    }
  }, [active, dispatch, itinerarySelect.payload]);

  const handleSubmitPress = useCallback(() => {
    const { interests } = itinerarySelect.payload;
    if (!_.isEmpty(interests)) {
      setActive((a) => a + 1);
    } else {
      dispatch(snackbarActions.showSnackbar({ type: 'error', title: 'Error', message: 'Please select at least 2 interests' }));
    }
  }, [dispatch, itinerarySelect.payload]);

  // Renderer Vars
  const steps = [<Step1 setActive={setActive} />, <Step2 />, <Step3 />, <Step4 />, <Step5 setActive={setActive} />];

  const isBeforeLastStep = _.isEqual(active, steps.length - 2);
  const isLastStep = _.isEqual(active, steps.length - 1);

  // Renderers
  const renderFooter = useMemo(
    () => (
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text variant="titleMedium">{t('common.back')}</Text>
        </TouchableOpacity>
        <RegularButton
          title={!isBeforeLastStep ? t('common.next') : t('common.submit')}
          onPress={!isBeforeLastStep ? handleNextPress : handleSubmitPress}
        />
      </View>
    ),
    [styles.footer, handleBackPress, isBeforeLastStep, handleNextPress, handleSubmitPress]
  );

  return (
    <TouchableOpacity style={styles.container} onPress={() => Keyboard.dismiss()}>
      {steps[active]}
      {active !== 0 && !isLastStep && renderFooter}
    </TouchableOpacity>
  );
};

export default PlannerScreen;
