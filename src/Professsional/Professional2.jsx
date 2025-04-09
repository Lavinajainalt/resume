import React, { useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Professional2.css';

const Professional2 = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    objective: '',
    education: '',
    experience: '',
    skills: '',
    certificates: '',
    references: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = useCallback(async () => {
    try {
      setLoading(true);
      const resumeElement = document.querySelector('.previewSection9');
      
      if (!resumeElement) {
        throw new Error('Resume preview section not found');
      }

      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        scrollY: -window.scrollY,
        windowWidth: resumeElement.scrollWidth,
        windowHeight: resumeElement.scrollHeight
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;

      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        0,
        position,
        imgWidth,
        imgHeight,
        '',
        'FAST'
      );

      let heightLeft = imgHeight - pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL('image/jpeg', 1.0),
          'JPEG',
          0,
          position,
          imgWidth,
          imgHeight,
          '',
          'FAST'
        );
        heightLeft -= pageHeight;
      }

      pdf.save(`${formData.fullName || 'resume'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [formData.fullName]);

  return (
    <div className="container9">
      <div className="formSection9">
        <h2 className="heading9">Resume Builder</h2>
        <form>
          <div className="formGroup9">
            <label className="label9">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="input9"
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="input9"
              placeholder="e.g., John Doe"
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input9"
              placeholder="e.g., john@example.com"
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="input9"
              placeholder="e.g., (123) 456-7890"
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="input9"
              placeholder="e.g., 123 Main St, City, Country"
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Professional Objective</label>
            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleInputChange}
              className="textarea9"
              placeholder="Brief description of your career goals..."
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Education</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="textarea9"
              placeholder="Your educational background..."
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="textarea9"
              placeholder="Your work experience..."
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="textarea9"
              placeholder="Your skills (one per line)..."
            />
          </div>

          <div className="formGroup9">
            <label className="label9">Certifications</label>
            <textarea
              name="certificates"
              value={formData.certificates}
              onChange={handleInputChange}
              className="textarea9"
              placeholder="Your certifications (one per line)..."
            />
          </div>

          <div className="formGroup9">
            <label className="label9">References</label>
            <textarea
              name="references"
              value={formData.references}
              onChange={handleInputChange}
              className="textarea9"
              placeholder="Your references..."
            />
          </div>

          <button
            type="button"
            onClick={downloadPDF}
            className={`downloadButton9 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </form>
      </div>

      <div className="previewSection9">
        <div className="rectangle"></div>
        <div className="resumeHeader9">
          {formData.image && (
            <div className="profileImage9">
              <img src={formData.image} alt="Profile" className="image9" />
            </div>
          )}
          <div className="basicInfo9">
            <h1 className="name9">{formData.fullName || 'Your Name'}</h1>
            <p className="contactInfo9">{formData.email}</p>
            <p className="contactInfo9">{formData.phone}</p>
            <p className="contactInfo9">{formData.address}</p>
          </div>
        </div>

        <div className="resumeBody9">
          {formData.objective && (
            <div className="section9">
              <h2 className="sectionHeading9">Professional Objective</h2>
              <p className="sectionContent9">{formData.objective}</p>
            </div>
          )}

          {formData.education && (
            <div className="section9">
              <h2 className="sectionHeading9">Education</h2>
              <p className="sectionContent9">{formData.education}</p>
            </div>
          )}

          {formData.experience && (
            <div className="section9">
              <h2 className="sectionHeading9">Experience</h2>
              <p className="sectionContent9">{formData.experience}</p>
            </div>
          )}

          {formData.skills && (
            <div className="section9">
              <h2 className="sectionHeading9">Skills</h2>
              <div className="skillsGrid9">
                {formData.skills.split('\n').map((skill, index) => (
                  skill.trim() && (
                    <div key={index} className="skillItem9">
                      {skill}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {formData.certificates && (
            <div className="section9">
              <h2 className="sectionHeading9">Certifications</h2>
              <div className="certificatesGrid9">
                {formData.certificates.split('\n').map((cert, index) => (
                  cert.trim() && (
                    <div key={index} className="certificateItem9">
                      {cert}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {formData.references && (
            <div className="section9">
              <h2 className="sectionHeading9">References</h2>
              <p className="sectionContent9">{formData.references}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Professional2;
