import styled from '@emotion/styled'
import { COLORS, SPACERS, FONT_SIZES, MQ } from 'utils/styleHelpers'
import { Link } from 'gatsby'


export const FooterWrapper = styled.div`
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
`
export const FooterLogoWrapper = styled.div`
	height: 32px;
	width: 194px;
`

export const FooterWrapperBox = styled.div`
	width: 20%;
`
export const FooterContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FooterContentBoxLogo = styled.div`
	margin-left: ${SPACERS.M};
	margin-right: ${SPACERS.M};
	margin-top: ${SPACERS.L};
	${MQ.L} {
		margin-top: ${SPACERS.L};
	}
`

export const FooterContentBoxTermsAndPolicy = styled.div`
	font-size: ${FONT_SIZES.H7};
	color: ${COLORS.GREEN};
`

export const FooterContentCopyrightWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${SPACERS.M};
`

export const FooterSocialLinksWrapper = styled.div`
	margin: ${SPACERS.M};
`

export const FooterLinkBox = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 200px;
	line-height: 20px;
`
export const FooterLink = styled(Link)`
	color: ${COLORS.LIGHT_GRAY};
	font-size: ${FONT_SIZES.H5};
`
export const CopyrightText = styled.p`
	color: ${COLORS.MEDIUM_LIGHT_GRAY};
	font-size: ${FONT_SIZES.H8};
	margin: 0;
`
