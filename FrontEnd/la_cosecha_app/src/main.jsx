import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text,View } from "react-native";
import Login from "./pages/login";
import Register from "./pages/register";
import RegisterAddressInitial from "./pages/registerAddressInitial";
import theme from "./theme";

const LoginStackNavigator= createNativeStackNavigator();

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

export default function Main() {
    return (
            <NavigationContainer theme={theme}>
                <StackLogin/>
            </NavigationContainer>
        )
}