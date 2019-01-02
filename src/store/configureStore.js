import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import state from '../state';

const configureStore = (initialState = state) => (
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
    )
);

export default configureStore;
