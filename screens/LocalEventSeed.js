// rnfes
import { db } from "../firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";

// --------------------------------------------- Event Info Arrays

const localEventNameArray = require("./fakeEventNames");
const isFreeArray = [true, false];

// find random element in list:
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// random date:
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

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

// ----------------------------------------------- AddLocalEventsNYC

// Add a new document in collection "Users"
export const AddLocalEventsNYC = async () => {
  const collectionRef = collection(db, "LocalEvents");
  const nycUsersArray = await GetUsersNYC();

  // i number of events created:
  for (let i = 0; i < 1; i++) {
    let localEventName = pickRandom(localEventNameArray);
    let isFree = pickRandom(isFreeArray);
    let start = randomDate(new Date(2022, 5, 1), new Date());
    let end = start.setHours(start.getHours() + 2)
    let venueName;
    let venueAddress;
    let imgUrl;
    let userIdArray;
    // For NYC - random coordinates
    let latitude =
      Math.random() * (40.874999779216964 - 40.59161688931469) +
      40.59161688931469;
    let longitude =
      Math.random() * (-73.73774318813449 - -74.00863280202847) +
      -74.00863280202847;
    let hostId = pickRandom(nycUsersArray);

    const payload = {
      name: `${localEventName}`,
      description: "Come join our event!",
      start: `${start}`,
      end: `${end}`,
      isFree: `${isFree}`,
      latitude: `${latitude}`,
      longitude: `${longitude}`,
      hostId: `${hostId}`,
    };
    await addDoc(collectionRef, payload);
  }
};

// ------------------------------------------------ AddLocalEventsAtlanta

export const AddLocalEventsAtlanta = async () => {
  const collectionRef = collection(db, "LocalEvents");
  const atlantaUsersArray = await GetUsersAtlanta();

  // i number of events created:
  for (let i = 0; i < 1; i++) {
    let localEventName = pickRandom(localEventNameArray);
    let isFree = pickRandom(isFreeArray);
    let start = randomDate(new Date(2012, 0, 1), new Date());
    let end = start.setHours(start.getHours() + 2)
    let venueName;
    let venueAddress;
    let imgUrl;
    let userIdArray;
    // For Atlanta - random coordinates
    let latitude =
      Math.random() * (33.87693603423371 - 33.67004820260162) +
      33.67004820260162;
    let longitude =
      Math.random() * (-84.34994309537356 - -84.52327900174737) +
      -84.52327900174737;
    let hostId = pickRandom(atlantaUsersArray);

    const payload = {
      name: `${localEventName}`,
      description: "Come join our event!",
      start: `${start}`,
      end: `${end}`,
      isFree: `${isFree}`,
      latitude: `${latitude}`,
      longitude: `${longitude}`,
      hostId: `${hostId}`,
    };
    await addDoc(collectionRef, payload);
  }
};
