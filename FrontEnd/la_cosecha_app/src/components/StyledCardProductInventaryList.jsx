import React, { useEffect, useState } from "react";
import {FlatList} from "react-native"
import StyledCardProductInventary from "./StyledCardProductInventary";
import getProductByProvider from "../hooks/getProductByProvider";
import { useFocusEffect } from "@react-navigation/native";



const StyledCardProductInventaryList=({navigation,providerId})=>{
    const [productList, setproductList]=useState(null)

    useEffect(()=>{
        const product=async()=>{
            const res= await getProductByProvider(providerId);
            setproductList(res)
        }
        product()
    },[])

    return(
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{marginTop:-30, marginBottom:100}}
            data={productList}
            renderItem={({item})=>(
                <StyledCardProductInventary {...item}/>
            )}
        />
    )
}

export default StyledCardProductInventaryList