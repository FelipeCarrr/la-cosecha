import React from "react";
import { View,Text,StyleSheet, ScrollView } from "react-native";
import StyledTextLogin from "../components/StyledTextTitle";
import { useFocusEffect } from '@react-navigation/native';
import Ripple from "react-native-material-ripple";
import StyledCardOrderDelivered from "../components/StyledCardOrderDelivered";
import theme from "../theme";

const LogisticOrderDelivered=({navigation,orderInfo, setOrdeInfo})=>{
    return(
        <View style={theme.containerView}>
        <Ripple 
        onPress={()=>{
            
        }}
        rippleColor={theme.colors.primary}
        rippleDuration={600}
        rippleContainerBorderRadius={20}
        > 
          <StyledCardOrderDelivered/> 
        </Ripple>
        </View>
    )
}

export default LogisticOrderDelivered;