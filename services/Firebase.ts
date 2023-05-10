// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBsfmgha5qM9_JErlYzNJhsTVThcOlxIk0',
  authDomain: 'hypnobirthing-f2396.firebaseapp.com',
  projectId: 'hypnobirthing-f2396',
  storageBucket: 'hypnobirthing-f2396.appspot.com',
  messagingSenderId: '656597932752',
  appId: '1:656597932752:web:f89a4c3b8f86e0405d9cd5',
  measurementId: 'G-H03T2K6VN8'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BNHxyemrCeyqSjabF8Hlz-49xA41RP11E8cEwdPe_UtYyvovFaH9D9HRfd1JMVRYyzagSaly1OgL5bWtiZyZZ2o' })
    .then((currentToken: any) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
        return currentToken;
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