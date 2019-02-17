import React from 'react';
import './BestExperience.css';
import { Row, Col } from 'react-grid-system';

const BestExperience = () => {
    return (
        <Conntainer-Fluid>
            <div className='content-ex'>
                <Row>
                    <Col xs={12}>
                        <h3 className='title-ex'>We ensure you the best experience you ever had in Africa, to create your best project yet.</h3>
                    </Col>
                </Row>
                <Row className='div-ex'>
                    <Col xs={12}>
                        <button className='btn-ex'>Get Started</button>
                    </Col>
                </Row>
            </div>
        </Conntainer-Fluid>
    );
} 

export default BestExperience;