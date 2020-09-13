/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Hero from 'components/Hero'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import GlobalLayout from 'components/GlobalLayout'
import { PrimaryButtonLink, PrimaryButtonAnchor } from 'components/PrimaryButton'
import { MQ, SPACERS, COLORS, FONT_SIZES } from 'utils/styleHelpers'
import { Breakpoint } from 'react-socks'

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	z-index: 0;
	${MQ.M} {
		flex-wrap: nowrap;
	}
`
const ContentBoxCTA = styled.div`
	display: ${({ isHidden }) => (isHidden.length > 1 && isHidden[0] ? 'none' : 'inline')};
	background-color: ${({ color }) => color || COLORS.SUPER_LIGHT_GRAY};
	box-shadow: ${({ boxShadow }) => (boxShadow ? '-1px 9px 18px - 7px rgba(0, 0, 0, 0.75)' : 'none')};
	transition: background-color 0.5s, box-shadow 0.5s;
	padding-top: ${SPACERS.XL};
	padding-right: ${SPACERS.L};
	padding-left: ${SPACERS.L};
	padding-bottom: ${SPACERS.XL};
	.dark & {
		background-color: ${({ darkColor }) => darkColor || COLORS.BLACK};
		box-shadow: ${({ boxShadow }) => (boxShadow ? '-1px 9px 18px - 7px rgba(0, 0, 0, 0.75)' : 'none')};
		${MQ.L} {
			padding-top: ${SPACERS.L};
			padding-bottom: ${SPACERS.L};
			box-shadow: none;
		}
	}
	${MQ.L} {
		padding-top: ${SPACERS.L};
		padding-bottom: ${SPACERS.L};
		display: ${({ isHidden }) => (isHidden.length > 1 && isHidden[1] ? 'none' : 'inline')};
		box-shadow: none;
	}
`

const ContentValueProp = styled.div`
	display: flex;
	width: 100%;
	padding: ${SPACERS.S};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${MQ.L} {
		justify-content: flex-start;
		align-items: space-between;
		margin: auto;
		height: 300px;
	}
`
const ContentValuePropBox = styled.div`
	padding: ${SPACERS.L};
`
const IconBox = styled.div`
	padding: ${SPACERS.M};
	margin-top: ${SPACERS.M};
	margin-right: ${SPACERS.M};
	margin-left: ${SPACERS.M};
`
const ContentValuePropHeader = styled.h2`
	color: ${COLORS.BLACK};
	font-size: ${FONT_SIZES.H3};
	text-align: center;
	font-weight: 600;
	transition: color 0.5s;
	.dark & {
		color: ${COLORS.WHITE};
	}
	${MQ.M} {
		font-size: 2rem;
	}
`
const CarouselHeader = styled.h2`
	color: ${COLORS.BLACK};
	margin-bottom: ${SPACERS.M};
	font-size: ${FONT_SIZES.H2};
	text-align: center;
	font-weight: 600;
	transition: color 0.5s;
	.dark & {
		color: ${COLORS.WHITE};
	}
	${MQ.M} {
		font-size: 2rem;
	}
`
const ContentValuePropContent = styled.div`
	color: ${COLORS.BLACK};
	font-size: ${FONT_SIZES.H4};
	text-align: center;
	padding-top: ${SPACERS.M};
	padding-bottom: ${SPACERS.M};
	width: 90%;
	transition: color 0.5s;
	.dark & {
		color: ${COLORS.WHITE};
	}
	${MQ.M} {
		font-size: ${FONT_SIZES.H4};
	}
	${MQ.L} {
		font-size: ${FONT_SIZES.H3};
	}
`

function IndexPage({ data, location }) {
	
	return (
		<GlobalLayout
			isDisplayingSearch={false}
			location={location}
			isShowingBreadcrumbs={false}
			isShowingAccountLink={true}
			backgroundColor={COLORS.LIGHT_GRAY}
		>
			<Helmet>
				{/* Schema.org tags */}
				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'http://schema.org',
						'@type': 'WebSite',
						url: 'http://ninozfantasysports.com/',
						name: 'Ninoz Fantasy Golf',
						description: '',
					})}
				</script>
			</Helmet>
			<Hero />
			<ContentWrapper>
				<div
					css={css`
						background: ${COLORS.WHITE};
						${MQ.L} {
							padding-top: ${SPACERS.XL};
							padding-bottom: ${SPACERS.XL};
							background: ${COLORS.WHITE};
							transition: background 0.5s;
							.dark & {
								background: ${COLORS.BLACK};
							}
						}
					`}
				>
					<div
						css={css`
							flex-direction: column;
							flex-wrap: wrap;
							${MQ.L} {
								flex-direction: row;
								flex-wrap: nowrap;
							}
						`}
					>
						<ContentBoxCTA
							css={css`
								flex-grow: auto;
								flex-basis: auto;
								${MQ.L} {
									flex-grow: 1;
									flex-basis: 0;
								}
							`}
							color={COLORS.WHITE}
							isHidden={[false, false]}
						>
							<ContentValueProp>
								<IconBox>temp</IconBox>
								<ContentValuePropHeader>Dispensary Locator</ContentValuePropHeader>
								<ContentValuePropContent>
									Find the closest and the best dispensary in your area
								</ContentValuePropContent>
								<ContentValuePropBox>
									<PrimaryButtonLink color={COLORS.RED} textcolor={COLORS.WHITE} to="/dispensaries">
										Locate Now
									</PrimaryButtonLink>
								</ContentValuePropBox>
							</ContentValueProp>
						</ContentBoxCTA>
					</div>
				</div>
				<ContentBoxCTA
					css={css`
						align-self: center;
						${MQ.L} {
							align-self: inherit;
						}
					`}
					isHidden={[false, false]}
				>
					<CarouselHeader>Featured Dispensaries</CarouselHeader>
					<Breakpoint S down>
						temp
					</Breakpoint>
					<Breakpoint M up>
						<div
							css={css`
								display: flex;
								padding-bottom: ${SPACERS.M};
								justify-content: space-around;
							`}
						>
                            temp
						</div>
					</Breakpoint>
				</ContentBoxCTA>
				<div
					css={css`
						background: ${COLORS.GREEN};
						padding: ${SPACERS.L};
					`}
				>
					<div
						css={css`
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							${MQ.L} {
								flex-direction: row;
								justify-content: space-around;
							}
						`}
					>
						<div
							css={css`
								padding-bottom: ${SPACERS.M};
								padding-right: ${SPACERS.M};
								padding-left: ${SPACERS.M};
							`}
						>
							<span
								css={css`
									font-size: ${FONT_SIZES.H3};
									color: ${COLORS.WHITE};
									${MQ.L} {
										font-size: ${FONT_SIZES.H1};
										font-weight: 600;
									}
								`}
							>
								Join our Growing Community!
							</span>
						</div>
						<div
							css={css`
								padding-bottom: ${SPACERS.M};
							`}
						>
							<div
								css={css`
									display: flex;
									justify-content: space-around;
								`}
							>
								<div
									css={css`
										margin: ${SPACERS.S};
									`}
								>
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
								</div>
								<div
									css={css`
										margin: ${SPACERS.S};
									`}
								>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</GlobalLayout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.object,
	location: PropTypes.object,
}

export default IndexPage
