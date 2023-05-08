import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src/main.jsx';

export default function App() {
  console.log("hola");
  return (
      <View style={styles.container}>
        <Main/>
        <StatusBar style="auto" />
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
