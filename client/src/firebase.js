
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-cbb9c.firebaseapp.com",
  projectId: "realestate-cbb9c",
  storageBucket: "realestate-cbb9c.appspot.com",
  messagingSenderId: "865192487623",
  appId: "1:865192487623:web:b8a57defb879d0cdd02ce2",
  measurementId: "G-N8H09G5C6L"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);