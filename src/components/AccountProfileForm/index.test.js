/* eslint-disable jest/no-commented-out-tests */
import '@testing-library/jest-dom'
import { act, cleanup, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import SessionContext from 'context/SessionContext'
import React from 'react'
import { email, uid } from 'utils/testMocks'
import AccountProfileForm from './'

jest.mock('hooks/firebase/useFirebaseApp', () => {
    return jest.fn(() => {
        return { storage: () => {} }
    })
})

jest.mock('hooks/firebase/useFirestoreDocument', () => {
    return jest.fn(() => {
        return { isFirestoreLoading: false }
    })
})

describe('AccountProfileForm', () => {
    afterEach(() => {
        cleanup
    })

    it('should render the basic fields', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid } }}>
                <AccountProfileForm />
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))
            // screen.debug()
            expect(screen.getByRole('heading', { name: 'Account' })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: 'First Name' })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: 'Last Name' })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: /city/i })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: /zip/i })).toBeInTheDocument()
            expect(screen.getByTestId('state')).toBeInTheDocument()
        })
    })

    it('should not submit without a username', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid, email } }}>
                <AccountProfileForm />
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))
            fireEvent.clear(screen.getByRole('textbox', { name: /Username/i }))
            fireEvent.clear(screen.getByRole('textbox', { name: /First Name/i }))
            fireEvent.clear(screen.getByRole('textbox', { name: /Last Name/i }))
            fireEvent.clear(screen.getByRole('textbox', { name: /City/i }))
            fireEvent.type(screen.getByRole('textbox', { name: /City/i }), 'A')
            fireEvent.clear(screen.getByRole('textbox', { name: /Zip/i }))
            fireEvent.selectOptions(screen.getByTestId('state'), screen.getByText('Select a State'))
            fireEvent.click(screen.getByRole('button'))

            expect(await screen.findAllByRole('alert')).toHaveLength(6)
        })
    })
    it('should not have link to update username and password', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid, email } }}>
                <AccountProfileForm />
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))
            // screen.debug()
            expect(await screen.queryByText('Update Email and Password')).not.toBeInTheDocument()
        })
    })
})
