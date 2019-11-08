import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import iconDefault from 'leaflet/dist/images/marker-icon.png';
import iconBlack from '../../resources/icons/marker-icon-black.png';
import iconGreen from '../../resources/icons/marker-icon-green.png';
import iconGrey from '../../resources/icons/marker-icon-grey.png';
import iconOrange from '../../resources/icons/marker-icon-orange.png';
import iconRed from '../../resources/icons/marker-icon-red.png';
import iconViolet from '../../resources/icons/marker-icon-violet.png';
import iconYellow from '../../resources/icons/marker-icon-yellow.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class CustomMap extends Component {
    state = {
        zoom: 13,
        filteredPoints: null,
    }

    icons = [iconBlack, iconGreen, iconGrey, iconOrange, iconRed, iconViolet, iconYellow];
    onFilterInterests = (filter) => {
        if (!filter) this.setState({ filteredPoints: null });
        else {
            const points = this.props.interestPoints.filter(el => el.type === filter);
            this.setState({ filteredPoints: points });
        }
    }
    render() {
        let content = (
            <Row className="justify-content-center">
                <Spinner animation="border" variant="light" size="lg" />
            </Row>
        );
        const position = [this.props.stationTo.latitude, this.props.stationTo.longitude];
        const points = this.state.filteredPoints || this.props.interestPoints;
        if (this.props.interestPoints)
            content = (
                <LeafletMap center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position} icon={Leaflet.icon({ iconUrl: iconDefault, shadowUrl: iconShadow })}>
                        <Popup>
                            <p>{this.props.stationTo.name}</p>
                        </Popup>
                    </Marker>
                    {points.map((el, index) => (
                        <Marker key={index} position={[el.latitude, el.longitude]} icon={Leaflet.icon({ iconUrl: this.icons[el.index % this.icons.length] })}>
                            <Popup>
                                <p>{el.name}</p>
                                <p>{el.type}</p>
                            </Popup>
                        </Marker>
                    ))}
                </LeafletMap>
            );
        let legend = null;
        if (this.props.typeInterests)
            legend = (
                <Container className="my-3">
                    <Row className="text-white text-center">
                        <Col xs={6} style={{ float: 'none', margin: '0 auto' }}>
                            {this.props.typeInterests.map((el, index) => (
                                <Button variant="outline-light" size="sm" key={index} onClick={() => this.onFilterInterests(el)}>{el}</Button>
                            ))}
                            <Button variant="dark" size="sm" onClick={() => this.onFilterInterests()}>All</Button>
                        </Col>
                    </Row>
                </Container>
            )
        return (<>{content}{legend}</>)
    }
}

const mapStateToProps = state => {
    return {
        stationTo: state.station.stationTo,
        time: state.station.time,
        interestPoints: state.interestPoint.interestPoints,
        loadingPoints: state.interestPoint.loading,
        typeInterests: state.interestPoint.typeInterests
    }
};

export default connect(mapStateToProps)(CustomMap);