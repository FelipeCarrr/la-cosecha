import React from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import InputsRegister from "../../components/InputsRegister";
import StyledTextLogin from "../../components/StyledTextTitle";
import StyledButtonText from "../../components/StyledButtonText";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";

const Register=()=>{
    const navigation=useNavigation();
    return(
        <ScrollView>
            <View style={theme.containerView}>
                <View style={styles.style}>
                    <StyledButtonText icon="arrow-left"
                        onPress={()=> navigation.navigate('login')}
                    >
                        Volver
                    </StyledButtonText>
                </View>
                <StyledTextLogin style={{marginBottom:10}}>
                    Registro
                </StyledTextLogin>
                <InputsRegister/>
            </View>
        </ScrollView>
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



export default Register