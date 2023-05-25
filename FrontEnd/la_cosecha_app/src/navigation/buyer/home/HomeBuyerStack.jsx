import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyerHome from "../../../pages/buyer/buyerHome";
import BuyerProductInfo from "../../../pages/buyer/buyerProductInfo";

const stack=createNativeStackNavigator();

const HomeBuyerStack=()=>{
    return(
        <stack.Navigator
            initialRouteName="homeBuyer"
        >
            <stack.Screen
            name='homeBuyer'
            options={{
                headerShown: false
            }}
            >
                {(props) => (
                    <BuyerHome {...props} />
                )}
            </stack.Screen>
            <stack.Screen
                name='ProductInfo'
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <BuyerProductInfo {...props} />
                )}
            </stack.Screen>
        </stack.Navigator>
    )
}

export default HomeBuyerStack;