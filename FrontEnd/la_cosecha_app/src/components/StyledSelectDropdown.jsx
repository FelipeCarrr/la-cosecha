import React, { useState } from "react";
import {Text,Alert, StyleSheet,Image } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import theme from "../theme";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons'; 


const styles=StyleSheet.create({
    styles:{},
    buttonStyle:{
        buttonStyleClosed:{
            backgroundColor: '#fff',
            width:'100%',
            borderRadius: theme.borderRadius.primary,
            marginBottom:10,
            borderWidth:1,
            borderColor: '#79797b'
        },
        buttonStyleOpened:{
            backgroundColor: '#fff',
            width:'100%',
            borderTopLeftRadius: theme.borderRadius.primary,
            borderTopRightRadius: theme.borderRadius.primary,
            marginBottom:10,
            borderWidth:2,
            borderColor: theme.colors.primary
        },
    },
    propsStyles:{
        defaultButtonText:'Seleccione una opción',
        buttonTextStyle:{
            color: '#000',
            textAlign: 'left',
        },
        dropdownOverlayColor:'transparent',
        dropdownStyle:{
            marginTop:-30,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor:'#fff',
            borderWidth:2,
            borderColor: theme.colors.primary,
            borderTopColor:theme.colors.primary
        },
        rowStyle:{
            backgroundColor: '#fff',
            borderRadius:20,
            borderBottomColor: '#fff',
        },
        rowTextStyle:{
            color: '#000',
            textAlign: 'left',
        },
        showsVerticalScrollIndicator:false
    }
    
    
});



const StyledSelectDropdown =({style={},...props})=>{
    const [isOpened, setIsOpened]=useState(false);
    const styledSelect={
        ...styles.styles,
        ...style
    }
    return(
            <SelectDropdown
                onFocus={()=>{
                    setIsOpened(true);
                }} 
                onBlur={()=>{
                    setIsOpened(false);
                }}
                buttonStyle={
                    isOpened ? styles.buttonStyle.buttonStyleOpened : styles.buttonStyle.buttonStyleClosed
                }
                renderDropdownIcon={() => {
                    
                    //return <FontAwesome name={isOpened ? 'chevron-down' : 'chevron-down'} color={'#444'} size={18} />;
                    return <Feather name="shopping-bag" size={18} color={theme.colors.primary} />
                }}
                {...styles.propsStyles}
                style={styledSelect} 
                {...props}/>
        
        
    )
}

export default StyledSelectDropdown;