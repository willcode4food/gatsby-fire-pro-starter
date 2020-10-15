import styled from '@emotion/styled'
import { COLORS, shadeColor2 } from 'utils/styleHelpers'

export const CheckBoxContainer = styled.label`
    appearence: button;
    background-color: ${({ isChecked, bgc, bgcOff }) => (isChecked ? shadeColor2(bgc, 0.5) : bgcOff)};
    border: 1px solid ${({ bgc }) => shadeColor2(bgc, 0.5)};
    border-radius: 1px;
    cursor: pointer;
    display: block;
    margin: 5px 10px;
    padding: 5px 10px;
    width: 25px;
    height: 25px;
    &:after {
        content: '✓';
        font-size: 25px;
        color: ${COLORS.GREEN};
    }
    &:before {
        content: '';
    }
`

export const CheckBoxStyle = styled.input`
    position: absolute;
    left: -9999px;
    &:checked + label {
        color: red;
    }
`

// CheckBoxContainer.propTypes = {
// 	bgc: PropTypes.string,
// 	bgcOff: PropTypes.string,
// 	isChecked: PropTypes.bool,
// }
// CheckBoxContainer.defaultProps = {
// 	bgc: COLORS.GREEN,
// 	bgcOff: COLORS.WHITE,
// 	isChecked: false,
// }
