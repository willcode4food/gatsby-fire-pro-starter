/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import InputField from './index.jsx'

expect.addSnapshotSerializer(serializer)

describe('InputField', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<InputField name="lastName" placeholder="Last Name" type="text" aria-label="Last Name" />)
			.toJSON()
        console.log("tree", tree)
			
		expect(tree).toMatchSnapshot()
	})
})
