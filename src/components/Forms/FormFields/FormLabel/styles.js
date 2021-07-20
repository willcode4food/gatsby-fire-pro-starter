import styled from '@emotion/styled'
import { FONT_SIZES, SPACERS } from 'utils/styleHelpers'

export const Label = styled.label`
    display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
    padding-bottom: ${SPACERS.S};
    padding-top: ${SPACERS.M};
    font-size: ${FONT_SIZES.H7};
`
