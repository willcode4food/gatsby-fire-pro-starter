import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { SignOutButton } from 'components/SignOutForm'
import { PathHistoryLink } from 'components/PathHistory'
import { MQ, SPACERS } from 'utils/styleHelpers'

const NavWrapper = styled.div`
	display: none;
	${MQ.L} {
		display: flex;
	}
`
const NavBox = styled.div`
	margin-left: ${SPACERS.M};
	margin-right: ${SPACERS.M};
	padding-bottom: 4px;
	a {
		margin: ${SPACERS.L} 0;
	}
`
const UserMenu = ({ uid, pathname }) => {
	return (
		<NavWrapper flexDirection="row" justifyContext="center">
			<NavBox alignSelf="center">
				{!uid ? <PathHistoryLink previousUrl={pathname} to="/login" text="Login" /> : <SignOutButton />}
			</NavBox>
		</NavWrapper>
	)
}

UserMenu.propTypes = {
	pathname: PropTypes.string,
	uid: PropTypes.string,
}

export default UserMenu
