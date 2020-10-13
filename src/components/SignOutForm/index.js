import React from 'react'
import { Link, navigate } from 'gatsby'
import { authActions } from 'firebaseActions'

const handleClick = async (e) => {
	e.preventDefault()
	//TODO: refactor to use hooks
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
