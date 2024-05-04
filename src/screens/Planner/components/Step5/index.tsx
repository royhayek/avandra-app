// Packages
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';

// Components
import { ScrollView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import InterestsList from '../Step3/InterestsList';
import { Divider, IconButton, Text } from 'react-native-paper';
import { CalendarIcon, EditIcon, LocationIcon, MoneyBagIcon, StarIcon, UsersIcon } from '@shared/assets/icons';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { formatDate } from '@shared/utils';
import { useAppSelector } from '@app/store';
import { PUBLIC_URL } from '@shared/constants';
import { useAppTheme } from '@shared/assets/theme';
import { getPlannerPayload, plannerActions } from '@redux/planner/slice';

// Interfaces
import { TranslateOptions } from 'i18n-js';

// Component
const _t = (key: string, options?: TranslateOptions) => t(`planner.step5.${key}`, options);

const Step5 = () => {
  // Redux
  const dispatch = useDispatch();
  const plannerPayload = useAppSelector(getPlannerPayload);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { interests, traveler, budget, fromDate, toDate, destination, periodType, noOfDays, selectedMonth } =
    plannerPayload;

  const { image = '', name, country } = destination;

  const byDate = _.isEqual(periodType, 'date');

  // Callbacks
  const handleEditPress = useCallback((step: number) => dispatch(plannerActions.updatePlannerStep(step)), [dispatch]);

  // Renderers
  const renderTitle = useCallback(
    (key, title, onPress) => (
      <View style={styles.titleContainer}>
        <Text variant="h5" style={styles.title}>
          {title}
        </Text>
        <IconButton
          size={15}
          style={styles.editIcon}
          onPress={() => onPress(key)}
          icon={() => <EditIcon fill={theme.colors.primary} />}
        />
      </View>
    ),
    [styles.editIcon, styles.title, styles.titleContainer, theme.colors.primary]
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="xLarge">{_t('review_summary_desc')}</Text>

      <View>
        <View style={styles.section}>
          <LocationIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />

          <View style={styles.flex1}>
            <Text variant="h5" style={styles.title}>
              {_t('destination')}
            </Text>

            {image ? (
              <>
                <View style={styles.row}>
                  <FastImage source={{ uri: `${PUBLIC_URL}/destination/image/${image}` }} style={styles.image} />

                  <View>
                    <Text variant="h6">{name}</Text>
                    <View style={styles.countryRow}>
                      <Text variant="medium" style={styles.country}>
                        {country}
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            ) : (
              <Text variant="xLarge" style={styles.value}>
                {name}, {country}
              </Text>
            )}
          </View>
        </View>

        <Divider />

        <View style={styles.section}>
          <UsersIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />

          <View style={styles.flex1}>
            {renderTitle('traveler', _t('party'), () => handleEditPress(0))}
            <Text variant="xLarge" style={styles.value}>
              {traveler?.title} {traveler?.icon}
            </Text>
          </View>
        </View>

        <Divider />

        <View style={styles.section}>
          <CalendarIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />

          <View style={styles.flex1}>
            {renderTitle('date', _t('trip_dates'), () => handleEditPress(1))}
            <Text variant="xLarge" style={styles.value}>
              {byDate
                ? `${formatDate(fromDate, 'MMM DD')} ${_t('to')} ${formatDate(toDate, 'MMM DD, YYYY')}`
                : `${noOfDays} ${_t('days')} ${_t('in')} ${selectedMonth}`}
            </Text>
          </View>
        </View>

        <Divider />

        <View style={styles.section}>
          <StarIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />

          <View style={styles.flex1}>
            {renderTitle('interests', _t('interest', { number: interests?.length }), () => handleEditPress(2))}
            <InterestsList data={interests} disabled />
          </View>
        </View>

        <Divider />

        <View style={styles.section}>
          <MoneyBagIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />

          <View style={styles.flex1}>
            {renderTitle('bidget', _t('budget'), () => handleEditPress(3))}
            <Text variant="xLarge" style={styles.value}>
              {budget?.title} {budget?.icon}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step5;
