import React from "react";
import { View,Text } from "react-native";
import theme from "../../theme";
import StyledListOptionsWithIcons from "../../components/StyledListOptionsWithIcons";
import { SimpleLineIcons } from '@expo/vector-icons';
import logout from "../../hooks/logout";

const MerchantAccount=({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant, selectedCenter, setSelectedCenter})=>{
    return (
        <View style={theme.containerView}>
            <StyledListOptionsWithIcons title={'Cerrar sesion'} onPress={()=>{
                logout({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant, selectedCenter, setSelectedCenter})
            }}>
                <SimpleLineIcons name="logout" size={24} color="white" />
            </StyledListOptionsWithIcons>
        </View>
    )
}

export default MerchantAccount