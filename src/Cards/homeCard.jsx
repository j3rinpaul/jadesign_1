import React from 'react'
import './card.css'

function HomeCard(props) {
  return (
            <div className="hcard">
                <div  >
                    <img src={props.img} className="hcimg"/>
                </div>
                <div className="hcbody">
                    <h2 className="hctitle">{props.title}</h2>
                    <ul>
                        <button className='hcbtn'>Read More ></button>
                    </ul>
    
                    
                </div>
            </div>
        )
    }
    


export default HomeCard