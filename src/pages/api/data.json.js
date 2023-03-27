import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
    appId: import.meta.env.APP_ID,
    measurementId: import.meta.env.MEASUREMENT_ID
}

let firebaseInstance = initializeApp(firebaseConfig);

export async function get({params, request}) {
    let data = [];
    const db = getFirestore(firebaseInstance);   
    const q = query(collection(db, 'discounts'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        data.push({
            id: doc.id,
            data: doc.data()
        });
    })

    return {
        body: JSON.stringify(data)
    }
}