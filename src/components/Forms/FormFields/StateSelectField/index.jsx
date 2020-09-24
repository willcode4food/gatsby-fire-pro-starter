import React from 'react'
import PropTypes from 'prop-types'
import states from 'utils/states'
import SelectField from '../SelectField'

export default function StateSelectField({ defaultState, input, meta }) {
	return (
		<SelectField {...input} defaultValue={defaultState} tabIndex={-1}>
			{states.map((s) => {
				return (
					<option key={s.abbr} value={s.abbr}>
						{s.fullName}
					</option>
				)
			})}
		</SelectField>
	)
}

StateSelectField.propTypes = {
	defaultState: PropTypes.any,
	input: PropTypes.any,
	meta: PropTypes.any,
}
