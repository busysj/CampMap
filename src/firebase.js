import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 인증
import { getFirestore } from "firebase/firestore"; // firestore 사용
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// 사용할 js파일에서 이렇게 사용하믄댐
const db = getFirestore(app);
// 이런식으로 쓰면 사용할 js파일에 import db from '~~firebase.js' 하면됨
//export const storage = getStorage(app);
const storage = getStorage(app);

export { auth, db, storage };
