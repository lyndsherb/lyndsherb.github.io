import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Container from '../components/Container';
import appActions from '../actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return { increment: () => dispatch({ type: `INCREMENT` }) };
}

const ConnectedContainer = (props) => {
    // Loops through the child elements and
    // clones them to pass through the relevant props
    // C/o https://stackoverflow.com/a/32371612
    // More docs: https://reactjs.org/docs/react-api.html#reactchildren
    console.log('props', props.actions);

    return (
        <span>Hello!</span>
    );

    // return (
    //     <Fragment>
    //         <Header
    //             menu={menu}
    //             actions={actions}
    //             siteTitle={title}
    //             contactInfo={SiteInfo_social} />
    //             <Container modifier="content">
    //                 {children}
    //             </Container>
    //         <Footer />
    //     </Fragment>
    // );
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
