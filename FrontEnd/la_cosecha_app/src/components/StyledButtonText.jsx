import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import theme from "../theme";

const styles=StyleSheet.create({
    button:{
    },
    variant:{
        mode:'text',
        textColor:theme.colors.primary
    }
});

const StyledButtonText=({style={},children,...props})=>{
    const buttonStyle={
        ...styles.button,
        ...style
    }
    return (
        <Button {...styles.variant} style={buttonStyle} {...props}> 
            {children}
        </Button>
    )
}

export default StyledButtonText