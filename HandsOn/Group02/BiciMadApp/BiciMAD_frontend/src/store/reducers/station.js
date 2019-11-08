import * as actionTypes from '../actions/actionTypes';
import { updateObject, calculateTime } from '../utils';

const initialState = {
    stationFrom: null,
    stationTo: null,
    time: null,
    loading: false,
    stationsFrom: null,
    stationsTo: null,
    error: false,
};

const selectStationFrom = (state, action) => {
    const time = calculateTime(action.stationFrom, state.stationTo);
    return updateObject(state, { stationFrom: action.stationFrom, time: time });
};

const selectStationTo = (state, action) => {
    const time = calculateTime(state.stationFrom, action.stationTo);
    return updateObject(state, { stationTo: action.stationTo, time: time });
}

const fetchStationsFromByDistrictStart = (state, action) => {
    return updateObject(state, { stationsFrom: null });
};

const fetchStationsFromByDistrictSuccess = (state, action) => {
    return updateObject(state, { stationsFrom: action.stationsFrom });
};

const fetchStationsFromByDistrictFail = (state, action) => {
    return updateObject(state, { stationsFrom: null });
};

const fetchStationsToByDistrictStart = (state, action) => {
    return updateObject(state, { stationsTo: null });
};

const fetchStationsToByDistrictSuccess = (state, action) => {
    return updateObject(state, { stationsTo: action.stationsTo });
};

const fetchStationsToByDistrictFail = (state, action) => {
    return updateObject(state, { stationsTo: null });
};

const fetchStationsFromByNeighborhoodStart = (state, action) => {
    return updateObject(state, { stationsFrom: null });
};

const fetchStationsFromByNeighborhoodSuccess = (state, action) => {
    return updateObject(state, { stationsFrom: action.stationsFrom });
};

const fetchStationsFromByNeighborhoodFail = (state, action) => {
    return updateObject(state, { stationsFrom: null });
};

const fetchStationsToByNeighborhoodStart = (state, action) => {
    return updateObject(state, { stationsTo: null });
};

const fetchStationsToByNeighborhoodSuccess = (state, action) => {
    return updateObject(state, { stationsTo: action.stationsTo });
};

const fetchStationsToByNeighborhoodFail = (state, action) => {
    return updateObject(state, { stationsTo: null });
};

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.SELECT_STATION_FROM]: () => selectStationFrom(state, action),
        [actionTypes.SELECT_STATION_TO]: () => selectStationTo(state, action),
        [actionTypes.FETCH_STATIONS_FROM_BY_DISTRICT_START]: () => fetchStationsFromByDistrictStart(state, action),
        [actionTypes.FETCH_STATIONS_FROM_BY_DISTRICT_SUCCESS]: () => fetchStationsFromByDistrictSuccess(state, action),
        [actionTypes.FETCH_STATIONS_FROM_BY_DISTRICT_FAIL]: () => fetchStationsFromByDistrictFail(state, action),
        [actionTypes.FETCH_STATIONS_FROM_BY_NEIGHBORHOOD_START]: () => fetchStationsFromByNeighborhoodStart(state, action),
        [actionTypes.FETCH_STATIONS_FROM_BY_NEIGHBORHOOD_SUCCESS]: () => fetchStationsFromByNeighborhoodSuccess(state, action),
        [actionTypes.FETCH_STATIONS_FROM_BY_NEIGHBORHOOD_FAIL]: () => fetchStationsFromByNeighborhoodFail(state, action),
        [actionTypes.FETCH_STATIONS_TO_BY_DISTRICT_START]: () => fetchStationsToByDistrictStart(state, action),
        [actionTypes.FETCH_STATIONS_TO_BY_DISTRICT_SUCCESS]: () => fetchStationsToByDistrictSuccess(state, action),
        [actionTypes.FETCH_STATIONS_TO_BY_DISTRICT_FAIL]: () => fetchStationsToByDistrictFail(state, action),
        [actionTypes.FETCH_STATIONS_TO_BY_NEIGHBORHOOD_START]: () => fetchStationsToByNeighborhoodStart(state, action),
        [actionTypes.FETCH_STATIONS_TO_BY_NEIGHBORHOOD_SUCCESS]: () => fetchStationsToByNeighborhoodSuccess(state, action),
        [actionTypes.FETCH_STATIONS_TO_BY_NEIGHBORHOOD_FAIL]: () => fetchStationsToByNeighborhoodFail(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;
