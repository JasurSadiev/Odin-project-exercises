// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD1fGb-uUU6ZfZvF4ssHHUdR8siJlltuOE",
	authDomain: "js-firegram.firebaseapp.com",
	projectId: "js-firegram",
	storageBucket: "js-firegram.appspot.com",
	messagingSenderId: "400773652735",
	appId: "1:400773652735:web:9d594cdd7571ca5f06acca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
