import React from 'react';
import './Contact.css';
import { NavLink } from 'react-router-dom';
import Callr from '..//image/Callr.webp';


export default function Contact() {
  return (
    <main>
      <header className="contact-class">
        <h1 className='contact'>Contact Us</h1>
        <p>Want to get in touch? Learn how you can reach us</p>
      </header>
      <div className="textbox">
      <div className="contact-textbox">
          <h2>How can we help?</h2>
        </div>
        
      <section className="contact-iteams">
      
        <div className="contact-list">
          <h4>Help center</h4>
          <p>Find articles, videos, and more resources about how Trustpilot works.</p>
          <button  className='but1' aria-label="Go to help center">
            <NavLink to='/Help'>Go to help Center</NavLink>
          </button>
        </div>

        <div className="contact-list1">
          <h4>Press site</h4>
          <p>For editiorial, media, and press inquiries.</p>
          <button  className='but1' aria-label="Go to press site">
            <NavLink to='/Press'>Go to press site</NavLink>
          </button>
        </div>
      </section>

      <section className="contact-items1">
        <div className="contact-list2">
          <h4>Sales and pricing</h4>
          <p>Ask about our plans, upgrades, services, and more.</p>
          <button  className='but1' aria-label="Go to sales and pricing">
            <NavLink to='/Sales'>Go to sales and pricing</NavLink>
          </button>
        </div>

        <div className="contact-list3">
          <h4>Support</h4>
          <p>Get help with account, billing, and more.</p>
          <button className='but1' aria-label="Go to support">
            <NavLink to='/Support'>Go to support</NavLink>
          </button>
        </div>
      </section></div>
     
  
        <div className="conimg">
  <img 
    src={Callr} 
    alt="Contact support" 
    loading="lazy"
  /></div>
      <div className="contact-call">
  <div className="contact-call-text">
    <h3>Call us</h3>
    <p>Monday to Friday, 9am to 5pm (GMT+1)</p>
    <p>+0000000000000000</p>
    <button className="contact-call-button">Call us</button>
  </div>
  <div className="contact-call-text">
    <h3>Chat with us</h3>
    <p>Monday to Friday, 9am to 5pm (GMT+1)</p>
    <p>+0000000000000000</p>
    <button className="contact-call-button">Chat with us</button>
  </div>
  <div className="contact-call-text">
    <h3>Email us</h3>
    <p>We'll respond within 24 hours</p>
    <p>support@example.com</p>
    <button className="contact-call-button">Email us</button>
  </div>

</div>

<div className="about-footer">
    <footer className="end-part">
      <div className="end-list">
        <nav>
          <div className="footer-section">
            <h4>Job seekers</h4>
            <ul>
              <NavLink to='/Template'>
              <li>Build a resume</li>   </NavLink>
              <NavLink to='/Template'>
              <li>Samples</li> </NavLink>
              <NavLink to='/Template'>
              <li>Cover letter samples</li>
            </NavLink>
            <NavLink to='/Sales'>
              <li>Apps</li></NavLink>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Need Help?</h4>
            <ul>
              <NavLink to='/Help'>
              <li>Help Center</li> </NavLink>
              <NavLink to='/About'>
              <li>About us</li></NavLink>
              <NavLink to='/Press'>
              <li>Sitemap</li> </NavLink>
            </ul>

          </div>
          <div className="footer-section">
            <h4>Employers</h4>
            <ul>
              <li>Post a job</li>
              <li>Find a candidate</li>
              <li>Apps</li>
            </ul>
          </div>
          


        
        </nav>
        <div className="endat">
          <div className="end">
            <p>© 2024 Resume-lite, Inc. All rights reserved.</p>
          </div>
          <div className="end">
            <NavLink to='/Privacy'>
            <p>Privacy Policy</p></NavLink>
          </div>
          <div className="end">
            <NavLink to='/Terms'>
            <p>Terms</p> </NavLink>
          </div>
          <div className="end">
            <p>Cookie Policy</p>
          </div>
          <div className="end">
            <p>Assesscible at resumelite.com</p>
          </div>

          <br />
          <br />
        </div>
      </div>
    </footer>
  </div>     
    </main>
  );
}
