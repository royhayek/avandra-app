// Packages
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';

// Components
import { FlatList, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import EventAdditionItem from './components/EventAdditionItem';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import makeCommonStyles from '@shared/assets/styles';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import SearchInput from '@screens/Home/components/SearchInput';
import { destination_details } from '@screens/TripDetails/data';

// Component
const EventAdditionScreen = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const navigation = useNavigation();

  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);

  // Callbacks
  const handleSavePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleAddPress = useCallback((item: any) => setSelectedEvents(_.xor(selectedEvents, [item])), [selectedEvents]);

  // Renders
  const renderFooter = useMemo(
    () => (
      <View style={commonStyles.footer}>
        <RegularButton fullWidth loading={false} title={t('common.save')} onPress={handleSavePress} />
      </View>
    ),
    [commonStyles.footer, handleSavePress]
  );

  return (
    <>
      <SearchInput placeholder={t('common.search')} containerStyle={styles.searchInput} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={destination_details.itineraries[0].list}
        renderItem={({ item }) => {
          const isSelected = _.includes(selectedEvents, item);

          return <EventAdditionItem key={item.name} item={item} onAddPress={handleAddPress} selected={isSelected} />;
        }}
      />
      {renderFooter}
    </>
  );
};

export default EventAdditionScreen;
