// Packages
import _ from 'lodash';
import io from 'socket.io-client';
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useState, useEffect } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
import { getUserId } from '@redux/user/slice';
import { useSocketSetup } from '@shared/utils';
import { useAppThunkDispatch } from '@app/store';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { generateTripAction } from '@redux/itinerary/thunks';
import { plannerActions, getPlannerStep, getPlannerPayload } from '@redux/planner/slice';
import GenerationModal from '@shared/components/GenerationModal';

// Component
const PlannerScreen = () => {
  // Redux
  const dispatch = useDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const userId = useSelector(getUserId);
  const plannerStep = useSelector(getPlannerStep);
  const plannerPayload = useSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [generating, setGenerating] = useState(false);

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />];
  const isLastStep = _.isEqual(plannerStep, steps.length - 1);

  const { isConnected, socketId, progress } = useSocketSetup(isLastStep);

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
              message: t('planner.step2.select_start_and_end_date')
            })
          );
        }

        break;

      case 2:
        if (!_.isEmpty(interests) && interests.length >= 3) {
          updatePlannerStep(plannerStep + 1);
        } else {
          dispatch(
            snackbarActions.showSnackbar({
              type: 'error',
              title: 'Error',
              message: t('planner.step3.select_at_least')
            })
          );
        }

        break;

      default:
        updatePlannerStep(plannerStep + 1);
        break;
    }
  }, [dispatch, plannerPayload, plannerStep, updatePlannerStep]);

  const handleSubmitPress = useCallback(async () => {
    let response = null;

    console.debug('[handleSubmitPress] :: ', { socketId, isConnected });

    setGenerating(true);
    response = await dispatchThunk(generateTripAction({ ...plannerPayload, user: userId, socketId }));
    setGenerating(false);

    if (response?.payload?.success) {
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      navigation.navigate('TripDetails', { trip: response?.payload?.result });
      dispatch(plannerActions.reset());
    }
  }, [dispatch, dispatchThunk, isConnected, navigation, plannerPayload, socketId, userId]);

  const handleOnBackPress = useCallback(() => {
    dispatch(plannerActions.reset());
    navigation.goBack();
  }, [dispatch, navigation]);

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

  const handleResetNavigation = useCallback(() => dispatch(plannerActions.reset()), [dispatch]);

  useEffect(() => {
    navigation.addListener('beforeRemove', handleResetNavigation);
  }, [dispatch, handleResetNavigation, navigation]);

  // Renderers
  const renderFooter = () => (
    <View style={commonStyles.footer}>
      <RegularButton
        fullWidth
        onPress={!isLastStep ? handleNextPress : handleSubmitPress}
        title={!isLastStep ? t('common.continue') : t('planner.step5.build_my_trip')}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {steps[plannerStep]}
      {renderFooter()}

      <GenerationModal visible={generating} progress={progress} />
    </View>
  );
};

export default PlannerScreen;
