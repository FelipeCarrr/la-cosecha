import * as yup from 'yup'

export const merchantValidationSchema= yup.object().shape({
    nameBussines:yup.string(),
    name:yup.string('El nombre es requerido'),
    phone:yup.string()
    .min(10,'El celular debe tener 10 caracteres')
    .max(10,'El celular debe tener 10 caracteres')
    .required('El celular es requerido'),
})