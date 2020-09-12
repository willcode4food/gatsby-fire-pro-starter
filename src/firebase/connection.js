import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/storage'

const config = {
	apiKey: process.env.GATSBY_APIKEY,
	authDomain: process.env.GATSBY_AUTHDOMAIN,
	databaseURL: process.env.GATSBY_DATABASEURL,
	projectId: process.env.GATSBY_PROJECTID,
	storageBucket: process.env.GATSBY_STORAGEBUCKET,
	messagingSenderId: process.env.GATSBY_MESSAGINGSENDERID,
}

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}

const db = firebase.firestore()

const storage = firebase.storage()
export { db, storage }
