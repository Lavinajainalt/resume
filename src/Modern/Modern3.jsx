import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState, useCallback, memo } from 'react';
import './Modern3.css';

const Modern3 = () => {
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
    certifications: '',
    image: null, // Added for image handling
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({ ...prevData, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }, []);

  const downloadPDF = useCallback(async () => {
    if (isGeneratingPDF) return;

    try {
      setIsGeneratingPDF(true);
      const resume = document.getElementById('resume-preview6');
      if (!resume) return;

      const canvas = await html2canvas(resume, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
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
    <div className="form-group6">
      <label htmlFor={`${name}6`}>{label}</label>
      {isTextarea ? (
        <textarea
          id={`${name}6`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={`${name}6`}
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
    <div className="contact-info6">
      {email && <p>{email}</p>}
      {phone && <p>{phone}</p>}
      {location && <p>{location}</p>}
      {linkedin && <p>{linkedin}</p>}
    </div>
  ));

  const ResumePreview = memo(({ data }) => (
    <div id="resume-preview6" className="resume6">
      <header className="header6">
        <h1>{data.fullName || 'Your Name'}</h1>
        <h2 className="title6">{data.title || 'Professional Title'}</h2>
        {data.image && <img src={data.image} alt="Profile" className="profile-image6" />}
        <ContactInfo {...data} />
      </header>

      {data.summary && (
        <section className="summary6">
          <h2>Professional Summary</h2>
          <div className="content6">
            <p>{data.summary}</p>
          </div>
        </section>
      )}

      {data.experience && (
        <section className="experience6">
          <h2>Work Experience</h2>
          <div className="content6">
            {data.experience.split('\n').map((exp, index) => (
              <p key={`exp-${index}-${data.fullName}`}>{exp}</p>
            ))}
          </div>
        </section>
      )}

      {data.education && (
        <section className="education6">
          <h2>Education</h2>
          <div className="content6">
            {data.education.split('\n').map((edu, index) => (
              <p key={`edu-${index}-${data.fullName}`}>{edu}</p>
            ))}
          </div>
        </section>
      )}

      <div className="two-column6">
        {data.skills && (
          <section className="skills6">
            <h2>Skills</h2>
            <div className="content6">
              {data.skills.split('\n').map((skill, index) => (
                <p key={`skill-${index}-${data.fullName}`}>{skill}</p>
              ))}
            </div>
          </section>
        )}

        <div className="right-column6">
          {data.languages && (
            <section className="languages6">
              <h2>Languages</h2>
              <div className="content6">
                <p>{data.languages}</p>
              </div>
            </section>
          )}

          {data.certifications && (
            <section className="certifications6">
              <h2>Certifications</h2>
              <div className="content6">
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
    <div className="form-section6">
      <h2>Resume Builder</h2>
      <form onSubmit={(e) => e.preventDefault()} className="form6">
        <FormInput label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
        <FormInput label="Professional Title" name="title" value={formData.title} onChange={handleChange} />
        <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
        <FormInput label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        <FormInput label="Location" name="location" value={formData.location} onChange={handleChange} />
        <FormInput label="LinkedIn" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        <FormInput
          label="Upload Image"
          type="file"
          name="image"
          value=""
          onChange={handleChange}
          placeholder="Choose an image file"
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
        <FormInput label="Skills" name="skills" value={formData.skills} onChange={handleChange} isTextarea />
        <FormInput label="Languages" name="languages" value={formData.languages} onChange={handleChange} />
        <FormInput
          label="Certifications"
          name="certifications"
          value={formData.certifications}
          onChange={handleChange}
          isTextarea
        />

        <button
          type="button"
          className="button6"
          onClick={downloadPDF}
          disabled={isGeneratingPDF}
        >
          {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </form>
    </div>
  ));

  return (
    <div className="resume-builder6">
      <ResumeForm formData={formData} handleChange={handleChange} />
      <div className="preview-section6">
        <ResumePreview data={formData} />
      </div>
    </div>
  );
};

export default Modern3;
