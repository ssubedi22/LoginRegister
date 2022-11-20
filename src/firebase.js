import { initializeApp } from "firebase/app";       //importing function to create a connection to firebse
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKJUnUxr95U1OX26F0oJkPvOxhyVFgxP0",
    authDomain: "finalprojectcsci3413.firebaseapp.com",
    projectId: "finalprojectcsci3413",
    storageBucket: "finalprojectcsci3413.appspot.com",
    messagingSenderId: "222507029197",
    appId: "1:222507029197:web:7517180141afeb2e0a4f84",
    measurementId: "G-F4PRL37SMJ"
};

//establish a connection to firebase
const app = initializeApp(firebaseConfig);

//populates the data from dtabase to db 
export const db = getFirestore(app);