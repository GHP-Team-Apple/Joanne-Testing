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

import { db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "react-native-web";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";

// --------------------------------------------- User Information Arrays

const { uniqueNamesGenerator, names } = require("unique-names-generator");
const surnameArray = require("./surnames");
const cityArray = ["Alt", "NYC"];
const defProfPicArray = [
  "alpaca.png",
  "chameleon.png",
  "dog.png",
  "koala.png",
  "rabbit.png",
];

// find element in list:
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// --------------------------------------------- User Information Arrays

function UserSeed() {
  // Get Users:
  // const GetUsers = async () => {
  //     const usersCol = collection(db, 'Users');
  //     const userSnapshot = await getDocs(usersCol);
  //     const userList = userSnapshot.docs.map(doc => doc.data());
  //     console.log(userList)
  //     return userList;
  // }

  // Add a new document in collection "users"
  const AddUsers = async () => {
    const collectionRef = collection(db, "Users");

    // First need to seed Cody because he is the admin:
    // await addDoc(collectionRef, {
    //   firstName: 'Cody',
    //   lastName: 'Pug',
    //   email: "cody@gh.com",
    //   password: "123",
    //   city: "NYC",
    //   isAdmin: true,
    //   isEighteen: true,
    //   profilePicture: 'dog.png',
    //   username: 'codypug',
    // });

    // i number of users created:
    for (let i = 0; i < 1; i++) {
      // Making random combination of numbers for username:
      let randomNums = "";
      for (let j = 0; j < 3; j++) {
        // Returns a random integer from 0 to 9:
        let addNum = Math.floor(Math.random() * 10);
        randomNums += addNum;
      }

      let firstName = uniqueNamesGenerator({ dictionaries: [names] });
      let lastName = pickRandom(surnameArray);

      // Making fake username:
      let userFirst = firstName.toLowerCase()[0];
      let userLast = lastName.toLowerCase().slice();
      let username = userFirst + userLast + randomNums;

      let email = username + "@gh.com";
      let city = pickRandom(cityArray);
      let defProfPic = pickRandom(defProfPicArray);

      const payload = {
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        email: `${email}`,
        password: "123",
        city: `${city}`,
        isAdmin: false,
        isEighteen: true,
        profilePicture: `${defProfPic}`,
        username: `${username}`,
      };
      await addDoc(collectionRef, payload);
    }
  };

  return (
    <View style={styles.MainContainer}>
      <Button title="Add users" onPress={AddUsers} />
    </View>
  );
}

export default UserSeed;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
