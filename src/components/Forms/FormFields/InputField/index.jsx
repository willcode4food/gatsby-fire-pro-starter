import PropTypes from 'prop-types'
import React from 'react'
import { InputFieldStyle } from './styles'

function InputField({ register: registerProp, name, ...props }) {
    const { register, ...registerValues } = registerProp
    return <InputFieldStyle {...register(`${name}`, { ...registerValues })} {...props} />
}

InputField.propTypes = {
    input: PropTypes.any,
    meta: PropTypes.any,
    register: PropTypes.shape({
        register: PropTypes.func,
    }),
    name: PropTypes.string,
}

export default InputField
