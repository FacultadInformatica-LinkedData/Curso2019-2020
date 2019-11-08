import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomMap from '../CustomMap/CustomMap';
import styles from './RouteResult.module.css';
import Button from 'react-bootstrap/Button';

import * as actions from '../../store/actions';

class RouteResult extends Component {
    onClickNewRoute = () => {
        this.props.onStationFrom();
        this.props.onStationTo();
        this.props.history.push('/planner');
    }
    render() {
        let content = <Redirect to="/" />
        if (this.props.stationFrom && this.props.stationTo) {
            content = (
                <div className={styles.content}>
                    <div className={styles.cover_image}>
                    </div>
                    <Container className="mt-5 mb-2">
                        <Row className="text-center text-white">
                            <Col xs={12}>
                                <h1 className="display-3">YOUR JOURNEY</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="text-white text-center mb-1">
                            <Col xs={12}>
                                <h3>Estimated time: {this.props.time}</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-center text-center text-white mb-2">
                            <Col xs={6}>
                                <h2>FROM</h2>
                                <h4>{this.props.stationFrom.name} | Availability {this.props.stationFrom.availability}</h4>
                                <h6>Address {this.props.stationFrom.address}</h6>
                                <h6>District {this.props.stationFrom.district} | Neighborhood {this.props.stationFrom.neighborhood} </h6>
                            </Col>
                            <Col xs={6}>
                                <h2>TO</h2>
                                <h4>{this.props.stationTo.name} | Availability {this.props.stationTo.availability}</h4>
                                <h6>Address {this.props.stationTo.address}</h6>
                                <h6>District {this.props.stationTo.district} | Neighborhood {this.props.stationTo.neighborhood} </h6>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="text-center justify-content-center mb-3">
                            <Button variant="outline-light" to='/planner' onClick={this.onClickNewRoute}>PLAN NEW ROUTE</Button>
                        </Row>
                    </Container>
                    {this.props.time
                        ? (
                            <div id="leaflet-container">
                                <CustomMap />
                            </div>
                        )
                        : null}
                </div>
            );
        }
        return (
            <>
                {content}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        stationFrom: state.station.stationFrom,
        stationTo: state.station.stationTo,
        time: state.station.time,
        interestPoints: state.interestPoint.interestPoints
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onStationFrom: () => dispatch(actions.selectStationFrom(null)),
        onStationTo: () => dispatch(actions.selectStationTo(null))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteResult);