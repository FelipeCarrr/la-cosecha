import React from "react";
import { View,StyleSheet } from "react-native";
import StyledSearchBar from "./StyledSearchBar";
import Ripple from "react-native-material-ripple";
import theme from "../theme";

const styles=StyleSheet.create({
    view:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        height:70,
        paddingBottom:10,
        alignItems:'center'
    },
    searchBar:{
        marginTop:0,
        width:'80%', 
        marginRight:0,
        marginLeft:10,
        height:55,
    },
    ripple:{
        height:40,
        width:40,
        marginRight:10,
    },
    icon:{
        backgroundColor:theme.colors.primary,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:40,
        marginRight:10,
        borderRadius:10
    }
})

const StyeledSearchbarwithIcon=({style={},children,...props})=>{
    const Styled={
        ...styles.view,
        ...style
    }
    return (
        <View
            style={Styled}
        >
            <StyledSearchBar 
                style={styles.searchBar}
            />
            <Ripple
                style={styles.ripple}
                rippleDuration={600}
                rippleContainerBorderRadius={10}
                {...props}
            >
                <View style={styles.icon}>
                    {children}
                </View>
            </Ripple>
        </View>
    )
}

export default StyeledSearchbarwithIcon