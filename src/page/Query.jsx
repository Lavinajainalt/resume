import React, { useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import './Query.css';

const Query = memo(function Query({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Log each change to console
    console.log(`Field ${name} changed to: ${value}`);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log form submission data
    console.log('Form Submission Data:', {
      timestamp: new Date().toISOString(),
      formData
    });

    try {
      await onSubmit?.(formData);
      console.log('Form submitted successfully!');
      console.log('Submitted values:', {
        Name: formData.name,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message
      });

      // Clear form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      console.log('Form cleared');

    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      console.log('Submission process completed');
    }
  };

  // Log component render
  console.log('Query component rendered', {
    isSubmitting,
    hasFormData: Object.values(formData).some(value => value !== '')
  });

  return (
    <div className="query-page">
      <div className="contact-info-section">
        <h1>Get in Touch</h1>
        <p className="contact-description">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <h3>Location</h3>
              <p>123 Business Avenue, Suite 100<br /> 10001</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>+91 1234567890</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>support@company.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">⏰</div>
            <div className="contact-text">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                disabled={isSubmitting}
                onFocus={() => console.log('Name field focused')}
                onBlur={() => console.log('Name field blur:', formData.name)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="mail@example.com"
                required
                disabled={isSubmitting}
                onFocus={() => console.log('Email field focused')}
                onBlur={() => console.log('Email field blur:', formData.email)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
              disabled={isSubmitting}
              onFocus={() => console.log('Subject field focused')}
              onBlur={() => console.log('Subject field blur:', formData.subject)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
              disabled={isSubmitting}
              rows="5"
              onFocus={() => console.log('Message field focused')}
              onBlur={() => console.log('Message field blur:', formData.message)}
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            onClick={() => console.log('Submit button clicked')}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
});

Query.propTypes = {
  onSubmit: PropTypes.func
};

export default Query;
