import React from "react";
import { View,StyleSheet} from "react-native";
import StyledListOptionsWithIcons from "../../components/StyledListOptionsWithIcons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from "react-native-paper";
import  Constants  from "expo-constants"
import { useIsFocused } from "@react-navigation/native";



const LogisticPersonal=({navigation, orderInfo, setOrdeInfo})=>{
    useIsFocused(()=>{
        setOrdeInfo(false);
    })
    return(
        
         <View style={styles.containerView}>
            <Card style={styles.Card}>
                <StyledListOptionsWithIcons title='Mercaderes' onPress={()=>{
                    navigation.navigate('PersonalProvider')
                }}>
                    <FontAwesome5 name="store" size={18} color="white" />
                </StyledListOptionsWithIcons>
                <StyledListOptionsWithIcons title='Repartidores' onPress={()=>{
                    navigation.navigate('DeliveryMenu')
                }}>
                    <MaterialCommunityIcons name="truck-fast" size={24} color="white" />
                </StyledListOptionsWithIcons>
            </Card>
        </View> 
    )
}




const styles=StyleSheet.create({
    Card:{
        backgroundColor:'#fff',
        borderRadius:20,
        paddingTop:5,
        paddingBottom:5
    },
    containerView:{
        marginHorizontal:30,
        marginTop: (Constants.statusBarHeight+50)
    }

})
export default LogisticPersonal