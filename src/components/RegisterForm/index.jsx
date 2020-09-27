import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField, SwitchField } from 'components/Forms/FormFields'
import { ErrorMessage, FormHeader, FormButton, StyledLink } from 'components/Forms/FormStyles'
import { COLORS } from 'utils/styleHelpers'
import {
	FormBox,
	FormFlex,
	FormFlexInner,
	FormWrapper,
	FormWrapperBox,
	FormFlexInnerBox,
} from 'components/Forms/FormLayout'
import { INPUT_WIDTH, setLoginFlag, getLoginFlag, unsetLoginFlag } from 'utils/formHelpers'
import Loader from 'components/Loader'

function RegisterForm() {
	// const { register, handleSubmit, watch, errors } = useForm()
	// const onSubmit = (data) => console.log(data)
	const [isLoading, setIsLoading] = useState(false)
	const [prefersUsername, setPrefersUsername] = useState(false)

	const onPrefersUsername = () => {
		setPrefersUsername(!prefersUsername)
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<FormWrapper>
					<FormWrapperBox>
						<FormHeader>Register</FormHeader>
						<form>
							<FormFlex>
								<FormBox>
									<InputField placeholder="Username" type="text" width={INPUT_WIDTH} />
								</FormBox>
								<FormBox>
									<InputField placeholder="First Name" type="text" width={INPUT_WIDTH} />
								</FormBox>
								<FormBox>
									<InputField placeholder="Last Name" type="text" width={INPUT_WIDTH} />
								</FormBox>
								<FormBox>
									<InputField placeholder="Email" type="text" width={INPUT_WIDTH} />
								</FormBox>
								<FormBox>
									<InputField placeholder="Password" type="password" width={INPUT_WIDTH} />
								</FormBox>
								<FormBox>
									<InputField placeholder="Confirm Password" type="password" width={INPUT_WIDTH} />
								</FormBox>
								<FormBox>
									<FormFlexInner>
										<FormFlexInnerBox>
											<FormButton bg={COLORS.PRIMARY_DARK}>Register With Email</FormButton>
										</FormFlexInnerBox>
										<FormFlexInnerBox>
											<FormButton bg={COLORS.PRIMARY_BUTTON}>Register With Google</FormButton>
										</FormFlexInnerBox>
									</FormFlexInner>
								</FormBox>
								<FormBox>
									<StyledLink to="/login">Return to Login</StyledLink>
								</FormBox>
								{/* {error && (
									<FormBox>
										<ErrorMessage>{error.message}</ErrorMessage>
									</FormBox>
								)} */}
							</FormFlex>
						</form>
					</FormWrapperBox>
				</FormWrapper>
			)}
		</>
	)
}

export default RegisterForm
