const INITIAL_STATE = { data: [] };

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GetProduct:
            return { ...state.data, ...action.payload };
            break;

        default:
            return { ...state };
            break;
    }
};

export { ProductReducer };
