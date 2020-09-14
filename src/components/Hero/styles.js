import styled from '@emotion/styled'
import { COLORS, FONT_SIZES, MQ } from 'utils/styleHelpers'

export const HeroWrapper = styled.div`
    align-items: center;
	display: flex;
	background-color: ${COLORS.GREEN};
	background-image: url(/images/front-door-bg.jpg);
	background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
	padding: 50px 15px;
	position: relative;
	text-align: center;
	min-height: 450px;
	${MQ.L} {
		padding: 50px 30px;
	}
`
export const SearchPositionCentered = styled.div`
	width: 100%;
`

export const WelcomeMessage = styled.div`
	color: #fff;
	margin-bottom: 20px;

	h1 {
		border: none;
		font-size: ${FONT_SIZES.H1};
		margin-top: 0px;
	}

	h3 {
		font-size: ${FONT_SIZES.H3};
	}
`
