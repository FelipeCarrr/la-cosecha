import React from "react";
import { useLayoutEffect } from "react";
import { ScrollView, View } from "react-native";
import StyledButtonBack from "../../components/StyleButtonBack";
import InputsProductRegister from "../../components/InputsProductRegister";
import StyledTextLogin from "../../components/StyledTextTitle";
import theme from "../../theme";

const MerchantInventaryAdd=({navigation,fullHeight,setFullHeight})=>{
    useLayoutEffect(() => {
        setFullHeight(true);
      }, [navigation]);
    return(
        <ScrollView>
            <View style={theme.containerView}>
                <StyledButtonBack onPress={()=>{
                    setFullHeight(true);
                    navigation.navigate('InventaryHome')
                }}/>
                <StyledTextLogin>
                        Registrar Producto
                </StyledTextLogin>
                <InputsProductRegister/>
            </View>
        </ScrollView>
    )
}

export default MerchantInventaryAdd