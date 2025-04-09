import React from 'react'
import './Modern.css';
import Modern1 from '../image/Modern1.jpeg';
import Modern2 from '../image/Modern2.jpeg';
import Modern3 from '../image/Modern3.jpeg';
import Modern4 from '../image/Modern4.jpeg';
import { NavLink } from 'react-router-dom';
export default function Modern() {
  return (
    <div>
          <div className="moderntemp">
            <div className="tempmod1">
              <img 
                src={Modern1} 
                alt="Modern Template Design 1" 
                loading="lazy"
                width="400"
                height="300"
              />
              <NavLink to='/Modern1'>
              <button className='Usebtn'>Use this Template</button></NavLink>
            </div>
            <div className="tempmod2">
              <img 
                src={Modern2} 
                alt="Modern Template Design 2" 
                loading="lazy"
                width="400"
                height="300"
              />
              <NavLink to='/Modern2'>
              <button className='Usebtn'>Use this Template</button></NavLink>
            </div>
            <div className="tempmod3">
              <img 
                src={Modern3} 
                alt="Modern Template Design 3" 
                loading="lazy"
                width="400"
                height="300"
              />
              <NavLink to='/Modern3'>
              <button className='Usebtn'>Use this Template</button></NavLink>
            </div>
            <div className="tempmod4">
              <img 
                src={Modern4} 
                alt="Modern Template Design 4" 
                loading="lazy"
                width="400"
                height="300"
              />
              <NavLink to='/Modern4'>
              <button className='Usebtn'>Use this Template</button></NavLink>
            </div>
          </div>
    </div>
  )
}
