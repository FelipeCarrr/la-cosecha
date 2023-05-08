import * as yup from 'yup'

export const loginValidationSchema= yup.object().shape({
    phone: yup
    .string()
    .min(10,'El celular debe tener 10 caracteres')
    .max(10,'El celular debe tener 10 caracteres')
    .required('El celular es requerido'),
    password: yup
    .string()
    .min(5,'La contraseña debe tener 5 caracteres')
    .required('La contraseña es requerida')  
})