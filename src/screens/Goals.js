import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ListItem } from "@rneui/themed";

export default function App() {

const list = [
  {
    goal: 'Get better at Mobile development ',
    description: 'Constant practice in three months '
  },
  {
    goal: 'Go for Masters ',
    description: 'Master in Software Development'
  },
  {
    goal: 'Investment',
    description: 'Invest in Real Estate'
  },
  {
    goal: 'Land a Job',
    description: 'A good Job'
  },
  {
    goal: 'Buy stock',
    description: "Telsa stocl won't be bad"
  },
  {
    goal: 'Loose weight',
    description: 'Register at the gym'
  },
];

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='My goal!' />
        <Button title= "Add Goal" />
      </View>
      <Text>List of goals</Text>
      {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{l.goal}</ListItem.Title>
          <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
  }
});
