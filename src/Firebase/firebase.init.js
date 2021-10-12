import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseAuthentication = () => {
    initializeApp( firebaseConfig );
}

export default initializeFirebaseAuthentication;


/* 
Steps for authentication

Step-1: Initial Setup
1. firebase: create project
2. firebase: create web app
3. firebase: enable auth methods (Google, Password, Github etc)
4. firebase: get the configuration
5. initialize firebase

----------------------------------------------------------------
Step-2:
1. Create Login Component
2. Create Register Component
3. Create route for Login and Register

*/