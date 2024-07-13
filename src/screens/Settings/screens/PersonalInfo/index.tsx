// Packages
import _ from 'lodash';
import { ms, s } from 'react-native-size-matters';
import React, { useCallback, useState, useRef } from 'react';

// Components
import Icon from '@shared/components/Icon';
import { Formik, FormikProps } from 'formik';
import Input from '@shared/components/Input';
import RegularButton from '@shared/components/Buttons/Regular';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import PasswordChangeModal from './components/PasswordChangeModal';
import { AvatarPlaceholderDark, AvatarPlaceholderLight } from '@shared/assets/images';
import CountryPicker, { Country, DARK_THEME, DEFAULT_THEME } from '@theankur/react-native-country-picker-modal';

// Utils
import { t } from '@app/i18n';
import makeStyles from './styles';
import { useAppTheme } from '@shared/assets/theme';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { updateProfileAction } from '@redux/user/thunks';
import { selectUser, selectUserSubmitting } from '@redux/user/slice';
import { profileSchema } from '@schemas/User/ProfileSchema';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { ProfileFormValuesProps } from '@shared/types/ProfileForm';

// Component
const PersonalInfoScreen = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const user = useAppSelector(selectUser);
  const isSubmitting = useAppSelector(selectUserSubmitting);
  const { _id, name, email, country } = user;

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const formRef = useRef<FormikProps<ProfileFormValuesProps> | null>(null);

  const [isOpenCountryPicker, setIsOpenCountryPicker] = useState(false);
  const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false);

  const formInitialValues = { _id, name, email, country };

  // Callbacks
  const handleOpenCountryPicker = useCallback(() => setIsOpenCountryPicker(true), []);

  const handleCloseCountryPicker = useCallback(() => setIsOpenCountryPicker(false), []);

  const handlePasswordPress = useCallback(() => {
    setIsOpenPasswordModal(true);
  }, []);

  const handleCancelChange = useCallback(() => {
    setIsOpenPasswordModal(false);
  }, []);

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
                  label={t('profile.full_name')}
                  handleChange={handleChange('name')}
                  placeholder={t('profile.full_name')}
                  leftIcon={
                    <Icon
                      size={ms(18)}
                      name="profile"
                      color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                    />
                  }
                />

                <Input
                  name="email"
                  error={errors.email}
                  value={values.email}
                  label={t('profile.email')}
                  handleChange={handleChange('email')}
                  keyboardType="email-address"
                  placeholder={t('profile.email')}
                  leftIcon={
                    <Icon
                      size={ms(18)}
                      name="message"
                      color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                    />
                  }
                />

                <Input
                  name="country"
                  error={errors.country}
                  value={values.country}
                  label={t('profile.country')}
                  placeholder={t('profile.country')}
                  onPressOut={handleOpenCountryPicker}
                  handleChange={handleChange('country')}
                  leftIcon={
                    <Icon
                      size={ms(18)}
                      name="location"
                      onPress={handleOpenCountryPicker}
                      color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                    />
                  }
                  rightIcon={
                    <Icon
                      size={ms(20)}
                      name="chevronDown"
                      onPress={handleOpenCountryPicker}
                      color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                    />
                  }
                />

                <Input
                  disabled
                  name="passowrd"
                  value="*********"
                  secureTextEntry
                  onPress={handlePasswordPress}
                  label={t('profile.password')}
                  placeholder={t('profile.password')}
                  leftIcon={
                    <Icon size={ms(18)} name="lock" color={theme.dark ? theme.colors.white : theme.colors.gray[900]} />
                  }
                  rightIcon={
                    <TouchableOpacity onPress={handlePasswordPress}>
                      <Icon
                        size={ms(18)}
                        name="edit"
                        color={theme.dark ? theme.colors.white : theme.colors.gray[900]}
                      />
                    </TouchableOpacity>
                  }
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

      {renderFooter()}

      <PasswordChangeModal visible={isOpenPasswordModal} onCancel={handleCancelChange} />
    </View>
  );
};

export default PersonalInfoScreen;
