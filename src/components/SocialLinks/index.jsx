import React from 'react'
import styled from '@emotion/styled'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { SPACERS, MQ } from 'utils/styleHelpers'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	${MQ.L} {
		justify-content: flex-start;
	}
	${MQ.M} {
		justify-content: space-evenly;
	}
`

const SocialLink = styled.a`
	color: #fff;
	font-size: 30px;
	transition: 0.3s;
	margin-right: ${SPACERS.M};
	&:hover {
		color: #016f41;
	}
`

export default function SocialLinks() {
	return (
		<Wrapper>
			<SocialLink
				href="https://www.facebook.com/weedrater/"
				rel="noopener noreferrer"
				aria-label="Weedrater on Facebook"
				target="blank"
			>
				<FaFacebookF />
			</SocialLink>
			<SocialLink
				href="https://www.instagram.com/weedrater/"
				rel="noopener noreferrer"
				aria-label="Weedrater on Instagram"
				target="blank"
			>
				<FaInstagram />
			</SocialLink>
			<SocialLink
				href="https://www.twitter.com/weedrater/"
				rel="noopener noreferrer"
				aria-label="Weedrater on Twitter"
				target="blank"
			>
				<FaTwitter />
			</SocialLink>
		</Wrapper>
	)
}
