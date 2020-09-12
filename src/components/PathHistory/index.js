import React from 'react'
import PropTypes from 'prop-types'
import { PATH_HISTORY_STORAGE } from 'utils/constants'
import { Link, navigate } from 'gatsby'

export class PathHistoryLink extends React.PureComponent {
	static propTypes = {
		previousUrl: PropTypes.string,
		to: PropTypes.string,
		text: PropTypes.string,
	}
	static defaultProps = {
		to: '/login',
		text: 'Login',
	}
	setPreviousPage = () => {
		const { previousUrl } = this.props
		try {
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(PATH_HISTORY_STORAGE, previousUrl)
			}
		} catch (ex) {
			console.log(ex.message)
		}
	}
	render() {
		const { to, text } = this.props
		return (
			<Link to={to} onClick={this.setPreviousPage}>
				{text}
			</Link>
		)
	}
}
export function navigateToPathHistory() {
	if (typeof window !== 'undefined') {
		if (typeof window.localStorage !== 'undefined') {
			const pathHistory = window.localStorage.getItem(PATH_HISTORY_STORAGE)
			window.localStorage.removeItem(PATH_HISTORY_STORAGE)
			navigate(pathHistory)
		} else {
			navigate('/')
		}
	} else {
		navigate('/')
	}
}
