import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Need to fix after merge:
import FriendsMap from './move-to-client/move-to-components/FriendsMap';

// Your web app's Firebase configuration:
const firebaseConfig = {
  apiKey: "AIzaSyBHrA1B6WMTy3HqvKuxmEhj5em6A6q3pkg",
  authDomain: "awesomeproject-e60aa.firebaseapp.com",
  projectId: "awesomeproject-e60aa",
  storageBucket: "awesomeproject-e60aa.appspot.com",
  messagingSenderId: "218006984459",
  appId: "1:218006984459:web:6935e4d37860153d4d740e",
  measurementId: "G-W53W4SX1WF"
};

// Initialize Firebase:
const app = initializeApp(firebaseConfig);

// Initialize Services:
const db = getFirestore()

// Collection Reference:
const colRef = collection(db, 'users')

// Get Collection data:
getDocs(colRef)
  .then((snapshot) => {
    let users = []
    snapshot.docs.forEach((doc)=> {
      users.push({...doc.data(), id:doc.id})
    })
    console.log(users)
  })

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Team Apple!</Text>
      {/* <FriendsMap/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
