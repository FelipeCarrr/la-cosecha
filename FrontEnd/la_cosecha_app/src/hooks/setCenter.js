import AsyncStorage from "@react-native-async-storage/async-storage";

const SetCenter = async (num,{selectedCenter, setSelectedCenter})=>{
    const setcenter = await AsyncStorage.setItem('center', num);
    setSelectedCenter(true);
    const getcenter= await AsyncStorage.getItem('center');
    console.log(getcenter);
}

export default SetCenter;