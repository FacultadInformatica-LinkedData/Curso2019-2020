import * as actionTypes from './actionTypes';
import axios from '../../axios-stations';

const parseStation = (station) => {
    let address = station.address.value.split(',');
    address = `${address[1]} ${address[0]},${address[address.length - 1]}`;
    let name = station.label.value.split('_');
    name = `${name[1]} ${name[2]}`;
    return {
        address: address,
        availability: station.availability.value,
        date: station.date.value,
        district: station.district.value,
        id: station.label.value,
        name: name,
        latitude: Number(station.latitude.value),
        longitude: Number(station.longitude.value),
        neighborhood: station.neighborhood.value.split('_').join(' '),
        street: station.street.value,
    }
}

const fetchStationsFromByDistrictStart = () => {
    return {
        type: actionTypes.FETCH_STATIONS_FROM_BY_DISTRICT_START,
    }
};

const fetchStationsFromByDistrictSuccess = (stations) => {
    return {
        type: actionTypes.FETCH_STATIONS_FROM_BY_DISTRICT_SUCCESS,
        stationsFrom: stations,
    }
};

const fetchStationsFromByDistrictFail = () => {
    return {
        type: actionTypes.FETCH_STATIONS_FROM_BY_DISTRICT_FAIL,
    }
};

export const fetchStationsFromByDistrict = (district) => {
    return dispatch => {
        dispatch(fetchStationsFromByDistrictStart());
        const parseDistrict = district.split(' ').join('_');
        axios.get('BikeStations?district=' + parseDistrict)
            .then(res => {
                const stations = res.data.results.bindings.map(el => parseStation(el));
                dispatch(fetchStationsFromByDistrictSuccess(stations));
            })
            .catch(err => dispatch(fetchStationsFromByDistrictFail()));
    }
};

const fetchStationsToByDistrictStart = () => {
    return {
        type: actionTypes.FETCH_STATIONS_TO_BY_DISTRICT_START,
    }
};

const fetchStationsToByDistrictSuccess = (stations) => {
    return {
        type: actionTypes.FETCH_STATIONS_TO_BY_DISTRICT_SUCCESS,
        stationsTo: stations,
    }
};

const fetchStationsToByDistrictFail = () => {
    return {
        type: actionTypes.FETCH_STATIONS_TO_BY_DISTRICT_FAIL,
    }
};

export const fetchStationsToByDistrict = (district) => {
    return dispatch => {
        dispatch(fetchStationsToByDistrictStart());
        const parseDistrict = district.split(' ').join('_');
        axios.get('BikeStations?district=' + parseDistrict)
            .then(res => {
                const stations = res.data.results.bindings.map(el => parseStation(el));
                dispatch(fetchStationsToByDistrictSuccess(stations));
            })
            .catch(err => dispatch(fetchStationsToByDistrictFail()));
    }
};

const fetchStationsFromByNeighborhoodStart = () => {
    return {
        type: actionTypes.FETCH_STATIONS_FROM_BY_NEIGHBORHOOD_START,
    }
};

const fetchStationsFromByNeighborhoodSuccess = (stations) => {
    return {
        type: actionTypes.FETCH_STATIONS_FROM_BY_NEIGHBORHOOD_SUCCESS,
        stationsFrom: stations
    }
};

const fetchStationsFromByNeighborhoodFail = () => {
    return {
        type: actionTypes.FETCH_STATIONS_FROM_BY_NEIGHBORHOOD_FAIL,
    }
};

export const fetchStationsFromByNeighborhood = (neighborhood) => {
    return dispatch => {
        dispatch(fetchStationsFromByNeighborhoodStart());
        const parseNeig = neighborhood.split(' ').join('_');
        axios.get('BikeStations?neighborhood=' + parseNeig)
            .then(res => {
                const stations = res.data.results.bindings.map(el => parseStation(el));
                dispatch(fetchStationsFromByNeighborhoodSuccess(stations));
            })
            .catch(err => dispatch(fetchStationsFromByNeighborhoodFail()));
    }
};

const fetchStationsToByNeighborhoodStart = () => {
    return {
        type: actionTypes.FETCH_STATIONS_TO_BY_NEIGHBORHOOD_START,
    }
};

const fetchStationsToByNeighborhoodSuccess = (stations) => {
    return {
        type: actionTypes.FETCH_STATIONS_TO_BY_NEIGHBORHOOD_SUCCESS,
        stationsTo: stations
    }
};

const fetchStationsToByNeighborhoodFail = () => {
    return {
        type: actionTypes.FETCH_STATIONS_TO_BY_NEIGHBORHOOD_FAIL,
    }
};

export const fetchStationsToByNeighborhood = (neighborhood) => {
    return dispatch => {
        dispatch(fetchStationsToByNeighborhoodStart());
        const parseNeig = neighborhood.split(' ').join('_');
        axios.get('BikeStations?neighborhood=' + parseNeig)
            .then(res => {
                const stations = res.data.results.bindings.map(el => parseStation(el));
                dispatch(fetchStationsToByNeighborhoodSuccess(stations));
            })
            .catch(err => dispatch(fetchStationsToByNeighborhoodFail()));
    }
};