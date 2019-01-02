import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import Navigation from './Navigation';
import SocialNav from './SocialNav';

import '../styles/02-components/_header.scss';

const Header = ({
    siteTitle,
    contactInfo,
    toggleMenu,
}) => (
    <header className="header">
        <Container>
            <h1 className="header__title">
                <Link to="/">
                    {siteTitle}
                </Link>
            </h1>
            <button
                className="btn btn--menu no-display--from-tablet"
                type="button"
                aria-label="menu"
                onClick={() => toggleMenu()}>
                Menu
            </button>
            <Navigation
                toggleMenu={toggleMenu}
                siteTitle={siteTitle} />
            <button
                className="btn btn--menu btn--social no-display--from-tablet"
                type="button"
                aria-label="social">
                Social
            </button>
            <SocialNav
                modifier="nav--social"
                toggleMenu={toggleMenu}
                contactInfo={contactInfo} />
        </Container>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header;
