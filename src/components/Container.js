/**
 * Styled components - container
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../styles/02-components/_container.scss';

const Container = ({ children }) => (
    <div className="container">
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node,
}

Container.defaultProps = {
    children: null,
}

export default Container;
