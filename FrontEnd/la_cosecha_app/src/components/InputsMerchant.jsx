import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { Text } from "react-native-paper";
import FormikInputValues from "./FormikInputValues";
import { merchantValidationSchema } from "../validationSchemas/merchant";
import StyledSelectDropdown from "./StyledSelectDropdown.jsx";
import StyledButton from "./StyledButton.jsx";
import saveRegisterUser from "../hooks/saveRegisterUser";
import saveRegisterUserPass from "../hooks/saveRegisterUserPass";
import saveRegisterUserAddres from "../hooks/saveRegisterAddressUser";

const styles=StyleSheet.create({
    style:{}
});

const kindStreet=["Calle","Carrera"];

const initialsValues ={
    nameBussines:'',
    name:'',
    phone:'',
    secondPhone:' ',
    name_domicile:'',
    kind_street:'',
    number_street:'',
    first_number_house:'',
    second_number_house:'',
    indication:'',
    password:''
}

const InputsMerchant=({style={},...props})=>{
    const InputStyles={
        ...styles.style,
        ...style
    }
    return(
            <Formik validationSchema={ merchantValidationSchema} initialValues={initialsValues} onSubmit={(async values => {
                const user=await saveRegisterUser(values,3);
                const pass = await saveRegisterUserPass(values, user.data);
                const address = await saveRegisterUserAddres(values, user.data);

                console.log(user);
            })}>
            {({handleSubmit,handleChange})=>{
                    return (
                        <View>
                            <FormikInputValues
                                label="Nombre Empresa"
                                name="nameBussines"
                                keyboardType="name-phone-pad"
                                returnKeyTap="next"
                            />
                            <FormikInputValues
                                label="Nombre Responsable"
                                name="name"
                                keyboardType="name-phone-pad"
                                returnKeyTap="next"
                            />
                            <FormikInputValues
                                label="Celular"
                                name="phone"
                                maxLength={10}
                                keyboardType="name-phone-pad"
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
                            <Text>Nombre del domicilio</Text>
                            <FormikInputValues
                                name="name_domicile"
                                placeholder="Ej: Mi Casa"
                                keyboardType="name-phone-pad"
                                returnKeyTap="next"
                            />
                            <Text>Tipo de Calle</Text>
                            <StyledSelectDropdown 
                                data={kindStreet} 
                                name="kind_street"
                                onSelect={handleChange("kind_street")}
                            />
                            <Text>Dirección</Text>
                            <View style={{flexDirection:'row'}}>
                                <FormikInputValues
                                    name="kind_street"
                                    disabled={true}
                                    style={{width:'30%'}}
                                />
                                <FormikInputValues
                                name="number_street"
                                maxLength={3}
                                keyboardType="name-phone-pad"
                                returnKeyTap="next"
                                style={{width:'20%'}}
                                />
                                <Text variant="headlineLarge" style={{alignSelf:"center",marginLeft:1,marginRight:1}}>#</Text>
                                <FormikInputValues
                                name="first_number_house"
                                maxLength={3}
                                keyboardType="name-phone-pad"
                                returnKeyTap="next"
                                style={{width:'20%'}}
                                />
                                <Text variant="headlineLarge" style={{alignSelf:"center",marginLeft:1,marginRight:1}}>-</Text>
                                <FormikInputValues
                                name="second_number_house"
                                maxLength={3}
                                keyboardType="name-phone-pad"
                                returnKeyTap="next"
                                style={{width:'20%'}}
                                />
                            </View>
                            <Text>Indicación adicional</Text>
                            <FormikInputValues
                                name="indication"
                                placeholder="Ej: Al lado de ------"
                                maxLength={100}
                                multiline={true}
                                numberOfLines={4}
                                keyboardType="name-phone-pad"
                                returnKeyTap="ok"
                            />
                            
                            <StyledButton style={{marginTop:10}} onPress={handleSubmit} title={'Registrarme'}/>
                        </View>
                     )
            }}
            </Formik>
    )
}

export default InputsMerchant 