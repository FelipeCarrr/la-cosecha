import React from "react";
import { Formik} from "formik";
import {View} from "react-native";
import FormikInputValues from "./FormikInputValues.jsx";
import StyledButton from "./StyledButton.jsx";
import { registerValidationSchema } from "../validationSchemas/register.js";
import { useNavigation } from "@react-navigation/native";


const initialsValues ={
    name:'',
    phone:'',
    secondPhone:'',
    password:'',
    RepeatPassword:''
}


export default function InputsRegister(){
    const navigation=useNavigation();
    return (
        <Formik validationSchema={registerValidationSchema} initialValues={initialsValues} onSubmit={(values)=>{
            navigation.navigate('registerAddressInitial',{
                name:values.name,
                phone:values.phone,
                secondPhone:values.secondPhone,
                password:values.password,
            });
            }}>
            {({handleSubmit})=>{
                return (
                    <View>
                        <FormikInputValues
                            label="Nombre"
                            name="name"
                            keyboardType="name-phone-pad"
                            returnKeyTap="next"
                        />
                        <FormikInputValues
                            label="Celular"
                            name="phone"
                            maxLength={10}
                            keyboardType="numeric"
                            returnKeyTap="next"
                        />
                        <FormikInputValues
                            label="Celular Secundario (opcional)"
                            name="secondPhone"
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
                            secureTextEntry
                        />
                        <FormikInputValues  
                            label="Repetir Contraseña"
                            name="RepeatPassword"
                            maxLength={20}
                            keyboardType="name-phone-pad"
                            autoCapitalize="none"
                            secureTextEntry
                        />
                        <StyledButton style={{marginTop:10}} onPress={handleSubmit} title={'Registrarme'}/>   
                    </View>               
                    )
            }}
        </Formik>
    )
}