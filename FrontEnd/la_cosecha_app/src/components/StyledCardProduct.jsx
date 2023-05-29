import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';



import theme from '../theme';
import Ripple from 'react-native-material-ripple';



const styles=StyleSheet.create({
    Card:{
        backgroundColor:'#fff',
        borderRadius:20,
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
    textPrice:{
        color:theme.colors.primary,
        fontWeight:'bold'
        
    },
    title:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        marginBottom:5,
        justifyContent:'space-between',

    }
    
})



const StyledCardProduct= ({style={},...props}) => {
    const navigation=useNavigation();
    const styleCard={
        ...styles.Card,
        ...style
    }
    const leftContent=()=> {
        return(
            <View style={{
                backgroundColor:theme.colors.primary,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                height:40,
                borderRadius:15
                }}
            >
                <Image
                    style={{width:40,height:40,borderRadius:10}}
                    source={{uri: props.providerId.providerPhoto}}
                />
            </View>
        )
        
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
                navigation.navigate('ProductInfo',{
                    id: props.product_id
                })
            }}
        >
        <Card style={styleCard} {...props}>
            <Card.Title title={props.providerId.providerNameEnterprise} left={leftContent} titleStyle={{color:'grey', fontWeight:'bold', fontSize:20}} />
            <Card.Content>
                <Card.Cover source={{ uri: props.product_lot_foto }} />
                <View style={styles.title}>
                     <Text variant="titleLarge">{props.product_lot_name}</Text>
                        <View style={styles.iconInfo}>
                            <AntDesign name="checkcircleo" size={20} color={theme.colors.primary} />
                            <Text variant="bodyMedium"> Disponible</Text>
                        </View>
                </View>
                
                <View style={styles.iconInfo}>
                <MaterialIcons name="attach-money" size={30} color= {theme.colors.primary} />
                <Text style={styles.textPrice} variant="headlineMedium"> {props.product_lot_price} /kg COP</Text>
                </View>

               
                </Card.Content>

        </Card>
        </Ripple>

    )
  
};
export default StyledCardProduct;