// rnfes
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "react-native-web";

import AddUsers from "./UserSeed";
import { AddLocalEventsNYC, AddLocalEventsAtlanta } from "./LocalEventSeed";



function Seed() {
    
  return (
    <View style={styles.MainContainer}>
      <Button title="Add users" onPress={AddUsers} />
      <View style={styles.space} />
      <Button title="Add NYC events" onPress={AddLocalEventsNYC} />
      <View style={styles.space} />
      <Button title="Add Atlanta events" onPress={AddLocalEventsAtlanta}/>
    </View>
  );
}
// onPress={AddEvents}
export default Seed;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: 20,
    padding: 30,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});
