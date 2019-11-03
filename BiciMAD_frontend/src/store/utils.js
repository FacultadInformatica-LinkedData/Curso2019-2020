export const updateObject = (prevObject, props) => {
    return {
        ...prevObject,
        ...props
    };
};

const increaseFactor = 1.4;
export const calculateTime = (stationFrom, stationTo) => {
    if (!stationFrom || !stationTo) return null;

    const lat1 = stationFrom.latitude;
    const lon1 = stationFrom.longitude;
    const lat2 = stationTo.latitude;
    const lon2 = stationTo.longitude;
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    }
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344;
    let totalTime = dist * increaseFactor / 20;
    let integer = Math.floor(totalTime);
    let decimal = totalTime - Math.floor(totalTime);
    decimal = Math.round(decimal * 60);
    integer = integer < 10 ? `0${integer}` : integer;
    decimal = decimal < 10 ? `0${decimal}` : decimal;
    totalTime = `${integer}:${decimal}`;
    return totalTime;
}