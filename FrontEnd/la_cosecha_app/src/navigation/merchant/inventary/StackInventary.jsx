import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MerchantInventary from "../../../pages/merchant/merchantInventary";
import MerchantInventaryAdd from "../../../pages/merchant/merchantInventaryAdd";

const stack=createNativeStackNavigator();

export default function StackInventary({fullHeight,setFullHeight}){
    return (
        <stack.Navigator
            initialRouteName="InventaryHome"
        >
            <stack.Screen
                name="InventaryHome"
                options={{
                    headerShown: false
                }}
            >
                {(props)=>(
                    <MerchantInventary {...props} fullHeight={fullHeight} setFullHeight={setFullHeight}/>
                )}
            </stack.Screen>
            <stack.Screen
                name="InventaryAdd"
                options={{
                    headerShown: false
                }}
            >
                {(props)=>(
                    <MerchantInventaryAdd {...props} fullHeight={fullHeight} setFullHeight={setFullHeight}/>
                )}   
            </stack.Screen>
        </stack.Navigator>
    )
}
