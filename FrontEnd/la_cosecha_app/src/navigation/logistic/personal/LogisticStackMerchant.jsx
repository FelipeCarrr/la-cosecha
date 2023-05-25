import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogisticPersonalProvider from "../../../pages/logisticPersonal/logistecPersonalProvider";
import LogistecMerchanRegister from "../../../pages/logisticPersonal/logistecMerchantRegister";

const logisticstackmerchant=createNativeStackNavigator();

export default function LogisticStackMerchant ({orderInfo, setOrdeInfo}){
    return(
        <logisticstackmerchant.Navigator
            initialRouteName="merchanList"
        >
            <logisticstackmerchant.Screen
                name='merchanList'
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <LogisticPersonalProvider {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </logisticstackmerchant.Screen>
            <logisticstackmerchant.Screen
                name='merchanRegister'
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <LogistecMerchanRegister {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </logisticstackmerchant.Screen>
        </logisticstackmerchant.Navigator>
    )
}