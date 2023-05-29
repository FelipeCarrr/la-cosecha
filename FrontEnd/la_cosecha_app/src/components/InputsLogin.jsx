import React,{useState} from "react";
import { Formik} from "formik";
import {View} from "react-native";
import FormikInputValues from "./FormikInputValues.jsx";
import StyledButton from "./StyledButton.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";
import login from "../hooks/login.js";
import loginStorage from "../hooks/loginStorage.js";
import AlertProgress from "./AlertProgress.jsx";
import AlertSuccess from "./AlertSuccess.jsx";
import theme from "../theme";

const initialsValues ={
    phone:'',
    password:''
}



export default function InputsLogin({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant}){
    const [progress, setProgresss]=useState(false)
    const [succes, setSuccess]=useState(false);
    const [res,SetRes]=useState(null);

    const hideAlertSuccess=()=>{
        setSuccess(false);
    }

    return (
            <Formik validationSchema={loginValidationSchema} initialValues={initialsValues} onSubmit={( async values => {
                setProgresss(true);
                const log= await login(values);
                SetRes(log.message);
                if(log.message=="Usuario logueado"){
                    const login1 = await loginStorage(log.data.token,log.data.id,log.data.rol.rol_id,{isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant})
                }else{
                    setProgresss(false);
                    setSuccess(true);
                }
                console.log(log)
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
                            <StyledButton onPress={()=>{
                                handleSubmit();
                            }} title={'Iniciar Sesión'}/>
                            {progress?<AlertProgress showAlert={progress}/>:null}
                            <AlertSuccess showAlert={succes} 
                                title={res}
                                onConfirmPressed={() => {
                                    hideAlertSuccess();
                                }}
                                onDismiss={()=>{
                                    hideAlertSuccess();
                                }}
                            />
                        </View>
                    )
                }}
            </Formik>
    )
}