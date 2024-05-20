// Packages
import _ from 'lodash';
import React, { useCallback, useRef } from 'react';

// Components
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Input from '@shared/components/Input';
import { Formik, FormikProps } from 'formik';
import Picker from '@shared/components/Picker';
import { DownChevron } from '@shared/assets/icons';
import RegularButton from '@shared/components/Buttons/Regular';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Utilities
import { t } from '@app/i18n';
import makeStyles from './styles';
import { selectUserId } from '@redux/user/slice';
import { useAppTheme } from '@shared/assets/theme';
import { snackbarActions } from '@redux/snackbar/slice';
import { submitMessageAction } from '@redux/settings/thunks';
import { selectSettingsLoading } from '@redux/settings/slice';
import { contactSchema } from 'src/schemas/Contact/ContactSchema';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '@app/store';

// Interfaces
import { TranslateOptions } from 'i18n-js';
import { MessageProps } from '@shared/types/Message';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface FaqScreenProps {}

// Component
const _t = (key: string, options?: TranslateOptions) => t(`contact.${key}`, options);

const ContactScreen: React.FC<FaqScreenProps> = () => {
  // Redux
  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  const userId = useAppSelector(selectUserId);
  const loading = useAppSelector(selectSettingsLoading);

  // Statics
  const theme = useAppTheme();
  const styles = makeStyles();

  const typePickerRef = useRef<BottomSheetMethods>(null);
  const formRef = useRef<FormikProps<MessageProps> | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const formInitialValues: MessageProps = { type: 'inquiry', message: '' };

  // Callbacks
  const handleOpenTypePicker = useCallback(() => typePickerRef.current?.expand(), []);

  const handleCloseTypePicker = useCallback(() => typePickerRef.current?.close(), []);

  const handleTypePress = useCallback(
    (type: string) => {
      formRef.current?.setFieldValue('type', type);
      handleCloseTypePicker();
    },
    [handleCloseTypePicker]
  );

  const handleFormSubmit = useCallback(
    async (values: MessageProps) => {
      const response = await dispatchThunk(
        submitMessageAction({ user: userId, message: values.message, type: values.type })
      );

      if (response.payload.success) {
        dispatch(
          snackbarActions.showSnackbar({
            type: 'success',
            title: 'Success',
            message: 'Message sent successfully.'
          })
        );

        formRef.current?.resetForm();
        navigation.goBack();
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
    [dispatch, dispatchThunk, navigation, userId]
  );

  // Renderer Vars
  const messageTypeOptions = [
    { key: 'inquiry', title: _t('inquiry'), onPress: handleTypePress },
    { key: 'complaint', title: _t('complaint'), onPress: handleTypePress },
    { key: 'suggestion', title: _t('suggestion'), onPress: handleTypePress }
  ];

  // Renderers
  return (
    <View style={styles.container}>
      <Text variant="xLarge" style={styles.title}>
        {_t('reach_out_to_us')}
      </Text>

      <Formik
        innerRef={formRef}
        onSubmit={handleFormSubmit}
        validationSchema={contactSchema}
        initialValues={formInitialValues}>
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <Input
              name="type"
              editable={false}
              label={_t('type')}
              error={errors.type}
              placeholder={_t('type')}
              onPressOut={handleOpenTypePicker}
              handleChange={handleChange('type')}
              value={_.find(messageTypeOptions, { key: values.type })?.title}
              rightIcon={<DownChevron fill={theme.dark ? theme.colors.white : theme.colors.gray[900]} />}
            />

            <Input
              multiline
              name="message"
              numberOfLines={5}
              label={_t('message')}
              error={errors.message}
              value={values.message}
              placeholder={_t('message')}
              inputStyle={styles.message}
              handleChange={handleChange('message')}
            />

            <RegularButton
              loading={loading}
              onPress={handleSubmit}
              title={t('common.submit')}
              style={styles.submitButton}
            />

            <Picker sheetRef={typePickerRef} options={messageTypeOptions} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ContactScreen;
