import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonRounded from './ButtonRounded'
import { Box } from '@mui/material';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';


const styles = {
  fontSize: 44
}

const NavBar = () => {
  return (
  
    <Navbar className="justify-content-center" sticky="top" collapseOnSelect expand="lg"  bg="dark" variant="dark">
    <Container>
    <LinkContainer to="/">
      <Navbar.Brand >
        <span style={styles} className='frank-outline'>HUMAN</span><span style={styles} className='frank-bold'>KIND</span>
      </Navbar.Brand>
    </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto machina">
      <LinkContainer to={'/LocationsRoute'}>
        <Nav.Link>LOCATION</Nav.Link>
      </LinkContainer>
      <Nav.Link href="#pricing">BLOG</Nav.Link>
      <LinkContainer to={'/InfoSectionV1'}>
        <Nav.Link>ABOUT</Nav.Link>
      </LinkContainer>
      <LinkContainer to={'/Faq'}>
        <Nav.Link>FAQ'S</Nav.Link>
      </LinkContainer>

        {/* <ButtonRounded onclick="location.href='href='https://studio3-schedule.vercel.app/''"
      cta='Book class' />

      <Box px={2}>
      <ButtonRounded
      cta='Invite friend'
      bg='#000'
      clr='#fff'
       /></Box> */}
    
    </Nav>
     </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default NavBar