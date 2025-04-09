import React from 'react';
import Simple1 from '../image/Simple1.jpeg';
import Simple2 from '../image/Simple2.jpeg';
import Simple3 from '../image/Simple3.jpeg';
import Simple4 from '../image/Simple4.jpeg';
import Modern1 from '../image/Modern1.jpeg';
import Modern2 from '../image/Modern2.jpeg';
import Modern3 from '../image/Modern3.jpeg';
import Modern4 from '../image/Modern4.jpeg';
import Professional1 from '../image/Professional1.jpeg';
import Professional2 from '../image/Professional2.jpeg';
import professional3 from '../image/Professional3.jpeg';
import professional4 from '../image/Professional4.jpeg';
import './Alltemplate.css';
import { NavLink } from 'react-router-dom';

export default function Alltemplate() {
  return (
    <div>
      <div className="templatesimple">
        
        <div className="tempsimp1">
        <div className="templ">
          <img 
            src={Simple1} 
            alt="Simple Template Design 1" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Simple1'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        
         
        </div>
        <div className="tempsimp2">
        <div className="templ">
          <img 
            src={Simple2} 
            alt="Simple Template Design 2" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Simple2'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="tempsimp3">
        <div className="templ">
          <img 
            src={Simple3} 
            alt="Simple Template Design 3" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Simple3'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="tempsimp4">
        <div className="templ">
          <img 
            src={Simple4} 
            alt="Simple Template Design 4" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Simple4'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
      </div>

      <div className="moderntemp">
        <div className="tempmod1">
        <div className="templ">
          <img 
            src={Modern1} 
            alt="Modern Template Design 1" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Modern1'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="tempmod2">
        <div className="templ">
          <img 
            src={Modern2} 
            alt="Modern Template Design 2" 
            loading="lazy"
            width="400"
            height="300"

          /></div>
                    <NavLink to='/Modern2'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="tempmod3">
        <div className="templ">
          <img 
            src={Modern3} 
            alt="Modern Template Design 3" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Modern3'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="tempmod4">
        <div className="templ">
          <img 
            src={Modern4} 
            alt="Modern Template Design 4" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Modern4'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
      </div>

      <div className="profession">
        <div className="protemp1">
        <div className="templ">
          <img 
            src={Professional1} 
            alt="Professional Template Design 1" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
                    <NavLink to='/Professional1'>
                    <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="protemp2">
        <div className="templ">
          <img 
            src={Professional2} 
            alt="Professional Template Design 2" 
            loading="lazy"
            width="400"
            height="30"
          /></div>
          <NavLink to='/Professional2'>
          <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="protemp3">
        <div className="templ">
          <img 
            src={professional3} 
            alt="Professional Template Design 3" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
          <NavLink to='/Professional3'>
          <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
        <div className="protemp4">
        <div className="templ">
          <img 
            src={professional4} 
            alt="Professional Template Design 4" 
            loading="lazy"
            width="400"
            height="300"
          /></div>
          <NavLink to='/Professional4'>
          <button className='Usebtn'>Use this Template</button></NavLink>
        </div>
      </div>
    </div>
  );
}
