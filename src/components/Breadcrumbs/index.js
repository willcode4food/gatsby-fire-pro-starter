import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { SPACERS, FONT_SIZES, MQ } from 'utils/styleHelpers'

const BreadcrumbList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
`
const BreadcrumbItem = styled.li`
	float: left;
	font-size: ${FONT_SIZES.H7};
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	${MQ.L} {
		font-size: ${FONT_SIZES.H5};
	}
	${MQ.M} {
		font-size: ${FONT_SIZES.H5};
	}
`
const BreadcrumbLink = styled(Link)`
	padding-left: ${SPACERS.M};
	padding-right: ${SPACERS.M};
`

const Breadcrumbs = ({ location }) => {
	const { pathname, origin } = location
	const navRef = useRef({ clientHeight: 0 })

	const schemaOrgJSONLD = []
	const crumbs = pathname.split('/').filter((path) => path !== '')
	const itemListElement = [
		{
			'@type': 'ListItem',
			position: 1,
			item: {
				'@id': `${origin}/`,
				name: 'home',
			},
		},
	]
	const breadcrumbComponents = crumbs.map((crumb, crumbIndex) => {
		const crumbUrl = `/${crumbs.slice(0, crumbIndex + 1).join('/')}`
		itemListElement.push({
			'@type': 'ListItem',
			position: crumbIndex + 2,
			item: {
				'@id': `${origin}/${crumbUrl}`,
				name: crumb,
			},
		})
		if (crumbIndex === crumbs.length - 1) {
			schemaOrgJSONLD.push({
				'@context': 'http://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement,
			})
		}
		// eslint-disable-next-line no-restricted-globals
		return crumbIndex !== crumbs.length - 1 && isNaN(crumbs[crumbIndex + 1]) ? (
			// eslint-disable-next-line react/no-array-index-key
			<BreadcrumbItem key={`${crumbUrl}_${crumbIndex}`}>
				<BreadcrumbLink aria-label={`${crumb.replace(/-/g, ' ')}`} to={crumbUrl}>
					{crumb.replace(/-/g, ' ')}
				</BreadcrumbLink>
				{/* handles pagination number suffix that we do not want to display as a breadcrumb */}
				{/* eslint-disable-next-line no-restricted-globals  */}
				{isNaN(crumbs[crumbIndex + 1]) && `/`}
			</BreadcrumbItem>
		) : (
			// eslint-disable-next-line react/no-array-index-key
			<React.Fragment key={`${crumbUrl}_${crumbIndex}`}>
				{/* handles pagination number suffix that we do not want to display as a breadcrumb */}
				{/* eslint-disable-next-line no-restricted-globals  */}
				{isNaN(crumb) && (
					// eslint-disable-next-line react/no-array-index-key
					<BreadcrumbItem>
						<span
							css={css`
								padding-left: ${SPACERS.M};
								padding-right: ${SPACERS.M};
							`}
						>
							{crumb.replace(/-/g, ' ')}
						</span>
					</BreadcrumbItem>
				)}
			</React.Fragment>
		)
	})

	useEffect(() => {
		window.breadCrumbHeight = navRef.current.clientHeight || 0
	}, [navRef.current.clientHeight])

	return (
		<nav ref={navRef} aria-label="Breadcrumbs">
			<Helmet>
				{/* Schema.org tags */}
				<script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
			</Helmet>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink aria-label="Home" to="/">
						Home
					</BreadcrumbLink>
					{`/`}
				</BreadcrumbItem>
				{breadcrumbComponents}
			</BreadcrumbList>
		</nav>
	)
}

Breadcrumbs.propTypes = {
	location: PropTypes.object,
}
Breadcrumbs.defaultProps = {
	location: {},
}

export default Breadcrumbs
