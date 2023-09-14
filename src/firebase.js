 import firebase from 'firebase/compat/app';
 import "firebase/compat/firestore";
 import 'firebase/compat/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyBTeGlqHDXw-KR6ciQegBrRv3KXHLF1ELs",
  authDomain: "netflix-01-b63cf.firebaseapp.com",
  projectId: "netflix-01-b63cf",
  storageBucket: "netflix-01-b63cf.appspot.com",
  messagingSenderId: "36167872852",
  appId: "1:36167872852:web:aa5c9feefa0d093da198c1"
};
  
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth()

export{auth};
export default db; 