import React from "react";
import { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import theme from "../../theme";
import TabsTopHomeLogistic from "./order/TabsTopHomeLogistic";
import StackPersonalHome from "./personal/StackPersonalHome";


const LogisticTabNavigator=createBottomTabNavigator();

export default function TabsLogistic({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant}){
    const [orderInfo, setOrdeInfo] = useState(false);
    return(
        <LogisticTabNavigator.Navigator
            initialRouteName="pedidos"
            screenOptions={{
                ...theme.bottomTabsScreenOptions,
                tabBarStyle:{
                    ...theme.bottomTabsScreenOptions.tabBarStyle,
                    display: orderInfo ? 'none':'flex'
                },
                
            }}
            
        >
            <LogisticTabNavigator.Screen
                name="pedidos" 
                options={{
                    tabBarLabel:'Pedidos',
                    tabBarIcon:({color})=>(
                        <Feather name="shopping-bag" size={24} color={color} />
                    ),
                    headerShown:false,
                }}
            >
                {(props) => (
                    <TabsTopHomeLogistic {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </LogisticTabNavigator.Screen> 
            <LogisticTabNavigator.Screen 
                name="personal" 
                options={{
                    tabBarLabel:'Personal',
                    tabBarIcon:({color})=>(
                        <AntDesign name="user" size={24} color={color} />
                    ),
                    headerShown:false
                }}
            >
                {(props) => (
                    <StackPersonalHome {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} 
                                            isLogin={isLogin} setIsLogin={setIsLogin} 
                                            isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                                            isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                                            isMerchant={isMerchant} setISMerchant={setISMerchant}
                    />
                )}
            </LogisticTabNavigator.Screen>
        </LogisticTabNavigator.Navigator>
    )
}