import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import BackImage from '../../../Res/map.jpg';
import './Industry.css';

const Industry = () => {
    return(
        <Container-Fluid>
            <div className='conatiner'> 
                <Col xs={4}>
                    <p className='service'>Our Services</p>
                    <p className='services-text active'>Business Introductions</p>
                    <p className='services-text'>Concierge Services</p>
                    <p className='services-text'>Visa Arrangments</p>
                    <p className='services-text'>Translation</p>
                    <p className='services-text'>Ground Transportation</p>
                    <p className='services-text'>Flight & Hotel</p>
                </Col>
                <Col xs={2}>
                </Col>
                <Col xs={6}>

                </Col>

            </div>
        </Container-Fluid>
    );
}

export default Industry;