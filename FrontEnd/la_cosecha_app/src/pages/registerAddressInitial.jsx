import React from "react";
import { View, StyleSheet } from "react-native";
import InputsDomicile from "../components/InputsDomicile";
import StyledTextLogin from "../components/StyledTextTitle";
import StyledButtonText from "../components/StyledButtonText";
import { useNavigation } from "@react-navigation/native";
import theme from "../theme";

const RegisterAddressInitial=({route})=>{
    const navigation=useNavigation();
    return(
        <View style={theme.containerView}>
            <View style={styles.style}>
                <StyledButtonText icon="arrow-left"
                    onPress={()=> navigation.navigate('register')}
                >
                    Volver
                </StyledButtonText>
            </View>
            <StyledTextLogin style={{
                marginBottom:10,
                justifyContent:'center',
                alignContent:'center'}}>
                Vamos a agregar un domicilio
            </StyledTextLogin>
            <InputsDomicile dataUser={route.params}/>
        </View>
    )
}
const styles=StyleSheet.create({
    style:{
        flexDirection:"row", 
        justifyContent:"flex-start",
        marginLeft:-20,
        marginBottom: 20,
        marginTop:10
    }
})


export default RegisterAddressInitial