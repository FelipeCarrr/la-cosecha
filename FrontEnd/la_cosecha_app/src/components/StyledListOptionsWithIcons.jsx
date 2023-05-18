import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { FontAwesome5 } from '@expo/vector-icons';
import theme from "../theme";
import Ripple from "react-native-material-ripple";


const styles=StyleSheet.create({
    style:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        paddingTop:5,
        marginBottom:5
    },
    Icon:{
        backgroundColor:theme.colors.primary,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:35,
        width:35,
        marginRight:10,
        marginLeft:5,
        borderRadius:10
    },
    arrow:{
        justifyContent:'flex-end',
        marginRight:5
    }
})

const StyledListOptionsWithIcons=({style={},children,...props})=>{
    const StyledList={
        ...styles.style,
        ...style
    }
    return(
        <Ripple
            onPress={props.onPress}
            rippleColor={theme.colors.primary}
            rippleDuration={600}
            rippleContainerBorderRadius={20}
        >
            <View style={StyledList}>
                <View style={styles.Icon}>
                    {children}
                </View>
                <Text variant="titleMedium">{props.title}</Text>
                <FontAwesome5 style={styles.arrow} name="chevron-right" size={24} color="black" />
            </View>
        </Ripple>
    )
}

export default StyledListOptionsWithIcons