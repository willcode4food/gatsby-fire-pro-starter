import React from 'react'
import { Link, navigate } from 'gatsby'
import { unsetLoginFlag } from 'utils/formHelpers'
import { authActions } from 'firebaseActions'
import { css } from '@emotion/core'

const handleClick = async e => {
	e.preventDefault()
	unsetLoginFlag()
	await authActions.doSignOut()
	navigate('/')
}

const SignOutButton = () => {
	return (
		<Link css={css`
			text-transform: uppercase;
		`} onClick={handleClick} to="/login">
			Sign Out
		</Link>
	)
}

export { SignOutButton }
