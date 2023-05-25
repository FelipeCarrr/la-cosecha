import React from "react";
import { Formik} from "formik";
import {View} from "react-native";
import FormikInputValues from "./FormikInputValues.jsx";
import StyledButton from "./StyledButton.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";
import login from "../hooks/login.js";
import loginStorage from "../hooks/loginStorage.js";
import theme from "../theme";

const initialsValues ={
    phone:'',
    password:''
}



export default function InputsLogin({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant}){
    return (
            <Formik validationSchema={loginValidationSchema} initialValues={initialsValues} onSubmit={( async values => {
                const log= await login(values);
                const login1 = await loginStorage(log.data.token,log.data.id,log.data.rol.rol_id,{isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant})
                console.log(login1)
                })}>
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