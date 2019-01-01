import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import '../styles/02-components/_navigation.scss';

const Navigation = ({ modifier, siteTitle }) => (
    <nav className={`nav ${modifier}`}>
        <h4 className="nav__title">{siteTitle}</h4>
        <ul role="navigation" className="h-list h-list--to-tablet" aria-labelledby="menu">
            <li className="h-list__item">
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="h-list__item">
                <Link to="/blog">Blog</Link>
            </li>
            <li className="h-list__item">
                <Link to="/about">About</Link>
            </li>
            <li className="h-list__item">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

Navigation.propTypes = {
    modifier: PropTypes.string,
    siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
    modifier: '',
    siteTitle: '',
};

export default Navigation;
