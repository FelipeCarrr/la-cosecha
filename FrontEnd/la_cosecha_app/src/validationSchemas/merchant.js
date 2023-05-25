import * as yup from 'yup'

export const merchantValidationSchema= yup.object().shape({
    nameBussines:yup.string(),
    nameBussinesPerson:yup.string('El nombre es requerido'),
    nameBussinesPhone:yup.string()
    .min(10,'El celular debe tener 10 caracteres')
    .max(10,'El celular debe tener 10 caracteres')
    .required('El celular es requerido'),
})