import React from "react";
import { Text } from "react-native-paper";
import { useField } from "formik";
import StyledTextInput from "./StyledTextInput";
import { StyleSheet } from "react-native";
import theme from "../theme";

const style= StyleSheet.create({
    error:{
        color:theme.textInputError.color,
        marginTop:theme.textInputError.marginTop,
        fontSize:theme.textInputError.fontSize,
        marginBottom:theme.textInputError.marginBottom
    }
})

const FormikInputValues = ({name,...props})=>{
    const [field,meta, helpers]=useField(name);
    return(
        <>
            {meta.touched && meta.error && <Text style={style.error}>{meta.error}</Text>}
            <StyledTextInput
                value={field.value}
                onChangeText={value=>helpers.setValue(value)}
                {...props}
            />
            
        </>
    )
}

export default FormikInputValues