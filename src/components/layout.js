import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header';
import Footer from './Footer';
import Container from './styled/container';
import '../styles/styles.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <Fragment>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container>
            {children}
          </Container>
          <Footer />
        </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
