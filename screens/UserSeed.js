// rnfes
import { db } from "../firebase";
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
// const cityArray = ["Alt", "NYC"];
const defProfPicArray = [
  "alpaca.png",
  "chameleon.png",
  "dog.png",
  "koala.png",
  "rabbit.png",
];

// find random element in list:
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// --------------------------------------------- Get Users function



// const GetUsers = async () => {
//     const usersCol = collection(db, 'Users');
//     const userSnapshot = await getDocs(usersCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     console.log(userList)
//     return userList;
// }


// --------------------------------------------- Add Users function

// Add a new document in collection "Users"
const AddUsers = async () => {
  const collectionRef = collection(db, "Users");

  // First need to seed Cody because he is the admin:
  // await addDoc(collectionRef, {
  //   firstName: "Murphy",
  //   lastName: "Bunnyan",
  //   email: "murphy@gh.com",
  //   password: "123",
  //   city: "NYC",
  //   isAdmin: true,
  //   isEighteen: true,
  //   profilePicture: "rabbit.png",
  //   username: "murphyb703",
  // });

  // FOR UPDATING USERS:
  // await setDoc(doc(db, "Users", "yIZEz2QZLTfQ5HefaFJuw2GUyws2"), {
  //   firstName: "Loanne",
  //   lastName: "Jee",
  //   email: "loannejee@gh.com",
  //   password: "123456",
  //   city: "NYC",
  //   isAdmin: true,
  //   isEighteen: true,
  //   profilePicture: "alpaca.png",
  //   username: "loannejee",
  // });

  // i number of users created:
  // for (let i = 0; i < 3; i++) {
  //   // Making random combination of numbers for username:
  //   let randomNums = "";
  //   for (let j = 0; j < 3; j++) {
  //     // Returns a random integer from 0 to 9:
  //     let addNum = Math.floor(Math.random() * 10);
  //     randomNums += addNum;
  //   }

  //   let firstName = uniqueNamesGenerator({ dictionaries: [names] });
  //   let lastName = pickRandom(surnameArray);

  //   // Making fake username:
  //   let userFirst = firstName.toLowerCase()[0];
  //   let userLast = lastName.toLowerCase().slice();
  //   let username = userFirst + userLast + randomNums;

  //   let email = username + "@gh.com";
  //   // let city = pickRandom(cityArray);
  //   let city = "Atl"
  //   let defProfPic = pickRandom(defProfPicArray);

  //   const payload = {
  //     firstName: `${firstName}`,
  //     lastName: `${lastName}`,
  //     email: `${email}`,
  //     password: "123",
  //     city: `${city}`,
  //     isAdmin: false,
  //     isEighteen: true,
  //     profilePicture: `${defProfPic}`,
  //     username: `${username}`,
  //   };
  //   await addDoc(collectionRef, payload);
  // }
};

export default AddUsers;
