import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Navbar.css'

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar
        className={`page-container primary-text ${expanded ? 'navbar-expanded' : ''}`}
        bg='transparent'
        expand='lg'
        expanded={expanded}
        fixed='top'
      >
        <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={toggleNavbar}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='nav-row'>
            <Nav.Link className={`nav-links nav-border ${expanded ? 'active' : ''}`} href='home'>01 : Home</Nav.Link>
            <Nav.Link className={`nav-links nav-border ${expanded ? 'active' : ''}`} href='resume'>02 : Resume</Nav.Link>
            <Nav.Link className={`nav-links ${expanded ? 'active' : ''}`} href='projects'>03 : Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
