import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDMFDfSaxt3UjclB7x_-TRB5G2j1Ot49PI",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "value-textile.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "value-textile",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "value-textile.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "386129720190",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:386129720190:web:1c87eb00e61fba1e21392f",
};

// Initialize Firebase (singleton pattern for Next.js SSR & HMR)
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore
export const db = getFirestore(app);

export interface EnquiryPayload {
  source: "homepage-quote" | "contact-page" | "enquiry-drawer";
  fullName: string;
  company?: string;
  email: string;
  country?: string;
  location?: string;
  phone?: string;
  lookingFor?: string;
  garmentType?: string;
  inquiryType?: string;
  quantity?: string;
  targetDelivery?: string;
  message?: string;
}

/**
 * Saves a buyer enquiry or quote request to the "enquiries" collection in Firestore.
 */
export async function submitEnquiry(payload: EnquiryPayload) {
  const docRef = await addDoc(collection(db, "enquiries"), {
    ...payload,
    status: "new",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
