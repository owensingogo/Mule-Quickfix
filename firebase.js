import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEtCadZ0katHUP6XpxHpH6Z1nYL8hMsoY",
  authDomain: "mule-quickfix-92828.firebaseapp.com",
  databaseURL: "https://mule-quickfix-92828-default-rtdb.firebaseio.com",
  projectId: "mule-quickfix-92828",
  storageBucket: "mule-quickfix-92828.firebasestorage.app",
  messagingSenderId: "595576108671",
  appId: "1:595576108671:web:0aef01d988b342d797f14a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, auth, db, storage };