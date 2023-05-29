import React from "react";
import { View,Text} from "react-native";
import theme from "../../theme";
import TrackingMap from "../../components/TrackingMap";

const LogisticOrderDelivery=()=>{
    return(
        <View style={theme.containerView}>
            <TrackingMap/>
        </View>
    )
}

export default LogisticOrderDelivery