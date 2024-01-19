// Packages
import _ from 'lodash';
import React, { useCallback, useMemo, useState, useRef } from 'react';

// Components
import { Text } from 'react-native-paper';
import { Formik, FormikProps, useFormik } from 'formik';
import Input from '@shared/components/Input';
import FastImage from 'react-native-fast-image';
import BackButton from '@shared/components/Buttons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AvatarPlaceholderDark, AvatarPlaceholderLight } from '@shared/assets/images';
import RegularButton from '@shared/components/Buttons/Regular';
import SquareEditIcon from '@shared/assets/icons/SquareEditIcon';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import CountryPicker, { Country, DARK_THEME, DEFAULT_THEME } from 'react-native-country-picker-modal';

// Utils
import makeStyles from './styles';
import makeCommonStyles from '@shared/assets/styles';
import { snackbarActions } from '@redux/snackbar/slice';
import { authActions, getAuth } from '@redux/auth/slice';
import { updateProfileAction } from '@redux/user/thunks';
import { getUser, getUserLoading } from '@redux/user/slice';
import { profileSchema } from 'src/schemas/User/ProfileSchema';
import { DownChevron, MessageIcon } from '@shared/assets/icons';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { useAppTheme } from '@shared/assets/theme';
import { ProfileFormValues } from '@shared/types/ProfileFormProps';

// Component
const Profile = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const loading = useAppSelector(getUserLoading);
  const user = useAppSelector(getUser);
  const { _id, name, email } = user;

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const commonStyles = makeCommonStyles(theme);

  const formRef = useRef<FormikProps<ProfileFormValues> | null>(null);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenCountryPicker, setIsOpenCountryPicker] = useState(false);

  const formInitialValues = { _id, name, email, country: '' };

  // Callbacks
  const handleEditPicture = useCallback(() => {}, []);

  const handleOpenCountryPicker = useCallback(() => setIsOpenCountryPicker(true), []);

  const handleCloseCountryPicker = useCallback(() => setIsOpenCountryPicker(false), []);

  const handleExplorePress = useCallback(() => dispatch(authActions.update({ authenticated: true })), []);

  const handleFormSubmit = useCallback(async (values: ProfileFormValues) => {
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
  }, []);

  // Renderer vars

  // Renders
  const renderFooter = useMemo(
    () => (
      <View style={commonStyles.footer}>
        <RegularButton
          fullWidth
          loading={loading}
          title={isSuccess ? 'Explore Destinations' : 'Continue'}
          onPress={() => (isSuccess ? handleExplorePress() : formRef.current?.handleSubmit())}
        />
      </View>
    ),
    [isSuccess]
  );

  if (isSuccess) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.successContainer}>
          <FastImage source={require('@shared/assets/images/SuccessProfileLogo.png')} style={styles.successLogo} />
          <Text variant="h3" style={styles.title}>
            You're all set!
          </Text>
          <Text variant="xLarge" style={styles.subtitle}>
            Congratulations! You're now part of the Tripify community. Your personalized travel experiences await.
          </Text>
        </View>

        {renderFooter}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text variant="h3" style={styles.title}>
            Add a personal touch 👤
          </Text>
          <Text variant="xLarge">To enhance your travel journey, we'd love to know more about you.</Text>

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
                  label="Full Name"
                  value={values.name}
                  error={errors.name}
                  placeholder="Full Name"
                  handleChange={handleChange}
                />

                <Input
                  name="email"
                  label="Email"
                  error={errors.email}
                  value={values.email}
                  placeholder="Email"
                  handleChange={handleChange}
                  keyboardType="email-address"
                  leftIcon={<MessageIcon fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
                />

                <Input
                  name="country"
                  label="Country"
                  placeholder="Country"
                  error={errors.country}
                  rightIcon={<DownChevron fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
                  value={values.country}
                  handleChange={handleChange}
                  onFocus={handleOpenCountryPicker}
                />

                {isOpenCountryPicker && (
                  <CountryPicker
                    countryCode="AD"
                    withFilter
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
    </SafeAreaView>
  );
};

export default Profile;
