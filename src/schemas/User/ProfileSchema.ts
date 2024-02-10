import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  country: Yup.string().required('Country is required'),
  // gender: Yup.string().required('Gender is required')
});
