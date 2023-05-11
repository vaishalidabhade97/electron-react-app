import React from "react";
import { Nav, NavLink, Navbar, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav>
                <Image src={require("../../github-mark-white.png")} width={25} height={25} style={{ margin: 5, marginLeft: 30, marginRight: 30  }}/>
                <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                <NavLink  eventKey="2" as={Link} to="/about">About</NavLink>
                <NavLink  eventKey="3" as={Link} to="/calculator">Calculator</NavLink>
                
            </Nav>      
        </Navbar.Collapse> 
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={<Image src={require("../../github-mark-white.png")} width={25} height={25} style={{ marginRight: 5  }}/>}
          menuVariant="dark"
          style={{paddingRight: 20}}
          align="end"
        >
          <NavLink  eventKey="1" as={Link} to="/profile" style={{color: 'gray'}}>Profile</NavLink>
          <NavLink  eventKey="2" as={Link} to="/signup" style={{color: 'gray'}}>Sign Up</NavLink>
          <NavLink  eventKey="3" as={Link} to="/signin" style={{color: 'gray'}}>Sign In</NavLink>
        </NavDropdown>
      </Navbar>
    )
}

export default Navigation