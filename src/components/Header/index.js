import React, { useContext } from 'react'
import { func, bool, object } from 'prop-types'
import { Link } from 'gatsby'
import UserMenu from 'components/UserMenu'
import { css } from '@emotion/core'
import Logo from './Logo'
import AccountLink from 'components/AccountLink'
import Breadcrumbs from 'components/Breadcrumbs'
import HamburgerArrow from './HamburgerArrow'
import ThemeToggle from 'components/ThemeToggle'
import { SessionContext } from 'components/AuthContext'
import { StickyNav, HeaderBar, BreadcrumbsWrapper, LogoWrapper, HeaderBox, HeaderIconBox } from './styles'
const Header = ({
	resetDrawer,
	location,
	isDisplayingSearch = true,
	isShowingBreadcrumbs = true,
	isShowingAccountLink = false,
	toggleNav,
}) => {
	const { uid, sessionID } = useContext(SessionContext)
	return (
		<StickyNav id="headerBar">
			<div>
				<HeaderBar>
					<HeaderBox>
						<span>
							<HamburgerArrow onClick={toggleNav} />
						</span>
					</HeaderBox>
					<HeaderBox onClick={resetDrawer}>
						<LogoWrapper>
							<Link to="/">
								<Logo />
							</Link>
						</LogoWrapper>
					</HeaderBox>
					<HeaderBox>
						<div>
							<div css={css`
								display: flex;
								justify-content: flex-end;
								align-items: center;
								flex-direction: row;
							`}>
								{isDisplayingSearch && (
									<HeaderIconBox>
										
									</HeaderIconBox>
								)}
								{isShowingAccountLink && (
									<HeaderIconBox alignSelf={`center`}>
										<AccountLink />
									</HeaderIconBox>
								)}
								<HeaderIconBox>
									<ThemeToggle />
								</HeaderIconBox>
								{sessionID && (
									<HeaderIconBox>
										<UserMenu sessionID={sessionID} uid={uid} pathname={location.pathname} />
									</HeaderIconBox>
								)}
							</div>
						</div>
					</HeaderBox>
				</HeaderBar>
			</div>
			{isShowingBreadcrumbs && (
				<div>
					<div css={css`
						display: flex;
					`}>
						<BreadcrumbsWrapper>
							<Breadcrumbs location={location} />
						</BreadcrumbsWrapper>
					</div>
				</div>
			)}
		</StickyNav>
	)
}

Header.propTypes = {
	isDisplayingSearch: bool,
	isShowingAccountLink: bool,
	isShowingBreadcrumbs: bool,
	location: object,
	resetDrawer: func,
	toggleNav: func,
	toggleSearch: func,
}

export default Header
