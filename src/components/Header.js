import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';

import '../styles/02-components/_header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <Container>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
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
