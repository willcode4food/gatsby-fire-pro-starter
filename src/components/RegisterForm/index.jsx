import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from 'components/Forms/FormFields'
import {
	ErrorMessage,
	ErrorIcon,
	FormHeader,
	FormButton,
	FormSubmitButton,
	StyledLink,
} from 'components/Forms/FormStyles'
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
import { AiFillWarning } from 'react-icons/ai'

function RegisterForm() {
	const [isLoading, setIsLoading] = useState(false)

	const { errors, register, handleSubmit, watch } = useForm()
	const onSubmit = (data) => {
		console.log('onSubmit -> data', data)
	}

	console.log('RegisterForm -> errors', errors)
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<FormWrapper>
					<FormWrapperBox>
						<FormHeader>Register</FormHeader>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormFlex>
								<FormBox>
									<InputField
										name="username"
										placeholder="Username"
										register={register({ required: true, minLength: 2 })}
										type="text"
										width={INPUT_WIDTH}
									/>
								</FormBox>
								{errors.username && errors.username.type === 'required' && (
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
										name="firstName"
										placeholder="First Name"
										register={register({ required: true, minLength: 2 })}
										type="text"
										width={INPUT_WIDTH}
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
										name="lastName"
										placeholder="Last Name"
										register={register({ required: true, minLength: 2 })}
										type="text"
										width={INPUT_WIDTH}
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
										name="email"
										placeholder="Email"
										register={register({
											required: true,
											pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										})}
										type="text"
										width={INPUT_WIDTH}
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
										name="password"
										placeholder="Password"
										register={register({
											required: true,
											pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
										})}
										type="password"
										width={INPUT_WIDTH}
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
										name="confirmPassword"
										placeholder="Confirm Password"
										register={register({ validate: (value) => value === watch('password') })}
										type="password"
										width={INPUT_WIDTH}
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
											<FormSubmitButton
												register={register({ required: true })}
												type="submit"
												bg={COLORS.PRIMARY_DARK}
												value="Register With Email"
											/>
										</FormFlexInnerBox>
										<FormFlexInnerBox>
											<FormButton bg={COLORS.PRIMARY_BUTTON}>Register With Google</FormButton>
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
