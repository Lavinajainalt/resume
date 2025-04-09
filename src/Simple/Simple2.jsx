import React, { useState, useCallback, memo } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Simple2.css';

const Simple2 = () => {
  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  const downloadPDF = useCallback(async () => {
    try {
      const resume = document.getElementById('resume-preview');
      if (!resume) return;

      const canvas = await html2canvas(resume, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`resume-${formData.fullName || 'untitled'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  }, [formData.fullName]);

  const FormInput = memo(({ label, type = 'text', name, value, onChange, isTextarea, placeholder }) => (
    <div className="form-group">
      <label>{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  ));

  const ResumePreview = memo(({ data }) => (
    <div id="resume-preview" className="resume1">
      <header>
        <h1>{data.fullName || 'Your Name'}</h1>
        <h2 className="title">{data.title || 'Professional Title'}</h2>
        <div className="contact-info">
          {data.email && <p>{data.email}</p>}
          {data.phone && <p>{data.phone}</p>}
          {data.location && <p>{data.location}</p>}
          {data.linkedin && <p>{data.linkedin}</p>}
        </div>
      </header>

      {data.summary && (
        <section className="summary1">
          <h2>Professional Summary</h2>
          <div className="content1">
            <p>{data.summary}</p>
          </div>
        </section>
      )}

      {data.experience && (
        <section className="experience1">
          <h2>Work Experience</h2>
          <div className="content1">
            {data.experience.split('\n').map((exp, index) => (
              <p key={`exp-${index}`}>{exp}</p>
            ))}
          </div>
        </section>
      )}

      {data.education && (
        <section className="education1">
          <h2>Education</h2>
          <div className="content1">
            {data.education.split('\n').map((edu, index) => (
              <p key={`edu-${index}`}>{edu}</p>
            ))}
          </div>
        </section>
      )}

      <div className="two-column1">
        {data.skills && (
          <section className="skills1">
            <h2>Skills</h2>
            <div className="content1">
              {data.skills.split('\n').map((skill, index) => (
                <p key={`skill-${index}`}>{skill}</p>
              ))}
            </div>
          </section>
        )}

        <div className="right-column1">
          {data.languages && (
            <section className="languages1">
              <h2>Languages</h2>
              <div className="content1">
                <p>{data.languages}</p>
              </div>
            </section>
          )}

          {data.certifications && (
            <section className="certifications1">
              <h2>Certifications</h2>
              <div className="content1">
                {data.certifications.split('\n').map((cert, index) => (
                  <p key={`cert-${index}`}>{cert}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="resume-builder1">
      <div className="form-section1">
        <h2>Resume Builder</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormInput 
            label="Full Name" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
          />
          <FormInput 
            label="Professional Title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
          />
          <FormInput 
            label="Email" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <FormInput 
            label="Phone" 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
          <FormInput 
            label="Location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
          />
          <FormInput 
            label="LinkedIn" 
            name="linkedin" 
            value={formData.linkedin} 
            onChange={handleChange} 
          />
          <FormInput 
            label="Professional Summary" 
            name="summary" 
            value={formData.summary} 
            onChange={handleChange} 
            isTextarea 
          />
          <FormInput 
            label="Work Experience" 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            isTextarea 
            placeholder="Format: Job Title - Company - Duration&#10;Description of responsibilities and achievements"
          />
          <FormInput 
            label="Education" 
            name="education" 
            value={formData.education} 
            onChange={handleChange} 
            isTextarea 
            placeholder="Degree - Institution - Year"
          />
          <FormInput 
            label="Skills" 
            name="skills" 
            value={formData.skills} 
            onChange={handleChange} 
            isTextarea 
          />
          <FormInput 
            label="Languages" 
            name="languages" 
            value={formData.languages} 
            onChange={handleChange} 
          />
          <FormInput 
            label="Certifications" 
            name="certifications" 
            value={formData.certifications} 
            onChange={handleChange} 
            isTextarea 
          />

          <button type="button" className='buttonl' onClick={downloadPDF}>
            Download PDF
          </button>
        </form>
      </div>

      <div className="preview-section1">
        <ResumePreview data={formData} />
      </div>
    </div>
  );
};

export default memo(Simple2);
