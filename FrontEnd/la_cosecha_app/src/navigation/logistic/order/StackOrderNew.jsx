import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogisticOrderNew from "../../../pages/logisticOrder/logisticOrderNew";
import LogisticOrderNewInfo from "../../../pages/logisticOrder/logisticOrderNewInfo";

const stack=createNativeStackNavigator();

export default function StackOrderNew({orderInfo, setOrdeInfo}){
    
    return(
        <stack.Navigator
            initialRouteName="StackOrderNew"
        >
            <stack.Screen
                name="StackOrderNew"
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <LogisticOrderNew {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </stack.Screen>

            <stack.Screen
                name="StackOrderNewInfo"
                options={{
                    headerShown: false,
                }}
            >
                {(props) => (
                    <LogisticOrderNewInfo {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </stack.Screen>
        </stack.Navigator>
    )
}