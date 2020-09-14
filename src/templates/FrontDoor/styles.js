import styled from '@emotion/styled'
import { MQ, SPACERS, COLORS, FONT_SIZES } from 'utils/styleHelpers'


export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	z-index: 0;
	${MQ.M} {
		flex-wrap: nowrap;
	}
`
export const ContentBoxCTA = styled.div`
	display: ${({ isHidden }) => (isHidden.length > 1 && isHidden[0] ? 'none' : 'inline')};
	background-color: ${({ color }) => color || COLORS.SUPER_LIGHT_GRAY};
	box-shadow: ${({ boxShadow }) => (boxShadow ? '-1px 9px 18px - 7px rgba(0, 0, 0, 0.75)' : 'none')};
	transition: background-color 0.5s, box-shadow 0.5s;
	padding-top: ${SPACERS.XL};
	padding-right: ${SPACERS.L};
	padding-left: ${SPACERS.L};
	padding-bottom: ${SPACERS.XL};
	.dark & {
		background-color: ${({ darkColor }) => darkColor || COLORS.BLACK};
		box-shadow: ${({ boxShadow }) => (boxShadow ? '-1px 9px 18px - 7px rgba(0, 0, 0, 0.75)' : 'none')};
		${MQ.L} {
			padding-top: ${SPACERS.L};
			padding-bottom: ${SPACERS.L};
			box-shadow: none;
		}
	}
	${MQ.L} {
		padding-top: ${SPACERS.L};
		padding-bottom: ${SPACERS.L};
		display: ${({ isHidden }) => (isHidden.length > 1 && isHidden[1] ? 'none' : 'inline')};
		box-shadow: none;
	}
`

export const ContentValueProp = styled.div`
	display: flex;
	width: 100%;
	padding: ${SPACERS.S};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${MQ.L} {
		justify-content: flex-start;
		align-items: space-between;
		margin: auto;
		height: 300px;
	}
`
export const ContentValuePropBox = styled.div`
	padding: ${SPACERS.L};
`
export const IconBox = styled.div`
	padding: ${SPACERS.M};
	margin-top: ${SPACERS.M};
	margin-right: ${SPACERS.M};
	margin-left: ${SPACERS.M};
`
export const ContentValuePropHeader = styled.h2`
	color: ${COLORS.BLACK};
	font-size: ${FONT_SIZES.H3};
	text-align: center;
	font-weight: 600;
	transition: color 0.5s;
	.dark & {
		color: ${COLORS.WHITE};
	}
	${MQ.M} {
		font-size: 2rem;
	}
`
export const CarouselHeader = styled.h2`
	color: ${COLORS.BLACK};
	margin-bottom: ${SPACERS.M};
	font-size: ${FONT_SIZES.H2};
	text-align: center;
	font-weight: 600;
	transition: color 0.5s;
	.dark & {
		color: ${COLORS.WHITE};
	}
	${MQ.M} {
		font-size: 2rem;
	}
`
export const ContentValuePropContent = styled.div`
	color: ${COLORS.BLACK};
	font-size: ${FONT_SIZES.H4};
	text-align: center;
	padding-top: ${SPACERS.M};
	padding-bottom: ${SPACERS.M};
	width: 90%;
	transition: color 0.5s;
	.dark & {
		color: ${COLORS.WHITE};
	}
	${MQ.M} {
		font-size: ${FONT_SIZES.H4};
	}
	${MQ.L} {
		font-size: ${FONT_SIZES.H3};
	}
`
