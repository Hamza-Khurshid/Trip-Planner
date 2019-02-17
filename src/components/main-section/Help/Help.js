import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Help.css';

const Help = () => {
    return (
        <Container>
            <div className='content'>
                <Row>
                    <Col xs={12}>
                        <p className='help-title'>How can we help you?</p>
                        <p className='help-desc'>You are...</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='text'>
                        <p className='help-ops'>A company</p>
                        <p className='help-ops'>A financial instituion</p>
                        <p className='help-ops'>A non-gevernmetal organization</p>
                        <p className='help-ops'>A government institute</p>
                        <p className='help-ops'>Other</p>
                    </Col>
                </Row>
            </div>     
        </Container>
    );
}

export default Help;