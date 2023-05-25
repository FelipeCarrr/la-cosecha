import React from "react";
import { View,Text } from "react-native";
import StyeledSearchbarwithIcon from "../../components/StyledSearchBarwithIcon";
import theme from "../../theme";
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native";

const MerchantInventary=({navigation,fullHeight,setFullHeight})=>{
    useFocusEffect(() => {
        setFullHeight(false)
    })
    return (
        <>
        <View style={{backgroundColor:theme.colors.primaryLight, paddingTop:30}}>
            <StyeledSearchbarwithIcon
                onPress={()=>{
                    navigation.navigate('InventaryAdd')
                }}
            >
                <Octicons name="diff-added" size={28} color="white"/>
            </StyeledSearchbarwithIcon>
        </View>
        <View style={theme.containerView}>
            
        </View>
        </>
    )
}

export default MerchantInventary