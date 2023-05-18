import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



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
            <Feather name="loader" size={24} color="white" />
        </View>
    )
    
}

const StyledCardOrderDelivered= ({style={},...props}) => {
    const styleCard={
        ...styles.Card,
        ...style
    }
    
    return (
        <Card style={styleCard} {...props}>
            <Card.Title title="Pedido #312323" left={leftContent} />
            <Card.Content>
                <View style={styles.iconInfo}>
                    <FontAwesome5  style={styles.icon}name="user" size={24} color="black" />
                    <Text variant="titleLarge">Jhon Ramirez</Text>
                </View>
                <View style={styles.iconInfo}>
                    <SimpleLineIcons style={styles.icon}name="direction" size={24} color="black" />
                    <Text variant="bodyMedium">Cra 10 # 3 - 15</Text>
                </View>
                <View style={styles.iconInfo}>
                <Entypo style={styles.icon} name="shopping-bag" size={24} color="black" />   
                    <Text>24 de mayo 2023 10:25pm</Text>
                </View>
                <View style={styles.iconInfo}>
                <Feather style={styles.icon} name="loader" size={24} color="black" />
                    <Text>25 de mayo 2023 12:25 pm</Text>
                </View>
            </Card.Content>
        </Card>
    )
  
};

export default StyledCardOrderDelivered;