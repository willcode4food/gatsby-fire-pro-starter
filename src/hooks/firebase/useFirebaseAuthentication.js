import { useEffect, useState } from 'react'
import useFirebaseApp from 'hooks/firebase/useFirebaseApp'

function useFirebaseAuthentication({ usernameFieldName = null, onAuthenticationSuccess = null, firebaseConfig }) {
	const [isUsernameForThirdPartyLoginError, setIsUsernameForThirdPartyLoginError] = useState(false)
	const [isAuthenticationLoading, setIsAuthenticationLoading] = useState(false)
	const [authenticationError, setAuthenticationError] = useState(null)
	const LOGIN_FLAG_STORAGE = 'LOGIN_FLAG_STORAGE'
	const USERNAME_STORAGE = 'USERNAME_STORAGE'

	// Temporarry Storage Setters and getters
	const setLoginFlagStorage = () => {
		window.localStorage.setItem(LOGIN_FLAG_STORAGE, true)
	}
	const getLoginFlagStorage = () => {
		return window.localStorage.getItem(LOGIN_FLAG_STORAGE)
	}
	const unsetLoginFlagStorage = () => {
		window.localStorage.removeItem(LOGIN_FLAG_STORAGE)
	}
	const setUsernameStorage = (username) => {
		window.localStorage.setItem(USERNAME_STORAGE, username)
	}
	const getUsernameStorage = () => {
		return window.localStorage.getItem(USERNAME_STORAGE)
	}
	const unsetUsernameStorage = () => {
		window.localStorage.removeItem(USERNAME_STORAGE)
	}

	// Actions
	const doCreateUser = async ({ id, ...data }) => {
		try {
			const dateCreated = new Date(Date.now())

			const firestorePayload = {
				...data,
				dateCreated,
			}

			const authUser = await db.collection('users').doc(id).set(firestorePayload)
			await doDefaultUserRole(id)
			return authUser
		} catch (error) {
			throw new Error(error.message)
		}
	}

	const doCreateUserWithEmailAndPassword = async (email, password) => {
		const result = await auth().createUserWithEmailAndPassword(email, password)
		return result
	}

	const doDefaultUserRole = async (userID) => {
		const rolesRef = await db
			.collection('users')
			.doc(userID)
			.collection('roles')
			.doc('user')
			.set({
				dateAdded: new Date(Date.now()),
			})

		return rolesRef
	}

	const doGetUser = async (id) => {
		const docRef = await db.collection('users').doc(id)
		const doc = await docRef.get()
		return doc.exists ? { ...doc.data(), exists: true } : { exists: false }
	}

	const doPasswordReset = async (email) => {
		try {
			await auth().sendPasswordResetEmail(email)
			return true
		} catch (error) {
			const { message } = error
			setIsAuthenticationLoading(false)
			setAuthenticationError({ message })
		}
	}

	const doSignInWithGoogle = async () => {
		const googleProvider = new auth.GoogleAuthProvider()
		try {
			await auth().signInWithRedirect(googleProvider)
			return true
		} catch (error) {
			throw Error(error)
		}
	}

	const doSignInWithEmailAndPassword = async (email, password) => {
		try {
			await auth().setPersistence(auth.Auth.Persistence.LOCAL)
			return await auth().signInWithEmailAndPassword(email, password)
		} catch (error) {
			throw Error(error)
		}
	}

	// Event Handlers
	const onGoogleLogin = async (event) => {
		try {
			event.preventDefault()
			setIsAuthenticationLoading(true)
			setLoginFlagStorage()
			await doSignInWithGoogle()
			onAuthenticationSuccess
		} catch (error) {
			const { message } = error
			setIsAuthenticationLoading(false)
			setAuthenticationError({ message })
		}
	}

	const onEmailLogin = async (data) => {
		const { email, password } = data
		setIsAuthenticationLoading(true)
		try {
			await doSignInWithEmailAndPassword(email, password)

			setIsAuthenticationLoading(false)
			onAuthenticationSuccess()
		} catch (error) {
			const { message } = error
			setIsAuthenticationLoading(false)
			setAuthenticationError({ message })
		}
	}

	const onEmailRegistration = async (data) => {
		setAuthenticationError(null)
		setIsAuthenticationLoading(true)
		try {
			const { firstName = null, lastName = null, email = null, password = null, username = null } = data
			if (!firstName) {
				const errorMessage = 'No data for first name'
				setAuthenticationError(errorMessage)
				return
			}
			if (!lastName) {
				const errorMessage = 'No data for last name'
				setAuthenticationError(errorMessage)
				return
			}
			if (!email) {
				const errorMessage = 'No data for email'
				setAuthenticationError(errorMessage)
				return
			}
			if (!password) {
				const errorMessage = 'No data for password'
				setAuthenticationError(errorMessage)
				return
			}
			const authUser = await doCreateUserWithEmailAndPassword(email, password)
			const {
				user: { uid },
			} = authUser
			let userObject = {}
			if (username && usernameFieldName) {
				userObject = {
					id: uid,
					firstName,
					lastName,
					username,
					email,
					provider: 'email',
				}
			} else {
				userObject = {
					id: uid,
					firstName,
					lastName,
					email,
					provider: 'email',
				}
			}
			// create a user with email
			await doCreateUser(userObject)
			onAuthenticationSuccess()
		} catch (e) {
			setAuthenticationError(e.message)
		}
		setIsAuthenticationLoading(false)
	}

	const onForgotPassword = async (data) => {
		try {
			setIsAuthenticationLoading(true)
			await doPasswordReset(data.email)
			setAuthenticationError({
				message:
					'If your email address is registered with us, instructions have been sent to reset your password',
			})
			setIsAuthenticationLoading(false)
		} catch (error) {
			const { message } = error
			setIsAuthenticationLoading(false)
			setAuthenticationError({ message })
		}
	}

	const onGoogleRegistration = async (event) => {
		event.preventDefault()
		setAuthenticationError(null)

		if (usernameFieldName) {
			const username = document.getElementsByName(usernameFieldName)[0]
			if (
				!username.value ||
				username.value === '' ||
				typeof username.value === undefined ||
				username.value.length < 2
			) {
				setIsUsernameForThirdPartyLoginError(true)
				return
			}
			setUsernameStorage(username.value)
		}

		setLoginFlagStorage()
		setIsAuthenticationLoading(true)

		try {
			await doSignInWithGoogle()
		} catch (e) {
			setIsAuthenticationLoading(false)
			setAuthenticationError(e.message)
		}
	}

	if (!onAuthenticationSuccess) {
		onAuthenticationSuccess = () => (window ? (window.location.href = '/') : true)
	}

	const { db, auth } = useFirebaseApp({ firebaseConfig })

	useEffect(() => {
		if (getLoginFlagStorage()) {
			setIsAuthenticationLoading(true)
			unsetLoginFlagStorage()
		}
		const handleRedirectResult = async () => {
			try {
				const result = await auth().getRedirectResult()
				if (result.user) {
					setIsAuthenticationLoading(true)
					const { user } = result
					const { uid, displayName, email, emailVerified } = user
					const { exists } = doGetUser(uid)
					if (!emailVerified) {
						setIsAuthenticationLoading(false)
						setAuthenticationError('Your Google Account is not verified')
					} else if (!exists) {
						const name = displayName.indexOf(' ') >= 0 ? displayName.split(' ') : [displayName]
						const firstName = name[0]
						const lastName = name.length > 1 ? name[1] : ''
						let userObject = {}
						if (usernameFieldName) {
							const username = getUsernameStorage()
							userObject = {
								id: uid,
								username,
								firstName,
								lastName,
								email,
								provider: 'google',
							}
							unsetUsernameStorage()
						} else {
							userObject = {
								id: uid,
								firstName,
								lastName,
								email,
								provider: 'google',
							}
						}

						try {
							await doCreateUser({ ...userObject })
							onAuthenticationSuccess()
						} catch (e) {
							setIsAuthenticationLoading(false)
							setAuthenticationError(e.message)
						}
					}
				}
			} catch (e) {
				setIsAuthenticationLoading(false)
				setAuthenticationError(e.message)
			}
		}
		handleRedirectResult()
	}, [])

	return {
		isAuthenticationLoading,
		isUsernameForThirdPartyLoginError,
		onGoogleLogin,
		onGoogleRegistration,
		onEmailLogin,
		onEmailRegistration,
		onForgotPassword,
		authenticationError,
		setIsUsernameForThirdPartyLoginError,
	}
}

export default useFirebaseAuthentication
