require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

const { getMediaQueryForBreakpointPlugin } = require('./src/utils/styleHelpers')

const mediaQueries = {
    ...getMediaQueryForBreakpointPlugin(),
    portrait: `(orientation: portrait)`,
}

module.exports = {
    siteMetadata: {
        title: `Gatsby Fire Pro`,
        titleTemplate: '%s · The best place to jump on board the rocketship',
        description: `Use this starter to begin your next new project using Firebase.  Authentication, Firestore and Object Storage out of the box.`,
        siteUrl: 'https://www.pondstreetsoftware.com', // No trailing slash allowed!
        image: '/images/placeholder.png', // Path to your image you placed in the 'static' folder
        twitterUsername: '@willcode4food',
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
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
                // The values for each key in this example are the defaults the plugin uses.
                sourceMap: process.env.NODE_ENV !== 'production',
                autoLabel: 'dev-only',
                labelFormat: `[local]`,
                cssPropOptimization: true,
            },
        },
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
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: mediaQueries,
            },
        },
    ],
}
