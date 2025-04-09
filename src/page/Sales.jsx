import React from 'react';
import './Sales.css';

export default function Sales() {
  return (
    <div className="sales-container">
      <h1>Sales and Pricing</h1>
      <div className="pricing-table">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <br />
          <p>$0 / month</p>
          <ul>
            <li>1 Resume Template</li>
            <li>Basic Support</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h2>Pro Plan</h2>
          <p>$9.99 / month</p>
          <ul>
            <li>10 Resume Templates</li>
            <li>Priority Support</li>
            <li>Customizable Templates</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p>$19.99 / month</p>
          <ul>
            <li>Unlimited Resume Templates</li>
        
            <li>Advanced Customization</li>
            <li>Access to New Features</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
}