import React from 'react'
import PropTypes from 'prop-types'
import { SelectFieldStyle } from './styles'

function SelectField({ input, register: registerProp, name, ...rest }) {
    const { register, ...registerValues } = registerProp
    return <SelectFieldStyle {...register(`${name}`, { ...registerValues })} {...input} {...rest} />
}

SelectField.propTypes = {
    input: PropTypes.any,
    registerProp: PropTypes.func,
}

export default SelectField
