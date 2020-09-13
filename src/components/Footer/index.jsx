import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { COLORS, SPACERS, FONT_SIZES, MQ } from 'utils/styleHelpers'
import SocialLinks from 'components/SocialLinks'
import Logo from 'components/Header/Logo'
import { Breakpoint } from 'react-socks'
import { FooterHeader, LogoWrapper, CopyrightText } from './styles'

const Footer = () => {

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				background: ${COLORS.BLACK};
				transition: background 0.5s;
				.dark & {
					background: ${COLORS.DARK_BLACK};
				}
				${MQ.L} {
					flex-direction: column;
				    justify-content: flex-start;
				}
			`}
		>
			<div
                css={css`
                    flex-basis: 50%;
					padding-top: ${SPACERS.XL};
					margin-top: ${SPACERS.L};
					${MQ.L} {
						padding-top: ${SPACERS.L};
						margin-top: ${SPACERS.L};
					}
				`}
			>
                <div css={css`
                    display: flex;
                    flex-direction: row;
                `}>
					<div
						css={css`
							margin-left: ${SPACERS.M};
							${MQ.L} {
								margin-left: 0;
							}
						`}
					>
                        <div css={css`
                            display: flex;
                            flex-direction: column;
                        `}>
							<FooterHeader>Temp</FooterHeader>
							
						</div>
					</div>
				</div>
			</div>
			<div>
				<div css={css`
                    display: flex;
                    flex-direction: column;
                `}>
					<div
						css={css`
							margin-left: ${SPACERS.M};
							margin-right: ${SPACERS.M};
							margin-top: ${SPACERS.L};
							${MQ.L} {
								margin-top: ${SPACERS.L};
							}
						`}
					>
						<LogoWrapper>
							<Logo color={COLORS.WHITE} textColor={COLORS.WHITE} />
						</LogoWrapper>
					</div>

					<div>
						<Breakpoint M up>
							<SocialLinks />
						</Breakpoint>
					</div>
					<div
						css={css`
							margin-left: ${SPACERS.M};
							font-size: ${FONT_SIZES.H7};
							color: ${COLORS.GREEN};
						`}
					>
						<Link to="/tos"> Terms of Use</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
					</div>
					<div>
						<div
                            css={css`
                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;
								margin: ${SPACERS.M};
							`}>
							<div>
								<CopyrightText>Copyright 2019 All Rights Researved</CopyrightText>
							</div>
							<Breakpoint S down>
								<div>
									<SocialLinks />
								</div>
							</Breakpoint>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
