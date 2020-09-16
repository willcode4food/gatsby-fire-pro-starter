import React from 'react'
import { Link } from 'gatsby'
import { COLORS } from 'utils/styleHelpers'
import SocialLinks from 'components/SocialLinks'
import Logo from 'components/Header/Logo'
import { Breakpoint } from 'react-socks'
import {
	CopyrightText,
	FooterContentWrapper,
	FooterContentBoxLogo,
	FooterContentBoxTermsAndPolicy,
	FooterContentCopyrightWrapper,
	FooterLogoWrapper,
	FooterWrapper,
	FooterWrapperBox,
} from './styles'

const Footer = () => {

	return (
		<FooterWrapper>
			<FooterWrapperBox>
				<FooterContentWrapper>
					<FooterContentBoxLogo>
						<FooterLogoWrapper>
							<Logo color={COLORS.WHITE} textColor={COLORS.WHITE} />
						</FooterLogoWrapper>
					</FooterContentBoxLogo>
					<div>
						<Breakpoint M up>
							<SocialLinks />
						</Breakpoint>
					</div>
					<FooterContentBoxTermsAndPolicy>
						<Link to="/tos"> Terms of Use</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
					</FooterContentBoxTermsAndPolicy>
					<div>
						<FooterContentCopyrightWrapper>
							<div>
								<CopyrightText>Copyright 2019 All Rights Researved</CopyrightText>
							</div>
							<Breakpoint S down>
								<div>
									<SocialLinks />
								</div>
							</Breakpoint>
						</FooterContentCopyrightWrapper>
					</div>
				</FooterContentWrapper>
			</FooterWrapperBox>
		</FooterWrapper>
	)
}

export default Footer
