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
import { INPUT_WIDTH, setLoginFlag, getLoginFlag, unsetLoginFlag } from 'utils/formHelpers'
import Loader from 'components/Loader'

function LoginForm() {
	// const { register, handleSubmit, watch, errors } = useForm()
	// const onSubmit = (data) => console.log(data)
	const [isLoading, setIsLoading] = useState(false)
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<FormWrapper>
					<FormWrapperBox>
						<FormHeader>Forgot Password</FormHeader>
						<form>
							<FormFlex>
								<FormBox>
									<InputField placeholder="Email Address" type="text" width={INPUT_WIDTH} />
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

export default LoginForm
