import React, { useEffect, useState } from "react";
import { View,StyleSheet, Text} from "react-native";

import StyledButtonBack from "./StyleButtonBack";
import StyledProductImage from "./StyledProductImage";
import StyledButtonTextBuy from "./StyledButtonTextBuy";
import StyledButtonBag from "./StyledButtonBag";
import { AntDesign } from '@expo/vector-icons';
import theme from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";


const styles=StyleSheet.create({
    Card:{
        backgroundColor:'#fff',
        borderRadius:20
    },
    iconInfo:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        marginBottom:5
    },
    icon:{
        marginRight:5
    },
    textPrice:{
        color:theme.colors.primary,
        fontWeight:'bold'
        
    },
    title:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        marginBottom:5,
        justifyContent:'space-between',

    }
    
})
const StyledViewProduct = ({data})=>{
    const navigation=useNavigation()

    

    return(
        <View>
            {data ? 
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <StyledButtonBack onPress={()=>{
                            navigation.navigate('homeBuyer')
                        }}></StyledButtonBack>
                        <Image
                            style={{width:70,height:70,borderRadius:15,backgroundColor:'#fff'}}
                            source={{uri: data.providerId.providerPhoto}}
                        />
                    </View> 
                    <View style={styles.title}>
                            <Text style={{fontSize:30}} variant="titleLarge">{data.product_lot_name}</Text>
                    </View>        
                    <StyledProductImage data={data.product_lot_foto}/>
                
                    <View style={styles.title}>
                            <Text style={{fontWeight:'bold', color:theme.colors.primary, fontSize:30}} variant="titleLarge">{data.product_lot_price} /KG COP</Text>
                                <View style={styles.iconInfo}>
                                    <AntDesign name="checkcircleo" size={25} color={theme.colors.primary} />
                                    <Text style={{fontSize:17}} variant="bodyMedium"> Disponible</Text>
                                </View>
                        </View>
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                        <StyledButtonTextBuy style={{width:'80%'}} ></StyledButtonTextBuy>
                        <StyledButtonBag style={{width:'20%', marginLeft:10}}></StyledButtonBag>
        
                    </View>
                    
                    <View style={{borderRadius:20, borderWidth:1,paddingVertical:10, paddingHorizontal:10, marginTop:10}}>
                        <Text style={{marginTop:-5, fontSize:20, color:theme.colors.primary, fontWeight:'bold', marginBottom:10}}> Descripción </Text>            
                        <Text style={{marginLeft:10}} numberOfLines={20}>{data.product_lot_description}</Text>
                    </View>
                </View> 
            : null}
            
        </View>
         
    )
}

export default StyledViewProduct;