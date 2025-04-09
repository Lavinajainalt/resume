import React from 'react'
import './Help.css'

export default function Help() {
  return (
    <div className="help-center-container">
      {/* Header Section */}
      <header className="help-header">
        <h1>Help Center</h1>
        <p>How can we help you today?</p>
        
        {/* Search Bar */}
        <div className="search-container">
          <input 
            type="search" 
            placeholder="Search for help..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="help-content">
        {/* Popular Topics */}
        <section className="help-section">
          <h2>Popular Topics</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <h3>Getting Started</h3>
              <p>Learn the basics and get up to speed</p>
            </div>
            <div className="topic-card">
              <h3>Account Settings</h3>
              <p>Manage your account and preferences</p>
            </div>
            <div className="topic-card">
              <h3>Troubleshooting</h3>
              <p>Solutions to common problems</p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="help-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>How do I reset my password?</summary>
              <p>You can reset your password by clicking on the "Forgot Password" link on the login page...</p>
            </details>
            <details className="faq-item">
              <summary>How can I contact support?</summary>
              <p>Our support team is available 24/7 through email and chat...</p>
            </details>
            <details className="faq-item">
              <summary>What payment methods do you accept?</summary>
              <p>We accept all major credit cards, PayPal, and bank transfers...</p>
            </details>
          </div>
        </section>

        {/* Contact Support */}
        <section className="help-section">
          <h2>Still Need Help?</h2>
          <div className="contact-options">
            <div className="contact-card">
              <h3>Email Support</h3>
              <p>Get in touch with our support team</p>
              <button className="contact-button">Send Email</button>
            </div>
            <div className="contact-card">
              <h3>Live Chat</h3>
              <p>Chat with our support representatives</p>
              <button className="contact-button">Start Chat</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
