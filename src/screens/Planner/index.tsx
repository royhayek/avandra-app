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
import RegularButton from '@shared/components/Buttons/Regular';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { plannerActions, getPlannerStep, getPlannerPayload } from '@redux/planner/slice';

// Component
const PlannerScreen = () => {
  // Redux
  const dispatch = useDispatch();

  const plannerStep = useSelector(getPlannerStep);
  const plannerPayload = useSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation();

  const [generating, setGenerating] = useState(false);

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 generating={generating} />];

  const isLastStep = _.isEqual(plannerStep, steps.length - 1);

  // Callbacks
  const updatePlannerStep = useCallback((step: number) => dispatch(plannerActions.updatePlannerStep(step)), [dispatch]);

  const handleNextPress = useCallback(() => {
    const { periodType, fromDate, toDate, interests } = plannerPayload || {};

    switch (plannerStep) {
      case 1:
        if ((_.isEqual(periodType, 'date') && fromDate && toDate) || _.isEqual(periodType, 'days')) {
          updatePlannerStep(plannerStep + 1);
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
        if (!_.isEmpty(interests) && interests.length >= 2) {
          updatePlannerStep(plannerStep + 1);
        } else {
          dispatch(
            snackbarActions.showSnackbar({
              type: 'error',
              title: 'Error',
              message: 'Please select at least 2 interests'
            })
          );
        }

        break;

      default:
        updatePlannerStep(plannerStep + 1);
        break;
    }
  }, [dispatch, plannerPayload, plannerStep, updatePlannerStep]);

  const handleSubmitPress = useCallback(() => {
    setGenerating(true);

    setTimeout(() => {
      setGenerating(false);
      navigation.navigate('TripDetails', { tripId: 1 });
      // navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      dispatch(plannerActions.reset());
    }, 3000);
  }, [dispatch, navigation]);

  const handleOnBackPress = useCallback(() => {
    dispatch(plannerActions.reset());
    navigation.goBack();
  }, [dispatch, navigation]);

  // Effects
  useEffect(() => {
    navigation.setOptions(
      isLastStep
        ? { onBackPress: handleOnBackPress, title: t('planner.step5.review_summary') }
        : {
            onBackPress: handleOnBackPress,
            headerTitle: () => (
              <Progress.Bar
                width={200}
                height={10}
                borderWidth={0}
                borderRadius={50}
                color={theme.colors.primary}
                style={{ alignSelf: 'center' }}
                progress={(plannerStep + 1) / 4}
                unfilledColor={theme.dark ? theme.colors.dark[5] : theme.colors.gray[200]}
              />
            )
          }
    );
  }, [
    dispatch,
    theme.dark,
    isLastStep,
    navigation,
    plannerStep,
    handleOnBackPress,
    theme.colors.dark,
    theme.colors.gray,
    theme.colors.primary
  ]);
  // Renderer Vars

  // Renderers
  const renderFooter = useMemo(
    () => (
      <View style={commonStyles.footer}>
        <RegularButton
          fullWidth
          onPress={!isLastStep ? handleNextPress : handleSubmitPress}
          title={!isLastStep ? t('common.continue') : t('planner.step5.build_my_trip')}
        />
      </View>
    ),
    [commonStyles.footer, isLastStep, handleNextPress, handleSubmitPress]
  );

  return (
    <View style={styles.container}>
      {steps[plannerStep]}
      {renderFooter}
    </View>
  );
};

export default PlannerScreen;
