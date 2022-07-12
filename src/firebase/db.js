import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
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

const checkUser = async (user) => {
  const q = query(usersRef, where("name", "==", user));
  try {
    const snap = await getDocs(q);
    const data = snap.docs.map((doc) => doc.data())
    console.log(data)
    return {user: data, success: true}
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

export { db, usersRef, notesRef, addUser, checkUser, addNote };
