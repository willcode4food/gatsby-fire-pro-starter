import React, { useEffect, useState, useContext } from 'react'
import { CookieContext } from 'components/AuthContext'
import propTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { COLORS, SPACERS, MQ } from 'utils/styleHelpers'
import moment from 'moment'

const StyledOverlay = styled.div`
	background: ${COLORS.WHITE};
	border-radius: 4px;
	box-shadow: 0 0 0 60vmax rgba(0, 0, 0, 0.25), 0 0 32px rgba(0, 0, 0, 0.25);
	left: 50%;
	max-width: 100vw;
	max-height: 100vh;
	overflow: auto;
	padding: 16px;
	position: fixed;
	top: 50%;
	transform: translate(-50%, -50%);
	height: calc(80vh - ${SPACERS.HEADER});
	width: 55vw;
	.dark & {
		background: ${COLORS.MEDIUM_GRAY};
	}
	${MQ.L} {
		height: calc(70vh - ${SPACERS.HEADER});
	}
`
const OverlayTitle = styled('h2')`
	text-align: left;
	text-transform: uppercase;
`
const Blocker = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	z-index: 4;
`
function VerifyAgeModal({ hasAgeVerified }) {
	const [hasVerified, setHasVerified] = useState(false)
	const [showOverlay, setShowOverlay] = useState(false)
	const [error, setError] = useState(null)
	const { addCookie, ageVerified } = useContext(CookieContext)

	useEffect(() => {
		setShowOverlay(!hasAgeVerified)
	}, [hasAgeVerified])

	const onVerifyCheck = event => {
		setHasVerified(event.target.checked)
		setError(null)
	}

	const onCancelClick = event => {
		event.stopPropagation()
	}

	const onVerifySubmit = () => {
		if (!hasVerified) {
			setError(`Please check the checkbox verifying you agree to the terms.`)
			return
		}
		addCookie('ageVerified', hasVerified, {
			path: '/',
			expires: new Date(
				moment()
					.add(5, 'y')
					.format()
			),
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
				<div css={css`
					display: flex;
					align-items: center;
					flex-direction: column;
					justify-content: center;
				`}>
					<div>
						<OverlayTitle>Welcome!</OverlayTitle>
					</div>
					<div>
						<div css={css`
							display: flex;
							flex-direction: column;
							justify-content: center;
						`}>
							<div css={css`
								align-self: center;
							`}>
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
							<div css={css`
								align-self: center;
							`}>
								<div css={css`
									display: flex;
									justify-content: center;
								`}>
									<div alignSelf="center">
									</div>
								</div>
							</div>
							<div css={css`
								align-self: center;
							`}>
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
