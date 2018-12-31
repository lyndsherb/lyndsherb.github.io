import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Colours from '../constants/colours';
import Container from './styled/container';

const BaseHeader = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </div>
)

const Header = styled(BaseHeader)`
    padding: 1rem 0;
    margin-bottom: 1.45rem;
    background-color: ${Colours.headerBg};
    color: ${Colours.headerText};

    h1 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header;
