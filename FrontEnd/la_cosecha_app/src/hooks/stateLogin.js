import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";


const stateLogin=async ({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant})=>{

    log= await AsyncStorage.getItem('token');
    id= await AsyncStorage.getItem('userId');
    rol= await AsyncStorage.getItem('rolId');

   

    if(log == null || id == null || rol == null){
        setIsLogin(false);
        await AsyncStorage.removeItem('token',null);
        await AsyncStorage.removeItem('userId',null);
        await AsyncStorage.removeItem('rolId',null);
        return;
    }
    if(rol==1){
        setIsBuyer(true);
        setIsLogin(true);
        return;
    }
    if(rol==2){
        setIsLogistic(true);
        setIsLogin(true);
        return ;
    }
    if(rol==3){
        setISMerchant(true);
        setIsLogin(true);
        return;
    }


    setIsLogin(false);
    await AsyncStorage.setItem('token',null);
    await AsyncStorage.setItem('userId',null);
    await AsyncStorage.setItem('rolId',null);
    return;

}

export default stateLogin;