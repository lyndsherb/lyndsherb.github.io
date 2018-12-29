import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Body from './styled/body';
import Header from './header';
import Container from './styled/container';
import './layout.css'

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
      <Body>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
          <footer>
            © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Container>
      </Body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
