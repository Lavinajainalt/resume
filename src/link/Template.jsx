import React, { useState } from 'react';
import './Template.css';
import Screens from '../image/Screens.jpeg';
import Alltemplate from '../Templates/Alltemplate';
import Simple from '../Templates/Simple';
import Professional from '../Templates/Professional';
import Modern from '../Templates/Modern';

const TEMPLATE_TYPES = {
  ALL: 'Alltemplate',
  SIMPLE: 'Simple',
  PROFESSIONAL: 'Professional',
  MODERN: 'Modern'
};

const TEMPLATE_COMPONENTS = {
  [TEMPLATE_TYPES.ALL]: Alltemplate,
  [TEMPLATE_TYPES.SIMPLE]: Simple,
  [TEMPLATE_TYPES.PROFESSIONAL]: Professional,
  [TEMPLATE_TYPES.MODERN]: Modern,
};

const NAVIGATION_ITEMS = [
  { type: TEMPLATE_TYPES.ALL, label: 'All Templates' },
  { type: TEMPLATE_TYPES.SIMPLE, label: 'Simple' },
  { type: TEMPLATE_TYPES.PROFESSIONAL, label: 'Professional' },
  { type: TEMPLATE_TYPES.MODERN, label: 'Modern' },
];

export default function Template() {
  const [activeTemplate, setActiveTemplate] = useState(TEMPLATE_TYPES.ALL);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!formData.email || !formData.password) {
        throw new Error('Please fill in all fields');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    setFormData({ email: '', password: '' });
  };

  const renderTemplate = () => {
    const TemplateComponent = TEMPLATE_COMPONENTS[activeTemplate];
    return <TemplateComponent />;
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login to Access Templates</h2>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <div className="form-footer">
            <p>Don't have an account? <span>Sign up</span></p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <main className="temp">
      <div className="header-with-logout">
        <section className="templ">
          <div className="templ1">
            <h1>Choose a Template</h1>
            <p>Get started with one of our pre-designed templates or create your own.</p>
          </div>

          <div className="templ2">
            <h1>Build a professional resume in 3 simple steps.</h1>
            <p>
              With ResumeLab's builder, making a resume online is intuitive and easy. 
              We'll help you build a professional job application step by step:
            </p>
          </div>

          <div className="step">
            <img 
              src={Screens} 
              alt="Resume building steps visualization" 
              loading="lazy"
            />
          </div>
        </section>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <nav className="temnavbar">
        <div className="templ-one">
          {NAVIGATION_ITEMS.map(item => (
            <button 
              key={item.type}
              className={`nav-button ${activeTemplate === item.type ? 'active' : ''}`}
              onClick={() => setActiveTemplate(item.type)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="template-content">
        {renderTemplate()}
      </section>
    </main>
  );
}
