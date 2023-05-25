import React, { useEffect, useState } from "react";
import {Text, FlatList} from "react-native"
import StyledCardProduct from "./StyledCardProduct";
import getAllProductLot from "../hooks/getAllProductLot";



const StyledCardProductList=()=>{
    const [productList, setProductList]=useState(null)

    useEffect(()=>{
        const product=async()=>{
            const res= await getAllProductLot();
            setProductList(res)
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
                <StyledCardProduct {...item}/>
            )}
        />
    )
}

export default StyledCardProductList