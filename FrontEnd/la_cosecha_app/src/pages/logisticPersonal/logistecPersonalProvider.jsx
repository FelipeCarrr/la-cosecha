import React from "react";
import { View,Text,StyleSheet,} from "react-native";
import theme from "../../theme";
import  Constants  from "expo-constants"
import { useIsFocused } from "@react-navigation/native";
import StyledButtonBack from "../../components/StyleButtonBack";
import StyeledSearchbarwithIcon from "../../components/StyledSearchBarwithIcon";
import { AntDesign } from '@expo/vector-icons';


const LogisticPersonalProvider=({navigation, orderInfo, setOrdeInfo})=>{
    useIsFocused(()=>{
        setOrdeInfo(false);
    })
    return(
        <>
        <View 
            style={{
                backgroundColor:theme.colors.primaryLight,
                
            }}
        >
            <StyledButtonBack 
                style={{
                    marginBottom:0,
                    marginTop:Constants.statusBarHeight,
                    marginLeft:10
                }}
                onPress={()=>{
                    navigation.navigate('PersonalHome')
                }}
            />
            <StyeledSearchbarwithIcon>
                <AntDesign name="adduser" size={24} color="white" />
            </StyeledSearchbarwithIcon>
        </View>
        <View style={theme.containerView}>
            
        </View>
        </>
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
export default LogisticPersonalProvider