// Packages
import _ from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Components
import Input from '@shared/components/Input';
import { ActivityIndicator, Divider, Text } from 'react-native-paper';
import ScrollableTabs from '@shared/components/ScrollableTabs';
import { DownChevron, SearchIcon } from '@shared/assets/icons';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import { useAppSelector, useAppThunkDispatch } from '@app/store';
import { getFaqCategoriesAction, getFaqQuestionsAction } from '@redux/settings/thunks';
import {
  selectFaqQuestions,
  selectFaqCategories,
  selectQuestionsLoading,
  selectFaqCategoriesLoading
} from '@redux/settings/slice';
import Shimmer from '@shared/components/Shimmer';

// Interfaces
interface FaqScreenProps {}

// Component
const InfoScreen: React.FC<FaqScreenProps> = () => {
  // Redux
  const dispatchThunk = useAppThunkDispatch();

  const faqQuestions = useAppSelector(selectFaqQuestions);
  const faqCategories = useAppSelector(selectFaqCategories);
  const isLoadingFaqs = useAppSelector(selectFaqCategoriesLoading);
  const isLoadingQuestions = useAppSelector(selectQuestionsLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [searchText, setSearchText] = useState<string>('');
  const [activeTab, setActiveTab] = useState(faqCategories[0]?._id ?? '');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Callbacks
  const handleTabPress = useCallback((tab: string) => setActiveTab(tab), []);

  const handleSearchTextChange = useCallback((text: string) => setSearchText(text), []);

  const handleQuestionPress = useCallback(
    (id: string) => setExpandedCategories(_.xor(expandedCategories, [id])),
    [expandedCategories]
  );

  const filteredData = useMemo(
    () =>
      _.filter(faqQuestions, (faq) => {
        const question = faq?.question;

        return _.includes(_.toLower(question), _.toLower(searchText));
      }),
    [faqQuestions, searchText]
  );

  // Effects
  useEffect(() => {
    dispatchThunk(getFaqCategoriesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeTab && !_.isEmpty(faqCategories)) {
      dispatchThunk(getFaqQuestionsAction(activeTab));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // Renderer Vars
  const tabs = _.map(faqCategories, (category) => ({
    key: category?._id,
    title: category?.name
  }));

  // Renderers
  return (
    <View style={styles.container}>
      <View>
        <ScrollableTabs tabs={tabs} onTabPress={handleTabPress} activeTab={activeTab} isLoading={isLoadingFaqs} />

        <View style={styles.content}>
          <Input
            value={searchText}
            leftIcon={<SearchIcon />}
            placeholder={t('common.search')}
            handleChange={handleSearchTextChange}
          />
        </View>
      </View>
      {isLoadingQuestions ? (
        <View style={styles.shimmerView}>
          {_.times(5, (i) => (
            <Shimmer key={i} style={styles.shimmerItem} height={65} />
          ))}
        </View>
      ) : (
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
                    {item.question}
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
                        {item.answer}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default InfoScreen;
