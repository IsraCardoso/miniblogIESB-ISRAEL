import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBfOxOp4o9mop8t-f90wVffh5WHKrGMCsc",
	authDomain: "israelblog-d8f6e.firebaseapp.com",
	projectId: "israelblog-d8f6e",
	storageBucket: "israelblog-d8f6e.appspot.com",
	messagingSenderId: "203289983519",
	appId: "1:203289983519:web:c0cfc27b1660af9eadf32a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
