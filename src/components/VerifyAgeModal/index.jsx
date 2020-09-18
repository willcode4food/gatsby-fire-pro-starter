import React, { useEffect, useState, useContext } from 'react'
import { CookieContext } from 'components/AuthContext'
import propTypes from 'prop-types'
import { css } from '@emotion/core'
import moment from 'moment'

import { StyledOverlay, OverlayTitle, Blocker } from './styles'

function VerifyAgeModal({ hasAgeVerified }) {
	const [hasVerified, setHasVerified] = useState(false)
	const [showOverlay, setShowOverlay] = useState(false)
	const [error, setError] = useState(null)
	const { addCookie, ageVerified } = useContext(CookieContext)

	useEffect(() => {
		setShowOverlay(!hasAgeVerified)
	}, [hasAgeVerified])

	const onVerifyCheck = (event) => {
		setHasVerified(event.target.checked)
		setError(null)
	}

	const onCancelClick = (event) => {
		event.stopPropagation()
	}

	const onVerifySubmit = () => {
		if (!hasVerified) {
			setError(`Please check the checkbox verifying you agree to the terms.`)
			return
		}
		addCookie('ageVerified', hasVerified, {
			path: '/',
			expires: new Date(moment().add(5, 'y').format()),
		})
		setHasVerified(hasVerified)
		return
	}

	if (!showOverlay || ageVerified) {
		return null
	}

	return (
		<Blocker>
			<StyledOverlay onClick={onCancelClick}>
				<div
					css={css`
						display: flex;
						align-items: center;
						flex-direction: column;
						justify-content: center;
					`}
				>
					<div>
						<OverlayTitle>Welcome!</OverlayTitle>
					</div>
					<div>
						<div
							css={css`
								display: flex;
								flex-direction: column;
								justify-content: center;
							`}
						>
							<div
								css={css`
									align-self: center;
								`}
							>
								<input onChange={onVerifyCheck} type="checkbox" /> I am at least 21 years old and I
								agree to the&nbsp;
								<a href="/privacy-policy" target="_blank">
									Privacy Policy
								</a>
								&nbsp;and{' '}
								<a href="/terms-of-use" target="_blank">
									Terms of Use.
								</a>
							</div>
							<div
								css={css`
									align-self: center;
								`}
							>
								<div
									css={css`
										display: flex;
										justify-content: center;
									`}
								>
									<div alignSelf="center"></div>
								</div>
							</div>
							<div
								css={css`
									align-self: center;
								`}
							>
								We also use cookies to help us deliver a personalized experience and display relevant
								promotions. By using this website, you agree to our use of cookies. Please take a moment
								to review our{' '}
								<a href="/cookie-policy" target="_blank">
									cookie policy
								</a>
							</div>
						</div>
					</div>
				</div>
			</StyledOverlay>
		</Blocker>
	)
}

VerifyAgeModal.propTypes = {
	hasAgeVerified: propTypes.bool,
}
export default VerifyAgeModal
