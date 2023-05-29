import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import StyledListOptionsWithIcons from "../components/StyledListOptionsWithIcons";
import { Ionicons } from '@expo/vector-icons';
import  Constants  from "expo-constants";
import SetCenter from "../hooks/setCenter";
import { useNavigation } from "@react-navigation/native";

const ChangeCenter=({selectedCenter, setSelectedCenter, istab})=>{
    const navigation=useNavigation();
    return(
        <View style={styles.containerView}>
            <Card style={styles.Card}>
                <StyledListOptionsWithIcons title='Centro 1' onPress={async ()=>{
                    await SetCenter('1',{selectedCenter, setSelectedCenter})
                    if(istab){
                        navigation.navigate('pedidos')
                    }
                }}>
                    <Ionicons name="location" size={24} color="white" />
                </StyledListOptionsWithIcons>
                <StyledListOptionsWithIcons title='Centro 2' onPress={async ()=>{
                    await SetCenter('2',{selectedCenter, setSelectedCenter})
                    if(istab){
                        navigation.navigate('pedidos')
                    }
                }}>
                    <Ionicons name="location" size={24} color="white" />
                </StyledListOptionsWithIcons>
                <StyledListOptionsWithIcons title='Centro 3' onPress={async ()=>{
                    await SetCenter('3',{selectedCenter, setSelectedCenter})
                    if(istab){
                        navigation.navigate('pedidos')
                    }
                }}>
                    <Ionicons name="location" size={24} color="white" />
                </StyledListOptionsWithIcons>
                <StyledListOptionsWithIcons title='Centro 4' onPress={async ()=>{
                    await SetCenter('4',{selectedCenter, setSelectedCenter})
                    if(istab){
                        navigation.navigate('pedidos')
                    }
                }}>
                    <Ionicons name="location" size={24} color="white" />
                </StyledListOptionsWithIcons>
                <StyledListOptionsWithIcons title='Centro 5' onPress={async ()=>{
                    await SetCenter('5',{selectedCenter, setSelectedCenter})
                    if(istab){
                        navigation.navigate('pedidos')
                    }
                }}>
                    <Ionicons name="location" size={24} color="white" />
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

export default ChangeCenter;