import React from 'react'
import {
	EmailLoginIcon,
	FormButton,
	ButtonLabelWrapper,
	ButtonLabelBox,
	ButtonLabelIconBox,
} from 'components/Forms/FormStyles'

import { toSnakeCase } from 'utils/stringUtils'
import { HiddenInput } from './styles'

function SubmitButton({ value }) {
	return (
		<label htmlFor={toSnakeCase(value)}>
			<HiddenInput type="submit" id={toSnakeCase(value)} value={value} />
			<FormButton>
				<ButtonLabelWrapper>
					<ButtonLabelIconBox>
						<EmailLoginIcon />
					</ButtonLabelIconBox>
					<ButtonLabelBox>{value}</ButtonLabelBox>
				</ButtonLabelWrapper>
			</FormButton>
		</label>
	)
}

export default SubmitButton
