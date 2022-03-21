import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSeed from "./screens/UserSeed";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

// Need to fix after merge:
import FriendsMap from "./move-to-client/move-to-components/FriendsMap";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserSeed" component={UserSeed} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <View style={styles.container}>
<Text>Team Apple!</Text>
<FriendsMap/>
<StatusBar style="auto" />
</View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
