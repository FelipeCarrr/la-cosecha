import React from "react";
import { StyleSheet,View } from "react-native";
import { Text } from "react-native-paper";
import { Image } from "expo-image";
import theme from "../theme";

const styles=StyleSheet.create({
    style:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        height:110,
    },
    image:{
        width:100,
        height:100,
        backgroundColor:'gray',
        borderColor:theme.colors.primary,
        borderRadius:80,
        borderWidth:1        
    }
})

const StyledBannerMerchant=({style={},uri,title,...props})=>{
    const styleBanner={
        ...styles.style,
        ...style
    }
    return(
        <View style={styleBanner} {...props}>
            <Image
                style={styles.image}
                source={{uri: uri}}
                contentFit="fill"
                transition={1000}
            />
            <Text variant="headlineSmall">{title}</Text>
        </View>
    )
}

export default StyledBannerMerchant;