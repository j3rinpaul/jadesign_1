import React from 'react'
import Cards from "../Cards/Card"
import "./product.css"




const data = [
  {"title":"Eco Solvent Vinyl",
    "img":"/images/Eco Solvent PP Paper.png",
    "desc":["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
  },
  {"title":"Lamination",
  "img":"/images/plastic-lamination-films-500x500-removebg-preview.png",
  "desc": ["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
},
{"title":"Floor Lamination",
"img":"/images/Floor Lamination.jpg",
"desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
},
{"title":"Mounting Film",
"img":"/images/MountingFilm.png",
"desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
},
{"title":"Backlit Film",
"img":"/images/backlit.png",
"desc":["1.07 x 30m","1.27 x 30m","1.52 x 30 m"]
},
{"title":"Canvas",
"img":"/images/Canvas.png",
"desc":["1.07 x 18m","1.27 x 18m","1.52 x18 m"]
},
{"title":"Eco Solvent PP Paper",
  "img":"/images/Inkjet-PP-Synthetic-Paper-for-Eco-Solvent-150_.png",
  "desc": ["0.92 x 50m","1.07 x 50m","1.27 x 50m","1.37 x 50m","1.52 x 50 m"]
},
  {"title":"One Way Vision",
    "img":"/images/Onewayvision.png",
    "desc":["1.07 x 50m","1.27 x 50m","1.52 x 50 m"]
  },
  {"title":"Window Film",
    "img":"/images/WindowFilm.png",
    "desc":["1.52 x 30m"]
  },
  {"title":"Frosted Sticker",
    "img":"/images/FrostedSticker.png",
    "desc":["1.22 x 50m"]
  },
  {"title":"Reflective Sticker",
    "img":"/images/ReflectiveSticker.png",
    "desc":["1.24 x 50m"]
  },    
]

const data2 = [
  
  {"title":"2 x 3 Pop-Up Curved",
    "img":"/images/PopUpCurved.png",
    "desc":["Front Visible Area:192 x 230 cm",
    "Printable Area:274 x 230 cm"]
  },
  {"title":"3 x 3 Pop-Up Curved",
    "img":"/images/Pop_Up_Curved.png",
    "desc":["Front Visible Area : 202 x 230 cm",
    "Printable Area : 334 x 230 cm"]
  }
  ,
  {"title":"2 x 3 Pop-Up Straight",
    "img":"/images/PopUpStraight.png",
    "desc":["Front Visible Area : 192 x 230 cm",
    "Printable Area : 274 x 230 cm"]
  }
  ,
  {"title":"3 x 3 Pop-Up Straight",
    "img":"/images/3x3.png",
    "desc":["Front Visible Area : 277 x 230 cm",
    "Printable Area : 344 x 230 cm"]
  },
  {"title":"FrontLit Banner",
    "img":"/images/FrontlitBanner.png",
    "desc":["Density:440 gsm","510 gsm",
    "Size: 1.07 m ,1.10 m,1.27 m ,1.37 m ,1.52m, 1.60m, 1.83m ,2.02m, 2.22m ,2.25m, 3.22m",
    "Length: 50 m"]
  },
  ,
  {"title":"4 x 3 Pop-Up Curved",
    "img":"/images/PopUpCurved.png",
    "desc":["Front Visible Area : 332 x 230 cm",
    "Printable Area : 414 x 230 cm"]
  },
  {"title":"Backlit FLex",
    "img":"/images/Backlit-flex.png",
    "desc":["Density : 560 Gsm,610 Gsm",
    "Size : 1.65m2,2.02m,2.60m,3.20m",
    "Length:50 m"]
  },
  {"title":"Coated Banner",
    "img":"/images/CoatedBanner.png",
    "desc":["Density:560 gsm,610 gsm",
    "Size : 1.65m2,2.02m,2.60m,3.20m",
    "Length : 50 m"]
  },
  {"title":"Black Back Banner",
    "img":"/images/blackbackbanner.png",
    "desc":["Density:440 gsm,510 gsm",
    "Size: 1.07 m,1.10 m,1.22 m,1.27 m,1.37 m,1.52m,1.60m,1.83m,2.02m,2.22m,2.25m,3.22m",
    "Length:50 m"]
  },

  ,
  {"title":"4 x 3 Pop-Up Straight",
    "img":"/images/3x4popup.png",
    "desc":["Front Visible Area : 362 x 230 cm",
    "Printable Area : 434 x 230 cm"]
  }
  ,
  {"title":"3 x 3 Fabric Pop Up Stand",
    "img":"/images/popupstand.png",
    "desc":["Front Visible Area:225 x 223 cm",
    "Printable Area:295 x 223 cm"]
  }
  ,
  {"title":"4 x 3 Fabric Pop Up Stand",
    "img":"/images/4x3fabric.png",
    "desc":["Front Visible Area : 297 x 223 cm",
    "Printable Area : 367 x 223 cm"]
  }
  ,
  {"title":"Adjustable BackDrop Stand",
    "img":"/images/backdrop.png",
    "desc":["Size : 240 x 240 cm"]
  }
  ,
  {"title":"Tension Fabric Stand",
    "img":"/images/tensionfabric.png",
    "desc":["Size : 220 x 220 cm ,220 x 300 cm"]
  }
  ,
  {"title":"Fabric Pop Up Stand",
    "img":"/images/fabricpopup.png",
    "desc":["Size : 240 x 240 cm"]
  }
  ,
  {"title":"Roll Up Stand",
    "img":"/images/rollupstand.png",
    "desc":["Size : 85 x 200 cm , 100 x 200 cm , 120 x 200 cm , 150 x 200 cm , 200 x 200 cm , 240 x 200 cm"]
  }
  ,
  {"title":"TearDrop Flag",
    "img":"/images/teardrop.png",
    "desc":["Small : 85 x 210 cm","Medium : 110 x 262 cm","Large : 100 x 333 cm"]
  }
  ,
  {"title":"L-Banner",
    "img":"/images/adver.png",
    "desc":["Small : 90 x 200 cm","Medium : 90 x 300 cm","Large : 90 x 400 cm"]
  }
  ,
  {"title":"Advertising Flag",
    "img":"/images/adver.png",
    "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  }
  ,
  {"title":"3x3 Tent",
    "img":"/images/tent.png",
    "desc":["Small : 90 x 200 cm","Medium : 100 x 500 cm","Large : 100 x 600 cm"]
  }
  ,
  {"title":"Curved Top Flag",
    "img":"/images/curved.png",
    "desc":["Small : 85 x 200 cm","Medium : 85 x 300 cm","Large : 85 x 400 cm"]
  }
  ,
  {"title":"Mini Roll Up Stand",
    "img":"/images/minirollup.png",
    "desc":["Size : 85 x 200 cm , 100 x 200 cm , 120 x 200 cm , 150 x 200 cm , 200 x 200 cm , 240 x 200 cm"]
  }
  ,
  {"title":"X-Banner Stand",
    "img":"/images/xbannerstand.png",
    "desc":["Size : 85 x 200 cm , 100 x 200 cm , 120 x 200 cm , 150 x 200 cm , 200 x 200 cm , 240 x 200 cm"]
  }
  ,
  {"title":"BroadBase Roll Up Stand",
    "img":"/images/broadbase.png",
    "desc":["Size : 85 x 200 cm , 100 x 200 cm , 120 x 200 cm , 150 x 200 cm , 200 x 200 cm , 240 x 200 cm"]
  }
  ,
  {"title":"Info Board Stand",
    "img":"/images/info.png",
    "desc":["Size : A4 , A3"]
  }
  ,
  {"title":"A-Board Stand",
    "img":"/images/ECO-LITE-Folding-A-Frame-Sign-Board-A1-Track-Trace-Social-Distance-Signs.jpg-1.png",
    "desc":["Size : 100 x 70 cm , A2 , A1"]
  }
  ,
  {"title":"Photo Frame",
    "img":"/images/photo.png",
    "desc":["Size : A4 , A3 ,A2 , A1 , A0"]
  }
  ,
  {"title":"Zig Zag Broucher Stand",
    "img":"/images/brouchure.png",
    "desc":["Size : A4 , A3 "]
  }
  ,
  {"title":"Easel Stand",
    "img":"/images/easel.png",
    "desc":["Size : A2 , A1 , A0"]
  }
  ,
  {"title":"White Board",
    "img":"/images/board.png",
    "desc":["Size : 60 x 90 cm , 90 x 120 cm , 90 x 180 cm"]
  }
  ,
  {"title":"Promotional Table",
    "img":"/images/promo.png",
    "desc":["Size : 85 x 82 x 41 cm"]
  }
  ,
  {"title":"Pop Up Table",
    "img":"/images/popuptable.png",
    "desc":["Size : 0.94 x 1.3 x  0.4 m"]
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
      <h2>Display Products</h2>
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