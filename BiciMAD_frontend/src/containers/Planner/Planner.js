import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import CustomForm from '../Form/Form';
import styles from './Planner.module.css';
import * as action from '../../store/actions';

class Planner extends Component {
    constructor(props) {
        super(props);
        this.props.onFetchDistricts();
        this.props.onFetchNeighborhoods();
    }

    onClickToRoute = () => {
        this.props.onFetchInteresPoints(this.props.stationTo);
        this.props.history.push('/route');
    }

    render() {
        let content = (
            <Container>
                <Row className="justify-content-center">
                    <Spinner animation="border" variant="light" size="lg" />
                </Row>
            </Container>);
        if (!this.props.loadingdist && !this.props.loadingdist)
            content = (
                <Container>
                    <Row className="justify-content-center text-white">
                        <Col xs={6}>
                            <CustomForm
                                title="FROM"
                                seletcStation={this.props.onStationFrom}
                                fetchStationsByDistrict={this.props.onFetchStationsFromByDistrict}
                                fetchStationsByNeighborhood={this.props.onFetchStationsFromByNeighborhood}
                                fetchedStations={this.props.stationsFrom} />
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-white">
                        <Col xs={6}>
                            <CustomForm
                                title="TO"
                                seletcStation={this.props.onStationTo}
                                fetchStationsByDistrict={this.props.onFetchStationsToByDistrict}
                                fetchStationsByNeighborhood={this.props.onFetchStationsToByNeighborhood}
                                fetchedStations={this.props.stationsTo}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        return (
            <div className={styles.content}>
                <div className={styles.cover_image}>
                </div>
                <Container className="my-5">
                    <Row className="text-center text-white">
                        <Col xs={12}>
                            <h1 className="display-3">PLAN YOUR JOURNEY</h1>
                        </Col>
                    </Row>
                </Container>
                {content}
                {this.props.stationTo && this.props.stationFrom
                    ? (<Container>
                        <Row className="justify-content-center">
                            <Button variant="outline-light" className="mt-3" onClick={this.onClickToRoute}>PLAN YOUR ROUTE</Button>
                        </Row>
                    </Container>)
                    : null}
            </ div >
        );
    }
}


const mapStateToProps = state => {
    return {
        stationFrom: state.station.stationFrom,
        stationTo: state.station.stationTo,
        loadingneig: state.neighborhood.loading,
        loadingdist: state.district.loading,
        stationsFrom: state.station.stationsFrom,
        stationsTo: state.station.stationsTo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStationFrom: (station) => dispatch(action.selectStationFrom(station)),
        onStationTo: (station) => dispatch(action.selectStationTo(station)),
        onFetchDistricts: () => dispatch(action.fetchDistricts()),
        onFetchNeighborhoods: () => dispatch(action.fetchNeighborhoods()),
        onFetchStationsFromByDistrict: (district) => dispatch(action.fetchStationsFromByDistrict(district)),
        onFetchStationsFromByNeighborhood: (neighborhood) => dispatch(action.fetchStationsFromByNeighborhood(neighborhood)),
        onFetchStationsToByDistrict: (district) => dispatch(action.fetchStationsToByDistrict(district)),
        onFetchStationsToByNeighborhood: (neighborhood) => dispatch(action.fetchStationsToByNeighborhood(neighborhood)),
        onFetchInteresPoints: (station) => dispatch(action.fetchInterestPoints(station)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Planner);