import React from "react";
import { View,Text } from "react-native";
import StyledButtonBack from "../../components/StyleButtonBack";
import StyeledSearchbarwithIcon from "../../components/StyledSearchBarwithIcon";
import theme from "../../theme";
import { Octicons } from '@expo/vector-icons';
import Constants  from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import StyledBannerMerchant from "../../components/StyledBannerMerchant";
import { useFocusEffect } from '@react-navigation/native';
import StyledCardProductInventaryList from "../../components/StyledCardProductInventaryList";

const LogistecMerchantInventary=({route,orderInfo, setOrdeInfo})=>{
    useFocusEffect(()=>{
        setOrdeInfo(false);
    })
    const navigation=useNavigation();
    return(
        <>
            <View 
                style={{
                    backgroundColor:theme.colors.primaryLight,
                    
                }}
            >
                <StyledButtonBack 
                    style={{
                        marginBottom:0,
                        marginTop:Constants.statusBarHeight,
                        marginLeft:10
                    }}
                    onPress={()=>{
                        navigation.navigate('merchanList')
                    }}
                />
                <StyeledSearchbarwithIcon
                    onPress={()=>{
                        navigation.navigate('merchantRegisterProduct',{providerId:route.params.providerId});
                        
                    }}
                >
                    <Octicons name="diff-added" size={28} color="white" />
                </StyeledSearchbarwithIcon>
            </View>
            <StyledBannerMerchant uri={route.params.providerPhoto} title={route.params.nameBussines}/>
            <View style={theme.containerView}>
                <StyledCardProductInventaryList providerId={route.params.providerId}/>
            </View>
        </>
    )
}

export default LogistecMerchantInventary;