import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Privacy.css';

const COMPANY_NAME = 'Your Company Name';
const CONTACT_INFO = 'contact@example.com';
const LAST_UPDATED = new Date().toLocaleDateString();

const Privacy = memo(function Privacy({ companyName = COMPANY_NAME, contactInfo = CONTACT_INFO }) {
  return (
    <main className="privacy-container">
      <header>
        <h1>Privacy Policy</h1>
        <p>Last updated: {LAST_UPDATED}</p>
      </header>

      <article>
        <section aria-labelledby="introduction">
          <h2 id="introduction">Introduction</h2>
          <p>Welcome to {companyName}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at {contactInfo}.</p>
        </section>

        <section aria-labelledby="information-collection">
          <h2 id="information-collection">Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</p>
        </section>

        <section aria-labelledby="information-usage">
          <h2 id="information-usage">How We Use Your Information</h2>
          <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        </section>

        <section aria-labelledby="information-sharing">
          <h2 id="information-sharing">Sharing Your Information</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
        </section>

        <section aria-labelledby="information-security">
          <h2 id="information-security">Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact">Contact Us</h2>
          <p>If you have questions or comments about this policy, you may contact us at {contactInfo}.</p>
        </section>
      </article>
    </main>
  );
});

Privacy.propTypes = {
  companyName: PropTypes.string,
  contactInfo: PropTypes.string
};

export default Privacy;
