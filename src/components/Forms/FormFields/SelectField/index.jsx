import PropTypes from 'prop-types'
import React from 'react'
import { SelectFieldStyle } from './styles'

function SelectField({ input, register: registerProp, name, ...rest }) {
    const { register, ...registerValues } = registerProp
    return <SelectFieldStyle {...register(`${name}`, { ...registerValues })} {...input} {...rest} />
}

SelectField.propTypes = {
    input: PropTypes.any,
    register: PropTypes.shape({
        register: PropTypes.func,
    }),
    name: PropTypes.string,
}

export default SelectField
