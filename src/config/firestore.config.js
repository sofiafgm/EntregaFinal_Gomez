import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzmZHPscYxGixZoYgMUsmPnQNed3dx_1A",
  authDomain: "un-caos-organizado.firebaseapp.com",
  projectId: "un-caos-organizado",
  storageBucket: "un-caos-organizado.appspot.com",
  messagingSenderId: "585084745675",
  appId: "1:585084745675:web:58ad3f534465adb2bc284e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => app;