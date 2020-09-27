import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from 'components/Forms/FormFields'
import { ErrorMessage, FormHeader, FormButton, FormSubmitButton, StyledLink } from 'components/Forms/FormStyles'
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
								{errors.username && errors.type === 'required' && (
									<FormBox>
										<ErrorMessage>* Username is required</ErrorMessage>
									</FormBox>
								)}
								{errors.username && errors.username.type === 'minLength' && (
									<FormBox>
										<ErrorMessage>* Username must be at least 2 characters</ErrorMessage>
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
								{errors.firstName && (
									<FormBox>
										<ErrorMessage>* First Name is required</ErrorMessage>
									</FormBox>
								)}
								{errors.firstName && errors.firstName.type === 'minLength' && (
									<FormBox>
										<ErrorMessage>* First name must be at least 2 characters</ErrorMessage>
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
								{errors.lastName && (
									<FormBox>
										<ErrorMessage>* Last Name is required</ErrorMessage>
									</FormBox>
								)}
								{errors.lastName && errors.lastName.type === 'minLength' && (
									<FormBox>
										<ErrorMessage>* Last name must be at least 2 characters</ErrorMessage>
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
								{errors.email && (
									<FormBox>
										<ErrorMessage>* Email is required</ErrorMessage>
									</FormBox>
								)}
								{errors.email && errors.email.type === 'pattern' && (
									<FormBox>
										<ErrorMessage>* Enter a valid email</ErrorMessage>
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
								{errors.password && (
									<FormBox>
										<ErrorMessage>* A Password is required</ErrorMessage>
									</FormBox>
								)}
								{errors.password && errors.password.type === 'pattern' && (
									<FormBox>
										<ErrorMessage>
											* Passwords must be:{' '}
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
