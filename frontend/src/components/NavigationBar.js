import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Searchbar from './Searchbar';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand style={{color: "#ffd11a"}} href="https://www.youtube.com/channel/UC570LhUZtzfMdwWbprUWwfw">Soccster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item>
            <Nav.Link>
              <Link to="/training">Individual Training</Link>
            </Nav.Link>
          </Nav.Item> 
          <Nav.Item>
            <Nav.Link>
              <Link to="/drills">Drills</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/create">Create</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Searchbar/>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
    
  
   
