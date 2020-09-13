import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext, CookieContext, SessionContext } from 'components/AuthContext'
import { version } from '../../../package.json'
import useUserIp from 'hooks/useUserIp'

function SessionHandler({ children }) {
	const { authUser, isLoading, roles } = useContext(AuthContext)
	const { ageVerified, sessionID, addCookie } = useContext(CookieContext)
	const [userLocation, setUserLocation] = useState([])
	const { ip } = useUserIp()
	return (
		<SessionContext.Provider
			value={{
				authUser,
				ageVerified,
				sessionID: !isLoading ? sessionID : null,
				addCookie,
				uid: authUser.uid,
				userIp: ip,
				version,
				roles,
				ageVerified,
				addCookie,
				userLocation: userLocation.length > 0 ? userLocation.toString() : null,
				setUserLocation,
			}}
		>
			{children}
		</SessionContext.Provider>
	)
}

SessionHandler.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default SessionHandler
