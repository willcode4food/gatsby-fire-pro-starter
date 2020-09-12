import React from 'react'

export const AuthContext = React.createContext({ authUser: { uid: null }, isLoading: null, roles: null })

export const CookieContext = React.createContext({ ageVerified: null, sessionID: null, addCookie: null })

export const SessionContext = React.createContext({ sessionID: null, userIp: null, uid: null, version: null })