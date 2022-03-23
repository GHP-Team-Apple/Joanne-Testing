import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";

const SingleUserRow = (props) => {
  const route = useRoute();
  const event = route.params.event;

  const goToSingleUserView = () => {
    navigation.navigate("SingleUserView", {
      event: event,
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={goToSingleUserView}>
      <Text style={styles.buttonText}>Attendee #</Text>
    </TouchableOpacity>
  );
};

export default SingleUserRow;

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
