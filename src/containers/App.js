import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const App = ({ element }) => (
    <Provider store={store}>
        {element}
    </Provider>
);

App.propTypes = {
    element: PropTypes.node,
}

export default App;
