import React from "react";
import { useLayoutEffect } from 'react';
import theme from "../../theme";
import { ScrollView, View } from "react-native";
import StyledButtonBack from "../../components/StyleButtonBack";
import StyledTextLogin from "../../components/StyledTextTitle";
import InputsMerchant from "../../components/InputsMerchant";
import InputsDomicile from "../../components/InputsDomicile";


const LogistecMerchanRegister=({navigation, orderInfo, setOrdeInfo})=>{
    useLayoutEffect(() => {
        setOrdeInfo(true);
    }, [navigation]);
    return(
        <ScrollView >
            <View style={theme.containerView}>
                
                <StyledButtonBack
                    onPress={()=> {
                        setOrdeInfo(false);
                        navigation.navigate('merchanList');
                    }}
                    style={{
                        marginTop:0,
                        marginBottom:0
                    }}  
                />
                <StyledTextLogin>
                    Registro Mercader
                </StyledTextLogin>
                <InputsMerchant/>
                
            </View>
        </ScrollView>
    )
}

export default LogistecMerchanRegister