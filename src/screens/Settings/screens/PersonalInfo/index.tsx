// Packages
import _ from 'lodash';
import React, { useCallback, useMemo, useState, useRef } from 'react';

// Components
import { Text } from 'react-native-paper';
import { Formik, FormikProps } from 'formik';
import Input from '@shared/components/Input';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegularButton from '@shared/components/Buttons/Regular';
import SquareEditIcon from '@shared/assets/icons/SquareEditIcon';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { AvatarPlaceholderDark, AvatarPlaceholderLight } from '@shared/assets/images';
import CountryPicker, { Country, DARK_THEME, DEFAULT_THEME } from 'react-native-country-picker-modal';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { updateProfileAction } from '@redux/user/thunks';
import { getUser, getUserLoading } from '@redux/user/slice';
import { profileSchema } from 'src/schemas/User/ProfileSchema';
import { DownChevron, MessageIcon } from '@shared/assets/icons';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import { ProfileFormValues } from '@shared/types/ProfileFormProps';

// Component
const PersonalInfoScreen = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const loading = useAppSelector(getUserLoading);
  const user = useAppSelector(getUser);
  const { _id, name, email, country } = user;

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const formRef = useRef<FormikProps<ProfileFormValues> | null>(null);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenCountryPicker, setIsOpenCountryPicker] = useState(false);

  const formInitialValues = { _id, name, email, country };

  // Callbacks
  const handleEditPicture = useCallback(() => {}, []);

  const handleOpenCountryPicker = useCallback(() => setIsOpenCountryPicker(true), []);

  const handleCloseCountryPicker = useCallback(() => setIsOpenCountryPicker(false), []);

  const handleFormSubmit = useCallback(
    async (values: ProfileFormValues) => {
      console.info('[handleFormSubmit] :: ', { values });
      const response = await dispatchThunk(updateProfileAction(values));

      if (response.payload.success) setIsSuccess(true);
      else
        dispatch(
          snackbarActions.showSnackbar({
            type: 'error',
            title: 'Error',
            message: 'An error has occured, try again later.'
          })
        );
    },
    [dispatch, dispatchThunk]
  );

  // Renderer vars

  // Renders
  const renderFooter = useMemo(
    () => (
      <View style={commonStyles.footer}>
        <RegularButton
          fullWidth
          loading={loading}
          title={t('common.save')}
          onPress={() => formRef.current?.handleSubmit()}
        />
      </View>
    ),
    [commonStyles.footer, loading]
  );

  if (isSuccess) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.successContainer}>
          <FastImage source={require('@shared/assets/images/SuccessProfileLogo.png')} style={styles.successLogo} />
          <Text variant="h3" style={styles.title}>
            {t('profile.success_title')}
          </Text>
          <Text variant="xLarge" style={styles.subtitle}>
            {t('profile.success_desc')}
          </Text>
        </View>

        {renderFooter}
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Formik
            innerRef={formRef}
            onSubmit={handleFormSubmit}
            validationSchema={profileSchema}
            initialValues={formInitialValues}>
            {({ handleChange, values, errors }) => (
              <View>
                <View style={styles.avatarContainer}>
                  {theme.dark ? <AvatarPlaceholderDark /> : <AvatarPlaceholderLight />}

                  <TouchableOpacity onPress={handleEditPicture} style={styles.editIconButton}>
                    <SquareEditIcon />
                  </TouchableOpacity>
                </View>

                <Input
                  name="name"
                  value={values.name}
                  error={errors.name}
                  handleChange={handleChange}
                  label={t('profile.full_name')}
                  placeholder={t('profile.full_name')}
                />

                <Input
                  name="email"
                  error={errors.email}
                  value={values.email}
                  label={t('profile.email')}
                  handleChange={handleChange}
                  keyboardType="email-address"
                  placeholder={t('profile.email')}
                  leftIcon={<MessageIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
                />

                <Input
                  name="country"
                  error={errors.country}
                  value={values.country}
                  handleChange={handleChange}
                  label={t('profile.country')}
                  onFocus={handleOpenCountryPicker}
                  placeholder={t('profile.country')}
                  rightIcon={<DownChevron fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
                />

                {isOpenCountryPicker && (
                  <CountryPicker
                    withFilter
                    countryCode="AD"
                    visible={isOpenCountryPicker}
                    onClose={handleCloseCountryPicker}
                    onSelect={(country: Country) => formRef.current?.setFieldValue('country', country.name)}
                    theme={{ ...(theme.dark ? DARK_THEME : DEFAULT_THEME), backgroundColor: theme.colors.background }}
                  />
                )}
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>

      {renderFooter}
    </View>
  );
};

export default PersonalInfoScreen;
