import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { InputField, SubmitButton } from 'components/Forms/FormFields'
import { ErrorMessage, FormHeader, FormButton, StyledLink, ErrorIcon } from 'components/Forms/FormStyles'
import {
	FormBox,
	FormFlex,
	FormFlexInner,
	FormWrapper,
	FormWrapperBox,
	FormFlexInnerBox,
} from 'components/Forms/FormLayout'
import { ButtonLabelWrapper, ButtonLabelIconBox, ButtonLabelBox, GoogleLoginIcon } from 'components/Forms/FormStyles'
import Loader from 'components/Loader'
import { FIREBASE } from 'utils/constants'
import useFirebaseAuthentication from 'hooks/firebase/useFirebaseAuthentication'

function LoginForm() {
	const [isLoading] = useState(false)
	const { errors, register, handleSubmit } = useForm()
	const [authError, setAuthError] = useState(null)
	const { onEmailLogin, onGoogleLogin, authenticationError } = useFirebaseAuthentication({
		firebaseConfig: FIREBASE.CONFIG,
	})

	useEffect(() => {
		setAuthError(authenticationError)
	}, [authenticationError])

	const onEmailSubmit = async (data) => {
		try {
			await onEmailLogin(data)
		} catch (e) {
			authenticationError
		}
	}

	const onGoogleSubmit = async (event) => {
		onGoogleLogin(event)
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<FormWrapper>
					<FormWrapperBox>
						<FormHeader>Login</FormHeader>
						<form onSubmit={handleSubmit(onEmailSubmit)}>
							<FormFlex>
								{authError && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>{authError.message}</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<InputField
										register={register({ required: true })}
										name="email"
										placeholder="Email Address"
										type="text"
										aria-label="Email Address"
									/>
								</FormBox>
								{errors.email && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Please enter a valid email</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<InputField
										register={register({ required: true })}
										name="password"
										placeholder="Password"
										type="password"
										aria-label="Password"
									/>
								</FormBox>
								{errors.password && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Please enter a password</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<FormFlexInner>
										<FormFlexInnerBox>
											<SubmitButton value="Login With Email" />
										</FormFlexInnerBox>
										<FormFlexInnerBox>
											<FormButton onClick={onGoogleSubmit}>
												<ButtonLabelWrapper>
													<ButtonLabelIconBox>
														<GoogleLoginIcon />
													</ButtonLabelIconBox>
													<ButtonLabelBox>Login With Google</ButtonLabelBox>
												</ButtonLabelWrapper>
											</FormButton>
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
