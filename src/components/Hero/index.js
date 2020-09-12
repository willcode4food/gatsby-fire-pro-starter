import React from 'react'
import styled from '@emotion/styled'
import { COLORS, FONT_SIZES, MQ } from 'utils/styleHelpers'
import { Breakpoint } from 'react-socks'
const HeroWrapper = styled.div`
	display: flex;
	position: relative;
	text-align: center;
	background-color: ${COLORS.GREEN};
	background-image: url(/images/front-door-bg.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	padding: 50px 15px;
	min-height: 450px;
	${MQ.L} {
		padding: 50px 30px;
	}
`
const SearchPositionCentered = styled.div`
	width: 100%;
`

const WelcomeMessage = styled.div`
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

function Hero() {
	return (
		<HeroWrapper justifyContent="center" flexDirection="column" alignItems="center">
			<WelcomeMessage>
				<h1>Welcome</h1>
				<h3>
					<Breakpoint S down>
						<p>Discover New Products</p>
						<p> and Dispensaries</p>
					</Breakpoint>
					<Breakpoint M up>
						<p>Discover New Products and Dispensaries</p>
					</Breakpoint>
				</h3>
			</WelcomeMessage>

			<SearchPositionCentered>
				{/* <OmniSearchHome /> */}
			</SearchPositionCentered>
		</HeroWrapper>
	)
}
export default Hero
