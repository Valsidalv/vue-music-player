import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyDFX3DwvFfoBfNZXGcfDMHBItKtPdN7HIk',
  authDomain: 'music-ff561.firebaseapp.com',
  projectId: 'music-ff561',
  storageBucket: 'music-ff561.appspot.com',
  appId: '1:488328250319:web:53bf947a5993893c5308ba'
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
