import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Container from './Container';
import Header from './Header';
import Footer from './Footer';

import '../styles/styles.scss';

const LayoutDefault = ({
    children,
    site: {
        siteMetadata,
        mapping: {
            SiteInfo_social
        }
    }
}) => (
    <Fragment>
        <Header
            siteTitle={siteMetadata.title}
            contactInfo={SiteInfo_social} />
            <Container modifier="content">
                {children}
            </Container>
        <Footer />
    </Fragment>
);

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
        render={data => <LayoutDefault {...data}>{children}</LayoutDefault>}
    />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
