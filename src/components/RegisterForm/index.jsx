import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { useForm } from 'react-hook-form'
import { InputField, SubmitButton } from 'components/Forms/FormFields'
import {
	ButtonLabelWrapper,
	ButtonLabelBox,
	ButtonLabelIconBox,
	ErrorMessage,
	ErrorIcon,
	FormHeader,
	FormButton,
	GoogleLoginIcon,
	StyledLink,
} from 'components/Forms/FormStyles'
import {
	FormBox,
	FormFlex,
	FormFlexInner,
	FormWrapper,
	FormWrapperBox,
	FormFlexInnerBox,
} from 'components/Forms/FormLayout'
import {
	INPUT_WIDTH,
	setLoginFlag,
	getLoginFlag,
	unsetLoginFlag,
	setUsername,
	getUsername,
	unsetUsername,
} from 'utils/formHelpers'
import { navigateToPathHistory } from 'components/PathHistory'
import Loader from 'components/Loader'
import { authActions, userActions } from 'firebaseActions'

function RegisterForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [isUsernameForThirdPartyLoginError, setIsUsernameForThirdPartyLoginError] = useState(false)
	const [appError, setAppError] = useState(null)
	const { doCreateUserWithEmailAndPassword } = authActions
	const { errors, register, handleSubmit, watch } = useForm()
	const { doCreateUser } = userActions

	useEffect(() => {
		if (getLoginFlag()) {
			setIsLoading(true)
			unsetLoginFlag()
		}
		const handleRedirectResult = async () => {
			try {
				const result = await firebase.auth().getRedirectResult()
				if (result.user) {
					setIsLoading(true)
					const { user } = result
					const { uid, displayName, email, emailVerified } = user
					if (!emailVerified) {
						// prevent bots and spam
						setIsLoading(false)
						setAppError('Your Google Account is not verified')
					} else {
						// getting only one field with a name.  so have to split if there is a space

						const name = displayName.indexOf(' ') >= 0 ? displayName.split(' ') : [displayName]
						const firstName = name[0]
						const lastName = name.length > 1 ? name[1] : ''
						const username = getUsername()
						unsetUsername()
						try {
							await doCreateUser({
								id: uid,
								username,
								firstName,
								lastName,
								email,
								provider: 'google',
							})
							navigateToPathHistory()
						} catch (e) {
							setIsLoading(false)
							setAppError(e.message)
						}
					}
				}
			} catch (e) {
				setIsLoading(false)
				setAppError(e.message)
			}
		}
		handleRedirectResult()
	}, [])

	const onSubmit = async (data) => {
		setAppError(null)
		setIsLoading(true)
		try {
			const { firstName, lastName, email, password, username } = data
			const authUser = await doCreateUserWithEmailAndPassword(email, password)
			const {
				user: { uid },
			} = authUser
			// create a user with email
			await doCreateUser({
				id: uid,
				firstName,
				lastName,
				username,
				email,
				provider: 'email',
			})
			navigateToPathHistory()
		} catch (e) {
			setAppError(e.message)
		}
		setIsLoading(false)
	}

	const onGoogleLogin = async (event) => {
		event.preventDefault()
		setAppError(null)
		const username = document.getElementsByName('username')[0]
		if (
			!username.value ||
			username.value === '' ||
			typeof username.value === undefined ||
			username.value.length < 2
		) {
			setIsUsernameForThirdPartyLoginError(true)
			return
		}
		setLoginFlag()
		setIsLoading(true)
		setUsername(username.value)
		try {
			await authActions.doSignInWithGoogle()
		} catch (e) {
			setIsLoading(false)
			setAppError(e.message)
		}
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<FormWrapper>
					<FormWrapperBox>
						<FormHeader>Register</FormHeader>
						<form onSubmit={handleSubmit(onSubmit)}>
							{appError && (
								<FormBox>
									<ErrorMessage>{appError}</ErrorMessage>
								</FormBox>
							)}
							<FormFlex>
								<FormBox>
									<InputField
										onChange={() => setIsUsernameForThirdPartyLoginError(false)}
										onFocus={() => setAppError(null)}
										name="username"
										placeholder="Username"
										register={register({ required: true, minLength: 2 })}
										type="text"
										width={INPUT_WIDTH}
										aria-label="Username"
									/>
								</FormBox>
								{((errors.username && errors.username.type === 'required') ||
									isUsernameForThirdPartyLoginError) && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Username is required</ErrorMessage>
									</FormBox>
								)}
								{errors.username && errors.username.type === 'minLength' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Username must be at least 2 characters</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<InputField
										onFocus={() => setAppError(null)}
										name="firstName"
										placeholder="First Name"
										register={register({ required: true, minLength: 2 })}
										type="text"
										width={INPUT_WIDTH}
										aria-label="First Name"
									/>
								</FormBox>
								{errors.firstName && errors.firstName.type === 'required' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>First Name is required</ErrorMessage>
									</FormBox>
								)}
								{errors.firstName && errors.firstName.type === 'minLength' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>First name must be at least 2 characters</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<InputField
										onFocus={() => setAppError(null)}
										name="lastName"
										placeholder="Last Name"
										register={register({ required: true, minLength: 2 })}
										type="text"
										width={INPUT_WIDTH}
										aria-label="Last Name"
									/>
								</FormBox>
								{errors.lastName && errors.lastName.type === 'required' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Last Name is required</ErrorMessage>
									</FormBox>
								)}
								{errors.lastName && errors.lastName.type === 'minLength' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Last name must be at least 2 characters</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<InputField
										onFocus={() => setAppError(null)}
										name="email"
										placeholder="Email"
										register={register({
											required: true,
											pattern: /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										})}
										type="text"
										width={INPUT_WIDTH}
										aria-label="Email"
									/>
								</FormBox>
								{errors.email && errors.email.type === 'required' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Email is required</ErrorMessage>
									</FormBox>
								)}
								{errors.email && errors.email.type === 'pattern' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Enter a valid email</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<InputField
										onFocus={() => setAppError(null)}
										name="password"
										placeholder="Password"
										register={register({
											required: true,
											pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
										})}
										type="password"
										width={INPUT_WIDTH}
										aria-label="Password"
									/>
								</FormBox>
								{errors.password && errors.password.type === 'required' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>A Password is required</ErrorMessage>
									</FormBox>
								)}
								{errors.password && errors.password.type === 'pattern' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>
											Passwords must be:{' '}
											<ul>
												<li>8 characters long</li>
												<li>1 uppercase character</li>
												<li>1 lowercase character</li>
												<li>at least one numeric character</li>
												<li>at least one special character (#, @, $, etc.)</li>
											</ul>
										</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<InputField
										onFocus={() => setAppError(null)}
										name="confirmPassword"
										placeholder="Confirm Password"
										register={register({ validate: (value) => value === watch('password') })}
										type="password"
										width={INPUT_WIDTH}
										aria-label="Confirm Password"
									/>
								</FormBox>
								{errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
									<FormBox>
										<ErrorIcon />
										<ErrorMessage>Password and confirmation do not match</ErrorMessage>
									</FormBox>
								)}
								<FormBox>
									<FormFlexInner>
										<FormFlexInnerBox>
											<SubmitButton value="Register With Email" />
										</FormFlexInnerBox>
										<FormFlexInnerBox>
											<FormButton onClick={onGoogleLogin}>
												<ButtonLabelWrapper>
													<ButtonLabelIconBox>
														<GoogleLoginIcon />
													</ButtonLabelIconBox>
													<ButtonLabelBox>Register With Google</ButtonLabelBox>
												</ButtonLabelWrapper>
											</FormButton>
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

export default RegisterForm
