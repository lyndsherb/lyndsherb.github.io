/**
 * Styled components - container
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../styles/02-components/_container.scss';

const Container = ({ modifier, children }) => (
    <div className={`container ${modifier ? `container--${modifier}` : ''}`}>
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node,
    modifier: PropTypes.string,
}

Container.defaultProps = {
    children: null,
    modifier: '',
}

export default Container;
