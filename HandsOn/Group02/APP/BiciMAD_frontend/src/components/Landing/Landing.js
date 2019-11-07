import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video from '../../resources/Bicimad.mp4';
import styles from './Landing.module.css';

const landing = (props) => {
    return (
        <>
            <video autoPlay muted loop className={styles.landing_video} >
                <source src={video} type="video/mp4" />
            </video>
            <Container className={styles.content}>
                <Row className="row justify-content-center">
                    <Col xs={12} className="text-center text-light">
                        <h1 className="display-1">BiciMAD TOURISM</h1>
                        <h3>EXPLORE MADRID ON A BIKE</h3>
                        <Button as={Link} to="/planner" variant="outline-light" className="mt-3">START NOW</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default landing;