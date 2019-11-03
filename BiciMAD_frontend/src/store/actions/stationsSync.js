import * as actionTypes from './actionTypes';

export const selectStationFrom = (station) => {
    return {
        type: actionTypes.SELECT_STATION_FROM,
        stationFrom: station
    }
}

export const selectStationTo = (station) => {
    return {
        type: actionTypes.SELECT_STATION_TO,
        stationTo: station,
    }
};