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
import { async } from "@firebase/util";
const axios = require('axios');

// --------------------------------------------- Event Info Arrays

// get users ids from NYC
// const GetUsersNYC = async () => {
//   let nycUsersArray = [];
//   const q = query(collection(db, "Users"), where("city", "==", "NYC"));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     nycUsersArray.push(doc.id);
//   });
//   return nycUsersArray;
// };

// get user ids from Atlanta
// const GetUsersAtlanta = async () => {
//   let atlantaUsersArray = [];
//   const q = query(collection(db, "Users"), where("city", "==", "Alt"));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     atlantaUsersArray.push(doc.id);
//   });
//   return atlantaUsersArray;
// };

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
//   const docRef = doc(db, "Users", "13ByjS5Rcc9MgJAv2ZZj");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
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

// export const ConsoleLog = async () => {
//   let altFriendsEventArray = [];
//   const userId = auth.currentUser.uid;
//   // get my user info:
//   const docRef = doc(db, "Users", `${userId}`);
//   const docSnap = await getDoc(docRef);
//   const myUserInfo = docSnap.data();
//   const friendsArray = myUserInfo.friends;
//   console.log("LOLOLOL", friendsArray)
//   // get events where my friends are hosts and also located in Atlanta:
//   const q = query(collection(db, "LocalEvents"), where("city", "==", "Atl"));
//   const querySnapshot = await getDocs(q); // [5 items]
//   console.log(querySnapshot)
//   querySnapshot.forEach((doc) => {
//     if (friendsArray.includes(`${doc.data().hostId}`)) {
//         console.log("PPP", doc.data(), doc.id)
//         altFriendsEventArray.push({...doc.data(), id: doc.id});
//     }
//   });
//   console.log(altFriendsEventArray);
// };
//
// FOR UPDATING USERS WITHOUT OVERWRITING WHOLE DOCUMENT:
// export const ConsoleLog = async () => {
//   await setDoc(doc(db, "Users", "tGBFjYBpoZWCO9lyycynXwlVVza2"), {
//     firstName: "Loanne",
//     lastName: "Jee",
//     email: "loannejee@gh.com",
//     // password: "123456",
//     city: "NYC",
//     // isAdmin: true,
//     // isEighteen: true,
//     // profilePicture: "alpaca.png",
//     username: "loannejee",
//     uid: "tGBFjYBpoZWCO9lyycynXwlVVza2",
//   }, { merge: true });
// }


// Getting your followers:
export const getFollowing = async (userId) => {
  const followingCollection = collection(db, `Users/${userId}/following`);
  const followingSnapshot = await getDocs(followingCollection);

  return Promise.all(
    followingSnapshot.docs.map(async (doc) => {
      let following = { ...doc.data() };
      if (following.userRef) {
        let userData = await getDoc(following.userRef);
        if (userData.exists()) {
          return { ...userData.data(), uid: userData.id };
        }
      }
    })
  );
};

// export const addRef = async (followUserId, myUserId) => {
//   await addDoc(collection(db, "Users", myUserId, "following"), {
//     userRef: doc(db, "Users", followUserId),
//   });
// };

// Adding userRef to people you're following:
export const addRef = async (followUserId, myUserId) => {
  await addDoc(collection(db, `Users/${myUserId}/following`), {
    userRef: doc(db, "Users", followUserId),
  });
};


// export const ConsoleLog = async () => {
//   addRef("WalEUjuIy6nEp2DvzVdd", "tGBFjYBpoZWCO9lyycynXwlVVza2");
// };

export const ConsoleLog = async () => {
  try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
      console.log('CAT:', response.data[0].url);
      // return data.events;
  } catch (err) {
      console.log('error: ', err);
  }
}
