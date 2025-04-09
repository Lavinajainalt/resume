import React from 'react'
import './Professional.css'
import Professional1 from '../image/Professional1.jpeg';
import Professional2 from '../image/Professional2.jpeg';
import professional3 from '../image/Professional3.jpeg';
import professional4 from '../image/Professional4.jpeg';
import { NavLink } from 'react-router-dom';

export default function Proffessional() {
  return (
    <div>
       <div className="profession">
              <div className="protemp1">
                <img 
                  src={Professional1} 
                  alt="Professional Template Design 1" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                           <NavLink to='/Professional1'>
                           <button className='Usebtn'>Use this Template</button></NavLink>

              </div>
              <div className="protemp2">
                <img 
                  src={Professional2} 
                  alt="Professional Template Design 2" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                           <NavLink to='/Professional2'>
                           <button className='Usebtn'>Use this Template</button></NavLink>
              </div>
              <div className="protemp3">
                <img 
                  src={professional3} 
                  alt="Professional Template Design 3" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                           <NavLink to='/Professional3'>
                           <button className='Usebtn'>Use this Template</button></NavLink>
              </div>
              <div className="protemp4">
                <img 
                  src={professional4} 
                  alt="Professional Template Design 4" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                           <NavLink to='/Professional4'>
                           <button className='Usebtn'>Use this Template</button></NavLink>
              </div>
            </div>
    </div>
  )
}
