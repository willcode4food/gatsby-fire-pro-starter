import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

function UnauthorizedPage() {
    useEffect(() => {
        console.warn('Access Denied')
        navigate('/')
    }, [])
    return <div />
}

export default UnauthorizedPage
