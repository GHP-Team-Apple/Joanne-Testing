import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { auth } from "../firebase";

const SingleUserView = () => {
  const navigation = useNavigation();

  const goToSingleUserView = () => {
    navigation.navigate("SingleUserView");
  };

  return (
    <View style={styles.container}>
      <Text>SingleUserView</Text>
    </View>
  );
};

export default SingleUserView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});
