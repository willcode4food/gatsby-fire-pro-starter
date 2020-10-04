/* eslint-disable no-undef */
module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					components: 'src/components',
					context: 'src/context',
					providers: 'src/providers',
					utils: 'src/utils',
					hooks: 'src/hooks',
					firebaseActions: 'src/firebase',
					templates: 'src/templates',
				},
				extensions: ['js', 'jsx'],
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-emotion`,
		// {
		//   resolve: `gatsby-source-filesystem`,
		//   options: {
		//     name: `images`,
		//     path: `${__dirname}/src/images`,
		//   },
		// },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
			},
		},
		// {
		// 	resolve: `gatsby-plugin-typography`,
		// 	options: {
		// 		pathToConfigModule: `src/utils/typography.js`,
		// 	},
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
