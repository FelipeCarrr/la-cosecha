import React from "react";
import { View, StyleSheet } from "react-native";
import StyledLoginImage from "../components/StyledLoginImage";
import InputsLogin from "../components/InputsLogin";
import StyledTextLogin from "../components/StyledTextTitle";
import StyledButtonText from "../components/StyledButtonText";
import { useNavigation } from "@react-navigation/native";
import theme from "../theme";



const Login =()=>{
    const navigation=useNavigation();
    return(
        <View style={theme.containerView}>
            <StyledLoginImage/>
            <StyledTextLogin>
                Iniciar Sesión1
            </StyledTextLogin>
            <InputsLogin/>
            <View style={styles.style}>
                <StyledButtonText>
                    Olvide mi Contraseña
                </StyledButtonText>
                <StyledButtonText
                    onPress={()=> navigation.navigate('register')}
                >
                    Registrarme
                </StyledButtonText>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    style:{
        flexDirection:"row", 
        justifyContent:"space-between"
    }
})



export default Login