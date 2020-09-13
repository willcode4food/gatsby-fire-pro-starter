import styled from '@emotion/styled'
import { MQ, SPACERS } from 'utils/styleHelpers'

export const NavWrapper = styled.div`
	display: none;
	${MQ.L} {
        display: flex;
        flex-direction: row;
        justify-content: center;
	}
`
export const NavBox = styled.div`
    align-self: center;
	a {
		margin: ${SPACERS.L} 0;
	}
`
