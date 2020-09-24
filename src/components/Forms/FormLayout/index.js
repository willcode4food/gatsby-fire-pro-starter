import styled from '@emotion/styled'
import { SPACERS, MQ } from 'utils/styleHelpers'

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`
export const FormWrapperBox = styled.div`
	width: 80%;
	${MQ.L} {
		width: 40%;
	}
`

export const FormFlex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`

export const FormFlexInner = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

export const FormFlexInnerBox = styled.div`
	padding-left: ${SPACERS.S};
	padding-right: ${SPACERS.S};
`
export const FormFlexInnerColumn = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
`

export const FormBox = styled.div`
	width: 100%;
	margin: ${SPACERS.S};
`
export const FormBoxCenter = styled.div`
	width: 100%;
	margin: ${SPACERS.S};
	text-align: center;
`
