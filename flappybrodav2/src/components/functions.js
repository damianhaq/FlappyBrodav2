import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export async function getAllDocuments(collectionName) {
  try {
    const response = await getDocs(collection(db, collectionName));
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
