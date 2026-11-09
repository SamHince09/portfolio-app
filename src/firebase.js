
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDnwWhlrSFuSAL1qdn5hnBQFII_Tvr9NZY",
  authDomain: "developer-portfolio-2f8be.firebaseapp.com",
  databaseURL: "https://developer-portfolio-2f8be-default-rtdb.firebaseio.com",
  projectId: "developer-portfolio-2f8be",
  storageBucket: "developer-portfolio-2f8be.firebasestorage.app",
  messagingSenderId: "976440562482",
  appId: "1:976440562482:web:fb40a7c890cea36f3c7d2b"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
