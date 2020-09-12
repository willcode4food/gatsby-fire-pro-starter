import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { SPACERS, FONT_SIZES, MQ } from 'utils/styleHelpers'

export const PrimaryButton = styled.button`
	border: 1px solid ${({ color }) => color};
	border-radius: 1px;
	background: ${({ color }) => color};
	color: ${({ textColor }) => textColor};
	font-size: ${({ fontSize = FONT_SIZES.H4 }) => fontSize};
	padding-top: ${SPACERS.S};
	padding-bottom: ${SPACERS.S};
	padding-right: ${SPACERS.L};
	padding-left: ${SPACERS.L};
	width: 100%;
	&:hover {
		${({ color }) => color};
	}
	.dark & {
		color: ${({ textColor, textColorDark }) => textColorDark || textColor};
		background: ${({ color }) => color};
		border: 1px solid ${({ color }) => color};
	}
	${MQ.L} {
		font-size: ${FONT_SIZES.H7};
		padding-right: ${SPACERS.L};
		padding-left: ${SPACERS.L};
	}
`

export const PrimaryButtonLink = styled(Link)`
			border: 1px solid ${({ color }) => color};
			border-radius: 3px;
			background: ${({ color }) => color};
			color: ${({ textcolor }) => textcolor};
			font-size: ${({ fontSize = FONT_SIZES.H4 }) => fontSize};
			padding-top: ${SPACERS.M};
			padding-bottom: ${SPACERS.M};
			padding-right: ${({ paddingx = SPACERS.L }) => paddingx};
			padding-left: ${({ paddingx = SPACERS.L }) => paddingx};
			width: 100%;
			text-decoration: none;
			&:hover {
				${({ color }) => color};
			}
			.dark & {
				color: ${({ textcolor, textcolorDark }) => textcolorDark || textcolor};
				background: ${({ color }) => color};
				border: 1px solid ${({ bordercolordark, color }) => bordercolordark || color};
			}
			${MQ.L} {
				font-size: ${FONT_SIZES.H7};
				padding-right: ${SPACERS.L};
				padding-left: ${SPACERS.L};
			}
			${MQ.M} {
				font-size: ${FONT_SIZES.H6};
				padding-right: ${SPACERS.S};
				padding-left: ${SPACERS.S};
			}
		`
export const PrimaryButtonAnchor = styled.a`
			border: 1px solid ${({ color }) => color};
			border-radius: 3px;
			background: ${({ color }) => color};
			color: ${({ textcolor }) => textcolor};
			font-size: ${({ fontSize = FONT_SIZES.H4 }) => fontSize};
			padding-top: ${SPACERS.M};
			padding-bottom: ${SPACERS.M};
			padding-right: ${({ paddingx = SPACERS.L }) => paddingx};
			padding-left: ${({ paddingx = SPACERS.L }) => paddingx};
			width: 100%;
			text-decoration: none;
			&:hover {
				${({ color }) => color};
			}
			.dark & {
				color: ${({ textcolor, textcolorDark }) => textcolorDark || textcolor};
				background: ${({ color }) => color};
				border: 1px solid ${({ color, bordercolordark }) => bordercolordark || color};
			}
			${MQ.L} {
				font-size: ${FONT_SIZES.H1};
				padding-right: ${SPACERS.L};
				padding-left: ${SPACERS.L};
			}
			${MQ.M} {
				font-size: ${FONT_SIZES.H6};
				padding-right: ${SPACERS.S};
				padding-left: ${SPACERS.S};
			}
		`
