import AsyncStorage from "@react-native-async-storage/async-storage";

const logout=async ({isLogin, setIsLogin,isBuyer,setIsBuyer,isLogistic,setIsLogistic,isMerchant, setISMerchant, selectedCenter,setSelectedCenter})=>{
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('rolId');
    await AsyncStorage.removeItem('center');

    setIsLogin(false);
    setIsBuyer(false);
    setISMerchant(false);
    setIsLogistic(false);
    setSelectedCenter(false);

    return
}

export default logout