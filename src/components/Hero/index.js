import React from 'react'
import { Breakpoint } from 'react-socks'
import {
	HeroWrapper,
	WelcomeMessageWrapper,
	WelcomeMessageTitle,
	WelcomeMessageSubTitle,
} from './styles'

function Hero() {
	return (
		<HeroWrapper>
			<WelcomeMessageWrapper>
				<WelcomeMessageTitle>Welcome</WelcomeMessageTitle>
				<WelcomeMessageSubTitle>
					We're going to change the world!
				</WelcomeMessageSubTitle>
			</WelcomeMessageWrapper>
		</HeroWrapper>
	)
}
export default Hero
