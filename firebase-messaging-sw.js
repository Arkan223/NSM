importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    databaseURL: "https://arkanlab-99711-default-rtdb.firebaseio.com/",
    messagingSenderId: "871697042781"
});

const messaging = firebase.messaging();

// معالجة الإشعارات عندما يكون المتصفح مغلقاً أو التطبيق في الخلفية
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title || "منظومة النخب";
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
