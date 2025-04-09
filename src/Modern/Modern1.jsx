import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState, useCallback, memo } from 'react';
import './Modern1.css';

const Modern1 = () => {
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
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  const downloadPDF = useCallback(async () => {
    if (isGeneratingPDF) return;

    try {
      setIsGeneratingPDF(true);
      const resume = document.getElementById('resume-preview4');
      if (!resume) return;

      const canvas = await html2canvas(resume, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png', 0.95);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`resume-${formData.fullName || 'untitled'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  }, [formData.fullName, isGeneratingPDF]);

  const FormInput = memo(({ label, type = 'text', name, value, onChange, isTextarea, placeholder }) => (
    <div className="form-group4">
      <label htmlFor={`${name}4`}>{label}</label>
      {isTextarea ? (
        <textarea
          id={`${name}4`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={`${name}4`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  ));

  const ContactInfo = memo(({ email, phone, location, linkedin }) => (
    <div className="contact-info4">
      {email && <p>{email}</p>}
      {phone && <p>{phone}</p>}
      {location && <p>{location}</p>}
      {linkedin && <p>{linkedin}</p>}
    </div>
  ));

  const ResumePreview = memo(({ data }) => (
    <div id="resume-preview4" className="resume4">
      <header className="header4">
        <h1>{data.fullName || 'Your Name'}</h1>
        <h2 className="title4">{data.title || 'Professional Title'}</h2>
        <ContactInfo {...data} />
      </header>

      {data.summary && (
        <section className="summary4">
          <h2>Professional Summary</h2>
          <div className="content4">
            <p>{data.summary}</p>
          </div>
        </section>
      )}

      {data.experience && (
        <section className="experience4">
          <h2>Work Experience</h2>
          <div className="content4">
            {data.experience.split('\n').map((exp, index) => (
              <p key={`exp-${index}-${data.fullName}`}>{exp}</p>
            ))}
          </div>
        </section>
      )}

      {data.education && (
        <section className="education4">
          <h2>Education</h2>
          <div className="content4">
            {data.education.split('\n').map((edu, index) => (
              <p key={`edu-${index}-${data.fullName}`}>{edu}</p>
            ))}
          </div>
        </section>
      )}

      <div className="two-column4">
        {data.skills && (
          <section className="skills4">
            <h2>Skills</h2>
            <div className="content4">
              {data.skills.split('\n').map((skill, index) => (
                <p key={`skill-${index}-${data.fullName}`}>{skill}</p>
              ))}
            </div>
          </section>
        )}

        <div className="right-column4">
          {data.languages && (
            <section className="languages4">
              <h2>Languages</h2>
              <div className="content4">
                <p>{data.languages}</p>
              </div>
            </section>
          )}

          {data.certifications && (
            <section className="certifications4">
              <h2>Certifications</h2>
              <div className="content4">
                {data.certifications.split('\n').map((cert, index) => (
                  <p key={`cert-${index}-${data.fullName}`}>{cert}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  ));

  const ResumeForm = memo(({ formData, handleChange }) => (
    <div className="form-section4">
      <h2>Resume Builder</h2>
      <form onSubmit={(e) => e.preventDefault()} className="form4">
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
          placeholder="Format: Job Title - Company - Duration\nDescription of responsibilities and achievements"
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

        <button 
          type="button" 
          className="button4" 
          onClick={downloadPDF}
          disabled={isGeneratingPDF}
        >
          {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </form>
    </div>
  ));

  return (
    <div className="resume-builder4">
      <ResumeForm 
        formData={formData}
        handleChange={handleChange}
      />
      <div className="preview-section4">
        <ResumePreview data={formData} />
      </div>
    </div>
  );
};

export default Modern1;
