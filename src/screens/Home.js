import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


// export default function Home() {
//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput placeholder='Your course goal!' />
//         <Button title= "Add Goal" />
//       </View>
//       <Text>List of goals</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//
//   },
//   inputContainer: {
//     flexDirection: "row",
//   }
// });

const Home = () => (
  <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Your course goal!" />
      <Button title="Add Goal" 
      color="#ff0000"/>
    </View>
    <Text style={styles.title}>List of goals</Text>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,

  },
  inputContainer: {
    flexDirection: "row",
  },
  title: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Home;
