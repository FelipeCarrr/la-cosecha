import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from "../../theme";

import MerchantOrder from "../../pages/merchant/merchantOrder";
import MerchantAccount from "../../pages/merchant/merchantAccount";
import StackInventary from "./inventary/StackInventary";

const bottomTabs=createBottomTabNavigator();

export default function TabsBottomMerchant ({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant, selectedCenter, setSelectedCenter}){
    const [fullHeight,setFullHeight]=useState(false)
    return(
        <bottomTabs.Navigator
            initialRouteName="pedidos"
            screenOptions={{
                ...theme.bottomTabsScreenOptions,
                tabBarStyle:{
                    ...theme.bottomTabsScreenOptions.tabBarStyle,
                    display: fullHeight ? 'none':'flex'
                },
            }}
        >
            <bottomTabs.Screen
                name="inventary" 
                options={{
                    tabBarLabel:'Inventario',
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="warehouse" size={24} color={color} />
                    ),
                    headerShown:false,
                }}
            >
                {(props)=>(
                    <StackInventary {...props} fullHeight={fullHeight} setFullHeight={setFullHeight}/>
                )}
            </bottomTabs.Screen>
            <bottomTabs.Screen
                name="pedidos" 
                options={{
                    tabBarLabel:'Pedidos',
                    tabBarIcon:({color})=>(
                        <Feather name="shopping-bag" size={24} color={color} />
                    ),
                    headerShown:false,
                }}
            >
                {(props)=>(
                    <MerchantOrder {...props}/>
                )}
            </bottomTabs.Screen>
            <bottomTabs.Screen
                name="account" 
                options={{
                    tabBarLabel:'Cuenta',
                    tabBarIcon:({color})=>(
                        <AntDesign name="user" size={24} color={color} />
                    ),
                    headerShown:false
                }}
            >
                {(props) => (
                    <MerchantAccount {...props} isLogin={isLogin} setIsLogin={setIsLogin} 
                    isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                    isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                    isMerchant={isMerchant} setISMerchant={setISMerchant}
                    selecteCenter={selectedCenter} setSelectedCenter={setSelectedCenter}
                    />
                )}
            </bottomTabs.Screen>
        </bottomTabs.Navigator>
    )
}
