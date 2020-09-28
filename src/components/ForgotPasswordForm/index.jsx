import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from 'components/Forms/FormFields'
import { FormHeader, FormButton, StyledLink } from 'components/Forms/FormStyles'
import { COLORS } from 'utils/styleHelpers'
import {
	FormBox,
	FormFlex,
	FormFlexInner,
	FormWrapper,
	FormWrapperBox,
	FormFlexInnerBox,
} from 'components/Forms/FormLayout'
import { INPUT_WIDTH } from 'utils/formHelpers'
import Loader from 'components/Loader'

function LoginForm() {
	const [isLoading, setIsLoading] = useState(false)
	const { errors, register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		console.log('onSubmit -> data', data)
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<FormWrapper>
					<FormWrapperBox>
						<FormHeader>Forgot Password</FormHeader>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormFlex>
								<FormBox>
									<InputField
										name="email"
										placeholder="Email Address"
										register={register}
										type="text"
										width={INPUT_WIDTH}
									/>
								</FormBox>
								<FormBox>
									<FormFlexInner>
										<FormFlexInnerBox>
											<FormButton bg={COLORS.PRIMARY_DARK}>Reset My Password</FormButton>
										</FormFlexInnerBox>
									</FormFlexInner>
								</FormBox>
								<FormBox>
									<StyledLink to="/login">Return to Login</StyledLink>
								</FormBox>
							</FormFlex>
						</form>
					</FormWrapperBox>
				</FormWrapper>
			)}
		</>
	)
}

export default LoginForm
