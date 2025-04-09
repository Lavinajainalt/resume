import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Professional1.css';

export default function Professional1() {
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

  const handleDownloadPdf = () => {
    const capture = document.querySelector('.resume-preview8');
    const scale = 2; // Increase scale for better quality
    
    html2canvas(capture, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
      height: capture.scrollHeight,
      windowHeight: capture.scrollHeight
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
  
      pdf.addImage(
        imgData, 
        'PNG', 
        imgX, 
        imgY, 
        imgWidth * ratio, 
        imgHeight * ratio
      );
  
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="resume-builder8">
      <div className="form-section8">
        <h2>Resume Builder</h2>
        <form>
          <div className="form-group8">
            <label>Profile Picture</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="form-control8"
            />
          </div>

          <div className="form-group8">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g., John Doe"
            />
          </div>

          <div className="form-group8">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g., john.doe@example.com"
            />
          </div>

          <div className="form-group8">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g., (123) 456-7890"
            />
          </div>

          <div className="form-group8">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g., 123 Main St, City, Country"
            />
          </div>

          <div className="form-group8">
            <label>Professional Objective</label>
            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="Brief description of your career goals and aspirations..."
            />
          </div>

          <div className="form-group8">
            <label>Education</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g.,
Master of Science in Computer Science
University Name, 2018-2020
GPA: 3.8/4.0"
            />
          </div>

          <div className="form-group8">
            <label>Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g.,
Software Engineer | ABC Company
Jan 2020 - Present
• Developed and maintained web applications
• Led team of 5 developers
• Improved system performance by 40%"
            />
          </div>

          <div className="form-group8">
            <label>Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g.,
• Programming Languages: JavaScript, Python, Java
• Frameworks: React, Node.js, Django
• Tools: Git, Docker, AWS"
            />
          </div>

          <div className="form-group8">
            <label>Certifications</label>
            <textarea
              name="certificates"
              value={formData.certificates}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g.,
AWS Certified Solutions Architect (2023)
Google Cloud Professional (2022)
Microsoft Certified: Azure Developer"
            />
          </div>

          <div className="form-group8">
            <label>References</label>
            <textarea
              name="references"
              value={formData.references}
              onChange={handleInputChange}
              className="form-control8"
              placeholder="e.g.,
John Doe
Senior Manager, ABC Company
Phone: (123) 456-7890
Email: john.doe@example.com"
            />
          </div>
        </form>
      </div>

      <div className="preview-section8">
        <div className="resume-preview8">
          <div className="resume-header8">
            {formData.image && (
              <div className="profile-image8">
                <img src={formData.image} alt="Profile" />
              </div>
            )}
            <div className="basic-info8">
              <h1>{formData.fullName || 'Your Name'}</h1>
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
              <p>{formData.address}</p>
            </div>
          </div>

          <div className="resume-body8">
            {formData.objective && (
              <div className="resume-section8">
                <h2>Professional Objective</h2>
                <p>{formData.objective}</p>
              </div>
            )}

            {formData.education && (
              <div className="resume-section8">
                <h2>Education</h2>
                <p>{formData.education}</p>
              </div>
            )}

            {formData.experience && (
              <div className="resume-section8">
                <h2>Experience</h2>
                <p>{formData.experience}</p>
              </div>
            )}

            {formData.skills && (
              <div className="resume-section8">
                <h2>Skills</h2>
                <div className="skills-grid8">
                  {formData.skills.split('\n').map((skill, index) => (
                    skill.trim() && (
                      <div key={index} className="skill-item8">
                        {skill}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {formData.certificates && (
              <div className="resume-section8">
                <h2>Certifications</h2>
                <div className="certificates-grid8">
                  {formData.certificates.split('\n').map((cert, index) => (
                    cert.trim() && (
                      <div key={index} className="certificate-item8">
                        {cert}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {formData.references && (
              <div className="resume-section8">
                <h2>References</h2>
                <p>{formData.references}</p>
              </div>
            )}
          </div>
        </div>

        <button onClick={handleDownloadPdf} className="download-button8">
          Download PDF
        </button>
      </div>
    </div>
  );
}
