import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogisticPersonalProvider from "../../../pages/logisticPersonal/logistecPersonalProvider";
import LogistecMerchanRegister from "../../../pages/logisticPersonal/logistecMerchantRegister";
import LogistecMerchantInventary from "../../../pages/logisticPersonal/logistecMerchantInventary";
import MerchantInventaryAdd from "../../../pages/logisticPersonal/merchantInventaryAdd";

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
            <logisticstackmerchant.Screen
                name='merchantInventary'
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <LogistecMerchantInventary {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </logisticstackmerchant.Screen>
            <logisticstackmerchant.Screen
                name='merchantRegisterProduct'
                options={{
                    headerShown: false
                }}
            >
                {(props)=>(
                    <MerchantInventaryAdd {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo}/>
                )}
            </logisticstackmerchant.Screen>
        </logisticstackmerchant.Navigator>
    )
}