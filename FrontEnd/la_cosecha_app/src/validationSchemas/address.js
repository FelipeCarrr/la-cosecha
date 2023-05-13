import * as yup from 'yup'

export const addressValidationSchema= yup.object().shape({


    name_domicile:yup
        .string()
        .required('El nombre es requerido'),
    kind_street:yup
        .string('')
        .required(''),
    number_street:yup
        .string()
        .required(''),
    first_number_house:yup
        .string()
        .required(''),
    second_number_house:yup
        .string()
        .required(''),
    indication:yup.string()

})