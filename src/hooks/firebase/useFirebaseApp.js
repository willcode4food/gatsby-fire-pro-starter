import { useMemo } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

function useFirebaseApp({ firebaseConfig }) {
	const { auth } = firebase
	const db = useMemo(() => {
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig)
		}
		return firebase.firestore()
	})

	return {
		db,
		auth,
	}
}

export default useFirebaseApp
