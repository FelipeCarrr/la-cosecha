import React from "react";
import { Formik} from "formik";
import {Text,View} from "react-native";
import FormikInputValues from "./FormikInputValues.jsx";
import StyledButton from "./StyledButton.jsx";


const initialsValues ={
    name_domicile:'',
    kind_street:'',
    number_street:'',
    first_number_house:'',
    second_number_house:'',
    indication:''
}


export default function InputsDomicile(){
    return (
        <Formik  initialValues={initialsValues} onSubmit={(values=>console.log(values))}>
            {({handleSubmit})=>{
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
                        <Text>Dirección</Text>
                        <View style={{flexDirection:'row'}}>
                            <FormikInputValues
                                name="kind_street"
                                disabled={true}
                            />
                            <FormikInputValues
                            name="number_street"
                            maxLength={3}
                            keyboardType="name-phone-pad"
                            returnKeyTap="next"
                            />
                            <Text>#</Text>
                            <FormikInputValues
                            name="first_number_house"
                            maxLength={3}
                            keyboardType="name-phone-pad"
                            returnKeyTap="next"
                            />
                            <Text>-</Text>
                            <FormikInputValues
                            name="second_number_house"
                            maxLength={3}
                            keyboardType="name-phone-pad"
                            returnKeyTap="next"
                            />
                        </View>
                        <Text>Indicación adicional</Text>
                        <FormikInputValues
                            name="indication"
                            placeholder="Ej: Al lado de ------"
                            maxLength={100}
                            keyboardType="name-phone-pad"
                            returnKeyTap="next"
                        />
                        
                        <StyledButton style={{marginTop:10}} onPress={handleSubmit} title={'Registrarme'}/>   
                    </View>               
                    )
            }}
        </Formik>
    )
}