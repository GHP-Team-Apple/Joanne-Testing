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
const axios = require("axios");

// --------------------------------------------- Event Info Arrays

const localEventNameArray = require("./fakeEventNames");
const isFreeArray = [true, false];

// find random element in list:
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// random date:
function setStart() {
  const someDate = new Date(2022, 3, 25, 10, 45);
  return someDate;
}

function setEnd() {
  const someDate = new Date(2022, 3, 25, 18);
  return someDate;
}

const getCat = async () => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search`
    );
    return response.data[0].url;
  } catch (err) {
    console.log("error: ", err);
  }
};

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

// -------------------------------------------- AddLocalEventsNYC

export const AddLocalEventsNYC = async () => {
  const collectionRef = collection(db, "LocalEvents");
  const nycUsersArray = await GetUsersNYC();

  // i number of events created:
  for (let i = 0; i < 5; i++) {
    let localEventName = pickRandom(localEventNameArray);
    let isFree = pickRandom(isFreeArray);
    let start = setStart();
    let end = setEnd();
    let venueName = 'Team Apple';
    let venueAddress = '2201 Grace Hopper Ave'
    let imageUrl = await getCat();
    let userIdArray;
    // For NYC - random coordinates
    let latitude =
      Math.random() * (40.874999779216964 - 40.59161688931469) +
      40.59161688931469;
    let longitude =
      Math.random() * (-73.73774318813449 - -74.00863280202847) +
      -74.00863280202847;
    let hostId = pickRandom(nycUsersArray);
    // let hostId = "13ByjS5Rcc9MgJAv2ZZj"; // cody's user id

    const payload = {
      name: localEventName,
      description: "Come join our event!",
      start: start,
      end: end,
      isFree: isFree,
      location: {
        lat: latitude,
        lon: longitude,
      },
      hostId: hostId,
      city: "NYC",
      imageUrl: imageUrl,
      venueName: venueName,
      venueAddress: venueAddress,
    };
    const docRef = await addDoc(collectionRef, payload);
    await setDoc(doc(db, "LocalEvents", docRef.id), {
      eventId: docRef.id,
    }, { merge: true });
  }
};

// --------------------------------------------- AddLocalEventsAtlanta

export const AddLocalEventsAtlanta = async () => {
  const collectionRef = collection(db, "LocalEvents");
  const atlantaUsersArray = await GetUsersAtlanta();

  // i number of events created:
  for (let i = 0; i < 5; i++) {
    let localEventName = pickRandom(localEventNameArray);
    let isFree = pickRandom(isFreeArray);
    let start = setStart();
    let end = setEnd();
    let venueName = 'Team Apple';
    let venueAddress = '2201 Grace Hopper Ave'
    let imageUrl = await getCat();
    // For Atlanta - random coordinates
    let latitude =
      Math.random() * (33.87693603423371 - 33.67004820260162) +
      33.67004820260162;
    let longitude =
      Math.random() * (-84.34994309537356 - -84.52327900174737) +
      -84.52327900174737;
    let hostId = pickRandom(atlantaUsersArray);

    const payload = {
      name: localEventName,
      description: "Come join our event!",
      start: start,
      end: end,
      isFree: isFree,
      location: {
        lat: latitude,
        lon: longitude,
      },
      hostId: hostId,
      city: "Atl",
      imageUrl: imageUrl,
      venueName: venueName,
      venueAddress: venueAddress,
    };
    const docRef = await addDoc(collectionRef, payload);
    await setDoc(doc(db, "LocalEvents", docRef.id), {
      eventId: docRef.id,
    }, { merge: true });
  }
};




