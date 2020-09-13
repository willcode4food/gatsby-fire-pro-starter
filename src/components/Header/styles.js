import styled from '@emotion/styled'
import { COLORS, MQ, SPACERS } from 'utils/styleHelpers'

export const StickyNav = styled.div`
	background: #fff;
	position: sticky;
	left: 0;
	top: 0;
	transition: background 0.5s;
	box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.12);
	z-index: 3;
	.dark & {
		background: ${COLORS.DARK_BLACK};
	}
`

export const HeaderBar = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 15px;
	${MQ.L} {
		padding: 15px;
	}
`

export const BreadcrumbsWrapper = styled.div`
	background: ${COLORS.WHITE};
	transition: background 0.5s;
	width: 100vw;
	z-index: 1;
	.dark & {
		background: ${COLORS.BLACK};
	}
`

export const LogoWrapper = styled.div`
`
// https://stackoverflow.com/questions/32378953/keep-the-middle-item-centered-when-side-items-have-different-widths
export const HeaderBox = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	:first-of-type > span {
		margin-right: auto;
	}
	:last-of-type > span {
		margin-left: auto;
	}
`
export const HeaderIconBox = styled.div`
	padding: ${SPACERS.S};
`
export const HeaderIconBoxCentered = styled.div`
	padding: ${SPACERS.S};
	align-self: center;
`