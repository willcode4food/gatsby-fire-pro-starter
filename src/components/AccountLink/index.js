import React from 'react'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { COLORS } from 'utils/styleHelpers'
import { authConditionIsUser } from 'utils/securityHelpers'
import useAuthorization from 'hooks/useAuthorization'
function AccountLink() {
	const { isAuthorized, isLoading } = useAuthorization(authConditionIsUser)
	if (!isLoading && isAuthorized) {
		return (
			<Link to={'/account'}>
				<MdAccountCircle
					css={css`
						width: 25px;
						height: 25px;
						color: ${COLORS.MEDIUM_LIGHT_GRAY};
					`}
				/>
			</Link>
		)
	}
	return null
}
export default AccountLink
