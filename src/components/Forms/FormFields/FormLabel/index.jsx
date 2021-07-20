/** @jsx jsx */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types'
import { Label } from './styles'
function FormLabel({ children, isHidden = true, ...restProps }) {
    return (
        <Label isHidden={isHidden} {...restProps}>
            {children}
        </Label>
    )
}

FormLabel.propTypes = {
    children: PropTypes.string.isRequired,
    isHidden: PropTypes.bool,
}

export default FormLabel
