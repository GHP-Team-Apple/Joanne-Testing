import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const handleGoToSeedPage = () => {
    navigation.navigate("Seed")
  };

  const goToExplore = () => {
    navigation.navigate("Explore")
  };

  const goToNotifications = () => {
    navigation.navigate("Notifications")
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoToSeedPage} style={styles.button}>
        <Text style={styles.buttonText}>Go to Seed Page</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToExplore} style={styles.button}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToNotifications} style={styles.button}>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});
