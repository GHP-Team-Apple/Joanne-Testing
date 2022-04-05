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
  deleteDoc,
  deleteField,
  updateDoc,
} from "firebase/firestore/lite";
import { auth } from "../firebase";
import { async } from "@firebase/util";
const axios = require("axios");

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


function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const startDate = new Date(Date.UTC(2022, 2, 25, 10, 45));

const end = new Date(Date.UTC(2022, 3, 25, 18));

// FOR UPDATING USERS WITHOUT OVERWRITING WHOLE DOCUMENT:
// export const ConsoleLog = async () => {
//   const eventArr = [];
//   const q = collection(db, "LocalEvents");
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     eventArr.push(doc.id);
//   });

//   for (let i = 0; i < eventArr.length; i++) {
//     // const type = pickRandom(typeArray)
//     await updateDoc(
//       doc(db, "LocalEvents", `${eventArr[i]}`),
//       {
//         // firstName: "Loanne",
//         // lastName: "Jee",
//         // email: "loannejee@gh.com",
//         // password: "123456",
//         // city: "NYC",
//         // isAdmin: true,
//         // isEighteen: true,
//         // profilePicture: "alpaca.png",
//         // username: "loannejee",
//         // id: `${eventArr[i]}`,
//         // type: type,
//         // startTime: deleteField(),
//         startDate: startDate,
//         end: end,
//         visibleUntil: end
//       },
//       { merge: true }
//     );
//   }
// };



// Getting your followers:
// export const getFollowing = async (userId) => {
//   const followingCollection = collection(db, `Users/${userId}/following`);
//   const followingSnapshot = await getDocs(followingCollection);

//   return Promise.all(
//     followingSnapshot.docs.map(async (doc) => {
//       let following = { ...doc.data() };
//       if (following.userRef) {
//         let userData = await getDoc(following.userRef);
//         if (userData.exists()) {
//           return { ...userData.data(), uid: userData.id };
//         }
//       }
//     })
//   );
// };



// Adding userRef to people you're following (method 1):
// export const addRef = async (followUserId, myUserId) => {
//   await addDoc(collection(db, "Users", myUserId, "following"), {
//     userRef: doc(db, "Users", followUserId),
//   });
// };

// Adding userRef to people you're following (method 2):
export const addRef = async (followUserId, myUserId) => {
  await addDoc(collection(db, `Users/${myUserId}/following`), {
    userRef: doc(db, "Users", followUserId),
  });
};


// export const ConsoleLog = async () => {
//   addRef("WalEUjuIy6nEp2DvzVdd", "tGBFjYBpoZWCO9lyycynXwlVVza2");
// };


// Random cat picture generator:
// export const ConsoleLog = async () => {
//   try {
//       const response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
//       console.log('CAT:', response.data[0].url);
//       // return data.events;
//   } catch (err) {
//       console.log('error: ', err);
//   }
// }




// ------------------------- Making a specific user to save a specific event: 


const getSingleEvent = async () => {
  const docRef = doc(db, "LocalEvents", "bEQDumNCtDHOVT3yt6EK");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};


const saveEvent = async (event, userId) => {
  const eventsCollection = collection(db, "SavedEvents");
  await addDoc(eventsCollection, { ...event, checkIn: true, userId: userId });
};


export const ConsoleLog = async () => {
  let event = await getSingleEvent(); 
  saveEvent(event, "v1jYLpwYVBORPqmwtGGq") //
};


// -------------------------



// const getIsFollowing = async (userId, otherUserId) => {
//   const followingRef = doc(db, `Users/${userId}/following/${otherUserId}`);
//   const followingDoc = await getDoc(followingRef);
//   // return boolean whether userId follows otherUserId
//   return followingDoc.exists();
// };


// const getFollowing = async (userId) => {
//   const followingCollection = collection(db, `Users/${userId}/following`);
//   const followingSnapshot = await getDocs(followingCollection);
//   return Promise.all(
//     followingSnapshot.docs.map(async (doc) => {
//       let following = { ...doc.data() };
//       if (following.userRef) {
//         let userData = await getDoc(following.userRef);
//         if (userData.exists()) {
//           return { ...userData.data(), id: userData.id };
//         }
//       }
//     })
//   );
// };


// export const getFriends = async (userId) => {
//   // get users you are following:
//   const followingArr = await getFollowing(userId);
//   // check if you both are friends:
//   const currentFriends = [];
//   for (let i = 0; i < followingArr.length; i++) {
//     let following = followingArr[i];
//     let isFollowing = await getIsFollowing(following.id, userId);
//     if (isFollowing) {
//       currentFriends.push(following);
//     }
//   }
//   return currentFriends;
// };


export const unFollow = async (myUserId, otherUserId) => {
  const followingRef = doc(db, `Users/${myUserId}/following/${otherUserId}`);
  await deleteDoc(followingRef);
};


// export const ConsoleLog = async (userId) => {
//   await unFollow("13ByjS5Rcc9MgJAv2ZZj", "13ByjS5Rcc9MgJAv2ZZj");
// };
