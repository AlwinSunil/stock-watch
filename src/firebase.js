import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import {
    arrayRemove,
    arrayUnion,
    doc,
    getFirestore,
    updateDoc,
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

getAnalytics(app)

export async function addSymbolToWatchList(stock, userId, watchListLength) {
    if (watchListLength >= 10) {
        return false
    } else {
        const docRef = doc(db, "users", userId)
        await updateDoc(docRef, {
            symbols: arrayUnion(stock),
        })
        return true
    }
}

export async function removeSymbolFromWatchList(stock, userId) {
    const docRef = doc(db, "users", userId)
    await updateDoc(docRef, {
        symbols: arrayRemove(stock),
    })
    return 200
}
