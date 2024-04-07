// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'cognisage-auth.firebaseapp.com',
  projectId: 'cognisage-auth',
  storageBucket: 'cognisage-auth.appspot.com',
  messagingSenderId: '255394250782',
  appId: '1:255394250782:web:dde7a4d74695bdb273ee0f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
