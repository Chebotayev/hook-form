import * as yup from 'yup';

export default yup.object().shape({
  town: yup.string().required('Required'),
  country: yup.string().required('Required'),
})