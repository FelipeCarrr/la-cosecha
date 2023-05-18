import React from "react";
import { View,Text,StyleSheet} from "react-native";
import StyledListOptionsWithIcons from "../../components/StyledListOptionsWithIcons";
import theme from "../../theme";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from "react-native-paper";
import  Constants  from "expo-constants"
import { useIsFocused } from "@react-navigation/native";
import StyledButtonBack from "../../components/StyleButtonBack";



const LogisticPersonalDelivery=({navigation, orderInfo, setOrdeInfo})=>{
    useIsFocused(()=>{
        setOrdeInfo(false);
    })
    return(
        <View style={theme.containerView}>
            <StyledButtonBack
                onPress={()=>{
                    navigation.navigate('PersonalHome')
                }}
            />
            <Card style={styles.Card}>
                <StyledListOptionsWithIcons title='Lista de Repartidores'>
                    <Ionicons name="people" size={24} color="white" />
                </StyledListOptionsWithIcons>
                <StyledListOptionsWithIcons title='Agregar Repartidores'>
                    <MaterialIcons name="person-add-alt-1" size={24} color="white" />
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
export default LogisticPersonalDelivery