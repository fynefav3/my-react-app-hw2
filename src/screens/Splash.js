import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { Component } from "react";

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
      <View style={{ backgroundColor: "#ffffff", flex:1 }}>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: '100%',
              height: '80%',
              resizeMode: "contain",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
      </View>
    );
  }
}
