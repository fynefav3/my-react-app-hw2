import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class SplashScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    }, 5000);
  }

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <Image source={require('../../assets/logo.png')}
          style={{ width: 500, height: 400, resizeMode: 'contain' }} />
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f00",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   configButton: {
//     borderWidth: 5,
//     borderColor: "#000000",
//     padding: 12,
//     backgroundColor: "black",
//   },
// });
