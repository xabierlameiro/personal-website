import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const storage = firebase.storage()
const db = firebase.firestore()
const realTimedb = firebase.database()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()
const auth = firebase.auth()
const persistence = firebase.auth.Auth.Persistence.SESSION

auth.useDeviceLanguage()

export {
    db,
    realTimedb,
    storage,
    auth,
    persistence,
    googleProvider,
    githubProvider,
}
