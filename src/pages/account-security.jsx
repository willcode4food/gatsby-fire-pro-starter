import AccountSecurityForm from 'components/AccountSecurityForm'
import GlobalLayout from 'components/GlobalLayout'
import UnauthorizedPage from 'components/UnauthorizedPage'
import useAuthorization from 'hooks/useAuthorization'
import PropTypes from 'prop-types'
import React from 'react'
import { authConditionIsUser } from 'utils/securityHelpers'

function AccountSecurityPage({ location }) {
    const { isAuthorized, isAuthorizationLoading } = useAuthorization(authConditionIsUser)
    if (!isAuthorizationLoading) {
        return (
            <>
                {isAuthorized && location?.state?.userData ? (
                    <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
                        <AccountSecurityForm location={location} />
                    </GlobalLayout>
                ) : (
                    <UnauthorizedPage />
                )}
            </>
        )
    }
    return null
}
AccountSecurityPage.propTypes = {
    location: PropTypes.object,
}
export default AccountSecurityPage
