
import React from 'react'
import "./footer.css"
import {
  AiOutlineWhatsApp,
  AiOutlineTwitter
} from "react-icons/ai"
import logo from "../../images/jadelogo-removebg-preview.png"

function Footer() {
  return (
    <div className='footer'> 

        <div className='img'>
            <img src={logo} alt="" />
  
        </div>

        <div className='details'>
          <a href=''><p>Jadesign @ 2022</p></a>
          
  
        </div>

        <div className='icons'>
          <a href=""><AiOutlineWhatsApp className='icon1'/></a>
          <a href=""><AiOutlineTwitter className='icon2'/></a>
        </div>
    </div>
  )
}

export default Footer