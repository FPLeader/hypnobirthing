// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: 'AIzaSyBsfmgha5qM9_JErlYzNJhsTVThcOlxIk0',
    authDomain: 'hypnobirthing-f2396.firebaseapp.com',
    projectId: 'hypnobirthing-f2396',
    storageBucket: 'hypnobirthing-f2396.appspot.com',
    messagingSenderId: '656597932752',
    appId: '1:656597932752:web:f89a4c3b8f86e0405d9cd5',
    measurementId: 'G-H03T2K6VN8'
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});