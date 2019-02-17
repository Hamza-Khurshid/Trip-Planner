import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import AirPlane from '../../../Res/airplane-icon.png';
import Network from '../../../Res/share-icon.png';
import Logistic from '../../../Res/car-icon.png';
import './Plan.css';

const Plan = () => {
    return (
        <Container>
            <div className='plan'>
                <Row>
                    <Col xs={12}>
                        <p className='plan-title'>Plan your business trip to Africa</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <span className='plan-desc'>Book your flight, hotel, ground transport, and get connected with our wide African network.</span>
                    </Col>
                </Row>
                <Row className='imgs-div'>
                    <Col xs={1.5}></Col>
                    <Col xs={3}>
                        <img src={AirPlane} alt='Travel'  className='image' />
                        <p>Travel</p>
                    </Col>
                    <Col xs={3}>
                        <img src={Network} alt='Network'  className='image' />
                        <p>Network</p>
                    </Col>
                    <Col xs={3}>
                        <img src={Logistic} alt='Logistics'  className='image' />
                        <p>Logistics</p>
                    </Col>
                    <Col xs={1.5}></Col>
                </Row>
            </div>
        </Container>
    );
}

export default Plan;