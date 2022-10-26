import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Pic from "./img/jadelogo-removebg-preview.png"
import {FaFacebook,FaWhatsapp ,FaMobile,FaLink , FaPhone} from "react-icons/fa"
import './footer.css'
// import{Link} from 'react-router-dom'

let wlink = "https://wa."
export default function Footer() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted' id='footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* <div className='me-5 d-none d-lg-block' id='con'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset' id='icons'>
          <FaFacebook />
          </a>
         
        </div> */}
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" sm="4"className='mx-auto mb-4' id='div1'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={Pic} id="logo"/> 
              </h6>
              <p>
              Specialized Suppliers of Advertising Materials in UAE
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' >
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              {/* <p>
                <Link to="/products" className='text-reset' id='pro'>
                  Display Products
                </Link>
              </p> */}
              {/* <p>
                <Link to="/products" className='text-reset' id='pro'>
                  Digital Products
                </Link>
              </p> */}
              
            {/* </MDBCol> */} 

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social Media</h6>
              <p>
                <a href='https://facebook.com' target="_blank" className='text-reset' id='soc'>
                  <FaFacebook/>  Facebook
                </a>
              </p>
              <p>
                <a href={wlink} target="_blank" className='text-reset' id='soc'>
                  <FaWhatsapp/>  Whatsapp
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' >
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p id='det'>
                
                New York, NY 10012, US
              </p>
              <p id='det'>
              <FaLink/>   sales@jadesignadvertising.com
              </p>
              <p>
                <FaMobile/> + 01 234 567 88
              </p>
              <p>
                <FaPhone /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#f6f6f5' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://jadesignadvertising.com/'>
          Jadesign Advertising
        </a>
      </div>
    </MDBFooter>
  );
}