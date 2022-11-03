import React from 'react'
import "./card.css"
import { useState } from "react";


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0,0.01) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? <button className='cbtn'>Description</button> : <button className='cbtn1'>Show less</button>}
        </span>
      </p>
    );
  };



function Cards(props) {

    return(
        <div className="card">
            <div  >
                
                <img src={props.img} className="cimg"/>
            </div>
            <div className="cbody">
                <h2 className="ctitle">{props.title}</h2>
                {console.log(props.desc)}
                <ul>
                <ReadMore>

                    {props.desc.map((id,d)=>{
                        return(<li id={d}>{id}</li>)
                    })}
                </ReadMore>
                </ul>

                
            </div>
        </div>
    )
}

export default Cards