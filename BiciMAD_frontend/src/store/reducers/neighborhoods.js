import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    loading: false,
    neighborhoods: null,
    error: false,
};

const fetchNeighborhoodsStart = (state, action) => {
    return updateObject(state, { loading: true, error: false });
};

const fetchNeighborhoodsSuccess = (state, action) => {
    return updateObject(state, { loading: false, neighborhoods: action.neighborhoods, error: false });
}

const fetchNeighborhoodsFail = (state, action) => {
    return updateObject(state, { loading: false, neighborhoods: null, error: true });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.FETCH_NEIGHBORHOODS_START]: () => fetchNeighborhoodsStart(state, action),
        [actionTypes.FETCH_NEIGHBORHOODS_SUCCESS]: () => fetchNeighborhoodsSuccess(state, action),
        [actionTypes.FETCH_NEIGHBORHOODS_FAIL]: () => fetchNeighborhoodsFail(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;