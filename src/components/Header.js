import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import Navigation from './Navigation';

import '../styles/02-components/_header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
      <Container>
          <button
              className="btn btn--menu"
              type="button"
              aria-label="menu">
              Menu
          </button>
          <Navigation siteTitle={siteTitle} />
          <h1 className="header__title">
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
