import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";


const stateLogin=async ({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant,selectedCenter, setSelectedCenter})=>{

    log= await AsyncStorage.getItem('token');
    id= await AsyncStorage.getItem('userId');
    rol= await AsyncStorage.getItem('rolId');
    center= await AsyncStorage.getItem('center');

   

    if(log == null || id == null || rol == null){
        setIsLogin(false);
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId');
        await AsyncStorage.removeItem('rolId');
        await AsyncStorage.removeItem('center');
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
        if(center!=null){
            setSelectedCenter(true);
        }
        return ;
    }
    if(rol==3){
        setISMerchant(true);
        setIsLogin(true);
        return;
    }


    setIsLogin(false);
    await AsyncStorage.setItem('token');
    await AsyncStorage.setItem('userId');
    await AsyncStorage.setItem('rolId');
    await AsyncStorage.removeItem('center');
    return;

}

export default stateLogin;