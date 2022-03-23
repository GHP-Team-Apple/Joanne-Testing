// rnfes
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

// --------------------------------------------- Event Info Arrays

// get users ids from NYC
const GetUsersNYC = async () => {
  let nycUsersArray = [];
  const q = query(collection(db, "Users"), where("city", "==", "NYC"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    nycUsersArray.push(doc.id);
  });
  return nycUsersArray;
};

// get user ids from Atlanta
const GetUsersAtlanta = async () => {
  let atlantaUsersArray = [];
  const q = query(collection(db, "Users"), where("city", "==", "Alt"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    atlantaUsersArray.push(doc.id);
  });
  return atlantaUsersArray;
};

// export const ConsoleLog = async () => {
//   const docRef = doc(db, "Users", "13ByjS5Rcc9MgJAv2ZZj");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     let friendsArray = docSnap.data().friends
//     console.log(friendsArray)
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

// // Get Single User:
// export const ConsoleLog = async () => {
//   console.log("THIS IS IMPORTANT>>>", auth)
//   const docRef = doc(db, "Users", "13ByjS5Rcc9MgJAv2ZZj");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     let friendsArray = docSnap.data().friends;
//     console.log(friendsArray);
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

// Get Single Event:
// export const ConsoleLog = async () => {
//   const docRef = doc(db, "LocalEvents", "tEQj71R4KLNuy3eA36Z2");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

export const ConsoleLog = async () => {
  let altFriendsEventArray = [];
  const userId = auth.currentUser.uid;
  // get my user info:
  const docRef = doc(db, "Users", `${userId}`);
  const docSnap = await getDoc(docRef);
  const myUserInfo = docSnap.data();
  const friendsArray = myUserInfo.friends;
  console.log("LOLOLOL", friendsArray)
  // get events where my friends are hosts and also located in Atlanta:
  const q = query(collection(db, "LocalEvents"), where("city", "==", "Atl"));
  const querySnapshot = await getDocs(q); // [5 items]
  console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    if (friendsArray.includes(`${doc.data().hostId}`)) {
        console.log("PPP", doc.data(), doc.id)
        altFriendsEventArray.push({...doc.data(), id: doc.id});
    }
  });
  console.log(altFriendsEventArray);
};





