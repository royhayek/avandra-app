// Packages
import _ from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

// Components
import { View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import TripModificationItem from './components/TripModificationItem';
import { NestableScrollContainer } from 'react-native-draggable-flatlist';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import makeCommonStyles from '@shared/assets/styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';

interface RouteParams {
  itineraries: any[];
}

// Component
const TripModificationScreen = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);
  
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { itineraries } = route?.params as RouteParams;

  // Callbacks
  const handleSavePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Renderer vars

  // Renders
  const renderFooter = useMemo(
    () => (
      <View style={commonStyles.footer}>
        <RegularButton fullWidth loading={false} title={t('common.save_changes')} onPress={handleSavePress} />
      </View>
    ),
    [commonStyles.footer, handleSavePress]
  );

  return (
    <>
      <NestableScrollContainer showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {_.map(itineraries, (itinerary, index) => (
          <TripModificationItem key={index} item={itinerary} index={index} />
        ))}
      </NestableScrollContainer>

      {renderFooter}
    </>
  );
};

export default TripModificationScreen;
