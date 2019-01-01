import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Container from './Container';
import Header from './Header';
import Footer from './Footer';

import '../styles/styles.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteInfoQuery {
        site {
          siteMetadata {
            title
            contactInfo {
              title
              icon
              href
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => (
        <Fragment>
          <Header
            siteTitle={siteMetadata.title}
            contactInfo={siteMetadata.contactInfo} />
          <Container modifier="content">
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
