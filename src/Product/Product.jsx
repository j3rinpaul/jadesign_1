import React from 'react'
import Cards from "../Cards/Card"
import "./product.css"
import logo from "../../images/ECO-LITE-Folding-A-Frame-Sign-Board-A1-Track-Trace-Social-Distance-Signs.jpg-1.png"

function Product() {
  return (
    <div  >
      <div className='uk'>
      <h2>Display Product</h2>
      </div>
       <div className='wrapper1' >
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
       </div>
      <div className='uk'>
      <h2>Digital Product</h2>
      </div>
       <div className='wrapper1' >
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
        <Cards img={logo} title="Eco-friendly Paint" desc={["9.12",'fg','dfg']} />
       </div>
    </div>
  )
}

export default Product