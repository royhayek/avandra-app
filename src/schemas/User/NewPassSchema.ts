import * as Yup from 'yup';

export const newPassSchema = Yup.object().shape({
  currentPassword: Yup.string().min(8).required('Current Password is required'),
  password: Yup.string().min(8).required('New Password is required'),
  confPassword: Yup.string().min(8).required('Password Confirmation is required')
});
