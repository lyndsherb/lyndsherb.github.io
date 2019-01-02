const menu = (state = {}, action = { type: '', payload: {} }) => {
    const reducer = {
        init: () => {
        console.log('here!');
        return {
            ...state,
        }}
    };

    // check to see whether we actually have an action passed through
    // or if it exists in our object; if not, return the standard state...
    if (!action.type || !reducer[action.type]) {
        return state;
    }

    // ...or return our new state.
    return reducer[action.type]();
};

export default menu;
