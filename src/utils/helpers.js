import { collection, setDoc, doc } from "firebase/firestore";
import db from "../firebaseConfig";

const usersRef = collection(db, "users")
export async function writeUserData(userId, name, email, password) {
    await setDoc(doc(usersRef, userId), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] }).then(() => {
            console.log("hello1111")
        }).catch(()=> {
            console.log("error")
        });
}
