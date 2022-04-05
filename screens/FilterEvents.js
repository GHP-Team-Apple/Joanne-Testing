import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { CheckBox } from "react-native-elements";


const FilterEvents = () => {
  const categoryList = [
    {
      cat: "concert",
      id: 1,
    },
    {
      cat: "social activities",
      id: 2,
    },
    {
      cat: "theater",
      id: 3,
    },
    {
      cat: "travel & outdoors",
      id: 4,
    },
  ];

  //   const categoryList = {
  //     concert: false,
  //     "social activities": false,
  //     theater: false,
  //     "travel & outdoors": false,
  //     all: true,
  //   };

  // const categoryList = []

  const [categories, setCategories] = useState(categoryList);
  const [checked, setChecked] = useState(false);
  //   const [checkbox, setCheckbox] = useState([])

  //   for (let key in categories) {
  //       let checkbox =  (<CheckBox
  //       title={`${key}`}
  //       checked={checked}
  //       onPress={() => {
  //         setChecked(!checked);
  //         console.log(checked);
  //         setCategories({ ...categoryList, key: true, all: false });
  //         console.log(categories);
  //       }}
  //     />)
  //     list.push(checkbox)
  //     setCheckbox([...list])
  //   }

 
  return (
    <View style={styles.container}>
      {/* {categories.map((category, idx) => {
        const key = Object.keys(category);
        return (
          <Pressable style={styles.button} key={idx} onPress={handlePress}>
            <Text style={styles.buttonText}>{`${key}`}</Text>
          </Pressable>
        );
      })} */}

      {/* <CheckBox
        title="concert"
        checked={checked}
        onPress={() => {
          setChecked(!checked);
          console.log(checked);
          setCategories({ ...categoryList, concert: true, all: false });
          console.log(categories);
        }}
      /> */}
      <CheckBox />
    </View>
  );
};

export default FilterEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#e0e0e0",
    width: "35%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 12,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});
