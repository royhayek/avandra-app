// Packages
import _ from 'lodash';
import { ms, mvs } from 'react-native-size-matters';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Components
import Icon from '@shared/components/Icon';
import Input from '@shared/components/Input';
import Shimmer from '@shared/components/Shimmer';
import { Divider, Text } from 'react-native-paper';
import ScrollableTabs from '@shared/components/ScrollableTabs';
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

  const enabledFaqCategories = useMemo(() => _.filter(faqCategories, (category) => category.enabled), [faqCategories]);
  const enabledFaqQuestions = useMemo(() => _.filter(faqQuestions, (question) => question.enabled), [faqQuestions]);

  const [searchText, setSearchText] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string | undefined>(enabledFaqCategories[0]?._id ?? '');

  // Callbacks
  const handleTabPress = useCallback((tab: string) => setActiveTab(tab), []);

  const handleSearchTextChange = useCallback((text: string) => setSearchText(text), []);

  const handleQuestionPress = useCallback(
    (id: string) => setExpandedCategories(_.xor(expandedCategories, [id])),
    [expandedCategories]
  );

  const filteredData = useMemo(
    () =>
      _.filter(enabledFaqQuestions, (faq) => {
        const question = faq?.question;

        return _.includes(_.toLower(question), _.toLower(searchText));
      }),
    [enabledFaqQuestions, searchText]
  );

  // Effects
  useEffect(() => {
    dispatchThunk(getFaqCategoriesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeTab && !_.isEmpty(enabledFaqCategories)) {
      dispatchThunk(getFaqQuestionsAction(activeTab));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    if (!_.isEmpty(enabledFaqCategories)) setActiveTab(_.first(enabledFaqCategories)?._id);
  }, [enabledFaqCategories]);

  // Renderer Vars
  const tabs = _.map(enabledFaqCategories, (category) => ({
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
            placeholder={t('common.search')}
            leftIcon={<Icon name="search" />}
            handleChange={handleSearchTextChange}
          />
        </View>
      </View>
      {isLoadingQuestions ? (
        <View style={styles.shimmerView}>
          {_.times(5, (i) => (
            <Shimmer key={i} style={styles.shimmerItem} height={mvs(65)} />
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
                  <Icon
                    size={ms(20)}
                    name="chevronDown"
                    transform={[{ rotateX: isExpanded ? '180deg' : '0deg' }]}
                    color={theme.dark ? theme.colors.gray[200] : theme.colors.gray[700]}
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
