import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Connected from '../containers/Connected';

import '../styles/styles.scss';

const Layout = ({ children }) => (
        <StaticQuery
            query={graphql`
                query SiteInfoQuery {
                    site {
                        siteMetadata {
                            title
                        }
                        mapping {
                            SiteInfo_social {
                                title
                                icon
                                href
                            }
                        }
                    }
                }
            `}
            render={data => <Connected {...data} children={children} />}
        />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
