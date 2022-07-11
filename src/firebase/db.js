import {
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

const usersRef = collection(db, "users");
const notesRef = collection(db, "notes");

const addUser = async (data) => {
  try {
    await addDoc(usersRef, data);
  } catch (err) {
    console.log(err);
  }
};

const addNote = async (data) => {
  try {
    await addDoc(notesRef, data);
  } catch (err) {
    console.log(err);
  }
};

export { db, usersRef, notesRef, addUser, addNote };