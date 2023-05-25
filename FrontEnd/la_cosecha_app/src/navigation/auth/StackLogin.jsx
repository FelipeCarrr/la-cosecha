import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";
import RegisterAddressInitial from "../../pages/auth/registerAddressInitial";

const LoginStackNavigator= createNativeStackNavigator();

export default function StackLogin({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant}){
    return(
        <LoginStackNavigator.Navigator
            initialRouteName="login"
        >
            <LoginStackNavigator.Screen
                name="login"
                options={{
                    headerShown: false
                }}
            >
                {(props)=>(
                    <Login {...props} isLogin={isLogin} setIsLogin={setIsLogin}
                    isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                    isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                    isMerchant={isMerchant} setISMerchant={setISMerchant}/>
                )}
            </LoginStackNavigator.Screen>
            <LoginStackNavigator.Screen
                name="register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <LoginStackNavigator.Screen
                name="registerAddressInitial"
                
                options={{
                    headerShown: false
                }}
            >
                {(props) => (
                    <RegisterAddressInitial {...props} isLogin={isLogin} setIsLogin={setIsLogin}
                    isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                    isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                    isMerchant={isMerchant} setISMerchant={setISMerchant}
                    />
                )}
            </LoginStackNavigator.Screen>
        </LoginStackNavigator.Navigator>
    );
}