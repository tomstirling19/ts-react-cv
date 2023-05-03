import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
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
          <Nav.Link as={Link} to='/home' className={`nav-links nav-border ${expanded ? 'active' : ''}`}>01 : Home</Nav.Link>
          <Nav.Link as={Link} to='/cv' className={`nav-links nav-border ${expanded ? 'active' : ''}`}>02 : CV</Nav.Link>
          <Nav.Link as={Link} to='/projects' className={`nav-links ${expanded ? 'active' : ''}`}>03 : Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
