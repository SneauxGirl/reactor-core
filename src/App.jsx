import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID, 
};

// Calls Firestore
const app = initializeApp(firebaseConfig, {
  automaticDataCollectionEnabled: false,
});
const db = getFirestore(app);

//  Updates specific fields
await updateDoc(docRef, {
  age: "493",
  name: "Dutch Bros"
})

async function testFirestore() {
  const docRef = doc(db, "testCollection", "testDocument");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}

testFirestore();

function App() {

  return (
    <>
    <p>Test, Test: {import.meta.env.VITE_FIREBASE_API_KEY}</p>
    </>
  )
}

export default App;
