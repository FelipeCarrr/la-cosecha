import React, { useEffect, useState } from "react";
import {FlatList} from "react-native"
import StyledCardProvider from "./StyledCardProvider";
import getAllProvider from "../hooks/getAllProvider";
import { useFocusEffect } from "@react-navigation/native";



const StyledCardProviderList=()=>{
    const [providerList, setProviderList]=useState(null)

    useEffect(()=>{
        const product=async()=>{
            const res= await getAllProvider();
            setProviderList(res)
        }
        product()
    },[])

    return(
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{marginTop:-30, marginBottom:100}}
            data={providerList}
            renderItem={({item})=>(
                <StyledCardProvider {...item}/>
            )}
        />
    )
}

export default StyledCardProviderList