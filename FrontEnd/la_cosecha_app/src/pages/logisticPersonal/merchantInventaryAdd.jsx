import React from "react";
import { useLayoutEffect } from "react";
import { ScrollView, View } from "react-native";
import StyledButtonBack from "../../components/StyleButtonBack";
import InputsProductRegister from "../../components/InputsProductRegister";
import StyledTextLogin from "../../components/StyledTextTitle";
import theme from "../../theme";

const MerchantInventaryAdd=({navigation,route,orderInfo, setOrdeInfo})=>{
    useLayoutEffect(() => {
        setOrdeInfo(true);
      }, [navigation]);
    return(
        <ScrollView>
            <View style={theme.containerView}>
                <StyledButtonBack onPress={()=>{
                    setOrdeInfo(false);
                    navigation.goBack()
                }}/>
                <StyledTextLogin>
                        Registrar Producto
                </StyledTextLogin>
                <InputsProductRegister providerId={route.params.providerId}/>
            </View>
        </ScrollView>
    )
}

export default MerchantInventaryAdd