import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class CustomForm extends Component {
    state = {
        filterType: null,
        selectedType: null,
        selectedStation: null,
    }

    onSelectFilterHandler = (filter) => {
        this.props.seletcStation(null);
        this.setState({ filterType: filter, selectedType: null, selectedStation: null });
    }

    onChangeFilterHandler = (event) => {
        const index = event.target.value;
        const selectedValue = this.props[this.state.filterType + 's'][index];
        if (this.state.filterType === 'district') this.props.fetchStationsByDistrict(selectedValue);
        else this.props.fetchStationsByNeighborhood(selectedValue);
        this.props.seletcStation(null);
        this.setState({ selectedType: index, selectedStation: null });
    }

    onChangeStationHandler = (event) => {
        const index = event.target.value;
        this.setState({ selectedStation: index });
        this.props.seletcStation(this.props.fetchedStations[index]);
    }

    createForm = () => {
        return (
            <Form>
                <Form.Group controlId={this.state.filterType}>
                    <Form.Label>{this.state.filterType.charAt(0).toUpperCase() + this.state.filterType.slice(1)}</Form.Label>
                    <Form.Control
                        as="select"
                        className="my-2"
                        onChange={(event) => this.onChangeFilterHandler(event)}
                        value={this.state.selectedType || "default"}>
                        <option value="default">Select a {this.state.filterType}</option>
                        {this.props[this.state.filterType + 's'].map((el, index) => (<option value={index} key={index}>{el}</option>))}
                    </Form.Control>
                    {this.props.fetchedStations
                        ? (<>
                            <Form.Label className="my-2">Station </Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(event) => this.onChangeStationHandler(event)}
                                value={this.state.selectedStation || "default"}>
                                <option value="default">Select a bike station</option>
                                {this.props.fetchedStations.map((el, index) => (<option value={index} key={index}>{el.name} - {el.address}</option>))}
                            </Form.Control>
                        </>)
                        : null
                    }
                </Form.Group >
            </Form>
        );
    }
    render() {
        return (
            <Container className="my-5">
                <Row className="mb-3">
                    <Col xs={3}><h3>{this.props.title}</h3></Col>
                    <Col xs={9}>
                        <Button variant="outline-light mr-3" onClick={() => this.onSelectFilterHandler("district")}>District</Button>
                        <Button variant="outline-light" onClick={() => this.onSelectFilterHandler("neighborhood")}>Neighborhood</Button>
                    </Col>
                </Row>
                {this.state.filterType
                    ? this.createForm()
                    : null}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        districts: state.district.districts,
        neighborhoods: state.neighborhood.neighborhoods,
        interestPoints: state.interestPoint.interestPoints,
        stationsFrom: state.station.stationsFrom,
        stationsTo: state.station.stationsTo,
    }
}

export default connect(mapStateToProps)(CustomForm);