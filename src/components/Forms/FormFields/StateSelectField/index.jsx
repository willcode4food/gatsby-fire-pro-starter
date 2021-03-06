import React from 'react'
import PropTypes from 'prop-types'
import states from 'utils/states'
import SelectField from '../SelectField'

export default function StateSelectField({ defaultValue, input, register: registerProp, name, ...restProps }) {
    return (
        <SelectField
            name={name}
            register={registerProp}
            {...input}
            defaultValue={defaultValue}
            tabIndex={-1}
            {...restProps}
        >
            <option key="default" value="">
                Select a State
            </option>
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
    defaultValue: PropTypes.any,
    input: PropTypes.any,
    registerProp: PropTypes.func,
    name: PropTypes.string,
}
