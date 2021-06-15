import React from 'react'
import PropTypes from 'prop-types'
import { InputFieldStyle } from './styles'

function InputField({ register: registerProp, name, ...props }) {
    const { register, ...registerValues } = registerProp
    return <InputFieldStyle {...register(`${name}`, { ...registerValues })} {...props} />
}

InputField.propTypes = {
    input: PropTypes.any,
    meta: PropTypes.any,
    registerProp: PropTypes.func,
}

export default InputField
