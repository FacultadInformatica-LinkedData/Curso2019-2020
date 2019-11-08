import * as actionTypes from './actionTypes';
import axios from '../../axios-stations';

export const fetchInterestPointsStart = () => {
    return {
        type: actionTypes.FETCH_INTEREST_POINTS_START,
    }
};

export const fetchInterestPointsSuccess = (interestPoints, typeInterests) => {
    return {
        type: actionTypes.FETCH_INTEREST_POINTS_SUCCESS,
        interestPoints,
        typeInterests
    }
};

export const fetchInterestPointsFail = () => {
    return {
        type: actionTypes.FETCH_INTEREST_POINTS_FAIL,
    }
};

export const fetchInterestPoints = (station) => {
    return dispatch => {
        dispatch(fetchInterestPointsStart());
        axios.get(`BikeStations/${station.id}/interestPoints`)
            .then(res => {
                let typeInterests = [];
                let interestPoints = res.data.results.bindings.map(el => {
                    const coordinate = el.coor.value.split('(')[1].split(')')[0].split(' ');
                    const longitude = Number(coordinate[0]);
                    const latitude = Number(coordinate[1]);
                    const tipoLugar = el.tipoLugar.value.charAt(0).toUpperCase() + el.tipoLugar.value.slice(1)
                    typeInterests.push(tipoLugar);
                    return {
                        name: el.nombre.value,
                        type: tipoLugar,
                        latitude,
                        longitude
                    }
                });
                typeInterests = [...new Set(typeInterests)];
                interestPoints = interestPoints.map(el => ({ ...el, index: typeInterests.indexOf(el.type) }));
                dispatch(fetchInterestPointsSuccess(interestPoints, typeInterests));
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchInterestPointsFail())
            });
    }
};