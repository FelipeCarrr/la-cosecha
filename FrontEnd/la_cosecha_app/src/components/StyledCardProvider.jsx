import {React, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




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
    const [image, setImage]= useState('https://www.realmadrid.com/img/vertical_380px/cristiano_550x650_20180917025046.jpg')
    const styleCard={
        ...styles.Card,
        ...style
    }
    
    return (
        <Card style={styleCard} {...props}>
            <Card.Title title="ID Proveedor #P02" left={leftContent} />
            <Card.Content>
               <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <View style={styles.iconInfo}>
                            <FontAwesome5  style={styles.icon}name="user" size={28} color="black" />
                            <Text variant="headlineSmall">Juan Bautista</Text>
                        </View>
                        <View style={styles.iconInfo}>
                            <Feather name="smartphone" size={26} color="black" />
                            <Text style={{fontSize:16}}variant="bodyMedium"> 316 0435877</Text>
                        </View>
                        <View style={styles.iconInfo}>
                            <Ionicons name="location-outline" size={24} color="black" />  
                            <Text style={{fontSize:16}}> Ocaña, NS</Text>
                        </View>
                    </View>
                    <Image
                        style={{width: 100, height: 100, borderRadius: 80, marginTop:-20, borderWidth: 1, borderColor:theme.colors.primary}}
                        source={{uri: image}}
                        contentFit="fill"
                        transition={1000}
                    />                
               </View>

                <View style={styles.styleTextStore}>
                <MaterialIcons name="storefront" size={24} color="grey" />
                    <Text style={{color:"grey", fontWeight:'bold'}}> Tomates Doña Marta</Text>
                </View>

            </Card.Content>
        </Card>

    )
  
};

export default StyledCardProvider;