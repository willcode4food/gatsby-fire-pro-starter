import React from 'react'
import { Link } from 'gatsby'
import { COLORS } from 'utils/styleHelpers'
import SocialLinks from 'components/SocialLinks'
import Logo from 'components/Header/Logo'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import {
    CopyrightText,
    FooterContentWrapper,
    FooterContentBoxLogo,
    FooterContentBoxTermsAndPolicy,
    FooterContentCopyrightWrapper,
    FooterLogoWrapper,
    FooterSocialLinksMobileWrapper,
    FooterSocialLinksWrapper,
    FooterWrapper,
    FooterWrapperBox,
} from './styles'

const Footer = () => {
    const breakpoints = useBreakpoint()
    console.log('Footer -> breakpoints', breakpoints)

    return (
        <FooterWrapper>
            <FooterWrapperBox>
                <FooterContentWrapper>
                    <FooterContentBoxLogo>
                        <FooterLogoWrapper>
                            <Logo color={COLORS.PRIMARY} textColor={COLORS.PRIMARY} />
                        </FooterLogoWrapper>
                    </FooterContentBoxLogo>
                    <FooterSocialLinksWrapper>
                        {/* TODO: Medium up Breakpoint */}
                        {!breakpoints.S && (breakpoints.M || breakpoints.L) && <SocialLinks />}
                    </FooterSocialLinksWrapper>
                    <FooterContentBoxTermsAndPolicy>
                        <Link to="/tos"> Terms of Use</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
                    </FooterContentBoxTermsAndPolicy>
                    <div>
                        <FooterContentCopyrightWrapper>
                            {/* TODO: Small down */}
                            {!breakpoints.XS && breakpoints.S && (
                                <FooterSocialLinksMobileWrapper>
                                    <SocialLinks />
                                </FooterSocialLinksMobileWrapper>
                            )}
                            <div>
                                <CopyrightText>Copyright 2020 All Rights Researved</CopyrightText>
                            </div>
                        </FooterContentCopyrightWrapper>
                    </div>
                </FooterContentWrapper>
            </FooterWrapperBox>
        </FooterWrapper>
    )
}

export default Footer
