import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
const firebaseConfig = {
    apiKey: "AIzaSyDBtFQa_PR97IUJC706J-IsVd0dnb2x6zU",
    authDomain: "notifications-app-1e233.firebaseapp.com",
    projectId: "notifications-app-1e233",
    storageBucket: "notifications-app-1e233.appspot.com",
    messagingSenderId: "526415536132",
    appId: "1:526415536132:web:546a6da5a8a0d682dbd551",
    measurementId: "G-KHS2N3BJZS"
  };

initializeApp(firebaseConfig);

const messaging = getMessaging();


export const requestForToken = () => {
    return getToken(messaging, { vapidKey: 'BG8J9cY6GENM0r1ZWu4nY4E4ByfT-l2Sd0kEJNhjdhlkTYJSxgge87-cF6G34LcoXRzV7HAoQ8APKry_Z9-AhJA' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });