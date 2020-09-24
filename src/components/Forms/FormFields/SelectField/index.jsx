import React from 'react'
import PropTypes from 'prop-types'
import { SelectFieldStyle } from './styles'

function SelectField({ input, meta, ...rest }) {
	return <SelectFieldStyle {...input} meta={meta} {...rest} />
}

SelectField.propTypes = {
	input: PropTypes.any,
	meta: PropTypes.any,
}

export default SelectField
