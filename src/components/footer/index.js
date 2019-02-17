import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-grid-system';

import LinkedIn  from '../../Res/linkedin-icon.png';
import Facebbok  from '../../Res/facebook-icon.png';
import Twitter  from '../../Res/twitter-icon.png';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col xs={6}></Col>

                <Col xs={6}>
                    <Row>
                        <Col xs={6}>
                            <p className='about-title'>ABOUT</p>
                            <p className='text-fo link'>About</p>
                            <p className='text-fo link'>Privacy Policy</p>
                            <p className='text-fo link'>Term of Service</p>
                            <p className='text-fo link'>Careers</p>
                            <p className='text-fo link'>Contact</p>
                        </Col>

                        <Col xs={6}>
                            <br />
                            <p className='text-fo'> &copy;2017. All rights reserved. </p>
                            <p className='text-fo'>Tuborg Hevnepark 15 </p>
                            <p className='text-fo'>2900 Hellerup - Denmark</p>
                            <p> 
                                <img className='icon-igm' src={LinkedIn} alt='LinkedIn' /> 
                                <img className='icon-igm' src={Facebbok} alt='Facebook' /> 
                                <img className='icon-igm' src={Twitter} alt='Twitter' /> 
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;