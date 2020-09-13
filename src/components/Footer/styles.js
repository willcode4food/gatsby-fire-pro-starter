import styled from '@emotion/styled'
import { COLORS, SPACERS, FONT_SIZES } from 'utils/styleHelpers'
import { Link } from 'gatsby'

export const FooterHeader = styled.div`
	color: ${COLORS.GREEN};
	font-size: ${FONT_SIZES.H3};
	font-weight: 600;
	margin-bottom: ${SPACERS.M};
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
export const LogoWrapper = styled.div`
	height: 80px;
	width: 160px;
`
export const CopyrightText = styled.p`
	color: ${COLORS.MEDIUM_GRAY};
	font-size: ${FONT_SIZES.H8};
	margin: 0;
`
