import React from 'react'
import PropTypes from 'prop-types'
import { InputFieldStyle } from './styles'

function InputField({ input, ...rest }) {
    return <InputFieldStyle {...input} {...rest} />
}

InputField.propTypes = {
    input: PropTypes.any,
    meta: PropTypes.any,
    register: PropTypes.func,
}

export default InputField
