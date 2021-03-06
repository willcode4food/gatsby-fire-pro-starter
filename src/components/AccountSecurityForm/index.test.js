import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AccountSecurityForm from './'
import fireEvent from '@testing-library/user-event'

jest.mock('hooks/firebase/useFirebaseAuthentication', () => {
    return jest.fn(() => {
        return { onAuthIdentifierUpdate: () => {}, isAuthenticationLoading: false, authenticationError: null }
    })
})

describe('AccountSecurityForm', () => {
    it('should render the basic fields', () => {
        render(<AccountSecurityForm />)
        expect(screen.getByRole('heading', { name: 'Email and Password' })).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
        expect(screen.getByLabelText('Existing Password', { name: /existingPassword/i })).toBeInTheDocument()
        expect(screen.getByLabelText('New Password', { name: /newPassword/i })).toBeInTheDocument()
        expect(screen.getByLabelText('Confirm Password', { name: /confirmPassword/i })).toBeInTheDocument()
    })

    it('should validate field', async () => {
        render(<AccountSecurityForm />)
        //bad email
        fireEvent.type(screen.getByRole('textbox', { name: /email/i }), 'notagoodemailaddress')
        fireEvent.click(screen.getByRole('button'))
        expect(await screen.findAllByRole('alert')).toHaveLength(1)

        // good email not existing password
        fireEvent.type(screen.getByRole('textbox', { name: /email/i }), 'homer74@gmail.com')
        fireEvent.click(screen.getByRole('button'))
        expect(await screen.findAllByRole('alert')).toHaveLength(1)
    })
})
