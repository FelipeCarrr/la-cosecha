import React from "react";
import { View} from "react-native";
import Ripple from "react-native-material-ripple";
import StyledCardOrderNew from "../../components/StyledCardOrderNew";
import { useFocusEffect } from '@react-navigation/native';
import theme from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogisticOrderNew=({navigation,orderInfo, setOrdeInfo})=>{
    useFocusEffect(() => {
        setOrdeInfo(false);
        console.log( AsyncStorage.getItem('center'));
      });
    navigation.is
    return(
        <View style={theme.containerView}>
            <Ripple 
            onPress={()=>{
                navigation.navigate('StackOrderNewInfo')
                
            }}
            rippleColor={theme.colors.primary}
            rippleDuration={600}
            rippleContainerBorderRadius={20}
            > 
                <StyledCardOrderNew/>
            </Ripple>
        </View>
    )
}

export default LogisticOrderNew