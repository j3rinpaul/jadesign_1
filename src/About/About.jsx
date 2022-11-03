import React from 'react'
import './about.css'
function About() {
  return (
    <div className='body'>
      <div className='text'>
        <h1>COMPANY PROFILE</h1>
        <p>
      JADE SIGN ADVERTISING REQUISITES TRADING L.L.C. is one of the specialized suppliers of Advertising Materials & Digital Printing Media 
      Products ranging from Pop Up, Rollup, Brochure Stands, Pop Up Table, Sales Promotion Table, X Banner Stand, Backdrop Stand, Information
      Board, Snap Frame, A Board, Q Barrier Stand, Light Box, Flags, Eco-Solvent Vinyl, Lamination, Floor Lamination, Eco- Solvent PP Paper,
        Rollup Media, Dura trance /Backlit Film, Eco-Solvent Cotton Canvas, Banner, Flex, Foam Board, Forex Sheet, Corrugated Sheet, ACP, Acrylic 
        Products etc. We deliver our products with standard quality with competitive prices. We have a team of qualified dedicated 
        <br/>
        professionals & staff who make comprehensive use of the latest technologies available to give you the very best solution to your advertising and Sign product needs.
      We are supported by an experienced and talented management team of well qualified professionals, technicians who have in depth knowledge about all aspects of our advertising, Sign & Printing Industry
        </p>
      <div className='dwnld'>
        <a href="./Jade Sign.pdf" download="Jade Sign.pdf" >
                <button id='butn'>Download Brochure</button>
        </a>
        </div>
      </div>
      <div className='card-content'>
        <div className='card'>
          <h3>Our Vision </h3>
          
          <p><br/><br/>To become one of the reliable one stop
            suppliers of Advertising Products &
            Digital Printing Materials in UAE &
            MIDDLEEAST
            <br/><br/>
            </p>
        </div>
        <div className='card'>
          <h3>Why JADE SIGN?</h3>
          <p>
            One stop suppliers for Advertising
            <br/>
            Products & Digital Printing Materials
            <br/>
            Quality & Sophisticated services
            <br/>
            Nominal prices<br/>
            Capable to handle large quantity<br/>
            on-Time product delivery<br/>
          </p>
        </div> 
        <div className='card'>
          <h3>Customer Satisfaction </h3>
          <p><br/>
          We also provide customized facility to
          meet the specific requirement of our
          customers and ensure customer
          satisfaction at all stage.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About