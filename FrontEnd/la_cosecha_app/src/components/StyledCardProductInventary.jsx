import React from "react";
import { StyleSheet, View } from "react-native";
import { Text,Card } from "react-native-paper";
import { Image } from "expo-image";
import theme from "../theme";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const styles=StyleSheet.create({
    style:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    viewIcon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:100,
        height:100,
        borderColor:theme.colors.primary,
        borderWidth:1,
        borderRadius:80,
        backgroundColor:'grey'
    },
    card:{
        backgroundColor:'#fff',
        borderRadius:20,
        marginBottom:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10
    }
})

const StyledCardProductInventary=({style={},...props})=>{
    const StyledCard={
        ...styles.card,
        ...style
    }
    return (
        <Card style={StyledCard} {...props}>
            <Card.Content>
                <View style={styles.style} >
                    <Image
                        style={styles.image}
                        source={{uri: props.product_lot_foto}}
                        contentFit="fill"
                        transition={1000}
                    />
                    <View style={{alignItems:'flex-end'}}>
                        <Text variant="headlineSmall" style={{marginTop:-10, marginBottom:10}}> {props.product_lot_name}</Text>
                        <View style={styles.viewIcon}>
                            <AntDesign name="checkcircleo" size={20} color={theme.colors.primary} style={{marginRight:5}}/>
                            <Text>Disponible</Text>
                        </View>
                        <View style={styles.viewIcon}>
                            <MaterialCommunityIcons name="weight-kilogram" size={24} color={theme.colors.primary} style={{marginRight:5}}/>
                            <Text>{props.product_lot_cant} kg</Text>
                        </View>
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}

export default StyledCardProductInventary