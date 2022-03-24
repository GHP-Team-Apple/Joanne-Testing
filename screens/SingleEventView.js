import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { db } from "../firebase";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";

const SingleEventView = () => {
  const route = useRoute();
  const event = route.params.event;
  const navigation = useNavigation();

  const goToAttendeesList = async () => {
    const attendeeIdArray = event.attendees;
    const attendeeArray = await Promise.all(
      attendeeIdArray.map(async (attendeeId) => {
        const docRef = doc(db, "Users", attendeeId);
        const docSnap = await getDoc(docRef);
        return { ...docSnap.data(), id: doc.id };
      })
    );
    navigation.navigate("AttendeesList", {
      event: event,
      attendeeArray: attendeeArray,
    });
  };

  return (
    <View style={styles.container}>
      <Text>SingleEventView</Text>
      <Text>{`${event.name}`}</Text>
      <Text>Event Picture Here!</Text>
      <Text>{`${event.description}`}</Text>
      <Text>{`${event.start}`}</Text>
      <TouchableOpacity onPress={goToAttendeesList} style={styles.button}>
        <Text style={styles.buttonText}>Attendees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Event ❤️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Attend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleEventView;

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
