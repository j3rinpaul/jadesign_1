import React from 'react'
import Cards from "../Cards/Card"
import "./product.css"


const data = [
  {"title":"Eco Solvent Vinyl",
    "img":"../../images/Eco Solvent PP Paper.png",
    "desc":["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
  },
  {"title":"Eco Solvent PP Paper",
    "img":"../../images/Inkjet-PP-Synthetic-Paper-for-Eco-Solvent-150_.png",
    "desc": ["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
  },
  {"title":"Lamination",
    "img":"../../images/plastic-lamination-films-500x500-removebg-preview.png",
    "desc": ["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
  },
  {"title":"Floor Lamination",
    "img":"../../images/Floor Lamination.jpg",
    "desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
  },
  {"title":"Mounting Film",
    "img":"../../images/MountingFilm.png",
    "desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
  },
  {"title":"Backlit Film",
    "img":"../../images/backlit.png",
    "desc":["1.07 x 30m","1.27 x 30m","1.52 x 30 m"]
  },
  {"title":"Canvas",
    "img":"../../images/Canvas.png",
    "desc":["1.07 x 18m","1.27 x 18m","1.52 x18 m"]
  },
  {"title":"One Way Vision",
    "img":"../../images/Onewayvision.png",
    "desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
  },
  {"title":"Window Film",
    "img":"../../images/WindowFilm.png",
    "desc":["1.52 x 30m"]
  },
  {"title":"Frosted Sticker",
    "img":"../../images/FrostedSticker.png",
    "desc":["1.22 x 50m"]
  },
  {"title":"Reflective Sticker",
    "img":"../../images/ReflectiveSticker.png",
    "desc":["1.24 x 50m"]
  },    
]

const data2 = [
  {"title":"FrontLit Banner",
    "img":"../../images/FrontlitBanner.png",
    "desc":["Density:440 gsm","510 gsm",
    "Size: 1.07 m ,1.10 m,1.27 m ,1.37 m ,1.52m, 1.60m, 1.83m ,2.02m, 2.22m ,2.25m, 3.22m",
    "Length: 50 m"]
  },
  {"title":"Backlit FLex",
    "img":"../../images/Backlit-flex.png",
    "desc":["Density : 560 Gsm,610 Gsm",
    "Size : 1.65m2,2.02m,2.60m,3.20m",
    "Length:50 m"]
  },
  {"title":"FrontLit Banner",
    "img":"../../images/FrontlitBanner.png",
    "desc":["Density:440 gsm","510 gsm",
    "Size: 1.07 m ,1.10 m,1.27 m ,1.37 m ,1.52m, 1.60m, 1.83m ,2.02m, 2.22m ,2.25m, 3.22m",
    "Length: 50 m"]
  },
  {"title":"FrontLit Banner",
    "img":"../../images/FrontlitBanner.png",
    "desc":["Density:440 gsm","510 gsm",
    "Size: 1.07 m ,1.10 m,1.27 m ,1.37 m ,1.52m, 1.60m, 1.83m ,2.02m, 2.22m ,2.25m, 3.22m",
    "Length: 50 m"]
  },
  {"title":"FrontLit Banner",
    "img":"../../images/FrontlitBanner.png",
    "desc":["Density:440 gsm","510 gsm",
    "Size: 1.07 m ,1.10 m,1.27 m ,1.37 m ,1.52m, 1.60m, 1.83m ,2.02m, 2.22m ,2.25m, 3.22m",
    "Length: 50 m"]
  },
  {"title":"FrontLit Banner",
    "img":"../../images/FrontlitBanner.png",
    "desc":["Density:440 gsm","510 gsm",
    "Size: 1.07 m ,1.10 m,1.27 m ,1.37 m ,1.52m, 1.60m, 1.83m ,2.02m, 2.22m ,2.25m, 3.22m",
    "Length: 50 m"]
  }
]


function Product() {
  return (
    <div  >
      <div className='uk'>
      <h2>Digital Printing Media</h2>
      </div>
       <div className='wrapper1' >
       {data.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc}  />)
        })}
       </div>
      <div className='uk'>
      <h2>Digital Product</h2>
      </div>
       <div className='wrapper1' >
       {data2.map((data,index)=>{
          return(<Cards id={index} img={data.img} title={data.title} desc={data.desc}  />)
        })}
       </div>
    </div>
  )
}

export default Product