import React from "react";
import { useState } from "react";
import  Constants  from "expo-constants";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import theme from "../theme";



const styles=StyleSheet.create({
    style:{
        marginTop: (Constants.statusBarHeight+10),
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#fff',
        borderWidth: 1,
        
    }
})

const StyledSearchBar=({style={},...props})=>{

    const [isFocusBar, setIsFocusBar]=useState(false);

    const StyleSearchBar={
        ...styles.style,
        ...style
    }
    return(
        
        <Searchbar
            onFocus={()=>{
                setIsFocusBar(true)
            }}
            onBlur={()=>{
                setIsFocusBar(false)
            }}
            style={{
                ...StyleSearchBar,
                borderColor: isFocusBar ? theme.colors.primary : '#000',
            }}
            iconColor={isFocusBar ? theme.colors.primary : '#000'}
            selectionColor={theme.colors.primary}
            placeholder="Buscar"
            {...props}
        />
    )
}

export default StyledSearchBar