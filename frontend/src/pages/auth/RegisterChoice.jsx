import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import userImg from '../../assets/user.png';
import partnerImg from '../../assets/delivery-man.png';

const ArrowIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RegisterChoice = () => {
  return (
    <main className="register-hero" role="main">
      <div className="register-container auth-card">
        <header className="register-hero__header">
          <div>
            <h1 className="hero-title">Welcome to Foodiez</h1>
            <p className="hero-sub">Sign up to order delicious food or join as a partner and grow your business.</p>
          </div>
          <div className="hero-badges" aria-hidden>
            <span className="badge">Fast onboarding</span>
            <span className="badge">Secure</span>
            <span className="badge">24/7 support</span>
          </div>
        </header>

        <section className="choice-grid" role="navigation" aria-label="register choices">
          {/* User Card */}
          <article className="choice-card" aria-labelledby="user-title">
            <div className="choice-media">
              <img src={userImg} alt="User signing up" className="choice-img" />
            </div>

            <div className="choice-body">
              <h3 id="user-title" className="choice-title">Register as a User</h3>
              <p className="choice-desc">Order food in seconds, save favourites, and track deliveries — perfect for busy days.</p>
              <div className="choice-cta">
                <Link to="/user/register" className="btn btn-primary">
                  Get Started
                  <ArrowIcon className="btn-icon" />
                </Link>
                <Link to="/user/login" className="btn btn-ghost">I already have an account</Link>
              </div>
            </div>
          </article>

          {/* Partner Card */}
          <article className="choice-card" aria-labelledby="partner-title">
            <div className="choice-media">
              <img src={partnerImg} alt="Partner registering" className="choice-img" />
            </div>

            <div className="choice-body">
              <h3 id="partner-title" className="choice-title">Register as a Food Partner</h3>
              <p className="choice-desc">List your menu, manage orders, and reach hungry customers in your area.</p>
              <div className="choice-cta">
                <Link to="/food-partner/register" className="btn btn-primary">
                  Join as Partner
                  <ArrowIcon className="btn-icon" />
                </Link>
                <Link to="/food-partner/login" className="btn btn-ghost">Partner login</Link>
              </div>
            </div>
          </article>
        </section>

        <footer className="register-legal">
          <small>By continuing you agree to our <Link className="link" to="/terms">Terms</Link> and <Link className="link" to="/privacy">Privacy Policy</Link>.</small>
        </footer>
      </div>
    </main>
  );
};

export default RegisterChoice;
