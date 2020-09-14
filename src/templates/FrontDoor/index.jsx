import React from 'react'
import PropTypes from'prop-types'
import Hero from 'components/Hero'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
    ContentWrapper,
    ContentBoxCTA,
    ContentValueProp,
    ContentValuePropBox,
    IconBox,
    ContentValuePropHeader,
    CarouselHeader,
    ContentValuePropContent,
} from './styles'
import { Breakpoint } from 'react-socks'
import { MQ, SPACERS, COLORS, FONT_SIZES } from 'utils/styleHelpers'
import { PrimaryButtonLink, PrimaryButtonAnchor } from 'components/PrimaryButton'

function FrontDoor({data, location}) {
return (
	<>
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
	</>
)
}

FrontDoor.propTypes = {
	data: PropTypes.object,
	location: PropTypes.object,
}

export default FrontDoor