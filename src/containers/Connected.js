import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import appActions from '../actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(appActions, dispatch),
})

class ConnectedContainer extends Component {
    render() {
        const {
            menu,
            actions: {
                testActions,
            },
            site: {
                siteMetadata: {
                    title,
                },
                mapping: {
                    SiteInfo_social,
                },
            },
            children,
        } = this.props;

        return (
            <Fragment>
                <Header
                    menu={menu}
                    toggleMenu={testActions}
                    siteTitle={title}
                    contactInfo={SiteInfo_social} />
                    <Container modifier="content">
                        {children}
                    </Container>
                <Footer />
            </Fragment>
        );
    }
}

ConnectedContainer.propTypes = {
    children: PropTypes.node,
    actions: PropTypes.object,
}

ConnectedContainer.defaultProps = {
    children: null,
    actions: {},
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedContainer);
