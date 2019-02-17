import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Header.css';

const NavBar = () => {
  const url = 'https://png.pngtree.com/svg/20170331/businessman_863430.png';

  return (
    <Container-Fluid>
      <Row>
        <Col>
        <div className='signup'> 
                  <span className='signup-text'>
                      Supplier Sign Up
                  </span>

                  <span>
                      <img src={url} alt='Sign Up' className='user-img' />
                  </span>
              </div>
        </Col>
      </Row>

      <Container>
        <Row className='nav-bar'>
          <Col lg={1.5}>
            <span className='nav-item'>About</span>
          </Col>
          
          <Col lg={2}>
            <span className='nav-item'>How it works</span>
          </Col>

          
          <Col lg={1.5}>
            <span className='nav-item'>Industry</span>
          </Col>

          
          <Col lg={1.5}>
            <span className='nav-item'>Countries</span>
          </Col>

          
          <Col lg={1.5}>
            <span className='nav-item'>Events</span>
          </Col>
        </Row>
      </Container>
      </Container-Fluid>
  );
}

export default NavBar;