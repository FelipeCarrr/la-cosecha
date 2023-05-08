import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import theme from "../theme";

const styles= StyleSheet.create({
    text:{
        fontWeight:theme.fontWeights.bold
    },
    variant:{
        variant:'headlineMedium'
    }
});

const StyledTextLogin =({style={},children,...props})=>{
    const textStyles={
        ...styles.text,
        ...style
    }
    return (
        <Text {...styles.variant} style={textStyles} {...props}>
            {children}
        </Text>
    )
}

export default StyledTextLogin