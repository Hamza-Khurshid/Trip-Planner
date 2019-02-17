import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import BackImage from '../../../Res/map.jpg';
import MapImage from '../../../Res/map-image.png';
import './Industry.css';

const Industry = () => {
    return(
        <Container-Fluid>
            <div className='conatiner'>
                <Row> 
                    <Col xs={4}>
                        <p className='service'>Our Services</p>
                        <p className='services-text active'>Business Introductions</p>
                        <p className='services-text'>Concierge Services</p>
                        <p className='services-text'>Visa Arrangments</p>
                        <p className='services-text'>Translation</p>
                        <p className='services-text'>Ground Transportation</p>
                        <p className='services-text'>Flight & Hotel</p>
                    </Col>
                    <Col xs={2} style={{ textAlign: 'center' }}>
                        <br/><br/><br/><br/>
                        <p className='market'>Market <br /> Scoping</p>
                    </Col>
                    <Col xs={6}>
                    <br/><br/><br/><br />
                        <p className='market'>Easy Market Access</p>
                        <p className='ps'> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, praesentium in amet inventore consequuntur vero error assumenda numquam voluptate fuga quia ullam id ut earum accusantium facilis. Nemo, explicabo architecto. </p>
                        <p className='ps'> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, praesentium in amet inventore consequuntur vero error assumenda numquam voluptate fuga quia ullam id ut earum accusantium facilis. Nemo, explicabo architecto. </p>
                        <p className='ps'> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, praesentium in amet inventore consequuntur vero error assumenda numquam voluptate fuga quia ullam id ut earum accusantium facilis. Nemo, explicabo architecto. </p>
                    </Col>
                </Row>
                
                <Row className='red'>
                    <Col xs={8}>
                        <span className='red-title'>Looking for a local Logistics partener?</span> <br />
                        <span className='red-desc'>We would arrange the hotel, flights and ground transportation fro their conference/exibition/fair visitors. </span>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={3}>
                        <button className='started-btn'>Get Started</button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <img src={MapImage} alt='Map Img' className='map-img' />
                    </Col>
                    <Col xs={6}>
                        <div className='div-c'>
                            <p>We currently srevice the large cities in Morocco, Ivory Coast, Nigeria, Ethopia and South Africa.</p>
                            <p>Let us know if you want us in another city/country.</p>
                            <div className='input-div'>
                                <input type='text' placeholder='Suggest a city' className='input live-input'/>
                                <input type='submit' value="REQUEST" className='btn-input'/>
                            </div>
                        </div>
                    </Col>
                </Row>    
            </div>
        </Container-Fluid>
    );
}

export default Industry;