import React, { useLayoutEffect, useRef, useState } from 'react'
import { CookieContext } from 'components/AuthContext'
import Cookies from 'universal-cookie'
import PropTypes from 'prop-types'
import { genGuid } from 'utils/genGuid'

function WithCookies({ children }) {
	const cookies = useRef(null)
	const addCookie = useRef(null)
	const [ageVerified, setAgeVerified] = useState(false)
	const [sessionID, setSessionID] = useState(null)

	addCookie.current = function (key, value, options = {}) {
		const cookie = new Cookies()
		cookie.set(key, value, options)
		setAgeVerified(value)
	}


	useLayoutEffect(() => {
		cookies.current = new Cookies()
		setAgeVerified(cookies.current.get('ageVerified'))
		setSessionID(setSessionIDCookie())
		return () => cookies.current.remove('sessionID')
	}, [])


	function setSessionIDCookie() {
		// use the sessionStorage api to manage new ID for each session (better than cookie mgmt)
		// put it in a cookie for one place for all session data
		const sessionID = sessionStorage.getItem('sessionID')
		const cookieSession = cookies.current.get('sessionID')
		if (!sessionID) {
			const guid = genGuid()
			cookies.current.set('sessionID', guid)
			sessionStorage.setItem('sessionID', guid)
			return guid
		}
		if (!cookieSession) {
			cookies.current.set('sessionID', sessionID)
		}
		return sessionID
	}

	return <CookieContext.Provider value={{
		ageVerified,
		sessionID,
		addCookie: addCookie.current,
	}}>{children}</CookieContext.Provider>

}
WithCookies.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default WithCookies
