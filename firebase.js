import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCxX5pB6j4hTXL43mvrAhdKrdGWwmMFS-g",
  authDomain: "pharmacyauth-4d505.firebaseapp.com",
  projectId: "pharmacyauth-4d505",
  storageBucket: "pharmacyauth-4d505.appspot.com",
  messagingSenderId: "461184289845",
  appId: "1:461184289845:web:dc9c56802f9f9bdefe757c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth, app };