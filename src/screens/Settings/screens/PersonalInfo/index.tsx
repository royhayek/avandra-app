// Packages
import _ from 'lodash';
import React, { useCallback, useState, useRef } from 'react';

// Components
import { Formik, FormikProps } from 'formik';
import Input from '@shared/components/Input';
import Picker from '@shared/components/Picker';
import { ScrollView, View } from 'react-native';
import RegularButton from '@shared/components/Buttons/Regular';
import { DownChevron, MessageIcon } from '@shared/assets/icons';
import { AvatarPlaceholderDark, AvatarPlaceholderLight } from '@shared/assets/images';
import CountryPicker, { Country, DARK_THEME, DEFAULT_THEME } from 'react-native-country-picker-modal';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { updateProfileAction } from '@redux/user/thunks';
import { selectUser, selectUserSubmitting } from '@redux/user/slice';
import { profileSchema } from 'src/schemas/User/ProfileSchema';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { ProfileFormValuesProps } from '@shared/types/ProfileFormProps';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

// Component
const PersonalInfoScreen = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const user = useAppSelector(selectUser);
  const isSubmitting = useAppSelector(selectUserSubmitting);
  const { _id, name, email, country, gender } = user;

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const genderPickerRef = useRef<BottomSheetMethods>(null);
  const formRef = useRef<FormikProps<ProfileFormValuesProps> | null>(null);

  const [isOpenCountryPicker, setIsOpenCountryPicker] = useState(false);

  const formInitialValues = { _id, name, email, country, gender };

  // Callbacks
  const handleOpenGenderPicker = useCallback(() => genderPickerRef.current?.expand(), []);

  const handleCloseGenderPicker = useCallback(() => genderPickerRef.current?.close(), []);

  const handleOpenCountryPicker = useCallback(() => setIsOpenCountryPicker(true), []);

  const handleCloseCountryPicker = useCallback(() => setIsOpenCountryPicker(false), []);

  const handleGenderPress = useCallback(
    (gender: string) => {
      formRef.current?.setFieldValue('gender', gender);
      handleCloseGenderPicker();
    },
    [handleCloseGenderPicker]
  );

  const handleFormSubmit = useCallback(
    async (values: ProfileFormValuesProps) => {
      console.info('[handleFormSubmit] :: ', { values });
      const response = await dispatchThunk(updateProfileAction(values));

      if (response.payload.success) {
        dispatch(
          snackbarActions.showSnackbar({
            type: 'success',
            title: 'Success',
            message: 'Profile updated successfully.'
          })
        );
      } else {
        dispatch(
          snackbarActions.showSnackbar({
            type: 'error',
            title: 'Error',
            message: 'An error has occured, try again later.'
          })
        );
      }
    },
    [dispatch, dispatchThunk]
  );

  // Renderer vars
  const genderOptions = [
    { key: 'male', title: 'Male', onPress: handleGenderPress },
    { key: 'female', title: 'Female', onPress: handleGenderPress }
  ];

  // Renders
  const renderFooter = () => (
    <View style={commonStyles.footer}>
      <RegularButton
        fullWidth
        loading={isSubmitting}
        title={t('common.save')}
        onPress={() => formRef.current?.handleSubmit()}
      />
    </View>
  );

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
                </View>

                <Input
                  name="name"
                  value={values.name}
                  error={errors.name}
                  handleChange={handleChange('name')}
                  label={t('profile.full_name')}
                  placeholder={t('profile.full_name')}
                />

                <Input
                  name="email"
                  error={errors.email}
                  value={values.email}
                  label={t('profile.email')}
                  handleChange={handleChange('email')}
                  keyboardType="email-address"
                  placeholder={t('profile.email')}
                  leftIcon={<MessageIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
                />

                <Input
                  name="country"
                  error={errors.country}
                  value={values.country}
                  label={t('profile.country')}
                  placeholder={t('profile.country')}
                  onPressOut={handleOpenCountryPicker}
                  handleChange={handleChange('country')}
                  rightIcon={<DownChevron fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
                />

                <Input
                  name="gender"
                  editable={false}
                  error={errors.gender}
                  label={t('profile.gender')}
                  placeholder={t('profile.gender')}
                  onPressOut={handleOpenGenderPicker}
                  handleChange={handleChange('gender')}
                  value={_.find(genderOptions, { key: values.gender })?.title}
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

                <Picker sheetRef={genderPickerRef} options={genderOptions} />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>

      {renderFooter()}
    </View>
  );
};

export default PersonalInfoScreen;
