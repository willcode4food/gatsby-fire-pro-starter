/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`

const SEO = ({ description, pathname, title }) => (
	<StaticQuery
		query={query}
		render={({
			site: {
				siteMetadata: { title, description },
			},
		}) => {
			const seo = {
				title: title,
				description: description,
			}

			return (
				<>
					<Helmet title={seo.title}>
						<meta content={seo.description} name="description" />
						<meta content={seo.image} name="image" />
						{seo.url && <meta content={seo.url} property="og:url" />}
						{seo.title && <meta content={seo.title} property="og:title" />}
						{seo.description && <meta content={seo.description} property="og:description" />}
					</Helmet>
				</>
			)
		}}
	/>
)

export default SEO

SEO.propTypes = {
	// article: PropTypes.bool,
	description: PropTypes.string,
	pathname: PropTypes.string,
	title: PropTypes.string,
}

SEO.defaultProps = {
	title: null,
	description: null,
	pathname: null,
	// article: false,
}
