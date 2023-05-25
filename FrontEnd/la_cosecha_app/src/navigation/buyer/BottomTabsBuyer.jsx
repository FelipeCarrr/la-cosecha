import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import theme from "../../theme";

import BuyerHome from "../../pages/buyer/buyerHome";
import BuyerAccount from "../../pages/buyer/buyerAccount";
import BuyerMyShopping from "../../pages/buyer/buyerMyShopping";

const bottomTabs=createBottomTabNavigator();

export default function BottomTabsBuyer ({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant}){
    const [fullHeight,setFullHeight]=useState(false)
    return(
        <bottomTabs.Navigator
            initialRouteName="home"
            screenOptions={{
                ...theme.bottomTabsScreenOptions,
                tabBarStyle:{
                    ...theme.bottomTabsScreenOptions.tabBarStyle,
                    display: fullHeight ? 'none':'flex'
                },
            }}
        >
            <bottomTabs.Screen
                name="account" 
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color})=>(
                        <AntDesign name="user" size={24} color={color} />
                    ),
                    headerShown:false
                }}
            >
                {(props) => (
                    <BuyerAccount {...props} 
                        isLogin={isLogin} setIsLogin={setIsLogin} 
                        isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                        isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                        isMerchant={isMerchant} setISMerchant={setISMerchant}
                    />
                )}
            </bottomTabs.Screen>
            <bottomTabs.Screen
                name="home" 
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color})=>(
                        <AntDesign name="home" size={24} color={color} />
                    ),
                    headerShown:false,
                }}
            >
                {(props)=>(
                    <BuyerHome {...props}/>
                )}
            </bottomTabs.Screen>
            <bottomTabs.Screen
                name="MyShopping" 
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color})=>(
                        <Fontisto name="shopping-basket" size={20} color={color}/>
                    ),
                    headerShown:false,
                }}
            >
                {(props)=>(
                    <BuyerMyShopping {...props} fullHeight={fullHeight} setFullHeight={setFullHeight}/>
                )}
            </bottomTabs.Screen>
            
            
        </bottomTabs.Navigator>
    )
}