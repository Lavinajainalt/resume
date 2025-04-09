import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState, useCallback, memo, useMemo } from 'react';
import './Professional4.css';

const Professional4 = () => {
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
      const resume = document.getElementById('resume-preview_xyz123');

      if (!resume) {
        throw new Error('Resume element not found');
      }

      const canvas = await html2canvas(resume, {
        useCORS: true,
        scrollX: 0,
        scrollY: -window.scrollY,
        logging: false,
        width: resume.scrollWidth,
        height: resume.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.width;
      const pageHeight = pdf.internal.pageSize.height;
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const scaleFactor = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const imgX = 50;
      const imgY = 15;
      const imgScaledWidth = imgWidth * scaleFactor;
      const imgScaledHeight = imgHeight * scaleFactor;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgScaledWidth, imgScaledHeight);
      pdf.save(`resume_${formData.fullName || 'untitled'}_${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  }, [formData.fullName, isGeneratingPDF]);

  const FormInput = memo(({ label, type = 'text', name, value, onChange, isTextarea, placeholder }) => (
    <div className="form-group_xyz123">
      <label htmlFor={`${name}_xyz123`}>{label}</label>
      {isTextarea ? (
        <textarea
          id={`${name}_xyz123`}
          name={name}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={`${name}_xyz123`}
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
    <div className="contact-info_xyz123">
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
      <section className={`${title.toLowerCase().replace(/\s+/g, '-')}_xyz123`}>
        <h2>{title}</h2>
        <div className="content_xyz123">
          {items.map((item, index) => (
            <p key={`${title}-${index}-${fullName}`}>{item}</p>
          ))}
        </div>
      </section>
    );
  });

  const ResumePreview = memo(({ data }) => (
    <div id="resume-preview_xyz123" className="resume_xyz123">
      <header className="header_xyz123">
        <h1>{data.fullName || 'Your Name'}</h1>
        <h2 className="title_xyz123">{data.title || 'Professional Title'}</h2>
        <ContactInfo {...data} />
      </header>

      <Section className='section2' title="Professional Summary" content={data.summary} fullName={data.fullName} />

      <div className="main-sections_xyz123">
        <Section title="Work Experience" content={data.experience} fullName={data.fullName} isList />
        <Section title="Education" content={data.education} fullName={data.fullName} isList />
        <Section title="Skills" content={data.skills} fullName={data.fullName} isList />
      </div>

      <div className="side-sections_xyz123">
        <Section title="Languages" content={data.languages} fullName={data.fullName} />
        <Section title="Certifications" content={data.certifications} fullName={data.fullName} isList />
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
    <div className="resume-builder_xyz123">
      <div className="form-section_xyz123">
        <div className="form_xyz123">
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
            <div className="button-group_xyz123">
              <button 
                type="submit" 
                className="button2 primary_xyz123" 
                disabled={isGeneratingPDF}
              >
                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
              </button>
              <button 
                type="button" 
                className="button2 secondary_xyz123" 
                onClick={handleReset}
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="preview-section_xyz123">
        <ResumePreview data={formData} />
      </div>
    </div>
  );
};

export default memo(Professional4);
