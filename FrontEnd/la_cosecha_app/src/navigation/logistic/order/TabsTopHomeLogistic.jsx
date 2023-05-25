import React from "react"
import { View } from "react-native"
import StyledSearchBar from "../../../components/StyledSearchBar"
import StackOrderNew from "./StackOrderNew"
import LogisticOrderPrepare from "../../../pages/logisticOrder/logisticOderPrepare";
import LogisticOrderDelivery from "../../../pages/logisticOrder/logisticOrderDelivery";
import LogisticOrderDelivered from "../../../pages/logisticOrder/logisticOrderdelivered";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import theme from "../../../theme";

const LogisticTabTopNavigator=createMaterialTopTabNavigator();

export default function TabsTopHomeLogistic({orderInfo, setOrdeInfo}){
    
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