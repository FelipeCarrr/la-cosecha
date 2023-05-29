import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import theme from "../../theme";
import StyledViewProduct from "../../components/StyledViewProduct";
import getProductInfo from "../../hooks/getProductInfo";

const BuyerProductInfo=({route})=>{
    const [productInfo,setPropductInfo]=useState(null);

    useEffect(()=>{
        const product=async ()=>{
            const res= await getProductInfo(route.params.id);
            setPropductInfo(res);
        }
        product();
        
    },[])
    return(
        <View style={theme.containerView}>
            <StyledViewProduct data={productInfo? productInfo:null}/>
        </View>
    )
}

export default BuyerProductInfo;