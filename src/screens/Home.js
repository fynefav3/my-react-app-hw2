import Goals from "../../src/screens/Goals";
import Profile from "../../src/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Goals"
        component={Goals}
      />
    </Tab.Navigator>
  );
}
