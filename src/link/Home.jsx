import React from 'react'
import { motion ,stagger,variants } from 'framer-motion';
import Latptop from '../image/Latptop.webp';
import Line from '../image/Line.webp';
import Phone from '../image/Phone.webp';

import { NavLink } from 'react-router-dom'
import Screes from '../image/Screes.png';
import './Home.css';
import firstimg from '../image/firstimg.png';
import second from '../image/second.png'; 
import third from '../image/third.png';
import fourth from '../image/fourth.png';
import resumebuild from '../image/resumebuild.gif';
import xlg from '../image/xlg.jpeg';
import xlgp from '../image/xlgp.jpeg';
import download from '../image/download.jpeg';
import photo  from '../image/photo.png';
import FancyCarousel from 'react-fancy-circular-carousel';
 import 'react-fancy-circular-carousel/FancyCarousel.css'
import slideone from '../image/slideone.png';
import slide2 from '../image/slide2.jpg';
import slide3 from '../image/slide3.jpg'
import slde4 from '../image/slde4.jpg';
import slide5 from '../image/slide5.webp';
import slide4 from '../image/slide4.webp';
import Facebook from '../image/Facebook.png';
import Instagram from '../image/Instagram.png';
import Twitter from '../image/Twitter.png';
import Linkedin from '../image/Linkedin.png';
import Getgoogle from '../image/Getgoogle.png';
import Apple from '../image/Apple.png';

 
  
const fadeInUpAnimation = {
  hidden: { opacity: 0, y: 50 },
  Show: { opacity: 1, y: 0 ,
    transition: {
      duration: 1,
      
      staggerChildren: 0.5,
    },
    
  },
};
  const carouselImages = [
    { src: slideone },
    { src: slide2 },
    { src: slide3 },
    { src: slde4 },
    { src: slide5 },
    { src: slide4 },
   
  ];

  

