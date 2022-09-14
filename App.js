import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        style={styles.configButton}
        onPress={() => Alert.alert("Simple Button pressed")}
        color= "#ffff45"
        title="Click Here"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
  },
  configButton: {
    borderWidth: 5,
    borderColor: "#000000",
    padding: 12,
    backgroundColor: "black",
  },
});
