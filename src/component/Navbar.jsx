import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Unnamed from '../image/Unnamed.png'


export default function Navbar() {
  return (
    <div className='main'>
      <div className="mainlog">
  <div className="imglog">
    <img 
      src={Unnamed} 
      alt="Resume-Lite Logo" 
      height={50} 
      width={50} 
    />
  </div>
  <div className="logo">
    <h3 className="logo-text">Resume-Lite</h3>
  </div>
</div>

        <div className="navhead">
        <div className="divmain">
        <NavLink to="/">Home</NavLink></div>
        <div className="divmain">
        <NavLink to="/about">About</NavLink></div>
        <div className="divmain">
       
        <NavLink to="/contact">Contact</NavLink> </div>
        </div>
        <div className="combine">
       
        <div className="template">
            <NavLink to="/template">Getstarted</NavLink>
        </div></div>
    </div>
  )
}
