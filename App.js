import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Seed from "./screens/Seed";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SingleEventView from "./screens/SingleEventView";

import FriendsMap from "./move-to-client/move-to-components/FriendsMap";
import AttendeesList from "./screens/AttendeesList";
import Notifications from "./screens/Notifications";
import SingleUserView from "./screens/SingleUserView";
import Explore from "./screens/Explore"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Seed" component={Seed} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SingleEventView" component={SingleEventView} />
        <Stack.Screen name="AttendeesList" component={AttendeesList} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="SingleUserView" component={SingleUserView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
