import styled from '@emotion/styled'
import { COLORS, SPACERS, MQ } from 'utils/styleHelpers'

export const StyledOverlay = styled.div`
	background: ${COLORS.WHITE};
	border-radius: 4px;
	box-shadow: 0 0 0 60vmax rgba(0, 0, 0, 0.25), 0 0 32px rgba(0, 0, 0, 0.25);
	left: 50%;
	max-width: 100vw;
	max-height: 100vh;
	overflow: auto;
	padding: 16px;
	position: fixed;
	top: 50%;
	transform: translate(-50%, -50%);
	height: calc(80vh - ${SPACERS.HEADER});
	width: 55vw;
	.dark & {
		background: ${COLORS.MEDIUM_GRAY};
	}
	${MQ.L} {
		height: calc(70vh - ${SPACERS.HEADER});
	}
`
export const OverlayTitle = styled('h2')`
	text-align: left;
	text-transform: uppercase;
`
export const Blocker = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	z-index: 4;
`
