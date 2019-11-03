import * as actionTypes from './actionTypes';
import axios from '../../axios-stations';

export const fetchDistrictsStart = () => {
    return {
        type: actionTypes.FETCH_DISTRICTS_START,
    }
};

export const fetchDistrictsSuccess = (districts) => {
    return {
        type: actionTypes.FETCH_DISTRICTS_SUCCESS,
        districts,
    }
};

export const fetchDistrictsFail = () => {
    return {
        type: actionTypes.FETCH_DISTRICTS_FAIL,
    }
};

export const fetchDistricts = () => {
    return dispatch => {
        dispatch(fetchDistrictsStart());
        axios.get('/Districts')
            .then(res => {
                const districts = res.data.results.bindings.map(({ district }) => district.value);
                dispatch(fetchDistrictsSuccess(districts));
            })
            .catch(err => dispatch(fetchDistrictsFail()));
    }
};