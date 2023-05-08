import React from "react";
import { StyleSheet} from "react-native";
import { TextInput } from "react-native-paper";
import theme from "../theme";

const styles= StyleSheet.create({
    textInputStyle:{
        backgroundColor: theme.colors.primary,
        selectionColor:theme.colors.primary,
        marginBottom: 10,
        backgroundColor:theme.colors.backgroundColorPrimary,

    },
    textInputProps:{
        mode:'outlined', 
        outlineStyle:{borderRadius:theme.borderRadius.primary}, 
        activeOutlineColor:theme.colors.primary,
        selectionColor:theme.colors.primary
    }
});

const StyledTextInput =({style ={}, ...props})=>{
    const inputStyles={
        ...styles.textInputStyle,
        ...style
    }
    return <TextInput {...styles.textInputProps} style={ inputStyles} {...props}/>
}

export default StyledTextInput