import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { COLORS, MQ, SPACERS } from 'utils/styleHelpers'
import { AiFillWarning } from 'react-icons/ai'

export const ErrorMessage = styled.span`
	color: ${COLORS.ERROR};
	padding-top: 5px;
`

export const ErrorIcon = styled(AiFillWarning)`
	padding-left: ${SPACERS.S};
	padding-right ${SPACERS.S};
	color: ${COLORS.ERROR};
`

export const FormButton = styled.button`
	color: ${COLORS.PRIMARY};
	background: ${({ bg }) => {
		return bg || COLORS.PRIMARY_DARK
	}};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	padding: 14px 28px;
	text-align: center;
	width: 100%;
	transition: background 0.5s;
	.dark & {
		background: ${({ bg }) => (bg === COLORS.SECONDARY_DARK ? COLORS.SECONDARY_DARK : bg)};
	}
`
export const FormSubmitButton = styled.input`
	color: ${COLORS.PRIMARY};
	background: ${({ bg }) => {
		return bg || COLORS.PRIMARY_DARK
	}};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	padding: 14px 28px;
	text-align: center;
	width: 100%;
	transition: background 0.5s;
	.dark & {
		background: ${({ bg }) => (bg === COLORS.SECONDARY_DARK ? COLORS.SECONDARY_DARK : bg)};
	}
`
export const FormHeader = styled.h2`
	padding-left: ${SPACERS.S};
	text-transform: uppercase;
`

export const StyledSubmitButton = styled.input`
	background-color: ${({ bg }) => {
		return bg || COLORS.PRIMARY_DARK
	}};
	border: none;
	cursor: pointer;
	font-size: 16px;
	display: block;
	padding: 14px 28px;
	text-align: center;
	type: submit;
	width: 100%;
`
export const StyledLink = styled(Link)`
	color: ${COLORS.PRIMARY_DARK};
	&:hover {
		text-decoration: underline;
	}
	transition: color 0.5s;
	.dark & {
		color: ${COLORS.SECONDARY};
	}
`
export const ReviewsListWrapper = styled.div``
export const ReviewFormWrapper = styled.div`
	${MQ.S} {
		margin-right: ${SPACERS.L};
		min-width: 200px;
	}
	${MQ.M} {
		min-width: 300px;
	}
	${MQ.L} {
		margin-right: ${SPACERS.XL};
		min-width: 400px;
	}
`

export const StyledStar = styled.div`
	font-size: ${({ fontSize }) => fontSize};
	margin-right: 3px;
`
