import {React, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';


import theme from '../theme';



const styles=StyleSheet.create({
    Card:{
        backgroundColor:'#fff',
        borderRadius:20
    },
    iconInfo:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        marginBottom:5
    },
    icon:{
        marginRight:5
    },
    styleTextStore:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        marginBottom:5,
        width:'100%',
        justifyContent:'center',
    }
    
})

const leftContent=()=> {
    return(
        <View style={{
            backgroundColor:theme.colors.primary,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            height:40,
            borderRadius:10
            }}
        >
            <FontAwesome5 name="box-open" size={24} color="white" />
        </View>
    )
    
}


const StyledCardProvider= ({style={},...props}) => {

    const navigation=useNavigation();

    const styleCard={
        ...styles.Card,
        ...style
    }
    
    return (
        <Ripple
            rippleColor={theme.colors.primary}
            rippleDuration={600}
            rippleContainerBorderRadius={20}
            style={{
                marginHorizontal:10,
                marginBottom:10,
                marginTop:10
            }}
            onPress={()=>{
                navigation.navigate('merchantInventary',{
                    providerId: props.providerId,
                    providerPhoto: props.providerPhoto,
                    nameBussines: props.providerNameEnterprise
                })
            }}
        >
            <Card style={styleCard} {...props}>
                <Card.Title title={'ID Proveedor #'+props.providerId}  left={leftContent} />
                <Card.Content>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <View style={styles.iconInfo}>
                                <FontAwesome5  style={styles.icon}name="user" size={28} color="black" />
                                <Text variant="headlineSmall">{props.userId.user_name}</Text>
                            </View>
                            <View style={styles.iconInfo}>
                                <Feather name="smartphone" size={26} color="black" />
                                <Text style={{fontSize:16}}variant="bodyMedium"> {props.userId.userPhone}</Text>
                            </View>
                            <View style={styles.iconInfo}>
                                <Ionicons name="location-outline" size={24} color="black" />  
                                <Text style={{fontSize:16}}> Ocaña, NS</Text>
                            </View>
                        </View>
                        <Image
                            style={{width: 100, height: 100, borderRadius: 80, marginTop:-20, borderWidth: 1, borderColor:theme.colors.primary, backgroundColor:'grey'}}
                            source={{uri: props.providerPhoto}}
                            contentFit="fill"
                            transition={1000}
                        />                
                </View>

                    <View style={styles.styleTextStore}>
                    <MaterialIcons name="storefront" size={24} color="grey" />
                        <Text style={{color:"grey", fontWeight:'bold'}}> {props.providerNameEnterprise}</Text>
                    </View>

                </Card.Content>
            </Card>
        </Ripple>
    )
  
};

export default StyledCardProvider;