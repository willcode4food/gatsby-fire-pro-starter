import { useContext } from 'react'
import AuthContext from 'context/AuthContext'

function useAuthorization(authCondition) {
	const { authUser, roles, isLoading } = useContext(AuthContext)

	return {
		isAuthorized: !isLoading ? authCondition(authUser, roles) : false,
		authUser,
		isLoading,
	}
}

export default useAuthorization
