import { initializeApp } from "firebase/app";
import {
    getAuth, // 인증
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // firestore 사용

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyC_BGyPvbcV2JTw5HfAS_yDdUWUlg8RLUo",
    authDomain: "campproject-ee34a.firebaseapp.com",
    projectId: "campproject-ee34a",
    storageBucket: "campproject-ee34a.appspot.com",
    messagingSenderId: "1048265201053",
    appId: "1:1048265201053:web:2eebe695834072367b8b74"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// 이런식으로 쓰면 사용할 js파일에 import {db} from '~~firebase.js' 하면됨

export const auth = getAuth();
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// 사용할 js파일에서 이렇게 사용하믄댐
