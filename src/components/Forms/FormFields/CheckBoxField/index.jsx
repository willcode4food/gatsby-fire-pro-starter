import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CheckBoxContainer, CheckBoxStyle } from './styles'

function CheckBoxField({ label }) {
    const [isChecked, setIsChecked] = useState(false)

    function handleChange() {
        setIsChecked(!isChecked)
    }

    return (
        <CheckBoxContainer isChecked={isChecked}>
            <CheckBoxStyle controlName={`chkbx___${label}`} onClick={handleChange} />
        </CheckBoxContainer>
    )
}

CheckBoxField.propTypes = {
    label: PropTypes.string,
}

export default CheckBoxField
