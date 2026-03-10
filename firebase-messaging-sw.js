importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyApPJjEWPfz5njRS714IuleqJ6fzrroEZE",
  authDomain: "arkanlab-99711.firebaseapp.com",
  databaseURL: "https://arkanlab-99711-default-rtdb.firebaseio.com",
  projectId: "arkanlab-99711",
  storageBucket: "arkanlab-99711.firebasestorage.app",
  messagingSenderId: "871697042781",
  appId: "1:871697042781:web:74e6fbdd5f1196aeba2cb4",
  measurementId: "G-JBC3R7SN7G"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

  const notificationTitle = payload.notification?.title || "رسالة جديدة";
  
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

});
