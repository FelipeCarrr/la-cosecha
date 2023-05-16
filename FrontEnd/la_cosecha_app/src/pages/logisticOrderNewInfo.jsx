import React from "react";
import { View,Text,StyleSheet, ScrollView } from "react-native";
import StyledButtonBack from "../components/StyleButtonBack";
import { useLayoutEffect } from 'react';
import theme from "../theme";

const LogisticOrderNewInfo=({navigation,orderInfo, setOrdeInfo})=>{

    useLayoutEffect(() => {
        setOrdeInfo(true);
      }, [navigation]);
    return(
        <View style={theme.containerView}>
            <StyledButtonBack
                onPress={()=> {
                    setOrdeInfo(false);
                    navigation.navigate('StackOrderNew');
                }}
            />
            <Text>Info</Text>
        </View>
    )
}

export default LogisticOrderNewInfo