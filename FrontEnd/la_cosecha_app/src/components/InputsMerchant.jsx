import React from "react";
import {useState, useEffect} from "react";
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
import * as ImagePicker from 'expo-image-picker';
import ModalImagePicker from "./ModalImagePicker";
import {Image} from 'expo-image'
import Ripple from "react-native-material-ripple";
import theme from "../theme";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import uploadPhotoMerchant from "../hooks/uploadPhotoMerchant";
import AlertProgress from "./AlertProgress";
import AlertSuccess from "./AlertSuccess";

const styles=StyleSheet.create({
    
        ripple:{
            height:120,
            width:120,
            justifyContent:'center',
            alignItems:'center',
            marginTop:-15
        }
    
});

const kindStreet=["Calle","Carrera"];

const initialsValues ={
    nameBussines:'',
    name:'',
    phone:'',
    secondPhone:null,
    name_domicile:'',
    kind_street:'',
    number_street:'',
    first_number_house:'',
    second_number_house:'',
    indication:'',
    password:''
}

const InputsMerchant=({style={},...props})=>{
    

    const [image,setImage]=useState('https://placehold.co/300');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDisabled, setIsDisabled]=useState(false);
    const [isShowAlertProgress, setIsShowAlertProgress]=useState(false);
    const [isShowAlertSuccess, setIsShowAlertSuccess]=useState(false);
    const [res, setRes]=useState(null);

    const onModalClose = () => {
        setIsModalVisible(false);
      };
    const activeModal=()=>{
        setIsModalVisible(true);
    }
    const selectImage=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            aspect:[250,250]
          });
      
          if (!result.canceled) {
            console.log(result);
            
            setImage(result.assets[0].uri);
          } else {
            alert('You did not select any image.');
          }
    }
    const takePhoto=async()=>{
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
            aspect:[300,300]
          });
      
          if (!result.canceled) {
            console.log(result);
            setImage(result.assets[0].uri);
          } else {
            alert('You did not select any image.');
          }
    }

    const showAlertProgress=()=>{
        setIsShowAlertProgress(true);
        return;
    }

    const hideAlertProgress=()=>{
        setIsShowAlertProgress(false);
    }

    const ShowAlertSuccess=async ()=>{
        setIsShowAlertSuccess(true);
        return;
    }

    const hideAlertSuccess=()=>{
        setIsShowAlertSuccess(false);
    }


    return(
            <Formik validationSchema={ merchantValidationSchema} initialValues={initialsValues} onSubmit={(async values => {
                    setIsShowAlertProgress(true);
                    await uploadPhotoMerchant(image,values,{setIsDisabled,setIsShowAlertProgress,setIsShowAlertSuccess,setRes});
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
                            <View style={{backgroundColor: '#fff',width: '100%',height: 250,}}>
                                <Image 
                                    style={{width: 250,height: 250,borderRadius: 20,alignSelf:'center',}} 
                                    source={{uri: image}}
                                    contentFit="contain"
                                    transition={1000}
                                />
                                <Ripple
                                    style={{
                                        height:40,
                                        width:40,
                                        marginTop:-45,
                                        marginLeft:230
                                    }}
                                    rippleDuration={800}
                                    rippleContainerBorderRadius={20}
                                    onPress={activeModal}
                                >
                                    <View style={{
                                        backgroundColor:theme.colors.primary,
                                        flexDirection:'row',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        height:40,
                                        width:40,
                                        borderRadius:20,
                                        }}
                                    >
                                        <Entypo name="edit" size={24} color="#fff" />
                                    </View>
                                </Ripple>
                            </View>
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
                            
                                <StyledButton style={{marginTop:10}} onPress={()=>{    
                                    setIsDisabled(true);
                                    handleSubmit()
                                }} 
                                title={'Registrar mercader'} disabled={isDisabled}/>
                            <ModalImagePicker isVisible={isModalVisible} onClose={onModalClose}>
                            
                                <Ripple
                                    style={styles.ripple}
                                    rippleDuration={800}
                                    rippleContainerBorderRadius={20}
                                    onPress={()=>{
                                        onModalClose();
                                        takePhoto();
                                    }}
                                >
                                    <Feather name="camera" size={44} color="white" />
                                    <Text style={{color:'#fff',fontWeight:'bold'}} variant="titleLarge">Camara</Text>
                                </Ripple>
                                <Ripple
                                    style={styles.ripple}
                                    rippleDuration={800}
                                    rippleContainerBorderRadius={20}
                                    onPress={()=>{
                                        onModalClose();
                                        selectImage();
                                    }}
                                >
                                    <FontAwesome name="photo" size={44} color="white" />
                                    <Text style={{color:'#fff',fontWeight:'bold'}} variant="titleLarge">Galleria</Text>
                                </Ripple>
                            
                            </ModalImagePicker>
                            {isShowAlertProgress?<AlertProgress showAlert={isShowAlertProgress}/>:null}
                            <AlertSuccess showAlert={isShowAlertSuccess} 
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



export default InputsMerchant 