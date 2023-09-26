import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLqOvBeEdv4uOOfMXNzxX68MF4Ss6Q7tM",
  authDomain: "proyecto-final-sanguinetti.firebaseapp.com",
  projectId: "proyecto-final-sanguinetti",
  storageBucket: "proyecto-final-sanguinetti.appspot.com",
  messagingSenderId: "102065700277",
  appId: "1:102065700277:web:7f968193e792a2f19d2dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app