
import React from 'react'
import './About.css';
import { NavLink } from 'react-router-dom';



export default function About() {
  return (<>
    <div>
<div className="about-container">
  <header className="about-header">
    <h1>About us</h1>
    <h3>Take the right steps in your career</h3>
  </header>

  <section className="about-intro">
    <p>
      Welcome to Resume-lite, where your career is our top priority. Founded in 2000 by experts in job applications, 
      we have grown to support job seekers in over 200 countries and 26 languages – making us a global leader in 
      resume creation. With more than two decades of experience, we have developed a deep understanding of the 
      dynamic job market, allowing us to tailor our tools to meet the diverse needs of our users.
    </p>
  </section>
  

  <section className="about-expertise">
    <h4>With a team of experts in the HR sector and skilled developers, we're here to make the job search easy for you.</h4>
    
    <div className="about-grid">
      <article className="about-card">
        <h5>Our Mission</h5>
        <p>
          Our mission is to help job seekers create the best resumes possible, and to help employers find the best 
          candidates. We believe that every job seeker should have a resume that highlights their skills and experiences, 
          and that every employer should have a clear understanding of the job market.
        </p>
      </article>

      <article className="about-card">
        <h5>Our Vision</h5>
        <p>
          We believe in empowering job seekers with the tools and resources they need to succeed in today's 
          competitive job market. Our vision is to become the global standard for professional resume creation 
          and career development.
        </p>
      </article>

      <article className="about-card">
        <h5>Our Values</h5>
        <p>
          We are committed to excellence, innovation, and user success. Our values center around transparency, 
          accessibility, and continuous improvement in helping both job seekers and employers achieve their goals.
        </p>
      </article>

      <article className="about-card">
        <h5>Our Team</h5>
        <p>
          Our diverse team combines HR expertise with technical innovation. We bring together industry veterans 
          and creative minds to deliver cutting-edge resume solutions that make a real difference in people's careers.
        </p>
      </article>
    </div>
  </section>
</div>
 </div>
 
 
{/*  
 
 <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="" class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

<div className="question">
  <h2>Have a question?</h2>
  <p>Check out our FAQ section for answers to common questions.</p>
  

  <div className="faq-list">
    <div className="faq-item">
      <h3>How do I create a resume?</h3>
      <p>Creating a resume is easy! Just log in to your account, click on the "Create Resume" button, and follow the instructions.</p>
    </div>

    <div className="faq-item">
      <h3>How do I find a job?</h3>
      <p>Finding a job is easy! Just log in to your account, click on the "Find Jobs" button, and follow the instructions.</p>
    </div>

    <div className="faq-item">
      <h3>How do I apply for a job?</h3>
      <p>Applying for a job is easy! Just log in to your account, click on the "Apply" button, and follow the instructions.</p>
    </div>

    <div className="faq-item">
      <h3>How do I get hired?</h3>
      <p>Getting hired is easy! Just log in to your account, click on the "Hire" button, and follow the instructions.</p>
    </div>
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
              <li>Build a resume</li></NavLink>
              <NavLink to='/Template'>
              <li>Samples</li>
           </NavLink>
           <NavLink to='/Template'>
              <li>Cover letter samples</li></NavLink>
              <li>Apps</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Need Help?</h4>
            <ul>
              <NavLink to='/Help'>
              <li>Help Center</li></NavLink>
              <NavLink to='/Contact'>
              <li>Contact us</li></NavLink>
              <NavLink to='/Press'>
              <li>Sitemap</li></NavLink>
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
            <p>Terms</p></NavLink>
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
  </>
    
  )
}
