// creating form using emailjs in react

import React,{useRef} from 'react'
import emailjs from 'emailjs-com';
import './form.css'


const Form = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_9ouoz97", // service ID
          "template_ag4pyfh",// template ID
          form.current,
          "YCN3i6y80L3zVH5uG" // user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div className='enq'>
        <form ref={form} onSubmit={sendEmail}>
          
          <input type="text" name="user_name" className='fname' placeholder='First Name'/>
          
          <input type="text" name="name" placeholder='Last Name' className='fname'/>
          
          <input type="email" name="user_email" placeholder='Email' className='mail-id' />
          
          <textarea name="message" placeholder='Inquiry Detail' className='txt'/>
          <input type="submit" value="Sent"  id='btn' />
        </form>
      </div>
    );
  };
  
  export default Form;

