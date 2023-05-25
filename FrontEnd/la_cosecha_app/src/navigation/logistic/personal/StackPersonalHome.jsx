import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogisticPersonal from "../../../pages/logisticPersonal/logisticPersonal";
import LogisticStackMerchant from "./LogisticStackMerchant";
import LogisticPersonalDelivery from "../../../pages/logisticPersonal/logisticPersonalDelivery";


const stackProvider=createNativeStackNavigator();

export default function StackPersonalHome({orderInfo, setOrdeInfo}){
    return(
        <stackProvider.Navigator
            initialRouteName="PersonalHome"
            screenOptions={{
                animationTypeForReplace:'pop',
                
            }}
        >
            <stackProvider.Screen
                name="PersonalHome"
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <LogisticPersonal {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </stackProvider.Screen>
            <stackProvider.Screen
                name="PersonalProvider"
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <LogisticStackMerchant {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </stackProvider.Screen>
            <stackProvider.Screen
                name="DeliveryMenu"
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <LogisticPersonalDelivery {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </stackProvider.Screen>

        </stackProvider.Navigator>
    )
}