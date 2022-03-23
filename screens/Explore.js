import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect, useRef } from "react";
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
import { auth } from "../firebase";
import SingleEventRow from "./SingleEventRow";

const Explore = () => {
  // analogous to setting up local state:
  const [nycFriendsEventArray, setnycFriendsEventArray] = useState([]);
  const [eventList, setEventList] = useState(<Text></Text>);

  const findEvents = async () => {
    const userId = auth.currentUser.uid;
    // get my user info:
    const docRef = doc(db, "Users", `${userId}`);
    const docSnap = await getDoc(docRef);
    const myUserInfo = docSnap.data();
    const friendsArray = myUserInfo.friends;

    // get events where my friends are hosts and also located in NYC:
    // analogous-ish to fetchEvents
    const q = query(collection(db, "LocalEvents"), where("city", "==", "NYC"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (friendsArray.includes(`${doc.data().hostId}`)) {
        nycFriendsEventArray.push({ ...doc.data(), id: doc.id });
      }
    });
    setnycFriendsEventArray(nycFriendsEventArray);

    // map and pass props:
    let eventList = nycFriendsEventArray.map((event) => {
      return (
        <SingleEventRow key={event.id} event={event} />
      );
    });

    // set new state for event list:
    setEventList(eventList);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={findEvents}>
        <Text style={styles.buttonText}>FILTER EVENTS</Text>
      </TouchableOpacity>
      {eventList}
    </View>
  );
};

export default Explore;

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
