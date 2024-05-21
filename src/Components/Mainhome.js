import React from "react";
import fn from './Fn.png'
import './Mainhome.css'
import { TypeAnimation } from 'react-type-animation';


export default  function Mainhome()
{
   return(
   <>
  <div className="Main-container container-fluid h-md-100 h-100">
      <div className="row h-100">
        <div className="col-md-7 d-flex flex-column justify-content-center p-5">
          <h1 className="mb-5 ml-3">Hello, I am Kishore</h1>
      
          <TypeAnimation
            sequence={[
              'Software Developer',
              1000,
              'Claysys Technology',
              1000,
              'in Kochi-Coimbatore',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', marginLeft: '10px',marginBottom:'20%' }}
            repeat={Infinity}
          />
        </div>
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img src={fn} alt="Kishore Photo" className="img-fluid mb-5 mr-5" />
        </div>
      </div>
    </div>
   </>)
  
}

