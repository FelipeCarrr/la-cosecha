import React from "react";

import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import Ripple from "react-native-material-ripple";
import theme from "../theme";

export default function ModalImagePicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
            <Ripple 
                onPress={onClose}
                rippleDuration={800}
                rippleContainerBorderRadius={20}
                style={{marginTop:25,width:60,height:60,justifyContent:'center',alignItems:'center'}}
            >
                <FontAwesome name="close" size={28} color="white" />
            </Ripple>
        </View>
        <View style={styles.pickerContainer}>
            {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: theme.colors.primary,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '20%',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingHorizontal: 20,
      marginRight:-20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
  });
  