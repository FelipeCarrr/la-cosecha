import React from "react";
import { View } from "react-native";
import theme from "../theme";
import { Image } from "expo-image";

const Splash=()=>{
    const image=require('../../assets/images/splash.png')
    return(
        <View style={{backgroundColor:theme.colors.primary, width:'100%', height:'100%'}}>
            <Image
                source={image}
                style={{width:'100%', height:'100%'}}
            />
        </View>
    )
}

export default Splash;