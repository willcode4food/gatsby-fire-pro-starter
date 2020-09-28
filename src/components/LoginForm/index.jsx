import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from 'components/Forms/FormFields'
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
						<FormHeader>Login</FormHeader>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormFlex>
								<FormBox>
									<InputField
										register={register}
										name="email"
										placeholder="Email Address"
										type="text"
										width={INPUT_WIDTH}
										aria-label="Email Address"
									/>
								</FormBox>
								<FormBox>
									<InputField
										register={register}
										name="password"
										placeholder="Password"
										type="password"
										width={INPUT_WIDTH}
										aria-label="Password"
									/>
								</FormBox>
								<FormBox>
									<FormFlexInner>
										<FormFlexInnerBox>
											<FormButton bg={COLORS.PRIMARY_DARK}>Sign In with Email</FormButton>
										</FormFlexInnerBox>
										<FormFlexInnerBox>
											<FormButton bg={COLORS.PRIMARY_BUTTON}>Sign in with Google</FormButton>
										</FormFlexInnerBox>
									</FormFlexInner>
								</FormBox>
								<FormBox>
									<StyledLink to="/register">Create an Account</StyledLink>
								</FormBox>
								<FormBox>
									<StyledLink to="/forgotpassword">Forgot Your Password?</StyledLink>
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
