import React, { useEffect, useState } from "react";
import {  StyleSheet, View } from "react-native";
import {Image} from 'expo-image'
import { Formik } from "formik";
import FormikInputValues from "./FormikInputValues";
import { Button, Text } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import ModalImagePicker from "./ModalImagePicker";
import Ripple from "react-native-material-ripple";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import StyledButton from "./StyledButton";
import theme from "../theme";
import uploadPhoto from "../hooks/firebaseConfig";
import saveProductLot from "../hooks/saveProductLot";



const InputsProductRegister =()=>{
     
    const [image,setImage]=useState('https://placehold.co/300');
    const [isModalVisible, setIsModalVisible] = useState(false);

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
    const initialValues={
        productName:'',
        productPrice:'',
        productCant:'',
        productDescription:''
    }
    return(
        <Formik initialValues={initialValues} onSubmit={( values=>{
            uploadPhoto(image,values);

            
            // saveProductLot(values,URL);
            // console.log(product);
        })}>
            {({handleChange,handleSubmit})=>{
                return(
                    <View>
                        <FormikInputValues
                            label="Nombre Producto"
                            name="productName"
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
                        <View style={{flexDirection:'row',width:'100%'}}>
                            <FormikInputValues
                                label="Precio"
                                name="productPrice"
                                keyboardType="numeric"
                                returnKeyTap="next"
                                style={{width:'83%'}}
                            />
                            <Text variant="headlineLarge" style={{alignSelf:"center",marginLeft:1,marginRight:1}}>/kg</Text>
                        </View>
                            <FormikInputValues
                                label="Cantidad en Kg"
                                name="productCant"
                                keyboardType="numeric"
                                returnKeyTap="next"
                            />
                            <FormikInputValues
                                name="productDescription"
                                placeholder="Descripción"
                                maxLength={255}
                                multiline={true}
                                numberOfLines={4}
                                keyboardType="name-phone-pad"
                                returnKeyTap="ok"
                            />
                            <StyledButton onPress={handleSubmit} title={'Publicar'}/>
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
                    </View>
                    
                )
            }}
        </Formik>
    )
}

const styles=StyleSheet.create({
    ripple:{
        height:120,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-15
    }
})

export default InputsProductRegister

