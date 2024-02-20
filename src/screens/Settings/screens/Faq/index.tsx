// Packages
import _ from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';

// Components
import Input from '@shared/components/Input';
import { Divider, Text } from 'react-native-paper';
import ScrollableTabs from '@shared/components/ScrollableTabs';
import { DownChevron, SearchIcon } from '@shared/assets/icons';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import makeStyles from './styles';
import { dummy_faqs } from './data';
import i18n, { t } from '@app/i18n';
import { useAppTheme } from '@shared/assets/theme';

// Interfaces
interface FaqScreenProps {}

// Component
const InfoScreen: React.FC<FaqScreenProps> = () => {
  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [activeTab, setActiveTab] = useState('general');
  const [searchText, setSearchText] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const data = dummy_faqs;
  const activeCategoryFaqs = useMemo(() => _.find(data, { category: activeTab })?.list ?? [], [activeTab, data]);

  // Callbacks
  const handleTabPress = useCallback((tab: string) => setActiveTab(tab), []);

  const handleSearchTextChange = useCallback((text: string) => setSearchText(text), []);

  const handleQuestionPress = useCallback(
    (id: string) => setExpandedCategories(_.xor(expandedCategories, [id])),
    [expandedCategories]
  );

  const filteredData = useMemo(
    () =>
      _.filter(activeCategoryFaqs, (faq) => {
        const question = faq?.question[i18n.locale];

        return _.includes(_.toLower(question), _.toLower(searchText));
      }),
    [activeCategoryFaqs, searchText]
  );

  // Renderer Va
  const tabs = _.map(dummy_faqs, (category) => ({
    key: category?.category,
    title: category?.title[i18n.locale] ?? ''
  }));

  // Renderers
  return (
    <View style={styles.container}>
      <View>
        <ScrollableTabs tabs={tabs} onTabPress={handleTabPress} activeTab={activeTab} />
        <View style={styles.content}>
          <Input
            name="search"
            value={searchText}
            leftIcon={<SearchIcon />}
            placeholder={t('common.search')}
            handleChange={handleSearchTextChange}
          />
        </View>
      </View>

      <FlatList
        data={filteredData}
        style={styles.list}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const isExpanded = _.includes(expandedCategories, item?._id);

          return (
            <View style={styles.item}>
              <TouchableOpacity style={styles.question} onPress={() => handleQuestionPress(item?._id)}>
                <Text variant="h6" style={styles.questionText}>
                  {item.question[i18n.locale]}
                </Text>
                <DownChevron
                  fill={theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]}
                  transform={[{ rotateX: isExpanded ? '180deg' : '0deg' }]}
                />
              </TouchableOpacity>

              {isExpanded && (
                <>
                  <Divider style={styles.divider} />

                  <View style={styles.answer}>
                    <Text variant="large" style={styles.answerText}>
                      {item.answer[i18n.locale]}
                    </Text>
                  </View>
                </>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default InfoScreen;
