/* eslint-disable no-undef */
const babelOptions = {
    presets: ['babel-preset-gatsby', '@emotion/babel-preset-css-prop'],
    plugins: ['emotion'],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
