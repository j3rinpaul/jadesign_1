import React from 'react'
import './contact.css'
import Form from './form/form'
function Contact() {
  return (
    <div className='container'>
      
      <div className='textContent'>
      <h1>Contact</h1>
      <p>Feel free to get in touch with us for all your <br/>
      Advertising Products & Digital Printing Materials needs in <br/>
      Dubai & across United Arab Emirates.<br/>
      <br/>
      <br/>    
      Contact us.
      <br/>
      Jijo Joseph 
      <br/>
      +971 55 66 44 943
      <br/>
      jijo@jadesignadvertising.com</p>
  </div>
  <div className='form'>
    <h2> Enquire via </h2>
    <Form/>
  </div>
  <div className='map'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.886852779414!2d55.405507214829505!3d25.173298083907408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f613424d28557%3A0xb19aece433dfce38!2sEngland%20X10%20-%20International%20City%20-%20England%20Cluster%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1667042371246!5m2!1sen!2sin" 
      width="100%" 
      height="90%" 
      style={{ border: 0 }}
      allowFullScreen=''
      aria-hidden="false"
      tabIndex="0"
  />
  </div>
  </div>
  )
}

export default Contact
