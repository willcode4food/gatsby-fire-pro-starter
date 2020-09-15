import React from 'react'
import PropTypes from 'prop-types'
import Hero from 'components/Hero'
import {
	FrontDoorWrapper,
	ContentBoxCta,
	ContentBanner,
	ContentBannerWrapper,
	ContentBannerBox,
	ContentBannerButtonWrapper,
	ContentBannerButtonBox,
	ContentBannerMessage,
	ContentValueProp,
	ContentValuePropBox,
	IconBox,
	ContentValuePropHeader,
	CarouselHeader,
	ContentValuePropContent,
} from './styles'
import { COLORS, FONT_SIZES } from 'utils/styleHelpers'
import { PrimaryButtonLink, PrimaryButtonAnchor } from 'components/PrimaryButton'

function FrontDoor({ data, location }) {
	return (
		<>
			<Hero />
			<FrontDoorWrapper>
				<ContentBoxCta color={COLORS.WHITE} isHidden={[false, false]}>
					<ContentValueProp>
						<ContentValuePropHeader>Ready to board the rocketship?</ContentValuePropHeader>
						<ContentValuePropContent>
							We're about to show the world they are ready for us!
						</ContentValuePropContent>
						<ContentValuePropBox>
							<PrimaryButtonLink color={COLORS.RED} textcolor={COLORS.WHITE} to="/dispensaries">
								Blastoff!
							</PrimaryButtonLink>
						</ContentValuePropBox>
					</ContentValueProp>
				</ContentBoxCta>
				<ContentBoxCta color={COLORS.SUPER_LIGHT_GRAY} isHidden={[false, false]}>
					<ContentValueProp>
						<ContentValuePropHeader>Do you like being awesome?</ContentValuePropHeader>
						<ContentValuePropContent>Let's be awesome together</ContentValuePropContent>
						<ContentValuePropBox>
							<PrimaryButtonLink color={COLORS.RED} textcolor={COLORS.WHITE} to="/dispensaries">
								Step into Awesomeness
							</PrimaryButtonLink>
						</ContentValuePropBox>
					</ContentValueProp>
				</ContentBoxCta>
				<ContentBanner>
					<ContentBannerWrapper>
						<ContentBannerBox>
							<ContentBannerMessage>Find out how you can be even more awesome!</ContentBannerMessage>
						</ContentBannerBox>
						<ContentBannerBox>
							<ContentBannerButtonWrapper>
								<ContentBannerButtonBox>
									<PrimaryButtonLink
										color={COLORS.RED}
										textcolor={COLORS.WHITE}
										to={'/register'}
										state={{ activeTabIndex: 2 }}
										fontSize={FONT_SIZES.H4}
										paddingx={'40px'}
									>
										Sign Up
									</PrimaryButtonLink>
								</ContentBannerButtonBox>
								<ContentBannerButtonBox>
									<PrimaryButtonAnchor
										color={COLORS.BLACK}
										textcolor={COLORS.WHITE}
										href={'mailto:sales@weedrater.com'}
										state={{ activeTabIndex: 2 }}
										fontSize={FONT_SIZES.H4}
										paddingx={'40px'}
									>
										Advertise
									</PrimaryButtonAnchor>
								</ContentBannerButtonBox>
							</ContentBannerButtonWrapper>
						</ContentBannerBox>
					</ContentBannerWrapper>
				</ContentBanner>
			</FrontDoorWrapper>
		</>
	)
}

FrontDoor.propTypes = {
	data: PropTypes.object,
	location: PropTypes.object,
}

export default FrontDoor
