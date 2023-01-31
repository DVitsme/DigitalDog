// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYp06tfTKDI9x_vr52MfrZeGUif5NAeRE',
  authDomain: 'derricks-sandbox.firebaseapp.com',
  projectId: 'derricks-sandbox',
  storageBucket: 'derricks-sandbox.appspot.com',
  messagingSenderId: '829261547656',
  appId: '1:829261547656:web:60b52d3e390a78c641f73d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
