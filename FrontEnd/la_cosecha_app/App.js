import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {MD3LightTheme as DefaultTheme,Provider,} from 'react-native-paper';

import Main from './src/main.jsx';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: '#14AE5C',
  },
};

export default function App() {
  console.log("hola");
  return (
      <View style={styles.container}> 
        <Main/>
       <StatusBar style="default" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
    //marginTop: Constants.statusBarHeight
  }
});
