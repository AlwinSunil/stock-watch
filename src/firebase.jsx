import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCrKqDTg9BnbWWSYFFt2hyWfRVDuuR0w_4",
    authDomain: "stock-watch-82c80.firebaseapp.com",
    projectId: "stock-watch-82c80",
    storageBucket: "stock-watch-82c80.appspot.com",
    messagingSenderId: "262346332681",
    appId: "1:262346332681:web:7da1c79934f222d639b6d8",
    measurementId: "G-8H2PYKEZS4",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
