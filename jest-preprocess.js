/* eslint-disable no-undef */
const babelOptions = {
    presets: ['@babel/preset-env', '@emotion/babel-preset-css-prop'],
    plugins: ['@emotion/babel-plugin'],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
