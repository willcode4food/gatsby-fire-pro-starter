import React from 'react'
import renderer from 'react-test-renderer'
import CheckBoxField from './index.jsx'
import { render, fireEvent } from '@testing-library/react'

jest.mock('utils/styleHelpers', () => {
    return {
        COLORS: {
            SECONDARY: '#c60028',
        },
    }
})

describe('CheckBoxField', () => {
    describe('when checkbox is added', () => {
        it('renders unchecked', () => {
            const tree = renderer.create(<CheckBoxField backgroundColor="tomato" backgroundColorOff="blue" />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-2 {
                  -webkit-appearence: button;
                  -moz-appearence: button;
                  appearence: button;
                  border: 1px solid;
                  border-radius: 1px;
                  cursor: pointer;
                  display: block;
                  margin: 5px 10px;
                  padding: 5px 10px;
                  width: 25px;
                  height: 25px;
                }

                .emotion-2:after {
                  content: '✓';
                  font-size: 25px;
                  color: #c60028;
                }

                .emotion-2:before {
                  content: '';
                }

                .emotion-0 {
                  position: absolute;
                  left: -9999px;
                }

                .emotion-0:checked + label {
                  color: red;
                }

                <label
                  className="emotion-2 emotion-3"
                >
                  <input
                    className="emotion-0 emotion-1"
                    onClick={[Function]}
                    role="checkbox"
                    type="checkbox"
                  />
                </label>
            `)
        })
        it('renders checked', () => {
            const tree = renderer
                .create(<CheckBoxField backgroundColor="tomato" backgroundColorOff="blue" defaultIsChecked={true} />)
                .toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-2 {
                  -webkit-appearence: button;
                  -moz-appearence: button;
                  appearence: button;
                  border: 1px solid;
                  border-radius: 1px;
                  cursor: pointer;
                  display: block;
                  margin: 5px 10px;
                  padding: 5px 10px;
                  width: 25px;
                  height: 25px;
                }

                .emotion-2:after {
                  content: '✓';
                  font-size: 25px;
                  color: #c60028;
                }

                .emotion-2:before {
                  content: '';
                }

                .emotion-0 {
                  position: absolute;
                  left: -9999px;
                }

                .emotion-0:checked + label {
                  color: red;
                }

                <label
                  className="emotion-2 emotion-3"
                >
                  <input
                    className="emotion-0 emotion-1"
                    onClick={[Function]}
                    role="checkbox"
                    type="checkbox"
                  />
                </label>
            `)
        })
    })
    describe('when onChange is triggered', () => {
        it('sets the checkbox to checked', () => {
            const { getByRole } = render(<CheckBoxField />)
            const checkBox = getByRole('checkbox')
            fireEvent.click(checkBox)
            expect(checkBox.checked).toEqual(true)
        })
    })
})
