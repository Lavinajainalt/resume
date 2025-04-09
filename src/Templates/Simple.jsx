import React from 'react'
import simple1 from '../image/Simple1.jpeg';
import Simple2 from '../image/Simple2.jpeg';
import Simple3 from '../image/Simple3.jpeg';
import Simple4 from '../image/Simple4.jpeg';
import './Simple.css'
import { NavLink } from 'react-router-dom';

export default function Simple() {
  return (
    <div>
       <div className="templatesimple">
              <div className="tempsimp1">
                <img 
                  src={simple1} 
                  alt="Simple Template Design 1" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                                    <NavLink to='/Simple1'>
                                    <button className='Usebtn'>Use this Template</button></NavLink>
              </div>
              <div className="tempsimp2">
                <img 
                  src={Simple2} 
                  alt="Simple Template Design 2" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                                    <NavLink to='/Simple2'>
                                    <button className='Usebtn'>Use this Template</button></NavLink>
              </div>
              <div className="tempsimp3">
                <img 
                  src={Simple3} 
                  alt="Simple Template Design 3" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                                    <NavLink to='/Simple3'>
                                    <button className='Usebtn'>Use this Template</button></NavLink>
              </div>
              <div className="tempsimp4">
                <img 
                  src={Simple4} 
                  alt="Simple Template Design 4" 
                  loading="lazy"
                  width="400"
                  height="300"
                />
                                    <NavLink to='/Simple4'>
                                    <button className='Usebtn'>Use this Template</button></NavLink>
              </div>
            </div>
      
           
            

    </div>
  )
}
