import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { BREAKPOINTS_VALUES, MQ } from 'utils/styleHelpers'

const mainColumn = css`
	margin: 0 auto;
	max-width: ${BREAKPOINTS_VALUES.L};
	${MQ.XL} {
		max-width: ${BREAKPOINTS_VALUES.XL};
	}
`
const fixedHeight = css`
	min-height: 500px;

	${MQ.M} {
		min-height: 900px;
	}
`

export const Body = styled.main`
	${({ isDisplayingSearch }) => (isDisplayingSearch ? mainColumn : '')}
	${({ isShowingFooter }) => isShowingFooter && fixedHeight}
`
