import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SingleUserRow from "./SingleUserRow";

const AttendeesList = () => {
  const route = useRoute();
  const event = route.params.event;
  const attendeeArray = route.params.attendeeArray;

  const attendeeList = attendeeArray.map((attendee) => {
    return (<SingleUserRow key={attendee.id} attendee={attendee} />);
  });

  return (
    <View style={styles.container}>
      <Text>AttendeesList</Text>
      {attendeeList}
    </View>
  );
};

export default AttendeesList;

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
