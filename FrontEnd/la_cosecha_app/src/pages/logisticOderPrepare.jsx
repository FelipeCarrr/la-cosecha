import React from "react";
import { View,Text,StyleSheet, ScrollView } from "react-native";
import StyledTextLogin from "../components/StyledTextTitle";
import { useFocusEffect } from '@react-navigation/native';
import Ripple from "react-native-material-ripple";
import StyledCardOrderPrepare from "../components/StyledCardOrderPrepare";
import theme from "../theme";


const LogisticOrderPrepare=({navigation,orderInfo, setOrdeInfo})=>{
    // useFocusEffect(() => {
    //     setOrdeInfo(false);
    //   });
    return(
        <View style={theme.containerView}>
        <Ripple 
        onPress={()=>{
            
        }}
        rippleColor={theme.colors.primary}
        rippleDuration={600}
        rippleContainerBorderRadius={20}
        > 
          <StyledCardOrderPrepare/> 
        </Ripple>
    </View>
    )
}

export default LogisticOrderPrepare;