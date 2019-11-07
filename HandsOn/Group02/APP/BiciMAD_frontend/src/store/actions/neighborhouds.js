import * as actionTypes from './actionTypes';
import axios from '../../axios-stations';

export const fetchNeigborhoodsStart = () => {
    return {
        type: actionTypes.FETCH_NEIGHBORHOODS_START,
    }
};

export const fetchNeigborhoodsSuccess = (neighborhoods) => {
    return {
        type: actionTypes.FETCH_NEIGHBORHOODS_SUCCESS,
        neighborhoods,
    }
};

export const fecthNeighborhoodsFail = () => {
    return {
        type: actionTypes.FETCH_NEIGHBORHOODS_FAIL,
    }
};

export const fetchNeighborhoods = () => {
    return dispatch => {
        dispatch(fetchNeigborhoodsStart());
        axios.get('/Neighborhoods')
            .then(res => {
                const neighborhoods = res.data.results.bindings.map(({ neighborhood }) => neighborhood.value.split('_').join(' '));
                dispatch(fetchNeigborhoodsSuccess(neighborhoods));
            })
            .catch(err => dispatch(fecthNeighborhoodsFail()));
    }
};