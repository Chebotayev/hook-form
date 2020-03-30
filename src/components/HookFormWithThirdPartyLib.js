import React, { useCallback } from 'react';

import { useForm, ErrorMessage, Controller as Field } from 'react-hook-form';
import { Input } from '@material-ui/core';
import schema from './validation';

let renderCounter = 0;

export default () => {
  renderCounter++;

  const onSubmit = useCallback((values) => console.log(renderCounter), [])

  const { control, errors, handleSubmit } = useForm({
    defaultValues: {
      town: '',
      country: '',
    },
    validationSchema: schema,
  });


  return (<form onSubmit={handleSubmit(onSubmit)}>
    <Field
      name='town'
      control={control}
      as={Input}
    />
    {errors && errors.town && <span style={{ color: 'red' }}>{errors.town.message}</span>}
    <ErrorMessage errors={errors} name="town" />
    <Field
      control={control}
      name='country'
      as={Input}
    />
    {errors && errors.country && <span style={{ color: 'red' }}>{errors.country.message}</span>}
    <ErrorMessage errors={errors} name="country">{({ message }) => <span>{message}</span>}</ErrorMessage>
    <button type='submit'>submit</button>
  </form>)
}