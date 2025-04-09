import React from 'react';
import './Support.css';

export default function Support() {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <div className="support-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please contact our support team.</p>
        <p>Email: support@resume-lite.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="support-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <h3>How do I create a resume?</h3>
            <p>To create a resume, simply sign up for an account and follow the step-by-step instructions on our website.</p>
          </li>
          <li>
            <h3>Can I customize my resume template?</h3>
            <p>Yes, you can customize your resume template by choosing different styles, fonts, and colors.</p>
          </li>
          <li>
            <h3>How do I upgrade to a premium plan?</h3>
            <p>To upgrade to a premium plan, go to the pricing page and select the plan that best suits your needs.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}