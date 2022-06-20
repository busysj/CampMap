import { initializeApp } from "firebase/app";
import {
    getAuth, // 인증
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // firestore 사용

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    //apiKey: "AIzaSyCuYSoKkUEg1DENSyKREAOOvVe4CHCC168", // 인증 key
    authDomain: "campmap-dc086.firebaseapp.com",
    projectId: "campmap-dc086",
    storageBucket: "campmap-dc086.appspot.com",
    messagingSenderId: "442364824752",
    appId: "1:442364824752:web:715c04388a94eaaa1dff75",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// 이런식으로 쓰면 사용할 js파일에 import {db} from '~~firebase.js' 하면됨

export const auth = getAuth();
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// 사용할 js파일에서 이렇게 사용하믄댐
