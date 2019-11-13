import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    loading: false,
    interestPoints: null,
    error: null,
    typeInterests: null,
};

const fetchInterestPointsStart = (state, action) => {
    return updateObject(state, { loading: true, error: false, interestPoints: null, typeInterests: null });
};

const fetchInterestPointsSuccess = (state, action) => {
    return updateObject(state, { loading: false, interestPoints: action.interestPoints, error: false, typeInterests: action.typeInterests });
}

const fetchInterestPointsFail = (state, action) => {
    return updateObject(state, { loading: false, interestPoints: null, error: true });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.FETCH_INTEREST_POINTS_START]: () => fetchInterestPointsStart(state, action),
        [actionTypes.FETCH_INTEREST_POINTS_SUCCESS]: () => fetchInterestPointsSuccess(state, action),
        [actionTypes.FETCH_INTEREST_POINTS_FAIL]: () => fetchInterestPointsFail(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;