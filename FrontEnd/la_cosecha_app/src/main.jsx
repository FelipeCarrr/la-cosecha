import React, { useEffect, useState } from "react";
import stateLogin from "./hooks/stateLogin";
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import StackLogin from "./navigation/auth/StackLogin";
import TabsLogistic from "./navigation/logistic/TabsLogistic";
import TabsBottomMerchant from "./navigation/merchant/TabsBottomMerchant";
import BottomTabsBuyer from "./navigation/buyer/BottomTabsBuyer";
import Splash from "./pages/splash"


const MyTheme={
    ...DefaultTheme,
    dark: false,
    colors:{
        ...DefaultTheme.colors,
        background:'#fff',
        primary:'red'
        
    },
};

export default function Main() {
    const [isLoading,setIsLoading]=useState(true)
    const [isLogin, setIsLogin]=useState(false);
    const [isBuyer,setIsBuyer]=useState(false);
    const [isLogistic,setIsLogistic]=useState(false);
    const [isMerchant, setISMerchant]=useState(false);

    useEffect(()=>{
        stateLogin({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant}).then(()=>{setIsLoading(false)})
    },[])

    

    return (
            <NavigationContainer theme={MyTheme}>
                {isLoading?<Splash/>:
                isLogin
                ? isBuyer ? <BottomTabsBuyer
                                isLogin={isLogin} setIsLogin={setIsLogin} 
                                isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                                isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                                isMerchant={isMerchant} setISMerchant={setISMerchant}
                            />
                          : isLogistic ? <TabsLogistic/>
                                       : isMerchant ? <TabsBottomMerchant/>
                                                    : <StackLogin isLogin={isLogin} setIsLogin={setIsLogin}/>
                :<StackLogin isLogin={isLogin} setIsLogin={setIsLogin} 
                    isBuyer={isBuyer} setIsBuyer={setIsBuyer} 
                    isLogistic={isLogistic} setIsLogistic={setIsLogistic}
                    isMerchant={isMerchant} setISMerchant={setISMerchant}
                    />
                }
                
            </NavigationContainer>
        )
}