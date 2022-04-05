import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import Checkbox from "expo-checkbox";

const TestCheckbox = (props) => {
  const category = props.category;
  const handleCat = props.handleCat;
  const catId = props.category.id;
  const value = props.category.isChecked;
  const type = props.category.type;
  const [isChecked, setIsChecked] = useState(value);

  const handleChange = () => {
    setIsChecked(!isChecked);
    handleCat(catId);
  };

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked} // boolean: true or false
        onValueChange={handleChange} // if there is check > setIsChecked
        // onChange={handleCat(catId)}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text style={styles.paragraph}>{`${type}`}</Text>
    </View>
  );
};

export default TestCheckbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "25%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
});
