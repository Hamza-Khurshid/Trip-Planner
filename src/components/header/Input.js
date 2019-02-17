import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Input = () => {
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <div className='input-div'>
                        <input type='text' placeholder='I live in' className='input live-input'/>
                        <input type='text' placeholder='I want to do business in' className='input business-input'/>
                        <input type='submit' value="Let's go" className='btn-input'/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Input;