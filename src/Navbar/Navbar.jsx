import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import logo from "../../images/jadelogo-removebg-preview.png"
import './navbar.css'

export default function NavBar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    
    <MDBNavbar expand='lg'  id='fcolor'  >
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
            <div id='navimg'>
                <img src={logo} alt="" />
            </div> 
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink id='navitem' href='#'>Home</MDBNavbarLink>
            <MDBNavbarLink href='#' id='navitem'>About</MDBNavbarLink>
            <MDBNavbarLink href='#' id='navitem'>Products</MDBNavbarLink>
            <MDBNavbarLink href='#' id='navitem'>Contact</MDBNavbarLink>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}