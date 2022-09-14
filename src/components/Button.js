import { StyleSheet, Text, Pressable } from "react-native";

export default function Button() { 
  return (
    <Pressable style={styles.buttonStyle} >
      <Text style={styles.textStyle}>Hello, here is the custom button</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})