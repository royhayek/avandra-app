// Packages
import _ from 'lodash';
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState, useEffect } from 'react';

// Components
import { View } from 'react-native';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { selectDestinations } from '@redux/destinations/slice';

// Component
const PlannerScreen = () => {
  // Redux
  const dispatch = useDispatch();

  const itinerarySelect = useSelector(selectDestinations);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation();

  const [active, setActive] = useState(0);

  // Callbacks
  const handleNextPress = useCallback(() => {
    const { periodType, fromDate, toDate } = itinerarySelect.payload;

    switch (active) {
      case 1:
        if ((_.isEqual(periodType, 'date') && fromDate && toDate) || _.isEqual(periodType, 'days')) {
          setActive((a) => a + 1);
        } else {
          dispatch(
            snackbarActions.showSnackbar({
              type: 'error',
              title: 'Error',
              message: 'Please select a start and end date'
            })
          );
        }
        break;

      case 2:
        setActive((a) => a + 1);
        break;

      default:
        setActive((a) => a + 1);
        break;
    }
  }, [active, dispatch, itinerarySelect.payload]);

  const handleSubmitPress = useCallback(() => {
    const { interests } = itinerarySelect.payload;

    if (!_.isEmpty(interests)) {
      setActive((a) => a + 1);
    } else {
      dispatch(
        snackbarActions.showSnackbar({ type: 'error', title: 'Error', message: 'Please select at least 2 interests' })
      );
    }
  }, [dispatch, itinerarySelect.payload]);

  // Effects
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Progress.Bar
          width={200}
          height={10}
          borderWidth={0}
          borderRadius={50}
          progress={(active + 1) / 4}
          color={theme.colors.primary}
          style={{ alignSelf: 'center' }}
          unfilledColor={theme.dark ? theme.colors.dark[5] : theme.colors.gray[200]}
        />
      )
    });
  }, [active, navigation, theme.colors.dark, theme.colors.gray, theme.colors.primary, theme.dark]);

  // Renderer Vars
  const steps = [<Step3 />, <Step2 />, <Step4 />, <Step6 />, <Step5 />, <Step1 />];

  const isBeforeLastStep = _.isEqual(active, steps.length - 2);
  const isLastStep = _.isEqual(active, steps.length - 1);

  // Renderers
  const renderFooter = useMemo(
    () => (
      <View style={commonStyles.footer}>
        <RegularButton
          fullWidth
          onPress={!isBeforeLastStep ? handleNextPress : handleSubmitPress}
          title={!isBeforeLastStep ? t('common.continue') : t('common.submit')}
        />
      </View>
    ),
    [commonStyles.footer, isBeforeLastStep, handleNextPress, handleSubmitPress]
  );

  return (
    <View style={styles.container}>
      {steps[active]}
      {renderFooter}
    </View>
  );
};

export default PlannerScreen;
