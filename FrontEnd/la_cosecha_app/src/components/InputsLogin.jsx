import React from "react";
import { Formik} from "formik";
import {View} from "react-native";
import FormikInputValues from "./FormikInputValues.jsx";
import StyledButton from "./StyledButton.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";
import theme from "../theme";

const initialsValues ={
    phone:'',
    password:''
}



export default function InputsLogin(){
    return (
            <Formik validationSchema={loginValidationSchema} initialValues={initialsValues} onSubmit={values => console.log(values)}>
                {({handleSubmit})=>{
                    return (
                        <View>
                            <FormikInputValues
                                label="Celular"
                                name="phone"
                                maxLength={10}
                                keyboardType="numeric"
                                returnKeyTap="next"
                            />
                            <FormikInputValues  
                                label="Contraseña"
                                name="password"
                                maxLength={20}
                                keyboardType="name-phone-pad"
                                autoCapitalize="none"
                                returnKeyTap="search"
                                secureTextEntry
                                />
                            <StyledButton onPress={handleSubmit} title={'Iniciar Sesión'}/>
                        </View>
                    )
                }}
            </Formik>
    )
}