import * as yup from 'yup'

export const registerValidationSchema= yup.object().shape({
    phone: yup
    .string()
    .min(10,'El celular debe tener 10 caracteres')
    .max(10,'El celular debe tener 10 caracteres')
    .required('El celular es requerido'),
    password: yup
    .string()
    .min(5,'La contraseña debe tener 5 caracteres')
    .required('La contraseña es requerida'),
    name:yup.string().min(5,'El nombre de tener 5 caracteres').required('el Nombre es requerido'),
    secondPhone:yup.string()
    .min(10,'El celular debe tener 10 caracteres')
    .max(10,'El celular debe tener 10 caracteres'),
    RepeatPassword:yup.string()
    .min(5,'La contraseña debe tener 5 caracteres')
    .oneOf([yup.ref('password'), null], "Las contraseñas no coinciden")
    .required('La contraseña es requerida'),
})