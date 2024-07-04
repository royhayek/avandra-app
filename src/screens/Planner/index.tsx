// Packages
import _ from 'lodash';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import * as Progress from 'react-native-progress';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Components
import { View } from 'react-native';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import { Ionicons } from '@expo/vector-icons';
import UpgradeSheet from '@shared/components/UpgradeSheet';
import RegularButton from '@shared/components/Buttons/Regular';
import GenerationModal from '@shared/components/GenerationModal';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { selectUserId } from '@redux/user/slice';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { selectSubscriptionState } from '@redux/app/slice';
import { generateTripAction } from '@redux/itinerary/thunks';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { plannerActions, selectPlannerStep, selectPlannerPayload } from '@redux/planner/slice';

// Interfaces
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

// Component
const PlannerScreen = () => {
  // Redux
  const dispatch = useDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const userId = useAppSelector(selectUserId);
  const plannerStep = useAppSelector(selectPlannerStep);
  const plannerPayload = useAppSelector(selectPlannerPayload);
  const subscriptionState = useAppSelector(selectSubscriptionState);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [generating, setGenerating] = useState(false);

  const upgradeSheetRef = useRef<BottomSheetMethods>(null);

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />];
  const isLastStep = _.isEqual(plannerStep, steps.length - 1);

  // Callbacks
  const updatePlannerStep = useCallback((step: number) => dispatch(plannerActions.updatePlannerStep(step)), [dispatch]);

  const handleNextPress = useCallback(() => {
    const { periodType, fromDate, toDate, interests } = plannerPayload || {};

    switch (plannerStep) {
      case 1:
        if ((_.isEqual(periodType, 'date') && fromDate && toDate) || _.isEqual(periodType, 'days')) {
          const noOfDays = moment(toDate, 'YYYY-MM-DD').diff(moment(fromDate, 'YYYY-MM-DD'), 'days');

          if (!subscriptionState?.active && noOfDays > 2) {
            upgradeSheetRef.current?.expand();
          } else {
            updatePlannerStep(plannerStep + 1);
          }
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
        if (interests && !_.isEmpty(interests) && interests.length >= 3) {
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
  }, [dispatch, plannerPayload, plannerStep, subscriptionState?.active, updatePlannerStep]);

  const handleSubmitPress = useCallback(async () => {
    setGenerating(true);

    const response = await dispatchThunk(generateTripAction({ ...plannerPayload, user: userId }));
    setGenerating(false);

    if (response?.payload?.success) {
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      navigation.navigate('TripDetails', { _id: response?.payload?.result?._id });
      dispatch(plannerActions.reset());
    }
  }, [dispatch, dispatchThunk, navigation, plannerPayload, userId]);

  const handleOnBackPress = useCallback(() => {
    if (plannerStep === 0) {
      dispatch(plannerActions.reset());
      navigation.goBack();
    } else {
      updatePlannerStep(plannerStep - 1);
    }
  }, [dispatch, navigation, plannerStep, updatePlannerStep]);

  const handleOnCancelPress = useCallback(() => {
    dispatch(plannerActions.reset());
    navigation.goBack();
  }, [dispatch, navigation]);

  const handleResetNavigation = useCallback(() => dispatch(plannerActions.reset()), [dispatch]);

  const renderCancelButton = useCallback(
    () => (
      <Ionicons
        name="close"
        size={24}
        color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
        onPress={handleOnCancelPress}
        style={{ marginRight: 20 }}
      />
    ),
    [handleOnCancelPress, theme.colors.gray, theme.colors.white, theme.dark]
  );

  // Effects
  useEffect(() => {
    navigation.setOptions(
      isLastStep
        ? {
            headerBackVisible: true,
            onBackPress: handleOnBackPress,
            headerRight: renderCancelButton,
            title: t('planner.step5.review_summary')
          }
        : {
            headerBackVisible: true,
            onBackPress: handleOnBackPress,
            headerRight: renderCancelButton,
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
    handleOnBackPress,
    isLastStep,
    navigation,
    plannerStep,
    renderCancelButton,
    theme.colors.dark,
    theme.colors.gray,
    theme.colors.primary,
    theme.dark
  ]);

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

      {generating && <GenerationModal isVisible={generating} />}
      <UpgradeSheet
        sheetRef={upgradeSheetRef}
        title={t('subscription.extend_your_travel_plans')}
        description={t('subscription.upgrade_your_account')}
      />
    </View>
  );
};

export default PlannerScreen;
