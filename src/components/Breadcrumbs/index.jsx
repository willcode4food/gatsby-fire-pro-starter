import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import BreadcrumbComponentList from './BreadcrumbComponentList'
import BreadcrumbSchemaOrg from './BreadcrumbSchemaOrg'
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbNav } from './styles'
const Breadcrumbs = ({ location }) => {
    console.log('🚀 ~ file: index.jsx ~ line 7 ~ Breadcrumbs ~ location', location)
    const navRef = useRef({ clientHeight: 0 })

    useEffect(() => {
        window.breadCrumbHeight = navRef.current.clientHeight || 0
    }, [navRef.current.clientHeight])

    return (
        <BreadcrumbNav ref={navRef} aria-label="Breadcrumbs">
            <BreadcrumbSchemaOrg location={location} />
            <BreadcrumbList location={location}>
                <BreadcrumbItem>
                    <BreadcrumbLink aria-label="Home" to="/">
                        Home
                    </BreadcrumbLink>
                    {`/`}
                </BreadcrumbItem>
                <>
                    <BreadcrumbComponentList location={location} />
                </>
            </BreadcrumbList>
        </BreadcrumbNav>
    )
}

Breadcrumbs.propTypes = {
    location: PropTypes.object,
}
Breadcrumbs.defaultProps = {
    location: {},
}

export default Breadcrumbs
