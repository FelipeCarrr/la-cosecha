import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginStorage=async (token,userId,rolId,{isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant})=>{
    try {

        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userId', userId.toString());
        await AsyncStorage.setItem('rolId',rolId.toString());

        const token1 =await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('userId');
        const rol = await AsyncStorage.getItem('rolId');
        console.log('{ token:'+token1+' user:'+user+' rol'+rol+'}');

        setIsLogin(true);

        if(rolId==1){
            setIsBuyer(true)
        }
        if(rolId==2){
            setIsLogistic(true)
        }
    } catch (e) {
        console.log(e);
    }
}

export default loginStorage;