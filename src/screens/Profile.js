import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";

export default function Profile() {
  return (
    // <>
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 30,
        }}
      >
        <Avatar
          marginTop={60}
          size={150}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/women/57.jpg" }}
          title="Bj"
          containerStyle={{ backgroundColor: "grey" }}
        />
        
      </View>
      <View  style={{
          justifyContent: "space-around",
          alignItems: "center"
          
        }}>
      <Text style={{marginBottom: 10,fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>Prisicilia Gabriel</Text>
      <Text style={{marginBottom: 10,fontSize: 18, fontWeight: "bold", justifyContent: "center"}}>example@gmail.com</Text>
      <Text style={{marginBottom: 10,fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>My Goals  </Text>


        </View>

    </ScrollView>
  );
}
