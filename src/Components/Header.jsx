import React from 'react'
import parrot from "../assets/images/parrot.png"
export default function Header() {
  return (
    <div  className='header'>   
     <div className='header-container'>
        <img src={parrot} alt="" width="70px" height="70px" />
        <div>
          <h1>PolyGlot</h1>
          <span>Prefect Translation Every Time</span>
        </div>

    </div>
    </div>
  )
}
