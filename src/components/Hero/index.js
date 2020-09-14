import React from 'react'
import { Breakpoint } from 'react-socks'
import {
	HeroWrapper,
	SearchPositionCentered,
	WelcomeMessage
} from './styles'

function Hero() {
	return (
		<HeroWrapper>
			<WelcomeMessage>
				<h1>Welcome</h1>
				<h3>
					<p>Discover New Products</p>
				</h3>
			</WelcomeMessage>
		</HeroWrapper>
	)
}
export default Hero
