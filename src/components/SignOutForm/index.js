import React from 'react'
import { Link, navigate } from 'gatsby'
import { unsetLoginFlag } from 'utils/formHelpers'
import { authActions } from 'firebaseActions'

const handleClick = async e => {
	e.preventDefault()
	unsetLoginFlag()
	await authActions.doSignOut()
	navigate('/')
}

const SignOutButton = () => {
	return (
		<Link onClick={handleClick} to="/login">
			Sign Out
		</Link>
	)
}

export { SignOutButton }
