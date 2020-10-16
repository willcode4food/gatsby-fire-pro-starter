import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'

import AccountLink from './index.jsx'

let mockIsLoading = false
let mockIsAuthorized = true
expect.addSnapshotSerializer(serializer)
jest.mock('hooks/useAuthorization', () => {
    return jest.fn(() => {
        return { isLoading: mockIsLoading, isAuthorized: mockIsAuthorized }
    })
})

describe('AccountLink', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<AccountLink />).toJSON()
        expect(tree).toMatchInlineSnapshot(`
            .emotion-0 {
              width: 25px;
              height: 25px;
              color: #C4C8D8;
              -webkit-transition: color 0.5s;
              transition: color 0.5s;
            }

            .dark .emotion-0 {
              color: #FFF;
            }

            <a
              href="/account"
            >
              <svg
                className="emotion-0"
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth="0"
                style={
                  Object {
                    "color": undefined,
                  }
                }
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                />
              </svg>
            </a>
        `)
    })
})
