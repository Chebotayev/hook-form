import React, { useCallback } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import schema from './validation';

let renderCounter = 0;

export default () => {
  renderCounter++;

  const onSubmit = useCallback((values) => console.log(renderCounter), [])

  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      town: '',
      country: '',
    },
    validationSchema: schema,
  });


  return (<form onSubmit={handleSubmit(onSubmit)}>
    <input name='town' ref={register} />
    {errors && errors.town && <span style={{ color: 'red' }}>{errors.town.message}</span>}
    <ErrorMessage errors={errors} name="town" />
    <input name='country' ref={register} />
    {errors && errors.country && <span style={{ color: 'red' }}>{errors.country.message}</span>}
    <ErrorMessage errors={errors} name="country">{({ message }) => <span>{message}</span>}</ErrorMessage>
    <button type='submit'>submit</button>
  </form>)
}