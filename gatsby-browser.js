import React from 'react'
import PropTypes from 'prop-types'
import { BREAKPOINTS_VALUES } from 'utils/stylehelpers'
import { setDefaultBreakpoints } from 'react-socks'
import { BreakpointProvider } from 'react-socks'
import { SessionHandler } from 'components/Session'
import WithAuthentication from 'components/Session/WithAuthentication'
import WithCookies from 'components/Session/WithCookies'
import 'typeface-fjalla-one'

setDefaultBreakpoints(Object.keys(BREAKPOINTS_VALUES).map((value) => ({ [value]: BREAKPOINTS_VALUES[value] })))

export const wrapRootElement = ({ element }) => {
	return (
		<WithCookies>
			<WithAuthentication>
				<SessionHandler>
					<BreakpointProvider>{element}</BreakpointProvider>
				</SessionHandler>
			</WithAuthentication>
		</WithCookies>
	)
}

wrapRootElement.propTypes = {
	element: PropTypes.object,
}
