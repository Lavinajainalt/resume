import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState, useCallback, memo, useMemo } from 'react';
import './Professional3.css';

const Professional3 = () => {
  const initialFormData = useMemo(() => ({
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
  }), []);

  const [formData, setFormData] = useState(initialFormData);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const downloadPDF = useCallback(async () => {
    if (isGeneratingPDF) return;

    try {
      setIsGeneratingPDF(true);
      const resume = document.getElementById('resume-preview10');
      
      if (!resume) {
        throw new Error('Resume element not found');
      }

      // Create PDF with A4 dimensions
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      // Convert HTML to PDF
      pdf.html(resume, {
        callback: function(pdf) {
          try {
            // Save the PDF
            pdf.save(`resume_${formData.fullName || 'untitled'}_${Date.now()}.pdf`);
          } catch (error) {
            console.error('Error saving PDF:', error);
            alert('Failed to save PDF. Please try again.');
          }
        },
        x: 15,
        y: 15,
        width: pdf.internal.pageSize.getWidth() - 30,
        windowWidth: 794 // A4 width in pixels
      });

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  }, [formData.fullName, isGeneratingPDF]);

  const FormInput = memo(({ label, type = 'text', name, value, onChange, isTextarea, placeholder }) => (
    <div className="form-group10">
      <label htmlFor={`${name}10`}>{label}</label>
      {isTextarea ? (
        <textarea
          id={`${name}10`}
          name={name}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={`${name}10`}
          type={type}
          name={name}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  ));

  const ContactInfo = memo(({ email, phone, location, linkedin }) => (
    <div className="contact-info10">
      {email && <p>{email}</p>}
      {phone && <p>{phone}</p>}
      {location && <p>{location}</p>}
      {linkedin && <p>{linkedin}</p>}
    </div>
  ));

  const Section = memo(({ title, content, fullName, isList }) => {
    if (!content) return null;
    
    const items = isList ? content.split('\n') : [content];
    
    return (
      <section className="section10">
        <h2>{title}</h2>
        <div className="content10">
          {items.map((item, index) => (
            <p key={`${title}-${index}-${fullName}`}>{item}</p>
          ))}
        </div>
      </section>
    );
  });

  const ResumePreview = memo(({ data }) => (
    <div id="resume-preview10" className="resume10">
      <header className="header10">
        <h1>{data.fullName || 'Your Name'}</h1>
        <h2 className="title10">{data.title || 'Professional Title'}</h2>
        <ContactInfo {...data} />
      </header>

      <Section title="Professional Summary" content={data.summary} fullName={data.fullName} />
      <Section title="Work Experience" content={data.experience} fullName={data.fullName} isList />
      <Section title="Education" content={data.education} fullName={data.fullName} isList />

      <div className="two-columns10">
        <Section title="Skills" content={data.skills} fullName={data.fullName} isList />
        <div className="right-column10">
          <Section title="Languages" content={data.languages} fullName={data.fullName} />
          <Section title="Certifications" content={data.certifications} fullName={data.fullName} isList />
        </div>
      </div>
    </div>
  ));

  const formInputs = useMemo(() => [
    { label: 'Full Name', name: 'fullName', type: 'text' },
    { label: 'Professional Title', name: 'title', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone', name: 'phone', type: 'tel' },
    { label: 'Location', name: 'location', type: 'text' },
    { label: 'LinkedIn', name: 'linkedin', type: 'text' },
    { label: 'Professional Summary', name: 'summary', type: 'textarea', isTextarea: true },
    { 
      label: 'Work Experience', 
      name: 'experience', 
      type: 'textarea',
      isTextarea: true,
      placeholder: 'Format: Job Title - Company - Duration\nDescription of responsibilities and achievements'
    },
    {
      label: 'Education',
      name: 'education',
      type: 'textarea',
      isTextarea: true,
      placeholder: 'Degree - Institution - Year'
    },
    { label: 'Skills', name: 'skills', type: 'textarea', isTextarea: true },
    { label: 'Languages', name: 'languages', type: 'text' },
    { label: 'Certifications', name: 'certifications', type: 'textarea', isTextarea: true }
  ], []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    downloadPDF();
  }, [downloadPDF]);

  const handleReset = useCallback(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  return (
    <div className="resume-builder10">
      <div className="form-section10">
        <div className="form10">
          <h2>Resume Builder</h2>
          <form onSubmit={handleSubmit}>
            {formInputs.map((input) => (
              <FormInput
                key={input.name}
                {...input}
                value={formData[input.name]}
                onChange={handleChange}
              />
            ))}
            <div className="button-group10">
              <button 
                type="submit" 
                className="button2 primary10" 
                disabled={isGeneratingPDF}
              >
                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
              </button>
              <button 
                type="button" 
                className="button2 secondary10" 
                onClick={handleReset}
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="preview-section10">
        <ResumePreview data={formData} />
      </div>
    </div>
  );
};

export default memo(Professional3);