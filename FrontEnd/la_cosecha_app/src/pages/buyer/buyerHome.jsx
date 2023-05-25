import React from "react";
import {View} from "react-native";
import theme from "../../theme";
import TrackingMap from "../../components/TrackingMap";

const BuyerHome =()=>{
    
    return(
        <View style={theme.containerView}>
            <TrackingMap/>
        </View>
    )
}

export default BuyerHome;