export default function () {
  return (
    <div>

<div className="head">
  <div className="homediv">
    <div className="headh1">
   
    <motion.div className="homehead"
    initial='hidden'
    animate='Show'
    variants={fadeInUpAnimation}

    >
   
    <motion.h3
  
  variants={fadeInUpAnimation}
    >  Online Resume Bulider :</motion.h3>
  
      <motion.p
  
    variants={fadeInUpAnimation}
      >Build your resume in minutes with our easy-to-use resume builder.</motion.p>
      <motion.p 
      
        variants={fadeInUpAnimation}
      >Resume-lite is a free online resume builder that helps you create a professional resume in minutes.</motion.p>
    </motion.div>
    <NavLink to='/Template'>
    <div className="homebtn">
    
      <button className='btn'>Create Resume</button>
    
      
    </div>  </NavLink>
    </div>
  </div>
  <div className="homeimg1">
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  <div className="homeimg">
    <div className="laptop">
  <img src={Latptop} alt="" /></div>
  <div className="line">
  <img src={Line} alt="" /></div>
  <div className="phone">
  <img src={Phone} alt="" /></div>

</div>
</div>
</div>

<div className='homesecond'>
<div className="homecontent">
  
  <h1>Make a Resume That Gets Results
  </h1>
  <div className="homeimg2">
    <img src={firstimg} alt="" />
    <p>Choose a recruiter-approved template</p>
  </div>
  <div className="homeimg2">
    <img src={second} alt="" />
    <p>Add skills and bullet points in one click</p>
  </div>
  <div className="homeimg2">
    <img src={third} alt="" />
    <p>Finish your resume in minutes</p>
  </div>
  <div className="homeimg2">
    <img src={fourth} alt="" />
    <p>Download your resume in seconds</p>
  </div>
  <div className="homebtn2">
    <NavLink to='/Template'>
    <button className='btn'>Create Resume</button>
    </NavLink>
</div>

</div>
</div>
<div className="use">
  <div className="why">
    <h1>Why Use Resume-lite?</h1>
    <div className="whydiv">
      <div className="whydiv1">
        <h3>Free</h3>
        <p>Resume-lite is completely free to use.</p>
      </div>
      <div className="whydiv1">
        <h3>Easy to Use</h3>
        <p>Resume-lite is easy to use and requires no prior experience.</p>
      </div>
      <div className="whydiv1">
        <h3>Customizable</h3>
        <p>Resume-lite allows you to customize your resume to your liking.</p>
      </div>
      <div className="whydiv1">
        <h3>Fast</h3>
        <p>Resume-lite is fast and easy to use.</p>
      </div>
      </div>
  </div>
  <div className="useimg">
    <img src={resumebuild} alt="" />
  </div>
</div>
<div className="change">


<div className="coloror">
 
  <div className="clr">
<div className="square"></div>
   
  </div>
  <div className="clo">
    <h3>Custom Resume Templates</h3>
    <p>Elevate the appeal of your resume by designing a truly unique and eye-catching template. With a plethora of customization options at your disposal, you can create a resume style that truly reflects your individuality and makes you stand out.</p>
  <ul>
    <li>Add additional resume sections</li>
    <li>Customize the layout</li>
    <li>Choose from a variety of color schemes</li>
    <li>Customize the font</li>
    <li>Edit section heading tex</li>
    <li>Add a photo</li>
    <li>Add a summary</li>
    <li>Add a list of skills</li>
    <li>Add a list of work experience</li>
    <li>Add a list of education</li>
    <li>Add a list of certifications</li>

    
  </ul>
  <div className="butchange">
    <NavLink to='/Template'>
    <button className='btn2'>Build a stand out Resume</button>
    </NavLink>
  </div>
  </div>

</div> 
 </div>
<div className="photo">
  <div className="classpass">
    <div className="format">
      <h6>Field-Tested Resume Format</h6>
    </div>
    <h3>Build your resume quickly and easily</h3>
    <div className="para">
      <p>Follow simple steps and write about yourself.</p>
    </div>
    <div className="para">
      <p>Wozber will be providing you with tips and examples to make sure you use the best industry practices.</p>
    </div>
    <div className="para">
      <p>As a result, you will get a job-winning resume and cover letter. A piece of cake!</p>
    </div>
  </div>
  
  <div className="formimg">
  
    <div className="ring"></div>
    <div className="ring"></div> 
    <img 
      src={photo} 
      alt="Resume format preview"
      loading="lazy"
    />
  </div>
</div>

  <div>
    <div className="cour">
      <div className="carousel">
        <FancyCarousel 
          images={carouselImages.map(img => img.src)}
          carouselRadius={200}
          peripheralImageRadius={50}
          centralImageRadius={120}
          autoRotateTime={2}
          borderWidth={4}
          borderHexColor={'1c364f'}
        />
      </div>
      <div className="context">
        <div className="cont">
          <div className="divcourser">
          <h1>Resume-lite is the best way to build a resume.</h1>
          <p>Resume-lite is a free online resume builder that helps you create a professional resume in minutes.</p>
          <p>With Resume-lite, you can create a resume that is tailored to your needs and that will get you hired.</p>
          <p>Resume-lite is a great way to build a resume that will get you hired.</p>
</div>
<div className="divcourser"></div>

          <div className="butchange">

            <NavLink to='/Template'>
            <button className='btn2'>Build a stand out Resume</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>


<footer className="footer">
  <div className="footer-content">

    <div className="footer-section">
      <h3>Resume-lite</h3>
      <p>Create professional resumes in minutes with our easy-to-use builder.</p>
    </div>


    <div className="footer-section">
      <h3>Quick Links</h3>
      <nav>
        <ul>
          <li><NavLink to="/Template">Template</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>


    <div className="footer-section">
      <h3>Company</h3>
      <nav>
        <ul>
          <li><NavLink to="/Query">Query</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          <li><NavLink to="/Privacy">Privacy Policy</NavLink></li>
        </ul>
      </nav>
    </div>

    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-links">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Visit our Facebook page"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow us on Instagram"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow us on Twitter"
        >
          <img src={Twitter} alt="Twitter" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Connect with us on LinkedIn"
        >
          <img src={Linkedin} alt="LinkedIn" />
        </a>
      </div>

      <div className="download-section">
        <h3>Download App</h3>
        <div className="store-buttons">
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Get it on Google Play"
          >
            <img src={Getgoogle} alt="Google Play Store" className="store-badge" />
          </a>
          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Download on App Store"
          >
            <img src={Apple} alt="Apple App Store" className="store-badge" />
          </a>
        </div>
      </div>
    </div>
  </div>


  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Resume-lite. All rights reserved.</p>
    <div className="footer-links">
      <NavLink to="/Terms">Terms of Service</NavLink>
      <span className="separator">|</span>
      <NavLink to="/Privacy">Privacy Policy</NavLink>
    </div>
  </div>
</footer> 

</div>



  
  )}
