import React, { useEffect, useState } from "react";

import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import RegisterAddressInitial from "./pages/auth/registerAddressInitial";

import LogisticOrderNew from "./pages/logisticOrder/logisticOrderNew";
import LogisticOrderNewInfo from "./pages/logisticOrder/logisticOrderNewInfo";

import LogisticOrderPrepare from "./pages/logisticOrder/logisticOderPrepare";
import LogisticOrderDelivery from "./pages/logisticOrder/logisticOrderDelivery";
import LogisticOrderDelivered from "./pages/logisticOrder/logisticOrderdelivered";
import LogisticInventary from "./pages/logisticInventary";



import LogisticPersonal from "./pages/logisticPersonal/logisticPersonal";
import LogisticPersonalProvider from "./pages/logisticPersonal/logistecPersonalProvider";
import LogisticPersonalDelivery from "./pages/logisticPersonal/logisticPersonalDelivery";



import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Constants from "expo-constants";

import theme from "./theme";
import {  View } from "react-native";
import StyledSearchBar from "./components/StyledSearchBar";

const LoginStackNavigator= createNativeStackNavigator();
const stack=createNativeStackNavigator();
const stackProvider=createNativeStackNavigator();
const LogisticTabNavigator=createBottomTabNavigator();
const LogisticTabTopNavigator=createMaterialTopTabNavigator();

const MyTheme={
    ...DefaultTheme,
    dark: false,
    colors:{
        ...DefaultTheme.colors,
        background:'#fff',
        primary:'red'
        
    },
};

function StackLogin(){
    return(
        <LoginStackNavigator.Navigator
            initialRouteName="login"
        >
            <LoginStackNavigator.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <LoginStackNavigator.Screen
                name="register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <LoginStackNavigator.Screen
                name="registerAddressInitial"
                component={RegisterAddressInitial}
                options={{
                    headerShown: false
                }}
            />
        </LoginStackNavigator.Navigator>
    );
}

function StackOrderNew({orderInfo, setOrdeInfo}){
    
    return(
        <stack.Navigator
            initialRouteName="StackOrderNew"
            screenOptions={{
                animationTypeForReplace:'pop',
                
            }}
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

function StackPersonalHome({orderInfo, setOrdeInfo}){
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
                    <LogisticPersonalProvider {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
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

function TabsTopHomeLogistic({orderInfo, setOrdeInfo}){
    
    return(
        <>  
            {orderInfo ? null :
                <View style={{
                    backgroundColor:'#E3FFED'
                }}>
                    <StyledSearchBar/>
                </View>
            }
            
            <LogisticTabTopNavigator.Navigator
                initialRouteName="orderNew"
                screenOptions={{
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: '#000',
                    tabBarStyle: {
                        height: 50,
                        width: '100%',
                        display: orderInfo ? 'none':'flex'
                    },

                    tabBarLabelStyle: {
                        marginTop:0,
                        paddingTop:0,
                        marginLeft: -10,
                        marginRight: -10
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: theme.colors.primary
                    },
                    tabBarIndicatorContainerStyle: {
                        width: '100%',
                        backgroundColor:'#E3FFED'
                    },
                    
                    swipeEnabled: !orderInfo
                }}
                scroll
            >
                <LogisticTabTopNavigator.Screen
                    name="orderNew"
                    options={{
                        tabBarLabel: 'Nuevo',
                    }}>
                        {(props) => (
                            <StackOrderNew {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                        )}
                </LogisticTabTopNavigator.Screen>
                <LogisticTabTopNavigator.Screen
                    name="orderPrepare"
                    component={LogisticOrderPrepare}
                    options={{
                        tabBarLabel: 'Preparación',
                    }} />
                <LogisticTabTopNavigator.Screen
                    name="orderDelivery"
                    component={LogisticOrderDelivery}
                    options={{
                        tabBarLabel: 'Entrega'
                    }} />
                <LogisticTabTopNavigator.Screen
                    name="orderDelivered"
                    component={LogisticOrderDelivered}
                    options={{
                        tabBarLabel: 'Entregado'
                    }} />
            </LogisticTabTopNavigator.Navigator>
        </>
    )
    
}

function TabsLogistic(){
    const [orderInfo, setOrdeInfo] = useState(false);
    return(
        <LogisticTabNavigator.Navigator
            initialRouteName="pedidos"
            screenOptions={{
                tabBarActiveTintColor:theme.colors.primary,
                tabBarStyle:{
                    height:65,
                    paddingBottom:10,
                    borderTopWidth:0,
                    elevation:0,
                    display: orderInfo ? 'none':'flex'
                },
                tabBarLabelStyle: {
                    fontSize: 14, // Tamaño de fuente modificado a 16
                    fontWeight: 'bold',
                    paddingBottom:5,
                     // Peso de fuente en negrita
                },
                
            }}
            
        >
            <LoginStackNavigator.Screen 
                name="inventario" 
                component={LogisticInventary}
                options={{
                    tabBarLabel:'Inventario',
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="warehouse" size={24} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <LoginStackNavigator.Screen
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
            </LoginStackNavigator.Screen> 
            <LoginStackNavigator.Screen 
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
                    <StackPersonalHome {...props} orderInfo={orderInfo} setOrdeInfo={setOrdeInfo} />
                )}
            </LoginStackNavigator.Screen>
        </LogisticTabNavigator.Navigator>
    )
}

export default function Main() {
    return (
            <NavigationContainer theme={MyTheme}>
                <TabsLogistic/>
            </NavigationContainer>
        )
}