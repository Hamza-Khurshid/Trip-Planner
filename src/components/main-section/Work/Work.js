import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Support1 from '../../../Res/support2.png';
import Support2 from '../../../Res/support1.png';
import Support3 from '../../../Res/support3.png';
import './howwork.css';

const Work = () => {
    return (
        <Container>
            <div className='plan'>
                <Row>
                    <Col xs={12}>
                        <p className='plan-title'>How does it work?</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <span className='plan-desc'>We take care of you, from arrival to departure.</span>
                    </Col>
                </Row>
                <Row className='imgs-div'>
                    <Col xs={1.5}></Col>
                    <Col xs={3}>
                        <img src={Support1} alt='Travel'  className='s-image' />
                        <p>Millions of people need help in their logistics & finding the right people in Africa.</p>
                    </Col>
                    <Col xs={3}>
                        <img src={Support2} alt='Network'  className='s-image' />
                        <p>No more filling forms for separate services. We book your flights, hotel, driver and even meetings.</p>
                    </Col>
                    <Col xs={3}>
                        <img src={Support3} alt='Logistics'  className='s-image' />
                        <p>Travel confidently to Africa. <br/> We have your back. <br/> <a href='#' id='anchor'>Learn More</a> </p>
                    </Col>
                    <Col xs={1.5}></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <button className='get-started-btn'>Get Started</button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Work;