import React from 'react'
import PropTypes from 'prop-types'
import { InputFieldStyle } from './styles'

function InputField({ input, meta, ...rest }) {
	return <InputFieldStyle {...input} meta={meta} {...rest} errorText={meta && meta.touched ? meta.error : ''} />
}

InputField.propTypes = {
	input: PropTypes.any,
	meta: PropTypes.any,
}

export default InputField
