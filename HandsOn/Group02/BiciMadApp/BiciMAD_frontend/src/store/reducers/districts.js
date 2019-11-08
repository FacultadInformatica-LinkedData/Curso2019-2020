import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    loading: false,
    districts: null,
    error: false,
};

const fetchDistrictsStart = (state, action) => {
    return updateObject(state, { loading: true, error: false });
};

const fetchDistrictsSuccess = (state, action) => {
    return updateObject(state, { loading: false, districts: action.districts, error: false });
}

const fetchDistrictsFail = (state, action) => {
    return updateObject(state, { loading: false, districts: null, error: true });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.FETCH_DISTRICTS_START]: () => fetchDistrictsStart(state, action),
        [actionTypes.FETCH_DISTRICTS_SUCCESS]: () => fetchDistrictsSuccess(state, action),
        [actionTypes.FETCH_DISTRICTS_FAIL]: () => fetchDistrictsFail(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;
