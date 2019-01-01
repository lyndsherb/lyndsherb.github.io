import React from 'react';
import PropTypes from 'prop-types';

import '../styles/02-components/_navigation.scss';

const Navigation = ({ modifier, siteTitle }) => (
    <nav className={`nav ${modifier}`}>
        <h4>{siteTitle}</h4>
        <ul role="navigation" className="h-list h-list--to-tablet" aria-label="Site navigation">
            <li className="h-list__item">Nav item 1</li>
            <li className="h-list__item">Nav item 1</li>
            <li className="h-list__item">Nav item 1</li>
            <li className="h-list__item">Nav item 1</li>
            <li className="h-list__item">Nav item 1</li>
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
