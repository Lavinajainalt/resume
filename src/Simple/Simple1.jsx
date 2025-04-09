import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Simple1.css';

const Simple1 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    languages: '',
    certifications: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const downloadPDF = () => {
    const resume = document.getElementById('resume-preview');
    html2canvas(resume).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="resume-builder">
      <div className="form-section">
        <h2>Resume Builder</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Professional Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Professional Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Work Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Format: Job Title - Company - Duration&#10;Description of responsibilities and achievements"
            />
          </div>

          <div className="form-group">
            <label>Education</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Degree - Institution - Year"
            />
          </div>

          <div className="form-group">
            <label>Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Languages</label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Certifications</label>
            <textarea
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
            />
          </div>

          <button type="button" className='buttonl' onClick={downloadPDF}>
            Download PDF
          </button>
        </form>
      </div>

      <div className="preview-section">
        <div id="resume-preview" className="resume">
          <header>
            <h1>{formData.fullName || 'Your Name'}</h1>
            <h2 className="title">{formData.title || 'Professional Title'}</h2>
            <div className="contact-info">
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
              <p>{formData.location}</p>
              <p>{formData.linkedin}</p>
            </div>
          </header>

          <section className="summary">
            <h2>Professional Summary</h2>
            <p>{formData.summary}</p>
          </section>

          <section className="experience">
            <h2>Work Experience</h2>
            <div className="content">
              {formData.experience.split('\n').map((exp, index) => (
                <p key={index}>{exp}</p>
              ))}
            </div>
          </section>

          <section className="education">
            <h2>Education</h2>
            <div className="content">
              {formData.education.split('\n').map((edu, index) => (
                <p key={index}>{edu}</p>
              ))}
            </div>
          </section>

          <div className="two-column">
            <section className="skills">
              <h2>Skills</h2>
              <div className="content">
                {formData.skills.split('\n').map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            </section>

            <div className="right-column">
              <section className="languages">
                <h2>Languages</h2>
                <p>{formData.languages}</p>
              </section>

              <section className="certifications">
                <h2>Certifications</h2>
                <div className="content">
                  {formData.certifications.split('\n').map((cert, index) => (
                    <p key={index}>{cert}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple1;
