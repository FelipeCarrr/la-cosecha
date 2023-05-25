import AsyncStorage from "@react-native-async-storage/async-storage";

const logout=async ({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant})=>{
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('rolId');

    setIsLogin(false);
    setIsBuyer(false);
    setISMerchant(false);
    setIsLogistic(false);

    return
}

export default logout