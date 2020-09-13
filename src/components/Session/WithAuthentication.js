import React, { useEffect, useRef, useState } from 'react'
import * as firebase from 'firebase/app'
import PropTypes from 'prop-types'
import { AuthContext } from 'components/AuthContext'
import { userActions } from '../../firebase'
const { getUserRoles } = userActions

function WithAuthentication({ children }) {
	const hasMounted = useRef(false)
	const [authUser, setAuthUser] = useState({ uid: null })
	const [isLoading, setIsLoading] = useState(true)
	const [roles, setRoles] = useState([])

	useEffect(() => {
		async function getAuth() {
			hasMounted.current = true
			firebase.auth().onAuthStateChanged(async authUser => {
				if (hasMounted.current) {
					setIsLoading(true)
					if (authUser) {
						const roles = await getUserRoles(authUser.uid)
						setAuthUser(authUser)
						setRoles(roles)
					}
					setIsLoading(false)
				}
			})
		}
		getAuth()
	}, [])

	return <AuthContext.Provider value={{ authUser, isLoading, roles }}>{children}</AuthContext.Provider>
}

WithAuthentication.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default WithAuthentication
