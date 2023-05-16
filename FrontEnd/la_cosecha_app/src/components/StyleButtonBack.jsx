import React from "react";
import { View,StyleSheet} from "react-native";
import StyledButtonText from "../components/StyledButtonText";

const styles=StyleSheet.create({
    button:{
        flexDirection:"row", 
        justifyContent:"flex-start",
        marginLeft:-20,
        marginBottom: 20,
        marginTop:10
    }
})

const StyledButtonBack=({style={},...props})=>{
    const styleButton={
        ...styles.button,
        ...style
    }
    return(
        <View style={styleButton}>
            <StyledButtonText icon="arrow-left" {...props}>
                Volver
            </StyledButtonText>
        </View>
    )
}

export default StyledButtonBack