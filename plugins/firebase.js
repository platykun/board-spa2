import * as firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.F_APIKEY,
    authDomain: process.env.F_AUTHDOMAIN,
    databaseURL: process.env.F_DATABASEURL,
    projectId: process.env.F_PROJECTID,
    storageBucket: process.env.F_STORAGEBUCKET,
    messagingSenderId: process.env.F_MESSAGINGSENDERID
  })
}

export default firebase
