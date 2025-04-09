import React, { useState } from 'react';
import './Terms.css';

const Terms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const termsData = [
    {
      id: 1,
      title: "1. User Agreement",
      content: "By accessing and using this platform, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our services."
    },
    {
      id: 2,
      title: "2. Privacy & Data Protection",
      content: "We are committed to protecting your privacy. Any personal information you provide will be handled in accordance with our Privacy Policy and applicable data protection laws."
    },
    {
      id: 3,
      title: "3. User Conduct",
      content: "Users must not engage in any activity that interferes with or disrupts the services or servers. Any form of harassment, fraud, or illegal activities will result in immediate account termination."
    },
    {
      id: 4,
      title: "4. Intellectual Property",
      content: "All content, features, and functionality of this platform are owned by us and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      id: 5,
      title: "5. Service Modifications",
      content: "We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We shall not be liable for any modification, suspension, or discontinuation."
    },
    {
      id: 6,
      title: "6. Account Security",
      content: "You are responsible for maintaining the confidentiality of your account credentials. Any activities that occur under your account are your responsibility."
    },
    {
      id: 7,
      title: "7. Termination",
      content: "We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties."
    },
    {
      id: 8,
      title: "8. Limitation of Liability",
      content: "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
    }
  ];

  return (
    <div className="terms-modern">
      <div className="terms-header">
        <h1>Terms of Service</h1>
        <p className="terms-subtitle">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="terms-navigation">
        {termsData.map(section => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title.split('.')[1]}
          </button>
        ))}
      </div>

      <div className="terms-content">
        {termsData.map(section => (
          <div
            key={section.id}
            className={`terms-section ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <h2>{section.title}</h2>
            <div className="section-content">
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="terms-footer">
        <p>If you have any questions about these terms, please contact us.</p>
        <button className="accept-button">I Accept These Terms</button>
      </div>
    </div>
  );
};

export default Terms;
