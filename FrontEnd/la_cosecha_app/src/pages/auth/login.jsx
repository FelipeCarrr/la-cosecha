import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import StyledLoginImage from "../../components/StyledLoginImage";
import InputsLogin from "../../components/InputsLogin";
import StyledTextLogin from "../../components/StyledTextTitle";
import StyledButtonText from "../../components/StyledButtonText";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";



const Login =({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant})=>{
    const navigation=useNavigation();
    return(
        <ScrollView>
            <View style={theme.containerView}>
                <StyledLoginImage/>
                <StyledTextLogin>
                    Iniciar Sesión
                </StyledTextLogin>
                <InputsLogin
                isLogin={isLogin} setIsLogin={setIsLogin}
                isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                isMerchant={isMerchant} setISMerchant={setISMerchant}
                />
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
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    style:{
        flexDirection:"row", 
        justifyContent:"space-between"
    }
})



export default Login