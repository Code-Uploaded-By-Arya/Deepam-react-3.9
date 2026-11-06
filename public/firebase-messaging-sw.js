importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDcS8xZsMTfu_j5Jl-ldgT8V_hbslC55jg",
  authDomain: "deepam-3464d.firebaseapp.com",
  projectId: "deepam-3464d",
  storageBucket: "deepam-3464d.firebasestorage.app",
  messagingSenderId: "706112578967",
  appId: "1:706112578967:web:6c624681d32055301710d2",
  measurementId: "G-Q0EPRSB116",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
