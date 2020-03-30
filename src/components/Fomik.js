import React from 'react';
import { useFormik } from 'formik';
import schema from './validation';

let renderCounter = 0;

export default () => {
  renderCounter++;

  const formik = useFormik({
    validationSchema: schema,
    initialValues: { town: '', country: '' },
    onSubmit: () => console.log(renderCounter),
  })

  return (<form onSubmit={formik.handleSubmit}>
    <input name='town' onChange={formik.handleChange} values={formik.values.town}/>
    {formik.errors.town && <span style={{color: 'red'}}>{formik.errors.town}</span>}
    <input name='country' onChange={formik.handleChange}  values={formik.values.country}/>
    {formik.errors.country && <span style={{color: 'red'}}>{formik.errors.country}</span>}
    <button type='submit'>submit</button>
  </form>)
}