import React from 'react'
import renderer from 'react-test-renderer'

import PathHistoryButton from './'

describe('PathHistoryButton', () => {
    const tree = renderer.create(<PathHistoryButton />).toJSON()
    it('renders', () => {
        expect(tree).toMatchInlineSnapshot(`
            .emotion-0 {
              border: 1px solid #FF1647;
              border-radius: 4px;
              background: #FF1647;
              color: #FFF;
              font-size: 1.12246rem;
              font-family: Fjalla One;
              padding-top: 10px;
              padding-bottom: 10px;
              padding-right: 20px;
              padding-left: 20px;
              width: 100%;
              width: 30px;
              text-align: center;
              font-size: 1.12246rem;
              margin-left: 10px;
              margin-right: 10px;
            }

            .emotion-0:disabled {
              background: #495358;
              border-color: #495358;
              color: #C4C8D8;
            }

            .emotion-0:hover {
              background: #FF1647;
            }

            .dark .emotion-0 {
              color: #FFF;
              background: #FF1647;
              border: 1px solid #FF1647;
            }

            .dark .emotion-0:disabled {
              background: #495358;
              color: #1e2427;
              border-color: #495358;
            }

            <a
              className="emotion-0 emotion-1"
              href="/login"
              onClick={[Function]}
            >
              Login
            </a>
        `)
    })
})
