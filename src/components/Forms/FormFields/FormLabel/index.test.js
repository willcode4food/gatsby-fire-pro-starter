import React from 'react'
import renderer from 'react-test-renderer'
import FormLabel from './'

describe('InputField', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<FormLabel isHidden={false}>Email Address</FormLabel>).toJSON()

        expect(tree).toMatchInlineSnapshot(`
.emotion-0 {
  display: block;
  padding-bottom: 5px;
  padding-top: 10px;
  font-size: 0.75rem;
}

<label
  className="emotion-0 emotion-1"
>
  Email Address
</label>
`)
    })
})
