import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col } from 'react-grid-system';
import './Header.css';
import Input from './Input';


const Header = () => {
    const url = 'https://png.pngtree.com/svg/20170331/businessman_863430.png';

    return (
        <Container-Fluid>
            <Row  className='header-back'>
                <Col xs={12}>
                    <Container>
                        <NavBar />
                    </Container>
                </Col>
                <Col xs={12}>
                    <Input />
                </Col>
            </Row>
        </Container-Fluid>
    );
}

export default Header;