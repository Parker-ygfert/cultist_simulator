import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const env = import.meta.env

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: 'cultist-simulator.firebaseapp.com',
  projectId: 'cultist-simulator',
  storageBucket: 'cultist-simulator.appspot.com',
  messagingSenderId: env.VITE_MESSAGE_SNEDER_ID,
  appId: env.VITE_APP_ID,
  measurementId: env.VITE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
