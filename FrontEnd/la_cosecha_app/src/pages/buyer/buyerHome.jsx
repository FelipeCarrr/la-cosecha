import React from "react";
import {View} from "react-native";
import theme from "../../theme";
import StyledCardProduct from "../../components/StyledCardProduct";
import StyeledSearchbarwithIcon from "../../components/StyledSearchBarwithIcon";
import { Entypo } from '@expo/vector-icons';
import Constants  from "expo-constants";
import StyledCardProductList from "../../components/StyledCardProductList";

const BuyerHome =()=>{
    
    return(
        <>
        <View 
            style={{
                backgroundColor:theme.colors.primaryLight,
                
            }}
        >
            <StyeledSearchbarwithIcon
                onPress={()=>{
                    navigation.navigate('merchanRegister')
                }}
                style={{marginTop:Constants.statusBarHeight,}}
            >
                <Entypo name="shopping-bag" size={24} color="white" />
            </StyeledSearchbarwithIcon>
        </View>
        <View style={theme.containerView}>
            <StyledCardProductList/>
        </View>
        </>
    )
}

export default BuyerHome;