import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD44gQqOU3DNUzuwpeFGmfPrXS2RyZHBoU",
    authDomain: "react-chat-app-5bdcb.firebaseapp.com",
    projectId: "react-chat-app-5bdcb",
    storageBucket: "react-chat-app-5bdcb.appspot.com",
    messagingSenderId: "11972710146",
    appId: "1:11972710146:web:1ebecdc23e0e0a55a23c1b"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }