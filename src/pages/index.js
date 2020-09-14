/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import GlobalLayout from 'components/GlobalLayout'
import { PrimaryButtonLink, PrimaryButtonAnchor } from 'components/PrimaryButton'
import { COLORS } from 'utils/styleHelpers'
import FrontDoor from 'templates/FrontDoor'

function IndexPage({ data, location }) {
	
	return (
		<GlobalLayout
			isDisplayingSearch={false}
			location={location}
			isShowingBreadcrumbs={false}
			isShowingAccountLink={true}
			backgroundColor={COLORS.LIGHT_GRAY}
		>
			<Helmet>
				{/* Schema.org tags */}
				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'http://schema.org',
						'@type': 'WebSite',
						url: 'http://ninozfantasysports.com/',
						name: 'Ninoz Fantasy Sports',
						description: '',
					})}
				</script>
			</Helmet>
			<FrontDoor data={data} location={location} />
			</GlobalLayout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.object,
	location: PropTypes.object,
}

export default IndexPage
