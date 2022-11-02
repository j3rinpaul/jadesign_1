import React from 'react'
import './card.css'
import {} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function HomeCard(props) {
  return (
            <div className="hcard">
                <div  >
                    <img src={props.img} className="hcimg"/>
                </div>
                <div className="hcbody">
                    <h2 className="hctitle">{props.title}</h2>
                    <ul>
                        <Link to={props.red}>
                        <button className='hcbtn'>Read More ></button>
                        </Link>
                    </ul>
    
                    
                </div>
            </div>
        )
    }
    


export default HomeCard