import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbItemPadding } from './styles'


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
						<BreadcrumbItemPadding>{crumb.replace(/-/g, ' ')}</BreadcrumbItemPadding>
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
