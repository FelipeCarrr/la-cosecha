import React,{useState} from "react";
import { Formik} from "formik";
import {View} from "react-native";
import { Text } from "react-native-paper";
import FormikInputValues from "./FormikInputValues.jsx";
import StyledButton from "./StyledButton.jsx";
import StyledSelectDropdown from "./StyledSelectDropdown.jsx";
import saveRegisterUser from "../hooks/saveRegisterUser.js";
import saveRegisterUserPass from "../hooks/saveRegisterUserPass.js";
import saveRegisterUserAddres from "../hooks/saveRegisterAddressUser.js";
import { addressValidationSchema } from "../validationSchemas/address.js";
import loginStorage from "../hooks/loginStorage.js";
import AlertProgress from "./AlertProgress.jsx";
import AlertSuccess from "./AlertSuccess.jsx";


const kindStreet=["Calle","Carrera"];

const initialsValues ={
    name_domicile:'',
    kind_street:'',
    number_street:'',
    first_number_house:'',
    second_number_house:'',
    indication:''
}


export default function InputsDomicile({dataUser, isLogin, setIsLogin, isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant}){
    const [progress, setProgresss]=useState(false)
    const [succes, setSuccess]=useState(false);
    const [res,setRes]=useState(null);

    const hideAlertSuccess=()=>{
        setSuccess(false);
    }

    return (
        <Formik  validationSchema={addressValidationSchema} initialValues={initialsValues} onSubmit={(async values=>{
            setProgresss(true);
            const user= await saveRegisterUser(dataUser,1);
            const pass=await saveRegisterUserPass(dataUser,user.data);
            const address=await saveRegisterUserAddres(values,user.data);
            setRes(address.message);
            if(address.message=='Registro creado'){
                const login=await loginStorage(address.data.token,user.data,1,{isLogin,setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant});
            }else{
                setProgresss(false);
                setSuccess(true);
            }

            console.log(address);
            })}>
            {({handleChange,handleSubmit})=>{
                return (
                    <View>
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
                        
                        <StyledButton style={{marginTop:10}} onPress={()=>{handleSubmit()}} title={'Registrarme'}/>
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