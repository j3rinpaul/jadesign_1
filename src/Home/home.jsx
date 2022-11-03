import React from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";
import HomeCard from '../Cards/homeCard'
import cardi from "../../images/PP_Paper.png"
import card2 from "../../images/ECO-LITE-Folding-A-Frame-Sign-Board-A1-Track-Trace-Social-Distance-Signs.jpg-11.png"

const more = "More -->"
function Home() {
  return (
    <div className='home'>
      <div className='headin'>
        <h2>JADESIGN ADVERTISING</h2>
        <p>
          <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString("One Stop shop for Advertising Sign Supplies and Display Products ")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Display Products")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Digital Printing Media")
            .pauseFor(1000)
            .deleteAll()
            .typeString("One Stop shop for Advertising Sign Supplies and Display Products ")
            .start();
            }}
          />
        </p>

      </div>
      <div className='link'>
        <a href='/Product'><h2>PRODUCTS</h2></a>
        <div className='wrapper'>
          <HomeCard img = {cardi} title="Eco Solvent" red="/Product" />
          <HomeCard img = {card2} title="Eco Solvent" red="/Product" />
        </div>
       
      </div>
      <div className='more'>
        <a href="/Product">{more}</a>
      </div>
      
       

    </div>
  )
}

export default Home